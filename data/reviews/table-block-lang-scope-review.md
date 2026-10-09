# CR59 — المراجعة التراكمية لوسوم النطاق واللغة في جداول الدروس وفقرات الحوار والقراءة والبنود التدريبية ومتحدثي الصوت (`table-block-lang-scope-review`)

- **تاريخ المراجعة:** 2026-10-09
- **الإصدار:** `table-block-lang-scope-v1` · **مخزن Service Worker:** `deutsch-pfad-v108`
- **عدد وحدات المراجعة التفصيلية:** `60` وحدة (`53` وحدة درس + وحدة بوابة `A0->A1` + `6` وحدات حزم وواجهة ولغة وفحوص شاملة)
- **جداول الدروس (`96` جدولًا في `data/course.json` بحجم `2,419,328` بايت):** `273` خلية رأس عمود `<th scope="col" dir="auto">` (`21` رأسًا ألمانيًا بسمة `lang="de"` + `252` رأسًا عربيًا/مختلطًا) و`2,938` خلية بيانات `<td>` (`1,848` خلية ألمانية بسمة `dir="auto" lang="de"` + `1,090` خلية عربية/مختلطة/رقمية بسمة `dir="auto"`)
- **الكتل النصية والبنود والعبارات المضمّنة (`53` درسًا + بوابة `A0`):** `109/118` كتل اقتباس قراءة/استماع `<blockquote dir="auto" lang="de">`، و`210/1,137` فقرات حوار/قراءة `<p dir="auto" lang="de">`، و`1,750/3,821` بنود نماذج/تمارين/مفاتيح `<li dir="auto" lang="de">`، و`2,430` عبارة `<strong lang="de">` و`32` عبارة `<em lang="de">` داخل الكتل المختلطة
- **واجهة الصوت وبطاقات المفردات (`app.js`):** `466/474` اسم متحدث ألماني في `.audio-transcript-line strong` بسمة `dir="auto" lang="de"`، و`521/541` تفصيل جمع/تصريف/مثال ألماني خالص في `.word-example` و`.flash-example` بسمة `dir="auto" lang="de"`
- **نتيجة فحص `axe-core` عبر جميع حالات الشاشة:** `231` حالة شاشة (`53/53` درسًا + بوابة `A0`)، **`0` مخالفات**، و**`0` ظهور لقاعدة غير حاسمة عبر `0` عقدة**
- **حدود المراجعة:** مراجعة نصية وبنيوية وتطبيقية آلية مدعومة بالمراجع الإلكترونية؛ ليست مراجعة سمعية بشرية لتسجيلات `B1.9–B2.12` المعلقة (`80` أصلًا) ولا شهادة مطابقة رسمية لـWCAG أو CEFR.

## 1. المراجع الإلكترونية المعتمدة (`18` مرجعًا: `14` صفحة كاملة في `17` جزءًا + `4` استعلامات بحث)

- **SRC-SEARCH-W3C-H63-TABLES** (`search_snippet_only`, `site:w3.org/WAI/WCAG21/Techniques/html/H63 OR site:w3.org/WAI/tutorials/tables/one-header`): [Web Search: W3C WCAG 2.1 Technique H63 & WAI Table Headers Tutorial](https://www.w3.org/WAI/WCAG21/Techniques/html/H63) — Located W3C WAI Technique H63 and WAI Tables Tutorial for `scope="col"` on `<th>` elements.
- **SRC-SEARCH-W3C-SC-1-3-1** (`search_snippet_only`, `site:w3.org/WAI/WCAG21/Understanding/info-and-relationships`): [Web Search: W3C Understanding SC 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) — Located W3C Understanding SC 1.3.1 Info and Relationships normative guidance and sufficient techniques.
- **SRC-SEARCH-DUDEN-LESSON-TERMS** (`search_snippet_only`, `site:duden.de/rechtschreibung Tabelle Dialog Satz Wortschatz Grammatik Aussprache`): [Web Search: Duden Rechtschreibung Tabelle Dialog Satz Wortschatz Grammatik Aussprache](https://www.duden.de/rechtschreibung/Tabelle) — Located Duden entries for core German curriculum terms (`Tabelle`, `Dialog`, `Satz`, `Wortschatz`, `Grammatik`, `Aussprache`).
- **SRC-SEARCH-DUDEN-LINGOLIA-DECLENSION** (`search_snippet_only`, `site:duden.de/rechtschreibung Uebung Loesung Konjugation Deklination OR site:deutsch.lingolia.com/en/grammar/nouns-and-articles/declension`): [Web Search: Duden Übung Lösung Konjugation Deklination & Lingolia Declension](https://www.duden.de/rechtschreibung/Deklination) — Located Duden entries for `Deklination`, `Konjugation`, `Übung`, `Lösung` and Lingolia noun/article declension tables.
- **SRC-W3C-TECHNIQUE-H63** (`full_fetched_page`, أجزاء `[0]` من `1`): [W3C WAI WCAG 2.1 Technique H63: Using the scope attribute to associate header cells with data cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H63) — Sufficient technique for WCAG 2.1 SC 1.3.1: every `<th>` header cell in data tables should carry a valid `scope` attribute (`scope="col"` on all 273 column headers across 96 tables).
- **SRC-W3C-TUTORIAL-TABLES-ONE-HEADER** (`full_fetched_page`, أجزاء `[0]` من `1`): [W3C WAI Web Accessibility Tutorials: Tables with One Header](https://www.w3.org/WAI/tutorials/tables/one-header/) — Column headers in `<thead>` use `<th scope="col">` to define header direction and associate column headers with data cells unambiguously.
- **SRC-W3C-UNDERSTANDING-SC-1-3-1** (`full_fetched_page`, أجزاء `[0, 1, 2]` من `3`): [W3C WAI WCAG 2.1 Understanding SC 1.3.1: Info and Relationships (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) — Programmatically determinable structure for tables (H51, H63), lists (H48), headings (H42), and emphasized/special inline text (H49).
- **SRC-LINGOLIA-DECLENSION** (`full_fetched_page`, أجزاء `[0]` من `1`): [Lingolia German Grammar: Noun Cases and Declension in German Grammar](https://deutsch.lingolia.com/en/grammar/nouns-and-articles/declension) — Verified German definite/indefinite article declension tables (`Nominativ, Akkusativ, Dativ, Genitiv`), dative plural `-n`, genitive `-s/-es`, and `n-Deklination` across lesson grammar tables.
- **SRC-DUDEN-TABELLE** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Tabelle, die](https://www.duden.de/rechtschreibung/Tabelle) — Verified `die Tabelle; Genitiv: der Tabelle, Plural: die Tabellen` (Goethe-Zertifikat B1 vocabulary).
- **SRC-DUDEN-DIALOG** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Dialog, der](https://www.duden.de/rechtschreibung/Dialog) — Verified `der Dialog; Genitiv: des Dialog[e]s, Plural: die Dialoge` (`[diaˈloːk]`, Goethe-Zertifikat B1 vocabulary).
- **SRC-DUDEN-SATZ** (`full_fetched_page`, أجزاء `[0, 1]` من `2`): [Duden Rechtschreibung: Satz, der](https://www.duden.de/rechtschreibung/Satz) — Verified `der Satz; Genitiv: des Satzes, Plural: die Sätze` (Goethe-Zertifikat B1 vocabulary).
- **SRC-DUDEN-WORTSCHATZ** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Wortschatz, der](https://www.duden.de/rechtschreibung/Wortschatz) — Verified `der Wortschatz; Genitiv: des Wortschatzes, Plural: die Wortschätze`.
- **SRC-DUDEN-GRAMMATIK** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Grammatik, die](https://www.duden.de/rechtschreibung/Grammatik) — Verified `die Grammatik; Genitiv: der Grammatik, Plural: die Grammatiken`.
- **SRC-DUDEN-AUSSPRACHE** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Aussprache, die](https://www.duden.de/rechtschreibung/Aussprache) — Verified `die Aussprache; Genitiv: der Aussprache, Plural: die Aussprachen` (Goethe-Zertifikat B1 vocabulary).
- **SRC-DUDEN-UEBUNG** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Übung, die](https://www.duden.de/rechtschreibung/Uebung) — Verified `die Übung; Genitiv: der Übung, Plural: die Übungen` (Goethe-Zertifikat B1 vocabulary).
- **SRC-DUDEN-LOESUNG** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Lösung, die](https://www.duden.de/rechtschreibung/Loesung) — Verified `die Lösung; Genitiv: der Lösung, Plural: die Lösungen` (Goethe-Zertifikat B1 vocabulary).
- **SRC-DUDEN-KONJUGATION** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Konjugation, die](https://www.duden.de/rechtschreibung/Konjugation) — Verified `die Konjugation; Genitiv: der Konjugation, Plural: die Konjugationen`.
- **SRC-DUDEN-DEKLINATION** (`full_fetched_page`, أجزاء `[0]` من `1`): [Duden Rechtschreibung: Deklination, die](https://www.duden.de/rechtschreibung/Deklination) — Verified `die Deklination; Genitiv: der Deklination, Plural: die Deklinationen`.

## 2. وحدات المراجعة التفصيلية (`60` وحدة)

### CR59-LESSON-A0-01-ALPHABET
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A0/lesson-01-alphabet.md & data/course.json (a0-01-alphabet)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a0-01-alphabet (الحروف والأصوات الألمانية): 2 tables (6 `<th scope="col">` headers: 0 `lang="de"`, 6 Arabic/mixed; 102 `<td>` cells: 67 `lang="de"`, 35 Arabic/mixed/numeric), 0/1 German `<blockquote>` blocks, 0/11 German `<p>` paragraphs, 1/30 German `<li>` items, 39 inline `<strong lang="de">` spans, and 10 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A0-02-GREETINGS
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A0/lesson-02-greetings.md & data/course.json (a0-02-greetings)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a0-02-greetings (التحية والتعارف): 2 tables (4 `<th scope="col">` headers: 0 `lang="de"`, 4 Arabic/mixed; 32 `<td>` cells: 22 `lang="de"`, 10 Arabic/mixed/numeric), 0/1 German `<blockquote>` blocks, 3/15 German `<p>` paragraphs, 12/42 German `<li>` items, 36 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A0-03-NUMBERS-PERSONAL-INFO
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A0/lesson-03-numbers-personal-info.md & data/course.json (a0-03-numbers-personal-info)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a0-03-numbers-personal-info (الأرقام والبيانات الشخصية): 3 tables (10 `<th scope="col">` headers: 0 `lang="de"`, 10 Arabic/mixed; 74 `<td>` cells: 41 `lang="de"`, 33 Arabic/mixed/numeric), 0/0 German `<blockquote>` blocks, 2/12 German `<p>` paragraphs, 9/26 German `<li>` items, 20 inline `<strong lang="de">` spans, and 2 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A0-04-FIRST-SENTENCES
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A0/lesson-04-first-sentences.md & data/course.json (a0-04-first-sentences)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a0-04-first-sentences (الضمائر وأول جمل بـ sein وhaben): 3 tables (8 `<th scope="col">` headers: 0 `lang="de"`, 8 Arabic/mixed; 54 `<td>` cells: 45 `lang="de"`, 9 Arabic/mixed/numeric), 0/0 German `<blockquote>` blocks, 1/13 German `<p>` paragraphs, 24/54 German `<li>` items, 33 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A0-05-CLASSROOM-PHRASES
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A0/lesson-05-classroom-phrases.md & data/course.json (a0-05-classroom-phrases)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a0-05-classroom-phrases (عبارات الصف وطلب المساعدة): 1 tables (2 `<th scope="col">` headers: 0 `lang="de"`, 2 Arabic/mixed; 20 `<td>` cells: 10 `lang="de"`, 10 Arabic/mixed/numeric), 0/0 German `<blockquote>` blocks, 10/25 German `<p>` paragraphs, 12/40 German `<li>` items, 29 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A1-01-INTRODUCTIONS-LANGUAGES-HOBBIES
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A1/lesson-01-introductions-languages-hobbies.md & data/course.json (a1-01-introductions-languages-hobbies)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-01-introductions-languages-hobbies (التعريف بالنفس واللغات والهوايات): 2 tables (8 `<th scope="col">` headers: 3 `lang="de"`, 5 Arabic/mixed; 72 `<td>` cells: 53 `lang="de"`, 19 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 10/38 German `<p>` paragraphs, 49/102 German `<li>` items, 47 inline `<strong lang="de">` spans, and 7 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A1-02-WORK-FAMILY
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A1/lesson-02-work-family.md & data/course.json (a1-02-work-family)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-02-work-family (الأسرة والمهن): 4 tables (10 `<th scope="col">` headers: 1 `lang="de"`, 9 Arabic/mixed; 77 `<td>` cells: 56 `lang="de"`, 21 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 6/28 German `<p>` paragraphs, 33/80 German `<li>` items, 56 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A1-03-CITY-CAFE-HOTEL
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A1/lesson-03-city-cafe-hotel.md & data/course.json (a1-03-city-cafe-hotel)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-03-city-cafe-hotel (في المدينة: المقهى والفندق): 2 tables (5 `<th scope="col">` headers: 0 `lang="de"`, 5 Arabic/mixed; 51 `<td>` cells: 36 `lang="de"`, 15 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 7/31 German `<p>` paragraphs, 18/71 German `<li>` items, 56 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A1-04-DAILY-ROUTINE-TIME
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A1/lesson-04-daily-routine-time.md & data/course.json (a1-04-daily-routine-time)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-04-daily-routine-time (الروتين اليومي والوقت): 3 tables (9 `<th scope="col">` headers: 3 `lang="de"`, 6 Arabic/mixed; 68 `<td>` cells: 51 `lang="de"`, 17 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 3/31 German `<p>` paragraphs, 38/78 German `<li>` items, 41 inline `<strong lang="de">` spans, and 3 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A1-05-FOOD-DRINK
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A1/lesson-05-food-drink.md & data/course.json (a1-05-food-drink)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-05-food-drink (الطعام والشراب): 2 tables (6 `<th scope="col">` headers: 2 `lang="de"`, 4 Arabic/mixed; 63 `<td>` cells: 40 `lang="de"`, 23 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 16/39 German `<p>` paragraphs, 25/67 German `<li>` items, 55 inline `<strong lang="de">` spans, and 1 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A1-06-YESTERDAY-PERFEKT
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A1/lesson-06-yesterday-perfekt.md & data/course.json (a1-06-yesterday-perfekt)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-06-yesterday-perfekt (أمس واليوم: مقدمة إلى Perfekt): 4 tables (11 `<th scope="col">` headers: 3 `lang="de"`, 8 Arabic/mixed; 64 `<td>` cells: 49 `lang="de"`, 15 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 0/26 German `<p>` paragraphs, 42/71 German `<li>` items, 32 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A1-07-TRAVEL-WEATHER
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A1/lesson-07-travel-weather.md & data/course.json (a1-07-travel-weather)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-07-travel-weather (السفر والطقس): 2 tables (4 `<th scope="col">` headers: 1 `lang="de"`, 3 Arabic/mixed; 44 `<td>` cells: 28 `lang="de"`, 16 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 6/28 German `<p>` paragraphs, 34/76 German `<li>` items, 52 inline `<strong lang="de">` spans, and 1 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A1-08-SHOPPING-CLOTHES
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A1/lesson-08-shopping-clothes.md & data/course.json (a1-08-shopping-clothes)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-08-shopping-clothes (التسوّق والملابس والاحتياجات): 2 tables (5 `<th scope="col">` headers: 1 `lang="de"`, 4 Arabic/mixed; 60 `<td>` cells: 38 `lang="de"`, 22 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 7/24 German `<p>` paragraphs, 38/73 German `<li>` items, 36 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A1-09-WORK-APPOINTMENTS
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A1/lesson-09-work-appointments.md & data/course.json (a1-09-work-appointments)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-09-work-appointments (العمل والمشكلات والمواعيد): 2 tables (5 `<th scope="col">` headers: 1 `lang="de"`, 4 Arabic/mixed; 60 `<td>` cells: 38 `lang="de"`, 22 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 6/25 German `<p>` paragraphs, 36/79 German `<li>` items, 38 inline `<strong lang="de">` spans, and 1 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A1-10-HOBBIES-HEALTH
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A1/lesson-10-hobbies-health.md & data/course.json (a1-10-hobbies-health)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-10-hobbies-health (الهوايات والصحة وزيارة الطبيب): 2 tables (4 `<th scope="col">` headers: 1 `lang="de"`, 3 Arabic/mixed; 52 `<td>` cells: 32 `lang="de"`, 20 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 6/23 German `<p>` paragraphs, 37/75 German `<li>` items, 35 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A1-11-HOME-DIRECTIONS
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A1/lesson-11-home-directions.md & data/course.json (a1-11-home-directions)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-11-home-directions (السكن والمنزل والاتجاهات): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 39 `<td>` cells: 24 `lang="de"`, 15 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 5/24 German `<p>` paragraphs, 34/84 German `<li>` items, 55 inline `<strong lang="de">` spans, and 3 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A1-12-TRIP-INVITATIONS
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A1/lesson-12-trip-invitations.md & data/course.json (a1-12-trip-invitations)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a1-12-trip-invitations (رحلة قصيرة ومناسبات ودعوات): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 45 `<td>` cells: 24 `lang="de"`, 21 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 8/28 German `<p>` paragraphs, 34/78 German `<li>` items, 42 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A2-01-ROUTINES-ABILITIES-EXPERIENCES
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A2/lesson-01-routines-abilities-experiences.md & data/course.json (a2-01-routines-abilities-experiences)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-01-routines-abilities-experiences (الحياة اليومية والقدرات والتجارب): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 45 `<td>` cells: 22 `lang="de"`, 23 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 6/26 German `<p>` paragraphs, 54/91 German `<li>` items, 33 inline `<strong lang="de">` spans, and 3 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A2-02-TRAVEL-COMPARISONS
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A2/lesson-02-travel-comparisons.md & data/course.json (a2-02-travel-comparisons)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-02-travel-comparisons (الرحلات والأماكن والمقارنة): 3 tables (10 `<th scope="col">` headers: 0 `lang="de"`, 10 Arabic/mixed; 95 `<td>` cells: 56 `lang="de"`, 39 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 6/27 German `<p>` paragraphs, 47/86 German `<li>` items, 43 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A2-03-FOOD-NUTRITION-SHOPPING
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A2/lesson-03-food-nutrition-shopping.md & data/course.json (a2-03-food-nutrition-shopping)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-03-food-nutrition-shopping (الطعام والتغذية والشراء والمطعم): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 60 `<td>` cells: 33 `lang="de"`, 27 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 11/32 German `<p>` paragraphs, 34/79 German `<li>` items, 43 inline `<strong lang="de">` spans, and 1 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A2-04-OFFICE-PHONE-APPOINTMENTS
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A2/lesson-04-office-phone-appointments.md & data/course.json (a2-04-office-phone-appointments)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-04-office-phone-appointments (المكتب والهاتف والمواعيد): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 42 `<td>` cells: 27 `lang="de"`, 15 Arabic/mixed/numeric), 3/3 German `<blockquote>` blocks, 13/29 German `<p>` paragraphs, 24/65 German `<li>` items, 40 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A2-05-TRAINING-ROUTINE-WENN
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A2/lesson-05-training-routine-wenn.md & data/course.json (a2-05-training-routine-wenn)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-05-training-routine-wenn (الروتين والتدريب المهني وجمل wenn): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 36 `<td>` cells: 22 `lang="de"`, 14 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 6/22 German `<p>` paragraphs, 36/67 German `<li>` items, 29 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A2-06-FAMILY-HAPPINESS-GIFTS
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A2/lesson-06-family-happiness-gifts.md & data/course.json (a2-06-family-happiness-gifts)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-06-family-happiness-gifts (الأسرة والمشاعر والدعوات والهدايا): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 42 `<td>` cells: 24 `lang="de"`, 18 Arabic/mixed/numeric), 3/3 German `<blockquote>` blocks, 6/22 German `<p>` paragraphs, 33/66 German `<li>` items, 42 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A2-07-LANGUAGE-LEARNING-TRAVEL-PURPOSE
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A2/lesson-07-language-learning-travel-purpose.md & data/course.json (a2-07-language-learning-travel-purpose)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-07-language-learning-travel-purpose (تعلّم اللغات والسفر والغاية بـum … zu): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 51 `<td>` cells: 31 `lang="de"`, 20 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 7/23 German `<p>` paragraphs, 40/63 German `<li>` items, 36 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A2-08-MEDIA-NEWS-PASSIVE
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A2/lesson-08-media-news-passive.md & data/course.json (a2-08-media-news-passive)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-08-media-news-passive (الإعلام والأخبار والسياسة: المبني للمجهول): 3 tables (7 `<th scope="col">` headers: 2 `lang="de"`, 5 Arabic/mixed; 103 `<td>` cells: 79 `lang="de"`, 24 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 0/19 German `<p>` paragraphs, 40/73 German `<li>` items, 28 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A2-09-PRODUCTS-TECHNOLOGY-COMPLAINTS
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A2/lesson-09-products-technology-complaints.md & data/course.json (a2-09-products-technology-complaints)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-09-products-technology-complaints (المنتجات والتقنية وتقديم شكوى): 2 tables (5 `<th scope="col">` headers: 0 `lang="de"`, 5 Arabic/mixed; 57 `<td>` cells: 37 `lang="de"`, 20 Arabic/mixed/numeric), 3/3 German `<blockquote>` blocks, 7/22 German `<p>` paragraphs, 26/61 German `<li>` items, 40 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A2-10-SPORTS-HEALTH-FEELINGS-WEIL
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A2/lesson-10-sports-health-feelings-weil.md & data/course.json (a2-10-sports-health-feelings-weil)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-10-sports-health-feelings-weil (الرياضة والصحة والمشاعر وجملة weil): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 42 `<td>` cells: 22 `lang="de"`, 20 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 6/21 German `<p>` paragraphs, 33/62 German `<li>` items, 45 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A2-11-HOUSING-NEIGHBORHOOD-WOHIN
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A2/lesson-11-housing-neighborhood-wohin.md & data/course.json (a2-11-housing-neighborhood-wohin)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-11-housing-neighborhood-wohin (المدن والسكن والجيران: Wo أم Wohin؟): 2 tables (6 `<th scope="col">` headers: 0 `lang="de"`, 6 Arabic/mixed; 72 `<td>` cells: 46 `lang="de"`, 26 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 6/22 German `<p>` paragraphs, 45/78 German `<li>` items, 43 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-A2-12-HOLIDAYS-FESTIVALS-CULTURE
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/A2/lesson-12-holidays-festivals-culture.md & data/course.json (a2-12-holidays-festivals-culture)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson a2-12-holidays-festivals-culture (العطلات والمهرجانات والثقافة): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 48 `<td>` cells: 28 `lang="de"`, 20 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 7/22 German `<p>` paragraphs, 37/66 German `<li>` items, 45 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B1-01-DAILY-LIFE-HOBBIES-EXPERIENCES
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B1/lesson-01-daily-life-hobbies-experiences.md & data/course.json (b1-01-daily-life-hobbies-experiences)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-01-daily-life-hobbies-experiences (الحياة اليومية والهوايات والتجارب: als وwenn): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 39 `<td>` cells: 20 `lang="de"`, 19 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/22 German `<p>` paragraphs, 29/64 German `<li>` items, 55 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B1-02-FOOD-HABITS-OBWOHL
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B1/lesson-02-food-habits-obwohl.md & data/course.json (b1-02-food-habits-obwohl)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-02-food-habits-obwohl (الطعام والعادات الغذائية: obwohl وtrotzdem): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 39 `<td>` cells: 19 `lang="de"`, 20 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/19 German `<p>` paragraphs, 30/66 German `<li>` items, 55 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B1-03-WORK-COMMUNICATION-KONJUNKTIV
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B1/lesson-03-work-communication-konjunktiv.md & data/course.json (b1-03-work-communication-konjunktiv)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-03-work-communication-konjunktiv (المهنة والتواصل في مكان العمل: اقتراحات مهذبة): 2 tables (5 `<th scope="col">` headers: 0 `lang="de"`, 5 Arabic/mixed; 54 `<td>` cells: 36 `lang="de"`, 18 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/18 German `<p>` paragraphs, 31/76 German `<li>` items, 59 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B1-04-CONTINUING-EDUCATION-DAMIT
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B1/lesson-04-continuing-education-damit.md & data/course.json (b1-04-continuing-education-damit)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-04-continuing-education-damit (التعلّم والتعليم المستمر: damit و um … zu): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 45 `<td>` cells: 26 `lang="de"`, 19 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/22 German `<p>` paragraphs, 39/71 German `<li>` items, 57 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B1-05-CITIES-RELATIVE-CLAUSES
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B1/lesson-05-cities-relative-clauses.md & data/course.json (b1-05-cities-relative-clauses)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-05-cities-relative-clauses (المدن ووصف الأماكن: الجمل الموصولة في Nominativ و Akkusativ): 2 tables (8 `<th scope="col">` headers: 0 `lang="de"`, 8 Arabic/mixed; 52 `<td>` cells: 33 `lang="de"`, 19 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/18 German `<p>` paragraphs, 39/75 German `<li>` items, 52 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B1-06-HEALTH-FITNESS-ADVICE
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B1/lesson-06-health-fitness-advice.md & data/course.json (b1-06-health-fitness-advice)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-06-health-fitness-advice (الصحة واللياقة وتقديم النصيحة: sollte و könnte): 2 tables (6 `<th scope="col">` headers: 0 `lang="de"`, 6 Arabic/mixed; 60 `<td>` cells: 40 `lang="de"`, 20 Arabic/mixed/numeric), 2/3 German `<blockquote>` blocks, 1/18 German `<p>` paragraphs, 31/73 German `<li>` items, 57 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B1-07-LIFESTYLES-CUSTOMS-CULTURES
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B1/lesson-07-lifestyles-customs-cultures.md & data/course.json (b1-07-lifestyles-customs-cultures)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-07-lifestyles-customs-cultures (أساليب الحياة والعادات والثقافات: الروابط الثنائية): 2 tables (6 `<th scope="col">` headers: 0 `lang="de"`, 6 Arabic/mixed; 54 `<td>` cells: 26 `lang="de"`, 28 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/20 German `<p>` paragraphs, 46/79 German `<li>` items, 40 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B1-08-CONSUMPTION-ADVERTISING-JE-DESTO
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B1/lesson-08-consumption-advertising-je-desto.md & data/course.json (b1-08-consumption-advertising-je-desto)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-08-consumption-advertising-je-desto (المنتجات والاستهلاك والإعلان: je … desto/umso …): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 51 `<td>` cells: 30 `lang="de"`, 21 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/19 German `<p>` paragraphs, 39/76 German `<li>` items, 32 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B1-09-TRAVEL-TRANSPORT-ENVIRONMENT
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B1/lesson-09-travel-transport-environment.md & data/course.json (b1-09-travel-transport-environment)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-09-travel-transport-environment (السفر والنقل والبيئة: bevor وnachdem وwährend): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 48 `<td>` cells: 29 `lang="de"`, 19 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/20 German `<p>` paragraphs, 38/79 German `<li>` items, 28 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B1-10-MEDIA-NEWS-FORMAL-COMMUNICATION
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B1/lesson-10-media-news-formal-communication.md & data/course.json (b1-10-media-news-formal-communication)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-10-media-news-formal-communication (الإعلام والأخبار والتواصل الرسمي: الأسئلة غير المباشرة): 2 tables (5 `<th scope="col">` headers: 0 `lang="de"`, 5 Arabic/mixed; 54 `<td>` cells: 30 `lang="de"`, 24 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 10/26 German `<p>` paragraphs, 31/66 German `<li>` items, 21 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B1-11-HISTORY-POLITICS-PASSIVE-PAST
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B1/lesson-11-history-politics-passive-past.md & data/course.json (b1-11-history-politics-passive-past)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-11-history-politics-passive-past (التاريخ والسياسة: المبني للمجهول في Präteritum): 2 tables (5 `<th scope="col">` headers: 0 `lang="de"`, 5 Arabic/mixed; 52 `<td>` cells: 33 `lang="de"`, 19 Arabic/mixed/numeric), 2/3 German `<blockquote>` blocks, 1/17 German `<p>` paragraphs, 48/78 German `<li>` items, 17 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B1-12-INNOVATION-RESEARCH-FUTURE
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B1/lesson-12-innovation-research-future.md & data/course.json (b1-12-innovation-research-future)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b1-12-innovation-research-future (الابتكار والإبداع والبحث: التوقّعات بـFutur I): 2 tables (5 `<th scope="col">` headers: 1 `lang="de"`, 4 Arabic/mixed; 60 `<td>` cells: 41 `lang="de"`, 19 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/17 German `<p>` paragraphs, 40/79 German `<li>` items, 33 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B2-01-TIME-MANAGEMENT-HABITS-READING
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B2/lesson-01-time-management-habits-reading.md & data/course.json (b2-01-time-management-habits-reading)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-01-time-management-habits-reading (إدارة الوقت والعادات والقراءة: indem وdadurch, dass): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 42 `<td>` cells: 25 `lang="de"`, 17 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/17 German `<p>` paragraphs, 38/77 German `<li>` items, 30 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B2-02-CAREER-FORMAL-COMMUNICATION-KONJUNKTIV1
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B2/lesson-02-career-formal-communication-konjunktiv1.md & data/course.json (b2-02-career-formal-communication-konjunktiv1)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-02-career-formal-communication-konjunktiv1 (العمل والمسار المهني والتواصل الرسمي: Konjunktiv I): 2 tables (5 `<th scope="col">` headers: 0 `lang="de"`, 5 Arabic/mixed; 63 `<td>` cells: 46 `lang="de"`, 17 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/18 German `<p>` paragraphs, 34/69 German `<li>` items, 97 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B2-03-CONSUMPTION-ENVIRONMENT-PASSIVE-MODAL
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B2/lesson-03-consumption-environment-passive-modal.md & data/course.json (b2-03-consumption-environment-passive-modal)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-03-consumption-environment-passive-modal (الاستهلاك والبدائل البيئية: المبني للمجهول مع الأفعال الناقصة): 2 tables (5 `<th scope="col">` headers: 0 `lang="de"`, 5 Arabic/mixed; 53 `<td>` cells: 30 `lang="de"`, 23 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/14 German `<p>` paragraphs, 27/70 German `<li>` items, 68 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B2-04-CITIES-HOUSING-PARTICIPLES
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B2/lesson-04-cities-housing-participles.md & data/course.json (b2-04-cities-housing-participles)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-04-cities-housing-participles (المدن والمباني والسكن: Partizip I وPartizip II كصفات): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 45 `<td>` cells: 27 `lang="de"`, 18 Arabic/mixed/numeric), 2/2 German `<blockquote>` blocks, 1/14 German `<p>` paragraphs, 32/74 German `<li>` items, 93 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B2-05-HEALTH-FITNESS-MEDICAL-INFORMATION
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B2/lesson-05-health-fitness-medical-information.md & data/course.json (b2-05-health-fitness-medical-information)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-05-health-fitness-medical-information (الصحة واللياقة والمعلومات الطبية: السبب والنتيجة): 2 tables (6 `<th scope="col">` headers: 0 `lang="de"`, 6 Arabic/mixed; 60 `<td>` cells: 34 `lang="de"`, 26 Arabic/mixed/numeric), 2/3 German `<blockquote>` blocks, 1/14 German `<p>` paragraphs, 28/72 German `<li>` items, 59 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B2-06-STUDY-APPLICATIONS-VERB-NOUN-PHRASES
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B2/lesson-06-study-applications-verb-noun-phrases.md & data/course.json (b2-06-study-applications-verb-noun-phrases)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-06-study-applications-verb-noun-phrases (التعلّم والدراسة والتقديم الأكاديمي: Nomen-Verb-Verbindungen): 2 tables (6 `<th scope="col">` headers: 0 `lang="de"`, 6 Arabic/mixed; 66 `<td>` cells: 35 `lang="de"`, 31 Arabic/mixed/numeric), 2/3 German `<blockquote>` blocks, 1/13 German `<p>` paragraphs, 36/68 German `<li>` items, 76 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B2-07-TRAVEL-EXPERIENCES-PREPOSITIONAL-RELATIVES
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B2/lesson-07-travel-experiences-prepositional-relatives.md & data/course.json (b2-07-travel-experiences-prepositional-relatives)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-07-travel-experiences-prepositional-relatives (السفر والتجارب والوجهات: الجمل الموصولة مع حروف الجر): 2 tables (8 `<th scope="col">` headers: 0 `lang="de"`, 8 Arabic/mixed; 55 `<td>` cells: 36 `lang="de"`, 19 Arabic/mixed/numeric), 2/3 German `<blockquote>` blocks, 1/11 German `<p>` paragraphs, 36/74 German `<li>` items, 55 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B2-08-FOOD-NUTRITION-DATA-PASSIVES
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B2/lesson-08-food-nutrition-data-passives.md & data/course.json (b2-08-food-nutrition-data-passives)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-08-food-nutrition-data-passives (الغذاء والتغذية والبيانات: Vorgangspassiv وZustandspassiv): 3 tables (9 `<th scope="col">` headers: 2 `lang="de"`, 7 Arabic/mixed; 66 `<td>` cells: 39 `lang="de"`, 27 Arabic/mixed/numeric), 4/6 German `<blockquote>` blocks, 1/11 German `<p>` paragraphs, 20/77 German `<li>` items, 41 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B2-09-BUSINESS-MARKETING-EMPLOYMENT-PREPOSITIONS
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B2/lesson-09-business-marketing-employment-prepositions.md & data/course.json (b2-09-business-marketing-employment-prepositions)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-09-business-marketing-employment-prepositions (الشركات والتسويق والعمل: الأفعال مع حروف الجر وda-/wo- المركّبة): 2 tables (6 `<th scope="col">` headers: 0 `lang="de"`, 6 Arabic/mixed; 57 `<td>` cells: 40 `lang="de"`, 17 Arabic/mixed/numeric), 4/4 German `<blockquote>` blocks, 1/13 German `<p>` paragraphs, 32/75 German `<li>` items, 52 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B2-10-WISHES-PROBABILITIES-TECHNOLOGY-KONJUNKTIV2-PAST
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B2/lesson-10-wishes-probabilities-technology-konjunktiv2-past.md & data/course.json (b2-10-wishes-probabilities-technology-konjunktiv2-past)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-10-wishes-probabilities-technology-konjunktiv2-past (الأمنيات والاحتمالات والتقنية: Konjunktiv II للماضي والفرضيات): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 45 `<td>` cells: 27 `lang="de"`, 18 Arabic/mixed/numeric), 4/4 German `<blockquote>` blocks, 1/14 German `<p>` paragraphs, 23/76 German `<li>` items, 121 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B2-11-HUMANS-NATURE-ENVIRONMENT-NOMINALIZATION
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B2/lesson-11-humans-nature-environment-nominalization.md & data/course.json (b2-11-humans-nature-environment-nominalization)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-11-humans-nature-environment-nominalization (الإنسان والطبيعة وحماية البيئة: الأسلوب الاسمي): 2 tables (6 `<th scope="col">` headers: 0 `lang="de"`, 6 Arabic/mixed; 60 `<td>` cells: 36 `lang="de"`, 24 Arabic/mixed/numeric), 4/4 German `<blockquote>` blocks, 1/12 German `<p>` paragraphs, 33/79 German `<li>` items, 21 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-LESSON-B2-12-LEISURE-MEDIA-REPORTED-SPEECH
- **النوع:** `lesson_table_block_lang_unit` · **المرجع النصي:** `content/B2/lesson-12-leisure-media-reported-speech.md & data/course.json (b2-12-leisure-media-reported-speech)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** Lesson b2-12-leisure-media-reported-speech (أوقات الفراغ والإعلام ونقل الكلام: Konjunktiv I وKonjunktiv II): 1 tables (3 `<th scope="col">` headers: 0 `lang="de"`, 3 Arabic/mixed; 48 `<td>` cells: 29 `lang="de"`, 19 Arabic/mixed/numeric), 4/4 German `<blockquote>` blocks, 1/19 German `<p>` paragraphs, 45/93 German `<li>` items, 42 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 (Technique H63) scope='col' on all <th> headers and WCAG 2.1 SC 3.1.2 (Technique H58) lang='de' on German table cells, blockquotes, paragraphs, list items, and inline spans.

### CR59-UNIT-A0-GATE
- **النوع:** `gate_table_block_lang_unit` · **المرجع النصي:** `content/A0/lesson-06-placement-check.md & data/course.json (a0TransitionCheck)` · **الحالة:** `verified_and_enriched`
- **الملاحظة والفحص:** A0->A1 Transition Gate (a0-a1-gate): 0 tables (0 `<th scope="col">` headers, 0 `<td>` cells), 0/0 German `<blockquote>` blocks, 0/23 German `<p>` paragraphs, 0/52 German `<li>` items, 0 inline `<strong lang="de">` spans, and 0 inline `<em lang="de">` spans.
- **الإجراء:** Enforced WCAG 2.1 SC 1.3.1 & SC 3.1.2 on A0 gate contentHtml blocks and inline German spans.

### CR59-BUILD-TABLE-SCOPE-LANG
- **النوع:** `bundler_table_scope_and_lang` · **المرجع النصي:** `tools/build_course.py (render_table, render_block_tag)` · **الحالة:** `corrected`
- **الملاحظة والفحص:** Across all 96 data tables in the 53 lessons + A0 gate, all 273 `<th>` column headers now carry `scope="col" dir="auto"` (21 pure German headers with `lang="de"`, 252 Arabic/mixed headers), and 1,848 of 2,938 `<td>` cells carry `dir="auto" lang="de"` (with 1,090 Arabic/mixed/numeric cells carrying `dir="auto"`).
- **الإجراء:** Updated `render_table` in `tools/build_course.py` to add `scope="col"` to all `<th>` elements and `lang="de"` to pure German `<th>`/`<td>` cells.

### CR59-BUILD-BLOCKQUOTE-P-LI-LANG
- **النوع:** `bundler_block_lang_de` · **المرجع النصي:** `tools/build_course.py (flush_quote, flush_paragraph, flush_list)` · **الحالة:** `corrected`
- **الملاحظة والفحص:** Across the 53 lessons + A0 gate, 109 of 118 `<blockquote>` reading/listening blocks, 210 of 1,137 `<p>` dialogue/reading paragraphs, and 1,750 of 3,821 `<li>` model/exercise/answer-key items are pure German and now carry `dir="auto" lang="de"`.
- **الإجراء:** Updated `flush_quote`, `flush_paragraph`, and `flush_list` in `tools/build_course.py` to delegate to `render_block_tag`.

### CR59-BUILD-INLINE-STRONG-EM-LANG
- **النوع:** `bundler_inline_strong_em_lang` · **المرجع النصي:** `tools/build_course.py (tag_inline_german_in_mixed_block)` · **الحالة:** `corrected`
- **الملاحظة والفحص:** Inside mixed Arabic/German blocks (`<p>`, `<li>`, `<blockquote>`, `<th>`, `<td>`), 2,430 pure German `<strong>` spans and 32 pure German `<em>` spans now carry `lang="de"` without duplicating `lang="de"` inside blocks that already declare `lang="de"`.
- **الإجراء:** Added `tag_inline_german_in_mixed_block` in `tools/build_course.py`.

### CR59-APP-TRANSCRIPT-SPEAKER-LANG
- **النوع:** `ui_audio_transcript_speaker_lang` · **المرجع النصي:** `app.js (renderAudioAssets)` · **الحالة:** `corrected`
- **الملاحظة والفحص:** Across the 474 audio segments in `data/audio-playlists.json` (217 assets), 466 speaker labels are German names/roles (`Erzählerin`, `Moderatorin`, `Gast`, `Archivarin`, `Verkäufer`, `Koch`, `Architektin`, `Berater`, `Redakteur`, `Mitarbeiter`, etc.) and 8 are Arabic labels; `.audio-transcript-line strong` now receives `dir="auto"` plus `lang="de"` on all 466 German speaker labels.
- **الإجراء:** Updated `renderAudioAssets` in `app.js` to apply `dir="auto"` and conditional `lang="de"` via `isGermanTextSnippet(segment.speaker)`.

### CR59-APP-VOCAB-EXAMPLE-LANG
- **النوع:** `ui_vocab_example_lang` · **المرجع النصي:** `app.js (renderLessonOverview, renderFlashcard)` · **الحالة:** `corrected`
- **الملاحظة والفحص:** Across the 541 populated `word.example` entries in 45 lessons (A1.1–B2.12), 521 are pure German plural/conjugation/example strings and 20 are Arabic/mixed notes; `.word-example` and `.flash-example` now receive `lang="de"` on all 521 pure German entries in addition to `dir="auto"`.
- **الإجراء:** Updated `renderLessonOverview` and `renderFlashcard` in `app.js` to add conditional `lang="de"` via `isGermanTextSnippet(word.example)`.

### CR59-SW-VERIFY-V108
- **النوع:** `pwa_and_verifier_invariants` · **المرجع النصي:** `service-worker.js, tools/verify_course.py, tools/test_browser.cjs, tools/test_table_block_lang_scope_review.py` · **الحالة:** `verified`
- **الملاحظة والفحص:** Service Worker cache bumped to `deutsch-pfad-v108`, `BalanceChecker` in `tools/verify_course.py` enforces `scope="col"` and `dir="auto"` on every `<th>`, and `tools/verify_course.py` enforces exact CR59 counts `(21, 252, 1848, 1090, 109, 9, 210, 927, 1750, 2071, 2430, 1948, 32, 19)` and 59 review JSON files.
- **الإجراء:** Updated `service-worker.js`, `tools/verify_course.py`, `tools/test_browser.cjs`, `tools/test_service_worker.cjs`, `tools/test_accessibility_update.cjs`, and added `tools/test_table_block_lang_scope_review.py`.
