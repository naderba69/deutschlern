# مراجعة CR30 — A2.12: الثقافة وترتيب الأحداث

رُوجع **A2.12 — العطلات والمهرجانات والثقافة: bevor وnachdem** في **102 وحدة و31 بندًا أو مطلبًا داخل التمارين**، مع **10 مراجع مقروءة كاملة**. أُصلح خطأ Q10 الذي كان يعكس معنى bevor: في أمثلة الدرس يقع حدث الرئيسية قبل حدث التابعة. تغير نص الخيار الصحيح وحده مع حفظ فهرسه والخيارات29 الأخرى وعتبة80%. قُيدت Perfekt مع nachdem بالخطة/الرئيسية المضارعة وشرح الاكتمال النسبي، وحُسم ترتيبT02 المبهم وفُصلت أوقات البرامج الثلاثة. **P01/T08 خمس جمل لخطة مع الجهر ومكان ووقت معًا**؛ **P02/T07ب ثلاث صيغ كتابية لخط زمني ثابت دون جهر**، بنموذجين ومعايير متطابقة. Q02→T04 وQ10→T07. الإصدار `a2-12-v2` والمخزن `v77`. أربعة أصول/10 مقاطع محفوظة دون توليد أو استماع أو اعتماد جديد. **الحملة29/53 درسًا والبوابة منفصلة؛ تبقى24، والتالي CR31/B1.1.** تشمل المراجعة النصية الآن دروس A2 الاثني عشر؛ هذا لا يعني دمج العمل أو شهادة مستوى أو اكتمال المشروع.

## الملفات والرفع والخطوة التالية

- المصدر والتقييم: `content/A2/lesson-12-holidays-festivals-culture.md/.assessment.json`؛ الحزمة `data/course.json`؛20 صفًا في `data/production-task-catalog.csv` وأربعة صفوف مرجعية فقط في `data/audio-asset-register.csv`.
- `service-worker.js` واختباراه؛ `tools/test_progression.cjs` و`tools/test_accessibility_audit.cjs`؛ الحارس الجديد `tools/test_a2_12_review.py`. اختبارfilechooser لم يتغير.
- السجلان `data/reviews/a2-12-review.json/.md` وفهرس المراجعات وREADME وPROGRESS وخطة التحسين2.36 وتقرير المتصفح وملفا التسليم. لا تعديلplaylist أوMP3 أوapp.js أوCSS أوpackage/lock.
- رُفع التنفيذ **`265d0a8054b478ed4f06bdb8da948330f374c378`** إلى الفرع الوحيد `arena/01a1036f-deutschlern`، وتطابقHEAD معorigin. مجموعة السجل والفحوص بعنوان `Record CR30 granular A2.12 review and cumulative checks` تُرفع فور فحصها؛ معرفها فيgit log ثم يوثق إيصالها.
- لا تبديل فرع أو دمج PR#1 أو ادعاء اكتمال المشروع. حالة PR وVercel تثبت باستعلام التسليم؛ لا تنسب نجاحًا قديمًا لأحدثcommit. رفعGitHub مستقل عن النشر، ولا إعادة نشر متكررة أو ترقية مدفوعة بسبب حدود الخدمة.
- في بداية الدور قورنت710 ملفات بخط الأساس بعدfetch بصفر اختلاف أو إضافات، ثم استعيدتmetadata بـreset --mixed دون فقد عمل. لا تكرر الاستعادة أو التنظيف دون مقارنة جديدة.
- **التالي CR31/B1.1 — الحياة اليومية والهوايات والتجارب: als وwenn:** اقرأ مصدر `content/B1/lesson-01-daily-life-hobbies-experiences.md` وتقييمه وأصوله كاملة، وراجع الحدث المنفرد والعادة المتكررة وكل نص وتمرين وبديل ومعيار بالمراجع. احفظ Lina00/Karim03، والمفردات والنماذج والقراءة02 والاستماع03؛ لا حاجة لإعادة A2.12 أو تسجيلاته.
- القرارات مستمرة: كل تعديل يُرفع فور فحص مجموعته؛ المحتوى والتقييم والتطبيق قبل الصوت؛ لا مراجع بشري شرطًا. لا إخفاء أو إعادة توليد أو تعيينready/نهائي بلا موافقة؛ حد10 طلبات صوت/رد. B1.9/B1.10 معلقان واختيار B1.11 محفوظ. احفظ A2.7 Q08→T05 وفحوص اتساق A2.9 والأصوات المقررة وتاريخ B2.6 دون إعادة تسميته B2.7.

## حدود المعنى والنصوص والصوت

- **bevor:** في `Wir essen, bevor das Konzert beginnt` الأكل أولًا ثم بداية الحفل؛ تقديم التابعة لا يجعل حدثها أسبق. **nachdem:** في `Nachdem wir gegessen haben, gehen wir zum Konzert` الأكل في التابعة أولًا ثم الذهاب. النمط المثبت المدروس لا يشمل كل استعمال منفي أو شرطي للرابطين.
- `nachdem + Perfekt` هنا مع خطة أو رئيسية مضارعة، لا قاعدة لكل الأزمنة؛ الاكتمال نسبي للحدث اللاحق وقد يكون داخل خطة مستقبلية. مثال الماضي الأسبق للمقارنة فقط لا مطلب تقييم إضافي.
- الحوار السبت بلقاء الخامسة وحفل السابعة؛ القراءة الأحد بافتتاح14 وحفل17؛ الاستماع السبت فيLinden بزيارة معرض الرابعة. لا نخلط البرامج أو نضيف ساعة نهاية أو ألعاب نارية محددة. erst am Abend تعني لا يعودون إلا مساءً.
- إمكان زيارة السوق ليس إثبات الزيارة؛ مجانية الدخول لا تثبت مجانية الطعام أو النقل. مثال شراء التذاكر في القاعدة مستقل عن برامج الدخول المجاني. Linden اسم مكان في مثال خيالي لا فعالية حقيقية موثقة.
- **لم يُجرَ استماع أو توليد أو اعتماد صوتي جديد.** الأصول الأربعة ومقاطعها العشرة محفوظة؛ أمثلةbevor المسجلة سليمة في ترتيبها، والخطأ المصحح كان في التقييم. قيدا A2.8/A2.9 السابقان لم يُصلحا في التسجيلات، وبقي توضيحهما المكتوب.
- مهمتان خياليتان بلا رحلة أو حجز أو بيانات سفر أو شريك أو تسجيل؛ الجهر فيP01 فقط. الإقرار والحد الحرفي لا يصححان اللغة أو النطق.

## الفحوص وحدودها — CR30

- **PASS:البناء والتحقق**؛ الحزمة **1,997,818 بايت** والمخزن **v77**. بقيت53 درسًا و428 عنوان تمرين و55 عنوان حوار وفق نمط العداد و754 مفردة؛530 سؤال درس+10 للبوابة و109 مهمات أداء و1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending. أصول A2 الإجمالية54/120 مقطعًا محفوظة؛ ليست هذه الأعداد اعتمادًا صوتيًا جديدًا.
- **PASS:30 حارس مراجعة تراكميًا** تشمل A0.1–5 والبوابة وA1.1–12 وA2.1–12. حارس A2.12 يطابق102 وحدة و31 بندًا و30 بديلًا وستة معايير، والبصمات والكتالوج والنموذجين. داخل PHR22 جزءًا:18 مفردة/صيغة وأربع جمل قواعد، لا22 ملفًا.
- **PASS:خمس مجموعات Node:** progression/service_worker/session_persistence/study_time/daily_plan؛ وصياغة app.js وservice-worker.js وكل tools/test_*.cjs وgit diff --check.
- **PASS:خمس مجموعات متصفح:** browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**؛ حزم package-lock القائمة دون تغييرها، و@sparticuz/chromium143.0.4 ومكتبات al2023 خارجGit. التشغيل آلي صامت، لا استماع أو جهاز فعلي.
- الاختبار العام عند1440×900 و390×844: تنقل وRTL والتفريغات وتشغيلMP3 بسرعتي1 و0.8 وإيقافه عند التنقل، والعمل دون اتصال ونطاقات البايت. لا ضمان بقاء كل التسجيلات مخزنة دائمًا أو اختبار سمعي مستقل لكل أصل.
- تحديث عامل الخدمة من fixture الإصدارv42 إلىv77 دون إعادة تحميل قسرية، مع حفظ الإجابات والتقدم وعزل المخازن وتوضيح فقد صوت غير مخزن بـ503 وإعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل ترحيل تاريخي.
- **progression:** سجل A2.12 القديمv1 محفوظ لكنه لا يمنح إتقانv2 أو يفتحB1.1؛ مسودةv1 مرفوضة. تُقبل النسخة الجديدة مع الدرجة والدليل المطلوبين. P01 يتطلب إقرار الجهر؛ P02 كتابة فقط دون خانة جهر. النموذجان242/179 حرفًا يمران بحدي200/150؛ الإجابة القصيرة أو الإقرارات الناقصة لا تمر. هذا ضبط للدليل المحلي لا تصحيح لغة أو نطق.
- **axe-core4.11.0:**133 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة، مع **90 ظهورًا لفحوص غير حاسمة تشمل204 ظهورًا لعقد**. غير الحاسم ليس مخالفة مؤكدة ولا نجاحًا شاملًا أو شهادةWCAG؛ لا مراجع بشري شرطًا للاستمرار.
- **النماذج:**نجح التشغيل المتسلسل الأول عند1440 و390؛ حفظ وإعادة تحميل وتصدير واستيراد ومسودات، دون إعادة هذا الدور أو تعديل الاختبار. **تذبذبfilechooser الموثق فيCR29 لم يُصلح سببه؛ نجاح هذه المحاولة لا يثبت الإصلاح.**
- **العرض الضيق:**PASS؛126 حالة،63 عند320×900 و63 عند568×320، مع كل الدروس والتفريغات والجداول. viewport ليس تكبير نظام أو هاتفًا فعليًا.
- **الحفظ مقابل `10c1f8727d41c309112e159fb4588b421a0d1958`:**52 درسًا آخر و1060 صف كتالوج آخر و115 ملفًا محميًا لم تتغير، بما فيها المصادر الأخرى والبوابة وapp.js وCSS وpackage/lock وأداتاbuild/verify. تغير20 صفًا تخص A2.12 فقط في الكتالوج. بقيت كتلة فحوص الاتساق الصوتي السابقة من A2.9 فصاعدًا حرفيًا؛ أضيفت اختبارات الإصدار قبلها دون إضعافها.
- playlist مطابق بايتًا ببايت؛474 ملفMP3 طابقت بصماتGit السابقة. تغيرت4 صفوف تخص A2.12 في audio-register في source_line/source_heading فقط، وبقيت213 صفًا أخرى. Laila02/Omar03، وNarrator02 للمفردات والقراءة، وErzählperson03 للاستماع محفوظة بالكلمات والمسارات والحالات.
- **تغيير الخيار مقصود وموثق:**29 خيارًا ثابتة؛ نص Q10 عند الفهرس1 صُحح من جعل التابعة أسبق إلى جعل الرئيسية أسبق معbevor. جميع فهارس المفاتيح ثابتة، ولا نقل للخطأ إلى التسجيل الصحيح. المراجع لا تمنح شهادةCEFR مستقلة أو تثبت برنامج مهرجان حقيقي. لا واجهة بعيدة أو نشرProduction اختُبرا.

## منهج العد والمراجعة

102 وحدة تغطي المصدر والتقييم والأصول؛ البنود31 داخل التمارين ليست31 تمرينًا. T07 ربطان وثلاث جمل إنتاج، وT08 خمسة مطالب للجمل؛ T05 خمسة أحكام بعد إضافة الألعاب النارية. لكل بديل ومعيار وبند نتيجة مستقلة أدناه. قُرئت10 صفحات كاملة، دون صفحة معطلة أو جزء لم يُقرأ.

## المراجع التي قُرئت — 2026-10-08

- **ADV — [Lingolia — Adverbialsätze](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/adverbialsaetze)**: bevor وnachdem روابط زمنية؛ المثال يضع شراء الهدية قبل الزيارة، ولا تُدرس كل أنواع التوابع هنا. قراءة كاملة؛ الجزء0 من1.
- **SUB — [Lingolia — Nebensätze](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze)**: فاصلة التابعة والفعل المصرف الأخير؛ التابعة المقدمة تشغل الموقع الأول ثم فعل الرئيسية. لا يعتمد وصف um … zu بالنتيجة الوارد خارج نطاق هذا الدرس. قراءة كاملة؛ الجزء0 من1.
- **PERF — [Lingolia — Perfekt](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt)**: المساعد المصرف مع Partizip II، وPerfekt قد يدل على اكتمال بحلول وقت مستقبلي؛ لا يلزم أنه وقع قبل لحظة الكلام. besuchen مع بادئةbe بلاge. قراءة كاملة؛ الجزء0 من1.
- **BEFORE — [Duden — bevor](https://www.duden.de/rechtschreibung/bevor)**: التابعة الزمنية المثبتة تصف الحدث اللاحق لحدث الرئيسية؛ المرجع يسمي ذلك Nachzeitigkeit. لا نوسع الدرس إلى النفي المركب أو الاستعمالات الشرطية. قراءة كاملة؛ الجزء0 من1.
- **AFTER — [Duden — nachdem](https://www.duden.de/rechtschreibung/nachdem)**: Vorzeitigkeit للحدث في التابعة؛ مثال gegessen hatte قبل legte في الماضي. لا نساوي بعدما مع منذ، ولا نحول الاستعمال السببي الإقليمي إلى قاعدة هذا الدرس. قراءة كاملة؛ الجزء0 من1.
- **JOIN — [Duden — teilnehmen](https://www.duden.de/rechtschreibung/teilnehmen)**: nimmt teil/hat teilgenommen، ومع أمثلةan einem/an einer بالداتيف؛ فعل مع حرف جر لا اختبار Wo/Wohin مكاني. قراءة كاملة؛ الجزء0 من1.
- **SEPARATE — [Lingolia — Trennbare Verben](https://deutsch.lingolia.com/de/grammatik/verben/trennbare)**: الفصل في الرئيسية البسيطة لا كل بنية؛ an- منفصلة وbe- غير منفصلة. يدعم التفريق بين fängt an وanfängt وبناء besucht. قراءة كاملة؛ الجزء0 من1.
- **MODAL — [Lingolia — Modalverben](https://deutsch.lingolia.com/de/grammatik/verben/modalverben)**: möchte/können مع مصدر؛ الإرادة والإمكان لا يثبتان تنفيذ الزيارة أو الأكل. لا تعميم حذفzu لكل مصدر خارج الفعل الناقص. قراءة كاملة؛ الجزء0 من1.
- **ENTRY — [Duden — Eintritt](https://www.duden.de/rechtschreibung/Eintritt)**: الدخول أو رسم الدخول، والجمع Eintritte؛ المجانية تخص ما قيل عنه مجانيًا ولا تثبت مجانية الطعام أو النقل. قراءة كاملة؛ الجزء0 من1.
- **LINK — [Lingolia — Konjunktionen und Konjunktionaladverbien](https://deutsch.lingolia.com/de/grammatik/satzbau/konjunktionen)**: bevor/nachdem تدخلان التابعة، بينما danach عند تصدير الرئيسية يليها المصرف؛ ليس ترتيبًا واحدًا لكل الروابط. قراءة كاملة؛ الجزء0 من1.

## سجل الوحدات الفردية

### scope-01

**النص:**

> # A2.12 — العطلات والمهرجانات والثقافة

**نتيجة المراجعة:** عنوان ثقافة وبرنامج، لا فعالية حقيقية تحتاج حجزًا أو إثبات موقع.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER.

### scope-02

**النص:**

> **المدة:** نحو 40 دقيقة (تقدير مرن؛ يمكن تقسيم الدرس) · **المهارات:** قراءة، تخطيط، قواعد، كتابة، كلام، واستماع اختياري

**نتيجة المراجعة:** أضيف الكلام والاستماع الاختياري، والمدة مرنة؛ لا ادعاء أن كل متعلم ينجز كل عنصر في 40 دقيقة.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER.

### scope-03

**النص:**

> **الهدف:** أستطيع أن أفهم برنامج مناسبة ثقافية، وأصف ترتيب أنشطتها باستخدام **bevor** و**nachdem**.

**نتيجة المراجعة:** فهم البرنامج وتسلسل نشاطاته هدف تدعمه مهمتا تخطيط وتحويل مختلفتان.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER.

### scope-04

**النص:**

> نستخدم **bevor** بمعنى «قبل أن» و**nachdem** بمعنى «بعد أن». في أمثلة الترتيب الزمني المثبتة هنا، يحدث فعل الرئيسية **قبل** فعل التابعة مع bevor، و**بعده** مع nachdem. ترتيب الجمل على الصفحة لا يغير ترتيب الأحداث. يأتي الفعل المصرف آخر التابعة، ونضع فاصلة بينها وبين الرئيسية:

**نتيجة المراجعة:** صُرح بالاتجاه الصحيح: الرئيسية قبل التابعة مع bevor، وبعدها مع nachdem؛ ترتيب عرض الجمل غير الزمن.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER.

### scope-05

**النص:**

> نتدرب هنا على خطة أو برنامج بصيغة المضارع في الرئيسية، ومع **nachdem** نستعمل **Perfekt** لحدث يكتمل قبل الحدث الرئيسي: **nachdem + الفاعل + بقية الجملة + Partizip II + haben/sein المصرف**. هذا اكتمال نسبي داخل الخطة، لا دليل أن الحدث وقع فعلًا قبل لحظة الكلام. ليست Perfekt قاعدة لكل استعمال nachdem؛ في سرد ماضٍ مثلًا: **Nachdem wir gegessen hatten, gingen wir zum Konzert.** هذه مقارنة فقط وليست مطلوبًا في التقييم. كذلك bevor لا تعني المستقبل دائمًا؛ المضارع يكفي للخطة هنا: **Bevor das Fest beginnt, kaufen wir Eintrittskarten.**

**نتيجة المراجعة:** قُيد Perfekt بخطة/رئيسية مضارعة، وذُكر الاكتمال النسبي والماضي الأسبق للمقارنة فقط؛ لا قاعدة مطلقة أو حدث محقق قبل الكلام.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER.

### scope-06

**النص:**

> النموذجان مكتوبان وغير مسجلين. الأول خطة خيالية تستعمل مفردات الدرس، والثاني تحويل لخط زمني ثابت لا مهمة تخطيط مكررة. لا يستبدلان التسجيلات ولا يجمعان ساعات النصوص المختلفة، ولا يثبتان تنفيذ رحلة أو تصحيح لغة أو نطق آلي.

**نتيجة المراجعة:** النموذجان خياليان وغير مسجلين، ولا يبدلان الأصول أو يجمعان ساعات البرامج أو يثبتان تنفيذ رحلة.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER.

### vocab-01

**النص:**

> | das Kulturfest | die Kulturfeste | المهرجان الثقافي |

**نتيجة المراجعة:** Kulturfest محايد وجمعه Kulturfeste؛ مهرجان ثقافي بلا نسبة لعادات شعب محدد.

### vocab-02

**النص:**

> | die Tradition | die Traditionen | التقليد |

**نتيجة المراجعة:** Tradition مؤنث وجمعها Traditionen؛ تقليد دون تصويره إلزاميًا لكل فرد.

### vocab-03

**النص:**

> | der Brauch | die Bräuche | العادة/التقليد الاجتماعي |

**نتيجة المراجعة:** Brauch مذكر وجمعه Bräuche؛ عادة اجتماعية لا قاعدة قانونية.

### vocab-04

**النص:**

> | die Ausstellung | die Ausstellungen | المعرض |

**نتيجة المراجعة:** Ausstellung مؤنث وجمعها Ausstellungen؛ معرض، لا تذكرة أو ألعاب نارية.

### vocab-05

**النص:**

> | die Parade | die Paraden | الاستعراض/الموكب |

**نتيجة المراجعة:** Parade مؤنث وجمعها Paraden؛ موكب/استعراض، ليست فعالية مؤكدة في كل نص.

### vocab-06

**النص:**

> | die Eintrittskarte | die Eintrittskarten | تذكرة دخول |

**نتيجة المراجعة:** Eintrittskarte مؤنث وجمعها Eintrittskarten؛ تذكرة دخول غير رسم الدخول نفسه.

### vocab-07

**النص:**

> | das Konzert | die Konzerte | الحفل الموسيقي |

**نتيجة المراجعة:** Konzert محايد وجمعه Konzerte؛ حفل موسيقي، لا مثال للوقت أو العنوان الحقيقي.

### vocab-08

**النص:**

> | die Bühne | die Bühnen | المنصة/المسرح |

**نتيجة المراجعة:** Bühne مؤنث وجمعها Bühnen؛ منصة أداء، لا الألعاب النارية في السماء.

### vocab-09

**النص:**

> | der Eintritt | die Eintritte (مفرد في هذا السياق) | الدخول / رسم الدخول |

**نتيجة المراجعة:** أضيف الجمع Eintritte بدل الشرطة التي قد توحي بعدم وجود جمع؛ مفرد الدخول/الرسم هو المستعمل في النص.

**المراجع ذات الصلة:** ENTRY.

### vocab-10

**النص:**

> | die Veranstaltung | die Veranstaltungen | الفعالية |

**نتيجة المراجعة:** Veranstaltung مؤنث وجمعها Veranstaltungen؛ فعالية منظمة، لا مكان المبيت Unterkunft.

### vocab-11

**النص:**

> | das Feuerwerk | die Feuerwerke | الألعاب النارية |

**نتيجة المراجعة:** Feuerwerk محايد وجمعه Feuerwerke؛ عرض ألعاب نارية، والنص لا يطلب إطلاقها أو يحدد ساعة.

### vocab-12

**النص:**

> | stattfinden | findet statt | يُقام |

**نتيجة المراجعة:** stattfinden مصدر منفصل؛ findet statt صيغة مفرد، ولا تُنسخ مع فاعل جمع.

**المراجع ذات الصلة:** SEPARATE.

### vocab-13

**النص:**

> | teilnehmen an | nimmt teil | يشارك في |

**نتيجة المراجعة:** teilnehmen an مصدر مرتبط بحرف جر؛ nimmt teil مفرد، و nehmen … teil مع Viele Familien.

**المراجع ذات الصلة:** JOIN.

### vocab-14

**النص:**

> | gemeinsam | — | معًا |

**نتيجة المراجعة:** gemeinsam معًا، لا يلزم منه عدد أشخاص محدد أو وحدة جنسية.

### vocab-15

**النص:**

> | kostenlos | — | مجاني |

**نتيجة المراجعة:** kostenlos مجاني بالنسبة لما يوصف، لا استنتاج مجانية كل النفقات.

**المراجع ذات الصلة:** ENTRY.

### vocab-16

**النص:**

> | feiern | — | يحتفل |

**نتيجة المراجعة:** feiern مصدر بمعنى يحتفل، لا خبر عن مناسبة تمت خارج المثال.

### grammar-01

**النص:**

> Bevor das Konzert beginnt, treffen wir uns am Eingang.

**نتيجة المراجعة:** اللقاء عند المدخل قبل بداية الحفل: حدث الرئيسية أسبق ولو كانت التابعة مكتوبة أولًا؛ treffen بعد الفاصلة.

**المراجع ذات الصلة:** SUB, PERF, BEFORE, AFTER, MODAL.

### grammar-02

**النص:**

> Wir treffen uns am Eingang, bevor das Konzert beginnt.

**نتيجة المراجعة:** الترتيب الزمني نفسه مع تأخير التابعة؛ beginnt ما زالت في آخرها ولا يتغير المعنى بسبب موضعها.

**المراجع ذات الصلة:** SUB, PERF, BEFORE, AFTER, MODAL.

### grammar-03

**النص:**

> Nachdem wir das Konzert gehört haben, können wir auf dem Markt etwas essen.

**نتيجة المراجعة:** الاستماع يكتمل قبل إمكان الأكل في الخطة؛ gehört haben آخر التابعة ثم können wir، ولا إثبات أكل أو حضور وقع فعلًا.

**المراجع ذات الصلة:** SUB, PERF, BEFORE, AFTER, MODAL.

### grammar-04

**النص:**

> Bevor das Fest beginnt, kaufen wir Eintrittskarten.

**نتيجة المراجعة:** شراء التذاكر يسبق بداية المهرجان؛ مثال مستقل لا يناقض الدخول المجاني في برنامج آخر، والمضارع يعبر عن خطة.

**المراجع ذات الصلة:** SUB, PERF, BEFORE, AFTER, MODAL.

### helper-01

**النص:**

> - **من يحدث أولًا؟** **Wir essen, bevor das Konzert beginnt.** نأكل أولًا ثم يبدأ الحفل؛ يبدأ الحفل في التابعة لكنه ليس الحدث الأول. **Nachdem wir gegessen haben, gehen wir zum Konzert.** الأكل في التابعة أولًا ثم الذهاب في الرئيسية. تقديم التابعة أو تأخيرها لا يقلب المعنى، ولا يعني «بعد» أن الحدث التالي يبدأ فورًا.

**نتيجة المراجعة:** يفصل ترتيب الحدث من موقع الجملة، ويصحح الانقلاب القديم في Q10؛ لا يفترض وقوع التالي فورًا.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER, SEPARATE, JOIN, MODAL, LINK, ENTRY.

### helper-02

**النص:**

> - **الفاصلة والمصرف:** **Bevor das Konzert beginnt, treffen wir uns am Eingang.** التابعة تشغل الموقع الأول كاملًا؛ بعدها treffen ثم wir، لا wir treffen في هذا النمط. **Wir treffen uns am Eingang, bevor das Konzert beginnt.** تبقى beginnt في آخر التابعة عند تأخيرها أيضًا.

**نتيجة المراجعة:** يبين الفاصلة والمصرف في التابعة والموقع الأول للجملة كلها؛ تقديم التابعة لا يبقي wir قبل treffen.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER, SEPARATE, JOIN, MODAL, LINK, ENTRY.

### helper-03

**النص:**

> - **أشكال تحتاجها:** hören → gehört، besuchen → besucht دون ge لأن be- غير منفصلة، essen → gegessen. مع wir أوdie Gäste نقول **gehört haben / besucht haben / gegessen haben**؛ haben هو الفعل المصرف الأخير. لا نحذف المساعد ولا نكرر Partizip بدلًا منه. المساعد ليس haben مع كل فعل؛ احفظ الصيغة المناسبة للفعل، مثل **angekommen sind** مع wir.

**نتيجة المراجعة:** يعطي gehört/besucht/gegessen مع haben، ويذكر مثال sein دون تعميم المساعد أو مطالبة بإنتاج أزمنة متقدمة.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER, SEPARATE, JOIN, MODAL, LINK, ENTRY.

### helper-04

**النص:**

> - **الأفعال المنفصلة:** **Das Fest findet statt. Viele Familien nehmen teil. Das Konzert fängt an.** في التابعة يبقى الفعل المصرف متصلًا: **bevor das Konzert anfängt**. لا نفصل an عنfängt في هذا الموضع. **teilnehmen an + Dativ:** **an einer Veranstaltung teilnehmen** و**an der Veranstaltung**، لا نطبق اختبار Wo/Wohin على هذا الارتباط بالفعل.

**نتيجة المراجعة:** الفصل في الرئيسية مقابل anfängt في التابعة؛ an der Veranstaltung ارتباط بالفعل في الداتيف لا وجهة مكانية.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER, SEPARATE, JOIN, MODAL, LINK, ENTRY.

### helper-05

**النص:**

> - **المصدر والمبني للمجهول:** **möchte ich die Ausstellung besuchen** و**können wir etwas essen** فيهما مصدر أخير دون zu. **Um 14 Uhr wird eine Ausstellung eröffnet.** افتتاح بصيغة المبني للمجهول الحاضر؛ لا تعنيwird وحدها المستقبل. يمكنك قراءة هذه الصيغة لفهم البرنامج دون إنتاج مبني للمجهول في مهمتك.

**نتيجة المراجعة:** مصدر بلا zu مع الفعل الناقص، و wird eröffnet مبني للمجهول لا مستقبل لمجرد wird؛ قراءة البنية لا إنتاجها إلزاميًا.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER, SEPARATE, JOIN, MODAL, LINK, ENTRY.

### helper-06

**النص:**

> - **bevor / nachdem / danach:** الأولان يدخلان جملة تابعة؛ **Danach hören wir ein Konzert.** جملة رئيسية تبدأ بـ«بعد ذلك»، ثم الفعل hören. **nach dem Konzert** عبارة بحرف جر واسم، لا جملة تابعة كاملة ولا كتابة أخرى لكلمةnachdem.

**نتيجة المراجعة:** Danach يبدأ رئيسية بينما nachdem يدخل تابعة؛ nach dem Konzert جار ومجرور لا كلمة nachdem مقسومة اعتباطيًا.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER, SEPARATE, JOIN, MODAL, LINK, ENTRY.

### helper-07

**النص:**

> - **ثلاثة برامج مستقلة:** الحوار عن السبت، لقاء الساعة الخامسة وحفل الساعة السابعة؛ القراءة عن الأحد، افتتاح المعرض14 وحفل17؛ الاستماع عن السبت في Linden وزيارة معرض الساعة الرابعة ثم الحفل والأصدقاء. لا ننقل ساعة أو يومًا من برنامج إلى آخر، ولا نضيف صباحًا/مساءً إلى ساعة منطوقة بلا قيد صريح. الأرقام14 و17 صريحة بنظام24 ساعة في القراءة.

**نتيجة المراجعة:** ثلاثة برامج منفصلة؛ لا تحويل الساعة المنطوقة إلى صباح/مساء دون دليل ولا خلط الأحد بالسبت.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER, SEPARATE, JOIN, MODAL, LINK, ENTRY.

### helper-08

**النص:**

> - **المجانية والاحتمال:** **Der Eintritt ist kostenlos.** الدخول مجاني في النص، وليس الطعام أو النقل مجانيين تلقائيًا. **alle Veranstaltungen sind kostenlos** قول Laila عن برنامج الحوار، لا حكم على كل مهرجان. **können … besuchen/essen** إمكان أو اقتراح، لا إثبات زيارة أو أكل حدث فعلًا. مثال شراء التذاكر في القاعدة مستقل عن برامج الدخول المجاني.

**نتيجة المراجعة:** تقييد المجانية والإمكان بما يقول النص؛ لا مجانية طعام أو نقل أو زيارة منفذة مستنتجة.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER, SEPARATE, JOIN, MODAL, LINK, ENTRY.

### helper-09

**النص:**

> - **تفاصيل الفهم:** Linden اسم مكان داخل مثال خيالي، لا عنوان فعالية حقيقية موثق. **zu Hause** في البيت و**nach Hause** إلى البيت؛ **erst am Abend** لا يعودون إلى البيت إلا مساءً، ولا تحدد ساعة العودة. في القراءة ألعاب نارية بعد الحفل بلا ساعة محددة؛ وفي الاستماع يلتقون الأصدقاء في السوق لا عند مدخل الحفل.

**نتيجة المراجعة:** Linden اسم المثال، و erst قيد العودة مساءً لا ساعة؛ موضع لقاء الأصدقاء السوق في الاستماع لا مدخل الحوار.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER, SEPARATE, JOIN, MODAL, LINK, ENTRY.

### helper-10

**النص:**

> - **طريقة العمل والخصوصية:** P01 خمس جمل لخطة خيالية مع مكان ووقت ونشاطين على الأقل ثم الجهر؛ P02 ثلاث صياغات كتابية لخط زمني معطى دون جهر. لا رحلة فعلية أو حجز أو بيانات سفر أو شريك أو تسجيل. حاول الاستماع قبل التفريغ؛ قراءته لا تثبت فهمًا مسموعًا مستقلًا، والطول والإقرار لا يصححان اللغة أو النطق.

**نتيجة المراجعة:** خمسة أقوال جهرية مقابل ثلاث صيغ كتابية؛ الخيال والخصوصية وحدود التفريغ والإقرار معلنة.

**المراجع ذات الصلة:** ADV, SUB, PERF, BEFORE, AFTER, SEPARATE, JOIN, MODAL, LINK, ENTRY.

### dialogue-01

**النص:**

> Gehst du am Samstag zum Kulturfest?

**نتيجة المراجعة:** Laila تسأل عن الذهاب السبت إلى مهرجان؛ لا الأحد الخاص بالقراءة.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, MODAL, ENTRY.

### dialogue-02

**النص:**

> Ja, gern. Wann beginnt das Konzert?

**نتيجة المراجعة:** Omar يوافق ويسأل متى يبدأ الحفل، لا متى ينتهي.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, MODAL, ENTRY.

### dialogue-03

**النص:**

> Um sieben Uhr. Bevor das Konzert beginnt, möchte ich die Ausstellung besuchen.

**نتيجة المراجعة:** الحفل عند السابعة، و Laila ترغب بزيارة المعرض قبله؛ لا وقت افتتاح معرض محدد في الحوار أو وقوع زيارة فعلًا.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, MODAL, ENTRY.

### dialogue-04

**النص:**

> Gute Idee. Treffen wir uns um fünf Uhr am Eingang?

**نتيجة المراجعة:** Omar يقترح اللقاء الخامسة عند المدخل؛ ليس موعد المعرض أو موعد الحفل.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, MODAL, ENTRY.

### dialogue-05

**النص:**

> Ja. Nachdem wir das Konzert gehört haben, können wir auf dem Markt etwas essen.

**نتيجة المراجعة:** توافق Laila على اللقاء، ثم تقترح إمكان الأكل بعد الاستماع؛ nachdem يجعل الاستماع سابقًا للأكل ولا يثبت تنفيذ أي منهما.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, MODAL, ENTRY.

### dialogue-06

**النص:**

> Schön! Ist der Eintritt kostenlos?

**نتيجة المراجعة:** سؤال هل الدخول مجاني؛ ليس سؤالًا عن الطعام أو النقل.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, MODAL, ENTRY.

### dialogue-07

**النص:**

> Ja, alle Veranstaltungen sind kostenlos.

**نتيجة المراجعة:** تقول إن كل فعاليات برنامج الحوار مجانية؛ لا حكم على كل مهرجانات العالم أو مشتريات السوق.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, MODAL, ENTRY.

### reading-01

**النص:**

> Am Sonntag findet in der Stadt ein Kulturfest statt.

**نتيجة المراجعة:** مهرجان في المدينة الأحد؛ findet … statt منفصلة مع مفرد Kulturfest.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, JOIN, MODAL, ENTRY.

### reading-02

**النص:**

> Um 14 Uhr wird eine Ausstellung eröffnet.

**نتيجة المراجعة:** افتتاح المعرض عند 14 بصيغة wird eröffnet؛ لا 17 التي تخص الحفل.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, JOIN, MODAL, ENTRY.

### reading-03

**النص:**

> Bevor die Musik auf der Bühne beginnt, können die Besucher den Markt besuchen.

**نتيجة المراجعة:** إمكان زيارة السوق قبل الموسيقى؛ الرئيسية أسبق زمنيًا، والإمكان ليس إثبات زيارة كل شخص.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, JOIN, MODAL, ENTRY.

### reading-04

**النص:**

> Um 17 Uhr gibt eine Musikgruppe ein Konzert.

**نتيجة المراجعة:** فرقة تقدم حفلًا عند 17؛ لا وقت نهاية أو نوع الموسيقى أو مدة.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, JOIN, MODAL, ENTRY.

### reading-05

**النص:**

> Nachdem die Besucher das Konzert gehört haben, gibt es ein Feuerwerk.

**نتيجة المراجعة:** ألعاب نارية بعد الاستماع إلى الحفل؛ لا ساعة محددة أو دلالة فورًا أو إغلاق السوق.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, JOIN, MODAL, ENTRY.

### reading-06

**النص:**

> Viele Familien nehmen an der Veranstaltung teil.

**نتيجة المراجعة:** عائلات كثيرة تشارك؛ nehmen an … teil مع جمع وداتيف der Veranstaltung، وليس كل العائلات.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, JOIN, MODAL, ENTRY.

### reading-07

**النص:**

> Der Eintritt ist kostenlos.

**نتيجة المراجعة:** الدخول مجاني؛ لا يثبت مجانية الوجبات أو النقل.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, JOIN, MODAL, ENTRY.

### reading-question-01

**النص:**

> An welchem Tag findet das Kulturfest statt?

**نتيجة المراجعة:** Am Sonntag؛ لا تأخذ السبت من الحوار أو الاستماع.

**المراجع ذات الصلة:** BEFORE, AFTER, ENTRY.

### reading-question-02

**النص:**

> Wann wird die Ausstellung eröffnet?

**نتيجة المراجعة:** Um14 Uhr؛ الافتتاح لا الحفل 17.

**المراجع ذات الصلة:** BEFORE, AFTER, ENTRY.

### reading-question-03

**النص:**

> Was können die Besucher machen, bevor die Musik beginnt?

**نتيجة المراجعة:** Sie können den Markt besuchen؛ يحفظ إمكان الزيارة ووقتها قبل الموسيقى.

**المراجع ذات الصلة:** BEFORE, AFTER, ENTRY.

### reading-question-04

**النص:**

> Was gibt es, nachdem die Besucher das Konzert gehört haben?

**نتيجة المراجعة:** Ein Feuerwerk؛ بعد الحفل ولا ساعة محددة.

**المراجع ذات الصلة:** BEFORE, AFTER, ENTRY.

### reading-question-05

**النص:**

> Ist der Eintritt kostenlos?

**نتيجة المراجعة:** Ja؛ الدخول مجاني فقط بحسب القراءة.

**المراجع ذات الصلة:** BEFORE, AFTER, ENTRY.

### listening-01

**النص:**

> Am Samstag machen wir einen Ausflug zum Kulturfest in Linden.

**نتيجة المراجعة:** رحلة السبت إلى Kulturfest in Linden؛ نص خيالي لا موقع فعالية موثق ولا اسم/جنس لكل أفراد wir.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, LINK.

### listening-02

**النص:**

> Bevor wir zum Fest gehen, essen wir zu Hause.

**نتيجة المراجعة:** الأكل في البيت قبل الذهاب؛ الرئيسية حدثها أولًا رغم أن التابعة تبدأ الجملة.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, LINK.

### listening-03

**النص:**

> Um vier Uhr besuchen wir eine Ausstellung.

**نتيجة المراجعة:** زيارة معرض عند الرابعة؛ لا تحويل آلي إلى 16 أو نقل 14 من القراءة.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, LINK.

### listening-04

**النص:**

> Danach hören wir ein Konzert.

**نتيجة المراجعة:** بعد ذلك يستمعون إلى حفل؛ Danach ظرف رابط ورئيسية لا تابع بنهاية الفعل.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, LINK.

### listening-05

**النص:**

> Nachdem wir das Konzert gehört haben, treffen wir unsere Freunde auf dem Markt.

**نتيجة المراجعة:** بعد الاستماع يلتقون أصدقاءهم في السوق؛ لا يتناولون الطعام هناك كما يقترح الحوار.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, LINK.

### listening-06

**النص:**

> Wir fahren erst am Abend nach Hause.

**نتيجة المراجعة:** العودة ليست قبل المساء؛ erst am Abend لا تحدد ساعة ولا تؤكد أن رحلة حقيقية وقعت.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, LINK.

### listening-question-01

**النص:**

> Wohin machen die Personen einen Ausflug?

**نتيجة المراجعة:** Zum Kulturfest in Linden؛ الوجهة المذكورة لا عنوان حقيقي مفروض على المتعلم.

**المراجع ذات الصلة:** BEFORE, AFTER, LINK.

### listening-question-02

**النص:**

> Was machen sie, bevor sie zum Fest gehen?

**نتيجة المراجعة:** Sie essen zu Hause؛ قبل الذهاب وليس بعده.

**المراجع ذات الصلة:** BEFORE, AFTER, LINK.

### listening-question-03

**النص:**

> Wann besuchen sie die Ausstellung?

**نتيجة المراجعة:** Um vier Uhr؛ زمن زيارة المعرض في الاستماع.

**المراجع ذات الصلة:** BEFORE, AFTER, LINK.

### listening-question-04

**النص:**

> Wo treffen sie ihre Freunde, nachdem sie das Konzert gehört haben?

**نتيجة المراجعة:** Auf dem Markt؛ بعد سماع الحفل، لا المدخل.

**المراجع ذات الصلة:** BEFORE, AFTER, LINK.

### listening-question-05

**النص:**

> Wann fahren sie nach Hause?

**نتيجة المراجعة:** Erst am Abend؛ حُفظ القيد في المفتاح، لا ساعة محددة أو عودة فورية بعد الحفل.

**المراجع ذات الصلة:** BEFORE, AFTER, LINK.

### speaking-model-01

**النص:**

> Am Samstag besuchen wir ein Kulturfest in Linden.

**نتيجة المراجعة:** الجملة 1 تعطي السبت ومكانًا مسمى Linden في خطة خيالية مستقلة.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

### speaking-model-02

**النص:**

> Um vier Uhr besuchen wir eine Ausstellung.

**نتيجة المراجعة:** الجملة 2 تعطي نشاط المعرض ووقت الرابعة؛ ليس نقل افتتاح 14 من القراءة.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

### speaking-model-03

**النص:**

> Bevor das Konzert beginnt, treffen wir uns am Eingang.

**نتيجة المراجعة:** الجملة 3 لقاء عند المدخل قبل بداية الحفل؛ beginnt أخيرًا ثم treffen wir بعد الفاصلة.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

### speaking-model-04

**النص:**

> Nachdem wir das Konzert gehört haben, essen wir auf dem Markt.

**نتيجة المراجعة:** الجملة 4 أكل في السوق بعد اكتمال الاستماع؛ gehört haben قبل الفاصلة ثم essen wir، دون فرض فورية الأكل.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

### speaking-model-05

**النص:**

> Am Abend fahren wir nach Hause.

**نتيجة المراجعة:** الجملة 5 عودة إلى البيت مساءً؛ خمس جمل لا خمسة مقاطع صوتية، ووقت ومكان معًا.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

### writing-model-01

**النص:**

> Wir essen zu Hause, bevor wir zum Konzert gehen.

**نتيجة المراجعة:** الجملة 1 تصف الأكل أولًا قبل الذهاب؛ Hauptsatz أول زمنيًا و bevor في الوسط.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

### writing-model-02

**النص:**

> Nachdem wir gegessen haben, gehen wir zum Konzert.

**نتيجة المراجعة:** الجملة 2 تحفظ ترتيب الأكل ثم الذهاب بصيغة nachdem؛ gegessen haben في النهاية ثم gehen wir.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

### writing-model-03

**النص:**

> Nachdem wir das Konzert gehört haben, treffen wir unsere Freunde auf dem Markt.

**نتيجة المراجعة:** الجملة 3 تجعل الاستماع سابقًا للقاء الأصدقاء في السوق؛ gehört haben قبل الفاصلة، لا نقل نشاط السوق إلى قبل الحفل.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

### card-01

**النص:**

> - **Bevor das Fest beginnt, …** → قبل أن يبدأ المهرجان…

**نتيجة المراجعة:** جزء تابع مع حذف باقي الجملة؛ ليس جملة كاملة مستقلة، ويأتي الحدث الرئيسي قبل بداية المهرجان في النمط المثبت.

**المراجع ذات الصلة:** BEFORE, AFTER, PERF, ENTRY, JOIN.

### card-02

**النص:**

> - **Nachdem wir gegessen haben, …** → بعد أن تناولنا الطعام…

**نتيجة المراجعة:** جزء تابع يدل على اكتمال الأكل بالنسبة للرئيسية التالية؛ لا يشترط أنه وقع قبل لحظة الكلام.

**المراجع ذات الصلة:** BEFORE, AFTER, PERF, ENTRY, JOIN.

### card-03

**النص:**

> - **Der Eintritt ist kostenlos.** → الدخول مجاني.

**نتيجة المراجعة:** مجانية الدخول لا مجانية كل النفقات.

**المراجع ذات الصلة:** BEFORE, AFTER, PERF, ENTRY, JOIN.

### card-04

**النص:**

> - **an einer Veranstaltung teilnehmen** → يشارك في فعالية.

**نتيجة المراجعة:** an einer Veranstaltung teilnehmen؛ حرف مرتبط بالفعل وداتيف مؤنث، لا استنتاج مكان أو وجهة.

**المراجع ذات الصلة:** BEFORE, AFTER, PERF, ENTRY, JOIN.

### DL-A2-12-T01

**النص:**

> 1. عرض لوحات أو صور في مكان عام: **die Ausstellung / der Eintritt**
> 2. فعالية فيها موسيقى مباشرة: **das Konzert / die Tradition**
> 3. شيء يُطلق في السماء للاحتفال: **das Feuerwerk / die Bühne**
> 4. حدث ثقافي منظم: **die Veranstaltung / die Unterkunft**

**نتيجة المراجعة:** أربعة أزواج معجمية مرتبطة بالمناسبة، دون ادعاء انحصار كل معنى في المثال.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, ENTRY.

**البنود:**

1. عرض لوحات أو صور في مكان عام: **die Ausstellung / der Eintritt**
   - معرض لوحات أو صور يناسب Ausstellung؛ Eintritt دخول أو رسم. الجواب: die Ausstellung.
2. فعالية فيها موسيقى مباشرة: **das Konzert / die Tradition**
   - Konzert حفل موسيقي؛ Tradition مفهوم تقليد لا اسم الحفل. الجواب: das Konzert.
3. شيء يُطلق في السماء للاحتفال: **das Feuerwerk / die Bühne**
   - Feuerwerk يناسب العرض السماوي في المثال؛ Bühne منصة لا ألعاب نارية. الجواب: das Feuerwerk.
4. حدث ثقافي منظم: **die Veranstaltung / die Unterkunft**
   - Veranstaltung فعالية؛ Unterkunft محل إقامة لا فعالية. الجواب: die Veranstaltung.

### DL-A2-12-T02

**النص:**

> الترتيب المطلوب في1: شراء المشروبات أولًا ثم بداية الحفل؛ وفي3: زيارة السوق أولًا ثم المعرض: اختر الرابط الذي يحفظ هذا الترتيب. في2 أكمل صيغة Perfekt من الفعلين المعطيين، لا رابطًا جديدًا.
> 
> 1. ______ das Konzert beginnt, kaufen wir Getränke.
> 2. Nachdem die Gäste das Konzert ______ ______, fahren sie nach Hause. (hören; haben)
> 3. Wir besuchen den Markt, ______ wir die Ausstellung sehen.

**نتيجة المراجعة:** عنوان التمرين صار يشمل الرابط وتصريف الفعل؛ ترتيب 1/3 صريح و 2 يطلب Perfekt، فلا يخلط نوع الفراغ.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, ENTRY.

**البنود:**

1. ______ das Konzert beginnt, kaufen wir Getränke.
   - شراء المشروبات قبل بداية الحفل وفق الترتيب المحدد؛ لا تخمين لخطة أخرى. الجواب: Bevor.
2. Nachdem die Gäste das Konzert ______ ______, fahren sie nach Hause. (hören; haben)
   - المطلوب صيغة فعل لا رابط: gehört haben مع فاعل جمع، والمساعد أخيرًا. الجواب: gehört haben.
3. Wir besuchen den Markt, ______ wir die Ausstellung sehen.
   - السوق أولًا ثم المعرض صريح في التعليمات؛ bevor يحفظه، بخلاف الفراغ القديم بلا ترتيب. الجواب: bevor.

### DL-A2-12-T03

**النص:**

> 1. Bevor die Musik ______, besuchen wir den Markt. (beginnen)
> 2. Nachdem wir die Ausstellung ______ ______, gehen wir zum Markt. (besuchen; haben)
> 3. Wir treffen unsere Freunde, bevor das Konzert ______. (anfangen)

**نتيجة المراجعة:** ثلاثة مصادر تحول إلى صيغ تابعة سليمة؛ خصوصًا besucht و anfängt.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, ENTRY.

**البنود:**

1. Bevor die Musik ______, besuchen wir den Markt. (beginnen)
   - beginnt مفرد مع die Musik وفي آخر التابعة. الجواب: beginnt.
2. Nachdem wir die Ausstellung ______ ______, gehen wir zum Markt. (besuchen; haben)
   - besucht بلا ge مع haben؛ زيارة المعرض تكتمل قبل الذهاب للسوق. الجواب: besucht haben.
3. Wir treffen unsere Freunde, bevor das Konzert ______. (anfangen)
   - anfängt متصل آخر التابعة مع das Konzert؛ لا نفصل an عن fängt هنا. الجواب: anfängt.

### DL-A2-12-T04

**النص:**

> ابدأ1 بـBevor و2 بـNachdem، واستعمل كل كتلة مرة وأضف الفاصلة والنقطة دون تغيير الصيغ.
> 
> 1. Bevor / beginnt / das Konzert / treffen wir uns am Eingang.
> 2. Nachdem / wir / gegessen haben / gehen / wir / zum Konzert.

**نتيجة المراجعة:** بدايات محددة وفاصلة ثم مصرف الرئيسية؛ يدعم Q02/Q04 مباشرة.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, ENTRY.

**البنود:**

1. Bevor / beginnt / das Konzert / treffen wir uns am Eingang.
   - Bevor تبدأ بحسب المطلوب، ثم das Konzert beginnt وفاصلة؛ treffen wir في الرئيسية مع اللقاء أولًا زمنيًا. الجواب: Bevor das Konzert beginnt, treffen wir uns am Eingang..
2. Nachdem / wir / gegessen haben / gehen / wir / zum Konzert.
   - Nachdem wir gegessen haben ثم فاصلة و gehen wir؛ أكل ثم ذهاب، والمساعد أخيرًا في التابعة. الجواب: Nachdem wir gegessen haben, gehen wir zum Konzert..

### DL-A2-12-T05

**النص:**

> حدّد صحيحًا أو خطأ:
> 
> 1. Das Kulturfest findet am Sonntag statt.
> 2. Die Ausstellung wird um 17 Uhr eröffnet.
> 3. Vor der Musik können Besucher den Markt besuchen.
> 4. Der Eintritt kostet Geld.
> 5. Nach dem Konzert gibt es ein Feuerwerk.

**نتيجة المراجعة:** خمسة أحكام بحسب برنامج الأحد؛ أضيفت الألعاب النارية دون موعد غير مذكور.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, ENTRY.

**البنود:**

1. Das Kulturfest findet am Sonntag statt.
   - الأحد في برنامج القراءة، لا السبت المذكور في النصين الآخرين. الجواب: صحيح.
2. Die Ausstellung wird um 17 Uhr eröffnet.
   - الافتتاح 14 لا 17؛ 17 وقت الحفل. الجواب: خطأ.
3. Vor der Musik können Besucher den Markt besuchen.
   - können den Markt besuchen قبل الموسيقى: إمكان صريح لا زيارة مؤكدة لكل زائر. الجواب: صحيح.
4. Der Eintritt kostet Geld.
   - النص يقول kostenlos؛ كلفة الدخول المالية تناقضه. الجواب: خطأ.
5. Nach dem Konzert gibt es ein Feuerwerk.
   - ألعاب نارية بعد الحفل؛ يدعم البند Q07 مباشرة بلا اختلاق ساعة. الجواب: صحيح.

### DL-A2-12-T06

**النص:**

> أكمل من البنك، واستعمل كل كلمة مرة: **Linden — essen — Ausstellung — Markt**.
> 
> 1. Die Personen fahren zum Kulturfest in ______.
> 2. Bevor sie zum Fest gehen, ______ sie zu Hause.
> 3. Um vier Uhr besuchen sie eine ______.
> 4. Nachdem sie das Konzert gehört haben, treffen sie ihre Freunde auf dem ______.

**نتيجة المراجعة:** أربعة فراغات وبنك واضح؛ لا اختبار جنس أو تفسير ساعات من برنامج آخر.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF, SEPARATE, ENTRY.

**البنود:**

1. Die Personen fahren zum Kulturfest in ______.
   - Linden اسم مكان المثال؛ ليس مدينة أخرى مستنتجة. الجواب: Linden.
2. Bevor sie zum Fest gehen, ______ sie zu Hause.
   - essen فعل الأكل قبل الذهاب، لا وقت الحفل. الجواب: essen.
3. Um vier Uhr besuchen sie eine ______.
   - Ausstellung زيارة المعرض عند الرابعة. الجواب: Ausstellung.
4. Nachdem sie das Konzert gehört haben, treffen sie ihre Freunde auf dem ______.
   - Markt مكان لقاء الأصدقاء بعد الحفل، لا المدخل. الجواب: Markt.

### DL-A2-12-T07

**النص:**

> **أ — ربط النشاطين:** أكمل بـ**bevor** أو **nachdem**، وبـgehört haben حيث يلزم. حافظ على الترتيب المعطى:
> 
> 1. Wir essen zu Hause. Danach gehen wir zum Fest. → Wir essen zu Hause, ______ wir zum Fest gehen.
> 2. Wir hören das Konzert. Danach treffen wir Freunde. → ______ wir das Konzert ______ ______, treffen wir Freunde.
> 
> **ب — P02: كتابة فقط**
> 
> اكتب ثلاث جمل كاملة تحفظ الخط الزمني الخيالي: نأكل في البيت أولًا، ثم نذهب إلى الحفل ونستمع إليه، ثم نلتقي الأصدقاء في السوق. الجملة1 تبدأ بـWir essen zu Hause وتربط الذهاب بـbevor؛ الجملة2 تبدأ بـNachdem wir مع gegessen haben ثم gehen wir zum Konzert؛ الجملة3 تبدأ بـNachdem wir مع das Konzert gehört haben ثم treffen wir unsere Freunde auf dem Markt. استخدم المضارع في الرئيسية وPerfekt في تابعتي بعدما، مع الفواصل والنقاط. كتابة فقط، دون جهر أو رحلة فعلية أو تسجيل.

**نتيجة المراجعة:** بندان للربط وثلاث صيغ إنتاج كتابي لخط زمني ثابت؛ يدعم Q09/Q10 و P02، دون جهر خفي أو تخطيط مكرر.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**البنود:**

1. Wir essen zu Hause. Danach gehen wir zum Fest. → Wir essen zu Hause, ______ wir zum Fest gehen.
   - الأكل في البيت أولًا؛ bevor يجعل الذهاب في التابعة لاحقًا في النمط المعطى.
2. Wir hören das Konzert. Danach treffen wir Freunde. → ______ wir das Konzert ______ ______, treffen wir Freunde.
   - الاستماع أسبق ولقاء الأصدقاء بعده؛ Nachdem … gehört haben يحفظ الترتيب ويكمل المساعد.
3. P02، الجملة 1: Wir essen zu Hause, bevor wir zum Konzert gehen.
   - الجملة 1 تصف الأكل أولًا قبل الذهاب؛ Hauptsatz أول زمنيًا و bevor في الوسط.
4. P02، الجملة 2: Nachdem wir gegessen haben, gehen wir zum Konzert.
   - الجملة 2 تحفظ ترتيب الأكل ثم الذهاب بصيغة nachdem؛ gegessen haben في النهاية ثم gehen wir.
5. P02، الجملة 3: Nachdem wir das Konzert gehört haben, treffen wir unsere Freunde auf dem Markt.
   - الجملة 3 تجعل الاستماع سابقًا للقاء الأصدقاء في السوق؛ gehört haben قبل الفاصلة، لا نقل نشاط السوق إلى قبل الحفل.

### DL-A2-12-T08

**النص:**

> اكتب خمس جمل عن يوم ثقافي خيالي بضمير wir ثم اقرأ الخطة جهرًا: الجملة1 تسمي يومًا ومكان المهرجان؛ الجملة2 تذكر نشاطًا ووقتًا؛ الجملة3 تستعمل bevor لبيان لقاء عند المدخل قبل بداية الحفل؛ الجملة4 تبدأ بـNachdem مع gehört haben وتذكر الأكل في السوق بعد الاستماع إلى الحفل؛ الجملة5 تذكر العودة إلى البيت مساءً. احفظ ترتيب الخطة والفواصل ومواضع الأفعال؛ يلزم مكان ووقت معًا ونشاطان على الأقل، لا أحدهما فقط. لا رحلة أو حجز أو بيانات شخصية أو تسجيل مطلوب.

**نتيجة المراجعة:** خمس جمل ثم الجهر مع مكان ووقت معًا؛ أزيل تعارض «أو» في التقييم مع واو المصدر. النموذج 242 حرفًا فوق 200، ويستعمل bevor و nachdem بمعناهما الصحيح.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**البنود:**

1. الجملة 1: Am Samstag besuchen wir ein Kulturfest in Linden.
   - الجملة 1 تعطي السبت ومكانًا مسمى Linden في خطة خيالية مستقلة.
2. الجملة 2: Um vier Uhr besuchen wir eine Ausstellung.
   - الجملة 2 تعطي نشاط المعرض ووقت الرابعة؛ ليس نقل افتتاح 14 من القراءة.
3. الجملة 3: Bevor das Konzert beginnt, treffen wir uns am Eingang.
   - الجملة 3 لقاء عند المدخل قبل بداية الحفل؛ beginnt أخيرًا ثم treffen wir بعد الفاصلة.
4. الجملة 4: Nachdem wir das Konzert gehört haben, essen wir auf dem Markt.
   - الجملة 4 أكل في السوق بعد اكتمال الاستماع؛ gehört haben قبل الفاصلة ثم essen wir، دون فرض فورية الأكل.
5. الجملة 5: Am Abend fahren wir nach Hause.
   - الجملة 5 عودة إلى البيت مساءً؛ خمس جمل لا خمسة مقاطع صوتية، ووقت ومكان معًا.

### DL-A2-12-Q01

**النص:**

> ما معنى **die Ausstellung**؟

**نتيجة المراجعة:** Ausstellung تعني معرضًا.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**الجواب:** معرض.

**البدائل:**

1. معرض. — الصحيح
   - Ausstellung معرض.
2. تذكرة دخول. — غير المختار في هذا السؤال
   - Eintrittskarte تذكرة لا معرض.
3. ألعاب نارية. — غير المختار في هذا السؤال
   - Feuerwerk ألعاب نارية لا معرض.

### DL-A2-12-Q02

**النص:**

> ما معنى **Bevor das Konzert beginnt, treffen wir uns am Eingang**؟

**نتيجة المراجعة:** bevor تعني قبل أن.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**الجواب:** نلتقي عند المدخل قبل أن يبدأ الحفل.

**البدائل:**

1. نلتقي بعد أن ينتهي الحفل. — غير المختار في هذا السؤال
   - بعد النهاية عكس قبل البداية، ولا انتهاء للحفل مذكور في المثال.
2. نلتقي عند المدخل قبل أن يبدأ الحفل. — الصحيح
   - اللقاء عند المدخل قبل البداية مطابق.
3. نشتري الطعام أثناء الحفل. — غير المختار في هذا السؤال
   - لا شراء طعام أو «أثناء» في الجملة.

### DL-A2-12-Q03

**النص:**

> أكمل: Nachdem wir das Konzert gehört ___, können wir etwas essen.

**نتيجة المراجعة:** في جملة nachdem مع Perfekt يأتي الفعل المساعد haben في النهاية.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**الجواب:** haben

**البدائل:**

1. wir — غير المختار في هذا السؤال
   - wir ضمير وليس المساعد الناقص؛ الفاعل موجود بالفعل.
2. gehört — غير المختار في هذا السؤال
   - gehört موجود؛ تكراره لا يكمل Perfekt.
3. haben — الصحيح
   - haben المساعد المصرف مع wir في نهاية التابعة.

### DL-A2-12-Q04

**النص:**

> أي جملة صحيحة؟

**نتيجة المراجعة:** في النمط المعطى يكون haben هو المصرف الأخير في التابعة بعد gegessen؛ وبعد فاصلتها يأتي gehen ثم wir في الرئيسية.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**الجواب:** Nachdem wir gegessen haben, gehen wir zum Konzert.

**البدائل:**

1. Nachdem wir haben gegessen, gehen wir zum Konzert. — غير المختار في هذا السؤال
   - haben قبل gegessen لا يطابق ترتيب المساعد الأخير في هذه التابعة.
2. Nachdem wir gegessen haben, gehen wir zum Konzert. — الصحيح
   - gegessen haben ثم gehen wir؛ الترتيب أكل ثم ذهاب.
3. Nachdem gegessen wir haben, gehen wir zum Konzert. — غير المختار في هذا السؤال
   - gegessen قبل wir لا يطابق البنية المعطاة.

### DL-A2-12-Q05

**النص:**

> في أي يوم يقام مهرجان المدينة؟

**نتيجة المراجعة:** النص يقول Am Sonntag.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**الجواب:** يوم الأحد.

**البدائل:**

1. يوم الأحد. — الصحيح
   - الأحد صريح في القراءة.
2. يوم السبت. — غير المختار في هذا السؤال
   - السبت من الحوار أو الاستماع لا القراءة.
3. يوم الأربعاء. — غير المختار في هذا السؤال
   - الأربعاء غير مذكور.

### DL-A2-12-Q06

**النص:**

> متى يُفتتح المعرض؟

**نتيجة المراجعة:** يُفتتح المعرض عند 14 Uhr، أي الثانية بعد الظهر؛ 17 موعد الحفل في برنامج القراءة.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**الجواب:** الساعة 14.

**البدائل:**

1. الساعة 17. — غير المختار في هذا السؤال
   - 17 للحفل لا افتتاح المعرض.
2. الساعة 19. — غير المختار في هذا السؤال
   - 19 ليست ساعة افتتاح المعرض في القراءة.
3. الساعة 14. — الصحيح
   - 14 ساعة الافتتاح؛ صُححت العربية من «تبدأ المعرض» إلى «يُفتتح».

### DL-A2-12-Q07

**النص:**

> ماذا يحدث بعد أن يسمع الزوار الحفل؟

**نتيجة المراجعة:** بعد الحفل gibt es ein Feuerwerk.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**الجواب:** تقام ألعاب نارية.

**البدائل:**

1. يغلق السوق فورًا. — غير المختار في هذا السؤال
   - لا إغلاق فوري للسوق مذكور.
2. تقام ألعاب نارية. — الصحيح
   - ألعاب نارية بعد الحفل كما يقول النص.
3. تبدأ مباراة كرة قدم. — غير المختار في هذا السؤال
   - مباراة كرة قدم غير مذكورة.

### DL-A2-12-Q08

**النص:**

> في الجملة **Um vier Uhr besuchen sie eine Ausstellung**، متى يزورون المعرض؟

**نتيجة المراجعة:** الجملة تحدد الساعة الرابعة.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**الجواب:** في الرابعة.

**البدائل:**

1. في الرابعة. — الصحيح
   - vier الرابعة؛ المثال محول إلى sie من wir، ولا يصفه السؤال بأنه تفريغ حرفي.
2. في الثانية. — غير المختار في هذا السؤال
   - zwei الثانية لا vier.
3. في السابعة. — غير المختار في هذا السؤال
   - sieben السابعة لا vier.

### DL-A2-12-Q09

**النص:**

> في خطة للأكل أولًا ثم الذهاب إلى الحفل، أي جملة تحفظ هذا الترتيب بالنمط المدروس؟

**نتيجة المراجعة:** Nachdem wir gegessen haben, gehen wir zum Konzert. الأكل يكتمل قبل الذهاب في الخطة؛ نستعمل هنا Perfekt في التابعة مع رئيسية مضارعة، لا قاعدة لكل استعمال بعدما.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**الجواب:** Nachdem wir gegessen haben, gehen wir zum Konzert.

**البدائل:**

1. Bevor wir gegessen haben, gehen wir zum Konzert. — غير المختار في هذا السؤال
   - قد تكون بنية لغوية ممكنة، لكنها تجعل الذهاب قبل اكتمال الأكل، فتعكس الخطة المطلوبة.
2. Nachdem wir essen, gingen wir das Konzert. — غير المختار في هذا السؤال
   - خلط أزمنة وحذف حرف الجر قبل das Konzert؛ لا يطابق النمط المعطى أو الخطة.
3. Nachdem wir gegessen haben, gehen wir zum Konzert. — الصحيح
   - الأكل أولًا ثم الذهاب؛ تابع Perfekt مع رئيسية مضارعة في الخطة.

### DL-A2-12-Q10

**النص:**

> في استعمال bevor الزمني لترتيب حدثين في أمثلة الدرس، ما العلاقة الزمنية؟

**نتيجة المراجعة:** الرئيسية أولًا مع bevor: Wir essen zu Hause, bevor wir zum Fest gehen. نأكل أولًا ثم نذهب؛ لا تجعل بداية التابعة على الصفحة حدثها أسبق. مع nachdem تكون الأسبقية لحدث التابعة.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**الجواب:** أن النشاط في الجملة الرئيسية يقع قبل النشاط في الجملة التابعة.

**البدائل:**

1. أن النشاطين يحدثان في اللحظة نفسها دائمًا. — غير المختار في هذا السؤال
   - bevor لا يفرض تزامن النشاطين دائمًا.
2. أن النشاط في الجملة الرئيسية يقع قبل النشاط في الجملة التابعة. — الصحيح
   - صُححت الإجابة: نشاط الرئيسية قبل التابعة، لا العكس كما في v1.
3. أن الجملة تتحدث عن مكان فقط. — غير المختار في هذا السؤال
   - الرابط زمني ولا يحدد المكان وحده.

### DL-A2-12-P01

**النص:**

> اكتب خمس جمل عن يوم ثقافي خيالي بضمير wir ثم اقرأ الخطة جهرًا: الجملة1 تسمي يومًا ومكان المهرجان؛ الجملة2 تذكر نشاطًا ووقتًا؛ الجملة3 تستعمل bevor لبيان لقاء عند المدخل قبل بداية الحفل؛ الجملة4 تبدأ بـNachdem مع gehört haben وتذكر الأكل في السوق بعد الاستماع إلى الحفل؛ الجملة5 تذكر العودة إلى البيت مساءً. احفظ ترتيب الخطة والفواصل ومواضع الأفعال؛ يلزم مكان ووقت معًا ونشاطان على الأقل، لا أحدهما فقط. لا رحلة أو حجز أو بيانات شخصية أو تسجيل مطلوب.

**نتيجة المراجعة:** المصدر والمعايير والنموذج ونمط الدليل متطابقة؛ الحد الحرفي والإقرار ليسا تصحيحًا آليًا للغة أو النطق.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**المعايير:**

1. خمس جمل: يوم ومكان؛ نشاط ووقت؛ لقاء قبل بداية الحفل بـbevor؛ أكل بعد الاستماع بـnachdem؛ عودة مساءً. مكان ووقت معًا ونشاطان على الأقل؛ قرأت الخطة جهرًا.
   - خمس جمل بالمكونات المحددة: مكان ووقت معًا ونشاطان على الأقل؛ الجهر صريح في T08؛ نموذج 242 حرفًا فوق 200.
2. الخطة خيالية ومتسقة؛ اللقاء قبل بداية الحفل، والأكل بعد الاستماع إليه، والعودة مساءً؛ لا جمع لساعات البرامج المختلفة أو ادعاء تنفيذ رحلة.
   - اللقاء قبل الحفل ثم أكل بعده وعودة مساءً؛ لا اقتباس ساعات متعارضة أو ادعاء تنفيذ رحلة.
3. bevor وnachdem مع فاصلة وفعل مصرف أخير في التابعة؛ gehört haben في نهاية تابعة بعدما ثم فعل الرئيسية؛ الضمير wir محفوظ.
   - فاصلة ومصرف نهائي و gehört haben؛ الدور الزمني للروابط صحيح، والتطبيق لا يقيّم النحو آليًا.

**الدليل المحلي:** حد 200 حرفًا؛ الجهر مطلوب؛ لا تسجيل مطلوب.

### DL-A2-12-P02

**النص:**

> اكتب ثلاث جمل كاملة تحفظ الخط الزمني الخيالي: نأكل في البيت أولًا، ثم نذهب إلى الحفل ونستمع إليه، ثم نلتقي الأصدقاء في السوق. الجملة1 تبدأ بـWir essen zu Hause وتربط الذهاب بـbevor؛ الجملة2 تبدأ بـNachdem wir مع gegessen haben ثم gehen wir zum Konzert؛ الجملة3 تبدأ بـNachdem wir مع das Konzert gehört haben ثم treffen wir unsere Freunde auf dem Markt. استخدم المضارع في الرئيسية وPerfekt في تابعتي بعدما، مع الفواصل والنقاط. كتابة فقط، دون جهر أو رحلة فعلية أو تسجيل.

**نتيجة المراجعة:** المصدر والمعايير والنموذج ونمط الدليل متطابقة؛ الحد الحرفي والإقرار ليسا تصحيحًا آليًا للغة أو النطق.

**المراجع ذات الصلة:** BEFORE, AFTER, SUB, PERF.

**المعايير:**

1. ثلاث جمل مكتوبة بالنمط المطلوب: أكل قبل الذهاب؛ ذهاب بعد الأكل؛ لقاء أصدقاء بعد الاستماع، مع موضعي البيت والسوق. لا جهر مطلوب.
   - ثلاث صيغ لمعطيات T07 ب، ونموذج 179 حرفًا فوق 150؛ كتابة فقط دون جهر.
2. يحفظ الأكل ثم الذهاب والاستماع ثم لقاء الأصدقاء؛ تقديم التابعة لا يقلب الزمن ولا يعني أن الخطة نُفذت.
   - يحفظ الأكل ثم الذهاب والاستماع ثم الأصدقاء، ولا يستنتج أن ذلك حدث قبل الكلام.
3. المضارع في الرئيسية وgegessen/gehört haben في تابعتي nachdem، مع الفواصل والمصرف الأخير؛ bevor يضع حدث الرئيسية أولًا.
   - bevor: الرئيسية أسبق؛ بعدما: التابعة أسبق بـ Perfekt مع رئيسية مضارعة في الخطة. إقرار ذاتي لا شهادة لغة.

**الدليل المحلي:** حد 150 حرفًا؛ كتابة فقط دون جهر؛ لا تسجيل مطلوب.

### DL-A2-12-AUD-PHR-01

**النص:**

> Das Kulturfest. Die Tradition. Der Brauch. Die Ausstellung. Die Parade. Die Eintrittskarte. Das Konzert. Die Bühne. Der Eintritt. Die Veranstaltung. Das Feuerwerk. Stattfinden. Findet statt. Teilnehmen an. Nimmt teil. Gemeinsam. Kostenlos. Feiern. Bevor das Konzert beginnt, treffen wir uns am Eingang. Wir treffen uns am Eingang, bevor das Konzert beginnt. Nachdem wir das Konzert gehört haben, können wir auf dem Markt etwas essen. Bevor das Fest beginnt, kaufen wir Eintrittskarten.

**نتيجة المراجعة:** مطابقة نصية مع المصدر؛ الكلمات والأصوات والمسارات والحالة التاريخية محفوظة. لا استماع أو توليد أو اعتماد جديد. جمل bevor المسجلة صحيحة؛ الخلل الذي صُحح كان في خيار التقييم Q10 لا التسجيل.

**البنود:**

1. Das Kulturfest.
   - Kulturfest محايد وجمعه Kulturfeste؛ مهرجان ثقافي بلا نسبة لعادات شعب محدد.
2. Die Tradition.
   - Tradition مؤنث وجمعها Traditionen؛ تقليد دون تصويره إلزاميًا لكل فرد.
3. Der Brauch.
   - Brauch مذكر وجمعه Bräuche؛ عادة اجتماعية لا قاعدة قانونية.
4. Die Ausstellung.
   - Ausstellung مؤنث وجمعها Ausstellungen؛ معرض، لا تذكرة أو ألعاب نارية.
5. Die Parade.
   - Parade مؤنث وجمعها Paraden؛ موكب/استعراض، ليست فعالية مؤكدة في كل نص.
6. Die Eintrittskarte.
   - Eintrittskarte مؤنث وجمعها Eintrittskarten؛ تذكرة دخول غير رسم الدخول نفسه.
7. Das Konzert.
   - Konzert محايد وجمعه Konzerte؛ حفل موسيقي، لا مثال للوقت أو العنوان الحقيقي.
8. Die Bühne.
   - Bühne مؤنث وجمعها Bühnen؛ منصة أداء، لا الألعاب النارية في السماء.
9. Der Eintritt.
   - أضيف الجمع Eintritte بدل الشرطة التي قد توحي بعدم وجود جمع؛ مفرد الدخول/الرسم هو المستعمل في النص.
10. Die Veranstaltung.
   - Veranstaltung مؤنث وجمعها Veranstaltungen؛ فعالية منظمة، لا مكان المبيت Unterkunft.
11. Das Feuerwerk.
   - Feuerwerk محايد وجمعه Feuerwerke؛ عرض ألعاب نارية، والنص لا يطلب إطلاقها أو يحدد ساعة.
12. Stattfinden.
   - stattfinden مصدر منفصل؛ findet statt صيغة مفرد، ولا تُنسخ مع فاعل جمع.
13. Findet statt.
   - stattfinden مصدر منفصل؛ findet statt صيغة مفرد، ولا تُنسخ مع فاعل جمع.
14. Teilnehmen an.
   - teilnehmen an مصدر مرتبط بحرف جر؛ nimmt teil مفرد، و nehmen … teil مع Viele Familien.
15. Nimmt teil.
   - teilnehmen an مصدر مرتبط بحرف جر؛ nimmt teil مفرد، و nehmen … teil مع Viele Familien.
16. Gemeinsam.
   - gemeinsam معًا، لا يلزم منه عدد أشخاص محدد أو وحدة جنسية.
17. Kostenlos.
   - kostenlos مجاني بالنسبة لما يوصف، لا استنتاج مجانية كل النفقات.
18. Feiern.
   - feiern مصدر بمعنى يحتفل، لا خبر عن مناسبة تمت خارج المثال.
19. Bevor das Konzert beginnt, treffen wir uns am Eingang.
   - اللقاء عند المدخل قبل بداية الحفل: حدث الرئيسية أسبق ولو كانت التابعة مكتوبة أولًا؛ treffen بعد الفاصلة.
20. Wir treffen uns am Eingang, bevor das Konzert beginnt.
   - الترتيب الزمني نفسه مع تأخير التابعة؛ beginnt ما زالت في آخرها ولا يتغير المعنى بسبب موضعها.
21. Nachdem wir das Konzert gehört haben, können wir auf dem Markt etwas essen.
   - الاستماع يكتمل قبل إمكان الأكل في الخطة؛ gehört haben آخر التابعة ثم können wir، ولا إثبات أكل أو حضور وقع فعلًا.
22. Bevor das Fest beginnt, kaufen wir Eintrittskarten.
   - شراء التذاكر يسبق بداية المهرجان؛ مثال مستقل لا يناقض الدخول المجاني في برنامج آخر، والمضارع يعبر عن خطة.

### DL-A2-12-AUD-DLG-01

**النص:**

> Gehst du am Samstag zum Kulturfest? Ja, gern. Wann beginnt das Konzert? Um sieben Uhr. Bevor das Konzert beginnt, möchte ich die Ausstellung besuchen. Gute Idee. Treffen wir uns um fünf Uhr am Eingang? Ja. Nachdem wir das Konzert gehört haben, können wir auf dem Markt etwas essen. Schön! Ist der Eintritt kostenlos? Ja, alle Veranstaltungen sind kostenlos.

**نتيجة المراجعة:** مطابقة نصية مع المصدر؛ الكلمات والأصوات والمسارات والحالة التاريخية محفوظة. لا استماع أو توليد أو اعتماد جديد. جمل bevor المسجلة صحيحة؛ الخلل الذي صُحح كان في خيار التقييم Q10 لا التسجيل.

**البنود:**

1. Gehst du am Samstag zum Kulturfest?
   - Laila تسأل عن الذهاب السبت إلى مهرجان؛ لا الأحد الخاص بالقراءة.
2. Ja, gern. Wann beginnt das Konzert?
   - Omar يوافق ويسأل متى يبدأ الحفل، لا متى ينتهي.
3. Um sieben Uhr. Bevor das Konzert beginnt, möchte ich die Ausstellung besuchen.
   - الحفل عند السابعة، و Laila ترغب بزيارة المعرض قبله؛ لا وقت افتتاح معرض محدد في الحوار أو وقوع زيارة فعلًا.
4. Gute Idee. Treffen wir uns um fünf Uhr am Eingang?
   - Omar يقترح اللقاء الخامسة عند المدخل؛ ليس موعد المعرض أو موعد الحفل.
5. Ja. Nachdem wir das Konzert gehört haben, können wir auf dem Markt etwas essen.
   - توافق Laila على اللقاء، ثم تقترح إمكان الأكل بعد الاستماع؛ nachdem يجعل الاستماع سابقًا للأكل ولا يثبت تنفيذ أي منهما.
6. Schön! Ist der Eintritt kostenlos?
   - سؤال هل الدخول مجاني؛ ليس سؤالًا عن الطعام أو النقل.
7. Ja, alle Veranstaltungen sind kostenlos.
   - تقول إن كل فعاليات برنامج الحوار مجانية؛ لا حكم على كل مهرجانات العالم أو مشتريات السوق.

### DL-A2-12-AUD-READ-01

**النص:**

> Am Sonntag findet in der Stadt ein Kulturfest statt. Um 14 Uhr wird eine Ausstellung eröffnet. Bevor die Musik auf der Bühne beginnt, können die Besucher den Markt besuchen. Um 17 Uhr gibt eine Musikgruppe ein Konzert. Nachdem die Besucher das Konzert gehört haben, gibt es ein Feuerwerk. Viele Familien nehmen an der Veranstaltung teil. Der Eintritt ist kostenlos.

**نتيجة المراجعة:** مطابقة نصية مع المصدر؛ الكلمات والأصوات والمسارات والحالة التاريخية محفوظة. لا استماع أو توليد أو اعتماد جديد. جمل bevor المسجلة صحيحة؛ الخلل الذي صُحح كان في خيار التقييم Q10 لا التسجيل.

**البنود:**

1. Am Sonntag findet in der Stadt ein Kulturfest statt.
   - مهرجان في المدينة الأحد؛ findet … statt منفصلة مع مفرد Kulturfest.
2. Um 14 Uhr wird eine Ausstellung eröffnet.
   - افتتاح المعرض عند 14 بصيغة wird eröffnet؛ لا 17 التي تخص الحفل.
3. Bevor die Musik auf der Bühne beginnt, können die Besucher den Markt besuchen.
   - إمكان زيارة السوق قبل الموسيقى؛ الرئيسية أسبق زمنيًا، والإمكان ليس إثبات زيارة كل شخص.
4. Um 17 Uhr gibt eine Musikgruppe ein Konzert.
   - فرقة تقدم حفلًا عند 17؛ لا وقت نهاية أو نوع الموسيقى أو مدة.
5. Nachdem die Besucher das Konzert gehört haben, gibt es ein Feuerwerk.
   - ألعاب نارية بعد الاستماع إلى الحفل؛ لا ساعة محددة أو دلالة فورًا أو إغلاق السوق.
6. Viele Familien nehmen an der Veranstaltung teil.
   - عائلات كثيرة تشارك؛ nehmen an … teil مع جمع وداتيف der Veranstaltung، وليس كل العائلات.
7. Der Eintritt ist kostenlos.
   - الدخول مجاني؛ لا يثبت مجانية الوجبات أو النقل.

### DL-A2-12-AUD-LST-01

**النص:**

> Am Samstag machen wir einen Ausflug zum Kulturfest in Linden. Bevor wir zum Fest gehen, essen wir zu Hause. Um vier Uhr besuchen wir eine Ausstellung. Danach hören wir ein Konzert. Nachdem wir das Konzert gehört haben, treffen wir unsere Freunde auf dem Markt. Wir fahren erst am Abend nach Hause.

**نتيجة المراجعة:** مطابقة نصية مع المصدر؛ الكلمات والأصوات والمسارات والحالة التاريخية محفوظة. لا استماع أو توليد أو اعتماد جديد. جمل bevor المسجلة صحيحة؛ الخلل الذي صُحح كان في خيار التقييم Q10 لا التسجيل.

**البنود:**

1. Am Samstag machen wir einen Ausflug zum Kulturfest in Linden.
   - رحلة السبت إلى Kulturfest in Linden؛ نص خيالي لا موقع فعالية موثق ولا اسم/جنس لكل أفراد wir.
2. Bevor wir zum Fest gehen, essen wir zu Hause.
   - الأكل في البيت قبل الذهاب؛ الرئيسية حدثها أولًا رغم أن التابعة تبدأ الجملة.
3. Um vier Uhr besuchen wir eine Ausstellung.
   - زيارة معرض عند الرابعة؛ لا تحويل آلي إلى 16 أو نقل 14 من القراءة.
4. Danach hören wir ein Konzert.
   - بعد ذلك يستمعون إلى حفل؛ Danach ظرف رابط ورئيسية لا تابع بنهاية الفعل.
5. Nachdem wir das Konzert gehört haben, treffen wir unsere Freunde auf dem Markt.
   - بعد الاستماع يلتقون أصدقاءهم في السوق؛ لا يتناولون الطعام هناك كما يقترح الحوار.
6. Wir fahren erst am Abend nach Hause.
   - العودة ليست قبل المساء؛ erst am Abend لا تحدد ساعة ولا تؤكد أن رحلة حقيقية وقعت.

## البصمات والحفظ

```json
{
  "sourceHashes": {
    "content/A2/lesson-12-holidays-festivals-culture.md": "61e98a22a04f86dff56b18695743808c87a60154989b88af1b74b99951d03574",
    "content/A2/lesson-12-holidays-festivals-culture.assessment.json": "c740048fd114a3c34b6000f17a15ed0938798ed01da7c883b139733a01d25c7a"
  },
  "audioSnapshotHashes": {
    "DL-A2-12-AUD-PHR-01": "bb62ddf43d82a02cf10042a2b7e7289b4acdcbbb9ecf1b622618a0e0318c616b",
    "DL-A2-12-AUD-DLG-01": "a12a5eae03cb1ebaca5e35bfc1bd0c13ca36357b45e50b35d792f51bc00943af",
    "DL-A2-12-AUD-READ-01": "3b7384a29cbf5389d139697d8dc07aa12b0e29f88ccf71f8ba3efb5829d81611",
    "DL-A2-12-AUD-LST-01": "1a2d185ed9af250bfe9248c7dec008743930c8bb9c2de6eacbe7ff8a69d86a1a"
  },
  "preservation": {
    "baseline": "10c1f8727d41c309112e159fb4588b421a0d1958",
    "otherLessonsUnchanged": 52,
    "otherCatalogRowsUnchanged": 1060,
    "mp3GitHashesUnchanged": 474,
    "playlistBytesUnchanged": true,
    "audioRegisterChanges": [
      {
        "assetId": "DL-A2-12-AUD-PHR-01",
        "fields": [
          "source_line"
        ]
      },
      {
        "assetId": "DL-A2-12-AUD-DLG-01",
        "fields": [
          "source_line"
        ]
      },
      {
        "assetId": "DL-A2-12-AUD-READ-01",
        "fields": [
          "source_line"
        ]
      },
      {
        "assetId": "DL-A2-12-AUD-LST-01",
        "fields": [
          "source_line"
        ]
      }
    ],
    "answerIndicesUnchanged": true,
    "unchangedOptionTexts": 29,
    "changedOptionTexts": [
      {
        "questionId": "DL-A2-12-Q10",
        "optionIndex": 1,
        "before": "أن النشاط في الجملة التابعة يقع قبل النشاط الرئيسي.",
        "after": "أن النشاط في الجملة الرئيسية يقع قبل النشاط في الجملة التابعة."
      }
    ],
    "protectedFilesCompared": 115,
    "existingAudioConsistencyAssertionsUnchanged": true
  }
}
```
