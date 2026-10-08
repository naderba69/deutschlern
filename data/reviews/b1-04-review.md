# CR34 — مراجعة B1.4: التعلّم والتعليم المستمر

## إيصال رفع CR34 — 2026-10-08

- **التنفيذ:** `8e26cc5bd59f72e2c8eeab260c5a0e5657ba30e3`؛ **توضيح المطابقة والمخزن:** `fb7f91302e95075d213d9a41455f873a37671507`؛ **السجل والفحوص:** `308d1f16f3ce8b870aadd6c4732ce0c531203154`. رُفعت جميعها إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. هذا الإيصال يوثق النتيجة ويُرفع فور فحصه بعنوان `Record CR34 delivery receipt`؛ معرفه فيgit log، ونشره غير مستعلم عنه.
- آخر استعلام صريح للرأس308d1f1: **PR#1 OPEN، mergedAt=null**. **Vercel failure: Deployment rate limited — retry in 24 hours** وdeployments=[]؛ كذلك فشل نشرfb7f913 بالسبب نفسه. لا إعادة نشر يدوية متكررة أو ترقية مدفوعة. نجاحGitHub لا يعني نشرPreview/Production، ولم تختبر الواجهة البعيدة.
- **PASS:** البناء والتحقق و34 حارسًا وخمس مجموعاتNode ومجموعات المتصفح الخمس علىv82؛ الحزمة2,046,201 بايت وb1-04-v2. فُحصت149 حالةaxe بصفر مخالفات للقواعد المختارة، مع102 ظهور غير حاسم/230 ظهورًا لعقد، و126 حالة عرض ضيق. نجاحforms_keyboard فيCR34 لا يصلح تذبذبه السابق؛ لم يتغير التطبيق أو الاختبار ولم يثبت سبب سابق.
- **التغطية:**103 وحدات/34 بندًا/30 بديلًا/6 معايير/10 صفحات مرجعية كاملة؛ **33/53 درسًا والبوابة منفصلة،20 متبقية**. خمسة أصول/10 مقاطعB1.4 والأصوات محفوظة بلا استماع أو توليد أو اعتماد جديد. جمعTabellenkalkulationen مكتوب فقط، وخامسMODEL موضح كصياغة مستقلة، والنموذجان غير مسجلين.
- **التالي CR35/B1.5 — المدن والجمل الموصولة.** راجع كل نص وتمرين وخيار ومعيار مع المصادر، واحفظMara02/Yusuf03 والنماذج/المفردات/القراءة02 والاستماع03. لا إعادة توليد الموجود أو طلب اختيار الأصوات من جديد. كل تعديل يرفع فور فحصه؛ لا تبديل فرع أو دمج، ولا مراجع بشري شرطًا. بقية القيود والملفات والنتائج في الأقسام التالية. لا نصف العمل غير المدمج بأنه مكتمل.

رُوجع **B1.4 — التعلّم والتعليم المستمر: damit وum … zu** في **103 وحدات و34 بندًا أو مطلبًا داخل التمارين**، مع **10 مراجع مقروءة كاملة**. صُحح شرح Q03 إلى المصدر **verstehen** قبل المصرف **können**، ومفتاح T06 إلى **verstehen** وحدها كما في النص. T01 يطلب **um** فقط حيث **zu** موجودة، وأضيفت مفردة Q01 وربط Q02 به. حُددت مقاصد T03 لمنع التباس المطابقة، وأضيف إلى T07 مثال **damit بفاعل واحد**. **P01 خطة من أربع جمل كتابة فقط؛ P02 أربعة أدوار مع الجهر**، بمعايير ونموذجين مطابقين. حُفظ شرط الشهادة وفُصل الغرض عن الإنجاز والجنس النحوي عن جنس الشخص. الخيارات الثلاثون والفهارس و80% محفوظة. الإصدار `b1-04-v2` والمخزن `v82`؛ خمسة أصول/10 مقاطع محفوظة دون استماع أو توليد أو اعتماد جديد. **الحملة33/53 درسًا والبوابة منفصلة؛ تبقى20، والتالي CR35/B1.5.** هذه تغطية نصية مفحوصة، لا دمج أو اكتمال مشروع أو شهادة مستوى.

## الملفات والرفع والخطوة التالية

- المصدر والتقييم `content/B1/lesson-04-continuing-education-damit.md/.assessment.json` والحزمة `data/course.json`؛20 صفًا في catalog وأربعة في audio-register. جميع الخيارات الثلاثين والفهارس و80% محفوظة؛Q02→T01 وQ04→T04/T07 وكلاP→T08.
- عامل الخدمة واختباراه؛ progression/accessibility_audit؛ `tools/test_b1_04_review.py`؛ السجلان `data/reviews/b1-04-review.json/.md` والفهرس وREADME وPROGRESS وخطة التحسين2.40 وتقرير المتصفح وملفا التسليم. لا تعديل app.js/CSS/playlist/MP3/package/lock/test_forms_keyboard.
- رُفع التنفيذ **8e26cc5bd59f72e2c8eeab260c5a0e5657ba30e3** ثم توضيحT03 والمخزن **fb7f91302e95075d213d9a41455f873a37671507** إلى الفرع الوحيد `arena/01a1036f-deutschlern`؛ تطابق HEAD/origin. رُفعت مجموعة السجل والفحوص `308d1f16f3ce8b870aadd6c4732ce0c531203154`، وتطابق HEAD/origin؛ الإيصال أعلاه يثبت حالة الرفع والنشر.
- آخر استعلامPR#1: **OPEN، mergedAt=null**، والرأسfb7f913. Vercel لهذا الرأس **failure: Deployment rate limited — retry in 24 hours** وdeployments=[]؛ نجاحGitHub مستقل عن النشر. لم تُختبر الواجهة البعيدة أوProduction؛ لا إعادة نشر متكررة أو ترقية مدفوعة. نشر مجموعة التقرير لا يستنتج من سابقها.
- **التالي CR35/B1.5 — المدن والجمل الموصولة:** اقرأ المصدر والتقييم وكل أصل صوتي مكتوب، وراجع كل جملة وسؤال وخيار ومعيار وتوافق الحالة الإعرابية والفاعل/المفعول. احفظMara02/Yusuf03 والمفردات/النماذج/القراءة02 والاستماع03؛ لا تعاود طلب الأصوات أو توليد المقاطع الموجودة. لا حاجة لإعادةB1.4.
- كل تعديل يرفع فور فحص مجموعته؛ لا تبديل الفرع أو دمجPR#1 أو وصف المشروع بأنه مكتمل. المحتوى والتقييم والتطبيق قبل الصوت، ولا مراجع بشري شرطًا. لا حذف عمل محلي أوreset/clean دون مقارنة؛ لا إخفاء تسجيل أو تغييرready دون موافقة، وحد10 طلبات صوت/رد. اعتمادB1.9/B1.10 معلق واختيارB1.11 محفوظ؛ احفظ A2.7 Q08→T05 وفحوصA2.9 وتاريخB2.6 دون إعادة تسميتهB2.7.

## الفحوص وحدودها — CR34

- **PASS: البناء والتحقق**؛ الحزمة **2,046,201 بايت** والمخزن **v82**. 53 درسًا و428 عنوان تمرين و58 عنوانًا يطابق عداد الحوار و754 مفردة؛ 530 سؤال درس+10 للبوابة، و109 مهمات أداء و1080 صف كتالوج. زيادة عداد عناوين الحوار إلى58 بسبب عنوان T08 الجديد، لا تسجيل جديد. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending.
- **PASS:34 حارس مراجعة** تشمل A0.1–5 والبوابة وA1.1–12 وA2.1–12 وB1.1–4. الحارس الجديد يطابق103 وحدات و34 بندًا و30 بديلًا وستة معايير والمصدر والربط والنموذجين والبصمات، وأجزاء التفريغ المكتوب لكل أصل. البناء وحده لا يُحسب مراجعة فردية لباقي الدروس.
- **PASS: خمس مجموعات Node:** progression/service_worker/session_persistence/study_time/daily_plan؛ وصياغة app.js وservice-worker.js وكل tools/test_*.cjs، وgit diff --check. كتلة اختبارات الصوت التاريخية من expectedAudioLessonByPrefix مطابقة للخط الأساسي، بما فيها A2.9؛ لم تضعف لإمرار الفحص.
- **المتصفح:** نجحت المجموعات الخمس browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout أولًا علىv81 ثم أُعيدت كلها علىv82 بعد توضيح T03. Chromium **143.0.7499.0**، وPlaywright1.58.2 وaxe-core4.11.0. package/lock لم يتغيرا؛ Sparticuz143.0.4 والمكتبات مؤقتة خارجGit.
- **تعثر البيئة قبل الاختبارات:** أول تشغيل Chromium لم يبدأ بسبب libnspr4.so المفقودة. استخرجت al2023 إلى /tmp وأعيد التشغيل؛ ليس عطلًا في التطبيق أو اختبار متصفح ناجحًا قبل تجهيز البيئة.
- العام عند1440×900 و390×844: RTL والتنقل والتفريغات وتشغيل MP3 بسرعتي1 و0.8 والتوقف عند التنقل؛ العمل دون اتصال ونطاقات البايت و416/503. التشغيل آلي صامت، لا مراجعة سمعية لكل ملف أو ضمان بقاء كل الصوت مخزنًا.
- تحديث عامل الخدمة منfixture v42 إلىv82 دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت المفقود ثم إعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل انتقال تاريخي أو اختبارProduction.
- **progression:** سجل B1.4 القديمv1 يبقى مخزنًا لكنه لا يمنح إتقانv2 أو يفتحB1.5؛ ترفض المسودة القديمة. الدرجة والدليل والنسخة الحالية تفتح التالي، وحذف الدليل يعيد المنع. P01 لا يظهر فيه مربع الجهر ولا يلزمه؛ P02 يلزمه. كلاهما يحتاج كل الإقرارات والحد الحرفي. النموذجان275/261 حرفًا فوق220/210؛ هذه ضوابط دليل لا تصحيح لغة أو نطق.
- **axe:**149 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة؛ **102 ظهور غير حاسم تشمل230 ظهورًا لعقد**. هذه ليست مخالفات مؤكدة ولا شهادةWCAG أو نجاحًا شاملًا، ولا تجعل مراجعًا بشريًا شرطًا للاستمرار.
- **forms_keyboard:** نجح1440 و390 علىv81 وعلىv82 من أول تنفيذ لكل منهما، بما فيه التصدير والاستيراد والملف غير الصالح والمسودات. **تذبذب native filechooser السابق فيCR29/CR33 باقٍ غير محلول:** لا تعديل للتطبيق أو الاختبار، ولا تخفيف شروط أو سبب مثبت؛ نجاح هذه الجولة لا يعني إصلاحه. سجلاتCR33 السابقة باقية في الأرشيف.
- **العرض الضيق:**126 حالة،63 عند320×900 و63 عند568×320؛ تشمل الدروس مع التفريغات والجداول. viewport ليس هاتفًا فعليًا أو تكبير نظام.
- **الحفظ مقابل dc5aae5056bd3acfbe1e4c83b43cb2eeb51a6815:**52 درسًا أخرى وكل مفاتيح course خارجlessons، و1060 صف كتالوج أخرى و212 صف سجل صوت أخرى ثابتة. 589 ملفًا محميًا مطابقة بايتًا ببايت، منها474MP3 وplaylist وapp.js/CSS/package/lock وأداتاbuild/verify والمصادر الأخرى المحمية.
- تغيرت أربعة صفوف صوت فقط: MODEL في source_line وnotes، وDLG في source_line وبادئة planned_output_path، وREAD/LST في source_line. صفPHR ثابت، وكذلك المسارات الفعلية والأصوات والحالات. العدد212 هو الصفوف غير التابعة لـB1.4؛ مجموع الصفوف الثابتة213 بإضافةPHR، ولا نخلط الرقمين.

## حدود المحتوى والمصادر والصوت

- **damit** ممكنة مع الفاعل نفسه، لكن لا تحل مكانum وحدها أمام مصدر موجود. في آخر الحوار **ich≠wir** ولو كان المتكلم عضوًا في المجموعة. لا نكرر ضمير الفاعل في تركيبum، ولا نعمم النمط على كل تركيب مصدر ألماني.
- المصرف أخير في مجموعة الأفعال الحاضرة المدروسة؛ **verstehen können** مصدر ثم مصرف، ولا يضافkönnen إلى جواب نقل نص لم يتضمنه. لا نعمم الترتيب البسيط على كل مجموعة فعلية في الأزمنة المركبة.
- الغرض لا يثبت الإنجاز؛ شرط الشهادة **wenn sie regelmäßig ... teilnehmen** خاص بالقصة، لا اعتماد رسمي أو وعد من التطبيق. التسجيل لا يثبت إكمال الدورة، والمراجعة نهاية الأسبوع غير الحضور مساءً وقراءة المواد صباحًا في النص الآخر.
- Lehrkraft مؤنث نحوي قد يدل على معلم أو معلمة. جنس راوي الاستماع غير مصرح به؛ die Person وسياقKolleginnen والصوت لا تثبته. Trainerin/Lehrerin مؤنثتان في المعنى.
- **Tabellenkalkulationen** جمع أضيف كتابة، وتسجيل المفردات ينطق المفرد فقط. خامس MODEL أضيف حرفيًا إلى المصدر كصياغة تعليمية مستقلة لفكرة المجموعة، لا اقتباس حرفي من آخر الحوار. لا تغيير لتسجيلات Nadia02/Farid03 والمفردات/النماذج/القراءة02 والاستماع03، ولا استماع أو توليد أو اعتماد جديد.
- P01 كتابة فقط، وP02 كتابة ثم جهر بلا شريك أو تسجيل أو بيانات شخصية. النموذجان الجديدان مكتوبان غير مسجلين؛ رفع الحد الحرفي من90 إلى220/210 يناسب الدليل الأطول، لا يقيس جودة اللغة أو يفرض مستوىCEFR.
- المرجعDuden/anmelden يعطي مثالzu لاfür؛ لا ننسب له إثبات المثال الآخر حرفيًا. صفحةFinalsätze تؤكد إمكانdamit مع الفاعل نفسه، لكن لا ننقل تعميمها عن استحالةwollen/sollen/möchten في كل غرض. في التحويلات الحالية ننقل المقصد ولا يلزم نسخها.
- قرئت عشر صفحات كاملة، جزء واحد لكل صفحة. نتائج البحث وPDF والفيديو والروابط الفرعية غير المقروءة لا تُحسب مصادر. وصفum … zu في نظرةLingolia العامة بـFolge لم يُنقل كادعاء نتيجة متحققة؛ روجع مع صفحات الغرض والمصدر المتخصصة.

## المراجع المقروءة كاملة

- **INF — [Lingolia — Infinitivsätze](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/infinitivsaetze)**؛ 2026-10-08، الجزء0 من1. الغرض بـ um … zu وحذف الفاعل الصريح والمصدر وموضع zu في الفعل المنفصل. القاعدة هنا في أمثلة الغرض الفاعلية؛ لا نعمم تطابق الفاعل على كل تركيب مصدر ألماني، فقد يرتبط بمفعول في أنماط أخرى.
- **ADV — [Lingolia — Adverbialsätze](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/adverbialsaetze)**؛ 2026-10-08، الجزء0 من1. تمييز الغرض Wozu/damit عن السبب weil والشرط wenn والنتيجة؛ لا نستنتج تحقق الغرض أو الشهادة فعليًا.
- **SUB — [Lingolia — Nebensätze](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze)**؛ 2026-10-08، الجزء0 من1. الفاصلة والمصرف الأخير في الأنماط الحاضرة المدروسة. وصف um … zu في النظرة العامة بـ Folge لا يُنقل كادعاء نتيجة متحققة؛ اعتمدنا صفحتي الغرض/المصدر للتفصيل، ولا نعمم ترتيب مجموعة فعلية بسيطة على كل الأزمنة المركبة.
- **MOD — [Lingolia — Modalverben](https://deutsch.lingolia.com/de/grammatik/verben/modalverben)**؛ 2026-10-08، الجزء0 من1. المصدر مع الفعل الناقص؛ في damit الحاضرة verstehen können المصدر أولًا والمصرف أخيرًا. إضافة können تضيف معنى الإمكان، فلا يضاف إلى مفتاح نقل نص لم ينطقه.
- **TABLE — [Duden — Tabellenkalkulation](https://www.duden.de/rechtschreibung/Tabellenkalkulation)**؛ 2026-10-08، الجزء0 من1. اسم مؤنث وجمعه Tabellenkalkulationen؛ حساب باستخدام برنامج وجداول، لا مجرد جمع كلمة برامج. الجمع مضاف كتابة فقط؛ لا يزعم تسجيله أو برنامجًا تجاريًا بعينه.
- **REGISTER — [Duden — anmelden](https://www.duden.de/rechtschreibung/anmelden)**؛ 2026-10-08، الجزء0 من1. meldet an/meldete an/hat angemeldet وتسجيل المشاركة لا إكمالها. مثال الصفحة zu einem Kurs؛ لا نزعم أنها وثقت für + Akk حرفيًا. إطار sich für einen Kurs anmelden في الدرس راجعناه لغويًا وداخل السياق، لا نقلًا من مثال Duden.
- **CERT — [Duden — Zertifikat](https://www.duden.de/rechtschreibung/Zertifikat)**؛ 2026-10-08، الجزء0 من1. das Zertifikat/الشهادة والجمع Zertifikate. شرط المشاركة المنتظمة خاص بالقصة، وليس معيار شهادة حقيقية أو اعتماد CEFR أو وعدًا من التطبيق.
- **SEP — [Lingolia — Trennbare Verben](https://deutsch.lingolia.com/de/grammatik/verben/trennbare)**؛ 2026-10-08، الجزء0 من1. الفصل في الرئيسية لأنماط an/vor وعدم فصل be؛ مع مرجع المصدر يدعم vorzubereiten/weiterzubilden مقابل zu behalten/zu besprechen. لا نستنتج الفصل من كل بادئة في كل سياق.
- **TEACH — [Duden — Lehrkraft](https://www.duden.de/rechtschreibung/Lehrkraft)**؛ 2026-10-08، الجزء0 من1. اسم مؤنث نحويًا يشمل Lehrer[in]، جمع Lehrkräfte؛ لا يجوز جعله تلقائيًا معلمة. يختلف عن Lehrerin/Trainerin في النصين الآخرين.
- **FINAL — [mein-deutschbuch — Finalsätze](https://mein-deutschbuch.de/finalsaetze/)**؛ 2026-10-08، الجزء0 من1. الغرض و um … zu وتطابق الفاعل في هذه الأنماط، و damit جائزة حتى مع التطابق ولها فاعل مستقل. لا نتبنى تعميم الصفحة أن wollen/sollen/möchten مستحيلة في كل جملة غرض؛ يكتفى في التحويلات الحالية بنقل المقصد دون نسخها. PDF والفيديو والروابط الفرعية لم تُقرأ ولا تُحسب مصادر.

## السجل الفردي — 103 وحدات

تضم التغطية:9 وحدات نطاق،15 مفردة،5 أمثلة قاعدة،10 توضيحات،6 أدوار حوار،6 جمل قراءة و5 أسئلتها،5 جمل استماع و5 أسئلتها،8 تمارين،10 أسئلة تقييم،مهمتي أداء،8 جمل/أدوار للنموذجين،4 بطاقات و5 أصول صوتية. داخل التمارين34 بندًا أو مطلبًا، ولكل بديل من30 ومعيار من6 ملاحظة مستقلة.

### scope-01

> **المدة المقترحة:** 40–45 دقيقة، ويمكن تقسيم العمل · **المهارات:** قراءة، استماع اختياري، قواعد، تخطيط تعلّم، كتابة وجهر

**الحكم:** المدة اقتراح قابل للتقسيم، لا وعد إتقان. الاستماع اختياري مع التفريغ؛ جهر P02 مطلوب ولا يلزم تسجيل.


### scope-02

> **الهدف:** أستطيع أن أشرح هدف دورة أو خطة تعلّم، وأختار بين **damit** و**um … zu**.

**الحكم:** هدف لغة واحد: شرح الغرض واختيار البنية بحسب الفاعل والسياق، لا ضمان تعلم مهارة حاسوبية أو شهادة.

**المراجع ذات الصلة:** INF, FINAL.


### scope-03

> جمع **Tabellenkalkulationen** توضيح كتابي؛ تسجيل المفردات الموجود ينطق المفرد **die Tabellenkalkulation** فقط، ولم يُعد توليده.

**الحكم:** الجمع المكتوب صحيح، بينما التسجيل القديم ينطق المفرد وحده؛ الإفصاح يحفظ التطابق دون إعادةتوليد.

**المراجع ذات الصلة:** TABLE.


### scope-04

> كلا التركيبين يعبّر هنا عن غرض أو هدف مقصود، لا دليلًا على تحققه بالفعل. في أمثلتنا نحدد من يفعل النشاط ومن يُراد له تحقيق الهدف؛ الاختيار يعتمد على هذه العلاقة وعلى البنية المطلوبة:

**الحكم:** الغاية المقصودة ليست نتيجة ثبتت؛ تحديد الفاعل أهم من عدد أشخاص القصة.

**المراجع ذات الصلة:** ADV, FINAL.


### scope-05

> ### **um … zu + المصدر**: الفاعل المفهوم واحد في أمثلتنا

**الحكم:** قُيدت وحدة الفاعل بأمثلة الغرض هنا، لا كل مصدر ألماني.

**المراجع ذات الصلة:** INF, FINAL.


### scope-06

> ### **damit + جملة فعلها في النهاية**: الفاعل قد يكون مختلفًا

**الحكم:** قد يكون مختلفًا لا يجب أن يكون مختلفًا؛ المصرف أخير في البنية الحاضرة المستهدفة.

**المراجع ذات الصلة:** FINAL, SUB.


### scope-07

> يمكن استعمال **damit** حتى عندما يكون الفاعل واحدًا، لكن **um … zu** صيغة موجزة هنا ولا نكرر داخلها فاعلًا صريحًا. في تراكيب **damit** الحاضرة التي ندرسها هنا نذكر فاعلًا وفعلًا مصرفًا أخيرًا. نضع فاصلة لفصل تركيب الغرض عن الرئيسية؛ ومع فعل ناقص يأتي المصدر قبله: **verstehen können**، حيث **können** هو المصرف الأخير، لا **können verstehen**.

**الحكم:** فاصلة للفصل، ولا ضمير فاعل صريح في um؛ يمكن استعمال damit مع الفاعل نفسه. المصدر قبل المصرف في المجموعة الفعلية الحاضرة المدروسة.

**المراجع ذات الصلة:** INF, SUB, MOD, FINAL.


### scope-08

> مثال خامس موجود في تسجيل النماذج، وهو صياغة تعليمية مستقلة لفكرة المجموعة، لا اقتباس حرفي من الحوار:

**الحكم:** كان سجل MODEL يصف المثال الخامس كاقتباس من الحوار، لكنه اقتباس بالمعنى لا بالحروف؛ أضيف المثال نفسه ووصفت استقلاليته دون تغيير الصوت.


### scope-09

> النموذجان خياليان مكتوبان وغير مسجلين؛ لا يبدلان المقاطع الموجودة ولا يثبتان إنجاز هدف أو الحصول على شهادة. المثال الخامس في تسجيل النماذج أضيف أعلاه بحروفه كما هو، أما هذان النموذجان فمخصصان للمهمتين الجديدتين.

**الحكم:** النموذجان الجديدان مكتوبان ولا ينسبان إلى صوت قديم؛ لا تنفيذ فعلي أو شهادة أو وصول بيانات.


### vocab-01

> | die Weiterbildung | die Weiterbildungen | التعليم/التدريب المستمر |

**الحكم:** اسم مؤنث، جمعه Weiterbildungen؛ تعليم أو تدريب مستمر لا وعد ترقية. يختلف مجال القراءة عن الاستماع.


### vocab-02

> | die Fähigkeit | die Fähigkeiten | المهارة |

**الحكم:** اسم مؤنث، جمعه Fähigkeiten؛ مهارة أو قدرة، لا شهادة.


### vocab-03

> | die Kenntnis | die Kenntnisse | المعرفة |

**الحكم:** اسم مؤنث، جمعه Kenntnisse؛ معارف حاسوبية في السياق، و Computerkenntnisse كلمة مركبة لا اسم برنامج.


### vocab-04

> | die Plattform | die Plattformen | المنصّة |

**الحكم:** اسم مؤنث، جمعه Plattformen؛ منصة تعليمية، لا اسم خدمة أو تسجيل تجاري مطلوب.


### vocab-05

> | die Tabellenkalkulation | die Tabellenkalkulationen | الحساب/معالجة البيانات بالجداول الإلكترونية |

**الحكم:** صُحح المعنى من برامج جمعًا إلى مجال الحساب بالجداول. جمع Tabellenkalkulationen صحيح ومكتوب فقط؛ التسجيل ينطق المفرد.

**المراجع ذات الصلة:** TABLE.


### vocab-06

> | die Kursunterlage | die Kursunterlagen | مادة من مواد الدورة |

**الحكم:** مفرد مؤنث Kursunterlage وجمع Kursunterlagen؛ مواد الدورة التي تُقرأ صباحًا، لا Notizen التي تراجع بعد الدورة.


### vocab-07

> | der Lernstoff | — | المادة التعليمية |

**الحكم:** Lernstoff مذكر، مادة يدرسها المتعلم، لا شهادة أو مجموعة. الشرطة تعني عدم تقديم جمع في هذا السياق، لا استحالة كل استعمال جمع.


### vocab-08

> | das Lernziel | die Lernziele | هدف التعلّم |

**الحكم:** Lernziel محايد وجمعه Lernziele؛ الهدف المقصود، لا دليل نجاح فيه.


### vocab-09

> | das Zertifikat | die Zertifikate | الشهادة |

**الحكم:** Zertifikat محايد وجمعه Zertifikate؛ الشهادة مشروطة بالمشاركة المنتظمة في القصة، لا مستلمة بالفعل أو رسمية بالضرورة.

**المراجع ذات الصلة:** CERT.


### vocab-10

> | die Teilnahme | — | المشاركة |

**الحكم:** Teilnahme اسم مؤنث بمعنى المشاركة؛ لا جمع مدرّس هنا، ولا مساواة بين التسجيل والمشاركة المنتظمة.


### vocab-11

> | die Voraussetzung | die Voraussetzungen | الشرط المسبق |

**الحكم:** Voraussetzung مؤنث وجمعه Voraussetzungen؛ شرط مسبق، ورابط wenn في نص الشهادة يحدد شرطًا لا غرضًا.


### vocab-12

> | sich anmelden für | meldet sich an | يسجّل في |

**الحكم:** sich anmelden für انعكاسي، و meldet sich an تصريف منفصل؛ Kurs بعد für بالنصب. مثال Duden يستعمل zu، فلا ننسب إليه توثيق für حرفيًا.

**المراجع ذات الصلة:** REGISTER, SEP.


### vocab-13

> | wiederholen | — | يراجع / يكرّر |

**الحكم:** wiederholen هنا مراجعة أو تكرار، غير منفصل، لا wieder holen بمعنى جلب من جديد؛ يرتبط بالمادة في القراءة وبالملاحظات في الاستماع.

**المراجع ذات الصلة:** SEP.


### vocab-14

> | selbstständig | — | بصورة مستقلة |

**الحكم:** selbstständig صفة أو حال تعني بصورة مستقلة هنا، لا عملًا حرًا أو إتقانًا مثبتًا. selbstständiger في الحوار درجة مقارنة مقصودة.


### vocab-15

> | die Lerngruppe | die Lerngruppen | مجموعة تعلّم |

**الحكم:** Lerngruppe مؤنث وجمعه Lerngruppen؛ مجموعة دراسة، لا مؤسسة معينة. أعضاؤها في الاستماع زميلتان مع الراوي.


### grammar-01

> Ich mache einen Onlinekurs, um meine Kenntnisse zu erweitern.

**الحكم:** ich واحد في النشاط والهدف؛ المصدر erweitern مع zu والفاصلة بعد الرئيسية. توسيع المعارف غرض لا إنجاز مثبت.

**المراجع ذات الصلة:** INF, FINAL, SUB, MOD, SEP.


### grammar-02

> Sie wiederholt den Lernstoff, um sich auf die Prüfung vorzubereiten.

**الحكم:** sie فاعل المراجعة والتحضير نفسه، و sich انعكاسي للغائب؛ zu داخل vorzubereiten. لا ادعاء نجاح الامتحان.

**المراجع ذات الصلة:** INF, FINAL, SUB, MOD, SEP.


### grammar-03

> Der Kurs bietet Übungen an, damit die Teilnehmenden selbstständig lernen können.

**الحكم:** Der Kurs مقابل die Teilnehmenden؛ an منفصلة في bietet ... an. lernen مصدر قبل können المصرف؛ إتاحة التعلم لا إثباته.

**المراجع ذات الصلة:** INF, FINAL, SUB, MOD, SEP.


### grammar-04

> Die Lehrerin erklärt die Aufgabe, damit alle sie verstehen.

**الحكم:** Die Lehrerin تشرح و alle فاعل الفهم؛ sie مفعول يعود إلى die Aufgabe، لا المعلمة. verstehen مصرف جمع وإن طابق شكل المصدر.

**المراجع ذات الصلة:** INF, FINAL, SUB, MOD, SEP.


### grammar-05

> Wir bilden eine Lerngruppe, um schwierige Themen gemeinsam zu besprechen.

**الحكم:** Wir نفسه في بناء المجموعة ومناقشتها؛ besprechen غير منفصل و zu قبله. الجملة المسجلة أضيفت حرفيًا، وليست آخر الحوار الذي يبدأ ich.

**المراجع ذات الصلة:** INF, FINAL, SUB, MOD, SEP.


### helper-01

> - **الهدف لا النتيجة:** **um die Prüfung zu bestehen** تعني هدف النجاح، ولا تقول إن الشخص نجح بالفعل. **damit ... lernen können** تعبر عن قصد إتاحة التعلم، لا إثبات أن الجميع أتقن المادة. نفرّق الغرض عن السبب بـ weil وعن شرط الشهادة بـ wenn.

**الحكم:** الغرض متميز عن السبب والشرط؛ النجاح مقصود وليس حدثًا ثابتًا.

**المراجع ذات الصلة:** ADV.


### helper-02

> - **الفاعل مع damit:** **Ich übe, damit ich sicherer spreche.** سليمة بفاعل واحد. أما **Die Lehrerin erklärt, damit die Klasse versteht.** ففيها فاعلان مختلفان. لا تختَر damit لمجرد وجود شخصين في القصة أو تحكم أن كل جملة فيها damit لها فاعلان مختلفان.

**الحكم:** damit صحيحة بفاعل واحد؛ عدد الأشخاص في القصة ليس معيار البنية.

**المراجع ذات الصلة:** FINAL.


### helper-03

> - **ملء الفراغ لا تكرار التركيب:** في **Ich lerne, ___ die Prüfung zu bestehen.** اكتب **um** فقط؛ **zu** موجودة بالفعل. داخل تركيب um نضع المصدر مع zu ولا نضيف ضميرفاعل جديدًا. إذا استعملت damit مع الفاعل نفسه فأعد بناء الجملة، مثل **damit ich die Prüfung bestehe**، لا تستبدل كلمة واحدة وتترك المصدر.

**الحكم:** علاج T01/Q02: um وحدها في الفراغ؛ damit تحتاج إلى إعادة البناء بفاعل ومصرف، لا استبدال كلمة واحدة.

**المراجع ذات الصلة:** INF, FINAL.


### helper-04

> - **المصرف الأخير:** **damit die Lernenden alles besser verstehen können**: المصدر **verstehen** يسبق **können** المصرف. وفي **damit alle Teilnehmenden die Begriffe verstehen** تكون **verstehen** نفسها مصرفًا مع الجمع، ولا نضيف können عند نقل عبارة الاستماع التي لم تتضمنها.

**الحكم:** علاج Q03/T06: verstehen قبل können إذا وُجد؛ لا نضيف فعلًا ناقصًا إلى تفريغ لا يحويه.

**المراجع ذات الصلة:** MOD, SUB.


### helper-05

> - **zu والأفعال المنفصلة:** **vorbereiten → vorzubereiten** و**sich weiterbilden → sich weiterzubilden**. الضمير بحسب الشخص: **um mich ... vorzubereiten** للمتكلم و**um sich ... vorzubereiten** للغائب. أما **behalten → zu behalten** و**besprechen → zu besprechen** فلا نفصل بادئتي be-.

**الحكم:** zu داخل الفعل المنفصل، و mich/sich بحسب الشخص، مع عدم فصل be-.

**المراجع ذات الصلة:** INF, SEP.


### helper-06

> - **التسجيل والمراجعة:** **Ich melde mich für einen Kurs an / Ich habe mich für einen Kurs angemeldet.** صيغة انعكاسية و an منفصلة في الرئيسية البسيطة؛ التسجيل لا يثبت إكمال الدورة. **wiederholen** هنا يراجع/يكرر، و**bereitstellen/anbieten** يظهران في الحوار والأمثلة بـ**stellt ... bereit / bietet ... an**. **Tabellenkalkulation** مجال الحساب بالجداول، لا اسم برنامج بعينه.

**الحكم:** الانعكاس والفصل ومعنى التسجيل دون إثبات الإكمال؛ تمييز المادة التعليمية عن مجال الجداول.

**المراجع ذات الصلة:** REGISTER, TABLE.


### helper-07

> - **من يتكلم ومن يدرّس؟** **Lehrerin/Trainerin** في الحوار والاستماع مؤنثتان في المعنى، لكن **Lehrkraft** اسم مؤنث نحويًا قد يدل على معلم أو معلمة. راوي الاستماع غير مسمى، و**sie** في أسئلته تعود إلى**die Person**؛ لا يحدد الصوت أو هذا الضمير جنس الراوي. **Kolleginnen** تعني زميلات، ولا تثبت جنس الشخص الذي يدرس معهن.

**الحكم:** الجنس النحوي لـ Lehrkraft/die Person لا يثبت جنس الشخص. Lehrerin/Trainerin/Kolleginnen صيغ مؤنثة في المعنى، ولا نستدل بالصوت.

**المراجع ذات الصلة:** TEACH.


### helper-08

> - **افصل البرامج والأوقات:** قراءة Farid عن الجداول: الحضور مساءً والمراجعة في نهاية الأسبوع. الاستماع عن التواصل: قراءة المواد صباحًا ومراجعة الملاحظات بعد الدورة، ومجموعة مع زميلتين مرة أسبوعيًا. لا نجعل راوي الاستماع Farid تلقائيًا أو ننقل وقتًا من نص لآخر، ولا نستنتج ساعة أو مدة أو تطبيقًا معينًا.

**الحكم:** فصل الأشخاص والأوقات بين النصين؛ لا وقت دقيق أو مدة أو تطبيق مستنتج.


### helper-09

> - **الشهادة مشروطة في النص:** النهاية مع **wenn sie regelmäßig am Kurs teilnehmen**؛ جواب الشهادة يحفظ شرط المشاركة المنتظمة. لا يثبت النص أن Farid حصل عليها بالفعل أو أنها اعتماد رسمي أو شهادة يمنحها هذا التطبيق. في الحوار هدف الاستقلالية ليس إنجازًا موثقًا، و**meistens/manchmal** لا تعني دائمًا. في الدور الأخير **ich** مفرد و**wir** مجموعة تشمل المتكلم؛ ليسا الفاعل نفسه لمجرد اشتراكه في المجموعة، ولذلك تصح **damit wir ... besprechen**.

**الحكم:** شرط الشهادة خاص بالقصة، و meistens/manchmal لا تعني دائمًا؛ ich لا يساوي wir ولو كان عضوًا في المجموعة.

**المراجع ذات الصلة:** CERT, ADV, FINAL.


### helper-10

> - **طريقة العمل:** P01 خطة خيالية من أربع جمل كتابة فقط؛ P02 أربعة أدوار مع الجهر، يذكر المتعلم هدفه وتقترح المدربة تمرينًا له. لا تسجيل فعلي في دورة، أو دفع، أو بيانات شخصية، أو شريك، أو تسجيل صوتي. يمكن قراءة التفريغ؛ الحروف والإقرارات لا تصحح المعنى أو النحو أو النطق آليًا.

**الحكم:** P01 كتابة فقط و P02 مع الجهر؛ لا شريك أو تسجيل أو إنفاق أو مراجعة بشرية شرطًا، ولا ادعاء تصحيح آلي للنحو والنطق.


### dialogue-01

> Warum hast du dich für den Onlinekurs angemeldet?

**الحكم:** Nadia تسأل سبب التسجيل الماضي: Perfekt مع hast ... angemeldet انعكاسي، وليس إكمال الدورة.

**المراجع ذات الصلة:** INF, FINAL, SUB, MOD.


### dialogue-02

> Ich möchte meine Computerkenntnisse erweitern, um bei der Arbeit selbstständiger zu werden.

**الحكم:** Farid يريد توسيع معارفه ليصبح أكثر استقلالية؛ ich نفسه في الغرض، ولا نجاح مهني مثبت.

**المراجع ذات الصلة:** INF, FINAL, SUB, MOD.


### dialogue-03

> Gibt es Übungen?

**الحكم:** Gibt es سؤال عن وجود التمارين، لا نوعها أو عددها.

**المراجع ذات الصلة:** INF, FINAL, SUB, MOD.


### dialogue-04

> Ja. Die Lehrerin stellt kurze Aufgaben bereit, damit wir den Lernstoff regelmäßig wiederholen können.

**الحكم:** Lehrerin تقدم مهام قصيرة لتكرار المادة؛ هي مقابل wir. wiederholen مصدر قبل können؛ Ja جملة جواب داخل الدور لا دور صوتي مستقل.

**المراجع ذات الصلة:** INF, FINAL, SUB, MOD.


### dialogue-05

> Lernst du allein?

**الحكم:** Lernst du allein سؤال عن طريقة الدراسة، لا رأي سلبي في المجموعة.

**المراجع ذات الصلة:** INF, FINAL, SUB, MOD.


### dialogue-06

> Meistens. Manchmal treffe ich mich mit einer Lerngruppe, damit wir schwierige Themen gemeinsam besprechen.

**الحكم:** Meistens وحيدًا و Manchmal جماعيًا؛ ich غير wir ولو شملته المجموعة. besprechen مصرف جمع؛ لا ادعاء أن كل الدراسة جماعية أو في وقت محدد.

**المراجع ذات الصلة:** INF, FINAL, SUB, MOD.


### reading-01

> Farid arbeitet in einem kleinen Betrieb.

**الحكم:** Farid يعمل في منشأة صغيرة؛ لا اسم شركة أو دولة أو جنس مدرس في الجملة.

**المراجع ذات الصلة:** INF, ADV, TABLE, REGISTER, TEACH, CERT.


### reading-02

> Er hat sich für eine Weiterbildung im Bereich Tabellenkalkulation angemeldet.

**الحكم:** سجّل في تدريب الجداول، لا التواصل؛ التسجيل الماضي لا يضمن الإكمال أو الشهادة.

**المراجع ذات الصلة:** INF, ADV, TABLE, REGISTER, TEACH, CERT.


### reading-03

> Er besucht den Kurs am Abend, um seine Kenntnisse zu verbessern.

**الحكم:** الحضور مساءً لتحسين المعارف؛ الفاعل واحد، والتحسين هدف لا نتيجة مثبتة.

**المراجع ذات الصلة:** INF, ADV, TABLE, REGISTER, TEACH, CERT.


### reading-04

> Die Lehrkraft gibt Beispiele, damit die Teilnehmenden die neuen Funktionen praktisch üben können.

**الحكم:** Lehrkraft لا يحدد جنس المدرس؛ الأمثلة لغرض الممارسة، والمصدر üben قبل können المصرف.

**المراجع ذات الصلة:** INF, ADV, TABLE, REGISTER, TEACH, CERT.


### reading-05

> Farid wiederholt den Lernstoff am Wochenende, um sich auf die Abschlussaufgabe vorzubereiten.

**الحكم:** المراجعة نهاية الأسبوع للتحضير لمهمة ختامية، لا امتحان نجح فيه؛ مصدر انعكاسي بـ sich و vorzubereiten.

**المراجع ذات الصلة:** INF, ADV, TABLE, REGISTER, TEACH, CERT.


### reading-06

> Am Ende erhalten die Teilnehmenden ein Zertifikat, wenn sie regelmäßig am Kurs teilnehmen.

**الحكم:** الشهادة في النهاية مشروطة بالمشاركة المنتظمة؛ لا إثبات لتسلم Farid لها، ولا اعتماد عام أو شرط صادر عن التطبيق.

**المراجع ذات الصلة:** INF, ADV, TABLE, REGISTER, TEACH, CERT.


### listening-01

> Ich mache eine Weiterbildung im Bereich Kommunikation.

**الحكم:** التدريب في التواصل؛ لا اسم للراوي ولا استدلال بالصوت على جنسه.

**المراجع ذات الصلة:** INF, SUB, SEP.


### listening-02

> Ich lese die Kursunterlagen am Morgen, um mich auf den Unterricht vorzubereiten.

**الحكم:** قراءة المواد صباحًا للاستعداد؛ mich للمتكلم و vorzubereiten منفصل مع zu. لا صلة بمساء Farid.

**المراجع ذات الصلة:** INF, SUB, SEP.


### listening-03

> Unsere Trainerin erklärt neue Begriffe langsam, damit alle Teilnehmenden sie verstehen.

**الحكم:** Trainerin مؤنثة في المعنى، والشرح البطيء لغرض الفهم. sie تعود إلى Begriffe؛ verstehen مصرف جمع فقط، بلا können.

**المراجع ذات الصلة:** INF, SUB, SEP.


### listening-04

> Nach dem Kurs wiederhole ich die Notizen, um die wichtigsten Punkte zu behalten.

**الحكم:** مراجعة الملاحظات بعد الدورة بغرض الاحتفاظ بالنقاط؛ behalten غير منفصل و zu قبله، وليس دليلًا على تذكر فعلي.

**المراجع ذات الصلة:** INF, SUB, SEP.


### listening-05

> Einmal pro Woche lerne ich mit zwei Kolleginnen in einer Lerngruppe.

**الحكم:** مرة أسبوعيًا مع زميلتين في مجموعة؛ لا اسم أو مكان أو يوم محدد. جنس الزميلتين لا يثبت جنس الراوي.

**المراجع ذات الصلة:** INF, SUB, SEP.


### reading-question-01

> Für welche Weiterbildung hat sich Farid angemeldet?

**الحكم:** المجال في الجملة الثانية هو الجداول، لا التواصل.

**المفتاح:** Für eine Weiterbildung in Tabellenkalkulation.


### reading-question-02

> Wann besucht er den Kurs?

**الحكم:** وقت الحضور من الجملة الثالثة، لا وقت مراجعة المادة في نهاية الأسبوع.

**المفتاح:** Am Abend.


### reading-question-03

> Warum besucht er den Kurs?

**الحكم:** Warum هنا يقبل الغرض المذكور بـ um؛ لا نخترع سببًا خارجيًا.

**المفتاح:** Um seine Kenntnisse zu verbessern.


### reading-question-04

> Wozu gibt die Lehrkraft Beispiele?

**الحكم:** Wozu يطلب الغرض لا نتيجة مثبتة؛ جهة التدريس تقدم والمشاركون يتدربون.

**المفتاح:** Damit die Teilnehmenden die neuen Funktionen praktisch üben können.


### reading-question-05

> Was erhalten die Teilnehmenden am Ende bei regelmäßiger Teilnahme?

**الحكم:** قُيد السؤال والمفتاح بالمشاركة المنتظمة؛ لا ينبغي حذف شرط wenn.

**المفتاح:** Ein Zertifikat, wenn sie regelmäßig am Kurs teilnehmen.


### listening-question-01

> Welche Weiterbildung macht die Person?

**الحكم:** التواصل لا الجداول.

**المفتاح:** Eine Weiterbildung im Bereich Kommunikation.


### listening-question-02

> Wann liest sie die Kursunterlagen?

**الحكم:** sie تعود لغويًا إلى die Person؛ الصباح لقراءة مواد الدورة.

**المفتاح:** Am Morgen.


### listening-question-03

> Warum erklärt die Trainerin langsam?

**الحكم:** الغرض فهم المصطلحات؛ لا können إضافية ولا sie عائدة إلى المدربة.

**المفتاح:** Damit alle Teilnehmenden die Begriffe verstehen.


### listening-question-04

> Was macht die Person nach dem Kurs?

**الحكم:** تكرار الملاحظات بعد الدورة، لا قراءة المواد صباحًا.

**المفتاح:** Sie wiederholt die Notizen.


### listening-question-05

> Mit wem lernt sie einmal pro Woche?

**الحكم:** زميلتان في مجموعة مرة أسبوعيًا، لا المدربة أو الدراسة وحدها.

**المفتاح:** Mit zwei Kolleginnen in einer Lerngruppe.


### DL-B1-04-T01

> في 1–4 اكتب **um** أو **damit** فقط؛ zu موجودة في الجمل التي تحتاجها. في 5 اختر معنى المفردة:
> 
> 1. Ich lerne jeden Tag, ______ die Prüfung zu bestehen. (الفاعل نفسه)
> 2. Die Lehrerin schreibt die Wörter auf, ______ alle sie sehen können. (فاعل مختلف)
> 3. Wir bilden eine Lerngruppe, ______ schwierige Aufgaben gemeinsam zu lösen. (الفاعل نفسه)
> 4. Der Betrieb bietet einen Kurs an, ______ die Mitarbeitenden neue Fähigkeiten entwickeln. (فاعلان مختلفان)
> 5. المادة التعليمية التي يدرسها المتعلم: **der Lernstoff / das Zertifikat**.

**الحكم:** رابط ومفردة بدعم مباشر لـ Q01/Q02؛ لا كتابة zu مرتين.

**المراجع ذات الصلة:** INF, FINAL, SUB.

- **Ich lerne jeden Tag, ______ die Prüfung zu bestehen. (الفاعل نفسه)** — um فقط؛ zu موجودة وفاعل ich واحد.
- **Die Lehrerin schreibt die Wörter auf, ______ alle sie sehen können. (فاعل مختلف)** — damit مع die Lehrerin و alle؛ المصرف können أخير.
- **Wir bilden eine Lerngruppe, ______ schwierige Aufgaben gemeinsam zu lösen. (الفاعل نفسه)** — um فقط و zu موجودة؛ نحن نفعل النشاط والهدف.
- **Der Betrieb bietet einen Kurs an, ______ die Mitarbeitenden neue Fähigkeiten entwickeln. (فاعلان مختلفان)** — damit لأن Betrieb يقدم والعاملين يطورون؛ entwickeln مصرف جمع.
- **المادة التعليمية التي يدرسها المتعلم: **der Lernstoff / das Zertifikat**.** — der Lernstoff هو المعطى؛ das Zertifikat شهادة لا مادة تعليمية.

### DL-B1-04-T02

> صرّف الفعل في damit؛ في 2 احفظ المصدر قبل المصرف، وفي 3 أضف zu المطلوبة مع المصدر:
> 
> 1. Sie übt regelmäßig, damit sie die Prüfung ______. (bestehen)
> 2. Die Plattform bietet Videos an, damit die Lernenden alles besser ______. (verstehen können)
> 3. Ich wiederhole die Wörter, um sie besser ______. (behalten)

**الحكم:** تصريف وترتيب المصدر مع الناقص؛ يعالج خطأ شرح Q03.

**المراجع ذات الصلة:** INF, FINAL, SUB.

- **Sie übt regelmäßig, damit sie die Prüfung ______. (bestehen)** — besteht مصرف مفرد مع sie؛ damit بفاعل واحد سليمة.
- **Die Plattform bietet Videos an, damit die Lernenden alles besser ______. (verstehen können)** — verstehen können: مصدر ثم مصرف مع الجمع، لا können verstehen.
- **Ich wiederhole die Wörter, um sie besser ______. (behalten)** — zu behalten؛ be غير منفصلة، والفاعل ich واحد.

### DL-B1-04-T03

> استخدم كل نهاية مرة وفق المقاصد المحددة: في1 أريد الحصول على شهادتي؛ في2 تريد المدربة أن يفهم الجميع التعليمات؛ في3 نريد التدريب معًا. لا نحكم بأن كل تركيب آخر مستحيل نحويًا، بل نطابق هذه المقاصد.
> 
> 1. Ich besuche den Kurs, um …  
> 2. Die Trainerin spricht langsam, damit …  
> 3. Wir bilden eine Lerngruppe, um …
> 
> أ. alle Teilnehmenden die Anweisungen verstehen.  ب. gemeinsam zu üben.  ج. mein Zertifikat zu bekommen.

**الحكم:** المقصد محدد لكل بداية لتفادي الالتباس الدلالي، مع مفتاح ثابت.

**المراجع ذات الصلة:** INF, FINAL, SUB.

- **Ich besuche den Kurs, um …  ** — 1-ج: mein Zertifikat حسب المقصد المعطى؛ نهايات أخرى قد تصلح نحويًا خارجه.
- **Die Trainerin spricht langsam, damit …  ** — 2-أ: damit alle ... verstehen بفاعل ومصرف أخير، والمقصد فهم التعليمات.
- **Wir bilden eine Lerngruppe, um …** — 3-ب: gemeinsam zu üben وفق المقصد الجماعي؛ كل نهاية تستعمل مرة.

### DL-B1-04-T04

> أكمل بداية الجملة المعطاة، مع حفظ الفاعل والغاية. تنقل صيغة الغرض المقصد فلا يلزم نسخ möchten أو sollen مرة أخرى:
> 
> 1. **Ich mache Übungen. Ich möchte die Wörter behalten.** → Ich mache Übungen, um ______.
> 2. **Die Kursleiterin erklärt die Aufgabe. Die Teilnehmenden sollen sie verstehen.** → Die Kursleiterin erklärt die Aufgabe, damit ______.
> 3. **Wir treffen uns. Wir möchten gemeinsam lernen.** → Wir treffen uns, um ______.

**الحكم:** تحويل الغرض وحفظ الفاعل؛ يدعم تمييز Q04 مع T07.

**المراجع ذات الصلة:** INF, FINAL, SUB.

- ****Ich mache Übungen. Ich möchte die Wörter behalten.** → Ich mache Übungen, um ______.** — die Wörter zu behalten يحفظ غرض ich دون نسخ möchte؛ be غير منفصلة.
- ****Die Kursleiterin erklärt die Aufgabe. Die Teilnehmenden sollen sie verstehen.** → Die Kursleiterin erklärt die Aufgabe, damit ______.** — die Teilnehmenden sie verstehen: المشاركون فاعل و sie مفعول يعود للمهمة؛ نقل الغرض لا يلزم نسخ sollen.
- ****Wir treffen uns. Wir möchten gemeinsam lernen.** → Wir treffen uns, um ______.** — gemeinsam zu lernen: فاعل wir مشترك ولا möchten إضافية.

### DL-B1-04-T05

> حدّد صحيحًا أو خطأ:
> 
> 1. Farid lernt Tabellenkalkulation.
> 2. Der Kurs findet am Morgen statt.
> 3. Die Lehrkraft gibt Beispiele, damit die Teilnehmenden die neuen Funktionen praktisch üben können.
> 4. Alle erhalten am Ende ein Zertifikat, auch wenn sie nie teilnehmen.

**الحكم:** مقارنة مع القراءة لا الاستماع؛ الوقت وشرط الشهادة وغرض الأمثلة محفوظة.

**المراجع ذات الصلة:** INF, FINAL, SUB.

- **Farid lernt Tabellenkalkulation.** — صحيح: مجال الجداول مذكور في القراءة.
- **Der Kurs findet am Morgen statt.** — خطأ: المساء وقت الحضور؛ الصباح في نص الاستماع لنشاط مختلف.
- **Die Lehrkraft gibt Beispiele, damit die Teilnehmenden die neuen Funktionen praktisch üben können.** — صحيح: عدّلت العبارة لتصف غرض تمكين التدريب، لا ثبوت تحقق غرض الأمثلة.
- **Alle erhalten am Ende ein Zertifikat, auch wenn sie nie teilnehmen.** — خطأ: عدم المشاركة لا يحقق شرط المشاركة المنتظمة.

### DL-B1-04-T06

> انقل الكلمات الموافقة للنص دون إضافة فعل ناقص لم يُذكر. بنك الكلمات: **Kommunikation — Morgen — verstehen — Kolleginnen**.
> 
> 1. Die Person macht eine Weiterbildung in ______.
> 2. Sie liest die Kursunterlagen am ______.
> 3. Die Trainerin erklärt langsam, damit alle Teilnehmenden die neuen Begriffe ______.
> 4. Einmal pro Woche lernt die Person mit zwei ______.

**الحكم:** نقل كلمات ببنك مساعد؛ مفتاح التفريغ لا يضيف können.

**المراجع ذات الصلة:** INF, FINAL, SUB.

- **Die Person macht eine Weiterbildung in ______.** — Kommunikation هو المجال في النص؛ بنك الكلمات يساعد في نقل المطلوب.
- **Sie liest die Kursunterlagen am ______.** — Morgen بعد am؛ لا المساء أو نهاية الأسبوع.
- **Die Trainerin erklärt langsam, damit alle Teilnehmenden die neuen Begriffe ______.** — verstehen فقط؛ استُبدلت sie في السؤال بمرجعها die neuen Begriffe، دون إضافة können من مثال آخر.
- **Einmal pro Woche lernt die Person mit zwei ______.** — Kolleginnen مع زميلتين؛ المعدود لا يحدد جنس الراوي.

### DL-B1-04-T07

> اكتب **فاعل واحد** أو **فاعلان مختلفان**:
> 
> 1. Ich lerne neue Wörter, um sie im Gespräch zu benutzen.
> 2. Die Lehrerin erklärt ein Beispiel, damit die Klasse es versteht.
> 3. Wir üben, um sicherer zu sprechen.
> 4. Ich übe jeden Tag, damit ich sicherer spreche.

**الحكم:** تحليل علاقة الفاعل لا اختيار آلي من أداة الربط.

**المراجع ذات الصلة:** INF, FINAL, SUB.

- **Ich lerne neue Wörter, um sie im Gespräch zu benutzen.** — فاعل واحد ich في التعلم والاستعمال؛ sie مفعول يعود إلى Wörter.
- **Die Lehrerin erklärt ein Beispiel, damit die Klasse es versteht.** — فاعلان Lehrerin/Klasse؛ es مفعول يعود إلى Beispiel، لا فاعل.
- **Wir üben, um sicherer zu sprechen.** — فاعل واحد wir في التمرين والغرض من الكلام.
- **Ich übe jeden Tag, damit ich sicherer spreche.** — فاعل واحد ich مع damit؛ الإضافة تمنع تعليم أن damit تعني دائمًا اختلاف الفاعل.

### DL-B1-04-T08

> **أ — P01: أربع جمل كتابية**
> 
> اكتب خطة خيالية من أربع جمل لتعلم مهارة حاسوبية: جملة تحدد المهارة؛ جملة عن دورة وهدفها باستخدام um … zu؛ جملة عن مراجعة وتمهيد للحصة التالية باستخدام um … zu مرة ثانية؛ وجملة عن أمثلة تقدمها جهة التدريس باستخدام damit مع فاعلين مختلفين. احفظ الفاصلة وترتيب المصدر والفعل المصرف. هذه مهمة كتابة فقط؛ لا شرط جهر أو تسجيل أو بيانات حقيقية أو تسجيل فعلي في دورة.
> 
> **ب — P02: أربعة أدوار مع الجهر**
> 
> اكتب حوارًا خياليًا من أربعة أدوار بين متعلم ومدرّبة: يذكر المتعلم دورة وهدفه الحاسوبي بـ um … zu؛ تقدم المدربة مهام عملية بـ damit لكي يتمكن المتعلم من التدرب؛ يسأل المتعلم متى يناقشان أسئلته؛ وتحدد المدربة غدًا بعد الدورة. اكتب الطرفين بنفسك ثم اقرأهما جهرًا دون شريك أو تسجيل. في damit اجعل المدربة فاعل التقديم والمتعلم فاعل التدرب، والمصرف أخيرًا.

**الحكم:** ثمانية مطالب محتوى في خطة من أربع جمل وحوار من أربعة أدوار؛ مهمتان مختلفتان لا إجابة مكررة.

**المراجع ذات الصلة:** INF, FINAL, SUB.

- **تحديد مهارة حاسوبية ضمن خطة خيالية من أربع جمل؛ كتابة فقط.** — P01.1: تحديد مهارة حاسوبية ضمن خطة خيالية من أربع جمل؛ كتابة فقط.
- **جملة دورة وهدف بـum … zu مع فاعل واحد.** — P01.2: جملة دورة وهدف بـ um … zu مع فاعل واحد.
- **مراجعة لغرض التحضير بـum … zu ثانية؛ المصدر المنفصل صحيح.** — P01.3: مراجعة لغرض التحضير بـ um … zu ثانية؛ المصدر المنفصل صحيح.
- **جهة تدريس تقدم أمثلة ليتعلم الشخص؛ damit بفاعلين مختلفين.** — P01.4: جهة تدريس تقدم أمثلة ليتعلم الشخص؛ damit بفاعلين مختلفين.
- **المتعلم يذكر دورة وهدفًا بـum … zu.** — P02.1: المتعلم يذكر دورة وهدفًا بـ um … zu.
- **المدربة تقدم تمرينًا لغرض تدرب المتعلم بـdamit مع فاعلين مختلفين.** — P02.2: المدربة تقدم تمرينًا لغرض تدرب المتعلم بـ damit مع فاعلين مختلفين.
- **سؤال المتعلم عن وقت مناقشة الأسئلة.** — P02.3: سؤال المتعلم عن وقت مناقشة الأسئلة.
- **جواب المدربة غدًا بعد الدورة؛ الطرفان مكتوبان ثم يقرأهما المتعلم جهرًا دون شريك أو تسجيل.** — P02.4: جواب المدربة غدًا بعد الدورة؛ الطرفان مكتوبان ثم يقرأهما المتعلم جهرًا دون شريك أو تسجيل.

### DL-B1-04-Q01

> ما معنى **der Lernstoff** في سياق الدورة؟

**الحكم:** der Lernstoff هو محتوى المادة التعليمية التي يراجعها المتعلم.

**المفتاح:** المادة التعليمية التي يدرسها المتعلم.

**الربط:** DL-B1-04-T01.

- ✓ **المادة التعليمية التي يدرسها المتعلم.** — الصحيح: المادة التعليمية هي Lernstoff.
- ✗ **الشهادة التي يحصل عليها في النهاية.** — هذه Zertifikat لا معنى المادة.
- ✗ **مجموعة من الزملاء للتعلّم.** — هذه Lerngruppe لا معنى Lernstoff.

### DL-B1-04-Q02

> أكمل بهدفٍ والفاعل واحد في الجملتين: **Ich lerne jeden Tag, ___ die Prüfung zu bestehen.**

**الحكم:** اكتب um فقط لأن zu موجودة مع bestehen، والفاعل المفهوم ich. damit جائزة مع الفاعل نفسه إذا أعدنا بناء الجملة: damit ich die Prüfung bestehe؛ لا تلائم الفراغ بالبنية الحالية.

**المفتاح:** um

**الربط:** DL-B1-04-T01.

- ✗ **damit** — damit تحتاج فاعلًا ومصرفًا فلا تلائم البنية الموجودة؛ ليست خاطئة دائمًا مع الفاعل نفسه.
- ✓ **um** — um صحيحة لأن zu موجودة مع bestehen والفاعل واحد.
- ✗ **weil** — weil للسبب وتحتاج تابعة مصرفة، لا الغرض والبنية الحالية.

### DL-B1-04-Q03

> أكمل مع وضع الفعل في نهاية جملة **damit**: **Die Plattform bietet Videos an, damit die Lernenden alles besser ___.** (verstehen können)

**الحكم:** فيتابعة damit يأتي المصرف können أخيرًا، ويسبقه المصدر verstehen: verstehen können، لا können verstehen. ترتيب المصدر والمصرف هو المقصود، لا أنه يتبع المصرف.

**المفتاح:** verstehen können

**الربط:** DL-B1-04-T02.

- ✗ **können verstehen** — können verstehen يعكس ترتيب المصدر قبل المصرف النهائي في هذه التابعة.
- ✗ **zu verstehen** — zu verstehen لا يوفر فعلًا مصرفًا للتابعة ذات الفاعل الصريح؛ المطلوب verstehen können، لا تركيب مصدر مع zu.
- ✓ **verstehen können** — verstehen können صحيحة؛ المصدر أولًا والمصرف können أخيرًا.

### DL-B1-04-Q04

> في الجملة **Die Lehrerin erklärt die Aufgabe, damit alle sie verstehen**، هل الفاعل واحد أم فاعلان مختلفان؟

**الحكم:** الفاعلان مختلفان: المعلمة تشرح، وجميع المتعلمين يفهمون؛ لذلك تلائمها جملة damit.

**المفتاح:** فاعلان مختلفان: die Lehrerin ثم alle.

**الربط:** DL-B1-04-T04, DL-B1-04-T07.

- ✗ **فاعل واحد: die Lehrerin في الجزأين.** — الفاعل الثاني alle لا die Lehrerin؛ sie مفعول في الجملة.
- ✓ **فاعلان مختلفان: die Lehrerin ثم alle.** — الصحيح: Lehrerin ثم alle؛ مرجع sie هو Aufgabe.
- ✗ **لا يوجد فاعل في جملة damit.** — damit لها فاعل صريح alle؛ حذف الفاعل في um لا ينطبق عليها.

### DL-B1-04-Q05

> Für welche Weiterbildung hat sich Farid angemeldet?

**الحكم:** تذكر القراءة تسجيل Farid في مجال الحساب/معالجة البيانات بالجداول الإلكترونية؛ لا اسم برنامج بعينه ولا إكمال الدورة أو حصوله على الشهادة.

**المفتاح:** Für Tabellenkalkulation.

**الربط:** DL-B1-04-T05.

- ✗ **Für Kommunikation.** — التواصل مجال الاستماع لا قراءة Farid.
- ✓ **Für Tabellenkalkulation.** — الجداول هي المجال المذكور، لا اسم برنامج محدد.
- ✗ **Für Bewegung und Fitness.** — اللياقة لم تُذكر وليست ترجمة Tabellenkalkulation.

### DL-B1-04-Q06

> Wann besucht Farid den Kurs?

**الحكم:** يحضر Farid الدورة مساءً: Er besucht den Kurs am Abend.

**المفتاح:** Am Abend.

**الربط:** DL-B1-04-T05.

- ✗ **Am Morgen.** — الصباح لقراءة مواد دورة التواصل لا حضور Farid.
- ✗ **Am Wochenende.** — نهاية الأسبوع لمراجعة المادة لا وقت الحضور.
- ✓ **Am Abend.** — المساء وقت الحضور في الجملة الثالثة.

### DL-B1-04-Q07

> Wozu gibt die Lehrkraft Beispiele?

**الحكم:** تقدّم جهة التدريس أمثلة بهدف تمكين المشاركين من التدريب العملي على الوظائف الجديدة. Lehrkraft قد تشير إلى معلم أو معلمة؛ لا يثبت التركيب تحقق الإتقان بالفعل.

**المفتاح:** Damit die Teilnehmenden die neuen Funktionen praktisch üben können.

**الربط:** DL-B1-04-T05.

- ✓ **Damit die Teilnehmenden die neuen Funktionen praktisch üben können.** — الصحيح: غرض تمكين المشاركين من التدريب، لا إثبات الإتقان.
- ✗ **Damit Farid den Kurs am Morgen besuchen kann.** — الأمثلة لا تغير وقت الحضور إلى الصباح؛ الحضور مساءً في النص.
- ✗ **Um die Lerngruppe aufzulösen.** — حل المجموعة ليس الغرض المذكور؛ لا نحكم باستحالة التركيب نحويًا في سياق آخر.

### DL-B1-04-Q08

> In welchem Bereich macht die Person eine Weiterbildung?

**الحكم:** المجال في الاستماع هو التواصل. جنس الشخص الراوي واسمه غير مذكورين؛ die Person مؤنث نحوي، ولا نخلطه بـ Farid في قراءة الجداول.

**المفتاح:** Im Bereich Kommunikation.

**الربط:** DL-B1-04-T06.

- ✗ **Im Bereich Tabellenkalkulation.** — مجال Farid في القراءة لا مجال الراوي في الاستماع.
- ✓ **Im Bereich Kommunikation.** — التواصل هو المذكور؛ لا اسم أو جنس صريح للراوي.
- ✗ **Im Bereich Gesundheit.** — الصحة لم تذكر في الاستماع.

### DL-B1-04-Q09

> Wann liest die Person die Kursunterlagen?

**الحكم:** يذكر الشخص الراوي قراءة مواد الدورة صباحًا استعدادًا للحصة؛ لا نخلطها بالحضور مساءً في قراءة Farid أو مجموعة التعلم الأسبوعية.

**المفتاح:** Am Morgen.

**الربط:** DL-B1-04-T06.

- ✓ **Am Morgen.** — الصباح ورد لقراءة مواد الدورة.
- ✗ **Am Abend.** — المساء في قراءة Farid للحضور، لا جواب هذا السؤال.
- ✗ **Einmal pro Woche.** — مرة أسبوعيًا للمجموعة لا وقت قراءة المواد.

### DL-B1-04-Q10

> Mit wem lernt die Person einmal pro Woche?

**الحكم:** مرة أسبوعيًا مع زميلتين في مجموعة تعلم. Kolleginnen تحدد أن الزميلتين امرأتان، لكنها لا تحدد جنس الراوي.

**المفتاح:** Mit zwei Kolleginnen in einer Lerngruppe.

**الربط:** DL-B1-04-T06.

- ✗ **Mit ihrer Trainerin.** — المدربة تشرح المصطلحات وليست عضوًا مذكورًا في المجموعة الأسبوعية.
- ✗ **Allein zu Hause.** — النص يذكر زميلتين، لا الدراسة وحيدًا في البيت؛ المكان غير مذكور أصلًا.
- ✓ **Mit zwei Kolleginnen in einer Lerngruppe.** — زميلتان في مجموعة كما في آخر جملة؛ لا افتراض لجنس الراوي.

### DL-B1-04-P01

> اكتب خطة خيالية من أربع جمل لتعلم مهارة حاسوبية: جملة تحدد المهارة؛ جملة عن دورة وهدفها باستخدام um … zu؛ جملة عن مراجعة وتمهيد للحصة التالية باستخدام um … zu مرة ثانية؛ وجملة عن أمثلة تقدمها جهة التدريس باستخدام damit مع فاعلين مختلفين. احفظ الفاصلة وترتيب المصدر والفعل المصرف. هذه مهمة كتابة فقط؛ لا شرط جهر أو تسجيل أو بيانات حقيقية أو تسجيل فعلي في دورة.

**الحكم:** المهمة ومعاييرها الثلاثة والنموذج والإقرار متطابقة؛ الحد الحرفي بوابة دليل، لا قياس مستوى أو نطق.

**المراجع ذات الصلة:** INF, FINAL, SUB.

**الربط:** DL-B1-04-T08.

- **taskCompletion: أربع جمل تتضمن المهارة ودورة وهدفها ومراجعة بهدف التحضير وأمثلة من جهة التدريس؛ كتابة فقط.** — أربع جمل بمحتوى مختلف، دون شرط جهر؛ النموذج يفي بالمطالب الأربعة.
- **meaningClarity: خطوات تعلم خيالية مترابطة وأهدافها واضحة؛ لا تستنتج إنجاز الهدف أو حصول شهادة من مجرد صيغة الغرض.** — يربط خطوات الدارس الخيالية بأهداف مفهومة، ولا يجعل الغرض دليل نجاح.
- **targetSkill: um … zu مرتان بفاعل مفهوم واحد، و damit بفاعلين مختلفين؛ فاصلة ومصدر مع zu ومصرف أخير، والمصدر قبل المصرف عند وجود فعل ناقص.** — مرتان um ومرة damit مع اختلاف الفاعل؛ الفاصلة و zu والمصرف صحيحة في النموذج، لكن الإقرار ليس تصحيحًا آليًا.

**الدليل:** حد 220 حرفًا؛ الجهر غير مطلوب؛ التسجيل غير مطلوب.

### DL-B1-04-P02

> اكتب حوارًا خياليًا من أربعة أدوار بين متعلم ومدرّبة: يذكر المتعلم دورة وهدفه الحاسوبي بـ um … zu؛ تقدم المدربة مهام عملية بـ damit لكي يتمكن المتعلم من التدرب؛ يسأل المتعلم متى يناقشان أسئلته؛ وتحدد المدربة غدًا بعد الدورة. اكتب الطرفين بنفسك ثم اقرأهما جهرًا دون شريك أو تسجيل. في damit اجعل المدربة فاعل التقديم والمتعلم فاعل التدرب، والمصرف أخيرًا.

**الحكم:** المهمة ومعاييرها الثلاثة والنموذج والإقرار متطابقة؛ الحد الحرفي بوابة دليل، لا قياس مستوى أو نطق.

**المراجع ذات الصلة:** INF, FINAL, SUB.

**الربط:** DL-B1-04-T08.

- **taskCompletion: أربعة أدوار تتضمن هدف المتعلم وتمرين المدربة وسؤال الوقت وجواب غدًا بعد الدورة؛ الجهر بالدورين.** — أربعة أدوار مع الجهر؛ النص وحده لا يكفي، ولا يلزم شريك أو تسجيل.
- **meaningClarity: غرض الدورة وعلاقة التمرين بتدرب المتعلم والخطوة التالية مفهومة، دون تكرار حكاية الاستماع أو ادعاءموعد حقيقي.** — الغرض والتمرين والوقت مفهومة؛ غدًا موعد خيالي لا مهمة تقويم حقيقية.
- **targetSkill: um … zu لهدف المتعلم، و damit مع فاعلين مختلفين لهدف التمرين؛ الفاصلة صحيحة والمصرف kannst بعد المصدرüben في نمط المثال.** — um لهدف المتعلم و damit لاختلاف الفاعل؛ üben قبل kannst في النموذج.

**الدليل:** حد 210 حرفًا؛ الجهر مطلوب؛ التسجيل غير مطلوب.

### plan-model-01

> Ich möchte meine Computerkenntnisse verbessern.

**الحكم:** أمنية تعلم مهارة حاسوبية لا تحققها مسبقًا؛ möchte في الرئيسية مقبولة.

**المراجع ذات الصلة:** INF, FINAL, SUB, SEP.


### plan-model-02

> Ich besuche einen Onlinekurs, um neue Funktionen zu lernen.

**الحكم:** دورة بهدف التعلم، و um … zu مع ich نفسه.

**المراجع ذات الصلة:** INF, FINAL, SUB, SEP.


### plan-model-03

> Ich wiederhole die Aufgaben, um mich auf den nächsten Unterricht vorzubereiten.

**الحكم:** مراجعة لغرض الاستعداد، و mich بحسب الشخص و zu داخل vorzubereiten.

**المراجع ذات الصلة:** INF, FINAL, SUB, SEP.


### plan-model-04

> Die Lehrkraft gibt mir Beispiele, damit ich die Funktionen selbstständig anwenden kann.

**الحكم:** جهة التدريس تعطي الأمثلة و ich يطبق؛ anwenden مصدر قبل kann المصرف.

**المراجع ذات الصلة:** INF, FINAL, SUB, SEP.


### coaching-model-01

> Lernender: Ich mache einen Onlinekurs, um meine Computerkenntnisse zu verbessern.

**الحكم:** المتعلم يحدد الدورة والهدف بـ um … zu؛ Computerkenntnisse تحفظ موضوع المهمة.

**المراجع ذات الصلة:** INF, FINAL, SUB, SEP.


### coaching-model-02

> Trainerin: Ich gebe dir praktische Aufgaben, damit du neue Funktionen üben kannst.

**الحكم:** المدربة تعطي والمتعلم يتدرب؛ du مع kannst والمصدر üben قبله.

**المراجع ذات الصلة:** INF, FINAL, SUB, SEP.


### coaching-model-03

> Lernender: Wann besprechen wir meine Fragen?

**الحكم:** سؤال Wann ثم المصرف besprechen و wir؛ طلب عملي لوقت الخطوة التالية.

**المراجع ذات الصلة:** INF, FINAL, SUB, SEP.


### coaching-model-04

> Trainerin: Wir besprechen sie morgen nach dem Kurs.

**الحكم:** الجواب غدًا بعد الدورة؛ sie ترجع إلى Fragen، لا جهة التدريس أو وقت قراءة Farid.

**المراجع ذات الصلة:** INF, FINAL, SUB, SEP.


### card-01

> - **Ich lerne, um mich weiterzubilden.** → أتعلم لكي أتابع تعليمي.

**الحكم:** فاعل واحد و mich مع weiterzubilden؛ مواصلة التعليم هدف.

**المراجع ذات الصلة:** INF, SEP.


### card-02

> - **… damit alle Teilnehmenden es verstehen.** → … لكي يفهمه جميع المشاركين.

**الحكم:** تابعة مقتطفة لا خبر مستقل؛ es إحالة محايدة تحتاج سياقًا، و alle فاعل جمع.

**المراجع ذات الصلة:** SUB.


### card-03

> - **die Weiterbildung** → التعليم المستمر.

**الحكم:** die Weiterbildung مؤنث: تعليم مستمر لا وثيقة.


### card-04

> - **das Zertifikat** → الشهادة.

**الحكم:** das Zertifikat محايد: شهادة بلا وعد اعتماد أو صدور عن التطبيق.

**المراجع ذات الصلة:** CERT.


### DL-B1-04-AUD-PHR-01

> مفردات التعلّم المستمر

**الحكم:** مطابقة التفريغ المكتوب ومراجع المصدر، لا استماع. ready حالة تاريخية محفوظة وليست اعتمادًا جديدًا؛ الأصوات والمسارات و MP3 لم تتغير.

- **Die Weiterbildung, die Weiterbildungen.** — اسم مؤنث، جمعه Weiterbildungen؛ تعليم أو تدريب مستمر لا وعد ترقية. يختلف مجال القراءة عن الاستماع.
- **Die Fähigkeit, die Fähigkeiten.** — اسم مؤنث، جمعه Fähigkeiten؛ مهارة أو قدرة، لا شهادة.
- **Die Kenntnis, die Kenntnisse.** — اسم مؤنث، جمعه Kenntnisse؛ معارف حاسوبية في السياق، و Computerkenntnisse كلمة مركبة لا اسم برنامج.
- **Die Plattform, die Plattformen.** — اسم مؤنث، جمعه Plattformen؛ منصة تعليمية، لا اسم خدمة أو تسجيل تجاري مطلوب.
- **Die Tabellenkalkulation.** — صُحح المعنى من برامج جمعًا إلى مجال الحساب بالجداول. جمع Tabellenkalkulationen صحيح ومكتوب فقط؛ التسجيل ينطق المفرد.
- **Die Kursunterlage, die Kursunterlagen.** — مفرد مؤنث Kursunterlage وجمع Kursunterlagen؛ مواد الدورة التي تُقرأ صباحًا، لا Notizen التي تراجع بعد الدورة.
- **Der Lernstoff.** — Lernstoff مذكر، مادة يدرسها المتعلم، لا شهادة أو مجموعة. الشرطة تعني عدم تقديم جمع في هذا السياق، لا استحالة كل استعمال جمع.
- **Das Lernziel, die Lernziele.** — Lernziel محايد وجمعه Lernziele؛ الهدف المقصود، لا دليل نجاح فيه.
- **Das Zertifikat, die Zertifikate.** — Zertifikat محايد وجمعه Zertifikate؛ الشهادة مشروطة بالمشاركة المنتظمة في القصة، لا مستلمة بالفعل أو رسمية بالضرورة.
- **Die Teilnahme.** — Teilnahme اسم مؤنث بمعنى المشاركة؛ لا جمع مدرّس هنا، ولا مساواة بين التسجيل والمشاركة المنتظمة.
- **Die Voraussetzung, die Voraussetzungen.** — Voraussetzung مؤنث وجمعه Voraussetzungen؛ شرط مسبق، ورابط wenn في نص الشهادة يحدد شرطًا لا غرضًا.
- **Sich anmelden für.** — sich anmelden für انعكاسي، و meldet sich an تصريف منفصل؛ Kurs بعد für بالنصب. مثال Duden يستعمل zu، فلا ننسب إليه توثيق für حرفيًا.
- **Wiederholen.** — wiederholen هنا مراجعة أو تكرار، غير منفصل، لا wieder holen بمعنى جلب من جديد؛ يرتبط بالمادة في القراءة وبالملاحظات في الاستماع.
- **Selbstständig.** — selbstständig صفة أو حال تعني بصورة مستقلة هنا، لا عملًا حرًا أو إتقانًا مثبتًا. selbstständiger في الحوار درجة مقارنة مقصودة.
- **Die Lerngruppe, die Lerngruppen.** — Lerngruppe مؤنث وجمعه Lerngruppen؛ مجموعة دراسة، لا مؤسسة معينة. أعضاؤها في الاستماع زميلتان مع الراوي.

### DL-B1-04-AUD-MODEL-01

> أمثلة الغاية بـum … zu وdamit

**الحكم:** مطابقة التفريغ المكتوب ومراجع المصدر، لا استماع. ready حالة تاريخية محفوظة وليست اعتمادًا جديدًا؛ الأصوات والمسارات و MP3 لم تتغير.

- **Ich mache einen Onlinekurs, um meine Kenntnisse zu erweitern.** — ich واحد في النشاط والهدف؛ المصدر erweitern مع zu والفاصلة بعد الرئيسية. توسيع المعارف غرض لا إنجاز مثبت.
- **Sie wiederholt den Lernstoff, um sich auf die Prüfung vorzubereiten.** — sie فاعل المراجعة والتحضير نفسه، و sich انعكاسي للغائب؛ zu داخل vorzubereiten. لا ادعاء نجاح الامتحان.
- **Der Kurs bietet Übungen an, damit die Teilnehmenden selbstständig lernen können.** — Der Kurs مقابل die Teilnehmenden؛ an منفصلة في bietet ... an. lernen مصدر قبل können المصرف؛ إتاحة التعلم لا إثباته.
- **Die Lehrerin erklärt die Aufgabe, damit alle sie verstehen.** — Die Lehrerin تشرح و alle فاعل الفهم؛ sie مفعول يعود إلى die Aufgabe، لا المعلمة. verstehen مصرف جمع وإن طابق شكل المصدر.
- **Wir bilden eine Lerngruppe, um schwierige Themen gemeinsam zu besprechen.** — Wir نفسه في بناء المجموعة ومناقشتها؛ besprechen غير منفصل و zu قبله. الجملة المسجلة أضيفت حرفيًا، وليست آخر الحوار الذي يبدأ ich.

### DL-B1-04-AUD-DLG-01

> حوار: Nadia وFarid عن دورة مهنية

**الحكم:** مطابقة التفريغ المكتوب ومراجع المصدر، لا استماع. ready حالة تاريخية محفوظة وليست اعتمادًا جديدًا؛ الأصوات والمسارات و MP3 لم تتغير.

- **Warum hast du dich für den Onlinekurs angemeldet?** — Nadia تسأل سبب التسجيل الماضي: Perfekt مع hast ... angemeldet انعكاسي، وليس إكمال الدورة.
- **Ich möchte meine Computerkenntnisse erweitern, um bei der Arbeit selbstständiger zu werden.** — Farid يريد توسيع معارفه ليصبح أكثر استقلالية؛ ich نفسه في الغرض، ولا نجاح مهني مثبت.
- **Gibt es Übungen?** — Gibt es سؤال عن وجود التمارين، لا نوعها أو عددها.
- **Ja. Die Lehrerin stellt kurze Aufgaben bereit, damit wir den Lernstoff regelmäßig wiederholen können.** — Lehrerin تقدم مهام قصيرة لتكرار المادة؛ هي مقابل wir. wiederholen مصدر قبل können؛ Ja جملة جواب داخل الدور لا دور صوتي مستقل.
- **Lernst du allein?** — Lernst du allein سؤال عن طريقة الدراسة، لا رأي سلبي في المجموعة.
- **Meistens. Manchmal treffe ich mich mit einer Lerngruppe, damit wir schwierige Themen gemeinsam besprechen.** — Meistens وحيدًا و Manchmal جماعيًا؛ ich غير wir ولو شملته المجموعة. besprechen مصرف جمع؛ لا ادعاء أن كل الدراسة جماعية أو في وقت محدد.

### DL-B1-04-AUD-READ-01

> قراءة: تدريب Farid على الجداول الحسابية

**الحكم:** مطابقة التفريغ المكتوب ومراجع المصدر، لا استماع. ready حالة تاريخية محفوظة وليست اعتمادًا جديدًا؛ الأصوات والمسارات و MP3 لم تتغير.

- **Farid arbeitet in einem kleinen Betrieb.** — Farid يعمل في منشأة صغيرة؛ لا اسم شركة أو دولة أو جنس مدرس في الجملة.
- **Er hat sich für eine Weiterbildung im Bereich Tabellenkalkulation angemeldet.** — سجّل في تدريب الجداول، لا التواصل؛ التسجيل الماضي لا يضمن الإكمال أو الشهادة.
- **Er besucht den Kurs am Abend, um seine Kenntnisse zu verbessern.** — الحضور مساءً لتحسين المعارف؛ الفاعل واحد، والتحسين هدف لا نتيجة مثبتة.
- **Die Lehrkraft gibt Beispiele, damit die Teilnehmenden die neuen Funktionen praktisch üben können.** — Lehrkraft لا يحدد جنس المدرس؛ الأمثلة لغرض الممارسة، والمصدر üben قبل können المصرف.
- **Farid wiederholt den Lernstoff am Wochenende, um sich auf die Abschlussaufgabe vorzubereiten.** — المراجعة نهاية الأسبوع للتحضير لمهمة ختامية، لا امتحان نجح فيه؛ مصدر انعكاسي بـ sich و vorzubereiten.
- **Am Ende erhalten die Teilnehmenden ein Zertifikat, wenn sie regelmäßig am Kurs teilnehmen.** — الشهادة في النهاية مشروطة بالمشاركة المنتظمة؛ لا إثبات لتسلم Farid لها، ولا اعتماد عام أو شرط صادر عن التطبيق.

### DL-B1-04-AUD-LST-01

> استماع: خطة تعلّم في مجال التواصل

**الحكم:** مطابقة التفريغ المكتوب ومراجع المصدر، لا استماع. ready حالة تاريخية محفوظة وليست اعتمادًا جديدًا؛ الأصوات والمسارات و MP3 لم تتغير.

- **Ich mache eine Weiterbildung im Bereich Kommunikation.** — التدريب في التواصل؛ لا اسم للراوي ولا استدلال بالصوت على جنسه.
- **Ich lese die Kursunterlagen am Morgen, um mich auf den Unterricht vorzubereiten.** — قراءة المواد صباحًا للاستعداد؛ mich للمتكلم و vorzubereiten منفصل مع zu. لا صلة بمساء Farid.
- **Unsere Trainerin erklärt neue Begriffe langsam, damit alle Teilnehmenden sie verstehen.** — Trainerin مؤنثة في المعنى، والشرح البطيء لغرض الفهم. sie تعود إلى Begriffe؛ verstehen مصرف جمع فقط، بلا können.
- **Nach dem Kurs wiederhole ich die Notizen, um die wichtigsten Punkte zu behalten.** — مراجعة الملاحظات بعد الدورة بغرض الاحتفاظ بالنقاط؛ behalten غير منفصل و zu قبله، وليس دليلًا على تذكر فعلي.
- **Einmal pro Woche lerne ich mit zwei Kolleginnen in einer Lerngruppe.** — مرة أسبوعيًا مع زميلتين في مجموعة؛ لا اسم أو مكان أو يوم محدد. جنس الزميلتين لا يثبت جنس الراوي.

## البصمات

تُراجع آليًا في ملف JSON المرافق، مع بصمتي المصدر والتقييم ولقطات الأصول الصوتية الخمسة. لا تعادل مراجعة سمعية أو ضمان جودة لغوية.
