/* Sprungbrett — factory demo.
 *
 * Plain script, no modules, no imports, no fetch, no network. Data arrives as
 * window.DATA from data.js, which is generated from data/*.json by build-data.js.
 *
 * Deterministic: no Math.random, no Date.now, no new Date anywhere that touches
 * output. The same card and the same three fields give the same rows every time.
 */
(function () {
  'use strict';

  var DATA = window.DATA;
  var PROFILES = DATA.profiles.profiles;
  var LISTINGS = DATA.listings.listings;
  var ARCHETYPES = DATA.archetypes.archetypes;
  var CREDENTIAL_MAP = DATA.credentialMap.professions;
  var QUESTIONS = DATA.contextMap.questions;
  var STRINGS = window.STRINGS;
  var KEYWORDS = DATA.contextMap.keywords;
  var SECTORS = DATA.listings.sectors;
  var CITIES = DATA.listings.cities;

  /* ---------------- scoring: the arithmetic, published on the page ---------- */

  var WEIGHTS = { level: 0.3, sector: 0.2, city: 0.18, seniority: 0.15, context: 0.17 };
  var THRESHOLD = 0.6;
  var MAX_ROWS = 8;

  var LEVEL_INDEX = { none: 0, A2: 2, B1: 3, B2: 4, C1: 5 };
  var LEVEL_CHOICES = ['A2', 'B1', 'B2', 'C1'];
  var SENIORITY_INDEX = { junior: 1, mid: 2, senior: 3 };

  function levelIndex(level) {
    return Object.prototype.hasOwnProperty.call(LEVEL_INDEX, level) ? LEVEL_INDEX[level] : 0;
  }

  function speaks(languages, name) {
    for (var i = 0; i < languages.length; i++) {
      if (languages[i] === name) { return true; }
    }
    return false;
  }

  /* Language fit: what the advert asks for in German, adjusted by the language the
     job is actually worked in. An English-only post is only open to you if you
     work in English, and a bilingual team forgives some of a German shortfall. */
  function scoreLevelFit(profileLevel, listing, languages) {
    var working = listing.working_language;
    var hasEnglish = speaks(languages, 'English');

    if (listing.german_level_mapped === 'none') {
      /* No German asked for: the post runs in its working language. */
      return hasEnglish ? 1 : 0.2;
    }

    var gap = levelIndex(listing.german_level_mapped) - levelIndex(profileLevel);
    var base = gap <= 0 ? 1 : (gap === 1 ? 0.5 : (gap === 2 ? 0.15 : 0));

    if (working === 'German and English' && hasEnglish && base < 0.75) {
      /* Half the working day is in a language this person already has. */
      base = 0.75;
    }
    return base;
  }

  /* Context fit: the answers the person volunteered, against what the listing
     actually requires. Unanswered is 0.6 for a constrained listing, because not
     knowing is not the same as a no. A listing that requires nothing scores 1.
     The binding constraint wins, so this is a minimum rather than an average. */
  function scoreContextFit(listing, facts) {
    var parts = [];

    if (listing.requires_shift_work) {
      parts.push(facts.shift_work === true ? 1 : (facts.shift_work === false ? 0.15 : 0.6));
    }
    if (listing.requires_licence) {
      parts.push(facts.licence === true ? 1 : (facts.licence === false ? 0.2 : 0.6));
    }
    if (listing.contract_type === 'fixed_term') {
      parts.push(facts.fixed_term === true ? 1 : (facts.fixed_term === false ? 0.3 : 0.7));
    }
    /* Preferences only ever come from a note, and only ever narrow. */
    if (facts.part_time === true) { parts.push(listing.part_time_possible ? 1 : 0.75); }
    if (facts.remote === true) { parts.push(listing.remote_possible ? 1 : 0.75); }

    if (!parts.length) { return 1; }
    var min = parts[0];
    for (var i = 1; i < parts.length; i++) { if (parts[i] < min) { min = parts[i]; } }
    return min;
  }

  function scoreSectorFit(chosenSector, listingSector) {
    return listingSector === chosenSector ? 1 : 0.25;
  }

  function scoreCityFit(chosenCity, listingCity, facts) {
    if (listingCity === chosenCity) { return 1; }
    /* Willing to move: another city stops being a penalty. */
    return facts && facts.mobility === true ? 0.8 : 0.4;
  }

  function scoreSeniorityFit(profileBand, listingBand) {
    var d = Math.abs(SENIORITY_INDEX[profileBand] - SENIORITY_INDEX[listingBand]);
    if (d === 0) { return 1; }
    if (d === 1) { return 0.6; }
    return 0.3;
  }

  function round4(n) { return Math.round(n * 10000) / 10000; }

  function sectorLabel(key) {
    for (var i = 0; i < SECTORS.length; i++) {
      if (SECTORS[i].key === key) { return SECTORS[i].label; }
    }
    return key;
  }

  function archetypesFor(profile) {
    var out = [];
    for (var i = 0; i < profile.archetype_ids.length; i++) {
      for (var j = 0; j < ARCHETYPES.length; j++) {
        if (ARCHETYPES[j].archetype_id === profile.archetype_ids[i]) { out.push(ARCHETYPES[j]); }
      }
    }
    return out;
  }

  function archetypeForListing(archetypes, listing) {
    for (var i = 0; i < archetypes.length; i++) {
      if (archetypes[i].role_families.indexOf(listing.role_family) !== -1) { return archetypes[i]; }
    }
    return null;
  }

  function seniorityWord(profileBand, listingBand) {
    var d = Math.abs(SENIORITY_INDEX[profileBand] - SENIORITY_INDEX[listingBand]);
    if (d === 0) { return 'seniority matches'; }
    if (d === 1) { return 'one seniority band away'; }
    return 'two seniority bands away';
  }

  /* The facts the page is allowed to use: four answers, plus whatever literal
     keyword match a free-text note produces. No model, no inference. */
  function factsFrom(answers, notes) {
    var facts = {};
    for (var q = 0; q < QUESTIONS.length; q++) {
      var a = answers[QUESTIONS[q].question_id];
      if (a === 'yes') { facts[QUESTIONS[q].fact] = true; }
      else if (a === 'no') { facts[QUESTIONS[q].fact] = false; }
    }
    for (var n = 0; n < notes.length; n++) {
      var text = String(notes[n]).toLowerCase();
      for (var k = 0; k < KEYWORDS.length; k++) {
        for (var m = 0; m < KEYWORDS[k].match.length; m++) {
          if (text.indexOf(KEYWORDS[k].match[m]) !== -1) {
            /* An explicit no from a question is not overridden by a note. */
            if (facts[KEYWORDS[k].fact] === undefined) { facts[KEYWORDS[k].fact] = KEYWORDS[k].value; }
          }
        }
      }
    }
    return facts;
  }

  /* Which notes actually matched something, so the page can be honest about
     the ones that did not. */
  function matchedFacts(note) {
    var text = String(note).toLowerCase();
    var hits = [];
    for (var k = 0; k < KEYWORDS.length; k++) {
      for (var m = 0; m < KEYWORDS[k].match.length; m++) {
        if (text.indexOf(KEYWORDS[k].match[m]) !== -1 && hits.indexOf(KEYWORDS[k].fact) === -1) {
          hits.push(KEYWORDS[k].fact);
        }
      }
    }
    return hits;
  }

  /* Step 4: score every listing. Arithmetic only. */
  function scoreListings(profile, fields, facts) {
    var archetypes = archetypesFor(profile);
    var credentialPathId = CREDENTIAL_MAP[profile.profession_key].credential_path_id;
    var rows = [];

    for (var i = 0; i < LISTINGS.length; i++) {
      var l = LISTINGS[i];
      var arch = archetypeForListing(archetypes, l);
      var levelFit = scoreLevelFit(fields.german_level, l, fields.languages);
      var sectorFit = scoreSectorFit(fields.sector, l.sector);
      var cityFit = scoreCityFit(fields.city, l.city, facts);
      var seniorityFit = scoreSeniorityFit(profile.seniority_band, l.seniority_band);
      var contextFit = scoreContextFit(l, facts);
      var total = round4(
        levelFit * WEIGHTS.level + sectorFit * WEIGHTS.sector +
        cityFit * WEIGHTS.city + seniorityFit * WEIGHTS.seniority +
        contextFit * WEIGHTS.context
      );

      rows.push({
        listing: l,
        archetype: arch,
        archetype_id: arch ? arch.archetype_id : '',
        credential_path_id: credentialPathId,
        score_level_fit: round4(levelFit),
        score_sector_fit: round4(sectorFit),
        score_city_fit: round4(cityFit),
        score_seniority_fit: round4(seniorityFit),
        score_context_fit: round4(contextFit),
        total: total,
        shortlisted: false,
        reason: ''
      });
    }

    /* Deterministic order: score first, listing_id as the tie-break. */
    rows.sort(function (a, b) {
      if (b.total !== a.total) { return b.total - a.total; }
      return a.listing.listing_id < b.listing.listing_id ? -1 : 1;
    });

    var taken = 0;
    for (var k = 0; k < rows.length; k++) {
      var r = rows[k];
      var eligible = r.archetype !== null && r.total >= THRESHOLD;
      if (eligible && taken < MAX_ROWS) { r.shortlisted = true; taken++; }
      r.reason = buildReason(r, profile, fields, eligible);
    }
    return rows;
  }

  function buildReason(row, profile, fields, eligible) {
    var l = row.listing;
    if (!row.archetype) {
      return 'Outside the three derived archetypes (role family ' + l.role_family + ').';
    }
    var lang;
    if (l.german_level_mapped === 'none') {
      lang = speaks(fields.languages, 'English')
        ? 'worked in English, which you have'
        : 'worked in English, which is not on your list';
    } else {
      lang = 'asks German ' + l.german_level_mapped + ', you have ' + fields.german_level;
      if (l.working_language === 'German and English' && speaks(fields.languages, 'English')) {
        lang += ', and the team also works in English';
      }
    }
    var city = l.city === fields.city ? l.city + ' match' : 'outside ' + fields.city;
    var sector = l.sector === fields.sector
      ? sectorLabel(l.sector) + ' match'
      : 'other sector (' + sectorLabel(l.sector) + ')';
    var body = row.archetype.label + '; ' + lang + '; ' + city + '; ' + sector + '; ' +
      seniorityWord(profile.seniority_band, l.seniority_band) + '.';
    if (row.shortlisted) { return body; }
    if (!eligible) { return 'Below the line at ' + row.total.toFixed(2) + ' (threshold ' + THRESHOLD.toFixed(2) + '): ' + body; }
    return 'Above the threshold but outside the top ' + MAX_ROWS + ' at ' + row.total.toFixed(2) + ': ' + body;
  }

  /* Step 5: find the gaps. Also arithmetic: a comparison, run at run time. */
  function languageDuration(steps) {
    if (steps <= 1) { return 'typically 3-6 months of course time'; }
    if (steps === 2) { return 'typically 6-12 months of course time'; }
    return 'typically 12 months or more of course time';
  }

  function computeGaps(profile, fields, facts) {
    var archetypes = archetypesFor(profile);
    var held = (profile.held_credential_ids || []).slice();
    /* An answer can close a gap: the driving licence is the one that does. */
    if (facts.licence === true && held.indexOf('cert-fuehrerschein-umschreibung') === -1) {
      held.push('cert-fuehrerschein-umschreibung');
    }
    var rows = [];

    for (var i = 0; i < archetypes.length; i++) {
      var arch = archetypes[i];
      var req = arch.requirements;

      var need = levelIndex(req.german_level_required);
      var have = levelIndex(fields.german_level);
      if (have < need) {
        var lp = req.language_programme;
        rows.push({
          archetype_id: arch.archetype_id,
          archetype_label: arch.label,
          gap_type: 'language',
          item: 'German ' + req.german_level_required + ' — you have ' + fields.german_level +
                (lp ? '. Route: ' + lp.item : ''),
          provider: lp ? lp.provider : '',
          why: req.german_why + (lp ? ' ' + lp.why : ''),
          caveat: lp && lp.caveat ? lp.caveat : '',
          typical_duration: languageDuration(need - have),
          next_step: lp ? lp.next_step : 'Take a placement test at a licensed provider and book the level it puts you in.',
          url: lp ? lp.url : '',
          url_checked_on: lp ? lp.url_checked_on : ''
        });
      }

      if (req.recognition && req.recognition.required && profile.recognition_status === 'not_started') {
        rows.push({
          archetype_id: arch.archetype_id,
          archetype_label: arch.label,
          gap_type: req.recognition.gap_type,
          item: req.recognition.item,
          why: req.recognition.why,
          typical_duration: req.recognition.typical_duration,
          next_step: req.recognition.next_step
        });
      }

      for (var c = 0; c < req.credentials.length; c++) {
        var cred = req.credentials[c];
        if (held.indexOf(cred.credential_id) !== -1) { continue; }
        rows.push({
          archetype_id: arch.archetype_id,
          archetype_label: arch.label,
          gap_type: cred.gap_type,
          item: cred.item,
          provider: cred.provider || '',
          why: cred.why,
          caveat: (cred.caveat || '') + (cred.duration_note ? ' ' + cred.duration_note : ''),
          typical_duration: cred.typical_duration || '',
          next_step: cred.next_step,
          url: cred.url || '',
          url_checked_on: cred.url_checked_on || ''
        });
      }
    }
    return rows;
  }

  /* Step 6, third output: who to approach. Roles and organisation types only. */
  function computeOutreach(profile, fields, scored) {
    var archetypes = archetypesFor(profile);
    var rows = [];

    for (var i = 0; i < archetypes.length; i++) {
      var arch = archetypes[i];
      var seen = [];
      for (var s = 0; s < scored.length; s++) {
        var r = scored[s];
        if (!r.shortlisted || r.archetype_id !== arch.archetype_id) { continue; }
        if (seen.indexOf(r.listing.employer) !== -1) { continue; }
        seen.push(r.listing.employer);
        rows.push({
          archetype_id: arch.archetype_id,
          archetype_label: arch.label,
          target_type: 'role',
          target: arch.approach_role,
          organisation: r.listing.employer,
          meta: r.listing.city,
          why: 'this is the role that decides on these posts.'
        });
      }
      for (var o = 0; o < arch.outreach.length; o++) {
        var t = arch.outreach[o];
        rows.push({
          archetype_id: arch.archetype_id,
          archetype_label: arch.label,
          target_type: t.target_type,
          target: t.target.replace('of the city', 'in ' + fields.city),
          organisation: t.organisation.replace('in every German city', 'in every German city, so also in ' + fields.city),
          meta: t.target_type,
          why: t.why
        });
      }
    }
    return rows;
  }

  /* ---------------- CSV and JSON files ------------------------------------- */

  var SHORTLIST_COLUMNS = [
    'listing_id', 'title', 'employer', 'city', 'sector', 'language_requirement_text',
    'german_level_mapped', 'working_language', 'visa_sponsorship_stated',
    'archetype_id', 'credential_path_id', 'score_level_fit', 'score_sector_fit',
    'score_city_fit', 'score_seniority_fit', 'score_context_fit', 'shortlisted',
    'reason', 'synthetic'
  ];
  var GAPS_COLUMNS = ['archetype_id', 'gap_type', 'item', 'provider', 'why', 'caveat',
    'typical_duration', 'next_step', 'url', 'url_checked_on', 'synthetic'];
  var OUTREACH_COLUMNS = ['archetype_id', 'target_type', 'target', 'organisation', 'why', 'synthetic'];

  function csvCell(value) {
    var s = String(value);
    if (s.indexOf('"') !== -1 || s.indexOf(',') !== -1 || s.indexOf('\n') !== -1) {
      return '"' + s.split('"').join('""') + '"';
    }
    return s;
  }

  function csvFrom(columns, records) {
    var lines = [columns.join(',')];
    for (var i = 0; i < records.length; i++) {
      var cells = [];
      for (var c = 0; c < columns.length; c++) { cells.push(csvCell(records[i][columns[c]])); }
      lines.push(cells.join(','));
    }
    return lines.join('\n') + '\n';
  }

  function shortlistCsv(state) {
    var records = [];
    for (var i = 0; i < state.scored.length; i++) {
      var r = state.scored[i];
      var l = r.listing;
      records.push({
        listing_id: l.listing_id, title: l.title, employer: l.employer, city: l.city,
        sector: l.sector, language_requirement_text: l.language_requirement_text,
        german_level_mapped: l.german_level_mapped, working_language: l.working_language,
        visa_sponsorship_stated: l.visa_sponsorship_stated,
        archetype_id: r.archetype_id, credential_path_id: r.credential_path_id,
        score_level_fit: r.score_level_fit, score_sector_fit: r.score_sector_fit,
        score_city_fit: r.score_city_fit, score_seniority_fit: r.score_seniority_fit,
        score_context_fit: r.score_context_fit,
        shortlisted: r.shortlisted, reason: r.reason, synthetic: true
      });
    }
    return csvFrom(SHORTLIST_COLUMNS, records);
  }

  function gapsCsv(state) {
    var records = [];
    for (var i = 0; i < state.gaps.length; i++) {
      var g = state.gaps[i];
      records.push({
        archetype_id: g.archetype_id, gap_type: g.gap_type, item: g.item,
        provider: g.provider || '', why: g.why, caveat: g.caveat || '',
        typical_duration: g.typical_duration || '', next_step: g.next_step,
        url: g.url || '', url_checked_on: g.url_checked_on || '', synthetic: true
      });
    }
    return csvFrom(GAPS_COLUMNS, records);
  }

  function outreachCsv(state) {
    var records = [];
    for (var i = 0; i < state.outreach.length; i++) {
      var o = state.outreach[i];
      records.push({
        archetype_id: o.archetype_id, target_type: o.target_type, target: o.target,
        organisation: o.organisation, why: o.why, synthetic: true
      });
    }
    return csvFrom(OUTREACH_COLUMNS, records);
  }

  function profileJson(state) {
    var p = state.profile;
    return JSON.stringify({
      schema_version: 1,
      step: '1 - read profile (recorded)',
      profile_id: p.profile_id,
      profession: p.profession,
      qualification: p.qualification,
      years_experience: p.years_experience,
      roles_count: p.roles_count,
      languages_count: p.languages_count,
      languages: p.languages,
      languages_selected: state.fields.languages,
      seniority_band: p.seniority_band,
      recognition_status: p.recognition_status,
      held_credential_ids: p.held_credential_ids,
      fields_on_the_card: state.fields,
      context_answers: state.answers,
      notes: state.notes,
      facts_derived: state.facts,
      omitted_on_purpose: ['name', 'age', 'country of origin', 'employer history'],
      synthetic: true
    }, null, 2) + '\n';
  }

  function credentialsJson(state) {
    var entry = CREDENTIAL_MAP[state.profile.profession_key];
    return JSON.stringify({
      schema_version: 1,
      step: '2 - check credentials (recorded)',
      profession_key: state.profile.profession_key,
      credential_path_id: entry.credential_path_id,
      regulated: entry.regulated,
      regulated_note: entry.regulated_note,
      reference_occupation: entry.reference_occupation,
      authority: entry.authority,
      next_step: entry.next_step,
      equivalence_verdict: entry.equivalence_verdict,
      zab_note: entry.zab_note,
      source_url: entry.source_url,
      disclaimer: DATA.credentialMap.disclaimer
    }, null, 2) + '\n';
  }

  function archetypesJson(state) {
    var list = archetypesFor(state.profile);
    var out = [];
    for (var i = 0; i < list.length; i++) {
      out.push({
        archetype_id: list[i].archetype_id,
        label: list[i].label,
        reason: list[i].reason,
        role_families: list[i].role_families,
        requirements: list[i].requirements,
        synthetic: true
      });
    }
    return JSON.stringify({
      schema_version: 1,
      step: '3 - derive archetypes (recorded)',
      profile_id: state.profile.profile_id,
      archetypes: out,
      synthetic: true
    }, null, 2) + '\n';
  }

  function scoredJson(state) {
    var rows = [];
    for (var i = 0; i < state.scored.length; i++) {
      var r = state.scored[i];
      rows.push({
        listing_id: r.listing.listing_id,
        title: r.listing.title,
        employer: r.listing.employer,
        city: r.listing.city,
        sector: r.listing.sector,
        german_level_mapped: r.listing.german_level_mapped,
        archetype_id: r.archetype_id,
        credential_path_id: r.credential_path_id,
        score_level_fit: r.score_level_fit,
        score_sector_fit: r.score_sector_fit,
        score_city_fit: r.score_city_fit,
        score_seniority_fit: r.score_seniority_fit,
        score_context_fit: r.score_context_fit,
        weighted_total: r.total,
        shortlisted: r.shortlisted,
        reason: r.reason,
        synthetic: true
      });
    }
    return JSON.stringify({
      schema_version: 1,
      step: '4 - score listings (computed)',
      profile_id: state.profile.profile_id,
      fields: state.fields,
      facts: state.facts,
      weights: WEIGHTS,
      threshold: THRESHOLD,
      max_rows_shown: MAX_ROWS,
      listings_scored: rows.length,
      rows: rows
    }, null, 2) + '\n';
  }

  var FILES = {
    'profile.json':   { build: profileJson,    mime: 'application/json' },
    'credentials.json': { build: credentialsJson, mime: 'application/json' },
    'archetypes.json': { build: archetypesJson, mime: 'application/json' },
    'scored.json':    { build: scoredJson,     mime: 'application/json' },
    'gaps.csv':       { build: gapsCsv,        mime: 'text/csv' },
    'outreach.csv':   { build: outreachCsv,    mime: 'text/csv' },
    'shortlist.csv':  { build: shortlistCsv,   mime: 'text/csv' }
  };

  /* ---------------- handing files over, from a file:// path ---------------- */

  var statusEl, fallbackWrap, fallbackEl, fallbackLabel;

  function say(message) { if (statusEl) { statusEl.textContent = message; } }

  function showFallback(filename, text, note) {
    fallbackLabel.textContent = note + ' The text of ' + filename + ' is below: select it and copy.';
    fallbackEl.value = text;
    fallbackWrap.hidden = false;
    fallbackEl.focus();
    fallbackEl.select();
  }

  function downloadFile(filename) {
    var text = FILES[filename].build(STATE);
    try {
      var blob = new Blob([text], { type: FILES[filename].mime + ';charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      say('Downloaded ' + filename + ' (' + text.length + ' characters).');
      fallbackWrap.hidden = true;
    } catch (err) {
      showFallback(filename, text, 'The browser refused the download from a file path.');
      say('Download blocked for ' + filename + ' — the text is below instead.');
    }
  }

  function copyFile(filename) {
    var text = FILES[filename].build(STATE);
    var done = function () {
      say('Copied ' + filename + ' to the clipboard (' + text.length + ' characters).');
      fallbackWrap.hidden = true;
    };
    var legacy = function () {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', 'readonly');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (ok) { done(); } else {
        showFallback(filename, text, 'The clipboard is not available here.');
        say('Could not reach the clipboard for ' + filename + ' — the text is below instead.');
      }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, legacy);
    } else {
      legacy();
    }
  }

  /* ---------------- state ---------------------------------------------------*/

  var STATE = {
    profile: null, fields: null, scored: [], gaps: [], outreach: [],
    answers: {}, notes: [], facts: {}
  };
  var openStation = 3;

  function recompute() {
    STATE.facts = factsFrom(STATE.answers, STATE.notes);
    STATE.scored = scoreListings(STATE.profile, STATE.fields, STATE.facts);
    STATE.gaps = computeGaps(STATE.profile, STATE.fields, STATE.facts);
    STATE.outreach = computeOutreach(STATE.profile, STATE.fields, STATE.scored);
  }


  /* ---------------- rendering ---------------------------------------------- */

  function el(tag, className, text) {
    var n = document.createElement(tag);
    if (className) { n.className = className; }
    if (text !== undefined && text !== null) { n.textContent = text; }
    return n;
  }

  function shortName(profile) {
    return profile.profession.split(',')[0];
  }

  function highlight(id) {
    var node = document.getElementById(id);
    if (!node) { return; }
    node.classList.remove('changed');
    /* reading offsetWidth restarts the animation; it is layout, not output */
    void node.offsetWidth;
    node.classList.add('changed');
  }

  var LANGUAGE_OPTIONS = ['English', 'French', 'Spanish', 'Polish', 'Turkish', 'Russian'];

  /* ---------------- interface language ------------------------------------ */

  var LANG = STRINGS.fallback;
  var STORE_KEY = 'sprungbrett.lang';

  function t(key) {
    var table = STRINGS.t[LANG] || STRINGS.t[STRINGS.fallback];
    if (table && table[key] !== undefined) { return table[key]; }
    return STRINGS.t[STRINGS.fallback][key];
  }

  function questionText(id) {
    var table = STRINGS.t[LANG] || {};
    if (table.questions && table.questions[id]) { return table.questions[id]; }
    var fb = STRINGS.t[STRINGS.fallback].questions;
    if (fb && fb[id]) { return fb[id]; }
    for (var i = 0; i < QUESTIONS.length; i++) {
      if (QUESTIONS[i].question_id === id) { return QUESTIONS[i].text; }
    }
    return id;
  }

  function langMeta(code) {
    for (var i = 0; i < STRINGS.languages.length; i++) {
      if (STRINGS.languages[i].code === code) { return STRINGS.languages[i]; }
    }
    return STRINGS.languages[0];
  }

  /* What the browser says, matched on the primary subtag only. This preselects
     and nothing else: no redirect, no silent content change. */
  function browserLang() {
    var nav = (window.navigator && (navigator.language || navigator.userLanguage)) || '';
    var primary = String(nav).toLowerCase().split('-')[0];
    for (var i = 0; i < STRINGS.languages.length; i++) {
      if (STRINGS.languages[i].code === primary) { return STRINGS.languages[i].code; }
    }
    return STRINGS.fallback;
  }

  function hasChosenLang() {
    try { return !!window.localStorage.getItem(STORE_KEY); } catch (e) { return false; }
  }

  function rememberLang(code) {
    try { window.localStorage.setItem(STORE_KEY, code); } catch (e) { /* private mode: fine */ }
  }
  function recallLang() {
    try {
      var v = window.localStorage.getItem(STORE_KEY);
      if (v && STRINGS.t[v]) { return v; }
    } catch (e) { /* fine */ }
    return null;
  }

  function setText(id, value) {
    var n = document.getElementById(id);
    if (n) { n.textContent = value; }
  }

  /* Re-labels the whole interface in place. State is untouched, so switching
     language never loses an answer or a result. */
  function applyLanguage(code) {
    LANG = STRINGS.t[code] ? code : STRINGS.fallback;
    var meta = langMeta(LANG);
    document.documentElement.setAttribute('lang', LANG);
    document.documentElement.setAttribute('dir', meta.dir);

    setText('s-headline', t('headline'));
    setText('s-lede', t('lede'));
    setText('signin-btn', t('signin'));
    setText('chooser-h', t('chooserTitle'));
    setText('s-questions-title', t('questionsTitle'));
    setText('s-questions-lede', t('questionsLede'));
    setText('s-otherlangs', t('otherLanguages'));
    setText('find', t('findRoles'));
    setText('s-col-role', t('colRole'));
    setText('s-col-employer', t('colEmployer'));
    setText('s-col-city', t('colCity'));
    setText('s-col-german', t('colGerman'));
    setText('s-col-fit', t('colFit'));
    setText('s-tellmore-title', t('tellMoreTitle'));
    setText('s-tellmore-lede', t('tellMoreLede'));
    setText('s-note-label', t('noteLabel'));
    setText('add-note', t('addNote'));
    setText('s-missing-title', t('missingTitle'));
    setText('s-missing-lede', t('missingLede'));
    setText('s-outreach-title', t('outreachTitle'));
    setText('s-outreach-lede', t('outreachLede'));
    setText('s-working', t('working'));
    setText('s-spy-roles', t('spyRoles'));
    setText('s-spy-missing', t('spyMissing'));
    setText('s-spy-outreach', t('spyOutreach'));
    setText('change-lang', t('changeLanguage'));
    var strip = document.getElementById('lang-strip');
    if (strip && !strip.hidden) { renderLangStrip(); }
    var sel = document.getElementById('lang');
    if (sel) { sel.value = LANG; }

    renderAccounts();
    renderGreeting();
    if (STATE.profile) {
      renderWhoami();
      renderQuestions();
      renderQA();
      renderChips();
      if (STATE_NAME === 'results') {
        renderResult();
        renderGaps();
        renderOutreach();
        renderSteps();
      }
    }
  }

  /* First visit gets the strip; a returning visitor gets the compact control. */
  function renderLangStrip() {
    var host = document.getElementById('lang-strip-row');
    host.textContent = '';
    for (var i = 0; i < STRINGS.languages.length; i++) {
      (function (lang) {
        var b = el('button', 'langopt');
        b.type = 'button';
        b.setAttribute('aria-pressed', lang.code === LANG ? 'true' : 'false');
        b.setAttribute('lang', lang.code);
        b.setAttribute('aria-label', lang.autonym + ' (' + lang.english + ')');
        var auto = el('span', 'auto',
          (STRINGS.config && STRINGS.config.showFlags ? lang.flag + ' ' : '') + lang.autonym);
        b.appendChild(auto);
        b.appendChild(el('span', 'eng', lang.english));
        b.addEventListener('click', function () {
          langChosen = true;
          applyLanguage(lang.code);
          rememberLang(lang.code);
          collapseStrip();
        });
        host.appendChild(b);
      })(STRINGS.languages[i]);
    }
  }

  function collapseStrip() {
    show('lang-strip', false);
    show('lang', true);
    document.getElementById('lang').value = LANG;
    document.getElementById('greeting').setAttribute('aria-expanded', 'false');
  }

  function toggleStrip() {
    var strip = document.getElementById('lang-strip');
    if (strip.hidden) { openStrip(); } else { closeStrip(); }
  }

  function closeStrip() {
    show('lang-strip', false);
    document.getElementById('greeting').setAttribute('aria-expanded', 'false');
  }

  function openStrip() {
    renderLangStrip();
    show('lang-strip', true);
    document.getElementById('greeting').setAttribute('aria-expanded', 'true');
    var first = document.querySelector('#lang-strip-row button[aria-pressed="true"]')
      || document.querySelector('#lang-strip-row button');
    if (first) { first.focus(); }
  }

  function renderLangSelect() {
    var sel = document.getElementById('lang');
    sel.textContent = '';
    for (var i = 0; i < STRINGS.languages.length; i++) {
      var o = el('option', null, STRINGS.languages[i].autonym);
      o.value = STRINGS.languages[i].code;
      if (STRINGS.languages[i].code === LANG) { o.selected = true; }
      sel.appendChild(o);
    }
    sel.addEventListener('change', function () {
      langChosen = true;
      applyLanguage(sel.value);
      rememberLang(sel.value);
    });
  }

  /* The greeting rotates; the headline does not. The only motion on the page
     that runs without the user doing anything, and it stops for anyone who
     asked for less of it. */
  var greetTimer = null, greetIndex = 0, greetPaused = false, langChosen = false;

  /* Each greeting carries its own lang, and Arabic its own dir, so a screen
     reader pronounces it correctly even when the page is in another language. */
  function paintGreeting(meta) {
    var node = document.getElementById('greeting-text');
    node.textContent = STRINGS.t[meta.code].greeting;
    node.setAttribute('lang', meta.code);
    node.setAttribute('dir', meta.dir);
    document.getElementById('greeting').setAttribute('aria-label', t('changeLanguage'));
  }

  function renderGreeting() {
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (greetTimer) { clearInterval(greetTimer); greetTimer = null; }
    /* Once a language is chosen the rotation stops: an animation that cycles to
       Ukrainian while the English chip is marked current contradicts itself. */
    if (reduced || langChosen) {
      paintGreeting(langMeta(LANG));
      return;
    }
    var node = document.getElementById('greeting-text');
    greetIndex = 0;
    paintGreeting(STRINGS.languages[0]);
    greetTimer = setInterval(function () {
      if (greetPaused) { return; }
      node.className = 'out';
      setTimeout(function () {
        greetIndex = (greetIndex + 1) % STRINGS.languages.length;
        paintGreeting(STRINGS.languages[greetIndex]);
        node.className = '';
      }, 250);
    }, 2500);
  }
  var STATE_NAME = 'signin';

  function show(id, on) {
    var n = document.getElementById(id);
    if (n) { n.hidden = !on; }
  }

  /* The three states stack down the page rather than replacing each other, so
     the whole thing reads as one scroll. Signing in reveals the questions
     below; running reveals the results below those. */
  function goTo(name) {
    STATE_NAME = name;
    show('whoami', name !== 'signin');
    show('spy', name === 'results');
    show('state-questions', name === 'questions' || name === 'results');
    show('state-results', name === 'results');
    reveal();
  }

  /* One entrance: fade and rise 8px as a section comes into view. */
  var revealObserver = null;
  function reveal() {
    var nodes = document.querySelectorAll('.reveal');
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !window.IntersectionObserver) {
      for (var i = 0; i < nodes.length; i++) { nodes[i].className += ' in'; }
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        for (var k = 0; k < entries.length; k++) {
          if (entries[k].isIntersecting) {
            entries[k].target.classList.add('in');
            revealObserver.unobserve(entries[k].target);
          }
        }
      }, { rootMargin: '0px 0px -8% 0px' });
    }
    for (var j = 0; j < nodes.length; j++) {
      if (nodes[j].className.indexOf(' in') === -1) { revealObserver.observe(nodes[j]); }
    }
  }

  function renderAccounts() {
    var list = document.getElementById('account-list');
    list.textContent = '';
    for (var i = 0; i < PROFILES.length; i++) {
      (function (p) {
        var li = el('li');
        var b = el('button');
        b.type = 'button';
        b.appendChild(el('span', 'who', p.profession));
        b.appendChild(el('span', 'meta',
          'qualified outside the EU \u00b7 ' + p.years_experience + ' ' + t('years')));
        b.addEventListener('click', function () { signIn(p); });
        li.appendChild(b);
        list.appendChild(li);
      })(PROFILES[i]);
    }
  }

  function otherLanguages(profile) {
    var out = [];
    for (var i = 0; i < profile.languages.length; i++) {
      if (profile.languages[i] !== 'German') { out.push(profile.languages[i]); }
    }
    return out;
  }

  function signIn(profile) {
    STATE.profile = profile;
    STATE.fields = {
      city: profile.defaults.city,
      german_level: profile.defaults.german_level,
      sector: profile.defaults.sector,
      languages: otherLanguages(profile)
    };
    renderWhoami();
    renderQuestions();
    renderQA();
    renderChips();
    goTo('questions');
    scrollTo('state-questions');
    document.getElementById('signin-btn').setAttribute('aria-expanded', 'false');
    show('chooser', false);
  }

  function renderWhoami() {
    var who = document.getElementById('whoami');
    if (!STATE.profile) { return; }
    who.textContent = '';
    who.appendChild(el('span', null,
      STATE.profile.profession + ', ' + STATE.profile.years_experience + ' ' + t('years')));
    var sw = el('button', 'btn-text quiet', t('switchAccount'));
    sw.type = 'button';
    sw.addEventListener('click', signOut);
    who.appendChild(sw);
  }

  function signOut() {
    STATE.profile = null;
    STATE.fields = null;
    STATE.scored = [];
    STATE.gaps = [];
    STATE.outreach = [];
    document.getElementById('signin-btn').setAttribute('aria-expanded', 'false');
    show('chooser', false);
    goTo('signin');
    document.getElementById('signin-btn').focus();
  }

  function scrollTo(id) {
    var n = document.getElementById(id);
    if (!n) { return; }
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    n.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }

  function renderQuestions() {
    var row = document.getElementById('qgrid');
    row.textContent = '';
    var sectorKeys = [];
    for (var s = 0; s < SECTORS.length; s++) { sectorKeys.push(SECTORS[s].key); }
    row.appendChild(selectFor('city', t('city'), CITIES, STATE.fields.city, function (v) { return v; }));
    row.appendChild(selectFor('german_level', t('germanLevel'), LEVEL_CHOICES, STATE.fields.german_level, function (v) { return v; }));
    row.appendChild(selectFor('sector', t('sector'), sectorKeys, STATE.fields.sector, sectorLabel));

    var langs = document.getElementById('langrow');
    langs.textContent = '';
    for (var i = 0; i < LANGUAGE_OPTIONS.length; i++) {
      (function (name) {
        var id = 'lang-' + name.toLowerCase();
        var lab = el('label');
        var cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.id = id;
        cb.checked = speaks(STATE.fields.languages, name);
        cb.addEventListener('change', function () {
          var next = [];
          for (var k = 0; k < LANGUAGE_OPTIONS.length; k++) {
            var box = document.getElementById('lang-' + LANGUAGE_OPTIONS[k].toLowerCase());
            if (box && box.checked) { next.push(LANGUAGE_OPTIONS[k]); }
          }
          STATE.fields.languages = next;
          if (STATE_NAME === 'results') { rerun(true); }
        });
        lab.appendChild(cb);
        lab.appendChild(document.createTextNode(name));
        langs.appendChild(lab);
      })(LANGUAGE_OPTIONS[i]);
    }
  }

  function selectFor(key, labelText, values, current, labeller) {
    var wrap = el('div', 'field');
    var id = 'f-' + key;
    var lab = el('label', null, labelText);
    lab.setAttribute('for', id);
    wrap.appendChild(lab);
    var sel = el('select');
    sel.id = id;
    for (var i = 0; i < values.length; i++) {
      var opt = el('option', null, labeller(values[i]));
      opt.value = values[i];
      if (values[i] === current) { opt.selected = true; }
      sel.appendChild(opt);
    }
    sel.addEventListener('change', function () {
      STATE.fields[key] = sel.value;
      if (STATE_NAME === 'results') { rerun(true); }
    });
    wrap.appendChild(sel);
    return wrap;
  }

  function findRoles() {
    recompute();
    renderResult();
    renderGaps();
    renderOutreach();
    renderSteps();
    renderExports();
    goTo('results');
  }

  /* Re-runs the computed steps in place and shows what moved. */
  function rerun(flash) {
    recompute();
    renderResult();
    renderGaps();
    renderOutreach();
    renderSteps();
    renderExports();
    if (flash) { highlight('results'); highlight('gaps'); highlight('outreach'); }
  }

  function dotsFor(total) {
    var filled = total >= 0.86 ? 3 : (total >= 0.72 ? 2 : 1);
    var word = filled === 3 ? t('fitStrong') : (filled === 2 ? t('fitGood') : t('fitPossible'));
    var wrap = el('div');
    var dots = el('span', 'dots');
    for (var i = 1; i <= 3; i++) {
      dots.appendChild(el('span', i <= filled ? null : 'off', '●'));
    }
    dots.setAttribute('aria-hidden', 'true');
    wrap.appendChild(dots);
    wrap.appendChild(el('span', 'fitword', word));
    return wrap;
  }

  function renderResult(fresh) {
    var body = document.getElementById('result-body');
    body.textContent = '';
    var above = 0;
    for (var i = 0; i < STATE.scored.length; i++) { if (STATE.scored[i].shortlisted) { above++; } }

    var shown = 0;
    for (var k = 0; k < STATE.scored.length && shown < MAX_ROWS; k++) {
      var r = STATE.scored[k];
      if (!r.shortlisted) { continue; }
      shown++;
      var tr = el('tr', fresh && fresh[r.listing.listing_id] ? 'fresh' : null);
      var tdRole = el('td');
      tdRole.appendChild(el('span', 'role', r.listing.title));
      tdRole.appendChild(el('span', 'why', r.reason));
      tr.appendChild(tdRole);
      tr.appendChild(el('td', null, r.listing.employer));
      tr.appendChild(el('td', null, r.listing.city));
      tr.appendChild(el('td', null, r.listing.german_level_mapped === 'none'
        ? 'none stated'
        : r.listing.german_level_mapped));
      var tdFit = el('td', 'num');
      tdFit.appendChild(dotsFor(r.total));
      tr.appendChild(tdFit);
      body.appendChild(tr);
    }

    var who = shortName(STATE.profile).toLowerCase() + ' in ' + STATE.fields.city +
      ' at German ' + STATE.fields.german_level;
    document.getElementById('result-caption').textContent = above === 0
      ? 'No roles above the line for a ' + who
      : (above === 1 ? '1 role for a ' + who : above + ' roles for a ' + who);
    document.getElementById('result-count').textContent = above === 0
      ? 'Nothing cleared the line for this combination. Try another city or sector, or a higher German ' +
        'level. All ' + STATE.scored.length + ' scored rows are still in shortlist.csv, with a reason on each.'
      : above + ' above the line, ' + (STATE.scored.length - above) + ' below. The German level shown is ' +
        'read off the advert’s wording, which has no CEFR definition.';
  }

  /* One row anatomy everywhere: primary line, secondary line, one meta.
     Bold happens once per row, on the name. */
  function rowNode(primary, sub, meta, metaIsType) {
    var li = el('li');
    var main = el('div', 'main');
    main.appendChild(el('div', 'primary', primary));
    if (sub) {
      var subNode = el('div', 'sub');
      if (typeof sub === 'string') { subNode.textContent = sub; }
      else { subNode.appendChild(sub); }
      main.appendChild(subNode);
    }
    li.appendChild(main);
    if (meta) { li.appendChild(el('div', 'meta' + (metaIsType ? ' type' : ''), meta)); }
    return li;
  }

  /* Caps a list at five rows behind a plain text button. */
  function cappedList(rows, limit) {
    var ul = el('ul', 'rows');
    var shown = rows.length <= limit ? rows.length : limit;
    var wrap = el('div');
    function paint(n) {
      ul.textContent = '';
      for (var i = 0; i < n && i < rows.length; i++) { ul.appendChild(rows[i]); }
    }
    paint(shown);
    wrap.appendChild(ul);
    if (rows.length > limit) {
      var more = el('button', 'btn-text showall', t('showAll') + ' (' + rows.length + ')');
      more.type = 'button';
      more.addEventListener('click', function () {
        paint(rows.length);
        more.parentNode.removeChild(more);
      });
      wrap.appendChild(more);
    }
    return wrap;
  }

  function renderGaps() {
    var host = document.getElementById('gaps-panel');
    host.textContent = '';
    var list = archetypesFor(STATE.profile);

    for (var a = 0; a < list.length; a++) {
      var arch = list[a];
      var group = el('div', 'group');
      group.appendChild(el('div', 'caption-head', arch.label));

      var rows = [];
      for (var g = 0; g < STATE.gaps.length; g++) {
        var gap = STATE.gaps[g];
        if (gap.archetype_id !== arch.archetype_id) { continue; }
        var sub = document.createDocumentFragment();
        if (gap.provider) { sub.appendChild(document.createTextNode(gap.provider + '. ')); }
        sub.appendChild(document.createTextNode(gap.why + ' '));
        if (gap.caveat) { sub.appendChild(document.createTextNode(gap.caveat + ' ')); }
        sub.appendChild(document.createTextNode(gap.next_step + ' '));
        if (gap.url) {
          var link = el('a', null, gap.url.replace(/^https?:\/\//, '').split('/')[0]);
          link.href = gap.url;
          link.setAttribute('rel', 'noreferrer');
          sub.appendChild(link);
        }
        rows.push(rowNode(gap.item, sub, gap.typical_duration));
      }
      if (!rows.length) {
        rows.push(rowNode('Nothing missing for this route.', null, null));
      }
      group.appendChild(cappedList(rows, 5));
      host.appendChild(group);
    }
  }

  function renderOutreach() {
    var host = document.getElementById('outreach-panel');
    host.textContent = '';
    var list = archetypesFor(STATE.profile);

    /* Group one: the role to approach at each shortlisted employer. */
    var roleGroup = el('div', 'subgroup');
    roleGroup.appendChild(el('div', 'caption-head', t('outreachRoles')));
    var roleRows = [];
    for (var a = 0; a < list.length; a++) {
      for (var o = 0; o < STATE.outreach.length; o++) {
        var r = STATE.outreach[o];
        if (r.archetype_id !== list[a].archetype_id || r.target_type !== 'role') { continue; }
        roleRows.push(rowNode(r.target, r.organisation + ' \u2014 ' + r.why, r.meta));
      }
    }
    roleGroup.appendChild(cappedList(roleRows, 5));
    host.appendChild(roleGroup);

    /* Group two: chambers, bodies and networks. */
    var orgGroup = el('div', 'subgroup');
    orgGroup.appendChild(el('div', 'caption-head', t('outreachOrgs')));
    var orgRows = [];
    for (var b2 = 0; b2 < list.length; b2++) {
      for (var p2 = 0; p2 < STATE.outreach.length; p2++) {
        var x = STATE.outreach[p2];
        if (x.archetype_id !== list[b2].archetype_id || x.target_type === 'role') { continue; }
        orgRows.push(rowNode(x.target, x.why, x.target_type, true));
      }
    }
    orgGroup.appendChild(cappedList(orgRows, 5));
    host.appendChild(orgGroup);
  }

  /* ---------------- tell us more ------------------------------------------ */

  function renderQA() {
    var host = document.getElementById('qa-rows');
    host.textContent = '';
    for (var i = 0; i < QUESTIONS.length; i++) {
      (function (q) {
        var answered = STATE.answers[q.question_id];
        var li = el('li', answered ? 'answered' : null);
        var main = el('div', 'main');
        main.appendChild(el('div', 'primary', questionText(q.question_id)));
        li.appendChild(main);

        var opts = el('div', 'opts');
        var choices = [['yes', t('yes')], ['no', t('no')], ['skip', t('skip')]];
        for (var c = 0; c < choices.length; c++) {
          (function (value, label) {
            var btn = el('button', 'opt', label);
            btn.type = 'button';
            btn.setAttribute('aria-pressed', answered === value ? 'true' : 'false');
            btn.addEventListener('click', function () {
              STATE.answers[q.question_id] = value;
              answerChanged();
            });
            opts.appendChild(btn);
          })(choices[c][0], choices[c][1]);
        }
        li.appendChild(opts);
        host.appendChild(li);
      })(QUESTIONS[i]);
    }
  }

  function renderChips() {
    var host = document.getElementById('chips');
    host.textContent = '';
    for (var i = 0; i < STATE.notes.length; i++) {
      (function (note, index) {
        var chip = el('span', 'chip');
        chip.appendChild(el('span', null, note));
        if (!matchedFacts(note).length) {
          chip.appendChild(el('span', 'nomatch', t('noteNoMatch')));
        }
        var x = el('button', null, '\u00d7');
        x.type = 'button';
        x.setAttribute('aria-label', t('removeNote') + ': ' + note);
        x.addEventListener('click', function () {
          chip.className = 'chip going';
          setTimeout(function () {
            STATE.notes.splice(index, 1);
            answerChanged();
          }, 200);
        });
        chip.appendChild(x);
        host.appendChild(chip);
      })(STATE.notes[i], i);
    }
  }

  /* Re-runs and reports the difference, rather than claiming one. */
  function answerChanged() {
    var before = {};
    var beforeGaps = STATE.gaps.length;
    for (var i = 0; i < STATE.scored.length; i++) {
      if (STATE.scored[i].shortlisted) { before[STATE.scored[i].listing.listing_id] = true; }
    }
    recompute();
    var fresh = {};
    var added = 0;
    for (var k = 0; k < STATE.scored.length; k++) {
      var r = STATE.scored[k];
      if (r.shortlisted && !before[r.listing.listing_id]) { fresh[r.listing.listing_id] = true; added++; }
    }
    renderResult(fresh);
    renderGaps();
    renderOutreach();
    renderSteps();
    renderExports();
    renderQA();
    renderChips();
    showDelta(added, beforeGaps - STATE.gaps.length);
  }

  var deltaTimer = null;
  function showDelta(added, gapsClosed) {
    var node = document.getElementById('delta-text');
    var parts = [];
    if (added > 0) { parts.push('+' + added + ' ' + (added === 1 ? t('deltaRole') : t('deltaRoles'))); }
    if (gapsClosed > 0) {
      parts.push(gapsClosed + ' ' + (gapsClosed === 1 ? t('deltaRequirement') : t('deltaRequirements')));
    }
    node.textContent = parts.length ? parts.join(' \u00b7 ') : t('deltaNothing');
    node.className = 'on';
    if (deltaTimer) { clearTimeout(deltaTimer); }
    deltaTimer = setTimeout(function () { node.className = ''; }, 2000);
  }

  var openStep = 0;  function stepDefinitions() {
    var p = STATE.profile;
    var entry = CREDENTIAL_MAP[p.profession_key];
    var above = 0;
    for (var i = 0; i < STATE.scored.length; i++) { if (STATE.scored[i].shortlisted) { above++; } }
    var below = STATE.scored.length - above;
    var archCount = p.archetype_ids.length;
    var list = archetypesFor(p);

    return [
      {
        n: 1, name: 'Read profile', file: 'profile.json',
        say: p.roles_count + ' roles, ' + p.years_experience + ' years, ' + p.languages_count + ' languages.',
        rows: [
          ['Profession', p.profession],
          ['Qualification', p.qualification],
          ['Years of experience', String(p.years_experience)],
          ['Roles recorded', String(p.roles_count)],
          ['Languages', String(p.languages_count)],
          ['Seniority band', p.seniority_band],
          ['Recognition status', p.recognition_status.split('_').join(' ')],
          ['Not recorded', 'No name, no age, no country of origin, no employer history. Origin appears only as "qualified outside the EU", and it never touches a score.']
        ]
      },
      {
        n: 2, name: 'Check credentials', file: 'credentials.json',
        say: (entry.regulated ? 'Regulated profession' : 'Not a regulated profession') + ', next step named.',
        rows: [
          ['Regulated', entry.regulated ? 'true' : 'false'],
          ['What that means', entry.regulated_note],
          ['Reference occupation', entry.reference_occupation],
          ['Authority', entry.authority],
          ['Next step', entry.next_step],
          ['Verdict on equivalence', entry.equivalence_verdict],
          ['On the ZAB statement', entry.zab_note],
          ['Source', entry.source_url]
        ]
      },
      {
        n: 3, name: 'Derive archetypes', file: 'archetypes.json',
        say: archCount + ' roles this person could plausibly land.',
        rows: (function () {
          var out = [];
          for (var a = 0; a < list.length; a++) { out.push([list[a].label, list[a].reason]); }
          return out;
        })()
      },
      {
        n: 4, name: 'Score listings', file: 'scored.json',
        say: STATE.scored.length + ' listings scored on 4 components.',
        rows: [
          ['Components', 'level fit, sector fit, city fit, seniority fit — kept apart, never blended away'],
          ['Weights', 'level ' + WEIGHTS.level + ', sector ' + WEIGHTS.sector + ', city ' + WEIGHTS.city + ', seniority ' + WEIGHTS.seniority],
          ['Threshold', THRESHOLD.toFixed(2) + ', at most ' + MAX_ROWS + ' rows shown'],
          ['Fields used', STATE.fields.city + ', German ' + STATE.fields.german_level + ', ' + sectorLabel(STATE.fields.sector)],
          ['Top row', STATE.scored.length ? STATE.scored[0].listing.title + ' at ' + STATE.scored[0].total.toFixed(2) : '—']
        ]
      },
      {
        n: 5, name: 'Find gaps', file: 'gaps.csv',
        say: STATE.gaps.length + ' missing items across ' + archCount + ' archetypes.',
        rows: (function () {
          var out = [];
          for (var a = 0; a < list.length; a++) {
            var counts = {}, order = [];
            for (var g = 0; g < STATE.gaps.length; g++) {
              if (STATE.gaps[g].archetype_id !== list[a].archetype_id) { continue; }
              var t = STATE.gaps[g].gap_type;
              if (!counts[t]) { counts[t] = 0; order.push(t); }
              counts[t]++;
            }
            var parts = [];
            for (var o = 0; o < order.length; o++) { parts.push(counts[order[o]] + ' ' + order[o]); }
            out.push([list[a].label, parts.length ? parts.join(', ') : 'nothing missing against the stated requirements']);
          }
          out.push(['How it is computed', 'The profile is compared against each archetype’s stated requirements: German level, whether a recognition step has been started, and the certificates and courses that archetype names.']);
          return out;
        })()
      },
      {
        n: 6, name: 'Assemble outputs', file: 'shortlist.csv',
        say: above + ' above the line, ' + below + ' below, three files out.',
        rows: [
          ['shortlist.csv', STATE.scored.length + ' rows, including the ones below the line, four score components kept apart'],
          ['gaps.csv', STATE.gaps.length + ' rows, grouped by archetype'],
          ['outreach.csv', STATE.outreach.length + ' rows: roles and organisation types, no people'],
          ['Schemas', 'shortlist.schema.json, gaps.schema.json, outreach.schema.json'],
          ['Also downloadable', 'the JSON behind steps 1 to 4']
        ]
      }
    ];
  }

  var openStep = 0;

  function renderSteps() {
    var host = document.getElementById('steps');
    host.textContent = '';
    var defs = stepDefinitions();

    for (var i = 0; i < defs.length; i++) {
      (function (d, index) {
        var row = el('div', 'step' + (index === 0 ? ' first' : ''));
        row.appendChild(el('div', 'stepnum', String(d.n)));

        var bodyCol = el('div', 'stepbody');
        var line = el('div');
        line.appendChild(el('span', 'stepname', d.name));
        line.appendChild(document.createTextNode(' '));
        line.appendChild(el('span', 'stepsay', d.say));
        bodyCol.appendChild(line);

        var acts = el('div', 'acts');
        acts.appendChild(el('span', 'file', d.file));
        var dl = el('button', 'quiet', 'Download');
        dl.type = 'button';
        dl.setAttribute('aria-label', 'Download ' + d.file);
        dl.addEventListener('click', function () { downloadFile(d.file); });
        acts.appendChild(dl);
        var cp = el('button', 'quiet', 'Copy');
        cp.type = 'button';
        cp.setAttribute('aria-label', 'Copy ' + d.file);
        cp.addEventListener('click', function () { copyFile(d.file); });
        acts.appendChild(cp);
        var sw = el('button', 'quiet', openStep === d.n ? 'Hide working' : 'Show working');
        sw.type = 'button';
        sw.setAttribute('aria-expanded', openStep === d.n ? 'true' : 'false');
        sw.addEventListener('click', function () {
          openStep = (openStep === d.n) ? 0 : d.n;
          renderSteps();
        });
        acts.appendChild(sw);
        bodyCol.appendChild(acts);

        if (openStep === d.n) {
          var work = el('div', 'work');
          for (var r = 0; r < d.rows.length; r++) {
            var pair = el('div');
            pair.appendChild(el('span', 'k', d.rows[r][0]));
            pair.appendChild(el('span', 'v', d.rows[r][1]));
            work.appendChild(pair);
          }
          bodyCol.appendChild(work);
        }

        row.appendChild(bodyCol);
        host.appendChild(row);
      })(defs[i], i);
    }
  }

  function firstLines(text, n) {
    var lines = text.split('\n');
    var out = [];
    for (var i = 0; i < n && i < lines.length; i++) { out.push(lines[i]); }
    return out.join('\n');
  }

  function wrapColumns(columns) {
    var lines = [];
    var current = '';
    for (var i = 0; i < columns.length; i++) {
      var piece = columns[i] + (i === columns.length - 1 ? '' : ', ');
      if (current.length + piece.length > 78) { lines.push(current); current = ''; }
      current += piece;
    }
    if (current) { lines.push(current); }
    return lines.join('\n');
  }

  function renderExports() {
    document.getElementById('shape-shortlist').textContent = wrapColumns(SHORTLIST_COLUMNS);
    document.getElementById('shape-gaps').textContent = wrapColumns(GAPS_COLUMNS);
    document.getElementById('shape-outreach').textContent = wrapColumns(OUTREACH_COLUMNS);
    document.getElementById('head-shortlist').textContent = firstLines(shortlistCsv(STATE), 2);
    document.getElementById('head-gaps').textContent = firstLines(gapsCsv(STATE), 2);
    document.getElementById('head-outreach').textContent = firstLines(outreachCsv(STATE), 2);
  }

  /* ---------------- boot ---------------------------------------------------- */

  statusEl = document.getElementById('export-status');
  fallbackWrap = document.getElementById('fallback-wrap');
  fallbackEl = document.getElementById('fallback');
  fallbackLabel = document.getElementById('fallback-label');

  var buttons = document.querySelectorAll('[data-download], [data-copy]');
  for (var b = 0; b < buttons.length; b++) {
    (function (btn) {
      var dl = btn.getAttribute('data-download');
      var cp = btn.getAttribute('data-copy');
      btn.addEventListener('click', function () {
        if (dl) { downloadFile(dl); } else { copyFile(cp); }
      });
    })(buttons[b]);
  }

  /* ---------------- scroll-spy -------------------------------------------- */

  function initSpy() {
    var links = document.querySelectorAll('#spy a');
    var ticking = false;
    function mark() {
      ticking = false;
      var best = null, bestTop = -Infinity;
      for (var i = 0; i < links.length; i++) {
        var id = links[i].getAttribute('href').slice(1);
        var sec = document.getElementById(id);
        if (!sec || sec.hidden) { continue; }
        var top = sec.getBoundingClientRect().top - 80;
        if (top <= 0 && top > bestTop) { bestTop = top; best = links[i]; }
      }
      if (!best && links.length) { best = links[0]; }
      for (var k = 0; k < links.length; k++) {
        var on = links[k] === best;
        links[k].className = on ? 'current' : '';
        /* location, not aria-selected: this says where you are in the page,
           it is not a tab or an option in a listbox. */
        if (on) { links[k].setAttribute('aria-current', 'location'); }
        else { links[k].removeAttribute('aria-current'); }
      }
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(mark); }
    });
    mark();
  }

  /* ---------------- boot --------------------------------------------------- */

  var chosen = recallLang();
  langChosen = !!chosen;
  applyLanguage(chosen || browserLang());
  renderLangSelect();
  renderLangStrip();
  if (chosen) {
    collapseStrip();
  } else {
    show('lang-strip', true);
    show('lang', false);
  }
  document.getElementById('change-lang').addEventListener('click', function () {
    openStrip();
    document.getElementById('greeting').scrollIntoView({ block: 'center' });
  });
  initSpy();

  var greet = document.getElementById('greeting');
  greet.addEventListener('click', toggleStrip);
  greet.addEventListener('mouseenter', function () { greetPaused = true; });
  greet.addEventListener('mouseleave', function () { greetPaused = false; });
  greet.addEventListener('focusin',  function () { greetPaused = true; });
  greet.addEventListener('focusout', function () { greetPaused = false; });

  document.getElementById('add-note').addEventListener('click', addNote);
  document.getElementById('note').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { e.preventDefault(); addNote(); }
  });

  function addNote() {
    var input = document.getElementById('note');
    var value = input.value.replace(/^\s+|\s+$/g, '');
    if (!value) { return; }
    STATE.notes.push(value);
    input.value = '';
    answerChanged();
  }

  document.getElementById('signin-btn').addEventListener('click', function () {
    var open = document.getElementById('chooser').hidden;
    show('chooser', open);
    this.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { document.querySelector('#account-list button').focus(); }
  });

  document.getElementById('find').addEventListener('click', function () {
    findRoles();
    scrollTo('results');
  });

  goTo('signin');
})();
