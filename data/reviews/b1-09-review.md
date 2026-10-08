# CR39 — مراجعة B1.9 الفردية والتراكمية

**أحدث مراجعة محتوى CR39 — 2026-10-08:** رُوجع **B1.9 — السفر والنقل والبيئة: bevor/nachdem/während** في **110 وحدات و42 بندًا داخل التمارين، و30 خيارًا و6 معايير**، بمساعدة **11 صفحة مرجعية كاملة**. قُيد ترتيب T02 وأزمنة T03/T04/T07 وQ04/Q06، وصار T06 فراغات ألمانية بمفتاح مطابق دون تكرار ist؛ أزيل افتراض جنس الراوي. فُصلت während + Genitiv عن التابعة، ورحلة المواصلة عن التبديل والتأخير والإلغاء، ورغبة مراعاة المناخ عن برهان بيئي. **P01 خمس جمل كتابة فقط؛ P02 ست جمل كتابة وجهر**، بمصدر ومعايير ونموذجين متطابقة. الخيارات والفهارس والروابط و80% وحدا130/145 محفوظة. `b1-09-v2` و`v88`؛ خمسة أصول/10 مقاطع معلقة ثابتة ومتاحة دون استماع أو توليد أو اعتماد. **الحملة38/53 درسًا والبوابة منفصلة؛ تبقى15، والتالي CR40/B1.10.** مراجعة وفحوص مرفوعة على الفرع، لا دمج أو شهادة مستوى أو اكتمال المشروع.

**التنفيذ الأول:** `fa03a2a87698306e14538461f67250d346327c74`، **ملحق الاتساق:** `ed115027a205d2eb57e801841d85d163b5d3e16f`، كلاهما مرفوع ومتطابق HEAD/origin على `arena/01a1036f-deutschlern`. هذه مجموعة السجل والفحوص ترفع فور فحصها بعنوان `Record CR39 granular B1.9 review and cumulative checks`؛ يليها إيصال SHA والنشر. لم تدمج PR#1.

## التصحيحات والمنهج

- T02 يقيد السابق والمتزامن بدل فراغات متعددة التأويل. T03 يطلب التصريف والحاضر وLena المفردة، وQ04 يحدد الحاضر صراحة.
- T04.1 وT07.2 وQ06 تطلب Perfekt مع nachdem والرئيسية بالحاضر؛ الخيار الحاضر في Q06 لا يحقق شرط السؤال، لا أنه مستحيل في كل سياق. T07.4 يدرب Plusquamperfekt مع الماضي.
- T06 بنك ألماني وفراغات ألمانية؛ fällt/aus حول الفاعل، وkurz وحدها لأن ist موجودة. Q10 والشروح لا تفترض جنس راوي Ich.
- T01.5 يدعم Verspätung/Q02، وT05.6 يدعم دافع المجموعة/Q08. الثلاثون خيارًا والفهارس وروابط الأسئلة والمهمات و80% ثابتة.
- أثناء + اسم Genitiv لا تتبع قاعدة المصرف في نهاية التابعة؛ أضيف المثال المسجل Während der Zugfahrt إلى الشرح دون تغيير التسجيل. التقديم في الرئيسية وحدة نحوية لا كلمة واحدة.
- P01/T08أ خمس جمل كتابة فقط، وP02/T06/T08ب ست جمل كتابة وجهر؛ المصدر والمعايير والنموذجان متطابقة. لا شريك أو تسجيل أو سفر فعلي ولا تصحيح آلي لعدد الجمل.
- Anschluss رحلة مواصلة لا سلك توصيل؛ Umstieg قد يكون بين قطارين. klimafreundlich خاصة بالمناخ؛ شرح Q08 يضيق عبارة «صديقة للبيئة» في الخيار إلى مقصد النص، لا شهادة بيئية أو تفوق عام لكل قطار.
- الحوار اقتراح، والقراءة تفصل أنشطة Zeynep وأصدقائها، والاستماع لا يعطي جواب ضرورة التبديل أو الطريق من المنزل إلى المحطة. البديلان في P02 افتراض تدريب صريح لا جدول نقل مخترع بوصفه حقيقة.

## الفحوص التراكمية — CR39

- **PASS:** build/verify و39 حارس مراجعة وخمس مجموعات Node: progression/service_worker/daily_plan/session_persistence/study_time، وnode --check وgit diff. الحزمة **2,106,695 بايت**؛53 درسًا،428 عنوان تمرين،61 قسم حوار،754 مفردة،530 سؤال درس+10 بوابة،109 مهمات،1080 صف catalog،217 أصلًا/474 مقطعًا،137ready و80 معلقة.
- **المتصفح:** Chromium143.0.7499.0، Playwright1.58.2، axe4.11.0. نجحت المجموعات الخمس browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout. فحص1440×900 و390×844 شمل RTL والقفل والتفريغات وتشغيلMP3 آليًا بسرعتي1 و0.8 والتوقف عند الانتقال، دون أخطاء صفحة في الاختبار العام.
- **دون اتصال والتحديث:** إعادة التحميل والتنقل والصوت الكامل ونطاقات البايت/اللاحقة و416/503؛ تحديث fixture v42 إلى **v88** دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن وإعادة تخزين الصوت عند الاتصال. لا ضمان لبقاء كل الملفات أو اختبار لجميع الترقيات التاريخية.
- **الدليل والتدرّج:** سجل B1.9-v1 محفوظ لكنه لا يمنح إتقان v2 أو يفتح B1.10، والمسودة القديمة مرفوضة. الدرجة والدليل الحاليان يفتحان التالي، وحذف الدليل يغلقه. P01 دون مربع جهر وP02 تتطلبه؛ ثلاثة إقرارات وحدا130/145، ونموذجا284/338 حرفًا. لا تصحيح آلي للجمل أو اللغة أو النطق.
- **axe:**169 حالة ممثلة، منها مصدر B1.9 ومهمتاه بالعرضين؛ **صفر مخالفات للقواعد المختارة**، مع **119 ظهورًا غير حاسم تشمل275 ظهورًا لعقد**. ليست شهادةWCAG ولا مخالفات مؤكدة، ولا مراجع بشري شرطًا للاستمرار.
- **العرض الضيق:**126 حالة،63 لكل من320×900 و568×320، تشمل53 درسًا بتفريغاتها وجداولها والقائمة. ليست هواتف فعلية أو تكبيرًا أصليًا.
- **التعثر والحدود:** فشل استدعاء Chromium --version أولًا لغياب libnspr4.so؛ استخرجت مكتبات al2023 المرفقة وضبطت LD_LIBRARY_PATH، ثم نجحت مجموعات المتصفح الخمس من أول تنفيذ كامل. لا تعديل للتطبيق أو لاختبار forms_keyboard بسبب ذلك؛ نجاح اختيار الملف الأصلي بالعرضين لا يصلح تذبذبه التاريخي أو يثبت سببه.
- **الصوت والنشر:** مطابقة نصية وفحصMP3 وتشغيل آلي صامت لا استماع أو اعتماد. نشر التنفيذ الأخير **ed11502 فشل** لحدVercel اليومي بحسبSHA الصريح، وdeployments=[]؛ PR#1OPEN وغير مدمجة. لا اختبار للواجهة البعيدة أوProduction، ولا إعادة نشر متكررة أو ترقية مدفوعة.

## الحفظ وحدود المراجعة

مقارنة بالأساس `e0727a6e5e81bf5dfc91e19eba6b066f42bc503b`:52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة؛ أربعة صفوف B1.9 تغير فيها source_line فقط وPHR ثابت. حُفظت590 ملفًا تشمل474MP3، وplaylist مطابقة بالبايت. خمسة أصول/10 مقاطع بأصوات Mina02/Karim03، والمفردات/النماذج/القراءة02 والاستماع03؛ جميعها generated_pending_acoustic_review وtranscriptPolicy=offer، دون إخفاء أو تغيير روابط. النماذج الجديدة284/338 حرفًا مكتوبة غير مسجلة.

- مراجعة نصية مصدرية بالذكاء الاصطناعي، لا شهادة CEFR أو WCAG أو قياس تعلّم فعلي؛ لا مراجع بشري شرطًا للاستمرار.
- 11 صفحة كاملة بالنطاق المعاد من أداة الجلب، لا ملفات PDF أو صوت أو روابط تابعة. الدليل المعجمي المباشر للفظ محصور في مراجع وحدته؛ سائر الألفاظ مراجعة لغوية داخلية.
- لا استماع أو توليد أو اعتماد صوتي جديد؛ تشغيل المتصفح الآلي الصامت لا مراجعة سمعية، وكل أصول B1.9 ما زالت معلقة ومتاحة.
- 169 حالةaxe وصفر مخالفات للقواعد المختارة، لكن119 ظهورًا غير حاسم تشمل275 ظهورًا لعقد؛ ليست مخالفات مثبتة ولا نجاحWCAG كاملًا.
- اختبارات CSS ليست هواتف فعلية أو تكبيرًا أصليًا؛ fixture v42 إلىv88 ليس جميع الترقيات التاريخية أو Production.
- الطول والإقرارات والجهر لا تقيس صحة اللغة أو النطق أو عدد الجمل أو ملاءمة سفر حقيقي؛ أمثلة خطط خيالية دون تحليل انبعاثات.
- فشل نشر التنفيذed11502 لحدVercel اليومي؛ لا إعادة نشر متكررة أو ترقية مدفوعة، ولا ادعاء اختبار الواجهة البعيدة أو الدمج.

## المراجع ونطاق القراءة

- **BEFORE — Duden — bevor** [BEFORE](https://www.duden.de/rechtschreibung/bevor): في الاستعمال الزمني يحدث فعل الرئيسية قبل فعل التابعة؛ أمثلة الفاصلة والمصرف الأخير. لا يشمل هذا الشرح الاستعمالات الشرطية السالبة الأخرى. **قرئت كاملة**؛ الجزء0 من1 بتاريخ2026-10-08.
- **AFTER — Duden — nachdem** [AFTER](https://www.duden.de/rechtschreibung/nachdem): الحدث السابق المكتمل في التابعة، ومثال Plusquamperfekt قبل حدث ماضٍ. ليست مرادفًا لامتداد منذ زمن؛ الاستخدام السببي الإقليمي خارج الدرس. **قرئت كاملة**؛ الجزء0 من1 بتاريخ2026-10-08.
- **PERF — Lingolia — Perfekt** [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt): الاكتمال والنتيجة، وإمكان اكتمال نسبي مستقبلي مع سياق واضح؛ sein/haben في الحاضر وPartizip II، وأفعال الحركة وتشكيل angekommen. لا يفرض Perfekt في كل جملة nachdem. **قرئت كاملة**؛ الجزء0 من1 بتاريخ2026-10-08.
- **PQP — Lingolia — Plusquamperfekt** [PQP](https://deutsch.lingolia.com/de/grammatik/zeitformen/plusquamperfekt): حدث أسبق من مرجع ماضٍ، war/hatte مع Partizip II. مثال angekommen war قبل suchten، لا نفس زمن arrived في كل سياق. **قرئت كاملة**؛ الجزء0 من1 بتاريخ2026-10-08.
- **SEP — Lingolia — Trennbare und untrennbare Verben** [SEP](https://deutsch.lingolia.com/de/grammatik/verben/trennbare): بادئات ab/an/aus/ein/los، فصلها في رئيسية محددة وإدخال ge في Partizip؛ لا تعميم على كل um أو على التابعة. **قرئت كاملة**؛ الجزء0 من1 بتاريخ2026-10-08.
- **CLIMATE — Duden — klimafreundlich** [CLIMATE](https://www.duden.de/rechtschreibung/klimafreundlich): تعلق الصفة بأثر قليل أو غير ضار على المناخ وتطوره؛ ليس مرجعًا لمقارنة انبعاثات طرق السفر أو ضمانًا بيئيًا شاملاً. **قرئت كاملة**؛ الجزء0 من1 بتاريخ2026-10-08.
- **PREP — Lingolia — Temporale Präpositionen** [PREP](https://deutsch.lingolia.com/de/grammatik/praepositionen/temporal): während مع Genitiv اسم الفترة، مقابل الجملة التابعة؛ vor/nach مع Dativ في العبارات الاسمية لا مع جملة كاملة. **قرئت كاملة**؛ الجزء0 من1 بتاريخ2026-10-08.
- **ADV — Lingolia — Adverbialsätze** [ADV](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/adverbialsaetze): تصنيف الظروف الزمنية وbevor/nachdem ومثال Bevor wir sie besuchen, müssen wir ...؛ الصفحة وحدها لا تشرح während، لذا استكمل المرجع التالي. **قرئت كاملة**؛ الجزء0 من1 بتاريخ2026-10-08.
- **CONNECT — Duden — Anschluss** [CONNECT](https://www.duden.de/rechtschreibung/Anschluss): المذكر والجمع Anschlüsse، ومعنى وسيلة/رحلة مواصلة في السفر؛ ليست كل معاني الربط الشبكي أو الاجتماعي مرادفة لهذا السياق. **قرئت كاملة**؛ الجزء0 من1 بتاريخ2026-10-08.
- **DELAY — Duden — Verspätung** [DELAY](https://www.duden.de/rechtschreibung/Verspaetung): المؤنث والجمع Verspätungen، والتأخر عن الوقت المتوقع؛ التأخر ليس إلغاءً في سياق الدرس. **قرئت كاملة**؛ الجزء0 من1 بتاريخ2026-10-08.
- **CLAUSE — Lingolia — Konjunktionalsätze** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze): المصرف آخر التابعة، والتابعة المتقدمة وحدة أولى يليها مصرف الرئيسية. أمثلة أثناء الزمنية ومقابلتها بالمعنى التضادي؛ مثال nachdem ... ein Zimmer hat يبين أن رفض المضارع على إطلاقه غير صحيح. **قرئت كاملة**؛ الجزء0 من1 بتاريخ2026-10-08.

**مستبعد:** https://www.duden.de/rechtschreibung/waehrend_Konjunktion — صفحة غير موجودة وليست مرجعًا. لم تقرأ ملفاتPDF أو الدراسات أو الصوت أو الصفحات المرتبطة تلقائيًا. كل مرجع يدعم نطاقه المذكور فقط؛ لا يثبت وقائع الرحلات الخيالية.

## الوحدات الفردية — 110 وحدات

التقسيم:7 نطاقات،16 صف مفردات،6 أمثلة مسجلة،10 مساعدات،6 أدوار حوار،8 جمل قراءة و7 أسئلة،5 جمل استماع و5 أسئلة،8 تمارين،10 أسئلة تقييم،مهمتا أداء،11 جملة نموذج،4 بطاقات،5 أصول صوت. بنود التمارين42 بتوزيع5/4/4/3/6/5/4/11، ليست42 وحدة إضافية ضمن110؛ T08 مفصل إلى مطالب النموذجين5+6. PHR فيه17 وحدة نطق مقابل16 صفًا لأن الصفتين منفصلتان. تكرار النص ضمن الأصل الصوتي فحص مطابقة مستقل، لا ادعاء محتوى جديد.

### scope-01

**المدة المقترحة:** 40–45 دقيقة، ويمكن تقسيم العمل · **المهارات:** قراءة، استماع اختياري، تخطيط رحلة، قواعد، كتابة وجهر

**نتيجة المراجعة:** 40–45 دقيقة تقدير قابل للتقسيم، لا قياس تعلّم؛ القراءة والجهر متميزان والاستماع المسجل غير لازم لنجاح التقييم.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### scope-02

**الهدف:** أستطيع أن أصف ترتيب أحداث رحلة باستخدام **bevor** و**nachdem** و**während**، وأتحدث عن خيارات النقل.

**نتيجة المراجعة:** الهدف وصف تسلسل وبدائل نقل؛ تدربه روابط زمنية ونصوص ومهمتان خياليتان، لا إثبات كفاية B1 مستقلة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### scope-03

تنبيه مفردات: klimafreundlich يتعلق بالأثر على المناخ، لا شهادة شاملة لكل جوانب البيئة. الشرطة في الجدول تقيد ما ندرسه هنا ولا تنفي كل جمع في كل سياق. وUmstieg انتقال بين مركبتين، وقد يكون من قطار إلى قطار؛ لا يشترط تغيير نوع الوسيلة. هذه توضيحات مكتوبة لا تعديل للتسجيل.

**نتيجة المراجعة:** ضُيق klimafreundlich إلى المناخ ووُضح Umstieg بين مركبتين ولو من النوع نفسه؛ الشرطة تقيد الجمع الذي ندرسه، لا قاعدة معجمية عامة.


**مصادر القاعدة/المعنى:** [CLIMATE](https://www.duden.de/rechtschreibung/klimafreundlich)

### scope-04

حين تستعمل الروابط الثلاثة هنا لربط جملة زمنية تابعة، يأتي المصرف في نهايتها وتفصلها فاصلة عن الرئيسية. هذا لا يشمل أثناء + اسم: während der Zugfahrt ليست جملة تابعة، كما يوضح المثال أدناه.

**نتيجة المراجعة:** نهاية المصرف والفاصلة تخصان جملة زمنية تابعة؛ أثناء الرحلة بGenitiv ليست جملة ولا تعطي فاصلة وحدها.


**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze), [PREP](https://deutsch.lingolia.com/de/grammatik/praepositionen/temporal)

### scope-05

بعد **nachdem** نذكر الحدث الذي اكتمل أولًا. في أمثلة الحاضر أو المستقبل يمكن أن نستخدم Perfekt في الجملة التابعة: **Nachdem wir die Fahrkarten gekauft haben, fahren wir zum Bahnhof.** وفي سرد الماضي قد يظهر Plusquamperfekt للحدث الأسبق: **Nachdem der Zug angekommen war, suchten wir den Anschluss.**

**نتيجة المراجعة:** النمط المستهدف اكتمال سابق بالنسبة للحاضر/الخطة مع Perfekt، وبالنسبة للماضي مع Plusquamperfekt؛ الصياغة إمكان مقيد لا حظر لكل حاضر.


**مصادر القاعدة/المعنى:** [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [PQP](https://deutsch.lingolia.com/de/grammatik/zeitformen/plusquamperfekt)

### scope-06

دليل التطبيق: P01 كتابة فقط بحد 130 حرفًا؛ P02 كتابة وجهر بحد 145 حرفًا؛ لكل منهما الإقرارات الثلاثة. لا تصحيح آلي لعدد الجمل أو الروابط.

**نتيجة المراجعة:** حُسم تعارض الشفهي الاختياري سابقًا مع حقول التطبيق: P01 نص فقط وP02 نص ثم جهر؛ العتبتان والإقرارات لا تفحص عدد الجمل أو جودتها آليًا.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### scope-07

النموذجان مكتوبان خياليان وغير مسجلين. Anschlussbus حافلة مواصلة؛ لا يُطلب استخدام اللفظ نفسه إذا بقي الاتصال واضحًا. قراءة الخريطة تقع أثناء انتظار الحافلة بعد الوصول في P01؛ وفي P02 البدائل افتراض تدريب لا ضمان خدمة متاحة.

**نتيجة المراجعة:** النموذجان مكتوبان لا تسجيلان؛ في P01 الانتظار بعد الوصول، وفي P02 البديلان فرضية معلنة لا جدول سفر استنتجناه.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### vocab-01

| der Fahrplan | die Fahrpläne | جدول المواعيد |

**نتيجة المراجعة:** der Fahrplan مذكر، Fahrpläne جمع بأوملاوت؛ جدول مواعيد لا تذكرة. مراجعة لغوية داخلية، لا مدخل معجمي مستقل مجلوب.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### vocab-02

| die Abfahrt | die Abfahrten | المغادرة |

**نتيجة المراجعة:** die Abfahrt مؤنث، Abfahrten؛ حدث المغادرة ويمكن أن يعنون وقتها في جدول، لا نساويه دائمًا بساعة رقمية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### vocab-03

| die Ankunft | die Ankünfte | الوصول |

**نتيجة المراجعة:** die Ankunft مؤنث، Ankünfte بأوملاوت؛ الوصول لا وقت المغادرة ولا إلغاء الرحلة. صيغ T01 أوضحت الحدث.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### vocab-04

| der Anschluss | die Anschlüsse | رحلة مواصلة / اتصال برحلة تالية |

**نتيجة المراجعة:** Anschluss مذكر وجمعه Anschlüsse؛ تغيرت الترجمة إلى رحلة مواصلة لتجنب معنى خط التوصيل المادي. ليس نفس عملية Umstieg.


**مصادر القاعدة/المعنى:** [CONNECT](https://www.duden.de/rechtschreibung/Anschluss)

### vocab-05

| der Umstieg | die Umstiege | انتقال إلى مركبة أخرى |

**نتيجة المراجعة:** Umstieg مذكر وجمعه Umstiege؛ الانتقال بين مركبتين وقد تكونان قطارين. صححت العربية دون تغيير الملف المنطوق.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### vocab-06

| die Verspätung | die Verspätungen | التأخير |

**نتيجة المراجعة:** Verspätung مؤنث، Verspätungen؛ التأخير لا مجرد الوصول ولا الإلغاء. أضيف T01.5 لدعم Q02 مباشرة.


**مصادر القاعدة/المعنى:** [DELAY](https://www.duden.de/rechtschreibung/Verspaetung)

### vocab-07

| die Strecke | die Strecken | المسار / المسافة |

**نتيجة المراجعة:** Strecke مؤنث، Strecken؛ مسار/مسافة بحسب السياق، ولا تعني القصيرة وحدها أن كل الرحلة قصيرة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### vocab-08

| das Verkehrsmittel | die Verkehrsmittel | وسيلة النقل |

**نتيجة المراجعة:** Verkehrsmittel محايد وجمعه دون تغيير الاسم؛ الأداة die تميز جمع الجدول عن das للمفرد.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### vocab-09

| der Nahverkehr | — | النقل المحلي |

**نتيجة المراجعة:** Nahverkehr مذكر ونقل محلي في هذا السياق؛ لا يحدد وحده حافلة أو ترامًا ولا كل جزئية طريق المتحف.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### vocab-10

| die Fahrkarte | die Fahrkarten | بطاقة السفر |

**نتيجة المراجعة:** Fahrkarte مؤنث وجمعه Fahrkarten؛ بطاقة/تذكرة سفر. لا يتضمن اللفظ ضمان إدراك الاتصال.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### vocab-11

| die Umwelt | — | البيئة |

**نتيجة المراجعة:** Umwelt مؤنث ومعناه البيئة؛ الشرطة نطاق الجدول وليست نفيًا لكل استعمال جمع، ولا نسوي البيئة بالمناخ دائمًا.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### vocab-12

| die Emission | die Emissionen | انبعاث |

**نتيجة المراجعة:** Emission مؤنث، Emissionen؛ انبعاث، لكن النص لا يعطي مقادير ولا حكمًا حسابيًا على وسائل النقل.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### vocab-13

| umsteigen | steigt um | يبدّل المركبة أو وسيلة النقل |

**نتيجة المراجعة:** umsteigen في المثال steigt um؛ فعل منفصل هنا، وفي التابعة مع modal يظهر umsteigen قبل muss. لا تعميم على كل أفعال um.


**مصادر القاعدة/المعنى:** [SEP](https://deutsch.lingolia.com/de/grammatik/verben/trennbare), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### vocab-14

| ausfallen | fällt aus | يُلغى / يتوقف عن العمل |

**نتيجة المراجعة:** ausfallen في المثال fällt aus، لا fällt ein؛ الإلغاء/عدم التشغيل في السفر يختلف عن Verspätung. الدلالة الأخرى خارج التركيز.


**مصادر القاعدة/المعنى:** [SEP](https://deutsch.lingolia.com/de/grammatik/verben/trennbare)

### vocab-15

| sich verspäten | verspätet sich | يتأخر |

**نتيجة المراجعة:** sich verspäten انعكاسي؛ verspätet sich مع شخص ثالث. التأخر لا يتحول تلقائيًا إلى إلغاء.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### vocab-16

| klimafreundlich / pünktlich | — | مراعٍ للمناخ / ملتزم بالوقت |

**نتيجة المراجعة:** الصف يجمع صفتين لا مترادفتين: klimafreundlich مراعٍ للمناخ، pünktlich ملتزم بالموعد. التسجيل ينطقهما وحدتين مستقلتين.


**مصادر القاعدة/المعنى:** [CLIMATE](https://www.duden.de/rechtschreibung/klimafreundlich)

### grammar-01

Bevor wir losfahren, prüfen wir den Fahrplan.

**نتيجة المراجعة:** فحص الجدول قبل الانطلاق؛ losfahren آخر التابعة وprüfen بعد الفاصلة ثم wir، مع حاضر جمع.


**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### grammar-02

Während ich auf den Anschluss warte, lese ich die Nachrichten.

**نتيجة المراجعة:** القراءة متزامنة مع الانتظار؛ auf den Anschluss مفعول ينتظر اتصال السفر، warte آخر التابعة وlese أول الرئيسية بعدها.


**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze), [CONNECT](https://www.duden.de/rechtschreibung/Anschluss)

### grammar-03

Nachdem wir angekommen sind, nehmen wir den Bus zur Unterkunft.

**نتيجة المراجعة:** الوصول مكتمل نسبيًا قبل ركوب الحافلة؛ angekommen sind مع wir ثم nehmen، لا ادعاء سفر حدث فعلاً.


**مصادر القاعدة/المعنى:** [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### grammar-04

Nachdem wir die Fahrkarten gekauft haben, fahren wir zum Bahnhof.

**نتيجة المراجعة:** شراء التذاكر بـhaben قبل الذهاب إلى المحطة في الخطة؛ الإكمال النسبي سبب اختيار Perfekt في تمريننا، لا قانون لكل nachdem.


**مصادر القاعدة/المعنى:** [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### grammar-05

Während der Zugfahrt lese ich einen Reiseführer.

**نتيجة المراجعة:** أثناء الرحلة عبارة اسمية بGenitiv مؤنث der Zugfahrt؛ lese ثانية وحدة ولا فاصلة. أضيف هذا النص المسجل إلى المصدر لتوضيح الفرق.


**مصادر القاعدة/المعنى:** [PREP](https://deutsch.lingolia.com/de/grammatik/praepositionen/temporal), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### grammar-06

Nachdem der Zug angekommen war, suchten wir den Anschluss.

**نتيجة المراجعة:** angekommen war Plusquamperfekt يسبق suchten الماضي؛ war مع حركة الوصول وفاعل Zug مفرد. أصبح له تدريب T07.4 مكتوب.


**مصادر القاعدة/المعنى:** [PQP](https://deutsch.lingolia.com/de/grammatik/zeitformen/plusquamperfekt), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### helper-01

- **معنى الترتيب:** مع bevor يحدث فعل الرئيسية قبل فعل التابعة: فحص الجدول ثم الانطلاق، لا العكس. مع nachdem يحدث فعل التابعة أولًا: الوصول ثم ركوب الحافلة. während الزمنية تصف تزامنًا أو تداخلًا، ولا تشترط بدء الفعلين ونهايتهما في اللحظة نفسها. قد تحمل während معنى المقابلة في سياق آخر، لكنه ليس المطلوب هنا.

**نتيجة المراجعة:** bevor يفحص ثم ينطلق، nachdem يصل ثم يركب، أثناء يصف تداخلًا؛ لا نساوي تزامن فترتين بتطابق بدايتهما ونهايتهما.


**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [AFTER](https://www.duden.de/rechtschreibung/nachdem), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### helper-02

- **نموذج الزمن المطلوب:** في خطط هذا الدرس نستخدم Präsens في الرئيسية وPerfekt مع nachdem لإبراز الاكتمال النسبي، لا لأن كل ظهور لـnachdem يفرض Perfekt. وفي المثال الماضي: angekommen war يسبق suchten. Q06 وT04.1 وT07.2 تطلب النمط المحدد صراحة؛ لا تُعد كل صيغة حاضر بعد nachdem مستحيلة في جميع السياقات.

**نتيجة المراجعة:** صُرح بنمط التمرين وتعدد الاستعمال؛ Q06 لا ينفي صحة كل تركيب nachdem مع Präsens خارج شرط السؤال.


**مصادر القاعدة/المعنى:** [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [PQP](https://deutsch.lingolia.com/de/grammatik/zeitformen/plusquamperfekt), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### helper-03

- **während مع اسم:** **Während der Zugfahrt lese ich einen Reiseführer.** هذا مثال موجود في التسجيل؛ أثناء الرحلة عبارة بحرف جر مع Genitiv، وليست تابعة بمصرف في آخرها. العبارة كلها أول وحدة، ثم lese ثم ich، ولا فاصلة لمجرد تقديمها. قارنها بـ**Während ich auf den Anschluss warte, lese ich die Nachrichten.**

**نتيجة المراجعة:** بينت عبارة Zugfahrt الاسمية مقابل ich ... warte التابعة، وسلامة V2 دون فاصلة زائدة للاسمية.


**مصادر القاعدة/المعنى:** [PREP](https://deutsch.lingolia.com/de/grammatik/praepositionen/temporal), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### helper-04

- **المصرف والمساعد:** angekommen وeingestiegen مع sein في هذه الأمثلة، وgekauft وgebucht مع haben. نكتب angekommen ist / eingestiegen bin / gekauft haben آخر التابعة؛ وإذا تقدمت التابعة فهي وحدة أولى ثم مصرف الرئيسية ثم فاعلها. sie في T03.3 وQ05 تعود إلى Lena المفردة؛ فيقرأ الطالب السياق لا الضمير منفردًا.

**نتيجة المراجعة:** صيغ haben/sein مقيدة بأمثلتها، وsie=Lena تمنع تخمين الجمع؛ ترتيب Hauptsatz يراعي تقديم التابعة كوحدة.


**مصادر القاعدة/المعنى:** [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### helper-05

- **البادئات والضمائر:** fährt ab في الرئيسية تصبح abfährt في التابعة، وsteigen ein تصبح einsteigen مع wir. **sehe ich mir den Fahrplan an** فيها mir مع المفعول den Fahrplan؛ عند تلخيص die Person تصبح **Sie sieht sich den Fahrplan an.** وفي **ob ich ... umsteigen muss** المصرف الأخير muss، لا المصدر umsteigen. لا تعمم فصل كل بادئة في كل نوع جملة.

**نتيجة المراجعة:** abfährt لا fährt ... ab داخل التابعة، mir في صيغة ich وsich في die Person؛ المصدر umsteigen ليس المصرف الذي ينهي ob.


**مصادر القاعدة/المعنى:** [SEP](https://deutsch.lingolia.com/de/grammatik/verben/trennbare), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### helper-06

- **الرحلة ليست التأخير:** Anschluss رحلة مواصلة، وUmstieg عملية الانتقال؛ Verspätung تأخر، وausfallen إلغاء/عدم تشغيل الرحلة، لا مجرد تأخرها. Ankunft الوصول، لا بالضرورة ساعة وصول رقمية. لا يعني فحص وجود اتصال أن الشخص أدركه أو أن الحجز ضامن لكل اتصال.

**نتيجة المراجعة:** فُصل الاتصال وعملية الانتقال والتأخر والإلغاء، والوصول لا رقم توقيت. فحص الاتصال لا يثبت وجوده أو إدراكه.


**مصادر القاعدة/المعنى:** [CONNECT](https://www.duden.de/rechtschreibung/Anschluss), [DELAY](https://www.duden.de/rechtschreibung/Verspaetung)

### helper-07

- **افصل النصوص:** Mina وKarim يخططان السبت ويقترحان نشاطًا أثناء الانتظار؛ النص لا يؤكد تنفيذ الاقتراح. Zeynep تقرأ دليل سفر أثناء القطار، وأصدقاؤها يستمعون إلى بودكاست. راوي الاستماع يفحص الحاجة إلى تبديل ويقرأ الأخبار بعد الصعود؛ لا نعرف اسمه أو جنسه أو كيف وصل إلى المحطة، ولا نستنتجها من الصوت.

**نتيجة المراجعة:** الحوار خطة لا تنفيذ، والقراءة تفصل Zeynep وأصدقاءها؛ راوي الاستماع بلا جنس أو اسم أو طريق إلىالمحطة مذكور.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### helper-08

- **النفي والشرط:** müssen nicht في الحوار نفي لزوم السيارة لكل طريق، لا حظرها. فحص ob يحتاج جوابًا غير معطى هنا؛ ليس خبرًا بأن التبديل لازم. Wenn die Strecke kurz ist يقيد المشي بقصر المسافة، ولا يقول إن كل الرحلة قصيرة.

**نتيجة المراجعة:** nicht müssen نفي إلزام لا حظر؛ ob سؤال غير مجاب وWenn شرط للمشي، فهذه حدود صريحة للاستنتاج.


**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### helper-09

- **مقصد المناخ لا نتيجة مقاسة:** القراءة تصف رغبة المجموعة وخياراتها، ولا تقدم حساب انبعاثات أو دليلًا أن كل قطار أقل أثرًا في كل الظروف. klimafreundlich أضيق من ادعاء بيئي شامل؛ لا نضيف أرقامًا أو حكمًا علميًا أو وسيلة مناسبة لكل شخص إلى النص.

**نتيجة المراجعة:** الصفة تخص المناخ والرغبة، لا بيانات مقارنة علمية أو شمول كل الأثر البيئي؛ لا حسابات مختلقة.


**مصادر القاعدة/المعنى:** [CLIMATE](https://www.duden.de/rechtschreibung/klimafreundlich)

### helper-10

- **دليل مستقل عن الصوت:** P01 خمس جمل كتابة فقط؛ P02 ست جمل كتابة ثم جهر بنفسك، بلا شريك أو تسجيل. المثال الثاني يستلهم الحافلة الملغاة لكن بدائله معطيات خيالية جديدة، لا استنتاج جداول حقيقية. حد الحروف والإقرارات لا يصححان اللغة أو النطق أو التسلسل آليًا؛ التسجيلات الحالية تبقى للمراجعة دون اعتماد جديد.

**نتيجة المراجعة:** P01 كتابة فقط وP02 كتابة وجهر؛ البدائل معطيات مهمة جديدة، لا استنتاج من الصوت. لم تتحول التسجيلات المعلقة إلى ready.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### dialogue-01

Wie kommen wir am Samstag nach Uferstadt?

**نتيجة المراجعة:** سؤال Mina عن كيفية الوصول السبت إلى Uferstadt؛ لا ساعة أو تذكرة مؤكدة، coming صيغة جمع تخطيطية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### dialogue-02

Lass uns den Zug nehmen. Bevor wir buchen, sollten wir den Fahrplan vergleichen.

**نتيجة المراجعة:** اقتراح Karim القطار وفحص الجدول قبل الحجز؛ Lass uns + مصدر ثم sollten اقتراح، لا حجز مكتمل.


**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### dialogue-03

Gute Idee. Und was machen wir, während wir auf den Anschluss warten?

**نتيجة المراجعة:** سؤال Mina عن نشاط أثناء انتظار المواصلة؛ machen في سؤال رئيسي ثم warten آخر während. ما زال اقتراحًا.


**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze), [CONNECT](https://www.duden.de/rechtschreibung/Anschluss)

### dialogue-04

Wir können einen Stadtplan ansehen oder etwas lesen.

**نتيجة المراجعة:** يمكن النظر في خريطة أو القراءة؛ oder بديلان لا فعلين حدثا بالضرورة. können آخر المعنى الإمكاني لا إثبات التنفيذ.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### dialogue-05

Nachdem wir angekommen sind, fahren wir mit dem Nahverkehr zum Museum.

**نتيجة المراجعة:** Perfekt مع nachdem لإنجاز الوصول السابق في الخطة ثم Nahverkehr إلى المتحف؛ لا نوع وسيلة محلية معين.


**مصادر القاعدة/المعنى:** [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt)

### dialogue-06

Genau. Dann müssen wir nicht für jeden Weg ein Auto nehmen.

**نتيجة المراجعة:** nicht für jeden Weg ein Auto nehmen ينفي الحاجة للسيارة لكل طريق، لا منع السيارة أو إثبات حساب مناخي.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### reading-01

Zeynep und ihre Freunde planen einen Ausflug in die fiktive Stadt Uferstadt.

**نتيجة المراجعة:** مجموعة Zeynep وأصدقائها وخطة رحلة إلى مدينة خيالية صراحة؛ لا تحقق من وجهة جغرافية أو سفر منجز.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### reading-02

Bevor sie losfahren, vergleichen sie die Fahrpläne von Zug und Bus.

**نتيجة المراجعة:** قبل الانطلاق يقارنون جداول القطار والحافلة، لا الأسعار أو عدد السيارات؛ فعل التابعة losfahren آخرها.


**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### reading-03

Sie entscheiden sich für den Zug und kaufen die Fahrkarten online.

**نتيجة المراجعة:** يختارون القطار ويشترون التذاكر إلكترونيًا في سرد الخطة؛ sich entscheiden für + Akkusativ وkaufen لا يضمنان الاتصال.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### reading-04

Nachdem sie die Tickets gebucht haben, prüfen sie, ob es am Ziel einen Anschluss gibt.

**نتيجة المراجعة:** بعد حجز التذاكر يفحصون هل توجد مواصلة؛ gebucht haben وob ... gibt صحيحان. الفحص ليس جوابًا بالإيجاب.


**مصادر القاعدة/المعنى:** [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze), [CONNECT](https://www.duden.de/rechtschreibung/Anschluss)

### reading-05

Während der Zugfahrt liest Zeynep einen Reiseführer, und ihre Freunde hören einen Podcast.

**نتيجة المراجعة:** Zeynep تقرأ Reiseführer والأصدقاء يسمعون Podcast؛ أثناء + Genitiv هنا وليس الرابط مع فعل أخير، وتبادل النشاطين خطأ فهم.


**مصادر القاعدة/المعنى:** [PREP](https://deutsch.lingolia.com/de/grammatik/praepositionen/temporal)

### reading-06

In Uferstadt gehen sie vom Bahnhof zu Fuß zum Markt und nehmen später den Nahverkehr zum Museum.

**نتيجة المراجعة:** من المحطة إلى السوق مشيًا، ثم نقل محلي إلى المتحف؛ لا مساواة بين السوق والمتحف أو كل الطريق مشيًا.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### reading-07

Die Gruppe möchte möglichst klimafreundlich unterwegs sein.

**نتيجة المراجعة:** المجموعة ترغب möglichst klimafreundlich؛ هذه رغبة مقيدة لا شهادة بيئية أو قياس الانبعاثات.


**مصادر القاعدة/المعنى:** [CLIMATE](https://www.duden.de/rechtschreibung/klimafreundlich)

### reading-08

Deshalb legt sie die längere Strecke mit dem Zug zurück und geht kurze Wege zu Fuß.

**نتيجة المراجعة:** Deshalb يقدم سبب الاختيار المذكور: المسافة الأطول بالقطار والقصيرة مشيًا. legt ... zurück منفصل، ولا يثبت تفوقًا عامًا لكل قطار.


**مصادر القاعدة/المعنى:** [CLIMATE](https://www.duden.de/rechtschreibung/klimafreundlich), [SEP](https://deutsch.lingolia.com/de/grammatik/verben/trennbare)

### reading-question-01

Wohin möchten Zeynep und ihre Freunde fahren?

**نتيجة المراجعة:** الإجابة: In die fiktive Stadt Uferstadt. — الوجهة خيالية صراحة؛ لا نفترض إقامة أو تاريخًا.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### reading-question-02

Was vergleichen sie, bevor sie losfahren?

**نتيجة المراجعة:** الإجابة: Die Fahrpläne von Zug und Bus. — التوقيت قبل الانطلاق، دون قصر المقارنة على السعر.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### reading-question-03

Wie kaufen sie die Fahrkarten?

**نتيجة المراجعة:** الإجابة: Online. — طريقة الشراء منصوص عليها، لا متجر أو مبلغ مخترع.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### reading-question-04

Was prüft die Gruppe, nachdem sie die Tickets gebucht hat?

**نتيجة المراجعة:** الإجابة: Ob es am Ziel einen Anschluss gibt. — جواب سؤال الفحص لا إثبات وجود اتصال؛ Gruppe مفردة يفسر gebucht hat في السؤال.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### reading-question-05

Was macht Zeynep während der Zugfahrt?

**نتيجة المراجعة:** الإجابة: Sie liest einen Reiseführer. — هي لا تسمع البودكاست؛ ذلك نشاط الأصدقاء.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### reading-question-06

Wie kommt die Gruppe vom Bahnhof zum Markt?

**نتيجة المراجعة:** الإجابة: Zu Fuß. — السؤال يقيد الطريق من المحطة للسوق، لا كل الرحلة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### reading-question-07

Wie möchte die Gruppe möglichst klimafreundlich reisen?

**نتيجة المراجعة:** الإجابة: Sie möchte die längere Strecke mit dem Zug fahren und kurze Wege zu Fuß gehen. — الجواب يشرح نية النص واختياراته، لا توصية مناخية عامة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### listening-01

Bevor ich aus dem Haus gehe, sehe ich mir den Fahrplan an.

**نتيجة المراجعة:** فحص الجدول قبل مغادرة البيت: ich sehe mir ... an؛ الجملة لا تعطي اسم المتكلم أو جنسه.


**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze), [SEP](https://deutsch.lingolia.com/de/grammatik/verben/trennbare)

### listening-02

Heute fällt mein erster Bus aus.

**نتيجة المراجعة:** الحافلة الأولى اليوم fällt aus، أي ملغاة/لا تعمل؛ ليست تأخرًا أو وصولًا مبكرًا.


**مصادر القاعدة/المعنى:** [SEP](https://deutsch.lingolia.com/de/grammatik/verben/trennbare)

### listening-03

Während ich auf die nächste Verbindung warte, prüfe ich, ob ich in der Stadt umsteigen muss.

**نتيجة المراجعة:** أثناء انتظار الوصلة التالية يفحص هل يلزم التبديل في المدينة؛ muss نهاية التابعة المتداخلة. جواب الحاجة غير معطى.


**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze), [CONNECT](https://www.duden.de/rechtschreibung/Anschluss)

### listening-04

Nachdem ich in den Zug eingestiegen bin, lese ich die Nachrichten.

**نتيجة المراجعة:** بعد الصعود للقطار يقرأ الأخبار؛ eingestiegen bin يعبر اكتمال الصعود، لا أنه بدأ المشي إلى الإقامة.


**مصادر القاعدة/المعنى:** [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### listening-05

Wenn die Strecke kurz ist, gehe ich zu Fuß.

**نتيجة المراجعة:** المشي مشروط بالمسافة القصيرة؛ Wenn لا يعني كل الطريق قصير أو أن المتكلم مشى من البيت إلى المحطة.


**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### listening-question-01

Was macht die Person, bevor sie das Haus verlässt?

**نتيجة المراجعة:** الإجابة: Sie sieht sich den Fahrplan an. — Sie تحيل إلى die Person؛ يتغير mir إلى sich مع الفاعل ولا نستنتج جنس الراوي.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### listening-question-02

Was ist mit dem ersten Bus passiert?

**نتيجة المراجعة:** الإجابة: Er fällt aus. — Er يعود إلى der Bus؛ ليس أنه تأخر فقط.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### listening-question-03

Was prüft sie, während sie wartet?

**نتيجة المراجعة:** الإجابة: Ob sie in der Stadt umsteigen muss. — فحص الحاجة إلى تبديل، لا معرفة أن التبديل واجب.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### listening-question-04

Was macht sie, nachdem sie in den Zug eingestiegen ist?

**نتيجة المراجعة:** الإجابة: Sie liest die Nachrichten. — الإخبار بعد الصعود لا قبل ركوب القطار.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### listening-question-05

Wie legt sie eine kurze Strecke zurück?

**نتيجة المراجعة:** الإجابة: Sie geht zu Fuß. — النطاق مسافة قصيرة كما في الشرط؛ ليس كامل الرحلة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### DL-B1-09-T01

1. الانتقال من قطار أو حافلة إلى وسيلة أخرى: **der Umstieg / die Ankunft**
2. الوصول، لا المغادرة: **die Ankunft / die Emission**
3. وسيلة النقل التي تربطك برحلة تالية: **der Anschluss / die Verspätung**
4. إلغاء رحلة أو توقفها: **ausfallen / umsteigen**
5. تأخر عن الموعد المتوقع: **die Verspätung / die Ankunft**

**نتيجة المراجعة:** حُدد معنى وصول الحدث وأضيف التأخير دعمًا مباشرًا لـQ02؛ الربط والإلغاء والتبديل معانٍ منفصلة.

- **1.** الانتقال من قطار أو حافلة إلى وسيلة أخرى: **der Umstieg / die Ankunft**
  - **المفتاح:** der Umstieg؛ Umstieg عملية انتقال لا وصول، ويجوز بين مركبتين من النوع نفسه.
- **2.** الوصول، لا المغادرة: **die Ankunft / die Emission**
  - **المفتاح:** die Ankunft؛ Ankunft وصول؛ Emission انبعاث ولا علاقة له بالوصول.
- **3.** وسيلة النقل التي تربطك برحلة تالية: **der Anschluss / die Verspätung**
  - **المفتاح:** der Anschluss؛ Anschluss رحلة مواصلة؛ Verspätung تأخر لا وصلة.
- **4.** إلغاء رحلة أو توقفها: **ausfallen / umsteigen**
  - **المفتاح:** ausfallen؛ ausfallen إلغاء/عدم تشغيل؛ umsteigen انتقال.
- **5.** تأخر عن الموعد المتوقع: **die Verspätung / die Ankunft**
  - **المفتاح:** die Verspätung؛ Verspätung تأخر؛ Ankunft اسم الوصول دون حكم على الموعد.

**مصادر القاعدة/المعنى:** [CONNECT](https://www.duden.de/rechtschreibung/Anschluss), [DELAY](https://www.duden.de/rechtschreibung/Verspaetung)

### DL-B1-09-T02

1. ______ wir losfahren, prüfen wir die Verbindung. (الفحص أولًا ثم الانطلاق)
2. ______ Lena auf den Bus wartet, liest sie einen Artikel. (القراءة أثناء الانتظار)
3. ______ sie am Ziel angekommen ist, sucht sie die Haltestelle. (الوصول أولًا ثم البحث؛ sie تعود إلى Lena)
4. Wir kaufen die Fahrkarten, ______ wir zum Bahnhof fahren. (شراء التذاكر أولًا ثم الذهاب)

**نتيجة المراجعة:** أضيف لكل فراغ ترتيب أو تزامن؛ لم يعد اختيار الرابط مجرد تخمين من جملة يمكن تأويلها بأكثر من زمن.

- **1.** ______ wir losfahren, prüfen wir die Verbindung. (الفحص أولًا ثم الانطلاق)
  - **المفتاح:** Bevor؛ الفحص سابق للانطلاق بنص القيد، لذا Bevor لا Nachdem.
- **2.** ______ Lena auf den Bus wartet, liest sie einen Artikel. (القراءة أثناء الانتظار)
  - **المفتاح:** Während؛ القراءة أثناء الانتظار، لذا Während لا قبل أو بعده.
- **3.** ______ sie am Ziel angekommen ist, sucht sie die Haltestelle. (الوصول أولًا ثم البحث؛ sie تعود إلى Lena)
  - **المفتاح:** Nachdem؛ الوصول مكتمل قبل البحث وفاعل sie هو Lena؛ Nachdem تطابق القصد.
- **4.** Wir kaufen die Fahrkarten, ______ wir zum Bahnhof fahren. (شراء التذاكر أولًا ثم الذهاب)
  - **المفتاح:** bevor؛ الشراء أولًا ثم الذهاب كما في القيد؛ bevor تسبق الجملة الثانوية المتأخرة.

**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [AFTER](https://www.duden.de/rechtschreibung/nachdem), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### DL-B1-09-T03

الموضع محدد أصلًا. اكتب مصرف الحاضر الموافق للفاعل؛ في 3 هو مساعد Perfekt، وsie تعود إلى Lena وحدها.

1. Bevor wir in den Zug ______, prüfen wir die Fahrkarten. (einsteigen)
2. Während Lena auf den Bus ______, liest sie. (warten)
3. Nachdem sie am Ziel angekommen ______, nimmt sie den Nahverkehr. (sein)
4. Bevor der Zug ______, suchen wir unser Gleis. (abfahren)

**نتيجة المراجعة:** التكليف تصريف لا العثور على موضع معطى؛ الحاضر معلوم وLena مفردة، مع فعل منفصل موصول في التابعة.

- **1.** Bevor wir in den Zug ______, prüfen wir die Fahrkarten. (einsteigen)
  - **المفتاح:** einsteigen؛ wir جمع يقتضي einsteigen، موصولًا آخر التابعة لا steigen ... ein.
- **2.** Während Lena auf den Bus ______, liest sie. (warten)
  - **المفتاح:** wartet؛ Lena ثالث مفرد فتكون wartet، لا warte ولا warten.
- **3.** Nachdem sie am Ziel angekommen ______, nimmt sie den Nahverkehr. (sein)
  - **المفتاح:** ist؛ Lena مفردة؛ angekommen مع sein في هذا الاستعمال، لذلك ist.
- **4.** Bevor der Zug ______, suchen wir unser Gleis. (abfahren)
  - **المفتاح:** abfährt؛ Zug مفرد؛ fährt مع أوملاوت وبادئة متصلة في abfährt.

**مصادر القاعدة/المعنى:** [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [SEP](https://deutsch.lingolia.com/de/grammatik/verben/trennbare), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### DL-B1-09-T04

ابدأ بالتابعة وافصلها بفاصلة. في 1 صغ الشراء في Perfekt والرئيسية في Präsens لإبراز اكتمال الشراء؛ في 2 و3 استعمل الحاضر مع حفظ التزامن أو الترتيب المعطى:

1. **Wir kaufen die Fahrkarten. Danach fahren wir zum Bahnhof.** → **nachdem**
2. **Ich warte auf den Bus. Dabei prüfe ich den Fahrplan.** → **während**
3. **Wir fahren los. Zuvor packen wir die Taschen.** → **bevor**

**نتيجة المراجعة:** الروابط معلومة؛ حُدد Perfekt في1 والرئيسية بالحاضر بدل اعتبار الحاضر بعد nachdem خطأ مطلقًا.

- **1.** **Wir kaufen die Fahrkarten. Danach fahren wir zum Bahnhof.** → **nachdem**
  - **المفتاح:** Nachdem wir die Fahrkarten gekauft haben, fahren wir zum Bahnhof.؛ gekauft haben نهاية التابعة يحقق شرط Perfekt والشراء الأسبق، ثم fahren wir بعد الفاصلة.
- **2.** **Ich warte auf den Bus. Dabei prüfe ich den Fahrplan.** → **während**
  - **المفتاح:** Während ich auf den Bus warte, prüfe ich den Fahrplan.؛ warte في نهاية أثناء، ثم prüfe ich؛ dabei في الأصل يحدد التزامن.
- **3.** **Wir fahren los. Zuvor packen wir die Taschen.** → **bevor**
  - **المفتاح:** Bevor wir losfahren, packen wir die Taschen.؛ packen يسبق losfahren لأن Zuvor، لا نعكس الحدثين لمجرد ترتيب جمل المصدر.

**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### DL-B1-09-T05

حدّد صحيحًا أو خطأ:

1. تذكر القراءة أن Uferstadt مدينة خيالية.
2. تختار المجموعة السيارة قبل أن تقارن الجداول.
3. تشتري زينب وأصدقاؤها التذاكر عبر الإنترنت.
4. تتحقق المجموعة من وجود وسيلة نقل تالية بعد حجز التذاكر.
5. تذهب المجموعة سيرًا من المحطة إلى السوق.
6. رغبة المجموعة في مراعاة المناخ هي الدافع المذكور لركوب القطار للمسافة الأطول والمشي للمسافات القصيرة، لا نتيجة قياس علمي.

**نتيجة المراجعة:** كل حكم مرتبط بجملة من القراءة؛ بند6 يدعم سببQ08 ويقيد المناخ بالنية، لا البرهان العلمي.

- **1.** تذكر القراءة أن Uferstadt مدينة خيالية.
  - **المفتاح:** صحيح؛ fiktive في الجملة الأولى دليل مباشر.
- **2.** تختار المجموعة السيارة قبل أن تقارن الجداول.
  - **المفتاح:** خطأ؛ المقارنة أولًا والاختيار قطار لا سيارة.
- **3.** تشتري زينب وأصدقاؤها التذاكر عبر الإنترنت.
  - **المفتاح:** صحيح؛ online في الجملة الثالثة يحسم الطريقة.
- **4.** تتحقق المجموعة من وجود وسيلة نقل تالية بعد حجز التذاكر.
  - **المفتاح:** صحيح؛ الفحص بعد الحجز منصوص عليه؛ لا يلزم أن يكون الاتصال موجودًا.
- **5.** تذهب المجموعة سيرًا من المحطة إلى السوق.
  - **المفتاح:** صحيح؛ vom Bahnhof zu Fuß zum Markt صريح؛ لا نعمم المشي إلى المتحف.
- **6.** رغبة المجموعة في مراعاة المناخ هي الدافع المذكور لركوب القطار للمسافة الأطول والمشي للمسافات القصيرة، لا نتيجة قياس علمي.
  - **المفتاح:** صحيح؛ السبب رغبة klimafreundlich كما قبل Deshalb؛ لا يثبت نسب انبعاثات.

**مصادر القاعدة/المعنى:** [CLIMATE](https://www.duden.de/rechtschreibung/klimafreundlich)

### DL-B1-09-T06

أكمل بالألمانية من النص، دون افتراض جنس الراوي. بنك الكلمات: **den Fahrplan — fällt … aus — umsteigen — die Nachrichten — kurz**.

1. Bevor ich aus dem Haus gehe, sehe ich mir ______ an.
2. Heute ______ mein erster Bus ______.
3. Während ich auf die nächste Verbindung warte, prüfe ich, ob ich in der Stadt ______ muss.
4. Nachdem ich in den Zug eingestiegen bin, lese ich ______.
5. Wenn die Strecke ______ ist, gehe ich zu Fuß.

**نتيجة المراجعة:** تحولت فراغات عربية ومفتاح ألماني غير مطابق إلى بنك ألماني بخمسة بنود؛ الفعل fällt ... aus منفصل، وkurz وحدها دون تكرار ist.

- **1.** Bevor ich aus dem Haus gehe, sehe ich mir ______ an.
  - **المفتاح:** den Fahrplan؛ den Fahrplan مفعول النظر؛ mir والبادئة an معطيان فلا تكرارهما.
- **2.** Heute ______ mein erster Bus ______.
  - **المفتاح:** fällt / aus؛ fällt في الفراغ الأول وaus فيالثاني حول الفاعل؛ يطابق Heute fällt mein erster Bus aus.
- **3.** Während ich auf die nächste Verbindung warte, prüfe ich, ob ich in der Stadt ______ muss.
  - **المفتاح:** umsteigen؛ umsteigen مصدر قبل muss، لا مصرف umsteigt.
- **4.** Nachdem ich in den Zug eingestiegen bin, lese ich ______.
  - **المفتاح:** die Nachrichten؛ die Nachrichten منصوبة جمعًا مع lesen؛ليست خريطة أصدقاء القراءة.
- **5.** Wenn die Strecke ______ ist, gehe ich zu Fuß.
  - **المفتاح:** kurz؛ kurz وحدها؛ist موجودة بعد الفراغ. الشرط لا يقول كل الرحلة قصيرة.

**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [SEP](https://deutsch.lingolia.com/de/grammatik/verben/trennbare)

### DL-B1-09-T07

ابدأ بالتابعة وأضف الفاصلة. في 1 الفحص قبل الصعود؛ في 2 الوصول قبل البحث، واستخدم Perfekt في التابعة وPräsens في الرئيسية؛ في 3 القراءة أثناء الانتظار بالحاضر. في 4 أعد صياغة2 عن الماضي بـPlusquamperfekt للحدث الأسبق وPräteritum للبحث:

1. **Bevor …:** Wir prüfen die Fahrkarten. Wir steigen ein.  
2. **Nachdem …:** Der Zug kommt an. Wir suchen den Anschluss.  
3. **Während …:** Ich warte auf die Straßenbahn. Ich lese einen Stadtplan.
4. **Nachdem …:** أعد صياغة البند 2 في الماضي بالنمط المطلوب.

**نتيجة المراجعة:** العنوان ربط وصوغ لا اختيار بلا خيارات؛ الأول فحص قبل صعود والثاني اكتمال وصول والثالث تزامن، والرابع ماضٍ سابق.

- **1.** **Bevor …:** Wir prüfen die Fahrkarten. Wir steigen ein.  
  - **المفتاح:** Bevor wir einsteigen, prüfen wir die Fahrkarten.؛ الفحص قبل الصعود كما حدد التكليف؛ wir einsteigen نهاية التابعة ثم prüfen.
- **2.** **Nachdem …:** Der Zug kommt an. Wir suchen den Anschluss.  
  - **المفتاح:** Nachdem der Zug angekommen ist, suchen wir den Anschluss.؛ الوصول أسبق؛ angekommen ist ثم suchen في الحاضر المطلوب.
- **3.** **Während …:** Ich warte auf die Straßenbahn. Ich lese einen Stadtplan.
  - **المفتاح:** Während ich auf die Straßenbahn warte, lese ich einen Stadtplan.؛ warte وlese بالحاضر وتزامنهما صريح؛ Stadtplan مفعول بـeinen.
- **4.** **Nachdem …:** أعد صياغة البند 2 في الماضي بالنمط المطلوب.
  - **المفتاح:** Nachdem der Zug angekommen war, suchten wir den Anschluss.؛ war مساعد Plusquamperfekt للمفرد، ثم suchten الماضي مع wir؛ لا تبقى suchen في حاضر المثال السابق.

**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [PQP](https://deutsch.lingolia.com/de/grammatik/zeitformen/plusquamperfekt), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### DL-B1-09-T08

دليل التطبيق: P01 كتابة فقط بحد 130 حرفًا؛ P02 كتابة وجهر بحد 145 حرفًا؛ لكل منهما الإقرارات الثلاثة. لا تصحيح آلي لعدد الجمل أو الروابط.

**أ — P01: خمس جمل كتابة فقط**

اكتب خمس جمل ألمانية لخطة خيالية: في الأولى حدد السبت والوجهة Uferstadt الخيالية؛ في الثانية اذكر فحص الجدول قبل الانطلاق بـ bevor؛ في الثالثة السفر بالقطار إلى المدينة؛ في الرابعة البحث عن حافلة مواصلة إلى المتحف بعد الوصول بـ nachdem مع Perfekt في التابعة و Präsens في الرئيسية؛ وفي الخامسة قراءة خريطة أثناء انتظار الحافلة بـ während. اذكر القطار والحافلة والاتصال بوضوح. هذه كتابة فقط دون جهر أو بيانات سفر حقيقية أو تسجيل، ولا ادعاءات بيئية غير موثقة.

**ب — P02: ست جمل مع الجهر**

اكتب خطة بديلة خيالية من ست جمل: الحافلة الأولى ملغاة؛ تفحص الجدول قبل مغادرة المنزل بـ bevor؛ تتوفر في موقف التدريب بديلان هما القطار أو حافلة لاحقة؛ تفحص الاتصال أثناء انتظار القطار بـ während؛ تقرأ الأخبار بعد الصعود إلى القطار بـ nachdem مع Perfekt في التابعة و Präsens في الرئيسية؛ وتمشي إذا كانت المسافة قصيرة. البديلان معطيات خيالية جديدة، لا استنتاج من جدول حقيقي. اكتبها ثم اقرأها بصوت واضح بنفسك؛ لا يلزم تسجيل الصوت أو شريك أو سفر فعلي.

**نتيجة المراجعة:** P01 خمس جمل كتابة فقط وP02 ست جمل مع الجهر؛ رُبطت المطالب ومعاييرها بالمصدر، والبديلان خياليان لا استنتاج من التسجيل.

- **1.** Am Samstag planen wir eine Fahrt in die fiktive Stadt Uferstadt.
  - **المفتاح:** Am Samstag planen wir eine Fahrt in die fiktive Stadt Uferstadt.؛ السبت والوجهة الخيالية مصرح بهما، لا حجز واقعي.
- **2.** Bevor wir losfahren, prüfen wir den Fahrplan.
  - **المفتاح:** Bevor wir losfahren, prüfen wir den Fahrplan.؛ فحص الجدول يسبق الانطلاق بـbevor.
- **3.** Wir fahren zuerst mit dem Zug nach Uferstadt.
  - **المفتاح:** Wir fahren zuerst mit dem Zug nach Uferstadt.؛ القطار أول وسيلة إلى المدينة.
- **4.** Nachdem wir angekommen sind, suchen wir den Anschlussbus zum Museum.
  - **المفتاح:** Nachdem wir angekommen sind, suchen wir den Anschlussbus zum Museum.؛ الوصول مكتمل قبل البحث عن حافلة مواصلة للمتحف؛ مساعد sein.
- **5.** Während wir auf den Bus warten, lesen wir einen Stadtplan.
  - **المفتاح:** Während wir auf den Bus warten, lesen wir einen Stadtplan.؛ قراءة خريطة أثناء انتظار الحافلة بعد الوصول، لا قبل الوصول المذكور في الجملة السابقة.
- **6.** Heute fällt mein erster Bus aus.
  - **المفتاح:** Heute fällt mein erster Bus aus.؛ إلغاء الحافلة الأولى سبب افتراضي للخطة البديلة.
- **7.** Bevor ich das Haus verlasse, sehe ich mir den Fahrplan an.
  - **المفتاح:** Bevor ich das Haus verlasse, sehe ich mir den Fahrplan an.؛ فحص قبل الخروج من المنزل، وmir معich؛ لا طريق إلى المحطة مخترع بوصفه حقيقة من النص.
- **8.** In dieser erfundenen Situation kann ich den Zug oder einen späteren Bus nehmen.
  - **المفتاح:** In dieser erfundenen Situation kann ich den Zug oder einen späteren Bus nehmen.؛ بديلان مفترضان صراحة: قطار أو حافلة لاحقة، لا وسيلتان يجب ركوبهما معًا.
- **9.** Während ich auf den Zug warte, prüfe ich den Anschluss.
  - **المفتاح:** Während ich auf den Zug warte, prüfe ich den Anschluss.؛ انتظار القطار المختار وفحص الاتصال أثناءه، لا تأكيد إدراك الاتصال.
- **10.** Nachdem ich in den Zug eingestiegen bin, lese ich die Nachrichten.
  - **المفتاح:** Nachdem ich in den Zug eingestiegen bin, lese ich die Nachrichten.؛ الصعود يسبق القراءة: Perfekt eingestiegen bin ثمlese ich.
- **11.** Wenn die Strecke kurz ist, gehe ich zu Fuß.
  - **المفتاح:** Wenn die Strecke kurz ist, gehe ich zu Fuß.؛ Wenn يقيد المشي بقصر المسافة، ولا يدعي وجود طريق آمن أو شمول المشي لكل الرحلة.

**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### DL-B1-09-Q01

ما المعنى الأنسب لـ der Anschluss في سياق السفر؟

**نتيجة المراجعة:** der Anschluss هو اتصال أو رحلة مواصلة تساعد على الانتقال إلى الجزء التالي من الرحلة.

**المفتاح:** الرحلة أو وسيلة النقل المتصلة بالرحلة السابقة.

**الربط:** DL-B1-09-T01

- **الخيار1 — صحيح:** الرحلة أو وسيلة النقل المتصلة بالرحلة السابقة. — الوصلة التالية معنى Anschluss في السفر؛ الصحيح لا اتصال كهربائي.
- **الخيار2 — ليس المطلوب:** وقت المغادرة المكتوب في الجدول. — وقت المغادرة ليس Anschluss بل توقيت Abfahrt.
- **الخيار3 — ليس المطلوب:** تأخر وسيلة النقل عن موعدها. — التأخر Verspätung لا رحلة مواصلة.

**مصادر القاعدة/المعنى:** [CONNECT](https://www.duden.de/rechtschreibung/Anschluss)

### DL-B1-09-Q02

أي كلمة تعني أن وسيلة النقل لم تصل في موعدها؟

**نتيجة المراجعة:** die Verspätung تعني التأخر عن الموعد المتوقع.

**المفتاح:** die Verspätung

**الربط:** DL-B1-09-T01

- **الخيار1 — ليس المطلوب:** die Ankunft — Ankunft الوصول دون حكم على الموعد.
- **الخيار2 — ليس المطلوب:** der Umstieg — Umstieg انتقال لا تأخر.
- **الخيار3 — صحيح:** die Verspätung — Verspätung عدم الالتزام بالموعد المتوقع، ويدعمه T01.5.

**مصادر القاعدة/المعنى:** [DELAY](https://www.duden.de/rechtschreibung/Verspaetung)

### DL-B1-09-Q03

أكمل بالرابط الذي يدل على أن فحص الاتصال يحدث قبل الانطلاق: ___ wir losfahren, prüfen wir die Verbindung.

**نتيجة المراجعة:** Bevor تعني «قبل أن»، لذلك يسبق فحص الاتصال الانطلاق.

**المفتاح:** Bevor

**الربط:** DL-B1-09-T02

- **الخيار1 — ليس المطلوب:** Nachdem — بعد الانطلاق عكس القصد المطلوب للفحص.
- **الخيار2 — ليس المطلوب:** Während — أثناء الانطلاق تزامن لا السبق المحدد.
- **الخيار3 — صحيح:** Bevor — Bevor يجعل فحص الرئيسية قبل انطلاق التابعة.

**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### DL-B1-09-Q04

اختر الفعل المصرف في الحاضر في نهاية الجملة التابعة: Während Lena auf den Bus ___, liest sie einen Artikel.

**نتيجة المراجعة:** الفاعل Lena مفرد، فيكون الفعل wartet، ويأتي في نهاية جملة während التابعة.

**المفتاح:** wartet

**الربط:** DL-B1-09-T03

- **الخيار1 — صحيح:** wartet — wartet حاضر ثالث مفرد يوافق Lena.
- **الخيار2 — ليس المطلوب:** warte — warte لا توافق ثالث مفرد في الحاضر المطلوب، دون إنكار استعمالاتها الأخرى.
- **الخيار3 — ليس المطلوب:** warten — warten مصدر/صيغة جمع، لا حاضر Lena المفردة.

**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### DL-B1-09-Q05

أكمل المساعد؛ sie تعود إلى Lena وحدها: Nachdem sie am Ziel angekommen ___, nimmt sie den Nahverkehr.

**نتيجة المراجعة:** Lena مفردة؛ angekommen مع sein في هذا المثال، لذا ist لا sind. يأتي المساعد المصرف في نهاية التابعة؛ لا نختار haben لهذا الاستعمال.

**المفتاح:** ist

**الربط:** DL-B1-09-T03, DL-B1-09-T07

- **الخيار1 — ليس المطلوب:** haben — haben لا يحقق المساعد أو مطابقة Lena angekommen هنا.
- **الخيار2 — صحيح:** ist — ist مساعد sein للحاضر المركب مع فاعل مفرد في مثال الوصول.
- **الخيار3 — ليس المطلوب:** sind — sind للجمع/صيغة الاحترام، والسؤال حدد Lena وحدها.

**مصادر القاعدة/المعنى:** [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### DL-B1-09-Q06

اختر الدمج وفق النمط المطلوب: بعد اكتمال الشراء نذهب إلى المحطة. استعمل Perfekt مع nachdem و Präsens في الرئيسية: Wir kaufen die Fahrkarten. Danach fahren wir zum Bahnhof.

**نتيجة المراجعة:** المطلوب إبراز اكتمال الشراء بـ gekauft haben ثم fahren في الرئيسية. الخيار الثاني لا يحقق شرط Perfekt، وإن كان موضع مصرفه آخر التابعة؛ لا نحكم على كل استعمال للمضارع مع nachdem بأنه مستحيل.

**المفتاح:** Nachdem wir die Fahrkarten gekauft haben, fahren wir zum Bahnhof.

**الربط:** DL-B1-09-T04

- **الخيار1 — ليس المطلوب:** Nachdem wir kaufen die Fahrkarten, fahren wir zum Bahnhof. — kaufen ليس آخر التابعة، وليس Perfekt المطلوب.
- **الخيار2 — ليس المطلوب:** Nachdem wir die Fahrkarten kaufen, fahren wir zum Bahnhof. — kaufen آخر التابعة سليم موضعيًا لكنه Präsens لا Perfekt المشروط؛ ليس حكمًا ببطلانه في كل سياق.
- **الخيار3 — صحيح:** Nachdem wir die Fahrkarten gekauft haben, fahren wir zum Bahnhof. — gekauft haben يحقق اكتمال الشراء في Perfekt، ثم fahren في الرئيسية بالحاضر.

**مصادر القاعدة/المعنى:** [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### DL-B1-09-Q07

اقرأ نص الرحلة: ماذا تتحقق المجموعة منه بعد حجز التذاكر؟

**نتيجة المراجعة:** بعد حجز التذاكر، تتحقق المجموعة من وجود Anschluss عند الوجهة. أُخذت الإجابة من نص القراءة المكتوب.

**المفتاح:** من وجود اتصال أو وسيلة نقل تالية عند الوجهة.

**الربط:** DL-B1-09-T05

- **الخيار1 — صحيح:** من وجود اتصال أو وسيلة نقل تالية عند الوجهة. — الفحص لوجود مواصلة بالوجهة صريح؛ لا يعني تأكيد توفرها.
- **الخيار2 — ليس المطلوب:** من عدد السيارات في المدينة. — عدد السيارات ليس موضوع الفحص في النص.
- **الخيار3 — ليس المطلوب:** من موعد إغلاق السوق. — إغلاق السوق غير مذكور؛ ذكر السوق لاحقًا لا يبرر الاستنتاج.

**مصادر القاعدة/المعنى:** [CONNECT](https://www.duden.de/rechtschreibung/Anschluss)

### DL-B1-09-Q08

لماذا تقطع المجموعة المسافة الأطول بالقطار وتمشي في الطرق القصيرة؟

**نتيجة المراجعة:** المقصود بعبارة «صديقة للبيئة» في الخيار هنا رغبة المجموعة في مراعاة المناخ (klimafreundlich)، لا شهادة لجميع الآثار البيئية. النص يذكر رغبة وخيارات، ولا يقدم أرقامًا أو مقارنة علمية بين كل وسائل النقل.

**المفتاح:** لأنها تريد أن تكون رحلتها صديقة للبيئة قدر الإمكان.

**الربط:** DL-B1-09-T05

- **الخيار1 — صحيح:** لأنها تريد أن تكون رحلتها صديقة للبيئة قدر الإمكان. — هذا دافع المجموعة؛ شرح السؤال يقيد العبارة البيئية الأوسع بمراعاة المناخ هنا، لا شهادة لكل أثر بيئي.
- **الخيار2 — ليس المطلوب:** لأن القطار لا يصل إلى Uferstadt. — النص يتحدث عن السفر إلى المدينة بالقطار لا انقطاع وصوله إليها.
- **الخيار3 — ليس المطلوب:** لأنها لا تستطيع استخدام النقل المحلي. — تستخدم المجموعة النقل المحلي للمتحف؛ العجز عنه ليس السبب.

**مصادر القاعدة/المعنى:** [CLIMATE](https://www.duden.de/rechtschreibung/klimafreundlich)

### DL-B1-09-Q09

اقرأ نص الاستماع: ماذا حدث للحافلة الأولى؟

**نتيجة المراجعة:** يقول النص إن الحافلة الأولى fällt aus، أي إنها أُلغيت أو لم تعمل. لا يلزم تشغيل ملف صوتي للإجابة.

**المفتاح:** أُلغيت أو لم تعمل.

**الربط:** DL-B1-09-T06

- **الخيار1 — ليس المطلوب:** وصلت قبل موعدها. — لا وصول مبكر مذكور؛ الحافلة لا تعمل اليوم.
- **الخيار2 — صحيح:** أُلغيت أو لم تعمل. — فعل fällt aus إلغاء/عدم تشغيل لا تأخر فقط.
- **الخيار3 — ليس المطلوب:** توقفت في وجهتها النهائية. — ليس خبر توقف في الوجهة، ولا معنى الإلغاء.

**مصادر القاعدة/المعنى:** [SEP](https://deutsch.lingolia.com/de/grammatik/verben/trennbare)

### DL-B1-09-Q10

ماذا تفعل الشخصية الراوية بعد الصعود إلى القطار؟

**نتيجة المراجعة:** قراءة الأخبار تأتي بعد الصعود. الشخصية لفظ مؤنث نحويًا، لكن جنس الراوي غير مذكور في النص. لا يلزم MP3 للإجابة.

**المفتاح:** تقرأ الأخبار.

**الربط:** DL-B1-09-T06

- **الخيار1 — صحيح:** تقرأ الأخبار. — الأخبار بعد الصعود صريحة؛ الشخصية مؤنثة نحويًا لا افتراض جنس الراوي.
- **الخيار2 — ليس المطلوب:** تنظر إلى جدول مواعيد جديد. — الجدول قبل الخروج، والأخبار بعد الصعود؛ لا جدول جديد هنا.
- **الخيار3 — ليس المطلوب:** تمشي إلى مكان الإقامة. — المشي مشروط بالقصر، ولا مكان إقامة مذكور في نص الاستماع.

**مصادر القاعدة/المعنى:** [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt)

### DL-B1-09-P01

اكتب خمس جمل ألمانية لخطة خيالية: في الأولى حدد السبت والوجهة Uferstadt الخيالية؛ في الثانية اذكر فحص الجدول قبل الانطلاق بـ bevor؛ في الثالثة السفر بالقطار إلى المدينة؛ في الرابعة البحث عن حافلة مواصلة إلى المتحف بعد الوصول بـ nachdem مع Perfekt في التابعة و Präsens في الرئيسية؛ وفي الخامسة قراءة خريطة أثناء انتظار الحافلة بـ während. اذكر القطار والحافلة والاتصال بوضوح. هذه كتابة فقط دون جهر أو بيانات سفر حقيقية أو تسجيل، ولا ادعاءات بيئية غير موثقة.

**نتيجة المراجعة:** طابقت المهمة T08 ونموذجها؛ P01 كتابة فقط دون مربع جهر.

**الربط:** DL-B1-09-T08

- **المعيار taskCompletion:** خمس جمل مكتوبة تحدد السبت والوجهة الخيالية وفحص الجدول والسفر بالقطار والبحث عن حافلة مواصلة وقراءة الخريطة أثناء انتظارها؛ دون جهر. — يراجع المتعلم خمس جمل بمطالبها الصريحة؛ نموذج284 حرفًا، وحد130 ليس عداد خمس جمل أو تصحيحًا لها.
- **المعيار meaningClarity:** الفحص قبل الانطلاق، والوصول قبل البحث عن الحافلة، والقراءة أثناء انتظارها؛ القطار والحافلة والاتصال واضحة بلا ادعاء رحلة حقيقية. — تسلسل الفحص ثم القطار ثم البحث عن حافلة ثم الانتظار واضح؛ الاتصال ليس وعد خدمة حقيقية.
- **المعيار targetSkill:** bevor و nachdem و während الزمنية مع الفواصل والمصرف آخر التابعة؛nachdem مع Perfekt والرئيسية Präsens، وترتيب الرئيسية سليم. — الروابط الثلاثة والمساعد والموقع معطيات مستهدفة؛ الإقرار الذاتي لا يصححها آليًا.

**الدليل المحلي:** {"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 130, "speakAloud": false, "audioRequired": false}

**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt)

### DL-B1-09-P02

اكتب خطة بديلة خيالية من ست جمل: الحافلة الأولى ملغاة؛ تفحص الجدول قبل مغادرة المنزل بـ bevor؛ تتوفر في موقف التدريب بديلان هما القطار أو حافلة لاحقة؛ تفحص الاتصال أثناء انتظار القطار بـ während؛ تقرأ الأخبار بعد الصعود إلى القطار بـ nachdem مع Perfekt في التابعة و Präsens في الرئيسية؛ وتمشي إذا كانت المسافة قصيرة. البديلان معطيات خيالية جديدة، لا استنتاج من جدول حقيقي. اكتبها ثم اقرأها بصوت واضح بنفسك؛ لا يلزم تسجيل الصوت أو شريك أو سفر فعلي.

**نتيجة المراجعة:** طابقت المهمة T08 ونموذجها؛ P02 كتابة ثم جهر، وارتباطها T06/T08 محفوظ.

**الربط:** DL-B1-09-T06, DL-B1-09-T08

- **المعيار taskCompletion:** ست جمل تتضمن الحافلة الملغاة وفحص الجدول وبديلَي القطار والحافلة اللاحقة والانتظار والقراءة بعد الصعود والمشي المشروط؛ اكتب ثم اجهر. — ست جمل وموقف الحافلة وبديلان وجهر بالنفس؛ نموذج338 حرفًا، وحد145 دون تسجيل.
- **المعيار meaningClarity:** البديلان افتراض خيالي؛ يظهر اختيار القطار والفرق بين الفحص والتنفيذ، وقصرالمسافة شرط للمشي لا وصف للرحلة كلها. — الخيال مصرح به والقطار مختار، والمشي شرط لمسافة قصيرة؛ لا إجبار على سفر أو اختيار بيئي شخصي.
- **المعيار targetSkill:** الروابط الثلاثة مع الترتيب والفواصل؛Perfekt بعد nachdem و Präsens في الرئيسية، والمصرف آخر التابعة بما فيها bin بعد eingestiegen. — الروابط الثلاثة معنوية وزمنية، eingestiegen bin سابق نسبيًا؛ الجهر لا يقيس النطق أو عدد الجمل تلقائيًا.

**الدليل المحلي:** {"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 145, "speakAloud": true, "audioRequired": false}

**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt)

### plan-model-01

Am Samstag planen wir eine Fahrt in die fiktive Stadt Uferstadt.

**نتيجة المراجعة:** السبت والوجهة الخيالية مصرح بهما، لا حجز واقعي.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### plan-model-02

Bevor wir losfahren, prüfen wir den Fahrplan.

**نتيجة المراجعة:** فحص الجدول يسبق الانطلاق بـbevor.


**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### plan-model-03

Wir fahren zuerst mit dem Zug nach Uferstadt.

**نتيجة المراجعة:** القطار أول وسيلة إلى المدينة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### plan-model-04

Nachdem wir angekommen sind, suchen wir den Anschlussbus zum Museum.

**نتيجة المراجعة:** الوصول مكتمل قبل البحث عن حافلة مواصلة للمتحف؛ مساعد sein.


**مصادر القاعدة/المعنى:** [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt), [CONNECT](https://www.duden.de/rechtschreibung/Anschluss)

### plan-model-05

Während wir auf den Bus warten, lesen wir einen Stadtplan.

**نتيجة المراجعة:** قراءة خريطة أثناء انتظار الحافلة بعد الوصول، لا قبل الوصول المذكور في الجملة السابقة.


**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### fallback-model-01

Heute fällt mein erster Bus aus.

**نتيجة المراجعة:** إلغاء الحافلة الأولى سبب افتراضي للخطة البديلة.


**مصادر القاعدة/المعنى:** [SEP](https://deutsch.lingolia.com/de/grammatik/verben/trennbare)

### fallback-model-02

Bevor ich das Haus verlasse, sehe ich mir den Fahrplan an.

**نتيجة المراجعة:** فحص قبل الخروج من المنزل، وmir معich؛ لا طريق إلى المحطة مخترع بوصفه حقيقة من النص.


**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### fallback-model-03

In dieser erfundenen Situation kann ich den Zug oder einen späteren Bus nehmen.

**نتيجة المراجعة:** بديلان مفترضان صراحة: قطار أو حافلة لاحقة، لا وسيلتان يجب ركوبهما معًا.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### fallback-model-04

Während ich auf den Zug warte, prüfe ich den Anschluss.

**نتيجة المراجعة:** انتظار القطار المختار وفحص الاتصال أثناءه، لا تأكيد إدراك الاتصال.


**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze), [CONNECT](https://www.duden.de/rechtschreibung/Anschluss)

### fallback-model-05

Nachdem ich in den Zug eingestiegen bin, lese ich die Nachrichten.

**نتيجة المراجعة:** الصعود يسبق القراءة: Perfekt eingestiegen bin ثمlese ich.


**مصادر القاعدة/المعنى:** [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt)

### fallback-model-06

Wenn die Strecke kurz ist, gehe ich zu Fuß.

**نتيجة المراجعة:** Wenn يقيد المشي بقصر المسافة، ولا يدعي وجود طريق آمن أو شمول المشي لكل الرحلة.


**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### card-01

- **Bevor wir losfahren, prüfen wir den Fahrplan.** → قبل أن ننطلق، نتحقق من جدول المواعيد.

**نتيجة المراجعة:** الفحص قبل الانطلاق؛ losfahren ثم prüfen wir يثبت ترتيب الجملتين.


**مصادر القاعدة/المعنى:** [BEFORE](https://www.duden.de/rechtschreibung/bevor), [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### card-02

- **Während ich warte, lese ich.** → بينما أنتظر، أقرأ.

**نتيجة المراجعة:** تزامن الانتظار والقراءة؛ warte آخر التابعة ثم lese ich.


**مصادر القاعدة/المعنى:** [CLAUSE](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### card-03

- **Nachdem wir angekommen sind, nehmen wir den Bus.** → بعد أن نصل، نستقل الحافلة.

**نتيجة المراجعة:** وصول سابق نسبيًا بـangekommen sind ثم الحافلة؛ لا تعميم إلزام Perfekt لكل nachdem.


**مصادر القاعدة/المعنى:** [AFTER](https://www.duden.de/rechtschreibung/nachdem), [PERF](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt)

### card-04

- **der Anschluss / der Umstieg** → رحلة مواصلة / انتقال إلى مركبة أخرى.

**نتيجة المراجعة:** صُححت العربية إلى رحلة مواصلة مقابل عملية انتقال؛ لا اتصال كهربائي ولا وجوب تغيير نوع النقل.


**مصادر القاعدة/المعنى:** [CONNECT](https://www.duden.de/rechtschreibung/Anschluss)

### DL-B1-09-AUD-PHR-01

Der Fahrplan, die Fahrpläne. Die Abfahrt, die Abfahrten. Die Ankunft, die Ankünfte. Der Anschluss, die Anschlüsse. Der Umstieg, die Umstiege. Die Verspätung, die Verspätungen. Die Strecke, die Strecken. Das Verkehrsmittel, die Verkehrsmittel. Der Nahverkehr. Die Fahrkarte, die Fahrkarten. Die Umwelt. Die Emission, die Emissionen. Umsteigen, steigt um. Ausfallen, fällt aus. Sich verspäten, verspätet sich. Klimafreundlich. Pünktlich.

**نتيجة المراجعة:** مطابقة نصية فقط لـphrase_bank: 17 وحدة نصية داخل 1 مقطع؛ محفوظة دون استماع أو توليد أو اعتماد. الحالة generated_pending_acoustic_review والتفريغ offer كما هما.

- **1.** Der Fahrplan, die Fahrpläne.
  - der Fahrplan مذكر، Fahrpläne جمع بأوملاوت؛ جدول مواعيد لا تذكرة. مراجعة لغوية داخلية، لا مدخل معجمي مستقل مجلوب.
- **2.** Die Abfahrt, die Abfahrten.
  - die Abfahrt مؤنث، Abfahrten؛ حدث المغادرة ويمكن أن يعنون وقتها في جدول، لا نساويه دائمًا بساعة رقمية.
- **3.** Die Ankunft, die Ankünfte.
  - die Ankunft مؤنث، Ankünfte بأوملاوت؛ الوصول لا وقت المغادرة ولا إلغاء الرحلة. صيغ T01 أوضحت الحدث.
- **4.** Der Anschluss, die Anschlüsse.
  - Anschluss مذكر وجمعه Anschlüsse؛ تغيرت الترجمة إلى رحلة مواصلة لتجنب معنى خط التوصيل المادي. ليس نفس عملية Umstieg.
- **5.** Der Umstieg, die Umstiege.
  - Umstieg مذكر وجمعه Umstiege؛ الانتقال بين مركبتين وقد تكونان قطارين. صححت العربية دون تغيير الملف المنطوق.
- **6.** Die Verspätung, die Verspätungen.
  - Verspätung مؤنث، Verspätungen؛ التأخير لا مجرد الوصول ولا الإلغاء. أضيف T01.5 لدعم Q02 مباشرة.
- **7.** Die Strecke, die Strecken.
  - Strecke مؤنث، Strecken؛ مسار/مسافة بحسب السياق، ولا تعني القصيرة وحدها أن كل الرحلة قصيرة.
- **8.** Das Verkehrsmittel, die Verkehrsmittel.
  - Verkehrsmittel محايد وجمعه دون تغيير الاسم؛ الأداة die تميز جمع الجدول عن das للمفرد.
- **9.** Der Nahverkehr.
  - Nahverkehr مذكر ونقل محلي في هذا السياق؛ لا يحدد وحده حافلة أو ترامًا ولا كل جزئية طريق المتحف.
- **10.** Die Fahrkarte, die Fahrkarten.
  - Fahrkarte مؤنث وجمعه Fahrkarten؛ بطاقة/تذكرة سفر. لا يتضمن اللفظ ضمان إدراك الاتصال.
- **11.** Die Umwelt.
  - Umwelt مؤنث ومعناه البيئة؛ الشرطة نطاق الجدول وليست نفيًا لكل استعمال جمع، ولا نسوي البيئة بالمناخ دائمًا.
- **12.** Die Emission, die Emissionen.
  - Emission مؤنث، Emissionen؛ انبعاث، لكن النص لا يعطي مقادير ولا حكمًا حسابيًا على وسائل النقل.
- **13.** Umsteigen, steigt um.
  - umsteigen في المثال steigt um؛ فعل منفصل هنا، وفي التابعة مع modal يظهر umsteigen قبل muss. لا تعميم على كل أفعال um.
- **14.** Ausfallen, fällt aus.
  - ausfallen في المثال fällt aus، لا fällt ein؛ الإلغاء/عدم التشغيل في السفر يختلف عن Verspätung. الدلالة الأخرى خارج التركيز.
- **15.** Sich verspäten, verspätet sich.
  - sich verspäten انعكاسي؛ verspätet sich مع شخص ثالث. التأخر لا يتحول تلقائيًا إلى إلغاء.
- **16.** Klimafreundlich.
  - klimafreundlich صفة للمناخ؛ الترجمة والتقييد مكتوبان دون تعديل النطق.
- **17.** Pünktlich.
  - pünktlich ملتزم بالموعد، ليست مرادفًا لـklimafreundlich.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### DL-B1-09-AUD-MODEL-01

Bevor wir losfahren, prüfen wir den Fahrplan. Während ich auf den Anschluss warte, lese ich die Nachrichten. Nachdem wir angekommen sind, nehmen wir den Bus zur Unterkunft. Nachdem wir die Fahrkarten gekauft haben, fahren wir zum Bahnhof. Während der Zugfahrt lese ich einen Reiseführer. Nachdem der Zug angekommen war, suchten wir den Anschluss.

**نتيجة المراجعة:** مطابقة نصية فقط لـmodel_sentences: 6 وحدة نصية داخل 1 مقطع؛ محفوظة دون استماع أو توليد أو اعتماد. الحالة generated_pending_acoustic_review والتفريغ offer كما هما.

- **1.** Bevor wir losfahren, prüfen wir den Fahrplan.
  - فحص الجدول قبل الانطلاق؛ losfahren آخر التابعة وprüfen بعد الفاصلة ثم wir، مع حاضر جمع.
- **2.** Während ich auf den Anschluss warte, lese ich die Nachrichten.
  - القراءة متزامنة مع الانتظار؛ auf den Anschluss مفعول ينتظر اتصال السفر، warte آخر التابعة وlese أول الرئيسية بعدها.
- **3.** Nachdem wir angekommen sind, nehmen wir den Bus zur Unterkunft.
  - الوصول مكتمل نسبيًا قبل ركوب الحافلة؛ angekommen sind مع wir ثم nehmen، لا ادعاء سفر حدث فعلاً.
- **4.** Nachdem wir die Fahrkarten gekauft haben, fahren wir zum Bahnhof.
  - شراء التذاكر بـhaben قبل الذهاب إلى المحطة في الخطة؛ الإكمال النسبي سبب اختيار Perfekt في تمريننا، لا قانون لكل nachdem.
- **5.** Während der Zugfahrt lese ich einen Reiseführer.
  - أثناء الرحلة عبارة اسمية بGenitiv مؤنث der Zugfahrt؛ lese ثانية وحدة ولا فاصلة. أضيف هذا النص المسجل إلى المصدر لتوضيح الفرق.
- **6.** Nachdem der Zug angekommen war, suchten wir den Anschluss.
  - angekommen war Plusquamperfekt يسبق suchten الماضي؛ war مع حركة الوصول وفاعل Zug مفرد. أصبح له تدريب T07.4 مكتوب.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### DL-B1-09-AUD-DLG-01

Wie kommen wir am Samstag nach Uferstadt? Lass uns den Zug nehmen. Bevor wir buchen, sollten wir den Fahrplan vergleichen. Gute Idee. Und was machen wir, während wir auf den Anschluss warten? Wir können einen Stadtplan ansehen oder etwas lesen. Nachdem wir angekommen sind, fahren wir mit dem Nahverkehr zum Museum. Genau. Dann müssen wir nicht für jeden Weg ein Auto nehmen.

**نتيجة المراجعة:** مطابقة نصية فقط لـdialogue: 6 وحدة نصية داخل 6 مقطع؛ محفوظة دون استماع أو توليد أو اعتماد. الحالة generated_pending_acoustic_review والتفريغ offer كما هما.

- **1.** Wie kommen wir am Samstag nach Uferstadt?
  - سؤال Mina عن كيفية الوصول السبت إلى Uferstadt؛ لا ساعة أو تذكرة مؤكدة، coming صيغة جمع تخطيطية.
- **2.** Lass uns den Zug nehmen. Bevor wir buchen, sollten wir den Fahrplan vergleichen.
  - اقتراح Karim القطار وفحص الجدول قبل الحجز؛ Lass uns + مصدر ثم sollten اقتراح، لا حجز مكتمل.
- **3.** Gute Idee. Und was machen wir, während wir auf den Anschluss warten?
  - سؤال Mina عن نشاط أثناء انتظار المواصلة؛ machen في سؤال رئيسي ثم warten آخر während. ما زال اقتراحًا.
- **4.** Wir können einen Stadtplan ansehen oder etwas lesen.
  - يمكن النظر في خريطة أو القراءة؛ oder بديلان لا فعلين حدثا بالضرورة. können آخر المعنى الإمكاني لا إثبات التنفيذ.
- **5.** Nachdem wir angekommen sind, fahren wir mit dem Nahverkehr zum Museum.
  - Perfekt مع nachdem لإنجاز الوصول السابق في الخطة ثم Nahverkehr إلى المتحف؛ لا نوع وسيلة محلية معين.
- **6.** Genau. Dann müssen wir nicht für jeden Weg ein Auto nehmen.
  - nicht für jeden Weg ein Auto nehmen ينفي الحاجة للسيارة لكل طريق، لا منع السيارة أو إثبات حساب مناخي.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### DL-B1-09-AUD-READ-01

Zeynep und ihre Freunde planen einen Ausflug in die fiktive Stadt Uferstadt. Bevor sie losfahren, vergleichen sie die Fahrpläne von Zug und Bus. Sie entscheiden sich für den Zug und kaufen die Fahrkarten online. Nachdem sie die Tickets gebucht haben, prüfen sie, ob es am Ziel einen Anschluss gibt. Während der Zugfahrt liest Zeynep einen Reiseführer, und ihre Freunde hören einen Podcast. In Uferstadt gehen sie vom Bahnhof zu Fuß zum Markt und nehmen später den Nahverkehr zum Museum. Die Gruppe möchte möglichst klimafreundlich unterwegs sein. Deshalb legt sie die längere Strecke mit dem Zug zurück und geht kurze Wege zu Fuß.

**نتيجة المراجعة:** مطابقة نصية فقط لـreading: 8 وحدة نصية داخل 1 مقطع؛ محفوظة دون استماع أو توليد أو اعتماد. الحالة generated_pending_acoustic_review والتفريغ offer كما هما.

- **1.** Zeynep und ihre Freunde planen einen Ausflug in die fiktive Stadt Uferstadt.
  - مجموعة Zeynep وأصدقائها وخطة رحلة إلى مدينة خيالية صراحة؛ لا تحقق من وجهة جغرافية أو سفر منجز.
- **2.** Bevor sie losfahren, vergleichen sie die Fahrpläne von Zug und Bus.
  - قبل الانطلاق يقارنون جداول القطار والحافلة، لا الأسعار أو عدد السيارات؛ فعل التابعة losfahren آخرها.
- **3.** Sie entscheiden sich für den Zug und kaufen die Fahrkarten online.
  - اختاروا القطار واشتروا التذاكر إلكترونيًا في سرد الخطة؛ sich entscheiden für + Akkusativ وkaufen لا يضمنان الاتصال.
- **4.** Nachdem sie die Tickets gebucht haben, prüfen sie, ob es am Ziel einen Anschluss gibt.
  - بعد حجز التذاكر يفحصون هل توجد مواصلة؛ gebucht haben وob ... gibt صحيحان. الفحص ليس جوابًا بالإيجاب.
- **5.** Während der Zugfahrt liest Zeynep einen Reiseführer, und ihre Freunde hören einen Podcast.
  - Zeynep تقرأ Reiseführer والأصدقاء يسمعون Podcast؛ أثناء + Genitiv هنا وليس الرابط مع فعل أخير، وتبادل النشاطين خطأ فهم.
- **6.** In Uferstadt gehen sie vom Bahnhof zu Fuß zum Markt und nehmen später den Nahverkehr zum Museum.
  - من المحطة إلى السوق مشيًا، ثم نقل محلي إلى المتحف؛ لا مساواة بين السوق والمتحف أو كل الطريق مشيًا.
- **7.** Die Gruppe möchte möglichst klimafreundlich unterwegs sein.
  - المجموعة ترغب möglichst klimafreundlich؛ هذه رغبة مقيدة لا شهادة بيئية أو قياس الانبعاثات.
- **8.** Deshalb legt sie die längere Strecke mit dem Zug zurück und geht kurze Wege zu Fuß.
  - Deshalb يقدم سبب الاختيار المذكور: المسافة الأطول بالقطار والقصيرة مشيًا. legt ... zurück منفصل، ولا يثبت تفوقًا عامًا لكل قطار.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

### DL-B1-09-AUD-LST-01

Bevor ich aus dem Haus gehe, sehe ich mir den Fahrplan an. Heute fällt mein erster Bus aus. Während ich auf die nächste Verbindung warte, prüfe ich, ob ich in der Stadt umsteigen muss. Nachdem ich in den Zug eingestiegen bin, lese ich die Nachrichten. Wenn die Strecke kurz ist, gehe ich zu Fuß.

**نتيجة المراجعة:** مطابقة نصية فقط لـlistening: 5 وحدة نصية داخل 1 مقطع؛ محفوظة دون استماع أو توليد أو اعتماد. الحالة generated_pending_acoustic_review والتفريغ offer كما هما.

- **1.** Bevor ich aus dem Haus gehe, sehe ich mir den Fahrplan an.
  - فحص الجدول قبل مغادرة البيت: ich sehe mir ... an؛ الجملة لا تعطي اسم المتكلم أو جنسه.
- **2.** Heute fällt mein erster Bus aus.
  - الحافلة الأولى اليوم fällt aus، أي ملغاة/لا تعمل؛ ليست تأخرًا أو وصولًا مبكرًا.
- **3.** Während ich auf die nächste Verbindung warte, prüfe ich, ob ich in der Stadt umsteigen muss.
  - أثناء انتظار الوصلة التالية يفحص هل يلزم التبديل في المدينة؛ muss نهاية التابعة المتداخلة. جواب الحاجة غير معطى.
- **4.** Nachdem ich in den Zug eingestiegen bin, lese ich die Nachrichten.
  - بعد الصعود للقطار يقرأ الأخبار؛ eingestiegen bin يعبر اكتمال الصعود، لا أنه بدأ المشي إلى الإقامة.
- **5.** Wenn die Strecke kurz ist, gehe ich zu Fuß.
  - المشي مشروط بالمسافة القصيرة؛ Wenn لا يعني كل الطريق قصير أو أن المتكلم مشى من البيت إلى المحطة.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومطابقة داخلية بالمصدر؛ لا ينسب مرجع خارجي وقائع القصة الخيالية.

