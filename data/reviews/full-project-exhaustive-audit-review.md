# مراجعة وفحص شامل لكامل المشروع بنسبة 100% دون عينات (CR61 — `full-project-exhaustive-audit-review`)

- **الدفعة:** `CR61` (`full-project-exhaustive-audit-review`)
- **التاريخ:** `2026-10-10`
- **النطاق:** تحويل جميع أدوات التدقيق والتحقق واختبارات المتصفح (`verify_course.py` و`test_accessibility_audit.cjs` و`test_narrow_layout.cjs` و`test_browser.cjs`) من فحص عينات تمثيلية إلى **فحص شامل لكامل المشروع بنسبة 100% دون أي أخذ عينات** عبر جميع الدروس الـ`53` وبوابة `A0` ونظرة `A0` العامة وصفحات المستويات الخمسة (`A0–B2`) وجميع الأسئلة الـ`540` والخيارات الـ`1,622` والتفسيرات الـ`540` والمهام العملية الـ`109` والأصول الصوتية الـ`217` (`474` مقطعًا) والمفردات الـ`754` والجداول الـ`96` والسجلات التراكمية الثلاثة (`53×29` و`1080×15` و`217×23`).
- **عدد وحدات المراجعة الشاملة:** `68` وحدة (`53` درسًا + بوابة `A0` + نظرة `A0` + `5` صفحات مستويات + `8` وحدات تنسيق وتخطيط وسجلات واختبارات متصفح شاملة).
- **المراجع الإلكترونية:** `22` مرجعًا (`14` صفحة مقروءة بالكامل في `16` جزءًا بنسبة `100%` + `3` استعلامات بحث أرجعت `8` مقتطفات؛ `0` روابط مستبعدة).
- **المخزن (`Service Worker`):** `deutsch-pfad-v110`.
- **حدود الفحص:** الفحوص البرمجية وفحوص المتصفح والـDOM شاملة لكامل المشروع بنسبة `100%`، لكنها لا تمثل مراجعة سمعية بشرية لـ`80` أصلًا صوتيًا معلقًا (`B1.9–B2.12`) ولا شهادة توافق `CEFR` أو `WCAG` رسمية ولا دمجًا لـ`PR#1`.

## المراجع الإلكترونية المعتمدة

- **S01 (`search_snippet_only`، الاستعلام `site:duden.de/rechtschreibung Vollstaendigkeit Pruefung Kontrolle Nachweis Gesamtuebersicht`):** [Duden search: Vollstaendigkeit Pruefung Kontrolle Nachweis Gesamtuebersicht](https://www.duden.de/rechtschreibung/Vollstaendigkeit) — يوثّق معجم Duden دلالة Vollständigkeit («الاكتمال والشمول دون نقص») وNachweis («الدليل الموثّق») وPrüfung («الفحص والاختبار»).
- **S02 (`search_snippet_only`، الاستعلام `site:duden.de/rechtschreibung Vollstaendigkeit Pruefung Kontrolle Nachweis Gesamtuebersicht`):** [Duden search: Nachweis](https://www.duden.de/rechtschreibung/Nachweis) — يوثّق معجم Duden صيغة der Nachweis وجمعه die Nachweise للدلالة على البرهان الموثّق في السجلات والفحوص.
- **S03 (`search_snippet_only`، الاستعلام `site:duden.de/rechtschreibung Vollstaendigkeit Pruefung Kontrolle Nachweis Gesamtuebersicht`):** [Duden search: Pruefung](https://www.duden.de/rechtschreibung/Pruefung) — يوثّق معجم Duden صيغة die Prüfung وجمعها die Prüfungen للدلالة على الفحص المنهجي والاختبار الشامل.
- **S04 (`search_snippet_only`، الاستعلام `site:deutsch.lingolia.com/en/grammar/verbs/passiv German passive voice grammar`):** [Lingolia search: Passive Voice in German Grammar](https://deutsch.lingolia.com/en/grammar/verbs/passive) — يوثّق مرجع Lingolia قواعد المبني للمجهول (Vorgangspassiv وZustandspassiv والمبني للمجهول مع الأفعال الناقصة) الواردة في العبارات الألمانية المضمّنة داخل أسئلة التقييم وتفسيراتها.
- **S05 (`search_snippet_only`، الاستعلام `site:deutsch.lingolia.com/en/grammar/verbs/passiv German passive voice grammar`):** [Lingolia search: Passive Voice – Free Exercise](https://deutsch.lingolia.com/en/grammar/verbs/passive/exercises) — يوثّق مرجع Lingolia تمارين تحويل الجمل بين المبني للمعلوم والمبني للمجهول في الأزمنة المختلفة.
- **S06 (`search_snippet_only`، الاستعلام `site:duden.de/rechtschreibung Kontrolle Verzeichnis Register Uebersicht`):** [Duden search: Register](https://www.duden.de/rechtschreibung/Register) — يوثّق معجم Duden صيغة das Register وجمعه die Register للدلالة على الفهرس والسجل المنظّم.
- **S07 (`search_snippet_only`، الاستعلام `site:duden.de/rechtschreibung Kontrolle Verzeichnis Register Uebersicht`):** [Duden search: Index](https://www.duden.de/rechtschreibung/Index) — يوثّق معجم Duden صيغة der Index وجمعه die Indexe/Indizes للدلالة على الفهرس المرجعي.
- **S08 (`search_snippet_only`، الاستعلام `site:duden.de/rechtschreibung Kontrolle Verzeichnis Register Uebersicht`):** [Duden search: Uebersicht](https://www.duden.de/rechtschreibung/Uebersicht) — يوثّق معجم Duden صيغة die Übersicht وجمعها die Übersichten للدلالة على النظرة الشاملة والجداول التلخيصية.
- **S09 (`full_fetched_page`، الأجزاء `[0, 1]` من `2`):** [WCAG-EM Overview: WCAG Evaluation Methodology | Web Accessibility Initiative (WAI) | W3C](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/) — تبيّن منهجية WCAG-EM أن أخذ العينات التمثيلية يُستعمل فقط عندما يتعذّر فحص جميع صفحات المنتج الرقمي، مما يبرّر انتقالنا في هذا المشروع ذي الـ53 درسًا وبوابة A0 إلى الفحص الشامل بنسبة 100% لجميع الصفحات والأوضاع دون أخذ عينات.
- **S10 (`full_fetched_page`، الأجزاء `[0]` من `1`):** [G134: Validating web pages | WAI | W3C](https://www.w3.org/WAI/WCAG21/Techniques/general/G134) — توصي تقنية G134 بالتحقق الآلي الدفعي الشامل من جميع صفحات ومجلدات التطبيق لإزالة أي غموض في الترميز أو السمات.
- **S11 (`full_fetched_page`، الأجزاء `[0]` من `1`):** [H49: Using semantic markup to mark emphasized or special text | WAI | W3C](https://www.w3.org/WAI/WCAG21/Techniques/html/H49) — توصي تقنية H49 (المرتبطة بمعيار 1.3.1 Info and Relationships) باستعمال العناصر الدلالية <strong> و<code> بدل علامات التنسيق الخام لتمييز النصوص المشدّدة والرموز برمجيًا وبصريًا.
- **S12 (`full_fetched_page`، الأجزاء `[0, 1]` من `2`):** [Passive Voice in German Grammar | Lingolia](https://deutsch.lingolia.com/en/grammar/verbs/passive) — يُفصّل مرجع Lingolia تراكيب المبني للمجهول للعملية (werden + Partizip II) والحالة (sein + Partizip II) والمبني للمجهول مع الأفعال الناقصة (muss/musste + Partizip II + werden) المستعملة في العبارات الألمانية المضمّنة داخل أسئلة التقييم وتفسيراتها.
- **S13 (`full_fetched_page`، الأجزاء `[0]` من `1`):** [Duden | Vollständigkeit | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Vollstaendigkeit) — يوثّق معجم Duden الاسم المؤنث die Vollständigkeit (بلا جمع) بمعنى الاكتمال التام والشمول الكامل.
- **S14 (`full_fetched_page`، الأجزاء `[0]` من `1`):** [Duden | Nachweis | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Nachweis) — يوثّق معجم Duden الاسم المذكر der Nachweis (des Nachweises, die Nachweise) بمعنى الإثبات الموثّق والدليل.
- **S15 (`full_fetched_page`، الأجزاء `[0]` من `1`):** [Duden | Prüfung | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Pruefung) — يوثّق معجم Duden الاسم المؤنث die Prüfung (der Prüfung, die Prüfungen) بمعنى الفحص الدقيق والاختبار.
- **S16 (`full_fetched_page`، الأجزاء `[0]` من `1`):** [Duden | Register | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Register) — يوثّق معجم Duden الاسم المحايد das Register (des Registers, die Register) بمعنى السجل المنظّم والفهرس.
- **S17 (`full_fetched_page`، الأجزاء `[0]` من `1`):** [Duden | Index | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Index) — يوثّق معجم Duden الاسم المذكر der Index (des Index/Indexes, die Indexe/Indizes) بمعنى الفهرس والمؤشر.
- **S18 (`full_fetched_page`، الأجزاء `[0]` من `1`):** [Duden | Übersicht | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Uebersicht) — يوثّق معجم Duden الاسم المؤنث die Übersicht (der Übersicht, die Übersichten) بمعنى النظرة الشاملة والعرض المنظّم.
- **S19 (`full_fetched_page`، الأجزاء `[0]` من `1`):** [Duden | Kontrolle | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Kontrolle) — يوثّق معجم Duden الاسم المؤنث die Kontrolle (der Kontrolle, die Kontrollen) بمعنى المراقبة والتحقق المنهجي.
- **S20 (`full_fetched_page`، الأجزاء `[0]` من `1`):** [Duden | Verzeichnis | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Verzeichnis) — يوثّق معجم Duden الاسم المحايد das Verzeichnis (des Verzeichnisses, die Verzeichnisse) بمعنى القائمة الجردية الكاملة.
- **S21 (`full_fetched_page`، الأجزاء `[0]` من `1`):** [Duden | Katalog | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Katalog) — يوثّق معجم Duden الاسم المذكر der Katalog (des Katalogs/Kataloges, die Kataloge) بمعنى الدليل المصنّف الشامل.
- **S22 (`full_fetched_page`، الأجزاء `[0]` من `1`):** [Duden | Fertigkeit | Rechtschreibung, Bedeutung, Definition, Herkunft](https://www.duden.de/rechtschreibung/Fertigkeit) — يوثّق معجم Duden الاسم المؤنث die Fertigkeit (der Fertigkeit, die Fertigkeiten) بمعنى المهارة المكتسبة، مما يدعم مزامنة عمود declared_skills في سجل التدقيق.

## سجل الوحدات المفحوصة في كامل المشروع (`68` وحدة)

### U01-a0-01-alphabet
- **النطاق:** `a0-01-alphabet`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a0-01-alphabet (A0.1) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 0 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة أولية، تهجئة، نطق»).

### U02-a0-02-greetings
- **النطاق:** `a0-02-greetings`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a0-02-greetings (A0.2) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 10 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة الحوار، تفاعل ومحادثة مباشرة»).

### U03-a0-03-numbers-personal-info
- **النطاق:** `a0-03-numbers-personal-info`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a0-03-numbers-personal-info (A0.3) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 0 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، كتابة، محادثة مباشرة»).

### U04-a0-04-first-sentences
- **النطاق:** `a0-04-first-sentences`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a0-04-first-sentences (A0.4) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 9 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، كتابة، محادثة، قواعد أساسية»).

### U05-a0-05-classroom-phrases
- **النطاق:** `a0-05-classroom-phrases`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a0-05-classroom-phrases (A0.5) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 10 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، كتابة، تفاعل ومحادثة مباشرة»).

### U06-a1-01-introductions-languages-hobbies
- **النطاق:** `a1-01-introductions-languages-hobbies`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a1-01-introductions-languages-hobbies (A1.1) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 12 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قواعد، قراءة، استماع قصير، محادثة وكتابة»).

### U07-a1-02-work-family
- **النطاق:** `a1-02-work-family`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a1-02-work-family (A1.2) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 11 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قراءة، استماع قصير، محادثة وكتابة»).

### U08-a1-03-city-cafe-hotel
- **النطاق:** `a1-03-city-cafe-hotel`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a1-03-city-cafe-hotel (A1.3) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 13 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، كتابة، محادثة، مفردات، قواعد، واستماع اختياري»).

### U09-a1-04-daily-routine-time
- **النطاق:** `a1-04-daily-routine-time`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a1-04-daily-routine-time (A1.4) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 12 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قراءة، كتابة، محادثة وقواعد، واستماع اختياري»).

### U10-a1-05-food-drink
- **النطاق:** `a1-05-food-drink`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a1-05-food-drink (A1.5) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 15 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قراءة، محادثة وكتابة، واستماع اختياري»).

### U11-a1-06-yesterday-perfekt
- **النطاق:** `a1-06-yesterday-perfekt`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a1-06-yesterday-perfekt (A1.6) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 8 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، كتابة، سرد قصير، قواعد، واستماع اختياري»).

### U12-a1-07-travel-weather
- **النطاق:** `a1-07-travel-weather`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a1-07-travel-weather (A1.7) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 16 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قراءة، كتابة، محادثة، واستماع اختياري»).

### U13-a1-08-shopping-clothes
- **النطاق:** `a1-08-shopping-clothes`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a1-08-shopping-clothes (A1.8) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 16 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، محادثة، قراءة، كتابة، قواعد، واستماع اختياري»).

### U14-a1-09-work-appointments
- **النطاق:** `a1-09-work-appointments`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a1-09-work-appointments (A1.9) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 16 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قواعد، قراءة، كتابة، محادثة، واستماع اختياري»).

### U15-a1-10-hobbies-health
- **النطاق:** `a1-10-hobbies-health`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a1-10-hobbies-health (A1.10) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 20 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قراءة، كتابة، محادثة، قواعد، واستماع اختياري»).

### U16-a1-11-home-directions
- **النطاق:** `a1-11-home-directions`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a1-11-home-directions (A1.11) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 13 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قواعد، قراءة، كتابة، وصف مكان وطريق، واستماع اختياري»).

### U17-a1-12-trip-invitations
- **النطاق:** `a1-12-trip-invitations`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a1-12-trip-invitations (A1.12) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 15 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، محادثة، كتابة، مراجعة، واستماع اختياري»).

### U18-a2-01-routines-abilities-experiences
- **النطاق:** `a2-01-routines-abilities-experiences`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a2-01-routines-abilities-experiences (A2.1) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 15 بطاقة مفردات و10 أسئلة (2 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، قواعد، محادثة، كتابة، واستماع اختياري»).

### U19-a2-02-travel-comparisons
- **النطاق:** `a2-02-travel-comparisons`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a2-02-travel-comparisons (A2.2) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 18 بطاقة مفردات و10 أسئلة (2 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، قواعد، كتابة، محادثة، تخطيط رحلة، واستماع اختياري»).

### U20-a2-03-food-nutrition-shopping
- **النطاق:** `a2-03-food-nutrition-shopping`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a2-03-food-nutrition-shopping (A2.3) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 20 بطاقة مفردات و10 أسئلة (3 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قراءة، كتابة، قواعد، محادثة، واستماع اختياري»).

### U21-a2-04-office-phone-appointments
- **النطاق:** `a2-04-office-phone-appointments`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a2-04-office-phone-appointments (A2.4) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 14 بطاقة مفردات و10 أسئلة (2 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «كتابة، محادثة هاتفية، قراءة بريد إلكتروني، قواعد، واستماع اختياري»).

### U22-a2-05-training-routine-wenn
- **النطاق:** `a2-05-training-routine-wenn`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a2-05-training-routine-wenn (A2.5) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 12 بطاقة مفردات و10 أسئلة (3 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، كتابة، قواعد، وصف جدول، كلام، واستماع اختياري»).

### U23-a2-06-family-happiness-gifts
- **النطاق:** `a2-06-family-happiness-gifts`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a2-06-family-happiness-gifts (A2.6) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 14 بطاقة مفردات و10 أسئلة (2 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قراءة، كتابة، كلام، قواعد، واستماع اختياري»).

### U24-a2-07-language-learning-travel-purpose
- **النطاق:** `a2-07-language-learning-travel-purpose`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a2-07-language-learning-travel-purpose (A2.7) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 17 بطاقة مفردات و10 أسئلة (3 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قراءة، كتابة، كلام، قواعد، واستماع اختياري»).

### U25-a2-08-media-news-passive
- **النطاق:** `a2-08-media-news-passive`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a2-08-media-news-passive (A2.8) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 23 بطاقة مفردات و10 أسئلة (4 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قراءة، كتابة، كلام، قواعد، واستماع اختياري»).

### U26-a2-09-products-technology-complaints
- **النطاق:** `a2-09-products-technology-complaints`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a2-09-products-technology-complaints (A2.9) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 15 بطاقة مفردات و10 أسئلة (3 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قراءة، كتابة، كلام، قواعد، واستماع اختياري»).

### U27-a2-10-sports-health-feelings-weil
- **النطاق:** `a2-10-sports-health-feelings-weil`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a2-10-sports-health-feelings-weil (A2.10) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 14 بطاقة مفردات و10 أسئلة (3 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قراءة، كتابة، كلام، قواعد، واستماع اختياري»).

### U28-a2-11-housing-neighborhood-wohin
- **النطاق:** `a2-11-housing-neighborhood-wohin`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a2-11-housing-neighborhood-wohin (A2.11) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 20 بطاقة مفردات و10 أسئلة (1 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «مفردات، قراءة، كتابة، كلام، قواعد، واستماع اختياري»).

### U29-a2-12-holidays-festivals-culture
- **النطاق:** `a2-12-holidays-festivals-culture`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس a2-12-holidays-festivals-culture (A2.12) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 16 بطاقة مفردات و10 أسئلة (3 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، تخطيط، قواعد، كتابة، كلام، واستماع اختياري»).

### U30-b1-01-daily-life-hobbies-experiences
- **النطاق:** `b1-01-daily-life-hobbies-experiences`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b1-01-daily-life-hobbies-experiences (B1.1) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 13 بطاقة مفردات و10 أسئلة (5 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (2 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، استماع اختياري، سرد تجربة، قواعد، كتابة وجهر»).

### U31-b1-02-food-habits-obwohl
- **النطاق:** `b1-02-food-habits-obwohl`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b1-02-food-habits-obwohl (B1.2) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 13 بطاقة مفردات و10 أسئلة (5 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، استماع اختياري، قواعد، كتابة وجهر»).

### U32-b1-03-work-communication-konjunktiv
- **النطاق:** `b1-03-work-communication-konjunktiv`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b1-03-work-communication-konjunktiv (B1.3) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 14 بطاقة مفردات و10 أسئلة (4 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة إعلان، استماع اختياري، اجتماع، كتابة مهنية، قواعد وجهر»).

### U33-b1-04-continuing-education-damit
- **النطاق:** `b1-04-continuing-education-damit`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b1-04-continuing-education-damit (B1.4) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 15 بطاقة مفردات و10 أسئلة (4 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، استماع اختياري، قواعد، تخطيط تعلّم، كتابة وجهر»).

### U34-b1-05-cities-relative-clauses
- **النطاق:** `b1-05-cities-relative-clauses`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b1-05-cities-relative-clauses (B1.5) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 14 بطاقة مفردات و10 أسئلة (5 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، استماع اختياري، وصف مكان، قواعد، كتابة وجهر»).

### U35-b1-06-health-fitness-advice
- **النطاق:** `b1-06-health-fitness-advice`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b1-06-health-fitness-advice (B1.6) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 14 بطاقة مفردات و10 أسئلة (5 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، استماع اختياري، قواعد، كتابة وجهر»).

### U36-b1-07-lifestyles-customs-cultures
- **النطاق:** `b1-07-lifestyles-customs-cultures`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b1-07-lifestyles-customs-cultures (B1.7) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 14 بطاقة مفردات و10 أسئلة (8 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، استماع اختياري، قواعد، مقارنة عادات، كتابة وجهر»).

### U37-b1-08-consumption-advertising-je-desto
- **النطاق:** `b1-08-consumption-advertising-je-desto`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b1-08-consumption-advertising-je-desto (B1.8) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 17 بطاقة مفردات و10 أسئلة (6 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة إعلان، استماع اختياري، مقارنة، قواعد، كتابة وجهر»).

### U38-b1-09-travel-transport-environment
- **النطاق:** `b1-09-travel-transport-environment`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b1-09-travel-transport-environment (B1.9) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 16 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، استماع اختياري، تخطيط رحلة، قواعد، كتابة وجهر»).

### U39-b1-10-media-news-formal-communication
- **النطاق:** `b1-10-media-news-formal-communication`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b1-10-media-news-formal-communication (B1.10) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 16 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة رسالة، استماع اختياري، قواعد، تواصل رسمي، كتابة وجهر»).

### U40-b1-11-history-politics-passive-past
- **النطاق:** `b1-11-history-politics-passive-past`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b1-11-history-politics-passive-past (B1.11) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 16 بطاقة مفردات و10 أسئلة (0 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة خطّ زمني، استماع اختياري، قواعد، مفردات مدنية، كتابة وجهر»).

### U41-b1-12-innovation-research-future
- **النطاق:** `b1-12-innovation-research-future`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b1-12-innovation-research-future (B1.12) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 16 بطاقة مفردات و10 أسئلة (1 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، استماع اختياري، قواعد، مفردات البحث، كتابة وجهر»).

### U42-b2-01-time-management-habits-reading
- **النطاق:** `b2-01-time-management-habits-reading`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b2-01-time-management-habits-reading (B2.1) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 14 بطاقة مفردات و10 أسئلة (3 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة مركّزة، استماع اختياري، قواعد، تنظيم المهام، كتابة وجهر»).

### U43-b2-02-career-formal-communication-konjunktiv1
- **النطاق:** `b2-02-career-formal-communication-konjunktiv1`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b2-02-career-formal-communication-konjunktiv1 (B2.2) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 15 بطاقة مفردات و10 أسئلة (2 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (1 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة محضر مهني، استماع، قواعد الكلام المنقول، عرض خبرة، كتابة مهنية وإحاطة شفهية (الصوت المسجّل اختياري، والجهر مطلوب في P02 فقط بينما P01 كتابة فقط دون شريك أو تسجيل)»).

### U44-b2-03-consumption-environment-passive-modal
- **النطاق:** `b2-03-consumption-environment-passive-modal`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b2-03-consumption-environment-passive-modal (B2.3) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 15 بطاقة مفردات و10 أسئلة (5 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، استماع، قواعد المبني للمجهول مع الأفعال الناقصة، تحليل خيارات استهلاك، كتابة وعرض شفهي (الصوت المسجّل اختياري، والجهر مطلوب في P02 فقط بينما P01 كتابة فقط دون شريك أو تسجيل)»).

### U45-b2-04-cities-housing-participles
- **النطاق:** `b2-04-cities-housing-participles`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b2-04-cities-housing-participles (B2.4) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 15 بطاقة مفردات و10 أسئلة (5 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة وصفية، استماع، قواعد الصفات المشتقة من اسمي الفاعل والمفعول، وصف مبنى أو حيّ، كتابة وعرض شفهي (الصوت المسجّل اختياري، والجهر مطلوب في P02 فقط بينما P01 كتابة فقط دون شريك أو تسجيل)»).

### U46-b2-05-health-fitness-medical-information
- **النطاق:** `b2-05-health-fitness-medical-information`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b2-05-health-fitness-medical-information (B2.5) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 16 بطاقة مفردات و10 أسئلة (7 بعلامات تنسيق مضمّنة و0 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة تقرير، استماع، قواعد السبب والنتيجة، تقييم معلومة صحية خيالية، كتابة وعرض شفهي (الصوت المسجّل اختياري، والجهر مطلوب في P02 فقط بينما P01 كتابة فقط دون شريك أو تسجيل)»).

### U47-b2-06-study-applications-verb-noun-phrases
- **النطاق:** `b2-06-study-applications-verb-noun-phrases`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b2-06-study-applications-verb-noun-phrases (B2.6) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 14 بطاقة مفردات و10 أسئلة (7 بعلامات تنسيق مضمّنة و7 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة إرشادات، استماع، كتابة رسمية، قواعد، تخطيط دراسة»).

### U48-b2-07-travel-experiences-prepositional-relatives
- **النطاق:** `b2-07-travel-experiences-prepositional-relatives`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b2-07-travel-experiences-prepositional-relatives (B2.7) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 15 بطاقة مفردات و10 أسئلة (6 بعلامات تنسيق مضمّنة و8 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (0 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة رحلة، استماع، قواعد، وصف وجهة، كتابة»).

### U49-b2-08-food-nutrition-data-passives
- **النطاق:** `b2-08-food-nutrition-data-passives`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b2-08-food-nutrition-data-passives (B2.8) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 16 بطاقة مفردات و10 أسئلة (7 بعلامات تنسيق مضمّنة و10 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (2 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة جدول، استماع، قواعد، مفردات غذائية، وصف بيانات»).

### U50-b2-09-business-marketing-employment-prepositions
- **النطاق:** `b2-09-business-marketing-employment-prepositions`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b2-09-business-marketing-employment-prepositions (B2.9) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 15 بطاقة مفردات و10 أسئلة (7 بعلامات تنسيق مضمّنة و10 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (2 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة إعلان، استماع، قواعد، نقاش مهني، كتابة»).

### U51-b2-10-wishes-probabilities-technology-konjunktiv2-past
- **النطاق:** `b2-10-wishes-probabilities-technology-konjunktiv2-past`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b2-10-wishes-probabilities-technology-konjunktiv2-past (B2.10) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 15 بطاقة مفردات و10 أسئلة (6 بعلامات تنسيق مضمّنة و10 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (2 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة، استماع، قواعد، مناقشة تقنية، كتابة افتراض»).

### U52-b2-11-humans-nature-environment-nominalization
- **النطاق:** `b2-11-humans-nature-environment-nominalization`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b2-11-humans-nature-environment-nominalization (B2.11) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 16 بطاقة مفردات و10 أسئلة (5 بعلامات تنسيق مضمّنة و10 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (1 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة تقرير، استماع، قواعد، نقاش بيئي، كتابة»).

### U53-b2-12-leisure-media-reported-speech
- **النطاق:** `b2-12-leisure-media-reported-speech`
- **النوع:** `full_lesson_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S12, S13, S22`
- **النتيجة:** فُحص الدرس b2-12-leisure-media-reported-speech (B2.12) فحصًا شاملًا دون أخذ عينات عبر 3 أوضاع في axe-core (النظرة العامة مع فتح تفريغات الصوت + الاختبار + المهام العملية) عند عرضَي 1440×900 و390×844 (6 حالات شاشة بصفر مخالفات وصفر فحوص غير حاسمة) وعند عرضَي 320×900 و568×320 (6 حالات عرض ضيق بصفر تجاوز أفقي)، مع التحقق في DOM الحي من 16 بطاقة مفردات و10 أسئلة (3 بعلامات تنسيق مضمّنة و10 تفسيرات منسّقة عبر formatInlineMarkdown) و2 مهام أداء (2 بعلامات تنسيق مضمّنة) ومطابقة جميع الأعمدة الـ29 في curriculum-file-audit.csv (المهارات: «قراءة مراجعة إعلامية، استماع، قواعد، تمييز الرأي، كتابة وعرض شفهي»).

### U54-a0-a1-gate
- **النطاق:** `a0-a1-gate`
- **النوع:** `full_gate_verification_and_browser_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S14, S15`
- **النتيجة:** فُحصت بوابة الانتقال a0-a1-gate (الإصدار a0-gate-v2) فحصًا شاملًا في المتصفح عبر شاشات الاختبار (10 أسئلة و30 خيارًا و10 تفسيرات) والمهام العملية (3 مهام) عند عرضَي 1440×900 و390×844 وعرضَي 320×900 و568×320، مع التحقق من قفل نص الاستماع DL-A0-GATE-AUD-LST-01 قبل المحاولة الأولى وظهوره بسمة lang="de" بعد الفتح.

### U55-a0-01-overview
- **النطاق:** `content/A0/lesson-01-overview.md`
- **النوع:** `overview_and_matrix_sync`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S08, S13, S18`
- **النتيجة:** تُتحقق أداة verify_course.py آليًا من تطابق نظرة المستوى التمهيدي content/A0/lesson-01-overview.md مع جميع معرّفات وإصدارات دروس A0 الخمسة وبوابة الانتقال (a0-01-v2..a0-05-v2 وa0-gate-v2) ومن تحديث مصفوفة الإنتاج إلى الإصدار 1.6.

### U56-level-A0-page
- **النطاق:** `level:A0`
- **النوع:** `level_view_heading_and_a11y_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S18`
- **النتيجة:** أُضيف ترويس المستوى <h2>دروس المستوى A0</h2> داخل renderLevelPage() في app.js لضمان تسلسل عناوين سليم (h1 → h2 → h3) وفُحصت صفحة المستوى A0 في حالتَي القفل والفتح الكامل عبر axe-core وعرضَي 320×900 و568×320 بصفر مخالفات.

### U57-level-A1-page
- **النطاق:** `level:A1`
- **النوع:** `level_view_heading_and_a11y_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S18`
- **النتيجة:** أُضيف ترويس المستوى <h2>دروس المستوى A1</h2> داخل renderLevelPage() في app.js وفُحصت صفحة المستوى A1 بدروسها الـ12 عبر axe-core وعرضَي 320×900 و568×320 بصفر مخالفات.

### U58-level-A2-page
- **النطاق:** `level:A2`
- **النوع:** `level_view_heading_and_a11y_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S18`
- **النتيجة:** أُضيف ترويس المستوى <h2>دروس المستوى A2</h2> داخل renderLevelPage() في app.js وفُحصت صفحة المستوى A2 بدروسها الـ12 عبر axe-core وعرضَي 320×900 و568×320 بصفر مخالفات.

### U59-level-B1-page
- **النطاق:** `level:B1`
- **النوع:** `level_view_heading_and_a11y_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S18`
- **النتيجة:** أُضيف ترويس المستوى <h2>دروس المستوى B1</h2> داخل renderLevelPage() في app.js وفُحصت صفحة المستوى B1 بدروسها الـ12 عبر axe-core وعرضَي 320×900 و568×320 بصفر مخالفات.

### U60-level-B2-page
- **النطاق:** `level:B2`
- **النوع:** `level_view_heading_and_a11y_audit`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S18`
- **النتيجة:** أُضيف ترويس المستوى <h2>دروس المستوى B2</h2> داخل renderLevelPage() في app.js وفُحصت صفحة المستوى B2 بدروسها الـ12 عبر axe-core وعرضَي 320×900 و568×320 بصفر مخالفات.

### U61-format-inline-markdown-assessments
- **النطاق:** `app.js:formatInlineMarkdown`
- **النوع:** `assessment_inline_markdown_rendering`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S10, S11, S12`
- **النتيجة:** أُضيفت دالة formatInlineMarkdown(value) في app.js لتحويل علامات **...** و`...` في 137 نص سؤال تقييم (147 عبارة <strong lang="de"> وعبارة <strong> واحدة) و65 تفسير إجابة (258 عبارة <strong lang="de">) و12 نص مهمة أداء (38 عبارة <strong lang="de"> وعبارة <code dir="ltr" lang="de">T06</code> في DL-B2-02-P02) بحيث أصبحت علامات Markdown الخام في DOM الحي صفرًا عبر جميع الأسئلة الـ540 والتفسيرات الـ540 والمهام الـ109.

### U62-narrow-viewport-vocab-grid-fix
- **النطاق:** `styles.css:.vocab-grid/.vocab-card/.german-word`
- **النوع:** `narrow_layout_overflow_fix`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S19`
- **النتيجة:** عُولج التجاوز الأفقي (-24.4px) الذي كشفه الفحص الشامل لعرض 320×900 في بطاقات مفردات الدرس a2-09-products-technology-complaints بتحويل .vocab-grid في @media (max-width: 680px) من 1fr إلى minmax(0, 1fr) وإضافة min-width: 0; overflow-wrap: anywhere لـ.vocab-card و.german-word.

### U63-landmarks-and-headings-best-practice
- **النطاق:** `app.js:landmarks-and-headings`
- **النوع:** `wcag_best_practice_hierarchy_and_landmarks`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11`
- **النتيجة:** ضُبطت عناوين شاشة المهام العملية (<h1>طبّق ما تعلمته</h1> و<h2>معايير التحقق المحلي</h2>) وتفرّد أسماء معالم الجداول (جدول الدرس 1..N) ولوحات الصوت (التسجيلات الصوتية — ...) وقائمة التنقل في الجوال (<div id="navigation-panel" role="dialog"> عند الفتح مقابل <aside> عند الإغلاق) لتحقيق صفر مخالفات في قواعد best-practice إلى جانب WCAG 2.1 A/AA.

### U64-curriculum-file-audit-full-29-columns
- **النطاق:** `data/curriculum-file-audit.csv`
- **النوع:** `full_catalog_column_sync`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S13, S16, S20, S22`
- **النتيجة:** زُومنت جميع قيم declared_skills الـ41 في data/curriculum-file-audit.csv مع سطر **المهارات:** في ملفات Markdown، ووُسّع verify_course.py ليتحقق آليًا من تطابق جميع الأعمدة الـ29 في جميع الصفوف الـ53 (1,537 خلية).

### U65-production-task-catalog-full-15-columns
- **النطاق:** `data/production-task-catalog.csv`
- **النوع:** `full_catalog_column_sync`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S16, S17, S21`
- **النتيجة:** وُحّدت صيغة source_heading لصفوف A0.1 الاثني عشر (DL-A0-01-Q01..Q10 وDL-A0-01-P01..P02) في data/production-task-catalog.csv لتطابق صيغة quiz[i] — ID وperformanceTasks[i] — ID المعتمدة في جميع صفوف التقييم الـ639، مع التحقق الآلي من جميع الأعمدة الـ15 في الصفوف الـ1,080 (16,200 خلية).

### U66-audio-asset-register-full-23-columns
- **النطاق:** `data/audio-asset-register.csv`
- **النوع:** `full_catalog_column_sync`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S14, S16, S20`
- **النتيجة:** وُسّع verify_course.py ليتحقق آليًا من مطابقة جميع الأصول الصوتية الـ217 (474 مقطعًا؛ 137 ready و80 معلقة للمراجعة السمعية) بين data/audio-asset-register.csv وdata/audio-playlists.json وdata/course.json وملفات الدروس عبر المستويات A0–B2.

### U67-full-project-axe-core-349-states
- **النطاق:** `tools/test_accessibility_audit.cjs`
- **النوع:** `exhaustive_browser_accessibility_suite`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S11, S15`
- **النتيجة:** رُقّي tools/test_accessibility_audit.cjs من فحص عينة دروس إلى فحص شامل يغطي 349 حالة شاشة كاملة (174 عند 1440×900 و175 عند 390×844 عبر جميع الدروس الـ53 وبوابة A0 والمستويات الـ5 والواجهة) بصفر مخالفات (wcag2a, wcag2aa, wcag21a, wcag21aa, best-practice) وصفر فحوص غير حاسمة، مع فحص DOM الحي لجميع الأسئلة الـ540 والخيارات الـ1,622 والتفسيرات الـ540 والمهام العملية الـ109.

### U68-full-project-narrow-layout-348-states-and-browser-dom
- **النطاق:** `tools/test_narrow_layout.cjs + tools/test_browser.cjs`
- **النوع:** `exhaustive_browser_layout_and_dom_suite`
- **الحالة:** `reviewed_synced`
- **المراجع:** `S09, S10, S15, S19`
- **النتيجة:** رُقّي tools/test_narrow_layout.cjs ليفحص 348 حالة عرض ضيق شاملة (174 في 320×900 عمودي و174 في 568×320 أفقي عبر جميع الدروس الـ53 وبوابة A0 والمستويات الـ5) بصفر تجاوز أفقي، ووُسّع tools/test_browser.cjs ليتحقق في DOM الحي عبر جميع الدروس الـ53 وبوابة A0 من عرض 754 بطاقة مفردات و474 سطر تفريغ صوتي بسمة lang="de" و96 جدولًا (273 رأس th و2,938 خلية td).
