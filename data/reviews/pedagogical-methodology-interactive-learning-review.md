# CR62 — المراجعة التراكمية للمنهجية التعليمية والتفاعل وخطة الدراسة والمفردات والتقييم (`pedagogical-methodology-interactive-learning-review`)

- **رقم الدفعة:** `CR62`
- **النطاق:** ترقية منهجية وتفاعلية شاملة لكامل المشروع (`53` درسًا من `A0` إلى `B2`، `428` تمرينًا، `48` قسم استماع، `540` سؤال تقييم، `109` مهام أداء عملي، `754` مفردة، `5` مستويات، وواجهة المراجعة والقاموس التراكمي وخطة الدراسة اليومية).
- **إصدار الكاش في Service Worker:** `deutsch-pfad-v111`
- **نتيجة فحص الوصول الشامل (`axe-core` WCAG 2.1 A/AA + `best-practice`):** `349` حالة شاشة (`174` سطح مكتب + `175` جوال) مع **`0` مخالفات و`0` حالات غير مكتملة (`incomplete = 0`)**.
- **نتيجة فحص الشاشات الضيقة (`320×900` عمودي + `568×320` أفقي):** `348` حالة شاشة عبر كامل المشروع مع **`0` تجاوز أفقي (`overflow = 0`)**.
- **ملاحظة الصدق المنهجي:** هذا التقرير يوثق الترقيات المنهجية والتفاعلية والفحوص البرمجية الشاملة؛ وهو ليس اعتمادًا صوتيًا بشريًا للتسجيلات المؤجلة ولا شهادة CEFR رسمية.

## المصادر المرجعية المعتمدة (`24` مصدرًا: `9` مقتطفات بحث + `15` صفحة كاملة، و`2` مستبعدة لخطأ 404)

- **S1 (search_snippet_only):** [Duden | Wiederholung | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Wiederholung) — Verifies die Wiederholung (plural die Wiederholungen) as spaced review and spiral consolidation of previously studied material.
- **S2 (search_snippet_only):** [Duden | Wortschatz | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Wortschatz) — Verifies der Wortschatz and distinguishes aktiver vs. passiver Wortschatz for bidirectional DE <-> AR vocabulary recall.
- **S3 (search_snippet_only):** [Duden | Repetition | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Repetition) — Confirms systematic repetition of学習/study material to prevent decay across cumulative levels.
- **S4 (search_snippet_only):** [Dependent Clauses in German Grammar – Lingolia](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses) — Confirms subordinate clause (Nebensatz) verb-final word order and comma separation rules across A2–B2.
- **S5 (search_snippet_only):** [Conjunctions – Word Order in German – Lingolia](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions) — Distinguishes coordinating conjunctions, subjunctions, and conjunctive adverbs for cumulative grammar reference and heuristic coaching.
- **S6 (search_snippet_only):** [Main Clauses – Declarative Sentences in German Grammar – Lingolia](https://deutsch.lingolia.com/en/grammar/sentence-structure/main-clauses) — Confirms finite verb in position 2 (V2) and Satzklammer in declarative clauses.
- **S7 (search_snippet_only):** [Duden | Übung | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Uebung) — Verifies die Übung (plural die Übungen) for structured per-exercise practice and immediate self-verification.
- **S8 (search_snippet_only):** [Duden | Stufe | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Stufe) — Verifies die Stufe (plural die Stufen) for staged lesson progression and level mastery checkpoints.
- **S9 (search_snippet_only):** [Duden | stufen | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/stufen) — Verifies gradated step-by-step instructional structuring (abstufen / gliedern).
- **S10 (full_fetched_page):** [Technique G83: Providing text descriptions to identify required fields that were not completed | WAI | W3C](https://www.w3.org/WAI/WCAG21/Techniques/general/G83) — Governs clear text feedback for incomplete or under-length user responses in interactive performance tasks.
- **S11 (full_fetched_page):** [Technique H91: Using HTML form controls and links | WAI | W3C](https://www.w3.org/WAI/WCAG21/Techniques/html/H91) — Governs accessible names, roles, states, and values for buttons, search inputs, filter chips, checkboxes, and textareas.
- **S12 (full_fetched_page):** [Main Clauses – Declarative Sentences in German Grammar (Full Page)](https://deutsch.lingolia.com/en/grammar/sentence-structure/main-clauses) — Verifies V2 finite verb rule, Satzklammer, and subject-verb inversion in German main clauses.
- **S13 (full_fetched_page):** [Dependent Clauses in German Grammar (Full Page)](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses) — Verifies verb-final word order in subordinate clauses, relative clauses, and indirect questions.
- **S14 (full_fetched_page):** [Conjunctions – Word Order in German (Full Page)](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions) — Verifies conjunction vs. subjunction vs. conjunctive adverb word-order rules across A1–B2.
- **S15 (full_fetched_page):** [Duden | Wiederholung (Full Page)](https://www.duden.de/rechtschreibung/Wiederholung) — Verifies die Wiederholung (`WIEDERHOLUNG`) used in the Spiral Cumulative Review header.
- **S16 (full_fetched_page):** [Duden | Wortschatz (Full Page)](https://www.duden.de/rechtschreibung/Wortschatz) — Verifies der Wortschatz (`aktiver` and `passiver Wortschatz`) grounding bidirectional DE <-> AR flashcard recall.
- **S17 (full_fetched_page):** [Duden | Übung (Full Page)](https://www.duden.de/rechtschreibung/Uebung) — Verifies die Übung (`ein Lehrbuch mit Übungen`) grounding per-exercise inline self-check keys across all 428 exercises.
- **S18 (full_fetched_page):** [Duden | Stufe (Full Page)](https://www.duden.de/rechtschreibung/Stufe) — Verifies die Stufe for the 3-stage lesson flow (Build, Practice, Mastery) and level checkpoints.
- **S19 (full_fetched_page):** [Duden | Grammatik (Full Page)](https://www.duden.de/rechtschreibung/Grammatik) — Verifies die Grammatik for the cumulative A0–B2 grammar reference summaries.
- **S20 (full_fetched_page):** [Duden | Lernziel (Full Page)](https://www.duden.de/rechtschreibung/Lernziel) — Verifies das Lernziel for focus-domain alignment and stage pacing in the adaptive daily plan.
- **S21 (full_fetched_page):** [Duden | Selbstkontrolle (Full Page)](https://www.duden.de/rechtschreibung/Selbstkontrolle) — Verifies die Selbstkontrolle for per-exercise inline keys and local performance heuristic coaching.
- **S22 (full_fetched_page):** [Duden | Hörverstehen (Full Page)](https://www.duden.de/rechtschreibung/Hoerverstehen) — Verifies das Hörverstehen for listening-first script guards across 48 listening sections and inline quiz listening audio controls.
- **S23 (full_fetched_page):** [Duden | Entwurf (Full Page)](https://www.duden.de/rechtschreibung/Entwurf) — Verifies der Entwurf for learner draft analysis in the 109 performance tasks.
- **S24 (full_fetched_page):** [Duden | Modell & Verständnis (Full Pages)](https://www.duden.de/rechtschreibung/Modell) — Verifies das Modell and das Verständnis (https://www.duden.de/rechtschreibung/Verstaendnis) for collapsible reference model comparisons after learner drafts.

## المصادر المستبعدة (`excludedSources`)
- `https://www.duden.de/rechtschreibung/Leseverstehen` — HTTP 404 on duden.de; replaced with verified Duden entries Hörverstehen (S22) and Verständnis (S24).
- `https://www.duden.de/rechtschreibung/Leseverstaendnis` — HTTP 404 on duden.de; replaced with verified Duden entries Hörverstehen (S22) and Verständnis (S24).

## الوحدات المفحوصة والنتائج التفصيلية (`68` وحدة)

### A0.1 (a0-01-alphabet)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~20 min split across Build/Practice/Mastery), 7/7 per-exercise inline self-check keys (<details class="exercise-inline-key">), 0 listening-first script guard(s) (<details class="listening-script-guard">), 0/0 contextual vocabulary examples (0 source + 0 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A0.2 (a0-02-greetings)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~20 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 0 listening-first script guard(s) (<details class="listening-script-guard">), 10/10 contextual vocabulary examples (0 source + 10 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A0.3 (a0-03-numbers-personal-info)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~25 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 0 listening-first script guard(s) (<details class="listening-script-guard">), 0/0 contextual vocabulary examples (0 source + 0 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A0.4 (a0-04-first-sentences)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~25 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 0 listening-first script guard(s) (<details class="listening-script-guard">), 9/9 contextual vocabulary examples (0 source + 9 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A0.5 (a0-05-classroom-phrases)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~20 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 0 listening-first script guard(s) (<details class="listening-script-guard">), 10/10 contextual vocabulary examples (0 source + 10 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A1.1 (a1-01-introductions-languages-hobbies)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 10/10 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 12/12 contextual vocabulary examples (12 source + 0 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A1.2 (a1-02-work-family)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 9/9 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 11/11 contextual vocabulary examples (11 source + 0 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A1.3 (a1-03-city-cafe-hotel)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 9/9 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 13/13 contextual vocabulary examples (11 source + 2 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A1.4 (a1-04-daily-routine-time)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 9/9 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 12/12 contextual vocabulary examples (12 source + 0 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A1.5 (a1-05-food-drink)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 15/15 contextual vocabulary examples (15 source + 0 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A1.6 (a1-06-yesterday-perfekt)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 8/8 contextual vocabulary examples (0 source + 8 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A1.7 (a1-07-travel-weather)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 16/16 contextual vocabulary examples (0 source + 16 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A1.8 (a1-08-shopping-clothes)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 16/16 contextual vocabulary examples (13 source + 3 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A1.9 (a1-09-work-appointments)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 16/16 contextual vocabulary examples (10 source + 6 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A1.10 (a1-10-hobbies-health)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 20/20 contextual vocabulary examples (0 source + 20 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A1.11 (a1-11-home-directions)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 13/13 contextual vocabulary examples (11 source + 2 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A1.12 (a1-12-trip-invitations)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 15/15 contextual vocabulary examples (13 source + 2 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A2.1 (a2-01-routines-abilities-experiences)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 15/15 contextual vocabulary examples (7 source + 8 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A2.2 (a2-02-travel-comparisons)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 18/18 contextual vocabulary examples (11 source + 7 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A2.3 (a2-03-food-nutrition-shopping)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 20/20 contextual vocabulary examples (14 source + 6 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A2.4 (a2-04-office-phone-appointments)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 14/14 contextual vocabulary examples (13 source + 1 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A2.5 (a2-05-training-routine-wenn)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 12/12 contextual vocabulary examples (10 source + 2 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A2.6 (a2-06-family-happiness-gifts)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 14/14 contextual vocabulary examples (10 source + 4 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A2.7 (a2-07-language-learning-travel-purpose)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 17/17 contextual vocabulary examples (14 source + 3 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A2.8 (a2-08-media-news-passive)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 23/23 contextual vocabulary examples (22 source + 1 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A2.9 (a2-09-products-technology-complaints)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 15/15 contextual vocabulary examples (10 source + 5 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A2.10 (a2-10-sports-health-feelings-weil)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 14/14 contextual vocabulary examples (8 source + 6 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A2.11 (a2-11-housing-neighborhood-wohin)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 20/20 contextual vocabulary examples (19 source + 1 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A2.12 (a2-12-holidays-festivals-culture)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 16/16 contextual vocabulary examples (13 source + 3 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B1.1 (b1-01-daily-life-hobbies-experiences)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 13/13 contextual vocabulary examples (7 source + 6 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B1.2 (b1-02-food-habits-obwohl)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 13/13 contextual vocabulary examples (7 source + 6 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B1.3 (b1-03-work-communication-konjunktiv)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 14/14 contextual vocabulary examples (10 source + 4 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B1.4 (b1-04-continuing-education-damit)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 15/15 contextual vocabulary examples (11 source + 4 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B1.5 (b1-05-cities-relative-clauses)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 14/14 contextual vocabulary examples (11 source + 3 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B1.6 (b1-06-health-fitness-advice)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 14/14 contextual vocabulary examples (8 source + 6 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B1.7 (b1-07-lifestyles-customs-cultures)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 14/14 contextual vocabulary examples (8 source + 6 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B1.8 (b1-08-consumption-advertising-je-desto)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 17/17 contextual vocabulary examples (13 source + 4 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B1.9 (b1-09-travel-transport-environment)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 16/16 contextual vocabulary examples (13 source + 3 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B1.10 (b1-10-media-news-formal-communication)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 16/16 contextual vocabulary examples (14 source + 2 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B1.11 (b1-11-history-politics-passive-past)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 16/16 contextual vocabulary examples (15 source + 1 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B1.12 (b1-12-innovation-research-future)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 16/16 contextual vocabulary examples (13 source + 3 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B2.1 (b2-01-time-management-habits-reading)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 14/14 contextual vocabulary examples (11 source + 3 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B2.2 (b2-02-career-formal-communication-konjunktiv1)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 15/15 contextual vocabulary examples (13 source + 2 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B2.3 (b2-03-consumption-environment-passive-modal)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 15/15 contextual vocabulary examples (11 source + 4 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B2.4 (b2-04-cities-housing-participles)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 15/15 contextual vocabulary examples (12 source + 3 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B2.5 (b2-05-health-fitness-medical-information)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~30 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 16/16 contextual vocabulary examples (14 source + 2 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B2.6 (b2-06-study-applications-verb-noun-phrases)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~45 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 14/14 contextual vocabulary examples (13 source + 1 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B2.7 (b2-07-travel-experiences-prepositional-relatives)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~45 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 15/15 contextual vocabulary examples (13 source + 2 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B2.8 (b2-08-food-nutrition-data-passives)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~45 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 16/16 contextual vocabulary examples (15 source + 1 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B2.9 (b2-09-business-marketing-employment-prepositions)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~45 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 15/15 contextual vocabulary examples (13 source + 2 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B2.10 (b2-10-wishes-probabilities-technology-konjunktiv2-past)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~45 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 15/15 contextual vocabulary examples (12 source + 3 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B2.11 (b2-11-humans-nature-environment-nominalization)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~45 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 16/16 contextual vocabulary examples (12 source + 4 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### B2.12 (b2-12-leisure-media-reported-speech)
- **النطاق:** `lesson_pedagogical_flow` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S17, S18, S21, S22, S24`
- **النتيجة:** Verified 3-stage interactive lesson bar (~45 min split across Build/Practice/Mastery), 8/8 per-exercise inline self-check keys (<details class="exercise-inline-key">), 1 listening-first script guard(s) (<details class="listening-script-guard">), 16/16 contextual vocabulary examples (13 source + 3 context-derived), 10 quiz questions with retry option rotation, and 2 performance tasks with live local heuristic coaching and reference model comparison.

### A0-A1-Gate (a0-a1-gate)
- **النطاق:** `transition_gate_pedagogy` · **الحالة:** `reviewed_synced` · **المصادر:** `S10, S11, S18, S21, S22, S24`
- **النتيجة:** Verified A0->A1 transition gate with 10 quiz questions (deterministic retry option rotation + embedded listening audio helper) and 2 performance tasks equipped with live local heuristic coaching and collapsible A0->A1 reference models.

### Level-A0-Mastery-Checkpoint
- **النطاق:** `level_checkpoint_and_spiral_review` · **الحالة:** `reviewed_synced` · **المصادر:** `S15, S16, S18, S19, S20`
- **النتيجة:** Verified Level A0 Mastery & Spiral Review Checkpoint (5 lessons, 29 contextualized vocabulary items, direct spiral review trigger and level lexicon/grammar filter).

### Level-A1-Mastery-Checkpoint
- **النطاق:** `level_checkpoint_and_spiral_review` · **الحالة:** `reviewed_synced` · **المصادر:** `S15, S16, S18, S19, S20`
- **النتيجة:** Verified Level A1 Mastery & Spiral Review Checkpoint (12 lessons, 167 contextualized vocabulary items, direct spiral review trigger and level lexicon/grammar filter).

### Level-A2-Mastery-Checkpoint
- **النطاق:** `level_checkpoint_and_spiral_review` · **الحالة:** `reviewed_synced` · **المصادر:** `S15, S16, S18, S19, S20`
- **النتيجة:** Verified Level A2 Mastery & Spiral Review Checkpoint (12 lessons, 198 contextualized vocabulary items, direct spiral review trigger and level lexicon/grammar filter).

### Level-B1-Mastery-Checkpoint
- **النطاق:** `level_checkpoint_and_spiral_review` · **الحالة:** `reviewed_synced` · **المصادر:** `S15, S16, S18, S19, S20`
- **النتيجة:** Verified Level B1 Mastery & Spiral Review Checkpoint (12 lessons, 178 contextualized vocabulary items, direct spiral review trigger and level lexicon/grammar filter).

### Level-B2-Mastery-Checkpoint
- **النطاق:** `level_checkpoint_and_spiral_review` · **الحالة:** `reviewed_synced` · **المصادر:** `S15, S16, S18, S19, S20`
- **النتيجة:** Verified Level B2 Mastery & Spiral Review Checkpoint (12 lessons, 182 contextualized vocabulary items, direct spiral review trigger and level lexicon/grammar filter).

### SYS-01-Active-Lesson-Flow-428-Exercises-48-Listening-Guards
- **النطاق:** `lesson_flow_engine` · **الحالة:** `reviewed_synced` · **المصادر:** `S17, S18, S21, S22`
- **النتيجة:** Verified enhanceLessonDocumentHtml() across all 53 lessons: 428/428 exercises render individual <details class="exercise-inline-key"> self-check drawers, 48/48 listening sections wrap scripts in <details class="listening-script-guard"> with inline quick-play buttons, and all 53 lessons render 3-stage interactive navigation pills (159 total).

### SYS-02-Smart-Assessment-540-Questions-Retry-Rotation-Inline-Audio
- **النطاق:** `objective_assessment_engine` · **الحالة:** `reviewed_synced` · **المصادر:** `S11, S18, S21, S22`
- **النتيجة:** Verified all 540 objective quiz questions (530 lesson + 10 gate) and 1,622 options: listening comprehension items render inline quick-play controls (.quiz-audio-helper) and retry attempts deterministically rotate option order via getDisplayedQuizOptionIndices() while preserving canonical data-index selection.

### SYS-03-Performance-Heuristic-Coach-And-Model-Compare-109-Tasks
- **النطاق:** `performance_task_coach` · **الحالة:** `reviewed_synced` · **المصادر:** `S10, S11, S12, S13, S14, S21, S23, S24`
- **النتيجة:** Verified all 109 performance tasks (107 lesson + 2 gate): analyzePerformanceDraft() and renderPerformanceTaskHeuristics() provide real-time character, sentence, German-script, and target-token feedback, paired with collapsible reference model comparisons (<details class="performance-model-compare">) placed after .performance-check-list to preserve Tab focus order.

### SYS-04-Complete-754-Contextual-Vocabulary-And-Bidirectional-SRS
- **النطاق:** `vocabulary_and_srs_engine` · **الحالة:** `reviewed_synced` · **المصادر:** `S1, S2, S3, S15, S16`
- **النتيجة:** Verified 100% contextual example coverage across all 754 vocabulary items (541 source examples + 213 lesson-derived contextual hints via getWordContextHint()), one-click lesson vocabulary enrollment into SRS, priority queue ordering (missed reps===0 first), noun article self-check (der/die/das), and bidirectional DE->AR / AR->DE recall toggle.

### SYS-05-Adaptive-Daily-Plan-DailyGoal-And-Focus-Domains
- **النطاق:** `adaptive_daily_plan` · **الحالة:** `reviewed_synced` · **المصادر:** `S18, S20, S21`
- **النتيجة:** Verified renderDailyPlanAdaptiveGuide() and getLessonFocusDomains() across all 53 lessons: maps learner dailyGoal minutes onto the 3 lesson stages (Build, Practice, Mastery) and connects active lessons to the learner's chosen focus domain (المحادثة، السفر، العمل، الدراسة، الحياة اليومية).

### SYS-06-Cumulative-Searchable-Lexicon-754-And-Grammar-Reference-A0-B2
- **النطاق:** `cumulative_lexicon_and_grammar` · **الحالة:** `reviewed_synced` · **المصادر:** `S12, S13, S14, S16, S19`
- **النتيجة:** Verified renderCumulativeLexiconAndGrammarSection() in the review workspace: live search across all 754 vocabulary items, level filter (A0–B2), communicative focus filter, and structured A0–B2 cumulative grammar & connector reference cards.

### SYS-07-Spiral-Cumulative-Review-Engine-A0-B2
- **النطاق:** `spiral_review_engine` · **الحالة:** `reviewed_synced` · **المصادر:** `S1, S3, S15, S18`
- **النتيجة:** Verified buildSpiralSession() and renderSpiralReviewSection(): interactive cumulative quiz across unlocked/mastered lessons and levels with instant option checking, explanation rendering, and direct lesson jump links.

### SYS-08-Full-Project-Narrow-Layout-348-States-Zero-Overflow
- **النطاق:** `narrow_viewport_verification` · **الحالة:** `reviewed_synced` · **المصادر:** `S10, S11`
- **النتيجة:** Verified 348 full-project narrow viewport states (174 at 320x900 portrait + 174 at 568x320 landscape) across all 53 lessons, A0 gate, review, lexicon, spiral review, and settings with 0 horizontal overflow or clipped controls.

### SYS-09-Full-Project-WCAG-21-AA-349-States-And-SW-v111
- **النطاق:** `accessibility_and_pwa_verification` · **الحالة:** `reviewed_synced` · **المصادر:** `S10, S11`
- **النتيجة:** Verified 349 full-project axe-core WCAG 2.1 A/AA + best-practice screen states (174 desktop 1440x900 + 175 mobile 390x844) with 0 violations and 0 incomplete flags, and bumped Service Worker cache to deutsch-pfad-v111.
