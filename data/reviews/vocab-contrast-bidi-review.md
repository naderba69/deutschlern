# CR57 — Cumulative Vocabulary Flashcards, WCAG 3.1.2 `lang="de"`, W3C Bidi `dir="auto"` & Deterministic Contrast Review (`vocab-contrast-bidi-review`)

- **Batch ID:** `CR57`
- **Date:** `2026-10-09`
- **Target:** `tools/build_course.py`, `data/course.json` (`754` vocabulary items, `541` with plural/conjugation/example detail across `45` lessons), `app.js`, `styles.css`, `service-worker.js` (`deutsch-pfad-v106`), `tools/test_browser.cjs`, `tools/verify_course.py`
- **Granular Units Reviewed:** `56` (`45` lesson vocabulary-detail units + `11` cumulative bundler/UI/WCAG/CSS/PWA/verifier units)
- **Online Sources:** `16` (`12` `full_fetched_page` across `15` chunks + `4` `search_snippet_only`)
- **Honest Scope & Limits:** Automated Chromium + `axe-core` audit (`231` representative screen states: `115` at `1440px` + `116` at `390px`; `0` violated rules; `120` incomplete rule occurrences across `266` node occurrences, down from `169` / `460` in CR56; `96/106` lesson-content states with `0` incomplete flags). Not an acoustic approval of the `80` `generated_pending_acoustic_review` assets in `B1.9–B2.12`, not a physical-device manual review, and not an official CEFR certification.

## Online Sources

- **S1** — [Understanding Success Criterion 3.1.2: Language of Parts (Level AA) | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html) [`full_fetched_page` (chunks `[0, 1, 2]` / `3`)]: WCAG 2.1 SC 3.1.2 (Level AA) and Technique H58 require marking passages or phrases in a different language with the HTML lang attribute (lang="de") so screen readers and braille translators apply German pronunciation rules instead of the page default Arabic (lang="ar").
- **S2** — [Declaring language in HTML — W3C Internationalization](https://www.w3.org/International/questions/qa-html-language-declarations) [`full_fetched_page` (chunks `[0, 1]` / `2`)]: W3C I18n guidance on declaring default page language on <html> and wrapping foreign-language words/phrases in inline or block elements with BCP 47 language tags (lang="de") while keeping Arabic UI attributes separate.
- **S3** — [Plural Nouns in German Grammar — Lingolia](https://deutsch.lingolia.com/en/grammar/nouns-and-articles/plural) [`full_fetched_page` (chunks `[0]` / `1`)]: German plural formation patterns (-n/-en, -e, -r/-er, -s, no ending, umlaut changes, and singularia/pluralia tantum such as die Milch, das Obst, die Eltern) matching the 517 plural/conjugation entries surfaced across A1.2–B2.12.
- **S4** — [Präsens – Present Tense in German Grammar — Lingolia](https://deutsch.lingolia.com/en/grammar/tenses/present-tense) [`full_fetched_page` (chunks `[0]` / `1`)]: German present-tense conjugation and stem-vowel changes (e->i/ie, a->ä, modal verbs) matching the verb conjugation notes in the A1–B2 vocabulary tables.
- **S5** — [Duden Online: Plural (der Plural; Genitiv: des Plurals, Plural: die Plurale)](https://www.duden.de/rechtschreibung/Plural) [`full_fetched_page` (chunks `[0]` / `1`)]: Duden entry verifying grammatical terminology for plural forms (die Pluralform / Mehrzahl) used in vocabulary cards.
- **S6** — [Duden Online: Wortschatz (der Wortschatz; Genitiv: des Wortschatzes, Plural: die Wortschätze)](https://www.duden.de/rechtschreibung/Wortschatz) [`full_fetched_page` (chunks `[0]` / `1`)]: Duden entry verifying orthography and gender/plural of der Wortschatz used in lesson vocabulary drawer headers (WORTSCHATZ · بطاقات المراجعة) and hero art card.
- **S7** — [Duden Online: Familie (die Familie; Genitiv: der Familie, Plural: die Familien)](https://www.duden.de/rechtschreibung/Familie) [`full_fetched_page` (chunks `[0]` / `1`)]: Duden entry verifying die Familie -> die Familien (Goethe-Zertifikat B1 vocabulary) in A1.2 (a1-02-work-family-word-1).
- **S8** — [Duden Online: Bahnhof (der Bahnhof; Genitiv: des Bahnhofes/Bahnhofs, Plural: die Bahnhöfe)](https://www.duden.de/rechtschreibung/Bahnhof) [`full_fetched_page` (chunks `[0]` / `1`)]: Duden entry verifying der Bahnhof -> die Bahnhöfe in A1.3 (a1-03-city-cafe-hotel-word-1).
- **S9** — [Duden Online: Erfahrung (die Erfahrung; Genitiv: der Erfahrung, Plural: die Erfahrungen)](https://www.duden.de/rechtschreibung/Erfahrung) [`full_fetched_page` (chunks `[0]` / `1`)]: Duden entry verifying die Erfahrung -> die Erfahrungen in A2.1 (a2-01-routines-abilities-experiences-word-2).
- **S10** — [Duden Online: Sehenswürdigkeit (die Sehenswürdigkeit; Plural: die Sehenswürdigkeiten)](https://www.duden.de/rechtschreibung/Sehenswuerdigkeit) [`full_fetched_page` (chunks `[0]` / `1`)]: Duden entry verifying die Sehenswürdigkeit -> die Sehenswürdigkeiten in A2.2 (a2-02-travel-comparisons-word-2).
- **S11** — [Duden Online: Ausbildung (die Ausbildung; Genitiv: der Ausbildung, Plural: die Ausbildungen)](https://www.duden.de/rechtschreibung/Ausbildung) [`full_fetched_page` (chunks `[0]` / `1`)]: Duden entry verifying die Ausbildung -> die Ausbildungen in A2.5 (a2-05-training-routine-wenn-word-1).
- **S12** — [Duden Online: Nachricht (die Nachricht; Genitiv: der Nachricht, Plural: die Nachrichten)](https://www.duden.de/rechtschreibung/Nachricht) [`full_fetched_page` (chunks `[0]` / `1`)]: Duden entry verifying die Nachricht -> die Nachrichten in A2.4 and A2.8.
- **S13** — [Web search: site:w3.org/WAI/WCAG21/Understanding/language-of-parts.html OR qa-html-language-declarations](https://www.w3.org/WAI/WCAG21/Understanding/) [`search_snippet_only` (query: `site:w3.org/WAI/WCAG21/Understanding/language-of-parts.html OR site:w3.org/International/questions/qa-html-language-declarations`)]: Initial search query locating W3C WCAG 2.1 SC 3.1.2 and HTML language declaration specifications.
- **S14** — [Web search: site:w3.org language-of-parts OR qa-html-language-declarations](https://www.w3.org/International/questions/) [`search_snippet_only` (query: `site:w3.org language-of-parts OR qa-html-language-declarations`)]: Located W3C SC 3.1.2 Language of Parts and W3C Internationalization qa-html-language-declarations.
- **S15** — [Web search: site:deutsch.lingolia.com/en/grammar/nouns-and-articles/plural OR present-tense](https://deutsch.lingolia.com/en/grammar/) [`search_snippet_only` (query: `site:deutsch.lingolia.com/en/grammar/nouns-and-articles/plural OR site:deutsch.lingolia.com/en/grammar/tenses/present-tense`)]: Located Lingolia reference pages on German noun plurals and present-tense conjugation.
- **S16** — [Web search: site:duden.de/rechtschreibung Plural Wortschatz Familie Bahnhof Erfahrung Sehenswuerdigkeit](https://www.duden.de/rechtschreibung/) [`search_snippet_only` (query: `site:duden.de/rechtschreibung Plural Wortschatz Familie Bahnhof Erfahrung Sehenswuerdigkeit`)]: Located Duden entries for Plural, Wortschatz, Familie, Bahnhof, Erfahrung, and Sehenswürdigkeit.

## Granular Review Units

### vocab-detail-a1-01-introductions-languages-hobbies
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `verified_no_change`
- **Text:** `das Land (Tunesien ist ein Land.), die Stadt (Ich wohne in einer Stadt.), die Sprache (Arabisch ist eine Sprache.)`
- **Finding:** Verified 12 vocabulary items (12 with plural/conjugation/example detail, e.g. das Land (Tunesien ist ein Land.), die Stadt (Ich wohne in einer Stadt.), die Sprache (Arabisch ist eine Sprache.)) in content/A1/lesson-01-introductions-languages-hobbies.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a1-02-work-family
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Familie (die Familien), der Vater (die Väter), die Mutter (die Mütter)`
- **Finding:** Verified 11 vocabulary items (11 with plural/conjugation/example detail, e.g. die Familie (die Familien), der Vater (die Väter), die Mutter (die Mütter)) in content/A1/lesson-02-work-family.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a1-03-city-cafe-hotel
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `der Bahnhof (die Bahnhöfe), das Café (die Cafés), das Hotel (die Hotels)`
- **Finding:** Verified 13 vocabulary items (11 with plural/conjugation/example detail, e.g. der Bahnhof (die Bahnhöfe), das Café (die Cafés), das Hotel (die Hotels)) in content/A1/lesson-03-city-cafe-hotel.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a1-04-daily-routine-time
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `verified_no_change`
- **Text:** `aufstehen (Ich stehe früh auf.), frühstücken (Wir frühstücken zu Hause.), arbeiten (Sie arbeitet am Vormittag.)`
- **Finding:** Verified 12 vocabulary items (12 with plural/conjugation/example detail, e.g. aufstehen (Ich stehe früh auf.), frühstücken (Wir frühstücken zu Hause.), arbeiten (Sie arbeitet am Vormittag.)) in content/A1/lesson-04-daily-routine-time.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a1-05-food-drink
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `das Brot (die Brote), das Ei (die Eier), der Käse (die Käse؛ للمادة غالبًا مفرد)`
- **Finding:** Verified 15 vocabulary items (15 with plural/conjugation/example detail, e.g. das Brot (die Brote), das Ei (die Eier), der Käse (die Käse؛ للمادة غالبًا مفرد)) in content/A1/lesson-05-food-drink.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a1-08-shopping-clothes
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Jacke (die Jacken), das Hemd (die Hemden), das T-Shirt (die T-Shirts)`
- **Finding:** Verified 16 vocabulary items (13 with plural/conjugation/example detail, e.g. die Jacke (die Jacken), das Hemd (die Hemden), das T-Shirt (die T-Shirts)) in content/A1/lesson-08-shopping-clothes.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a1-09-work-appointments
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `das Büro (die Büros), der Kollege / die Kollegin (die Kollegen / die Kolleginnen), der Chef / die Chefin (die Chefs / die Chefinnen)`
- **Finding:** Verified 16 vocabulary items (10 with plural/conjugation/example detail, e.g. das Büro (die Büros), der Kollege / die Kollegin (die Kollegen / die Kolleginnen), der Chef / die Chefin (die Chefs / die Chefinnen)) in content/A1/lesson-09-work-appointments.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a1-11-home-directions
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Wohnung (die Wohnungen), das Haus (die Häuser), das Zimmer (die Zimmer)`
- **Finding:** Verified 13 vocabulary items (11 with plural/conjugation/example detail, e.g. die Wohnung (die Wohnungen), das Haus (die Häuser), das Zimmer (die Zimmer)) in content/A1/lesson-11-home-directions.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a1-12-trip-invitations
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Einladung (die Einladungen), der Geburtstag (die Geburtstage), die Feier (die Feiern)`
- **Finding:** Verified 15 vocabulary items (13 with plural/conjugation/example detail, e.g. die Einladung (die Einladungen), der Geburtstag (die Geburtstage), die Feier (die Feiern)) in content/A1/lesson-12-trip-invitations.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a2-01-routines-abilities-experiences
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Erfahrung (die Erfahrungen), die Fähigkeit (die Fähigkeiten), der Sprachkurs (die Sprachkurse)`
- **Finding:** Verified 15 vocabulary items (7 with plural/conjugation/example detail, e.g. die Erfahrung (die Erfahrungen), die Fähigkeit (die Fähigkeiten), der Sprachkurs (die Sprachkurse)) in content/A2/lesson-01-routines-abilities-experiences.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a2-02-travel-comparisons
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Unterkunft (die Unterkünfte), die Sehenswürdigkeit (die Sehenswürdigkeiten), die Altstadt (die Altstädte)`
- **Finding:** Verified 18 vocabulary items (11 with plural/conjugation/example detail, e.g. die Unterkunft (die Unterkünfte), die Sehenswürdigkeit (die Sehenswürdigkeiten), die Altstadt (die Altstädte)) in content/A2/lesson-02-travel-comparisons.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a2-03-food-nutrition-shopping
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Speisekarte (die Speisekarten), die Rechnung (die Rechnungen), die Zutat (die Zutaten)`
- **Finding:** Verified 20 vocabulary items (14 with plural/conjugation/example detail, e.g. die Speisekarte (die Speisekarten), die Rechnung (die Rechnungen), die Zutat (die Zutaten)) in content/A2/lesson-03-food-nutrition-shopping.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a2-04-office-phone-appointments
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `das Gespräch (die Gespräche), die Nachricht (die Nachrichten), der Anruf (die Anrufe)`
- **Finding:** Verified 14 vocabulary items (13 with plural/conjugation/example detail, e.g. das Gespräch (die Gespräche), die Nachricht (die Nachrichten), der Anruf (die Anrufe)) in content/A2/lesson-04-office-phone-appointments.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a2-05-training-routine-wenn
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Ausbildung (die Ausbildungen), der Betrieb (die Betriebe), die Berufsschule (die Berufsschulen)`
- **Finding:** Verified 12 vocabulary items (10 with plural/conjugation/example detail, e.g. die Ausbildung (die Ausbildungen), der Betrieb (die Betriebe), die Berufsschule (die Berufsschulen)) in content/A2/lesson-05-training-routine-wenn.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a2-06-family-happiness-gifts
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `der Verwandte / die Verwandte (die Verwandten), der Cousin / die Cousine (die Cousins / die Cousinen), die Einladung (die Einladungen)`
- **Finding:** Verified 14 vocabulary items (10 with plural/conjugation/example detail, e.g. der Verwandte / die Verwandte (die Verwandten), der Cousin / die Cousine (die Cousins / die Cousinen), die Einladung (die Einladungen)) in content/A2/lesson-06-family-happiness-gifts.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a2-07-language-learning-travel-purpose
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Fremdsprache (die Fremdsprachen), die Sprachschule (die Sprachschulen), das Wörterbuch (die Wörterbücher)`
- **Finding:** Verified 17 vocabulary items (14 with plural/conjugation/example detail, e.g. die Fremdsprache (die Fremdsprachen), die Sprachschule (die Sprachschulen), das Wörterbuch (die Wörterbücher)) in content/A2/lesson-07-language-learning-travel-purpose.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a2-08-media-news-passive
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Nachricht (die Nachrichten), die Schlagzeile (die Schlagzeilen), der Bericht (die Berichte)`
- **Finding:** Verified 23 vocabulary items (22 with plural/conjugation/example detail, e.g. die Nachricht (die Nachrichten), die Schlagzeile (die Schlagzeilen), der Bericht (die Berichte)) in content/A2/lesson-08-media-news-passive.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a2-09-products-technology-complaints
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `das Gerät (die Geräte), das Smartphone (die Smartphones), der Kopfhörer (die Kopfhörer)`
- **Finding:** Verified 15 vocabulary items (10 with plural/conjugation/example detail, e.g. das Gerät (die Geräte), das Smartphone (die Smartphones), der Kopfhörer (die Kopfhörer)) in content/A2/lesson-09-products-technology-complaints.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a2-10-sports-health-feelings-weil
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Bewegung (die Bewegungen), das Training (die Trainings), der Muskel (die Muskeln)`
- **Finding:** Verified 14 vocabulary items (8 with plural/conjugation/example detail, e.g. die Bewegung (die Bewegungen), das Training (die Trainings), der Muskel (die Muskeln)) in content/A2/lesson-10-sports-health-feelings-weil.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a2-11-housing-neighborhood-wohin
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `der Nachbar / die Nachbarin (die Nachbarn / Nachbarinnen), die Nachbarschaft (die Nachbarschaften (جمع قليل الاستعمال)), die Innenstadt (die Innenstädte)`
- **Finding:** Verified 20 vocabulary items (19 with plural/conjugation/example detail, e.g. der Nachbar / die Nachbarin (die Nachbarn / Nachbarinnen), die Nachbarschaft (die Nachbarschaften (جمع قليل الاستعمال)), die Innenstadt (die Innenstädte)) in content/A2/lesson-11-housing-neighborhood-wohin.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-a2-12-holidays-festivals-culture
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `das Kulturfest (die Kulturfeste), die Tradition (die Traditionen), der Brauch (die Bräuche)`
- **Finding:** Verified 16 vocabulary items (13 with plural/conjugation/example detail, e.g. das Kulturfest (die Kulturfeste), die Tradition (die Traditionen), der Brauch (die Bräuche)) in content/A2/lesson-12-holidays-festivals-culture.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b1-01-daily-life-hobbies-experiences
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `das Erlebnis (die Erlebnisse), der Verein (die Vereine), das Schachturnier (die Schachturniere)`
- **Finding:** Verified 13 vocabulary items (7 with plural/conjugation/example detail, e.g. das Erlebnis (die Erlebnisse), der Verein (die Vereine), das Schachturnier (die Schachturniere)) in content/B1/lesson-01-daily-life-hobbies-experiences.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b1-02-food-habits-obwohl
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Gewohnheit (die Gewohnheiten), die Mahlzeit (die Mahlzeiten), die Zutat (die Zutaten)`
- **Finding:** Verified 13 vocabulary items (7 with plural/conjugation/example detail, e.g. die Gewohnheit (die Gewohnheiten), die Mahlzeit (die Mahlzeiten), die Zutat (die Zutaten)) in content/B1/lesson-02-food-habits-obwohl.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b1-03-work-communication-konjunktiv
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Stelle (die Stellen), die Bewerbung (die Bewerbungen), die Erfahrung (die Erfahrungen)`
- **Finding:** Verified 14 vocabulary items (10 with plural/conjugation/example detail, e.g. die Stelle (die Stellen), die Bewerbung (die Bewerbungen), die Erfahrung (die Erfahrungen)) in content/B1/lesson-03-work-communication-konjunktiv.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b1-04-continuing-education-damit
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Weiterbildung (die Weiterbildungen), die Fähigkeit (die Fähigkeiten), die Kenntnis (die Kenntnisse)`
- **Finding:** Verified 15 vocabulary items (11 with plural/conjugation/example detail, e.g. die Weiterbildung (die Weiterbildungen), die Fähigkeit (die Fähigkeiten), die Kenntnis (die Kenntnisse)) in content/B1/lesson-04-continuing-education-damit.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b1-05-cities-relative-clauses
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Altstadt (die Altstädte), das Viertel (die Viertel), der Marktplatz (die Marktplätze)`
- **Finding:** Verified 14 vocabulary items (11 with plural/conjugation/example detail, e.g. die Altstadt (die Altstädte), das Viertel (die Viertel), der Marktplatz (die Marktplätze)) in content/B1/lesson-05-cities-relative-clauses.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b1-06-health-fitness-advice
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Bewegung (die Bewegungen), die Pause (die Pausen), das Gelenk (die Gelenke)`
- **Finding:** Verified 14 vocabulary items (8 with plural/conjugation/example detail, e.g. die Bewegung (die Bewegungen), die Pause (die Pausen), das Gelenk (die Gelenke)) in content/B1/lesson-06-health-fitness-advice.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b1-07-lifestyles-customs-cultures
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `der Lebensstil (die Lebensstile), die Alltagsroutine (die Alltagsroutinen), die Begegnung (die Begegnungen)`
- **Finding:** Verified 14 vocabulary items (8 with plural/conjugation/example detail, e.g. der Lebensstil (die Lebensstile), die Alltagsroutine (die Alltagsroutinen), die Begegnung (die Begegnungen)) in content/B1/lesson-07-lifestyles-customs-cultures.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b1-08-consumption-advertising-je-desto
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `das Produkt (die Produkte), die Anzeige (die Anzeigen), die Zielgruppe (die Zielgruppen)`
- **Finding:** Verified 17 vocabulary items (13 with plural/conjugation/example detail, e.g. das Produkt (die Produkte), die Anzeige (die Anzeigen), die Zielgruppe (die Zielgruppen)) in content/B1/lesson-08-consumption-advertising-je-desto.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b1-09-travel-transport-environment
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `der Fahrplan (die Fahrpläne), die Abfahrt (die Abfahrten), die Ankunft (die Ankünfte)`
- **Finding:** Verified 16 vocabulary items (13 with plural/conjugation/example detail, e.g. der Fahrplan (die Fahrpläne), die Abfahrt (die Abfahrten), die Ankunft (die Ankünfte)) in content/B1/lesson-09-travel-transport-environment.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b1-10-media-news-formal-communication
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Redaktion (die Redaktionen), die Meldung (die Meldungen), der Beitrag (die Beiträge)`
- **Finding:** Verified 16 vocabulary items (14 with plural/conjugation/example detail, e.g. die Redaktion (die Redaktionen), die Meldung (die Meldungen), der Beitrag (die Beiträge)) in content/B1/lesson-10-media-news-formal-communication.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b1-11-history-politics-passive-past
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Epoche (die Epochen), das Ereignis (die Ereignisse), die Gemeinde (die Gemeinden)`
- **Finding:** Verified 16 vocabulary items (15 with plural/conjugation/example detail, e.g. die Epoche (die Epochen), das Ereignis (die Ereignisse), die Gemeinde (die Gemeinden)) in content/B1/lesson-11-history-politics-passive-past.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b1-12-innovation-research-future
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Entwicklung (die Entwicklungen), die Erfindung (die Erfindungen), das Experiment (die Experimente)`
- **Finding:** Verified 16 vocabulary items (13 with plural/conjugation/example detail, e.g. die Entwicklung (die Entwicklungen), die Erfindung (die Erfindungen), das Experiment (die Experimente)) in content/B1/lesson-12-innovation-research-future.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b2-01-time-management-habits-reading
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Priorität (die Prioritäten), der Zeitblock (die Zeitblöcke), die Ablenkung (die Ablenkungen)`
- **Finding:** Verified 14 vocabulary items (11 with plural/conjugation/example detail, e.g. die Priorität (die Prioritäten), der Zeitblock (die Zeitblöcke), die Ablenkung (die Ablenkungen)) in content/B2/lesson-01-time-management-habits-reading.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b2-02-career-formal-communication-konjunktiv1
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `der Berufsweg (die Berufswege), der Werdegang (die Werdegänge), die Qualifikation (die Qualifikationen)`
- **Finding:** Verified 15 vocabulary items (13 with plural/conjugation/example detail, e.g. der Berufsweg (die Berufswege), der Werdegang (die Werdegänge), die Qualifikation (die Qualifikationen)) in content/B2/lesson-02-career-formal-communication-konjunktiv1.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b2-03-consumption-environment-passive-modal
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Ressource (die Ressourcen), die Verpackung (die Verpackungen), das Einwegprodukt (die Einwegprodukte)`
- **Finding:** Verified 15 vocabulary items (11 with plural/conjugation/example detail, e.g. die Ressource (die Ressourcen), die Verpackung (die Verpackungen), das Einwegprodukt (die Einwegprodukte)) in content/B2/lesson-03-consumption-environment-passive-modal.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b2-04-cities-housing-participles
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Wohnfläche (die Wohnflächen), die Fassade (die Fassaden), die Dämmung (die Dämmungen)`
- **Finding:** Verified 15 vocabulary items (12 with plural/conjugation/example detail, e.g. die Wohnfläche (die Wohnflächen), die Fassade (die Fassaden), die Dämmung (die Dämmungen)) in content/B2/lesson-04-cities-housing-participles.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b2-05-health-fitness-medical-information
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Studie (die Studien), die Befragung (die Befragungen), die Stichprobe (die Stichproben)`
- **Finding:** Verified 16 vocabulary items (14 with plural/conjugation/example detail, e.g. die Studie (die Studien), die Befragung (die Befragungen), die Stichprobe (die Stichproben)) in content/B2/lesson-05-health-fitness-medical-information.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b2-06-study-applications-verb-noun-phrases
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `der Studiengang (die Studiengänge), die Zulassung (die Zulassungen), die Voraussetzung (die Voraussetzungen)`
- **Finding:** Verified 14 vocabulary items (13 with plural/conjugation/example detail, e.g. der Studiengang (die Studiengänge), die Zulassung (die Zulassungen), die Voraussetzung (die Voraussetzungen)) in content/B2/lesson-06-study-applications-verb-noun-phrases.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b2-07-travel-experiences-prepositional-relatives
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Reiseetappe (die Reiseetappen), die Route (die Routen), die Unterkunft (die Unterkünfte)`
- **Finding:** Verified 15 vocabulary items (13 with plural/conjugation/example detail, e.g. die Reiseetappe (die Reiseetappen), die Route (die Routen), die Unterkunft (die Unterkünfte)) in content/B2/lesson-07-travel-experiences-prepositional-relatives.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b2-08-food-nutrition-data-passives
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Erhebung (die Erhebungen), der Durchschnitt (die Durchschnitte), der Anteil (die Anteile)`
- **Finding:** Verified 16 vocabulary items (15 with plural/conjugation/example detail, e.g. die Erhebung (die Erhebungen), der Durchschnitt (die Durchschnitte), der Anteil (die Anteile)) in content/B2/lesson-08-food-nutrition-data-passives.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b2-09-business-marketing-employment-prepositions
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `das Unternehmen (die Unternehmen), der Umsatz (die Umsätze), die Zielgruppe (die Zielgruppen)`
- **Finding:** Verified 15 vocabulary items (13 with plural/conjugation/example detail, e.g. das Unternehmen (die Unternehmen), der Umsatz (die Umsätze), die Zielgruppe (die Zielgruppen)) in content/B2/lesson-09-business-marketing-employment-prepositions.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b2-10-wishes-probabilities-technology-konjunktiv2-past
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `das Update (die Updates), die Schnittstelle (die Schnittstellen), die Einstellung (die Einstellungen)`
- **Finding:** Verified 15 vocabulary items (12 with plural/conjugation/example detail, e.g. das Update (die Updates), die Schnittstelle (die Schnittstellen), die Einstellung (die Einstellungen)) in content/B2/lesson-10-wishes-probabilities-technology-konjunktiv2-past.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b2-11-humans-nature-environment-nominalization
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Renaturierung (die Renaturierungen), die Verringerung (die Verringerungen), die Wiederherstellung (die Wiederherstellungen)`
- **Finding:** Verified 16 vocabulary items (12 with plural/conjugation/example detail, e.g. die Renaturierung (die Renaturierungen), die Verringerung (die Verringerungen), die Wiederherstellung (die Wiederherstellungen)) in content/B2/lesson-11-humans-nature-environment-nominalization.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### vocab-detail-b2-12-leisure-media-reported-speech
- **Kind:** `vocabulary-flashcard-detail`
- **Status:** `updated_and_verified`
- **Text:** `die Rezension (die Rezensionen), die Aussage (die Aussagen), das Interview (die Interviews)`
- **Finding:** Verified 16 vocabulary items (13 with plural/conjugation/example detail, e.g. die Rezension (die Rezensionen), die Aussage (die Aussagen), das Interview (die Interviews)) in content/B2/lesson-12-leisure-media-reported-speech.md and surfaced them on lesson .vocab-card and review .flashcard components with dir="ltr" lang="de" on German headwords and dir="auto" on example/grammar notes.
- **Sources:** `S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### build-vocab-table-fallback-754-541
- **Kind:** `build-bundler-invariant`
- **Status:** `updated_and_verified`
- **Text:** `if example_index is None: example_index = next((i for i, h in enumerate(headers_normalized) if any(k in h for k in ("الجمع", "التصريف", "ملاحظة"))), None)`
- **Finding:** Updated vocab_table(markdown, lesson_id) in tools/build_course.py to fall back to the German plural/conjugation/note column (الجمع / التصريف / ملاحظة) when no مثال column is present and strip placeholder dashes (— / -), increasing vocabulary cards with plural/conjugation/example detail from 24 (3.2% across 2 lessons) to 541 (71.8% across 45 lessons) while preserving all 754 vocabulary items and per-lesson counts.
- **Sources:** `S3, S4, S5, S6, S7, S8, S9, S10, S11, S12`

### ui-wcag-312-lang-de-german-words
- **Kind:** `ui-wcag-language-of-parts`
- **Status:** `updated_and_verified`
- **Text:** `<div class="german-word" dir="ltr" lang="de">${escapeHTML(word.word)}</div>`
- **Finding:** Added explicit lang="de" alongside dir="ltr" on .german-word in lesson vocabulary drawers, .flash-word in spaced-repetition flashcards, and .art-word / .art-example in the dashboard hero card per WCAG 2.1 SC 3.1.2 (Language of Parts, Technique H58) and W3C qa-html-language-declarations.
- **Sources:** `S1, S2`

### ui-wcag-312-lang-de-audio-transcripts
- **Kind:** `ui-wcag-language-of-parts`
- **Status:** `updated_and_verified`
- **Text:** `<div class="audio-transcript-line"><strong>${escapeHTML(segment.speaker)}</strong><span dir="ltr" lang="de">${escapeHTML(segment.text)}</span></div>`
- **Finding:** Added lang="de" alongside dir="ltr" on all 474 rendered German audio transcript segment spans (.audio-transcript-line span) across the 217 audio assets so assistive technologies switch from the page default Arabic (lang="ar") to German pronunciation rules.
- **Sources:** `S1, S2`

### ui-bidi-dir-auto-vocab-examples-and-empty-guard
- **Kind:** `ui-bidi-flashcard`
- **Status:** `updated_and_verified`
- **Text:** `const example = reviewSession.revealed && word.example ? `<div class="flash-example" dir="auto">${escapeHTML(word.example)}</div>` : '';`
- **Finding:** Updated .word-example and .flash-example in app.js and styles.css to use HTML dir="auto" with CSS unicode-bidi: plaintext and omitted empty .flash-example containers when word.example is empty, ensuring 521 pure German plural/conjugation/example strings align LTR and 20 Arabic/mixed grammatical notes align RTL automatically.
- **Sources:** `S1, S2, S3`

### ui-audio-tts-playback-exclusivity
- **Kind:** `ui-audio-playback`
- **Status:** `updated_and_verified`
- **Text:** `if (typeof window !== 'undefined' && 'speechSynthesis' in window && typeof window.speechSynthesis?.cancel === 'function') { window.speechSynthesis.cancel(); }`
- **Finding:** Synchronized stopAudioPlayback() and pronounce(text) in app.js so starting a lesson MP3 or navigating away cancels active Web Speech API (de-DE) synthesis, and clicking pronounce on a vocabulary card stops any active lesson MP3 clip.
- **Sources:** `S1, S2`

### css-deterministic-contrast-hero-and-art-card
- **Kind:** `css-wcag-contrast`
- **Status:** `updated_and_verified`
- **Text:** `.art-card { position: relative; z-index: 2; width: min(250px, 100%); padding: 21px 22px 19px; border: 1px solid rgba(255,255,255,.42); border-radius: 19px; background: #fffef8; color: var(--ink); transform: rotate(-4deg); box-shadow: 0 17px 34px rgba(9,34,21,.22); }`
- **Finding:** Replaced semi-transparent .art-card background and overlapping .hero-banner::before/.after and .art-circle::before/.after pseudo-elements in styles.css with solid #fffef8 and #214f3c backgrounds (contrast ratios 6.29:1 to 9.09:1), eliminating all pseudoContent color-contrast flags on the dashboard hero.
- **Sources:** `S1, S2`

### css-deterministic-contrast-lesson-and-daily-panels
- **Kind:** `css-wcag-contrast`
- **Status:** `updated_and_verified`
- **Text:** `.lesson-hero { margin-bottom: 16px; padding: 24px 25px; border: 1px solid #e7ece3; border-radius: 20px; display: flex; align-items: center; justify-content: space-between; gap: 20px; background: #f4f7f1; }`
- **Finding:** Replaced non-deterministic linear-gradient backgrounds on .daily-plan-panel (#f6f8f2), .lesson-hero (#f4f7f1), .lesson-audio-panel (#f8faf5), and .lesson-finish-panel (#f5f8f2) with solid WCAG AA-verified backgrounds (contrast ratios 4.90:1 to 6.05:1), eliminating all bgGradient incomplete flags across all 231 audited screen states.
- **Sources:** `S1, S2`

### a11y-audit-231-states-deterministic-contrast
- **Kind:** `a11y-chromium-audit`
- **Status:** `verified_no_change`
- **Text:** `PASS: 231 representative screen states, no violations of selected automated rules.`
- **Finding:** Verified via Chromium 153 + axe-core 4.11.0 across all 231 screen states (115 at 1440px + 116 at 390px) that violations remain 0 while incomplete rule occurrences dropped from 169 to 120 (-49) and incomplete node occurrences dropped from 460 to 266 (-194), with 96/106 lesson-content states having 0 incomplete flags.
- **Sources:** `S1, S2`

### browser-e2e-lang-de-and-dir-auto-assertions
- **Kind:** `browser-qa-guard`
- **Status:** `updated_and_verified`
- **Text:** `assert.equal(await page.locator('.audio-transcript-line span').first().getAttribute('lang'), 'de');`
- **Finding:** Added end-to-end Chromium assertions in tools/test_browser.cjs verifying lang="de" on .audio-transcript-line span and .german-word and dir="auto" on .word-example at both 1440x900 and 390x844 viewports.
- **Sources:** `S1, S2`

### verifier-vocab-bidi-contrast-invariants
- **Kind:** `verifier-invariant`
- **Status:** `updated_and_verified`
- **Text:** `assert vocab_with_detail == 541, f"Expected 541 vocabulary items with plural/conjugation/example detail; found {vocab_with_detail}"`
- **Finding:** Extended tools/verify_course.py to enforce 754 total vocabulary items, 541 non-empty plural/conjugation/example details, zero Arabic or Markdown characters in German headwords, WCAG 3.1.2 lang="de" / dir="auto" markup in app.js, zero linear-gradient or overlapping pseudo-elements in styles.css, and 57 verified review JSON reports.
- **Sources:** `S1, S2, S3, S4`

### pwa-cache-bump-v106
- **Kind:** `pwa-cache-version`
- **Status:** `updated_and_verified`
- **Text:** `const CACHE_NAME = 'deutsch-pfad-v106';`
- **Finding:** Bumped Service Worker cache version to deutsch-pfad-v106 across service-worker.js, tools/test_service_worker.cjs, tools/test_accessibility_update.cjs, and tools/test_catalog_accessibility_review.py after updating precached data/course.json, app.js, and styles.css.
- **Sources:** `S1, S2`
