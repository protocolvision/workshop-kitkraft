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
        "held_credential_ids": [
          "course-sql-modelling"
        ],
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
    "note": "Archetypes are judgement written down in advance: three roles each invented profile could plausibly land. Requirements are illustrative only. Outreach targets are roles and organisation types, never people.",
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
              "credential_id": "cert-telc-b2-pflege",
              "gap_type": "certification",
              "item": "telc Deutsch B2-C1 Beruf Pflege certificate",
              "why": "Several Länder and many hospital employers ask for a nursing-specific language certificate rather than a general B2.",
              "typical_duration": "typically 4-8 months of course time, depending on the level you start from",
              "next_step": "Ask the competent body which certificate it accepts before booking a course."
            },
            {
              "credential_id": "course-anpassung-or-kenntnis",
              "gap_type": "course",
              "item": "Anpassungslehrgang or preparation for the Kenntnisprufung, whichever the authority sets",
              "why": "Where the authority finds substantial differences, one of these two is the route named in its decision. Which one applies is not decided here.",
              "typical_duration": "typically 6-12 months for an Anpassungslehrgang; typically 3-6 months of preparation for a Kenntnisprufung",
              "next_step": "Wait for the authority's written decision, which names the route that applies to your case."
            }
          ]
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
              "credential_id": "course-pflegebasis",
              "gap_type": "course",
              "item": "Basiskurs Pflege or an equivalent care-assistant qualification from a recognised provider",
              "why": "Assistant posts outside the recognition procedure usually ask for a short German care qualification.",
              "typical_duration": "typically 2-4 months part time",
              "next_step": "Ask the employer whether the Anerkennungspraktikum route makes this course unnecessary in your case."
            },
            {
              "credential_id": "cert-first-aid-de",
              "gap_type": "certification",
              "item": "Erste-Hilfe-Kurs certificate to German standards",
              "why": "Routinely asked for at the start of a care post.",
              "typical_duration": "typically one day",
              "next_step": "Book with a recognised provider."
            }
          ]
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
              "credential_id": "course-qm-gesundheit",
              "gap_type": "course",
              "item": "Short course in Qualitatsmanagement im Gesundheitswesen",
              "why": "Quality and coordination ads in this group name a QM qualification more often than they name recognition.",
              "typical_duration": "typically 2-5 months part time",
              "next_step": "Compare providers through the Land's further-training database."
            },
            {
              "credential_id": "cert-goethe-telc-b2",
              "gap_type": "certification",
              "item": "General B2 certificate, for example Goethe-Zertifikat B2 or telc Deutsch B2",
              "why": "Non-regulated posts accept a general certificate, so the nursing-specific one is not needed for this route.",
              "typical_duration": "typically 3-6 months of course time from B1",
              "next_step": "Book the exam once a placement test puts you at B2."
            },
            {
              "credential_id": "doc-zab-statement",
              "gap_type": "document",
              "item": "ZAB Statement of Comparability for the foreign degree",
              "why": "Not recognition, and generally not required to work. Some employers and visa procedures ask for it as a document about the qualification.",
              "typical_duration": "typically 3 months for the Zentralstelle to issue it",
              "next_step": "Ask the employer whether they need it at all before applying for one."
            }
          ]
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
            "why": "Where the post carries the title Ingenieur, the Ingenieurkammer of the Land must permit it. Work under another job title often does not need it.",
            "typical_duration": "typically 2-4 months for the chamber to decide",
            "next_step": "Ask the Ingenieurkammer of the Land whether the posts you want require the title, then apply if they do."
          },
          "credentials": [
            {
              "credential_id": "cert-cad-vendor",
              "gap_type": "certification",
              "item": "Vendor certification for the CAD system the employer uses",
              "why": "Ads in this group name a specific CAD system, and a vendor certificate is the shortest way to evidence it.",
              "typical_duration": "typically 1-3 months of part-time preparation",
              "next_step": "Read the ads first and certify on the system they actually name."
            },
            {
              "credential_id": "course-din-iso-gps",
              "gap_type": "course",
              "item": "Refresher on German and ISO drawing standards, for example geometrical product specification",
              "why": "Tolerancing conventions differ, and this group's work is checked against those standards.",
              "typical_duration": "typically 2-5 days",
              "next_step": "Chambers and technical academies run these as short seminars."
            }
          ]
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
              "credential_id": "course-six-sigma-green",
              "gap_type": "course",
              "item": "Six Sigma Green Belt training",
              "why": "Process improvement posts in this group name it often enough that its absence is noticed.",
              "typical_duration": "typically 1-3 months part time",
              "next_step": "Check whether the employer runs its own in-house programme first."
            },
            {
              "credential_id": "cert-refa-grundschein",
              "gap_type": "certification",
              "item": "REFA Grundschein in work organisation, or a comparable Arbeitsvorbereitung qualification",
              "why": "German manufacturing planning has its own method vocabulary, and this is the usual evidence of it.",
              "typical_duration": "typically 2-4 months part time",
              "next_step": "Ask the employer which of the two they recognise."
            },
            {
              "credential_id": "doc-zab-statement",
              "gap_type": "document",
              "item": "ZAB Statement of Comparability for the foreign degree",
              "why": "Not recognition, and generally not required to work. Useful only where an employer or a visa procedure asks for a document about the degree.",
              "typical_duration": "typically 3 months for the Zentralstelle to issue it",
              "next_step": "Ask whether it is needed before applying for one."
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
              "credential_id": "cert-fuehrerschein-umschreibung",
              "gap_type": "certification",
              "item": "German driving licence, or conversion (Umschreibung) of a non-EU licence",
              "why": "Field service ads in this group ask for Fuhrerschein Klasse B as a condition of the post.",
              "typical_duration": "typically 2-6 months, depending on whether a test is required",
              "next_step": "Check the conversion rules with the Fuhrerscheinstelle of the city."
            },
            {
              "credential_id": "course-efft",
              "gap_type": "course",
              "item": "Elektrofachkraft fur festgelegte Tatigkeiten, where the post includes electrical work",
              "why": "Commissioning posts that touch electrical systems require a German qualification for those tasks.",
              "typical_duration": "typically 1-3 weeks",
              "next_step": "Ask the employer whether the post's tasks fall under it."
            }
          ]
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
              "credential_id": "cert-cloud-dev-associate",
              "gap_type": "certification",
              "item": "Associate-level developer certification for the cloud platform the employer uses",
              "why": "The ads in this group name a platform, and an associate certificate is the cheapest signal for a candidate without a German work history.",
              "typical_duration": "typically 2-4 months of part-time preparation",
              "next_step": "Pick the platform from the shortlist rather than in advance."
            },
            {
              "credential_id": "doc-zab-statement",
              "gap_type": "document",
              "item": "ZAB Statement of Comparability for the degree",
              "why": "Not recognition, and not required to work in this non-regulated field. It appears here only because visa procedures sometimes ask for it.",
              "typical_duration": "typically 3 months for the Zentralstelle to issue it",
              "next_step": "Ask whether the specific procedure needs it before applying."
            }
          ]
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
              "credential_id": "cert-cloud-data-associate",
              "gap_type": "certification",
              "item": "Associate-level data engineering certification for the employer's cloud platform",
              "why": "Pipeline posts in this group screen on platform experience first.",
              "typical_duration": "typically 2-4 months of part-time preparation",
              "next_step": "Match the platform to the shortlisted employers before booking."
            },
            {
              "credential_id": "course-sql-modelling",
              "gap_type": "course",
              "item": "Dimensional modelling and advanced SQL course",
              "why": "Warehouse posts ask for modelling, not only pipelines.",
              "typical_duration": "typically 1-2 months part time",
              "next_step": "Any structured course is enough; the portfolio matters more."
            }
          ]
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
              "credential_id": "cert-lpic1",
              "gap_type": "certification",
              "item": "Linux administration certification, for example LPIC-1",
              "why": "Administration posts screen on a Linux certificate where there is no German work history to read.",
              "typical_duration": "typically 2-4 months of part-time preparation",
              "next_step": "Two exams; book them separately."
            }
          ]
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
    ]
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
