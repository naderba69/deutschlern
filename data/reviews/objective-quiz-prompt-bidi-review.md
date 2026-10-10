# مراجعة أهداف الدروس وأسئلة التقييم الألمانية وشارات الواجهة وعزل الاتجاه — CR60 (`objective-quiz-prompt-bidi-review`)

- **تاريخ المراجعة:** 2026-10-09
- **معرّف الدفعة:** `CR60` (`objective-quiz-prompt-bidi-review`)
- **نطاق المراجعة:** 60 وحدة مراجعة تفصيلية (53 درسًا `A0.1–B2.12` + بوابة `A0→A1` + 6 وحدات حزم وواجهة وأنماط ومخزن وفحوص)
- **المصادر المرجعية:** 22 مصدرًا (14 صفحة مرجعية مقروءة بالكامل `full_fetched_page` عبر 18 جزءًا `100%` + 8 مقتطفات بحث `search_snippet_only`؛ 0 روابط مستبعدة)
- **حجم حزمة المنهج `data/course.json`:** `2,419,161` بايت
- **مخزن العمل دون اتصال:** `deutsch-pfad-v109`
- **حدود الصدق المنهجي:** هذه المراجعة تقنية ولغوية ومنهجية مدعومة بمصادر إلكترونية؛ لا تمثل اعتمادًا سمعيًا بشريًا لـ80 أصلًا صوتيًا معلقًا (`B1.9–B2.12`) ولا شهادة `CEFR` رسمية ولا دمجًا لـPR#1.

## 1. ملخص النتائج والتحسينات

1. **تنظيف نصوص أهداف الدروس (`21/53` درسًا) ومزامنة سجل التدقيق (`tools/build_course.py` و`data/course.json` و`data/curriculum-file-audit.csv`):**
   - أُضيفت دالة `clean_objective_text()` إلى `lesson_objective()` في `tools/build_course.py` لإزالة علامات Markdown الخام (`**` و`` ` ``) وتوحيد فواصل جمل `## أستطيع أن` (`؛ ` بدل `.؛ `)، مما صحح **21 هدف درس** (`A1.1`، `A2.10`، `A2.12`، `B1.4`، `B1.6–B1.10`، `B1.12`، `B2.1–B2.10`، `B2.12`) في `data/course.json` وطابق عمود `source_objective` في جميع صفوف `data/curriculum-file-audit.csv` الـ`53`.
2. **وسم أسئلة التقييم الألمانية الخالصة (`26/540`) وتفسيرات الإجابة الألمانية (`1/540`) بسمة `lang="de"` (`app.js`):**
   - جرى تحديث `renderLessonQuiz()` و`renderA0GateQuiz()` ليحمل عنوان السؤال `<h1 dir="auto" lang="de">` عندما يكون نص السؤال ألمانيًا خالصًا (**26 سؤال استيعاب قرائي/سمعي** في `B1.1–B1.6`)، ويحمل نص تفسير الإجابة `<span dir="auto" lang="de">` عندما يكون التفسير ألمانيًا خالصًا (`DL-A2-08-Q07`: `Die Sitzung wird im Internet übertragen.`).
3. **وسم شارات الواجهة الألمانية السبع بسمة `<span lang="de">` وإصلاح `PLAN DU JOUR` إلى `TAGESPLAN` (`app.js`):**
   - جرى وسم الشارات والكلمات الألمانية السبع في الواجهة بسمة `<span lang="de">`: `AUFGABE`، و`TAGESPLAN` (بدل العبارة الفرنسية الدخيلة `PLAN DU JOUR`)، و`Deutsch` في ترويسة اللوحة، و`WORTSCHATZ` في بطاقة اللوحة ودرج المفردات، و`HÖREN` في لوحة الصوت، و`LEKTION` في لوحة الدرس، وتحديث ملاحظتي احتساب الوقت الفعلي وطريقة الدراسة.
4. **عزل الاتجاه `dir="auto"`/`dir="ltr"` و`unicode-bidi: plaintext` لعناوين الدروس والأهداف والترجمات (`app.js` و`styles.css`):**
   - أُضيفت سمة `dir="auto"` وقاعدة `unicode-bidi: plaintext` لعناوين الدروس وأهدافها في بطاقات المسارات وترويسة الدرس والبطاقة الجانبية وخطة اليوم وعناوين الأصول الصوتية الـ`217` وترجمات المفردات الـ`754` في درجي الدرس والمراجعة، مع وسم `<b dir="ltr">content/</b>` و`<code dir="ltr">python3 tools/build_course.py</code>`.

## 2. المصادر الإلكترونية المعتمدة

- **S01 (full_fetched_page):** [W3C WAI WCAG 2.1 Technique H58 — Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG21/Techniques/html/H58) — الأجزاء المقروءة: `[0]` من `1` — Identifies changes in natural language via BCP-47 lang='de' attributes on German question prompts (<h1 dir='auto' lang='de'>), German quiz explanations (<span dir='auto' lang='de'>), and German UI kicker/hero terms (AUFGABE, TAGESPLAN, Deutsch, WORTSCHATZ, HÖREN, LEKTION).
- **S02 (full_fetched_page):** [W3C WAI Understanding WCAG 2.1 SC 3.1.2 — Language of Parts (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html) — الأجزاء المقروءة: `[0, 1, 2]` من `3` — Normative Level AA criterion requiring programmatic identification of passages and phrases in another language so screen readers and braille translators apply German pronunciation and hyphenation rules.
- **S03 (full_fetched_page):** [W3C Internationalization — Inline markup and bidirectional text in HTML](https://www.w3.org/International/articles/inline-bidi-markup/) — الأجزاء المقروءة: `[0, 1, 2]` من `3` — Recommends dir='auto' on dynamic/mixed containers whose base direction is determined by first strong character (lesson titles, objectives, audio titles, vocabulary translations) and dir='ltr' on embedded paths/commands (<b dir='ltr'>content/</b>, <code dir='ltr'>python3 tools/build_course.py</code>).
- **S04 (full_fetched_page):** [Lingolia German Grammar — Questions in German Grammar (W-Fragen & Entscheidungsfragen)](https://deutsch.lingolia.com/en/grammar/sentence-structure/questions) — الأجزاء المقروءة: `[0]` من `1` — Covers open W-questions (wer, was, wo, wann, wie, warum, wozu, wofür, welche, mit wem) with verb-second word order across the 26 pure-German reading/listening comprehension quiz prompts in B1.1–B1.6.
- **S05 (full_fetched_page):** [Duden Rechtschreibung — Aufgabe, die](https://www.duden.de/rechtschreibung/Aufgabe) — الأجزاء المقروءة: `[0]` من `1` — Confirms orthography and semantics of die Aufgabe (-n) for the <span lang='de'>AUFGABE</span> performance-task kicker.
- **S06 (full_fetched_page):** [Duden Rechtschreibung — Tagesplan, der](https://www.duden.de/rechtschreibung/Tagesplan) — الأجزاء المقروءة: `[0]` من `1` — Confirms der Tagesplan ('für den jeweiligen Tag aufgestellter Arbeitsplan'), replacing the leftover French 'PLAN DU JOUR' kicker with <span lang='de'>TAGESPLAN</span>.
- **S07 (full_fetched_page):** [Duden Rechtschreibung — Lektion, die](https://www.duden.de/rechtschreibung/Lektion) — الأجزاء المقروءة: `[0]` من `1` — Confirms die Lektion (-en) ('Übungseinheit, Kapitel in einem fremdsprachlichen Lehr- und Übungsbuch') for the <span lang='de'>LEKTION</span> lesson-panel kicker.
- **S08 (full_fetched_page):** [Duden Rechtschreibung — hören](https://www.duden.de/rechtschreibung/hoeren) — الأجزاء المقروءة: `[0]` من `1` — Confirms hören / das Hören for the <span lang='de'>HÖREN</span> audio-panel kicker.
- **S09 (full_fetched_page):** [Duden Rechtschreibung — Deutsch, das](https://www.duden.de/rechtschreibung/Deutsch) — الأجزاء المقروءة: `[0]` من `1` — Confirms das Deutsch ('die deutsche Sprache') for <span lang='de'>Deutsch</span> in the dashboard hero heading.
- **S10 (full_fetched_page):** [Duden Rechtschreibung — Frage, die](https://www.duden.de/rechtschreibung/Frage) — الأجزاء المقروءة: `[0]` من `1` — Confirms die Frage (-n) for German comprehension question prompts in lesson and gate assessments.
- **S11 (full_fetched_page):** [Duden Rechtschreibung — Antwort, die](https://www.duden.de/rechtschreibung/Antwort) — الأجزاء المقروءة: `[0]` من `1` — Confirms die Antwort (-en) for German quiz explanations and answer feedback.
- **S12 (full_fetched_page):** [Duden Rechtschreibung — Ziel, das](https://www.duden.de/rechtschreibung/Ziel) — الأجزاء المقروءة: `[0]` من `1` — Confirms das Ziel (-e) for lesson communication objectives (lesson.objective and source_objective).
- **S13 (full_fetched_page):** [Duden Rechtschreibung — Passiv, das](https://www.duden.de/rechtschreibung/Passiv) — الأجزاء المقروءة: `[0]` من `1` — Confirms das Passiv (Leideform) for A2.8 (DL-A2-08-Q07: 'Die Sitzung wird im Internet übertragen.'), B2.3 ('Passiv mit Modalverben'), and B2.8 ('werden/sein + Partizip II').
- **S14 (full_fetched_page):** [Duden Rechtschreibung — Konjunktiv, der](https://www.duden.de/rechtschreibung/Konjunktiv) — الأجزاء المقروءة: `[0]` من `1` — Confirms der Konjunktiv (Möglichkeitsform) for B1.3, B2.2, B2.10, and B2.12 lesson objectives.
- **S15 (search_snippet_only):** [Lingolia Search Snippet — Questions in German Grammar](https://deutsch.lingolia.com/en/grammar/sentence-structure/questions) — استعلام: `site:deutsch.lingolia.com/en/grammar/sentence-structure/questions W-questions German grammar` — Search snippet confirming closed (Entscheidungsfragen) and open (Ergänzungsfragen / W-Fragen) question structures.
- **S16 (search_snippet_only):** [Lingolia Search Snippet — Questions Free Exercise](https://deutsch.lingolia.com/en/grammar/sentence-structure/questions/exercises) — استعلام: `site:deutsch.lingolia.com/en/grammar/sentence-structure/questions W-questions German grammar` — Search snippet confirming question-word selection (wo, wer, wann, was, wie, wohin, worüber).
- **S17 (search_snippet_only):** [Duden Search Snippet — Lektion](https://www.duden.de/rechtschreibung/Lektion) — استعلام: `site:duden.de/rechtschreibung Aufgabe Tagesplan Lektion hoeren Deutsch` — Search snippet confirming die Lektion, Plural die Lektionen.
- **S18 (search_snippet_only):** [Duden Search Snippet — hören](https://www.duden.de/rechtschreibung/hoeren) — استعلام: `site:duden.de/rechtschreibung Aufgabe Tagesplan Lektion hoeren Deutsch` — Search snippet confirming hören (hört, hörte, hat gehört).
- **S19 (search_snippet_only):** [Duden Search Snippet — Aufgabe](https://www.duden.de/rechtschreibung/Aufgabe) — استعلام: `site:duden.de/rechtschreibung Aufgabe Tagesplan Lektion hoeren Deutsch` — Search snippet confirming die Aufgabe, Plural die Aufgaben.
- **S20 (search_snippet_only):** [Duden Search Snippet — fragen](https://www.duden.de/rechtschreibung/fragen) — استعلام: `site:duden.de/rechtschreibung Frage Antwort Ziel Passiv Konjunktiv` — Search snippet confirming fragen (fragt, fragte, hat gefragt).
- **S21 (search_snippet_only):** [Duden Search Snippet — Konjunktiv](https://www.duden.de/rechtschreibung/Konjunktiv) — استعلام: `site:duden.de/rechtschreibung Frage Antwort Ziel Passiv Konjunktiv` — Search snippet confirming der Konjunktiv (Möglichkeitsform).
- **S22 (search_snippet_only):** [Duden Search Snippet — Frage](https://www.duden.de/rechtschreibung/Frage) — استعلام: `site:duden.de/rechtschreibung Frage Antwort Ziel Passiv Konjunktiv` — Search snippet confirming die Frage, Plural die Fragen.

## 3. سجل وحدات المراجعة التفصيلية (60 وحدة)

### CR60-U01-a0-01-alphabet
- **النطاق:** `a0-01-alphabet` — A0.1 — الحروف والأصوات الألمانية
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a0-01-alphabet`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`3` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`0` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U02-a0-02-greetings
- **النطاق:** `a0-02-greetings` — A0.2 — التحية والتعارف
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a0-02-greetings`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`3` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`10` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U03-a0-03-numbers-personal-info
- **النطاق:** `a0-03-numbers-personal-info` — A0.3 — الأرقام والبيانات الشخصية
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a0-03-numbers-personal-info`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`2` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`0` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U04-a0-04-first-sentences
- **النطاق:** `a0-04-first-sentences` — A0.4 — الضمائر وأول جمل بـ sein وhaben
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a0-04-first-sentences`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`1` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`9` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U05-a0-05-classroom-phrases
- **النطاق:** `a0-05-classroom-phrases` — A0.5 — عبارات الصف وطلب المساعدة
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a0-05-classroom-phrases`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`2` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`10` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U06-a1-01-introductions-languages-hobbies
- **النطاق:** `a1-01-introductions-languages-hobbies` — A1.1 — التعريف بالنفس واللغات والهوايات
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a1-01-introductions-languages-hobbies`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`2` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`12` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U07-a1-02-work-family
- **النطاق:** `a1-02-work-family` — A1.2 — الأسرة والمهن
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a1-02-work-family`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`2` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`11` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U08-a1-03-city-cafe-hotel
- **النطاق:** `a1-03-city-cafe-hotel` — A1.3 — في المدينة: المقهى والفندق
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a1-03-city-cafe-hotel`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`3` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`13` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U09-a1-04-daily-routine-time
- **النطاق:** `a1-04-daily-routine-time` — A1.4 — الروتين اليومي والوقت
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a1-04-daily-routine-time`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`2` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`12` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U10-a1-05-food-drink
- **النطاق:** `a1-05-food-drink` — A1.5 — الطعام والشراب
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a1-05-food-drink`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`2` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`15` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U11-a1-06-yesterday-perfekt
- **النطاق:** `a1-06-yesterday-perfekt` — A1.6 — أمس واليوم: مقدمة إلى Perfekt
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a1-06-yesterday-perfekt`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`2` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`8` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U12-a1-07-travel-weather
- **النطاق:** `a1-07-travel-weather` — A1.7 — السفر والطقس
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a1-07-travel-weather`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`3` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`16` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U13-a1-08-shopping-clothes
- **النطاق:** `a1-08-shopping-clothes` — A1.8 — التسوّق والملابس والاحتياجات
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a1-08-shopping-clothes`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`3` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`16` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U14-a1-09-work-appointments
- **النطاق:** `a1-09-work-appointments` — A1.9 — العمل والمشكلات والمواعيد
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a1-09-work-appointments`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`3` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`16` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U15-a1-10-hobbies-health
- **النطاق:** `a1-10-hobbies-health` — A1.10 — الهوايات والصحة وزيارة الطبيب
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a1-10-hobbies-health`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`3` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`20` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U16-a1-11-home-directions
- **النطاق:** `a1-11-home-directions` — A1.11 — السكن والمنزل والاتجاهات
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a1-11-home-directions`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`3` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`13` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U17-a1-12-trip-invitations
- **النطاق:** `a1-12-trip-invitations` — A1.12 — رحلة قصيرة ومناسبات ودعوات
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a1-12-trip-invitations`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`4` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`15` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U18-a2-01-routines-abilities-experiences
- **النطاق:** `a2-01-routines-abilities-experiences` — A2.1 — الحياة اليومية والقدرات والتجارب
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a2-01-routines-abilities-experiences`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`15` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U19-a2-02-travel-comparisons
- **النطاق:** `a2-02-travel-comparisons` — A2.2 — الرحلات والأماكن والمقارنة
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a2-02-travel-comparisons`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`18` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U20-a2-03-food-nutrition-shopping
- **النطاق:** `a2-03-food-nutrition-shopping` — A2.3 — الطعام والتغذية والشراء والمطعم
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a2-03-food-nutrition-shopping`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`4` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`20` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U21-a2-04-office-phone-appointments
- **النطاق:** `a2-04-office-phone-appointments` — A2.4 — المكتب والهاتف والمواعيد
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a2-04-office-phone-appointments`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`4` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`14` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U22-a2-05-training-routine-wenn
- **النطاق:** `a2-05-training-routine-wenn` — A2.5 — الروتين والتدريب المهني وجمل wenn
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a2-05-training-routine-wenn`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`12` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U23-a2-06-family-happiness-gifts
- **النطاق:** `a2-06-family-happiness-gifts` — A2.6 — الأسرة والمشاعر والدعوات والهدايا
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a2-06-family-happiness-gifts`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`14` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U24-a2-07-language-learning-travel-purpose
- **النطاق:** `a2-07-language-learning-travel-purpose` — A2.7 — تعلّم اللغات والسفر والغاية بـum … zu
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a2-07-language-learning-travel-purpose`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`4` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`17` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U25-a2-08-media-news-passive
- **النطاق:** `a2-08-media-news-passive` — A2.8 — الإعلام والأخبار والسياسة: المبني للمجهول
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a2-08-media-news-passive`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`4` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`23` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`1/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U26-a2-09-products-technology-complaints
- **النطاق:** `a2-09-products-technology-complaints` — A2.9 — المنتجات والتقنية وتقديم شكوى
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a2-09-products-technology-complaints`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`4` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`15` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U27-a2-10-sports-health-feelings-weil
- **النطاق:** `a2-10-sports-health-feelings-weil` — A2.10 — الرياضة والصحة والمشاعر وجملة weil
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a2-10-sports-health-feelings-weil`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`14` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U28-a2-11-housing-neighborhood-wohin
- **النطاق:** `a2-11-housing-neighborhood-wohin` — A2.11 — المدن والسكن والجيران: Wo أم Wohin؟
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a2-11-housing-neighborhood-wohin`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`20` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U29-a2-12-holidays-festivals-culture
- **النطاق:** `a2-12-holidays-festivals-culture` — A2.12 — العطلات والمهرجانات والثقافة
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `a2-12-holidays-festivals-culture`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`4` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`16` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U30-b1-01-daily-life-hobbies-experiences
- **النطاق:** `b1-01-daily-life-hobbies-experiences` — B1.1 — الحياة اليومية والهوايات والتجارب: als وwenn
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b1-01-daily-life-hobbies-experiences`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`13` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`4/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U31-b1-02-food-habits-obwohl
- **النطاق:** `b1-02-food-habits-obwohl` — B1.2 — الطعام والعادات الغذائية: obwohl وtrotzdem
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b1-02-food-habits-obwohl`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`13` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`4/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U32-b1-03-work-communication-konjunktiv
- **النطاق:** `b1-03-work-communication-konjunktiv` — B1.3 — المهنة والتواصل في مكان العمل: اقتراحات مهذبة
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b1-03-work-communication-konjunktiv`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`4` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`14` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`4/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U33-b1-04-continuing-education-damit
- **النطاق:** `b1-04-continuing-education-damit` — B1.4 — التعلّم والتعليم المستمر: damit و um … zu
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b1-04-continuing-education-damit`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`15` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`6/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U34-b1-05-cities-relative-clauses
- **النطاق:** `b1-05-cities-relative-clauses` — B1.5 — المدن ووصف الأماكن: الجمل الموصولة في Nominativ و Akkusativ
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b1-05-cities-relative-clauses`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`14` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`4/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U35-b1-06-health-fitness-advice
- **النطاق:** `b1-06-health-fitness-advice` — B1.6 — الصحة واللياقة وتقديم النصيحة: sollte و könnte
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b1-06-health-fitness-advice`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`14` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`4/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U36-b1-07-lifestyles-customs-cultures
- **النطاق:** `b1-07-lifestyles-customs-cultures` — B1.7 — أساليب الحياة والعادات والثقافات: الروابط الثنائية
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b1-07-lifestyles-customs-cultures`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`14` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U37-b1-08-consumption-advertising-je-desto
- **النطاق:** `b1-08-consumption-advertising-je-desto` — B1.8 — المنتجات والاستهلاك والإعلان: je … desto/umso …
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b1-08-consumption-advertising-je-desto`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`17` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U38-b1-09-travel-transport-environment
- **النطاق:** `b1-09-travel-transport-environment` — B1.9 — السفر والنقل والبيئة: bevor وnachdem وwährend
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b1-09-travel-transport-environment`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`16` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U39-b1-10-media-news-formal-communication
- **النطاق:** `b1-10-media-news-formal-communication` — B1.10 — الإعلام والأخبار والتواصل الرسمي: الأسئلة غير المباشرة
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b1-10-media-news-formal-communication`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`16` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U40-b1-11-history-politics-passive-past
- **النطاق:** `b1-11-history-politics-passive-past` — B1.11 — التاريخ والسياسة: المبني للمجهول في Präteritum
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b1-11-history-politics-passive-past`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`16` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U41-b1-12-innovation-research-future
- **النطاق:** `b1-12-innovation-research-future` — B1.12 — الابتكار والإبداع والبحث: التوقّعات بـFutur I
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b1-12-innovation-research-future`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`16` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U42-b2-01-time-management-habits-reading
- **النطاق:** `b2-01-time-management-habits-reading` — B2.1 — إدارة الوقت والعادات والقراءة: indem وdadurch, dass
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b2-01-time-management-habits-reading`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`14` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U43-b2-02-career-formal-communication-konjunktiv1
- **النطاق:** `b2-02-career-formal-communication-konjunktiv1` — B2.2 — العمل والمسار المهني والتواصل الرسمي: Konjunktiv I
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b2-02-career-formal-communication-konjunktiv1`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`15` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U44-b2-03-consumption-environment-passive-modal
- **النطاق:** `b2-03-consumption-environment-passive-modal` — B2.3 — الاستهلاك والبدائل البيئية: المبني للمجهول مع الأفعال الناقصة
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b2-03-consumption-environment-passive-modal`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`15` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U45-b2-04-cities-housing-participles
- **النطاق:** `b2-04-cities-housing-participles` — B2.4 — المدن والمباني والسكن: Partizip I وPartizip II كصفات
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b2-04-cities-housing-participles`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`15` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U46-b2-05-health-fitness-medical-information
- **النطاق:** `b2-05-health-fitness-medical-information` — B2.5 — الصحة واللياقة والمعلومات الطبية: السبب والنتيجة
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b2-05-health-fitness-medical-information`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`16` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U47-b2-06-study-applications-verb-noun-phrases
- **النطاق:** `b2-06-study-applications-verb-noun-phrases` — B2.6 — التعلّم والدراسة والتقديم الأكاديمي: Nomen-Verb-Verbindungen
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b2-06-study-applications-verb-noun-phrases`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`14` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U48-b2-07-travel-experiences-prepositional-relatives
- **النطاق:** `b2-07-travel-experiences-prepositional-relatives` — B2.7 — السفر والتجارب والوجهات: الجمل الموصولة مع حروف الجر
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b2-07-travel-experiences-prepositional-relatives`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`15` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U49-b2-08-food-nutrition-data-passives
- **النطاق:** `b2-08-food-nutrition-data-passives` — B2.8 — الغذاء والتغذية والبيانات: Vorgangspassiv وZustandspassiv
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b2-08-food-nutrition-data-passives`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`16` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U50-b2-09-business-marketing-employment-prepositions
- **النطاق:** `b2-09-business-marketing-employment-prepositions` — B2.9 — الشركات والتسويق والعمل: الأفعال مع حروف الجر وda-/wo- المركّبة
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b2-09-business-marketing-employment-prepositions`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`15` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U51-b2-10-wishes-probabilities-technology-konjunktiv2-past
- **النطاق:** `b2-10-wishes-probabilities-technology-konjunktiv2-past` — B2.10 — الأمنيات والاحتمالات والتقنية: Konjunktiv II للماضي والفرضيات
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b2-10-wishes-probabilities-technology-konjunktiv2-past`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`15` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U52-b2-11-humans-nature-environment-nominalization
- **النطاق:** `b2-11-humans-nature-environment-nominalization` — B2.11 — الإنسان والطبيعة وحماية البيئة: الأسلوب الاسمي
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b2-11-humans-nature-environment-nominalization`: نص الهدف نظيف وخالٍ من رموز Markdown الخام في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`16` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U53-b2-12-leisure-media-reported-speech
- **النطاق:** `b2-12-leisure-media-reported-speech` — B2.12 — أوقات الفراغ والإعلام ونقل الكلام: Konjunktiv I وKonjunktiv II
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04, S10, S11, S12`
- **النتيجة:** رُوجع الدرس `b2-12-leisure-media-reported-speech`: جرى تنظيف نص الهدف من رموز Markdown الخام (`**`/`\``) وعلامة `.؛` في `data/course.json` و`data/curriculum-file-audit.csv`، وتُعرض عناوين الدرس (`<h1 dir="auto">` و`<h3 dir="auto">`) وهدفه (`<p dir="auto">`) وعناوين التسجيلات الصوتية (`5` أصلًا بسمة `<strong dir="auto">`) وترجمات المفردات (`16` مفردة بسمة `dir="auto"`) ونصوص أسئلة التقييم (`0/10` سؤالًا ألمانيًا بسمة `lang="de"`) وتفسيرات الإجابة (`0/10` تفسيرًا ألمانيًا بسمة `lang="de"`) وفق `WCAG 2.1 SC 3.1.2` و`W3C Bidi`.

### CR60-U54-a0-a1-gate
- **النطاق:** `a0-a1-gate` — A0→A1 Gate — A0 — بوابة الانتقال إلى A1
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S10, S11`
- **النتيجة:** رُوجعت بوابة الانتقال `a0-a1-gate`: تُعرض نصوص أسئلة البوابة الـ`10` بسمة `<h1 dir="auto">` (مع دعم `lang="de"` عند كون السؤال ألمانيًا خالصًا) وتفسيرات الإجابة بسمة `<span dir="auto">` وعنوان أصل الاستماع بسمة `<strong dir="auto">`.

### CR60-U55-bundler-objective-sanitizer-and-audit-sync
- **النطاق:** `tools/build_course.py + data/course.json + data/curriculum-file-audit.csv` — تنظيف نصوص أهداف الدروس (`21/53`) ومزامنة `source_objective` في سجل التدقيق
- **الحالة:** `reviewed_synced` · **المراجع:** `S03, S12, S13, S14`
- **النتيجة:** جرى تحديث `lesson_objective()` عبر دالة `clean_objective_text()` في `tools/build_course.py` لإزالة علامات التنسيق الخام (`**` و`` ` ``) وتوحيد فواصل بنود `## أستطيع أن` (`؛ ` بدل `.؛ `)، مما صحح `21` هدف درس في `data/course.json` (`2,419,161` بايت) وطابق عمود `source_objective` في جميع صفوف `data/curriculum-file-audit.csv` الـ`53`.

### CR60-U56-quiz-prompt-and-explanation-lang-de
- **النطاق:** `app.js + data/course.json` — وسم أسئلة التقييم الألمانية الخالصة (`26/540`) وتفسيرات الإجابة الألمانية (`1/540`) بسمة `lang="de"`
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S04, S10, S11, S13`
- **النتيجة:** جرى تحديث `renderLessonQuiz()` و`renderA0GateQuiz()` في `app.js` بحيث تحمل عناوين الأسئلة الألمانية الخالصة (`26` سؤالًا من أصل `540` في `B1.1–B1.6`) وسم `<h1 dir="auto" lang="de">`، وتحمل تفسيرات الإجابة عنصر `<span dir="auto" lang="de">` عند كون التفسير ألمانيًا خالصًا (`DL-A2-08-Q07`: `Die Sitzung wird im Internet übertragen.`).

### CR60-U57-ui-german-kickers-and-tagesplan-fix
- **النطاق:** `app.js` — وسم شارات الواجهة الألمانية السبع بسمة `lang="de"` واستبدال `PLAN DU JOUR` بـ`TAGESPLAN`
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S05, S06, S07, S08, S09`
- **النتيجة:** جرى وسم المصطلحات الألمانية السبعة في الواجهة بسمة `<span lang="de">` (`AUFGABE`، و`TAGESPLAN` بدل العبارة الفرنسية الدخيلة `PLAN DU JOUR`، و`Deutsch` في ترويسة اللوحة، و`WORTSCHATZ` في بطاقة اللوحة ودرج المفردات، و`HÖREN` في لوحة الصوت، و`LEKTION` في لوحة الدرس) وتحديث ملاحظتي احتساب الوقت الفعلي وطريقة الدراسة.

### CR60-U58-bidi-containers-and-css-plaintext
- **النطاق:** `app.js + styles.css` — توسيم حاويات العناوين والأهداف والترجمات والمسارات بسمات `dir="auto"`/`dir="ltr"` و`unicode-bidi: plaintext`
- **الحالة:** `reviewed_synced` · **المراجع:** `S03`
- **النتيجة:** أُضيفت سمة `dir="auto"` وقاعدة `unicode-bidi: plaintext` لعناوين الدروس وأهدافها في بطاقات المسارات وترويسة الدرس والبطاقة الجانبية وخطة اليوم وعناوين الأصول الصوتية الـ`217` وترجمات المفردات الـ`754` في درجي الدرس والمراجعة، مع وسم `<b dir="ltr">content/</b>` و`<code dir="ltr">python3 tools/build_course.py</code>` في ملاحظة المسارات.

### CR60-U59-service-worker-v109-and-browser-qa
- **النطاق:** `service-worker.js + tools/test_browser.cjs + tools/test_accessibility_update.cjs + tools/test_service_worker.cjs` — ترقية مخزن العمل دون اتصال إلى `deutsch-pfad-v109` والتحقق في المتصفح
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03`
- **النتيجة:** رُقّي مخزن `service-worker.js` إلى `deutsch-pfad-v109`، وأُضيفت فحوص DOM مباشرة في `tools/test_browser.cjs` للتحقق من `dir="auto"` على ترويسة الدرس وعناوين الصوت وترجمات المفردات ومن `<span lang="de">LEKTION</span>`، مع بقاء `231` حالة شاشة في `axe-core` بصفر مخالفات وصفر فحوص غير حاسمة.

### CR60-U60-verifier-and-60th-review-guard
- **النطاق:** `tools/verify_course.py + tools/test_objective_quiz_prompt_bidi_review.py` — توسيع فاحص المنهج `verify_course.py` وإضافة الحارس الآلي رقم `60`
- **الحالة:** `reviewed_synced` · **المراجع:** `S01, S02, S03, S04`
- **النتيجة:** جرى تحديث `tools/verify_course.py` للتحقق من خلو جميع أهداف الدروس الـ`53` من رموز Markdown الخام ومطابقتها لعمود `source_objective` في `data/curriculum-file-audit.csv` ومن وجود شارات `lang="de"` وحاويات `dir="auto"` في `app.js` ومن سلامة `60` ملف مراجعة JSON، وأُنشئ الحارس `tools/test_objective_quiz_prompt_bidi_review.py`.
