# CR58 — المراجعة التراكمية لوسوم اللغة والاتجاه في الشفرات المضمّنة وأسئلة التقييم ومعايير الأداء وتصفير الفحوص غير الحاسمة (`code-quiz-a11y-review`)

- **تاريخ المراجعة:** 2026-10-09
- **الإصدار:** `code-quiz-a11y-v1` · **مخزن Service Worker:** `deutsch-pfad-v107`
- **عدد وحدات المراجعة التفصيلية:** `62` وحدة (`53` وحدة درس + وحدة بوابة `A0->A1` + `8` وحدات حزم وواجهة ولغة وتباين وفحوص شاملة)
- **الشفرات المضمّنة (`<code>` في `data/course.json`):** `926` عنصرًا (`910` ألمانية بسمة `dir="ltr" lang="de"` + `2` عربية بسمة `dir="auto"` + `14` رقمية/رمزية بسمة `dir="ltr"`)
- **أسئلة وخيارات التقييم (`54` ملف تقييم):** `540` سؤالًا و`1,622` خيارًا (`1,070` خيارًا ألمانيًا خالصًا بسمة `lang="de"` + `552` خيارًا عربيًا/مختلطًا بسمة `dir="auto"`) و`540` تفسيرًا بسمة `dir="auto"` و`109` مهام أداء (`327` معيار تحقق محلي بسمة `dir="auto"`)
- **نتيجة فحص `axe-core` عبر جميع حالات الشاشة:** `231` حالة شاشة (`53/53` درسًا + بوابة `A0`)، **`0` مخالفات**، و**`0` ظهور لقاعدة غير حاسمة عبر `0` عقدة** (مقابل `120` ظهور قاعدة / `266` عقدة في CR57 و`169` ظهور قاعدة / `460` عقدة في CR56)
- **حدود المراجعة:** مراجعة نصية وبنيوية وتطبيقية آلية مدعومة بالمراجع الإلكترونية؛ ليست مراجعة سمعية بشرية لتسجيلات `B1.9–B2.12` المعلقة (`80` أصلًا) ولا شهادة مطابقة رسمية لـWCAG أو CEFR.

## 1. المراجع الإلكترونية المعتمدة (`18` مرجعًا: `14` صفحة كاملة في `17` جزءًا + `4` استعلامات بحث، ورابطان 404 مستبعدان)

- **SRC-SEARCH-W3C-H58-BIDI** (`search_snippet_only`, `site:w3.org/WAI/WCAG21/Techniques/html/H58 OR site:w3.org/International/articles/inline-bidi-markup`): [Web Search: W3C WCAG 2.1 Technique H58 & Inline Bidi Markup](https://www.w3.org/WAI/WCAG21/Techniques/html/H58) — Located W3C WAI Technique H58 and W3C Internationalization inline bidi markup articles.
- **SRC-SEARCH-LINGOLIA-PREPOSITIONS** (`search_snippet_only`, `site:deutsch.lingolia.com/en/grammar/sentence-structure/conjunctions OR site:deutsch.lingolia.com/en/grammar/prepositions`): [Web Search: Lingolia German Prepositions and Conjunctions](https://deutsch.lingolia.com/en/grammar/prepositions) — Located Lingolia reference pages on German prepositions with accusative, dative, two-way, and genitive cases.
- **SRC-SEARCH-DUDEN-GRAMMAR-TERMS** (`search_snippet_only`, `site:duden.de/rechtschreibung Konjunktion Nebensatz Praeposition Antwort Aufgabe Kriterium`): [Web Search: Duden Rechtschreibung Konjunktion Nebensatz Präposition Antwort Aufgabe Kriterium](https://www.duden.de/rechtschreibung/Konjunktion) — Located Duden orthography and grammar entries for German conjunctions, subordinate clauses, prepositions, and assessment terms.
- **SRC-SEARCH-W3C-ACT-LANG** (`search_snippet_only`, `site:w3.org H58 language attributes OR inline-bidi-markup OR info-and-relationships`): [Web Search: W3C H58 language attributes & ACT Rule de46e4](https://www.w3.org/WAI/standards-guidelines/act/rules/de46e4/) — Confirmed W3C ACT Rule de46e4 and Technique H58 for programmatic language tags on inline and block elements.
- **SRC-W3C-TECHNIQUE-H58** (`full_fetched_page`, أجزاء `[0]` من `1`): [W3C WAI WCAG 2.1 Technique H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG21/Techniques/html/H58) — Sufficient technique for WCAG 2.1 SC 3.1.2: every element whose content language differs from the inherited document language must carry a valid BCP 47 `lang` attribute (`lang="de"` on German `<code>` spans and German `.option-text` choices).
- **SRC-W3C-ACT-RULE-DE46E4** (`full_fetched_page`, أجزاء `[0]` من `6`): [W3C WAI ACT Rule de46e4: Element with lang attribute has valid language tag](https://www.w3.org/WAI/standards-guidelines/act/rules/de46e4/) — Elements with non-empty `lang` attributes must use known primary language subtags (`de`, `ar`) and contain non-empty human-language text inheriting its programmatic language.
- **SRC-W3C-INLINE-BIDI-MARKUP** (`full_fetched_page`, أجزاء `[0, 1, 2]` من `3`): [W3C Internationalization: Inline markup and bidirectional text in HTML](https://www.w3.org/International/articles/inline-bidi-markup/) — Tightly wrap opposite-direction inline phrases with `dir="ltr" lang="de"` when known to be German, and use `dir="auto"` on elements with mixed or run-time directional text (`.quiz-feedback`, `.performance-task-card p`, `.performance-task-rubric li`, Arabic `<code>` spans).
- **SRC-LINGOLIA-PREPOSITIONS** (`full_fetched_page`, أجزاء `[0, 1]` من `2`): [Lingolia German Grammar: Prepositions in German Grammar](https://deutsch.lingolia.com/en/grammar/prepositions) — Verified German prepositions with accusative (`durch, für, gegen, ohne, um`), dative (`aus, bei, mit, nach, seit, von, zu`), contractions (`beim, im, ins, vom, zum, zur`), causal/reference prepositions (`aufgrund, wegen, bezüglich + Genitiv`, `laut / zufolge + Dativ`) used in B2.8–B2.12.
- **SRC-DUDEN-KONJUNKTION** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Konjunktion, die](https://www.duden.de/rechtschreibung/Konjunktion) — Verified `die Konjunktion; Genitiv: der Konjunktion, Plural: die Konjunktionen` (Bindewort).
- **SRC-DUDEN-NEBENSATZ** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Nebensatz, der](https://www.duden.de/rechtschreibung/Nebensatz) — Verified `der Nebensatz; Genitiv: des Nebensatzes, Plural: die Nebensätze` (untergeordneter Satz, Gliedsatz).
- **SRC-DUDEN-PRAEPOSITION** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Präposition, die](https://www.duden.de/rechtschreibung/Praeposition) — Verified `die Präposition; Genitiv: der Präposition, Plural: die Präpositionen` (Verhältniswort).
- **SRC-DUDEN-ANTWORT** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Antwort, die](https://www.duden.de/rechtschreibung/Antwort) — Verified `die Antwort; Genitiv: der Antwort, Plural: die Antworten`.
- **SRC-DUDEN-AUFGABE** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Aufgabe, die](https://www.duden.de/rechtschreibung/Aufgabe) — Verified `die Aufgabe; Genitiv: der Aufgabe, Plural: die Aufgaben`.
- **SRC-DUDEN-KRITERIUM** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Kriterium, das](https://www.duden.de/rechtschreibung/Kriterium) — Verified `das Kriterium; Genitiv: des Kriteriums, Plural: die Kriterien` (`[kriˈteːriʊm]`).
- **SRC-DUDEN-OBWOHL** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: obwohl](https://www.duden.de/rechtschreibung/obwohl) — Verified `obwohl` (konzessive Konjunktion, Goethe-Zertifikat B1 vocabulary).
- **SRC-DUDEN-DASS** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: dass](https://www.duden.de/rechtschreibung/dass) — Verified `dass` vs. `das` and subordinate clause structures (`sodass`, `damit, dass`).
- **SRC-DUDEN-SOWOHL** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: sowohl](https://www.duden.de/rechtschreibung/sowohl) — Verified correlative conjunction `sowohl … als/wie [auch] …` in B1.7 exercise items.
- **SRC-DUDEN-SODASS** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: sodass, so dass](https://www.duden.de/rechtschreibung/sodass) — Verified consecutive conjunction `sodass` (`[zoˈdas]`, recommended spelling `sodass`) in B2.5 exercise items.

### الروابط المستبعدة (`excludedSources`)

- `https://deutsch.lingolia.com/en/grammar/sentence-structure/conjunctions` — Returned HTTP 404 Page Not Found on Lingolia; replaced with full-fetched Duden entries for `Konjunktion`, `Nebensatz`, `obwohl`, `dass`, `sowohl`, and `sodass`.
- `https://www.duden.de/rechtschreibung/indem` — Returned HTTP 404 on Duden (`/rechtschreibung/indem` disambiguated under suffix); replaced with full-fetched Duden `Konjunktion`, `Nebensatz`, and `sodass`.

## 2. وحدات المراجعة التفصيلية (`62` وحدة)

### CR58-LESSON-A0-01-ALPHABET
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A0/lesson-01-alphabet.md & data/course.json (a0-01-alphabet)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a0-01-alphabet (الحروف والأصوات الألمانية): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (32 options: 17 pure German options tagged `lang="de"`, 15 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A0-02-GREETINGS
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A0/lesson-02-greetings.md & data/course.json (a0-02-greetings)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a0-02-greetings (التحية والتعارف): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A0-03-NUMBERS-PERSONAL-INFO
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A0/lesson-03-numbers-personal-info.md & data/course.json (a0-03-numbers-personal-info)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a0-03-numbers-personal-info (الأرقام والبيانات الشخصية): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A0-04-FIRST-SENTENCES
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A0/lesson-04-first-sentences.md & data/course.json (a0-04-first-sentences)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a0-04-first-sentences (الضمائر وأول جمل بـ sein وhaben): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 30 pure German options tagged `lang="de"`, 0 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A0-05-CLASSROOM-PHRASES
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A0/lesson-05-classroom-phrases.md & data/course.json (a0-05-classroom-phrases)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a0-05-classroom-phrases (عبارات الصف وطلب المساعدة): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A1-01-INTRODUCTIONS-LANGUAGES-HOBBIES
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A1/lesson-01-introductions-languages-hobbies.md & data/course.json (a1-01-introductions-languages-hobbies)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-01-introductions-languages-hobbies (التعريف بالنفس واللغات والهوايات): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 25 pure German options tagged `lang="de"`, 5 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A1-02-WORK-FAMILY
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A1/lesson-02-work-family.md & data/course.json (a1-02-work-family)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-02-work-family (الأسرة والمهن): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 21 pure German options tagged `lang="de"`, 9 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A1-03-CITY-CAFE-HOTEL
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A1/lesson-03-city-cafe-hotel.md & data/course.json (a1-03-city-cafe-hotel)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-03-city-cafe-hotel (في المدينة: المقهى والفندق): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 18 pure German options tagged `lang="de"`, 12 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A1-04-DAILY-ROUTINE-TIME
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A1/lesson-04-daily-routine-time.md & data/course.json (a1-04-daily-routine-time)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-04-daily-routine-time (الروتين اليومي والوقت): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A1-05-FOOD-DRINK
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A1/lesson-05-food-drink.md & data/course.json (a1-05-food-drink)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-05-food-drink (الطعام والشراب): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A1-06-YESTERDAY-PERFEKT
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A1/lesson-06-yesterday-perfekt.md & data/course.json (a1-06-yesterday-perfekt)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-06-yesterday-perfekt (أمس واليوم: مقدمة إلى Perfekt): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 30 pure German options tagged `lang="de"`, 0 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A1-07-TRAVEL-WEATHER
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A1/lesson-07-travel-weather.md & data/course.json (a1-07-travel-weather)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-07-travel-weather (السفر والطقس): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 21 pure German options tagged `lang="de"`, 9 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A1-08-SHOPPING-CLOTHES
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A1/lesson-08-shopping-clothes.md & data/course.json (a1-08-shopping-clothes)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-08-shopping-clothes (التسوّق والملابس والاحتياجات): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A1-09-WORK-APPOINTMENTS
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A1/lesson-09-work-appointments.md & data/course.json (a1-09-work-appointments)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-09-work-appointments (العمل والمشكلات والمواعيد): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A1-10-HOBBIES-HEALTH
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A1/lesson-10-hobbies-health.md & data/course.json (a1-10-hobbies-health)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-10-hobbies-health (الهوايات والصحة وزيارة الطبيب): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 15 pure German options tagged `lang="de"`, 15 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A1-11-HOME-DIRECTIONS
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A1/lesson-11-home-directions.md & data/course.json (a1-11-home-directions)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-11-home-directions (السكن والمنزل والاتجاهات): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 18 pure German options tagged `lang="de"`, 12 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A1-12-TRIP-INVITATIONS
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A1/lesson-12-trip-invitations.md & data/course.json (a1-12-trip-invitations)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-12-trip-invitations (رحلة قصيرة ومناسبات ودعوات): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A2-01-ROUTINES-ABILITIES-EXPERIENCES
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A2/lesson-01-routines-abilities-experiences.md & data/course.json (a2-01-routines-abilities-experiences)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-01-routines-abilities-experiences (الحياة اليومية والقدرات والتجارب): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 21 pure German options tagged `lang="de"`, 9 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A2-02-TRAVEL-COMPARISONS
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A2/lesson-02-travel-comparisons.md & data/course.json (a2-02-travel-comparisons)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-02-travel-comparisons (الرحلات والأماكن والمقارنة): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A2-03-FOOD-NUTRITION-SHOPPING
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A2/lesson-03-food-nutrition-shopping.md & data/course.json (a2-03-food-nutrition-shopping)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-03-food-nutrition-shopping (الطعام والتغذية والشراء والمطعم): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 15 pure German options tagged `lang="de"`, 15 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A2-04-OFFICE-PHONE-APPOINTMENTS
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A2/lesson-04-office-phone-appointments.md & data/course.json (a2-04-office-phone-appointments)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-04-office-phone-appointments (المكتب والهاتف والمواعيد): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 18 pure German options tagged `lang="de"`, 12 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A2-05-TRAINING-ROUTINE-WENN
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A2/lesson-05-training-routine-wenn.md & data/course.json (a2-05-training-routine-wenn)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-05-training-routine-wenn (الروتين والتدريب المهني وجمل wenn): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 15 pure German options tagged `lang="de"`, 15 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A2-06-FAMILY-HAPPINESS-GIFTS
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A2/lesson-06-family-happiness-gifts.md & data/course.json (a2-06-family-happiness-gifts)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-06-family-happiness-gifts (الأسرة والمشاعر والدعوات والهدايا): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 15 pure German options tagged `lang="de"`, 15 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A2-07-LANGUAGE-LEARNING-TRAVEL-PURPOSE
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A2/lesson-07-language-learning-travel-purpose.md & data/course.json (a2-07-language-learning-travel-purpose)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-07-language-learning-travel-purpose (تعلّم اللغات والسفر والغاية بـum … zu): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 12 pure German options tagged `lang="de"`, 18 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A2-08-MEDIA-NEWS-PASSIVE
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A2/lesson-08-media-news-passive.md & data/course.json (a2-08-media-news-passive)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-08-media-news-passive (الإعلام والأخبار والسياسة: المبني للمجهول): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 15 pure German options tagged `lang="de"`, 15 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A2-09-PRODUCTS-TECHNOLOGY-COMPLAINTS
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A2/lesson-09-products-technology-complaints.md & data/course.json (a2-09-products-technology-complaints)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-09-products-technology-complaints (المنتجات والتقنية وتقديم شكوى): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 12 pure German options tagged `lang="de"`, 18 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A2-10-SPORTS-HEALTH-FEELINGS-WEIL
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A2/lesson-10-sports-health-feelings-weil.md & data/course.json (a2-10-sports-health-feelings-weil)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-10-sports-health-feelings-weil (الرياضة والصحة والمشاعر وجملة weil): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 9 pure German options tagged `lang="de"`, 21 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A2-11-HOUSING-NEIGHBORHOOD-WOHIN
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A2/lesson-11-housing-neighborhood-wohin.md & data/course.json (a2-11-housing-neighborhood-wohin)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-11-housing-neighborhood-wohin (المدن والسكن والجيران: Wo أم Wohin؟): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 21 pure German options tagged `lang="de"`, 9 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-A2-12-HOLIDAYS-FESTIVALS-CULTURE
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/A2/lesson-12-holidays-festivals-culture.md & data/course.json (a2-12-holidays-festivals-culture)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-12-holidays-festivals-culture (العطلات والمهرجانات والثقافة): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 9 pure German options tagged `lang="de"`, 21 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B1-01-DAILY-LIFE-HOBBIES-EXPERIENCES
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B1/lesson-01-daily-life-hobbies-experiences.md & data/course.json (b1-01-daily-life-hobbies-experiences)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-01-daily-life-hobbies-experiences (الحياة اليومية والهوايات والتجارب: als وwenn): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B1-02-FOOD-HABITS-OBWOHL
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B1/lesson-02-food-habits-obwohl.md & data/course.json (b1-02-food-habits-obwohl)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-02-food-habits-obwohl (الطعام والعادات الغذائية: obwohl وtrotzdem): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 27 pure German options tagged `lang="de"`, 3 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B1-03-WORK-COMMUNICATION-KONJUNKTIV
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B1/lesson-03-work-communication-konjunktiv.md & data/course.json (b1-03-work-communication-konjunktiv)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-03-work-communication-konjunktiv (المهنة والتواصل في مكان العمل: اقتراحات مهذبة): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 27 pure German options tagged `lang="de"`, 3 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B1-04-CONTINUING-EDUCATION-DAMIT
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B1/lesson-04-continuing-education-damit.md & data/course.json (b1-04-continuing-education-damit)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-04-continuing-education-damit (التعلّم والتعليم المستمر: damit و um … zu): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B1-05-CITIES-RELATIVE-CLAUSES
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B1/lesson-05-cities-relative-clauses.md & data/course.json (b1-05-cities-relative-clauses)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-05-cities-relative-clauses (المدن ووصف الأماكن: الجمل الموصولة في Nominativ و Akkusativ): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B1-06-HEALTH-FITNESS-ADVICE
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B1/lesson-06-health-fitness-advice.md & data/course.json (b1-06-health-fitness-advice)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-06-health-fitness-advice (الصحة واللياقة وتقديم النصيحة: sollte و könnte): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 27 pure German options tagged `lang="de"`, 3 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B1-07-LIFESTYLES-CUSTOMS-CULTURES
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B1/lesson-07-lifestyles-customs-cultures.md & data/course.json (b1-07-lifestyles-customs-cultures)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-07-lifestyles-customs-cultures (أساليب الحياة والعادات والثقافات: الروابط الثنائية): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 18 pure German options tagged `lang="de"`, 12 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B1-08-CONSUMPTION-ADVERTISING-JE-DESTO
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B1/lesson-08-consumption-advertising-je-desto.md & data/course.json (b1-08-consumption-advertising-je-desto)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-08-consumption-advertising-je-desto (المنتجات والاستهلاك والإعلان: je … desto/umso …): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 15 pure German options tagged `lang="de"`, 15 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B1-09-TRAVEL-TRANSPORT-ENVIRONMENT
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B1/lesson-09-travel-transport-environment.md & data/course.json (b1-09-travel-transport-environment)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-09-travel-transport-environment (السفر والنقل والبيئة: bevor وnachdem وwährend): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 15 pure German options tagged `lang="de"`, 15 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B1-10-MEDIA-NEWS-FORMAL-COMMUNICATION
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B1/lesson-10-media-news-formal-communication.md & data/course.json (b1-10-media-news-formal-communication)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-10-media-news-formal-communication (الإعلام والأخبار والتواصل الرسمي: الأسئلة غير المباشرة): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 15 pure German options tagged `lang="de"`, 15 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B1-11-HISTORY-POLITICS-PASSIVE-PAST
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B1/lesson-11-history-politics-passive-past.md & data/course.json (b1-11-history-politics-passive-past)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-11-history-politics-passive-past (التاريخ والسياسة: المبني للمجهول في Präteritum): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 18 pure German options tagged `lang="de"`, 12 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B1-12-INNOVATION-RESEARCH-FUTURE
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B1/lesson-12-innovation-research-future.md & data/course.json (b1-12-innovation-research-future)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-12-innovation-research-future (الابتكار والإبداع والبحث: التوقّعات بـFutur I): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 15 pure German options tagged `lang="de"`, 15 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B2-01-TIME-MANAGEMENT-HABITS-READING
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B2/lesson-01-time-management-habits-reading.md & data/course.json (b2-01-time-management-habits-reading)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-01-time-management-habits-reading (إدارة الوقت والعادات والقراءة: indem وdadurch, dass): 0 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 15 pure German options tagged `lang="de"`, 15 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B2-02-CAREER-FORMAL-COMMUNICATION-KONJUNKTIV1
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B2/lesson-02-career-formal-communication-konjunktiv1.md & data/course.json (b2-02-career-formal-communication-konjunktiv1)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-02-career-formal-communication-konjunktiv1 (العمل والمسار المهني والتواصل الرسمي: Konjunktiv I): 5 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 15 pure German options tagged `lang="de"`, 15 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B2-03-CONSUMPTION-ENVIRONMENT-PASSIVE-MODAL
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B2/lesson-03-consumption-environment-passive-modal.md & data/course.json (b2-03-consumption-environment-passive-modal)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-03-consumption-environment-passive-modal (الاستهلاك والبدائل البيئية: المبني للمجهول مع الأفعال الناقصة): 7 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 21 pure German options tagged `lang="de"`, 9 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B2-04-CITIES-HOUSING-PARTICIPLES
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B2/lesson-04-cities-housing-participles.md & data/course.json (b2-04-cities-housing-participles)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-04-cities-housing-participles (المدن والمباني والسكن: Partizip I وPartizip II كصفات): 8 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B2-05-HEALTH-FITNESS-MEDICAL-INFORMATION
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B2/lesson-05-health-fitness-medical-information.md & data/course.json (b2-05-health-fitness-medical-information)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-05-health-fitness-medical-information (الصحة واللياقة والمعلومات الطبية: السبب والنتيجة): 42 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B2-06-STUDY-APPLICATIONS-VERB-NOUN-PHRASES
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B2/lesson-06-study-applications-verb-noun-phrases.md & data/course.json (b2-06-study-applications-verb-noun-phrases)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-06-study-applications-verb-noun-phrases (التعلّم والدراسة والتقديم الأكاديمي: Nomen-Verb-Verbindungen): 17 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 18 pure German options tagged `lang="de"`, 12 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B2-07-TRAVEL-EXPERIENCES-PREPOSITIONAL-RELATIVES
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B2/lesson-07-travel-experiences-prepositional-relatives.md & data/course.json (b2-07-travel-experiences-prepositional-relatives)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-07-travel-experiences-prepositional-relatives (السفر والتجارب والوجهات: الجمل الموصولة مع حروف الجر): 81 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 0 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 20 pure German options tagged `lang="de"`, 10 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B2-08-FOOD-NUTRITION-DATA-PASSIVES
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B2/lesson-08-food-nutrition-data-passives.md & data/course.json (b2-08-food-nutrition-data-passives)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-08-food-nutrition-data-passives (الغذاء والتغذية والبيانات: Vorgangspassiv وZustandspassiv): 114 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 6 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 12 pure German options tagged `lang="de"`, 18 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B2-09-BUSINESS-MARKETING-EMPLOYMENT-PREPOSITIONS
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B2/lesson-09-business-marketing-employment-prepositions.md & data/course.json (b2-09-business-marketing-employment-prepositions)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-09-business-marketing-employment-prepositions (الشركات والتسويق والعمل: الأفعال مع حروف الجر وda-/wo- المركّبة): 113 German inline `<code dir="ltr" lang="de">` spans, 1 Arabic `<code dir="auto">` spans, and 2 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 18 pure German options tagged `lang="de"`, 12 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B2-10-WISHES-PROBABILITIES-TECHNOLOGY-KONJUNKTIV2-PAST
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B2/lesson-10-wishes-probabilities-technology-konjunktiv2-past.md & data/course.json (b2-10-wishes-probabilities-technology-konjunktiv2-past)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-10-wishes-probabilities-technology-konjunktiv2-past (الأمنيات والاحتمالات والتقنية: Konjunktiv II للماضي والفرضيات): 129 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 2 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 18 pure German options tagged `lang="de"`, 12 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B2-11-HUMANS-NATURE-ENVIRONMENT-NOMINALIZATION
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B2/lesson-11-humans-nature-environment-nominalization.md & data/course.json (b2-11-humans-nature-environment-nominalization)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-11-humans-nature-environment-nominalization (الإنسان والطبيعة وحماية البيئة: الأسلوب الاسمي): 224 German inline `<code dir="ltr" lang="de">` spans, 1 Arabic `<code dir="auto">` spans, and 2 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 18 pure German options tagged `lang="de"`, 12 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-LESSON-B2-12-LEISURE-MEDIA-REPORTED-SPEECH
- **النوع:** `lesson_code_quiz_bidi_unit` · **المرجع النصي:** `content/B2/lesson-12-leisure-media-reported-speech.md & data/course.json (b2-12-leisure-media-reported-speech)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-12-leisure-media-reported-speech (أوقات الفراغ والإعلام ونقل الكلام: Konjunktiv I وKonjunktiv II): 170 German inline `<code dir="ltr" lang="de">` spans, 0 Arabic `<code dir="auto">` spans, and 2 numeric/symbol `<code dir="ltr">` spans; 10 quiz questions (30 options: 21 pure German options tagged `lang="de"`, 9 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 2 performance tasks (6 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Enforced WCAG 2.1 SC 3.1.2 lang='de' on German inline code and quiz options, W3C bidi dir='auto' on explanations and performance rubrics, and verified 0 axe incomplete flags.

### CR58-UNIT-A0-GATE
- **النوع:** `gate_quiz_bidi_unit` · **المرجع النصي:** `content/A0/lesson-06-placement-check.md & content/A0/lesson-06-placement-check.assessment.json` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** A0->A1 Transition Gate (a0-a1-gate, version a0-gate-v2): 10 quiz questions (30 options: 24 pure German options tagged `lang="de"`, 6 Arabic/mixed options with `dir="auto"`), 10 `dir="auto"` explanations, and 3 performance tasks (9 `dir="auto"` rubric criteria). Zero axe violations and zero incomplete flags.
- **الإجراء:** Tagged pure German gate options with lang='de', isolated gate explanations and performance rubric items with dir='auto', and verified 0 axe incomplete flags on A0-gate and A0-gate-reviewed-performance.

### CR58-BUILD-INLINE-CODE-LANG
- **النوع:** `bundler_inline_code_lang_bidi` · **المرجع النصي:** `tools/build_course.py (safe_inline / hold_code)` · **الحالة:** `corrected`
- **الملاحظة والفحص:** Across the 53 lessons, 926 inline `<code>` spans are rendered into `contentHtml`: 910 contain German words/structures/connectors (`<code dir="ltr" lang="de">`), 2 contain Arabic meta-formulas in B2.9 and B2.11 (`<code dir="auto">`), and 14 are purely numeric/symbolic (`<code dir="ltr">`).
- **الإجراء:** Updated `hold_code` in `tools/build_course.py` to emit `dir="auto"` when Arabic characters are present and `dir="ltr" lang="de"` when German/Latin letters are present without Arabic.

### CR58-BUILD-BOLD-ARROW-MERGE
- **النوع:** `bundler_bold_arrow_merge` · **المرجع النصي:** `tools/build_course.py (safe_inline)` · **الحالة:** `corrected`
- **الملاحظة والفحص:** In B1.7, B1.9, B2.1, B2.5, and B2.11, 22 exercise list items of the form `**A** → **B**` previously left ` → ` (`\u2192`) as the sole direct `#text` child of `<li dir="auto">` outside `<strong>`, causing axe-core to report 44 `nonBmp` incomplete node occurrences across 10 screen states.
- **الإجراء:** Updated `safe_inline` in `tools/build_course.py` to merge `</strong>(\s*→\s*)<strong>` into `\1` inside a single `<strong>` element, eliminating all 44 `nonBmp` incomplete occurrences on lesson list items.

### CR58-APP-QUIZ-LANG-FEEDBACK
- **النوع:** `ui_wcag_quiz_lang_bidi` · **المرجع النصي:** `app.js (isGermanTextSnippet, renderLessonQuiz, renderA0GateAssessment) & styles.css (.quiz-feedback)` · **الحالة:** `corrected`
- **الملاحظة والفحص:** Across all 540 quiz questions (1,622 total options: 1,070 pure German options + 552 Arabic/mixed/numeric options), pure German options now receive `lang="de"` on `.option-text` (WCAG 2.1 SC 3.1.2, Technique H58), and all 540 `.quiz-feedback` explanations receive `dir="auto"` and `unicode-bidi: plaintext`.
- **الإجراء:** Added `isGermanTextSnippet(option)` and `dir="auto"` on `.quiz-feedback` in `app.js` and `unicode-bidi: plaintext` on `.quiz-feedback` in `styles.css`.

### CR58-APP-PERFORMANCE-RUBRIC-BIDI
- **النوع:** `ui_bidi_performance_rubrics` · **المرجع النصي:** `app.js (renderPerformanceTasks)` · **الحالة:** `corrected`
- **الملاحظة والفحص:** Across all 109 performance tasks (106 lesson tasks + 3 A0 gate tasks) and their 327 local self-check rubric criteria, task prompts `<p dir="auto">` and rubric items `<li dir="auto">` mix Arabic instructions with German target structures and now isolate directional runs cleanly.
- **الإجراء:** Added `dir="auto"` to `<p>` and `<li>` inside `renderPerformanceTasks` in `app.js`.

### CR58-APP-HERO-ART-CLEANUP
- **النوع:** `ui_hero_art_nonbmp_cleanup` · **المرجع النصي:** `app.js (renderDashboard) & styles.css (.hero-spark, .art-levels)` · **الحالة:** `corrected`
- **الملاحظة والفحص:** In `.hero-art`, `<span class="hero-spark two">✦</span>` and `<div class="art-levels"><span>A0</span><span>→</span><span>B2</span></div>` had single symbol characters (`✦`, `→`) as sole text nodes, causing 4 `nonBmp` incomplete node occurrences on `fresh-dashboard` (1440px and 390px).
- **الإجراء:** Converted `.hero-spark` to CSS-styled geometric diamond accents (`<span></span>`) and combined `.art-levels` into `<div class="art-levels" dir="ltr"><span>A0 → B2</span></div>`.

### CR58-CSS-TEXTAREA-OVERFLOW
- **النوع:** `css_textarea_deterministic_contrast` · **المرجع النصي:** `styles.css (.performance-task-card textarea)` · **الحالة:** `corrected`
- **الملاحظة والفحص:** Browser default `overflow: auto` on `<textarea>` caused axe-core's `fullyEncompasses` check to compare padding-box `scrollWidth`/`scrollHeight` (790x76) against border-box `getBoundingClientRect()` (792x78), flagging all 218 performance `<textarea>` nodes across 108 screen states as `elmPartiallyObscured` despite a solid 9.98:1 contrast ratio (`#33453a` on `#fcfdf9`).
- **الإجراء:** Added `overflow-x: hidden; overflow-y: auto;` to `.performance-task-card textarea` in `styles.css`, eliminating horizontal scrollbar overflow and enabling deterministic axe-core contrast verification across all 218 `<textarea>` nodes.

### CR58-AXE-ZERO-INCOMPLETE-AUDIT
- **النوع:** `accessibility_zero_incomplete_invariant` · **المرجع النصي:** `tools/test_accessibility_audit.cjs` · **الحالة:** `verified`
- **الملاحظة والفحص:** Across all 231 representative screen states (115 at 1440px + 116 at 390px, covering all 53/53 lessons + A0 gate), axe-core 4.11.0 reports 0 violated rules (0 nodes) and 0 incomplete rules (0 nodes), down from 120 incomplete rules (266 nodes) in CR57 and 169 incomplete rules (460 nodes) in CR56.
- **الإجراء:** Updated `tools/test_accessibility_audit.cjs` to enforce both `failures === []` (`0` violations) and `incompletes === []` (`0` incomplete checks) across all 231 screen states.

### CR58-SW-VERIFY-V107
- **النوع:** `pwa_and_verifier_invariants` · **المرجع النصي:** `service-worker.js, tools/verify_course.py, tools/test_browser.cjs, tools/test_code_quiz_a11y_review.py` · **الحالة:** `verified`
- **الملاحظة والفحص:** Service Worker cache bumped to `deutsch-pfad-v107`, `tools/verify_course.py` enforces `(910, 2, 14)` `<code>` counts, zero unmerged `</strong> → <strong>` arrows, quiz/rubric WCAG/bidi snippets, and 58 review JSON files.
- **الإجراء:** Updated `service-worker.js`, `tools/verify_course.py`, `tools/test_browser.cjs`, `tools/test_service_worker.cjs`, `tools/test_accessibility_update.cjs`, and added `tools/test_code_quiz_a11y_review.py`.
