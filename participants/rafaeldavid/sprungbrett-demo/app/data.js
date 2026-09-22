/* GENERATED FILE - do not edit by hand.
 * Source of truth: data/*.json. Regenerate with: node build-data.js
 * Loaded by index.html through a plain script tag, because a page opened
 * from a file path cannot fetch its own JSON.
 *
 * Everything below is INVENTED for a workshop demo. Every profile, listing
 * and employer is synthetic and carries synthetic: true. None of the openings
 * is real and none of the employers exists. Nothing is read from LinkedIn,
 * nothing is fetched at all, and no model runs: the page looks up steps 1 to 3
 * and does the arithmetic for steps 4 to 6 in the browser.
 *
 * The recognition procedures named in credential-map.json and archetypes.json
 * are real and described factually. The comparison against a profile is
 * illustrative: what a procedure requires is set by the competent authority
 * and varies by Bundesland. See app/README.md. */
window.DATA = {
  "profiles": {
    "schema_version": 1,
    "synthetic": true,
    "note": "Invented profiles. Described by profession, qualification and years only: no names, no ages, no countries. Origin appears only as 'qualified outside the EU', and country never affects a score. Languages are a skill, listed as languages, and are never used to infer an origin.",
    "profiles": [
      {
        "profile_id": "p-nurse",
        "profession_key": "nurse-general-care",
        "profession": "Registered nurse, general care",
        "qualification": "Three-year nursing diploma, qualified outside the EU",
        "years_experience": 12,
        "roles_count": 6,
        "languages_count": 2,
        "languages": [
          "German",
          "English"
        ],
        "seniority_band": "senior",
        "recognition_status": "not_started",
        "held_credential_ids": [
          "cert-first-aid-de"
        ],
        "archetype_ids": [
          "a-nurse-ward",
          "a-nurse-recognition-post",
          "a-care-coordination"
        ],
        "defaults": {
          "city": "Berlin",
          "german_level": "B1",
          "sector": "health"
        },
        "synthetic": true
      },
      {
        "profile_id": "p-engineer",
        "profession_key": "mechanical-engineering",
        "profession": "Mechanical engineer, machine building",
        "qualification": "Four-year engineering degree, qualified outside the EU",
        "years_experience": 8,
        "roles_count": 4,
        "languages_count": 3,
        "languages": [
          "German",
          "English",
          "Russian"
        ],
        "seniority_band": "mid",
        "recognition_status": "not_started",
        "held_credential_ids": [],
        "archetype_ids": [
          "a-mech-design",
          "a-mfg-process",
          "a-tech-service"
        ],
        "defaults": {
          "city": "Leipzig",
          "german_level": "B2",
          "sector": "engineering"
        },
        "synthetic": true
      },
      {
        "profile_id": "p-developer",
        "profession_key": "software-development",
        "profession": "Software developer, backend and data",
        "qualification": "Computer science degree, qualified outside the EU",
        "years_experience": 5,
        "roles_count": 3,
        "languages_count": 2,
        "languages": [
          "German",
          "English"
        ],
        "seniority_band": "mid",
        "recognition_status": "not_started",
        "held_credential_ids": [],
        "archetype_ids": [
          "a-backend-dev",
          "a-data-eng",
          "a-it-ops"
        ],
        "defaults": {
          "city": "Berlin",
          "german_level": "A2",
          "sector": "it"
        },
        "synthetic": true
      }
    ]
  },
  "listings": {
    "schema_version": 1,
    "synthetic": true,
    "note": "Invented listings at invented employers. german_level_mapped is this demo's own guess at what the advert's phrasing means: the German terms have no CEFR definition. Openness is two checkable fields, working_language and visa_sponsorship_stated, not a judgement. The context flags (shift work, licence, contract type, part time, remote) are what the Tell-us-more answers are matched against.",
    "cities": [
      "Berlin",
      "Leipzig",
      "Dortmund"
    ],
    "sectors": [
      {
        "key": "health",
        "label": "Gesundheit und Pflege"
      },
      {
        "key": "engineering",
        "label": "Ingenieurwesen und Fertigung"
      },
      {
        "key": "it",
        "label": "IT und Daten"
      },
      {
        "key": "logistics",
        "label": "Logistik und Handwerk"
      }
    ],
    "listings": [
      {
        "listing_id": "l-001",
        "title": "Pflegefachkraft Innere Medizin",
        "employer": "Nordklinik Verbund gGmbH (fictional)",
        "city": "Berlin",
        "sector": "health",
        "role_family": "nursing_ward",
        "seniority_band": "senior",
        "language_requirement_text": "verhandlungssicheres Deutsch (mind. B2)",
        "german_level_mapped": "B2",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": true,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-002",
        "title": "Pflegefachkraft Intensivstation",
        "employer": "Havelbogen Klinikgruppe AG (fictional)",
        "city": "Berlin",
        "sector": "health",
        "role_family": "nursing_ward",
        "seniority_band": "senior",
        "language_requirement_text": "gute Deutschkenntnisse in Wort und Schrift",
        "german_level_mapped": "B2",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": true,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-003",
        "title": "Pflegefachkraft Nachtdienst",
        "employer": "Elsterquartier Seniorenresidenz GmbH (fictional)",
        "city": "Leipzig",
        "sector": "health",
        "role_family": "nursing_ward",
        "seniority_band": "mid",
        "language_requirement_text": "Deutschkenntnisse ab B1",
        "german_level_mapped": "B1",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": true,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-004",
        "title": "Pflegefachkraft ambulanter Dienst",
        "employer": "Ruhrsaum Pflegedienst GmbH & Co. KG (fictional)",
        "city": "Dortmund",
        "sector": "health",
        "role_family": "nursing_ward",
        "seniority_band": "mid",
        "language_requirement_text": "fliessend Deutsch",
        "german_level_mapped": "B2",
        "working_language": "German",
        "visa_sponsorship_stated": false,
        "requires_shift_work": true,
        "requires_licence": true,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-005",
        "title": "Pflegefachkraft Geriatrie",
        "employer": "Spreeufer Pflege eG (fictional)",
        "city": "Berlin",
        "sector": "health",
        "role_family": "nursing_ward",
        "seniority_band": "mid",
        "language_requirement_text": "Deutsch mindestens B1, B2 erwuenscht",
        "german_level_mapped": "B1",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": true,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-006",
        "title": "Pflegehelfer:in in der Anerkennungsphase",
        "employer": "Nordklinik Verbund gGmbH (fictional)",
        "city": "Berlin",
        "sector": "health",
        "role_family": "nursing_assistant",
        "seniority_band": "junior",
        "language_requirement_text": "Grundkenntnisse Deutsch (A2) genuegen zum Start",
        "german_level_mapped": "A2",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": true,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-007",
        "title": "Pflegeassistenz Tagespflege",
        "employer": "Lindenhorst Sozialwerk e.V. (fictional)",
        "city": "Dortmund",
        "sector": "health",
        "role_family": "nursing_assistant",
        "seniority_band": "junior",
        "language_requirement_text": "einfache Deutschkenntnisse (A2-B1)",
        "german_level_mapped": "A2",
        "working_language": "German",
        "visa_sponsorship_stated": false,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": true,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-008",
        "title": "Anerkennungspraktikant:in Pflege",
        "employer": "Elsterquartier Seniorenresidenz GmbH (fictional)",
        "city": "Leipzig",
        "sector": "health",
        "role_family": "nursing_assistant",
        "seniority_band": "junior",
        "language_requirement_text": "Deutsch B1 erforderlich",
        "german_level_mapped": "B1",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": true,
        "requires_licence": false,
        "contract_type": "fixed_term",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-009",
        "title": "Betreuungskraft nach Paragraf 43b",
        "employer": "Spreeufer Pflege eG (fictional)",
        "city": "Berlin",
        "sector": "health",
        "role_family": "nursing_assistant",
        "seniority_band": "junior",
        "language_requirement_text": "gute Deutschkenntnisse",
        "german_level_mapped": "B1",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": true,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": true,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-010",
        "title": "Koordination Pflegeueberleitung",
        "employer": "Havelbogen Klinikgruppe AG (fictional)",
        "city": "Berlin",
        "sector": "health",
        "role_family": "care_admin",
        "seniority_band": "mid",
        "language_requirement_text": "verhandlungssicher in Deutsch",
        "german_level_mapped": "C1",
        "working_language": "German",
        "visa_sponsorship_stated": false,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-011",
        "title": "Qualitaetsbeauftragte:r Pflege",
        "employer": "Ruhrsaum Pflegedienst GmbH & Co. KG (fictional)",
        "city": "Dortmund",
        "sector": "health",
        "role_family": "care_admin",
        "seniority_band": "senior",
        "language_requirement_text": "sehr gute Deutschkenntnisse",
        "german_level_mapped": "B2",
        "working_language": "German",
        "visa_sponsorship_stated": false,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-012",
        "title": "Medizinische Fachangestellte Ambulanz",
        "employer": "Nordklinik Verbund gGmbH (fictional)",
        "city": "Berlin",
        "sector": "health",
        "role_family": "care_admin",
        "seniority_band": "mid",
        "language_requirement_text": "Deutsch B1",
        "german_level_mapped": "B1",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": true,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-013",
        "title": "Case Management internationale Patient:innen",
        "employer": "Havelbogen Klinikgruppe AG (fictional)",
        "city": "Berlin",
        "sector": "health",
        "role_family": "care_admin",
        "seniority_band": "mid",
        "language_requirement_text": "Deutsch B1, Englisch fliessend",
        "german_level_mapped": "B1",
        "working_language": "German and English",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "fixed_term",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-014",
        "title": "Konstrukteur:in Maschinenbau (CAD)",
        "employer": "Elstertal Maschinenbau GmbH (fictional)",
        "city": "Leipzig",
        "sector": "engineering",
        "role_family": "mech_design",
        "seniority_band": "mid",
        "language_requirement_text": "gute Deutschkenntnisse (B2)",
        "german_level_mapped": "B2",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-015",
        "title": "Technische:r Produktdesigner:in",
        "employer": "Wagenfeld Antriebstechnik GmbH & Co. KG (fictional)",
        "city": "Leipzig",
        "sector": "engineering",
        "role_family": "mech_design",
        "seniority_band": "mid",
        "language_requirement_text": "Deutsch B1, technisches Englisch",
        "german_level_mapped": "B1",
        "working_language": "German and English",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-016",
        "title": "Entwicklungsingenieur:in Vorrichtungsbau",
        "employer": "Hafenkante Anlagenbau AG (fictional)",
        "city": "Dortmund",
        "sector": "engineering",
        "role_family": "mech_design",
        "seniority_band": "senior",
        "language_requirement_text": "verhandlungssicheres Deutsch",
        "german_level_mapped": "C1",
        "working_language": "German",
        "visa_sponsorship_stated": false,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-017",
        "title": "Konstruktion Sondermaschinen",
        "employer": "Elstertal Maschinenbau GmbH (fictional)",
        "city": "Leipzig",
        "sector": "engineering",
        "role_family": "mech_design",
        "seniority_band": "senior",
        "language_requirement_text": "fliessend Deutsch",
        "german_level_mapped": "B2",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-018",
        "title": "CAD-Konstruktion Bauteile",
        "employer": "Moorbruecke Feinwerktechnik GmbH (fictional)",
        "city": "Berlin",
        "sector": "engineering",
        "role_family": "mech_design",
        "seniority_band": "mid",
        "language_requirement_text": "English-only team, German not required",
        "german_level_mapped": "none",
        "working_language": "English",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-019",
        "title": "Fertigungsplaner:in",
        "employer": "Wagenfeld Antriebstechnik GmbH & Co. KG (fictional)",
        "city": "Leipzig",
        "sector": "engineering",
        "role_family": "mfg_process",
        "seniority_band": "mid",
        "language_requirement_text": "Deutsch B2",
        "german_level_mapped": "B2",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-020",
        "title": "Prozessingenieur:in Serienfertigung",
        "employer": "Hafenkante Anlagenbau AG (fictional)",
        "city": "Dortmund",
        "sector": "engineering",
        "role_family": "mfg_process",
        "seniority_band": "senior",
        "language_requirement_text": "sehr gute Deutschkenntnisse",
        "german_level_mapped": "B2",
        "working_language": "German",
        "visa_sponsorship_stated": false,
        "requires_shift_work": true,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-021",
        "title": "Arbeitsvorbereitung Zerspanung",
        "employer": "Elstertal Maschinenbau GmbH (fictional)",
        "city": "Leipzig",
        "sector": "engineering",
        "role_family": "mfg_process",
        "seniority_band": "mid",
        "language_requirement_text": "Deutschkenntnisse ab B1",
        "german_level_mapped": "B1",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-022",
        "title": "Qualitaetsingenieur:in Fertigung",
        "employer": "Moorbruecke Feinwerktechnik GmbH (fictional)",
        "city": "Berlin",
        "sector": "engineering",
        "role_family": "mfg_process",
        "seniority_band": "senior",
        "language_requirement_text": "Deutsch B2, Englisch von Vorteil",
        "german_level_mapped": "B2",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-023",
        "title": "Servicetechniker:in Aussendienst",
        "employer": "Hafenkante Anlagenbau AG (fictional)",
        "city": "Dortmund",
        "sector": "engineering",
        "role_family": "tech_service",
        "seniority_band": "mid",
        "language_requirement_text": "gute Deutschkenntnisse, Fuehrerschein B",
        "german_level_mapped": "B1",
        "working_language": "German",
        "visa_sponsorship_stated": false,
        "requires_shift_work": false,
        "requires_licence": true,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-024",
        "title": "Inbetriebnahmeingenieur:in",
        "employer": "Wagenfeld Antriebstechnik GmbH & Co. KG (fictional)",
        "city": "Leipzig",
        "sector": "engineering",
        "role_family": "tech_service",
        "seniority_band": "senior",
        "language_requirement_text": "Deutsch B2 und Englisch fliessend",
        "german_level_mapped": "B2",
        "working_language": "German and English",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": true,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-025",
        "title": "Technischer Support Anlagen",
        "employer": "Moorbruecke Feinwerktechnik GmbH (fictional)",
        "city": "Berlin",
        "sector": "engineering",
        "role_family": "tech_service",
        "seniority_band": "mid",
        "language_requirement_text": "Deutsch B1 ausreichend",
        "german_level_mapped": "B1",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-026",
        "title": "Wartungstechniker:in Logistikanlagen",
        "employer": "Kranichweg Logistik SE (fictional)",
        "city": "Dortmund",
        "sector": "logistics",
        "role_family": "tech_service",
        "seniority_band": "mid",
        "language_requirement_text": "einfache Deutschkenntnisse (A2)",
        "german_level_mapped": "A2",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-027",
        "title": "Backend-Entwickler:in (Java)",
        "employer": "Uferlicht Software GmbH (fictional)",
        "city": "Berlin",
        "sector": "it",
        "role_family": "software_dev",
        "seniority_band": "mid",
        "language_requirement_text": "English-only, German not required",
        "german_level_mapped": "none",
        "working_language": "English",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": true,
        "synthetic": true
      },
      {
        "listing_id": "l-028",
        "title": "Fullstack-Entwickler:in",
        "employer": "Zeisigrund Digital AG (fictional)",
        "city": "Leipzig",
        "sector": "it",
        "role_family": "software_dev",
        "seniority_band": "mid",
        "language_requirement_text": "Deutsch B1, Englisch Arbeitssprache",
        "german_level_mapped": "B1",
        "working_language": "German and English",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-029",
        "title": "Softwareentwickler:in Embedded",
        "employer": "Moorbruecke Feinwerktechnik GmbH (fictional)",
        "city": "Berlin",
        "sector": "it",
        "role_family": "software_dev",
        "seniority_band": "senior",
        "language_requirement_text": "Deutsch B2 erforderlich",
        "german_level_mapped": "B2",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-030",
        "title": "Python-Entwickler:in",
        "employer": "Uferlicht Software GmbH (fictional)",
        "city": "Berlin",
        "sector": "it",
        "role_family": "software_dev",
        "seniority_band": "junior",
        "language_requirement_text": "no German required, English team language",
        "german_level_mapped": "none",
        "working_language": "English",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "fixed_term",
        "part_time_possible": false,
        "remote_possible": true,
        "synthetic": true
      },
      {
        "listing_id": "l-031",
        "title": "Frontend-Entwickler:in",
        "employer": "Kohlenhof Interaktiv GmbH (fictional)",
        "city": "Dortmund",
        "sector": "it",
        "role_family": "software_dev",
        "seniority_band": "mid",
        "language_requirement_text": "gute Deutschkenntnisse",
        "german_level_mapped": "B1",
        "working_language": "German",
        "visa_sponsorship_stated": false,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": true,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-032",
        "title": "Data Engineer",
        "employer": "Uferlicht Software GmbH (fictional)",
        "city": "Berlin",
        "sector": "it",
        "role_family": "data_eng",
        "seniority_band": "mid",
        "language_requirement_text": "English-only role",
        "german_level_mapped": "none",
        "working_language": "English",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": true,
        "synthetic": true
      },
      {
        "listing_id": "l-033",
        "title": "BI-Entwickler:in",
        "employer": "Zeisigrund Digital AG (fictional)",
        "city": "Leipzig",
        "sector": "it",
        "role_family": "data_eng",
        "seniority_band": "mid",
        "language_requirement_text": "Deutsch B2",
        "german_level_mapped": "B2",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-034",
        "title": "Datenanalyst:in Produktion",
        "employer": "Elstertal Maschinenbau GmbH (fictional)",
        "city": "Leipzig",
        "sector": "it",
        "role_family": "data_eng",
        "seniority_band": "mid",
        "language_requirement_text": "Deutsch B1, Englisch gut",
        "german_level_mapped": "B1",
        "working_language": "German and English",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-035",
        "title": "Data Platform Engineer",
        "employer": "Kranichweg Logistik SE (fictional)",
        "city": "Dortmund",
        "sector": "it",
        "role_family": "data_eng",
        "seniority_band": "senior",
        "language_requirement_text": "English working language",
        "german_level_mapped": "none",
        "working_language": "English",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": true,
        "synthetic": true
      },
      {
        "listing_id": "l-036",
        "title": "IT-Support 2nd Level",
        "employer": "Kohlenhof Interaktiv GmbH (fictional)",
        "city": "Dortmund",
        "sector": "it",
        "role_family": "it_ops",
        "seniority_band": "junior",
        "language_requirement_text": "verhandlungssicheres Deutsch",
        "german_level_mapped": "C1",
        "working_language": "German",
        "visa_sponsorship_stated": false,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-037",
        "title": "Systemadministrator:in Linux",
        "employer": "Uferlicht Software GmbH (fictional)",
        "city": "Berlin",
        "sector": "it",
        "role_family": "it_ops",
        "seniority_band": "mid",
        "language_requirement_text": "Deutsch A2 genuegt, Team spricht Englisch",
        "german_level_mapped": "A2",
        "working_language": "German and English",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-038",
        "title": "Cloud Operations Engineer",
        "employer": "Zeisigrund Digital AG (fictional)",
        "city": "Leipzig",
        "sector": "it",
        "role_family": "it_ops",
        "seniority_band": "mid",
        "language_requirement_text": "English-only, no German needed",
        "german_level_mapped": "none",
        "working_language": "English",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": true,
        "synthetic": true
      },
      {
        "listing_id": "l-039",
        "title": "IT-Administration Krankenhaus",
        "employer": "Havelbogen Klinikgruppe AG (fictional)",
        "city": "Berlin",
        "sector": "it",
        "role_family": "it_ops",
        "seniority_band": "mid",
        "language_requirement_text": "gute Deutschkenntnisse in Wort und Schrift",
        "german_level_mapped": "B2",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-040",
        "title": "Lagerfachkraft Kommissionierung",
        "employer": "Kranichweg Logistik SE (fictional)",
        "city": "Dortmund",
        "sector": "logistics",
        "role_family": "warehouse",
        "seniority_band": "junior",
        "language_requirement_text": "einfache Deutschkenntnisse (A2)",
        "german_level_mapped": "A2",
        "working_language": "German",
        "visa_sponsorship_stated": true,
        "requires_shift_work": true,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      },
      {
        "listing_id": "l-041",
        "title": "Vertriebsinnendienst Export",
        "employer": "Kranichweg Logistik SE (fictional)",
        "city": "Dortmund",
        "sector": "logistics",
        "role_family": "sales_support",
        "seniority_band": "mid",
        "language_requirement_text": "verhandlungssicher Deutsch und Englisch",
        "german_level_mapped": "C1",
        "working_language": "German and English",
        "visa_sponsorship_stated": false,
        "requires_shift_work": false,
        "requires_licence": false,
        "contract_type": "permanent",
        "part_time_possible": false,
        "remote_possible": false,
        "synthetic": true
      }
    ]
  },
  "archetypes": {
    "schema_version": 1,
    "synthetic": true,
    "note": "Archetypes are judgement written down in advance: three roles each invented profile could plausibly land. The programmes attached to them are real and were checked on 2026-09-22; each carries its url_status. Where an entry is one chamber’s offer, one Land’s procedure or a statute rather than a course, it says so in its own words: there is never one path per profession. Outreach targets are roles and organisation types, never people.",
    "archetypes": [
      {
        "archetype_id": "a-nurse-ward",
        "profile_id": "p-nurse",
        "label": "Ward nurse, acute or geriatric care",
        "reason": "Twelve years on general wards maps onto the German reference occupation once recognition is through.",
        "role_families": [
          "nursing_ward"
        ],
        "approach_role": "Pflegedienstleitung (director of nursing)",
        "requirements": {
          "german_level_required": "B2",
          "german_why": "Ward handovers and documentation are in German, and most Länder ask for B2 in the recognition procedure for nursing.",
          "recognition": {
            "required": true,
            "gap_type": "recognition",
            "item": "Recognition as Pflegefachfrau / Pflegefachmann has not been applied for",
            "why": "Nursing is regulated: the professional title cannot be used on a ward without recognition by the competent body of the Land.",
            "typical_duration": "typically 3-4 months for the authority's assessment once the file is complete, longer where documents must be sourced",
            "next_step": "Book free counselling and file the Antrag auf Anerkennung with the competent body of the Land (anerkennung-in-deutschland.de)."
          },
          "credentials": [
            {
              "credential_id": "anerkennungs-finder",
              "gap_type": "recognition",
              "item": "Anerkennungs-Finder",
              "provider": "Bundesinstitut für Berufsbildung (BIBB) / Anerkennung in Deutschland",
              "why": "The federal portal's step-by-step tool that identifies which authority handles a given profession in a given Bundesland and what the recognition application requires.",
              "who_it_is_for": "The portal addresses people with a vocational qualification obtained abroad who want to know whether and where a recognition procedure applies to them.",
              "typical_duration": "",
              "caveat": "There is no national programme here: the authority and the shape of the compensation measure are set per Bundesland. This tool tells you which applies to you.",
              "next_step": "Start with free counselling: the authority, and what it will ask for, depends on your Bundesland.",
              "url": "https://www.anerkennung-in-deutschland.de/de/interest/finder/profession",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            },
            {
              "credential_id": "counselling-search-beratungssuche",
              "gap_type": "recognition",
              "item": "Counselling search (Beratungssuche)",
              "provider": "Anerkennung in Deutschland (BIBB) / IQ Netzwerk counselling centres",
              "why": "A directory of free counselling offices, largely run through the IQ Netzwerk, that advise on recognition procedures and on what documents an application needs.",
              "who_it_is_for": "The portal presents it for people who want advice on recognising a qualification obtained abroad before or during an application.",
              "typical_duration": "",
              "next_step": "Start with free counselling: the authority, and what it will ask for, depends on your Bundesland.",
              "url": "https://www.anerkennung-in-deutschland.de/html/en/counselling-search.php",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "en",
              "real": true
            },
            {
              "credential_id": "financial-support-for-recognition-incl-the-anerk",
              "gap_type": "funding",
              "item": "Financial support for recognition, incl. the Anerkennungszuschuss",
              "provider": "Bundesministerium für Bildung und Forschung (BMBF) via Anerkennung in Deutschland",
              "why": "The federal overview page of grants that reimburse recognition-procedure costs such as translations, certifications and travel, with the Anerkennungszuschuss as the main federal scheme.",
              "who_it_is_for": "In the programme's own framing: people with a qualification obtained abroad, resident in Germany, whose income falls under stated limits; the page states that funding must be applied for before the recognition application is submitted.",
              "typical_duration": "",
              "next_step": "Ask the listed body whether your case qualifies; eligibility is decided case by case.",
              "url": "https://www.anerkennung-in-deutschland.de/html/de/finanzielle-foerderung.php",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            }
          ],
          "language_programme": {
            "credential_id": "telc-deutsch-b1-b2-pflege",
            "gap_type": "language",
            "item": "telc Deutsch B1·B2 Pflege",
            "provider": "telc gGmbH",
            "why": "A German language certificate examination whose reading, listening, writing and speaking tasks are built around nursing work situations, reported at either B1 or B2.",
            "who_it_is_for": "telc describes it as the German examination for nursing professionals who need to show German language competence for their profession.",
            "typical_duration": "typically about 115 minutes written plus an oral part of about 16 minutes, per telc's stated exam structure",
            "next_step": "Check the level the employer asks for before booking, and whether a funded course covers it.",
            "url": "https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-b1-b2-nursing/",
            "url_status": 200,
            "url_checked_on": "2026-09-22",
            "page_language": "en",
            "real": true
          }
        },
        "outreach": [
          {
            "target_type": "body",
            "target": "Professional association for nursing (Berufsverband)",
            "organisation": "A nursing professional association active in the Land",
            "why": "Associations run peer groups for internationally qualified nurses and publish what the Land asks for."
          },
          {
            "target_type": "chamber",
            "target": "Pflegekammer of the Land, where the Land has one",
            "organisation": "Land nursing chamber (not every Land has established one)",
            "why": "Where a nursing chamber exists it registers the profession and can say what registration needs."
          },
          {
            "target_type": "network",
            "target": "Mentoring programme for internationally qualified health staff",
            "organisation": "A migrant-professional network for the health sector",
            "why": "Peer networks are where the practical sequence of the recognition steps gets explained by people who did it."
          }
        ]
      },
      {
        "archetype_id": "a-nurse-recognition-post",
        "profile_id": "p-nurse",
        "label": "Assistant post held during the recognition procedure",
        "reason": "Assistant and Anerkennungspraktikum posts are the usual way to work on a ward while the file is with the authority.",
        "role_families": [
          "nursing_assistant"
        ],
        "approach_role": "Stationsleitung (ward manager)",
        "requirements": {
          "german_level_required": "B1",
          "german_why": "Assistant posts still involve patient contact and shift handovers, and most ads in this group name B1.",
          "recognition": {
            "required": true,
            "gap_type": "recognition",
            "item": "The recognition application has not been filed, and this route depends on it being under way",
            "why": "An Anerkennungspraktikum is part of the procedure: employers in this group ask to see that the Antrag has been submitted.",
            "typical_duration": "typically a few weeks to prepare and file, once translated documents are in hand",
            "next_step": "File the Antrag first, then apply to posts in this group with the receipt."
          },
          "credentials": [
            {
              "credential_id": "types-of-recognition-procedure-anpassungslehrgan",
              "gap_type": "recognition",
              "item": "Types of recognition procedure (Anpassungslehrgang and Kenntnisprüfung)",
              "provider": "Anerkennung in Deutschland (BIBB)",
              "why": "An explanation of the procedure routes, including the compensation measures — an adaptation course or a knowledge examination — that are set when substantial differences are found.",
              "who_it_is_for": "Written for applicants and advisers who need to understand which procedure type applies to a regulated profession.",
              "typical_duration": "",
              "caveat": "Which route applies — adaptation course or knowledge examination — is set by the authority in your Bundesland, not here.",
              "next_step": "Start with free counselling: the authority, and what it will ask for, depends on your Bundesland.",
              "url": "https://www.anerkennung-in-deutschland.de/html/en/pro/types-of-procedure.php",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "en",
              "real": true
            },
            {
              "credential_id": "after-the-notice-nach-dem-bescheid",
              "gap_type": "recognition",
              "item": "After the notice (Nach dem Bescheid)",
              "provider": "Anerkennung in Deutschland (BIBB)",
              "why": "Guidance on what the recognition decision means in practice, including what a partial-recognition notice obliges the holder to do next.",
              "who_it_is_for": "Aimed at applicants who have received a decision and need to work out the next step.",
              "typical_duration": "",
              "next_step": "Start with free counselling: the authority, and what it will ask for, depends on your Bundesland.",
              "url": "https://www.anerkennung-in-deutschland.de/html/en/after-the-notice.php",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "en",
              "real": true
            },
            {
              "credential_id": "bildungsgutschein",
              "gap_type": "funding",
              "item": "Bildungsgutschein",
              "provider": "Bundesagentur für Arbeit",
              "why": "A voucher through which the employment agency or jobcentre takes on the cost of an approved continuing-training measure, which can include adaptation courses.",
              "who_it_is_for": "In the agency's own framing: people whose training is needed to end unemployment or avert impending unemployment; the page states that a personal advisory meeting decides the individual case and that the provider and the course must be approved by a competent body.",
              "typical_duration": "",
              "next_step": "Ask the listed body whether your case qualifies; eligibility is decided case by case.",
              "url": "https://www.arbeitsagentur.de/karriere-und-weiterbildung/bildungsgutschein",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            }
          ],
          "language_programme": {
            "credential_id": "berufssprachkurse-zur-anerkennung-beruflicher-ab",
            "gap_type": "language",
            "item": "Berufssprachkurse zur Anerkennung beruflicher Abschlüsse im Gesundheitswesen",
            "provider": "Bundesamt für Migration und Flüchtlinge (BAMF)",
            "why": "Federally funded vocational German courses that teach the profession-specific language used in wards, care homes and outpatient care alongside the recognition procedure.",
            "who_it_is_for": "BAMF names two target groups: academic health professions at target level C1, and Gesundheitsfachberufe including nurses and midwives at target level B2.",
            "typical_duration": "typically 600 teaching units, the figure BAMF states for both course strands",
            "next_step": "Check the level the employer asks for before booking, and whether a funded course covers it.",
            "url": "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/AnerkennungsBSK/anerkennungsbsk-node.html",
            "url_status": 200,
            "url_checked_on": "2026-09-22",
            "page_language": "de",
            "real": true
          }
        },
        "outreach": [
          {
            "target_type": "body",
            "target": "Recognition counselling service (IQ Netzwerk counselling centre)",
            "organisation": "Free official counselling on recognition procedures",
            "why": "Counselling is free and can tell you which employers in the Land take people mid-procedure."
          },
          {
            "target_type": "chamber",
            "target": "Industrie- und Handelskammer of the city",
            "organisation": "Chamber of commerce and industry, present in every German city",
            "why": "Chambers hold the employer lists and run information evenings for newcomers to the labour market."
          },
          {
            "target_type": "network",
            "target": "Peer group for nurses in the recognition procedure",
            "organisation": "A migrant-professional network for the health sector",
            "why": "The order of the steps is the thing people get wrong, and peers have just done it."
          }
        ]
      },
      {
        "archetype_id": "a-care-coordination",
        "profile_id": "p-nurse",
        "label": "Care coordination, quality and case management",
        "reason": "Twelve years and six roles carry the process knowledge these posts ask for, and they are not regulated.",
        "role_families": [
          "care_admin"
        ],
        "approach_role": "Leitung Qualitatsmanagement (head of quality management)",
        "requirements": {
          "german_level_required": "B2",
          "german_why": "These posts are mostly written German: documentation, audits and correspondence with payers.",
          "recognition": {
            "required": false
          },
          "credentials": [
            {
              "credential_id": "dgcc-zertifizierte-case-management-weiterbildung",
              "gap_type": "certification",
              "item": "DGCC-zertifizierte Case-Management-Weiterbildung",
              "provider": "Deutsche Gesellschaft für Care und Case Management (DGCC)",
              "why": "A certified case-management qualification delivered by institutes the DGCC recognises, covering case-management method, supervision and practice work.",
              "who_it_is_for": "The DGCC addresses practitioners in health and social services — nursing, social work, disability services, insurance and employment integration — seeking a formal case-management qualification.",
              "typical_duration": "typically 210 continuing-education hours across modules, the scope DGCC states",
              "next_step": "Check with the provider which variant applies to you before booking anything.",
              "url": "https://www.dgcc.de/cm-weiterbildung/weiterbildungsangebote/",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            },
            {
              "credential_id": "71-sgb-xi-verantwortliche-pflegefachkraft-legal-",
              "gap_type": "certification",
              "item": "§ 71 SGB XI — verantwortliche Pflegefachkraft (legal text)",
              "provider": "Bundesministerium der Justiz / Bundesamt für Justiz (gesetze-im-internet.de)",
              "why": "The statutory text that requires a care service to be led by a responsible nursing professional holding a management qualification of at least 460 hours; it is the legal basis, not a course.",
              "who_it_is_for": "It applies to nursing services and to the person named as the responsible nursing professional.",
              "typical_duration": "the statute names a qualification measure of at least 460 hours",
              "caveat": "This is the statute itself, not a course. The 460-hour qualification it names is delivered by many providers, and the conditions are set in Land law.",
              "next_step": "Check with the provider which variant applies to you before booking anything.",
              "url": "https://www.gesetze-im-internet.de/sgb_11/__71.html",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            },
            {
              "credential_id": "aufstiegs-baf-g-afbg",
              "gap_type": "funding",
              "item": "Aufstiegs-BAföG (AFBG)",
              "provider": "Bundesministerium für Bildung und Forschung (BMBF)",
              "why": "A federal scheme of grants and loans towards the cost of vocational advancement qualifications (Fortbildungsabschlüsse) and, in some cases, living costs during them.",
              "who_it_is_for": "In the scheme's own framing: people pursuing a vocational advancement qualification; the site's 'Wer wird gefördert?' section sets out the conditions.",
              "typical_duration": "",
              "next_step": "Ask the listed body whether your case qualifies; eligibility is decided case by case.",
              "url": "https://www.aufstiegs-bafoeg.de/aufstiegsbafoeg/de/home/home_node.html",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            }
          ],
          "language_programme": {
            "credential_id": "telc-deutsch-b2-c1-beruf",
            "gap_type": "language",
            "item": "telc Deutsch B2·C1 Beruf",
            "provider": "telc gGmbH",
            "why": "A workplace German examination reported at either B2 or C1, testing communication in written and spoken work situations.",
            "who_it_is_for": "telc frames it for people who need to show work-related German across two levels in one examination.",
            "typical_duration": "",
            "next_step": "Check the level the employer asks for before booking, and whether a funded course covers it.",
            "url": "https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-b2c1-business/",
            "url_status": 200,
            "url_checked_on": "2026-09-22",
            "page_language": "en",
            "real": true
          }
        },
        "outreach": [
          {
            "target_type": "body",
            "target": "Professional association for health-service management",
            "organisation": "A management association in the health sector",
            "why": "Coordination posts are filled through sector networks more often than through portals."
          },
          {
            "target_type": "chamber",
            "target": "Industrie- und Handelskammer of the city",
            "organisation": "Chamber of commerce and industry, present in every German city",
            "why": "The chamber certifies several of the QM courses this route asks for."
          },
          {
            "target_type": "network",
            "target": "Network for internationally qualified professionals in the health sector",
            "organisation": "A migrant-professional network for the health sector",
            "why": "Useful for finding employers that already hire outside the regulated route."
          }
        ]
      },
      {
        "archetype_id": "a-mech-design",
        "profile_id": "p-engineer",
        "label": "Design engineer, CAD and product development",
        "reason": "Eight years of machine building maps most directly onto Konstruktion posts.",
        "role_families": [
          "mech_design"
        ],
        "approach_role": "Leitung Konstruktion (head of design engineering)",
        "requirements": {
          "german_level_required": "B2",
          "german_why": "Drawings, standards and supplier correspondence in this group are in German.",
          "recognition": {
            "required": true,
            "gap_type": "recognition",
            "item": "Permission to use the protected title Ingenieur has not been applied for",
            "why": "Working as an engineer is generally not restricted in Germany; only the title Ingenieur is. There is no single national procedure: sixteen Land engineering acts govern it, and the competent body is a Land chamber or a district government, sometimes both. For most employers the practical gap is a ZAB comparability statement and an anabin entry rather than a recognition decision.",
            "typical_duration": "varies by Land; one chamber currently states around three months",
            "next_step": "Check whether the posts you want actually carry the title. If they do, ask the Ingenieurkammer of your own Bundesland, not the one cited as an example below."
          },
          "credentials": [
            {
              "credential_id": "statement-of-comparability-for-foreign-higher-ed",
              "gap_type": "recognition",
              "item": "Statement of Comparability for foreign higher education qualifications",
              "provider": "Zentralstelle für ausländisches Bildungswesen (ZAB), KMK",
              "why": "An official certificate that describes a foreign university degree and states which German qualification it compares to.",
              "who_it_is_for": "ZAB presents it as proof of a qualification towards German authorities, embassies and employers, including for visa and EU Blue Card applications; ZAB states it does not entitle the holder to work in a regulated profession and does not convert grades.",
              "typical_duration": "",
              "next_step": "Start with free counselling: the authority, and what it will ask for, depends on your Bundesland.",
              "url": "https://zab.kmk.org/en/statement-comparability",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "en",
              "real": true
            },
            {
              "credential_id": "berufsbezeichnung-ingenieur-with-a-degree-obtain",
              "gap_type": "recognition",
              "item": "Berufsbezeichnung Ingenieur with a degree obtained abroad",
              "provider": "Ingenieurkammer Niedersachsen (example of a Land chamber)",
              "why": "The chamber procedure that checks whether a degree obtained abroad is equivalent for the purpose of using the protected title Ingenieurin/Ingenieur; the chamber notes compensation measures where substantial differences are found.",
              "who_it_is_for": "The chamber addresses holders of engineering degrees obtained abroad who want to use the professional title; the title is governed by sixteen separate Land engineering acts, so the competent body differs by Bundesland.",
              "typical_duration": "typically around three months, the processing time this chamber currently states",
              "caveat": "One Land chamber, cited as an example. The title is governed by sixteen separate Land engineering acts, and the competent body where you live may be a different chamber or a district government.",
              "next_step": "Start with free counselling: the authority, and what it will ask for, depends on your Bundesland.",
              "url": "https://www.ingenieurkammer.de/das-koennen-wir-fuer-sie-tun/berufsbezeichnung-ingenieur-und-berufsanerkennung/abschluss-im-ausland",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            },
            {
              "credential_id": "weiterbildung-entwicklung-konstruktion",
              "gap_type": "certification",
              "item": "Weiterbildung Entwicklung & Konstruktion",
              "provider": "VDI Wissensforum (Verein Deutscher Ingenieure)",
              "why": "The engineering association's seminar and certificate-course programme for design and development work, covering current standards such as ISO GPS, dimensional and geometrical tolerancing, and development methods.",
              "who_it_is_for": "VDI addresses engineers and technical designers working in development and design who want training on these standards and methods.",
              "typical_duration": "",
              "caveat": "A seminar programme rather than a single qualification; the individual seminars come and go.",
              "next_step": "Check with the provider which variant applies to you before booking anything.",
              "url": "https://www.vdi-wissensforum.de/weiterbildung-maschinenbau/entwicklung-konstruktion/",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            }
          ],
          "language_programme": {
            "credential_id": "telc-deutsch-b2-c1-beruf",
            "gap_type": "language",
            "item": "telc Deutsch B2·C1 Beruf",
            "provider": "telc gGmbH",
            "why": "A workplace German examination reported at either B2 or C1, testing communication in written and spoken work situations.",
            "who_it_is_for": "telc frames it for people who need to show work-related German across two levels in one examination.",
            "typical_duration": "",
            "next_step": "Check the level the employer asks for before booking, and whether a funded course covers it.",
            "url": "https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-b2c1-business/",
            "url_status": 200,
            "url_checked_on": "2026-09-22",
            "page_language": "en",
            "real": true
          }
        },
        "outreach": [
          {
            "target_type": "body",
            "target": "Engineering professional association",
            "organisation": "A national engineering association with Land branches",
            "why": "Branch evenings are where design departments say what they are hiring for."
          },
          {
            "target_type": "chamber",
            "target": "Ingenieurkammer of the Land",
            "organisation": "Land chamber of engineers",
            "why": "It decides on the protected title and can say whether a post needs it."
          },
          {
            "target_type": "network",
            "target": "Network for internationally qualified engineers",
            "organisation": "A migrant-professional network for engineering",
            "why": "Title questions come up constantly there and the answers are Land-specific."
          }
        ]
      },
      {
        "archetype_id": "a-mfg-process",
        "profile_id": "p-engineer",
        "label": "Manufacturing and process planning",
        "reason": "Series production experience fits Arbeitsvorbereitung and process posts, which do not need the protected title.",
        "role_families": [
          "mfg_process"
        ],
        "approach_role": "Leitung Fertigung (head of manufacturing)",
        "requirements": {
          "german_level_required": "B2",
          "german_why": "Shop-floor coordination and work instructions are in German.",
          "recognition": {
            "required": false
          },
          "credentials": [
            {
              "credential_id": "refa-grundausbildung-4-0-arbeitsorganisation",
              "gap_type": "certification",
              "item": "REFA-Grundausbildung 4.0 Arbeitsorganisation",
              "provider": "REFA AG",
              "why": "A modular work-organisation qualification covering process analysis, time studies, work design and planning, closing with REFA examinations and a REFA certificate.",
              "who_it_is_for": "REFA names specialists and managers, industrial and craft masters, technicians and staff from assembly and production planning.",
              "typical_duration": "",
              "duration_note": "REFA lists the full Grundausbildung across four parts; the 4.0 variants split it differently, so treat any single figure with care.",
              "next_step": "Check with the provider which variant applies to you before booking anything.",
              "url": "https://refa.de/ausbildungen/refa-grundausbildung",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            },
            {
              "credential_id": "dgq-lean-six-sigma-certification-path-yellow-gre",
              "gap_type": "certification",
              "item": "DGQ Lean Six Sigma certification path (Yellow / Green / Black Belt)",
              "provider": "Deutsche Gesellschaft für Qualität (DGQ)",
              "why": "The quality association's certification route for Six Sigma and Lean process-improvement roles, built on the DMAIC model with an examination and a practice project.",
              "who_it_is_for": "DGQ addresses staff and managers in production and service companies who run process-improvement projects in their own area.",
              "typical_duration": "typically 8 course days for the Green Belt, including the examination day, per DGQ's course description",
              "next_step": "Check with the provider which variant applies to you before booking anything.",
              "url": "https://dgq.de/ihr-weg-zum-zertifikat/six-sigma/",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            },
            {
              "credential_id": "anabin-database-of-foreign-education-institution",
              "gap_type": "recognition",
              "item": "anabin — database of foreign education institutions and degrees",
              "provider": "Zentralstelle für ausländisches Bildungswesen (ZAB), KMK",
              "why": "The public ZAB database that records how foreign higher-education institutions and degrees are classified in Germany, which employers and authorities consult directly.",
              "who_it_is_for": "Open to anyone needing to look up how an institution or degree is classified; it is a database entry, not a certificate.",
              "typical_duration": "",
              "next_step": "Start with free counselling: the authority, and what it will ask for, depends on your Bundesland.",
              "url": "https://anabin.kmk.org/db/institutionen",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            },
            {
              "credential_id": "aufstiegs-baf-g-afbg",
              "gap_type": "funding",
              "item": "Aufstiegs-BAföG (AFBG)",
              "provider": "Bundesministerium für Bildung und Forschung (BMBF)",
              "why": "A federal scheme of grants and loans towards the cost of vocational advancement qualifications (Fortbildungsabschlüsse) and, in some cases, living costs during them.",
              "who_it_is_for": "In the scheme's own framing: people pursuing a vocational advancement qualification; the site's 'Wer wird gefördert?' section sets out the conditions.",
              "typical_duration": "",
              "next_step": "Ask the listed body whether your case qualifies; eligibility is decided case by case.",
              "url": "https://www.aufstiegs-bafoeg.de/aufstiegsbafoeg/de/home/home_node.html",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            }
          ]
        },
        "outreach": [
          {
            "target_type": "body",
            "target": "Association for work organisation and industrial engineering",
            "organisation": "A methods and work-organisation association",
            "why": "It runs the qualification this route asks for and knows which plants accept it."
          },
          {
            "target_type": "chamber",
            "target": "Industrie- und Handelskammer of the city",
            "organisation": "Chamber of commerce and industry, present in every German city",
            "why": "Chambers keep the local manufacturer lists and certify further training."
          },
          {
            "target_type": "network",
            "target": "Network for internationally qualified engineers",
            "organisation": "A migrant-professional network for engineering",
            "why": "Good for finding plants that hire without the protected title."
          }
        ]
      },
      {
        "archetype_id": "a-tech-service",
        "profile_id": "p-engineer",
        "label": "Technical service and commissioning",
        "reason": "Field service and commissioning accept a lower German level and value the breadth of eight years.",
        "role_families": [
          "tech_service"
        ],
        "approach_role": "Serviceleitung (service manager)",
        "requirements": {
          "german_level_required": "B1",
          "german_why": "Customer visits need spoken German, but reports in this group are often short and templated.",
          "recognition": {
            "required": false
          },
          "credentials": [
            {
              "credential_id": "elektrofachkraft-f-r-festgelegte-t-tigkeiten-ihk",
              "gap_type": "certification",
              "item": "Elektrofachkraft für festgelegte Tätigkeiten (IHK) nach DGUV Vorschrift 3",
              "provider": "IHK Würzburg-Schweinfurt (one of many IHKs offering this course)",
              "why": "A certificate course under DGUV Vorschrift 3 and DGUV-Grundsatz 303-001 that authorises named electrical tasks on installations and machines for people who did not train as electricians.",
              "who_it_is_for": "The IHK names skilled workers from all commercial-technical non-electrical trades.",
              "typical_duration": "typically 120 teaching units in this IHK's listing; DGUV sets a minimum of 80 teaching units, and other IHKs schedule differently",
              "caveat": "One chamber’s course, cited as an example. Every IHK runs its own version with its own dates, scope and admission handling.",
              "next_step": "Check with the provider which variant applies to you before booking anything.",
              "url": "https://www.wuerzburg.ihk.de/weiterbildungsprogramm/elektrofachkraft-fuer-festgelegte-taetigkeiten-ihk-nach-dguv-vorschrift-3-127465",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            },
            {
              "credential_id": "statement-of-comparability-for-foreign-higher-ed",
              "gap_type": "recognition",
              "item": "Statement of Comparability for foreign higher education qualifications",
              "provider": "Zentralstelle für ausländisches Bildungswesen (ZAB), KMK",
              "why": "An official certificate that describes a foreign university degree and states which German qualification it compares to.",
              "who_it_is_for": "ZAB presents it as proof of a qualification towards German authorities, embassies and employers, including for visa and EU Blue Card applications; ZAB states it does not entitle the holder to work in a regulated profession.",
              "typical_duration": "",
              "next_step": "Start with free counselling: the authority, and what it will ask for, depends on your Bundesland.",
              "url": "https://zab.kmk.org/en/statement-comparability",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "en",
              "real": true
            },
            {
              "credential_id": "f-rderung-von-weiterbildung-besch-ftigter-employ",
              "gap_type": "funding",
              "item": "Förderung von Weiterbildung Beschäftigter (employer route)",
              "provider": "Bundesagentur für Arbeit",
              "why": "The employment agency's route by which an employer applies for subsidies towards course costs and, in some cases, wages while an employee trains.",
              "who_it_is_for": "In the agency's own framing: companies wanting to qualify their existing staff; the application runs through the employer, and the local agency assesses each case.",
              "typical_duration": "",
              "next_step": "Ask the listed body whether your case qualifies; eligibility is decided case by case.",
              "url": "https://www.arbeitsagentur.de/unternehmen/finanziell/foerderung-von-weiterbildung",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            },
            {
              "credential_id": "cert-fuehrerschein-umschreibung",
              "gap_type": "certification",
              "item": "German driving licence, or conversion (Umschreibung) of a non-EU licence",
              "provider": "Fahrerlaubnisbehörde of the city you live in",
              "why": "Field-service adverts in this group ask for Fuhrerschein Klasse B as a condition of the post.",
              "who_it_is_for": "Anyone holding a licence issued outside the EU or EEA who intends to keep driving after the first six months.",
              "typical_duration": "typically 2-6 months, depending on whether a test is required",
              "caveat": "No programme link: conversion is handled by the licensing office of your city, and the rules depend on the issuing country.",
              "next_step": "Ask the Fahrerlaubnisbehörde of your city which rules apply to your licence.",
              "url": "",
              "url_status": "",
              "url_checked_on": "",
              "page_language": "",
              "real": true
            }
          ],
          "language_programme": {
            "credential_id": "berufssprachkurse-vocational-german-courses",
            "gap_type": "language",
            "item": "Berufssprachkurse (vocational German courses)",
            "provider": "Bundesamt für Migration und Flüchtlinge (BAMF)",
            "why": "The federal system of vocational German courses, with basic courses at target levels B2 and C1 and special courses for particular occupational fields, ending in a Deutsch-Test für den Beruf.",
            "who_it_is_for": "BAMF frames them for immigrants who need work-related German; courses run full time or part time, at a provider or with an employer.",
            "typical_duration": "",
            "next_step": "Check the level the employer asks for before booking, and whether a funded course covers it.",
            "url": "https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/DeutschBeruf/deutsch-beruf-node.html",
            "url_status": 200,
            "url_checked_on": "2026-09-22",
            "page_language": "en",
            "real": true
          }
        },
        "outreach": [
          {
            "target_type": "body",
            "target": "Engineering professional association, service and maintenance branch",
            "organisation": "A national engineering association with Land branches",
            "why": "Service departments recruit through the branch groups."
          },
          {
            "target_type": "chamber",
            "target": "Industrie- und Handelskammer of the city",
            "organisation": "Chamber of commerce and industry, present in every German city",
            "why": "It certifies the short electrical qualification this route may need."
          },
          {
            "target_type": "network",
            "target": "Network for internationally qualified technical staff",
            "organisation": "A migrant-professional network for engineering",
            "why": "Licence conversion is a recurring topic there."
          }
        ]
      },
      {
        "archetype_id": "a-backend-dev",
        "profile_id": "p-developer",
        "label": "Backend developer in an English-working team",
        "reason": "Five years of backend work fits the teams that run in English and do not ask for recognition.",
        "role_families": [
          "software_dev"
        ],
        "approach_role": "Engineering team lead",
        "requirements": {
          "german_level_required": "B1",
          "german_why": "The English-only posts do not need it, but the rest of this group asks for at least B1 for everything outside the codebase.",
          "recognition": {
            "required": false
          },
          "credentials": [
            {
              "credential_id": "aws-certified-developer-associate",
              "gap_type": "certification",
              "item": "AWS Certified Developer – Associate",
              "provider": "Amazon Web Services (private vendor)",
              "why": "A vendor examination on developing, deploying and debugging applications on AWS.",
              "who_it_is_for": "AWS frames it for people with development experience on its platform; there is no German public body that certifies backend developers, so vendor certificates are what job ads name.",
              "typical_duration": "",
              "caveat": "A private vendor certificate, not a German qualification. It is listed only because no public body certifies this role.",
              "next_step": "Check with the provider which variant applies to you before booking anything.",
              "url": "https://aws.amazon.com/certification/certified-developer-associate/",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "en",
              "real": true
            },
            {
              "credential_id": "weiterbildungssuche-national-course-database",
              "gap_type": "funding",
              "item": "Weiterbildungssuche (national course database)",
              "provider": "Bundesagentur für Arbeit / mein NOW",
              "why": "The public search over continuing-training courses in Germany, marking which courses and providers are approved for public funding.",
              "who_it_is_for": "Open to anyone; it shows which courses a Bildungsgutschein or other public funding could be used for, without deciding any individual case.",
              "typical_duration": "",
              "next_step": "Ask the listed body whether your case qualifies; eligibility is decided case by case.",
              "url": "https://mein-now.de/weiterbildungssuche/",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            }
          ],
          "language_programme": {
            "credential_id": "berufssprachkurse-vocational-german-courses",
            "gap_type": "language",
            "item": "Berufssprachkurse (vocational German courses)",
            "provider": "Bundesamt für Migration und Flüchtlinge (BAMF)",
            "why": "The federal system of vocational German courses, with basic courses at target levels B2 and C1, available full time or part time including evening classes.",
            "who_it_is_for": "BAMF frames them for immigrants who need work-related German; courses can be run at a provider or directly with an employer.",
            "typical_duration": "",
            "next_step": "Check the level the employer asks for before booking, and whether a funded course covers it.",
            "url": "https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/DeutschBeruf/deutsch-beruf-node.html",
            "url_status": 200,
            "url_checked_on": "2026-09-22",
            "page_language": "en",
            "real": true
          }
        },
        "outreach": [
          {
            "target_type": "body",
            "target": "Professional association for computing",
            "organisation": "A national computing society with local chapters",
            "why": "Chapters run the meetups where English-working teams recruit."
          },
          {
            "target_type": "chamber",
            "target": "Industrie- und Handelskammer of the city",
            "organisation": "Chamber of commerce and industry, present in every German city",
            "why": "It keeps the local employer register and runs newcomer information evenings."
          },
          {
            "target_type": "network",
            "target": "Network for internationally qualified tech professionals",
            "organisation": "A migrant-professional network for the tech sector",
            "why": "Referrals here reach the teams that already hire without German."
          }
        ]
      },
      {
        "archetype_id": "a-data-eng",
        "profile_id": "p-developer",
        "label": "Data engineer, pipelines and warehousing",
        "reason": "The data half of the profile fits pipeline and warehouse posts, which are the most English-tolerant group here.",
        "role_families": [
          "data_eng"
        ],
        "approach_role": "Head of data",
        "requirements": {
          "german_level_required": "B1",
          "german_why": "Stakeholders outside the data team are usually German-speaking, even where the team is not.",
          "recognition": {
            "required": false
          },
          "credentials": [
            {
              "credential_id": "aws-certified-data-engineer-associate",
              "gap_type": "certification",
              "item": "AWS Certified Data Engineer – Associate",
              "provider": "Amazon Web Services (private vendor)",
              "why": "A vendor examination on building and operating data pipelines, storage and transformation on AWS.",
              "who_it_is_for": "AWS frames it for people with data-engineering experience on its platform; no German public body certifies data engineers, so vendor certificates are what job ads name.",
              "typical_duration": "",
              "caveat": "A private vendor certificate, not a German qualification. It is listed only because no public body certifies this role.",
              "next_step": "Check with the provider which variant applies to you before booking anything.",
              "url": "https://aws.amazon.com/certification/certified-data-engineer-associate/",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "en",
              "real": true
            },
            {
              "credential_id": "bildungsgutschein",
              "gap_type": "funding",
              "item": "Bildungsgutschein",
              "provider": "Bundesagentur für Arbeit",
              "why": "A voucher through which the employment agency or jobcentre takes on the cost of an approved continuing-training measure.",
              "who_it_is_for": "In the agency's own framing: people whose training is needed to end unemployment or avert impending unemployment; a personal advisory meeting decides the individual case, and both provider and course must be approved by a competent body.",
              "typical_duration": "",
              "next_step": "Ask the listed body whether your case qualifies; eligibility is decided case by case.",
              "url": "https://www.arbeitsagentur.de/karriere-und-weiterbildung/bildungsgutschein",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            }
          ],
          "language_programme": {
            "credential_id": "telc-deutsch-b2-c1-beruf",
            "gap_type": "language",
            "item": "telc Deutsch B2·C1 Beruf",
            "provider": "telc gGmbH",
            "why": "A workplace German examination reported at either B2 or C1, testing communication in written and spoken work situations.",
            "who_it_is_for": "telc frames it for people who need to show work-related German across two levels in one examination.",
            "typical_duration": "",
            "next_step": "Check the level the employer asks for before booking, and whether a funded course covers it.",
            "url": "https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-b2c1-business/",
            "url_status": 200,
            "url_checked_on": "2026-09-22",
            "page_language": "en",
            "real": true
          }
        },
        "outreach": [
          {
            "target_type": "body",
            "target": "Professional association for computing, data chapter",
            "organisation": "A national computing society with local chapters",
            "why": "Data chapters are small and the hiring leads speak at them."
          },
          {
            "target_type": "chamber",
            "target": "Industrie- und Handelskammer of the city",
            "organisation": "Chamber of commerce and industry, present in every German city",
            "why": "Industrial employers hiring data staff are on the chamber's register rather than on job portals."
          },
          {
            "target_type": "network",
            "target": "Network for internationally qualified tech professionals",
            "organisation": "A migrant-professional network for the tech sector",
            "why": "The same referral route as the backend archetype, different rooms."
          }
        ]
      },
      {
        "archetype_id": "a-it-ops",
        "profile_id": "p-developer",
        "label": "IT operations and platform administration",
        "reason": "Operations posts are the widest door for a developer without German, though the German-facing ones ask for more language.",
        "role_families": [
          "it_ops"
        ],
        "approach_role": "IT-Leitung (head of IT)",
        "requirements": {
          "german_level_required": "B2",
          "german_why": "Operations touches every other department, and support conversations in this group are in German.",
          "recognition": {
            "required": false
          },
          "credentials": [
            {
              "credential_id": "lpic-1-linux-administrator",
              "gap_type": "certification",
              "item": "LPIC-1 Linux Administrator",
              "provider": "Linux Professional Institute (LPI, vendor-neutral non-profit)",
              "why": "A vendor-neutral certification, taken as two examinations, on installing, configuring and maintaining Linux systems and command-line administration.",
              "who_it_is_for": "LPI frames it as its entry-level professional certification for Linux system administration.",
              "typical_duration": "",
              "next_step": "Check with the provider which variant applies to you before booking anything.",
              "url": "https://www.lpi.org/our-certifications/lpic-1-overview/",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "en",
              "real": true
            },
            {
              "credential_id": "externenpr-fung-ihk-final-examination-without-an",
              "gap_type": "certification",
              "item": "Externenprüfung — IHK final examination without an apprenticeship",
              "provider": "IHK Berlin (one of many IHKs; rules and contact differ by chamber district)",
              "why": "Admission to the IHK final examination in a recognised training occupation such as Fachinformatiker on the basis of work experience rather than a completed apprenticeship, under §§ 46 and 62 BBiG.",
              "who_it_is_for": "In the IHK's words: experienced practitioners whose work has covered the essential requirements of the target occupation, normally evidenced by one and a half times the usual training duration; applicants apply to the IHK for the district where they live.",
              "typical_duration": "the IHK states a practical-experience requirement of about 4.5 years for a three-year occupation",
              "caveat": "One chamber’s rules, cited as an example. Admission is handled per chamber district and differs between them.",
              "next_step": "Check with the provider which variant applies to you before booking anything.",
              "url": "https://www.ihk.de/berlin/pruefungen-lehrgaenge/pruefungen/ausbildungspruefungen/termine-in-der-aus-und-weiterbildung/voraussetzungen-zur-pruefungszulassung/externenpruefung-2262828",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            },
            {
              "credential_id": "bildungsgutschein",
              "gap_type": "funding",
              "item": "Bildungsgutschein",
              "provider": "Bundesagentur für Arbeit",
              "why": "A voucher through which the employment agency or jobcentre takes on the cost of an approved continuing-training measure, including retraining and partial qualifications.",
              "who_it_is_for": "In the agency's own framing: people whose training is needed to end unemployment or avert impending unemployment; a personal advisory meeting decides the individual case, and both provider and course must be approved by a competent body.",
              "typical_duration": "",
              "next_step": "Ask the listed body whether your case qualifies; eligibility is decided case by case.",
              "url": "https://www.arbeitsagentur.de/karriere-und-weiterbildung/bildungsgutschein",
              "url_status": 200,
              "url_checked_on": "2026-09-22",
              "page_language": "de",
              "real": true
            }
          ],
          "language_programme": {
            "credential_id": "berufssprachkurse-vocational-german-courses",
            "gap_type": "language",
            "item": "Berufssprachkurse (vocational German courses)",
            "provider": "Bundesamt für Migration und Flüchtlinge (BAMF)",
            "why": "The federal system of vocational German courses, with basic courses at target levels B2 and C1 and special courses for particular occupational fields.",
            "who_it_is_for": "BAMF frames them for immigrants who need work-related German; courses run full time or part time, at a provider or with an employer.",
            "typical_duration": "",
            "next_step": "Check the level the employer asks for before booking, and whether a funded course covers it.",
            "url": "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/DeutschBeruf/deutsch-beruf-node.html",
            "url_status": 200,
            "url_checked_on": "2026-09-22",
            "page_language": "de",
            "real": true
          }
        },
        "outreach": [
          {
            "target_type": "body",
            "target": "Professional association for computing, systems chapter",
            "organisation": "A national computing society with local chapters",
            "why": "Operations roles are filled by word of mouth more than the developer ones."
          },
          {
            "target_type": "chamber",
            "target": "Industrie- und Handelskammer of the city",
            "organisation": "Chamber of commerce and industry, present in every German city",
            "why": "Mid-sized employers with in-house IT are on the chamber register."
          },
          {
            "target_type": "network",
            "target": "Network for internationally qualified tech professionals",
            "organisation": "A migrant-professional network for the tech sector",
            "why": "Where the German-language expectation gets discussed honestly."
          }
        ]
      }
    ],
    "programmes_source": {
      "checked_on": "2026-09-22",
      "entries": 35,
      "note": "Merged from a link-checked programme survey. Fee information was deliberately not recorded, and nothing here states that any particular person qualifies for anything."
    }
  },
  "credentialMap": {
    "schema_version": 1,
    "synthetic": false,
    "note": "This file describes procedures, not people. It never states whether a qualification is equivalent: that is assessed by an authority, against a German reference occupation, and the authority varies by Bundesland.",
    "disclaimer": "Not legal or recognition advice. Free official counselling: anerkennung-in-deutschland.de",
    "professions": {
      "nurse-general-care": {
        "credential_path_id": "cp-nurse-general-care",
        "regulated": true,
        "regulated_note": "Nursing is a regulated profession. Recognition is required before working under the professional title.",
        "reference_occupation": "Pflegefachfrau / Pflegefachmann",
        "authority": "varies by Land",
        "next_step": "Apply for recognition (Antrag auf Anerkennung) at the competent body of the Land you intend to work in, and ask for free counselling first.",
        "equivalence_verdict": "not assessed here",
        "zab_note": "A ZAB Statement of Comparability is not recognition and never substitutes for it in a regulated profession.",
        "source_url": "https://www.anerkennung-in-deutschland.de/en/interest/recognition/regulated-professions"
      },
      "mechanical-engineering": {
        "credential_path_id": "cp-mechanical-engineering",
        "regulated": true,
        "regulated_note": "The title Ingenieur / Ingenieurin is protected and needs permission from the Ingenieurkammer of the Land. Engineering work itself can often be done under another job title without it.",
        "reference_occupation": "Ingenieur / Ingenieurin (Maschinenbau)",
        "authority": "varies by Land",
        "next_step": "Ask the Ingenieurkammer of the Land whether the post you want requires the protected title, and apply there if it does.",
        "equivalence_verdict": "not assessed here",
        "zab_note": "For posts that do not require the protected title, employers sometimes ask for a ZAB Statement of Comparability. It is not recognition and is generally not required to work.",
        "source_url": "https://www.anerkennung-in-deutschland.de/en/interest/recognition/non-regulated-professions"
      },
      "software-development": {
        "credential_path_id": "cp-software-development",
        "regulated": false,
        "regulated_note": "Software development is not a regulated profession. You may work in it without recognition.",
        "reference_occupation": "Fachinformatiker / Fachinformatikerin Anwendungsentwicklung",
        "authority": "varies by Land",
        "next_step": "No recognition procedure is needed to work. If an employer or a visa procedure asks for a document about the degree, ask the counselling service which one applies.",
        "equivalence_verdict": "not assessed here",
        "zab_note": "A ZAB Statement of Comparability is generally not required to work and is explicitly not recognition.",
        "source_url": "https://www.anerkennung-in-deutschland.de/en/interest/recognition/non-regulated-professions"
      }
    }
  },
  "contextMap": {
    "schema_version": 1,
    "synthetic": true,
    "note": "What the page asks back, and the keyword map it uses to read a free-text note. Matching is literal substring matching on a lower-cased string: no model, no randomness, no inference. A phrase that matches nothing is still recorded and the page does not claim it changed anything.",
    "questions": [
      {
        "question_id": "shift_work",
        "text": "Can you work shifts, including nights?",
        "fact": "shift_work"
      },
      {
        "question_id": "mobility",
        "text": "Would you move to another city for the right role?",
        "fact": "mobility"
      },
      {
        "question_id": "licence",
        "text": "Do you hold a driving licence?",
        "fact": "licence"
      },
      {
        "question_id": "fixed_term",
        "text": "Are you open to a fixed-term contract to start?",
        "fact": "fixed_term"
      }
    ],
    "keywords": [
      {
        "fact": "shift_work",
        "value": true,
        "match": [
          "night",
          "nights",
          "shift",
          "shifts",
          "nachtdienst",
          "schicht"
        ]
      },
      {
        "fact": "mobility",
        "value": true,
        "match": [
          "relocate",
          "relocation",
          "move city",
          "willing to move",
          "umzug",
          "mobil"
        ]
      },
      {
        "fact": "licence",
        "value": true,
        "match": [
          "driving licence",
          "driving license",
          "driver's licence",
          "fuhrerschein",
          "fuehrerschein",
          "klasse b"
        ]
      },
      {
        "fact": "part_time",
        "value": true,
        "match": [
          "part-time",
          "part time",
          "teilzeit"
        ]
      },
      {
        "fact": "remote",
        "value": true,
        "match": [
          "remote",
          "home office",
          "homeoffice",
          "hybrid"
        ]
      }
    ],
    "effects": {
      "shift_work": "Listings flagged requires_shift_work score full context fit when yes, little when no, and sit at 0.6 while unanswered.",
      "mobility": "Raises the floor on city fit from 0.4 to 0.8, so another city stops being a penalty.",
      "licence": "Listings flagged requires_licence behave as above, and yes also closes the driving-licence gap.",
      "fixed_term": "Listings whose contract_type is fixed_term behave as above.",
      "part_time": "Only affects listings flagged part_time_possible.",
      "remote": "Only affects listings flagged remote_possible."
    }
  }
};
