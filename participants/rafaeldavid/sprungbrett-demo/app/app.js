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
  var SECTORS = DATA.listings.sectors;
  var CITIES = DATA.listings.cities;

  /* ---------------- scoring: the arithmetic, published on the page ---------- */

  var WEIGHTS = { level: 0.35, sector: 0.25, city: 0.2, seniority: 0.2 };
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

  function scoreSectorFit(chosenSector, listingSector) {
    return listingSector === chosenSector ? 1 : 0.25;
  }

  function scoreCityFit(chosenCity, listingCity) {
    return listingCity === chosenCity ? 1 : 0.4;
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

  /* Step 4: score every listing. Arithmetic only. */
  function scoreListings(profile, fields) {
    var archetypes = archetypesFor(profile);
    var credentialPathId = CREDENTIAL_MAP[profile.profession_key].credential_path_id;
    var rows = [];

    for (var i = 0; i < LISTINGS.length; i++) {
      var l = LISTINGS[i];
      var arch = archetypeForListing(archetypes, l);
      var levelFit = scoreLevelFit(fields.german_level, l, fields.languages);
      var sectorFit = scoreSectorFit(fields.sector, l.sector);
      var cityFit = scoreCityFit(fields.city, l.city);
      var seniorityFit = scoreSeniorityFit(profile.seniority_band, l.seniority_band);
      var total = round4(
        levelFit * WEIGHTS.level + sectorFit * WEIGHTS.sector +
        cityFit * WEIGHTS.city + seniorityFit * WEIGHTS.seniority
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

  function computeGaps(profile, fields) {
    var archetypes = archetypesFor(profile);
    var held = profile.held_credential_ids || [];
    var rows = [];

    for (var i = 0; i < archetypes.length; i++) {
      var arch = archetypes[i];
      var req = arch.requirements;

      var need = levelIndex(req.german_level_required);
      var have = levelIndex(fields.german_level);
      if (have < need) {
        rows.push({
          archetype_id: arch.archetype_id,
          archetype_label: arch.label,
          gap_type: 'language',
          item: 'German ' + req.german_level_required + ' — the card currently says ' + fields.german_level,
          why: req.german_why,
          typical_duration: languageDuration(need - have),
          next_step: 'Take a placement test at a Volkshochschule or another licensed provider, then book the level it puts you in.'
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
          why: cred.why,
          typical_duration: cred.typical_duration,
          next_step: cred.next_step
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
          why: 'Shortlisted under this archetype in ' + r.listing.city + '; this is the role that decides on these posts.'
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
    'score_city_fit', 'score_seniority_fit', 'shortlisted', 'reason', 'synthetic'
  ];
  var GAPS_COLUMNS = ['archetype_id', 'gap_type', 'item', 'why', 'typical_duration', 'next_step', 'synthetic'];
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
        archetype_id: g.archetype_id, gap_type: g.gap_type, item: g.item, why: g.why,
        typical_duration: g.typical_duration, next_step: g.next_step, synthetic: true
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

  var STATE = { profile: null, fields: null, scored: [], gaps: [], outreach: [] };
  var openStation = 3;

  function recompute() {
    STATE.scored = scoreListings(STATE.profile, STATE.fields);
    STATE.gaps = computeGaps(STATE.profile, STATE.fields);
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
  var STATE_NAME = 'signin';

  function show(id, on) {
    var n = document.getElementById(id);
    if (n) { n.hidden = !on; }
  }

  /* One state on screen at a time. The quiet lines (who is signed in, and the
     summary of the answers) carry across, because they are context, not a step. */
  function goTo(name) {
    STATE_NAME = name;
    show('state-signin', name === 'signin');
    show('whoami', name !== 'signin');
    show('state-questions', name === 'questions');
    show('summary', name === 'results');
    show('state-results', name === 'results');
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
          ' \u00b7 qualified outside the EU \u00b7 ' + p.years_experience + ' years'));
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
    document.getElementById('whoami').textContent = '';
    var who = document.getElementById('whoami');
    who.appendChild(document.createTextNode('Signed in as ' + profile.profession +
      ', ' + profile.years_experience + ' years. '));
    var sw = el('button', 'quiet', 'switch');
    sw.type = 'button';
    sw.addEventListener('click', signOut);
    who.appendChild(sw);

    renderQuestions();
    goTo('questions');
    document.getElementById('signin-btn').setAttribute('aria-expanded', 'false');
    show('chooser', false);
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

  function renderQuestions() {
    var row = document.getElementById('qrow');
    row.textContent = '';
    var sectorKeys = [];
    for (var s = 0; s < SECTORS.length; s++) { sectorKeys.push(SECTORS[s].key); }
    row.appendChild(selectFor('city', 'City', CITIES, STATE.fields.city, function (v) { return v; }));
    row.appendChild(selectFor('german_level', 'German level', LEVEL_CHOICES, STATE.fields.german_level, function (v) { return v; }));
    row.appendChild(selectFor('sector', 'Target sector', sectorKeys, STATE.fields.sector, sectorLabel));

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

  function renderSummary() {
    var host = document.getElementById('summary');
    host.textContent = '';
    var langs = STATE.fields.languages.length ? STATE.fields.languages.join(', ') : 'none besides German';
    var parts = [STATE.fields.city, 'German ' + STATE.fields.german_level, langs, sectorLabel(STATE.fields.sector)];
    for (var i = 0; i < parts.length; i++) {
      if (i) { host.appendChild(document.createTextNode(' \u00b7 ')); }
      host.appendChild(el('strong', null, parts[i]));
    }
    host.appendChild(document.createTextNode(' '));
    var chg = el('button', 'quiet', 'change');
    chg.type = 'button';
    chg.addEventListener('click', function () {
      renderQuestions();
      show('state-questions', true);
      show('summary', false);
      document.getElementById('f-city').focus();
    });
    host.appendChild(chg);
  }

  function selectFor(key, labelText, values, current, labeller) {
    var wrap = el('div');
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
    renderSummary();
    goTo('results');
  }

  /* Re-runs the computed steps in place and shows what moved. */
  function rerun(flash) {
    recompute();
    renderSummary();
    renderResult();
    renderGaps();
    renderOutreach();
    renderSteps();
    renderExports();
    if (flash) { highlight('results'); highlight('gaps'); highlight('outreach'); }
  }

  function dotsFor(total) {
    var filled = total >= 0.86 ? 3 : (total >= 0.72 ? 2 : 1);
    var word = filled === 3 ? 'strong' : (filled === 2 ? 'good' : 'possible');
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

  function renderResult() {
    var body = document.getElementById('result-body');
    body.textContent = '';
    var above = 0;
    for (var i = 0; i < STATE.scored.length; i++) { if (STATE.scored[i].shortlisted) { above++; } }

    var shown = 0;
    for (var k = 0; k < STATE.scored.length && shown < MAX_ROWS; k++) {
      var r = STATE.scored[k];
      if (!r.shortlisted) { continue; }
      shown++;
      var tr = el('tr');
      var tdRole = el('td');
      tdRole.appendChild(el('span', 'role', r.listing.title));
      tdRole.appendChild(el('span', 'why', r.reason));
      tr.appendChild(tdRole);
      tr.appendChild(el('td', null, r.listing.employer));
      tr.appendChild(el('td', null, r.listing.city));
      tr.appendChild(el('td', null, r.listing.german_level_mapped === 'none'
        ? 'none stated'
        : r.listing.german_level_mapped));
      var tdFit = el('td');
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

  function renderGaps() {
    var host = document.getElementById('gaps-panel');
    host.textContent = '';
    var list = archetypesFor(STATE.profile);

    for (var a = 0; a < list.length; a++) {
      var arch = list[a];
      var group = el('div', 'group');
      group.appendChild(el('h3', null, arch.label));
      group.appendChild(el('p', 'ask',
        'Asks for German ' + arch.requirements.german_level_required +
        (arch.requirements.recognition && arch.requirements.recognition.required
          ? ', and a recognition step applies.'
          : '. No recognition procedure applies.')));
      var ul = el('ul', 'items');
      var count = 0;
      for (var g = 0; g < STATE.gaps.length; g++) {
        var gap = STATE.gaps[g];
        if (gap.archetype_id !== arch.archetype_id) { continue; }
        count++;
        var li = el('li');
        li.appendChild(el('span', 'what', gap.item));
        li.appendChild(el('span', 'dur', ' — ' + gap.typical_duration));
        li.appendChild(el('span', 'why', gap.why + ' Next step: ' + gap.next_step));
        ul.appendChild(li);
      }
      if (!count) {
        var none = el('li');
        none.appendChild(el('span', 'what', 'Nothing missing for this route.'));
        ul.appendChild(none);
      }
      group.appendChild(ul);
      host.appendChild(group);
    }
  }

  function renderOutreach() {
    var host = document.getElementById('outreach-panel');
    host.textContent = '';
    var list = archetypesFor(STATE.profile);

    for (var a = 0; a < list.length; a++) {
      var arch = list[a];
      var group = el('div', 'group');
      group.appendChild(el('h3', null, arch.label));
      var ul = el('ul', 'items');
      for (var o = 0; o < STATE.outreach.length; o++) {
        var row = STATE.outreach[o];
        if (row.archetype_id !== arch.archetype_id) { continue; }
        var li = el('li');
        li.appendChild(el('span', 'what', row.target));
        li.appendChild(el('span', 'org', ' at ' + row.organisation));
        li.appendChild(el('span', 'why', row.why));
        ul.appendChild(li);
      }
      group.appendChild(ul);
      host.appendChild(group);
    }
  }

  function stepDefinitions() {
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
        say: STATE.scored.length + ' listings scored on 4 components for ' + STATE.fields.city +
          ' at German ' + STATE.fields.german_level + '.',
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

  renderAccounts();

  document.getElementById('signin-btn').addEventListener('click', function () {
    var open = document.getElementById('chooser').hidden;
    show('chooser', open);
    this.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { document.querySelector('#account-list button').focus(); }
  });

  document.getElementById('find').addEventListener('click', function () {
    findRoles();
    document.getElementById('summary').focus();
  });

  goTo('signin');
})();
