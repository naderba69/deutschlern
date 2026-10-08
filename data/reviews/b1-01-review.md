# مراجعة CR31 — B1.1: als وwenn والتجارب

## إيصال رفع CR31 — 2026-10-08

- **التنفيذ:** `34e596a17f500cc83364a917268179a5d05065d6`؛ **المراجعة والفحوص:** `9899fa7645ea0cd63ebce75ee0f0d1e1d8fa82a1`. رُفع الاثنان إلى `arena/01a1036f-deutschlern`، وتطابق HEAD وorigin بعد كل رفع. هذا الإيصال تعديل توثيقي يُرفع فور فحصه بعنوان `Record CR31 delivery receipt and deployment limits`؛ معرفه فيgit log، ولا تنسب إليه حالة نشر سابقه.
- **آخر فحص PR#1:** OPEN، mergedAt=null، والرأس9899fa7. لم يُدمج العمل ولا يوصف المشروع بأنه مكتمل.
- **Vercel للتنفيذ34e596a:** success، وPreview رقم **6944923288** بحالةdeployment ناجحة: https://deutschlern-d64p1x83k-balinader-2671s-projects.vercel.app . **للمراجعة9899fa7:** فشل بسبب حد النشر، بلاdeployment. رفعGitHub نجح مستقلًا؛ لا إعادة نشر يدوية متكررة أو ترقية مدفوعة. نجاحPreview للتنفيذ ليس نجاح نشر أحدثcommit أوProduction أو اختبارًا للواجهة البعيدة؛ لم تختبر هذه. نشرcommit الإيصال غير مستعلم عنه.
- **الفحوص:** البناء والتحقق و31 حارسًا وخمس مجموعاتNode وخمس مجموعاتمتصفح PASS. الحزمة2,008,263 بايت وv78؛137 حالةaxe، صفر مخالفات للقواعد المختارة، مع93 ظهورًا غير حاسم/210 ظهورًا لعقد؛126 حالة عرض ضيق. نجحfilechooser في أول تشغيل هذا الدور، لكن سبب تذبذبه فيCR29 غير محلول.
- **الحفظ:**52 درسًا أخرى و1060 صف كتالوج أخرى و474MP3 وplaylist ثابتة؛ خمسة أصول/10 مقاطعB1.1 والأصوات محفوظة. فُحصت الأصول الخمسة لكن تغيرت **ثلاثة صفوف مرجعية فقط** للحوار والقراءة والاستماع فيsource_line، لا خمسة؛ أسطر المفردات والنماذج بقيت ثابتة. جميع الخيارات30 وفهارسها و80% محفوظة. لا استماع أو توليد أو اعتماد صوتي جديد.
- **التغطية:**97 وحدة/33 بندًا/11 مرجعًا كاملًا؛30/53 درسًا والبوابة منفصلة،23 متبقية. استُبعدت صفحةDuden للظرف اللهجيals، واستُخدمت صفحةالرابطالزمني. الفترة معals قد تضم نشاطًا متكررًا، وwenn قد يكون لحدث مستقبلي واحد؛ لا تعميم من صفحة واحدة على كل الاستعمالات.
- **التالي CR32/B1.2 — عادات الطعام وobwohl:** مراجعة كل نص وتمرين وبديل ومعيار، مع حفظ Mira02/Tarek03 والراوي02/الاستماع03. لا إعادة B1.1 أو تسجيلاته ولا مراجع بشري شرطًا للاستمرار. المحتوى والتقييم والتطبيق أولًا، وكل تعديل يُرفع فور فحص مجموعته. لا تبديل فرع أو دمج؛ بقية القرارات والملفات والفحوص في التقريرين وملفي التسليم.

رُوجع **B1.1 — الحياة اليومية والهوايات والتجارب: als وwenn** في **97 وحدة و33 بندًا أو مطلبًا داخل التمارين**، مع **11 مرجعًا مقروءًا كاملًا**. صُحح طلب T07: تغيير الرابط في كلتا الجملتين وفق السياق، لا جملة واحدة. وُضح أن als قد يحدد فترة كاملة تتكرر أنشطة داخلها، وwenn قد يكون لحدث مستقبلي واحد أو شرط. أزيل افتراض أول كاميرا وأول عرض وهدية غير مصرح بها من أسئلة الفهم. **P01/T08أ خمس جمل وP02/T08ب أربعة أسطر حوارية، وكلاهما كتابة ثم جهر**؛ مع التجربة والعادة والذكرى ومعايير ونموذجين متطابقين. أُصلح Q01/Q02→T04، وحُفظت الخيارات30 وفهارس المفاتيح و80%. الإصدار `b1-01-v2` والمخزن `v78`؛ خمسة أصول/10 مقاطع محفوظة دون استماع أو توليد أو اعتماد جديد. **الحملة30/53 درسًا والبوابة منفصلة؛ تبقى23، والتالي CR32/B1.2.** هذه تغطية نصية مفحوصة، لا دمج أو اكتمال المشروع أو شهادة مستوى.

## الملفات والرفع والخطوة التالية

- المصدر والتقييم `content/B1/lesson-01-daily-life-hobbies-experiences.md/.assessment.json`؛ الحزمة `data/course.json`؛20 صفًا في `data/production-task-catalog.csv` وثلاثة صفوف مرجعية في `data/audio-asset-register.csv` فقط.
- `service-worker.js` واختباراه؛ `tools/test_progression.cjs` و`tools/test_accessibility_audit.cjs`؛ الجديد `tools/test_b1_01_review.py`. لا تغييرapp.js أوCSS أوplaylist أوMP3 أوpackage/lock.
- السجلان `data/reviews/b1-01-review.json/.md` وفهرس المراجعات وREADME وPROGRESS وخطة التحسين2.37 وتقرير المتصفح وملفا التسليم. لا إعادة كتابة تاريخB2.6 أو استبداله بـB2.7.
- رُفع التنفيذ **`34e596a17f500cc83364a917268179a5d05065d6`** إلى الفرع الوحيد `arena/01a1036f-deutschlern` وتطابقHEAD معorigin. مجموعة السجل والفحوص بعنوان `Record CR31 granular B1.1 review and cumulative checks` تُرفع فور فحصها؛ معرفها فيgit log ثم إيصال التسليم.
- لا تبديل فرع أو دمجPR#1 أو ادعاء اكتمال المشروع. حالةPR وVercel باستعلام مستقل؛ رفعGitHub لا يعني نجاح النشر. لا إعادة نشر متكررة أو ترقية مدفوعة بسبب حد الخدمة. الواجهة البعيدة وProduction لم تختبرا هنا.
- بدأت المهمة بمقارنة713 ملفًا معorigin بعدfetch بصفر اختلاف أو إضافات، ثم استعيدتmetadata بـreset --mixed دون فقد عمل. لا تكرر reset أو تنظيفًا دون مقارنة جديدة.
- **التالي CR32/B1.2 — عادات الطعام وobwohl:** اقرأ `content/B1/lesson-02-food-habits-obwohl.md` وتقييمه وأصوله كاملة، ثم راجع كل نص وتمرين وبديل ومعيار وعلاقة التنازل بالمراجع. احفظ Mira02/Tarek03 والمفردات والنماذج والقراءة02 والاستماع03. لا حاجة لإعادةB1.1 أو تسجيلاته.
- القرارات مستمرة: كل تعديل يرفع فور فحص مجموعته؛ المحتوى والتقييم والتطبيق قبل الصوت؛ لا مراجع بشري شرطًا. لا إعادة توليد أو إخفاء أو تعيينready/نهائي بلا موافقة؛ حد10 طلبات صوت/رد. B1.9/B1.10 معلقان واختيارB1.11 محفوظ. احفظ الأصوات وA2.7 Q08→T05 وفحوص اتساقA2.9؛ لا محو عمل محلي أثناء استعادةGit.

## حدود المحتوى والصوت والمنهج

- als في الأمثلة الزمنية الماضية المحددة قد تصف فترة كالطفولة، ولا تعني أن اللعب داخلها حدث مرة واحدة فقط. وصف «حدث واحد» مختصر تعليمي، لا عداد لكل فعل في الحياة. يمكن أن تصف الجملة المقدمة فترة بينما تتكرر أنشطة الرئيسية داخلها.
- wenn للتكرار الماضي أو الزمن الحاضر/المستقبل، ومنها حدث مستقبلي واحد، وقد تعني شرطًا. درسنا لا يحصر كل استعمالاتها أو استعمالاتals ولا ينقل تعميم «التزامن دائمًا» من مصدر ثانوي فوق أمثلةDuden التي تبين علاقات متعددة. وجودPräteritum لا يفرضals؛ وwar معhabe teilgenommen طبيعي في الحوار.
- an+Akkusativ معsich erinnern مقابلan+Dativ معteilnehmen؛ ليس اختبارWo/Wohin. اختيار الحالة تابع للفعل. تصريف الضمير والتذكر حاضرًا لا يجعلان الذكرى نفسها حدثًا حاضرًا.
- عمر16 في القاعدة،17 لكريم،14 للينا في القراءة؛ الراوي غير مسمى وsie تعود إلىdie Person نحويًا. النص لا يقول أول كاميرا أو أول عرض في الحياة أو فوزًا بالبطولة أو نشرًا فعليًا للصور. Tante عمة أو خالة، وoft/regelmäßig لا يحددان كل مرة أو العدد. nicht mehr so oft لا تعني التوقف التام.
- كُتبت فقرة الرسم وحوار الشطرنج لشخصيتين خياليتين مستقلتين، بلا بيانات خاصة أو تسجيل أو شريك. الجهر مطلوب لكليهما؛ أربعة أسطر للحوار لا أربعة جمل، فالجواب الأخير قد يضم جملتين. طول النص والإقرارات لا يقيسان جودة اللغة أو النطق.
- **لا استماع أو توليد أو اعتماد صوتي جديد.** خمسة الأصول وعشرة المقاطع والحالات السابقة محفوظة. عنوان الأصلMODEL مختصر لكنه لا يلغي المثال الشرطي الرابع؛ شرح المصدر يوضح الحد. قيدا التسجيل فيA2.8/A2.9 السابقان لم يصححا فيالصوت، وبقي التوضيح المكتوب.
- قرئت11 صفحة كاملة؛ صفحةDuden /als للظرف اللهجي قرئت ثم استبعدت بدل استعمالها دليلًا للرابط. استُخدم/als_temporal الصحيح. نتائج البحث الأخرى وملفاتPDF المرتبطة لم تُقرأ ولا تُحسب مصادر. المراجع ليست شهادةCEFR أو دليل تحقق أحداث الشخصيات.

## الفحوص وحدودها — CR31

- **PASS:البناء والتحقق**؛ الحزمة **2,008,263 بايت** والمخزن **v78**.53 درسًا،428 عنوان تمرين، و**56 عنوانًا يحويه نمط عداد الحوار** بدل55: زيادة واحدة بسبب عنوانT08 «فقرة وحوار»، لا تسجيل جديد أو تغيير الحوار الأصلي.754 مفردة؛530 سؤال درس+10 للبوابة،109 مهمات أداء،1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending، دون تغيير حالة صوتية.
- **PASS:31 حارس مراجعة** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–12 وB1.1. حارسB1.1 يطابق97 وحدة و33 بندًا و30 بديلًا وستة معايير، والمصدر والربط والنموذجين والبصمات. فحوص البناء لا تُحسب مراجعة فردية لباقي الدروس.
- **PASS:خمس مجموعاتNode:**progression/service_worker/session_persistence/study_time/daily_plan، وصياغةapp.js وservice-worker.js وكل tools/test_*.cjs. أُصلحت نهاياتCSV العرضيةCRLF إلىLF الأصلية ومسافة نهاية سطر مضافة قبل الرفع؛ بعدهاgit diff --check PASS. لا تجاهل لفحص فاشل.
- **PASS:خمس مجموعات متصفح** browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout، على **Chromium143.0.7499.0**. حزمpackage-lock القائمة دون تغييرها، وSparticuz143.0.4 ومكتباتal2023 خارجGit. لا إعادة تشغيل لاختبار فاشل هذا الدور.
- العام عند1440×900 و390×844:RTL والتنقل والتفريغات وتشغيلMP3 بسرعتي1 و0.8 والإيقاف عند التنقل، والعمل دون اتصال ونطاقات البايت و416/503. تشغيل آلي صامت لا استماع لكل ملف ولا ضمان بقاء كل الصوت مخزنًا.
- تحديث عامل الخدمة منfixture v42 إلىv78 دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت المفقود ثم إعادة تخزينه عند الاتصال. ليس اختبارًا منفصلًا لكل ترحيل تاريخي.
- **progression:**سجلB1.1 القديمv1 يبقى مخزنًا لكنه لا يمنح إتقانv2 أو يفتحB1.2؛ المسودة القديمة لا تُستعاد كتقييم جديد. النسخة الحالية مع الدرجة والدليل تفتح التالي، وحذف الدليل يعيد المنع. P01/P02 يحتاجان إقرار الجهر وكل المعايير؛ تُرفض الاستجابة القصيرة أو الإقرار الناقص. نموذج230/290 حرفًا يتجاوز180/220. هذا ضبط للدليل لا تصحيح لغة أو نطق.
- **axe-core4.11.0:**137 حالة ممثلة، وصفر مخالفات للقواعد الآلية المختارة؛ **93 ظهورًا غير حاسم تشمل210 ظهورًا لعقد**. لا مخالفة مؤكدة من مجردincomplete ولا شهادةWCAG أو إلزام بمراجع بشري قبل الاستمرار.
- **النماذج:**نجح التشغيل الأول عند1440 و390:الحفظ وإعادة التحميل والتصدير والاستيراد والمسودات. **سبب تذبذبfilechooser فيCR29 باقٍ غير محلول**؛ نجاحCR30/CR31 لا يثبت إصلاحه، ولم يُعدّل اختبارforms_keyboard.
- **العرض الضيق:**126 حالة،63 عند320×900 و63 عند568×320، لكل الدروس مع التفريغات والجداول. viewport ليس جهازًا فعليًا أو تكبير نظام.
- **الحفظ مقابل `c5876d7d5e0be70c3baa48bc88926737c368209f`:**52 درسًا أخرى و1060 صف كتالوج أخرى و115 ملفًا محميًا مطابقة؛ تشمل مصادر الدروس الأخرى والبوابة وapp.js وCSS وpackage/lock وأداتيbuild/verify. كتلة فحوص الصوت السابقة بدءًا منexpectedAudioLessonByPrefix ثابتة، ومنها فحوصA2.9 وB1.1؛ أضيفت فحوصv2 قبلها دون إضعافها.
- playlist مطابق بايتًا ببايت؛474 ملفMP3 طابقت بصماتGit. فُحصت أصولB1.1 الخمسة؛ **تغيرت ثلاثة صفوف فقط فيaudio-register، فيsource_line وحده** للحوار والقراءة والاستماع، وبقي214 صفًا. المفردات والنماذج قبل المساعدة الجديدة فلم تتغير أسطرهما؛ هذا يصحح العدد الأولي5 الوارد في إشعار التنفيذ.
- الأصوات محفوظة:Lina00/Karim03، والمفردات والنماذج والقراءة02 والاستماع03. الأرقام16/17/14 تقابلsechzehn/siebzehn/vierzehn لفظًا؛ لا تبديل أعمار أو ترجمة رقم خاطئة. جميع الخيارات30 وفهارسها ثابتة؛ التغيير في السؤال والسياق والربط والمعايير، لا المفتاح.

## منهج العد

97 وحدة تغطي المصدر والتقييم والأصول. البنود33 داخل8 تمارين، لا33 تمرينًا:4/3/2/4/5/4/2/9. T08 خمسة مطالب للفقرة وأربعة أدوار للحوار؛ كل بديل من30 وكل معيار من6 وكل بند له نتيجة أدناه. التسجيلات13 قطعة معجمية و4 أمثلة و6 أدوار و7 جمل قراءة و4 استماع داخل10 ملفات، لا34 ملفًا.

## المراجع المقروءة كاملة — 2026-10-08

- **ALS — Duden — als، الرابط الزمني** [Duden — als، الرابط الزمني](https://www.duden.de/rechtschreibung/als_temporal): يذكر علاقة زمنية وقد تكون قبلًا أو تزامنًا أو بعدًا، ومثال damals, als sie noch klein war يدعم الفترة؛ لا يختزل كل استعمال في لحظة قصيرة أو تزامن حصري. الجزء0 من1، كامل.
- **WENN — Duden — wenn** [Duden — wenn](https://www.duden.de/rechtschreibung/wenn): يميز الشرط من الزمن ومن التكرار؛ مثال بدء العطلة لا يشترط عادة. لا ندرس كل معاني التمني والمقارنة والتنازل المذكورة في الصفحة. الجزء0 من1، كامل.
- **REMEMBER — Duden — erinnern** [Duden — erinnern](https://www.duden.de/rechtschreibung/erinnern): sich an etwas erinnern مع Akkusativ، مثل an den Vorfall؛ تمييز التذكّر الانعكاسي عن تذكير شخص، مع وجود استعمالات إقليمية ليست نموذج الدرس. الجزء0 من1، كامل.
- **JOIN — Duden — teilnehmen** [Duden — teilnehmen](https://www.duden.de/rechtschreibung/teilnehmen): nimmt teil/nahm teil/hat teilgenommen؛ an einem Seminar أوWettbewerb مع Dativ. المشاركة لا تثبت الفوز أو الإتمام أو الكلفة. الجزء0 من1، كامل.
- **NOW — Duden — inzwischen** [Duden — inzwischen](https://www.duden.de/rechtschreibung/inzwischen): قد يدل على حال وصلت إليها الأمور بعد وقت، أو في الأثناء، أو حتى حين لاحق. في النص حال التصوير الآن بعد التجربة، وليس معنى واحدًا لكل السياقات. الجزء0 من1، كامل.
- **EVENT — Duden — Erlebnis** [Duden — Erlebnis](https://www.duden.de/rechtschreibung/Erlebnis): محايد، جمعه Erlebnisse؛ حدث معيش مؤثر، قد يكون سارًا أو فظيعًا، وليس الذكرى Erinnerung ولا المعرفة المتراكمة بالضرورة. الجزء0 من1، كامل.
- **SUB — Lingolia — Nebensätze** [Lingolia — Nebensätze](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze): الفعل المصرف آخر التابعة، والفاصلة، وتبدأ الرئيسية بالمصرف بعد التابعة المقدمة. لا نعتمد تعميمات فقرات أخرى خارج هذا النطاق. الجزء0 من1، كامل.
- **ADV — Lingolia — Adverbialsätze** [Lingolia — Adverbialsätze](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/adverbialsaetze): يفرق نوع التابعة الزمني من الشرطي؛ هذا مرجع للتصنيف لا دليل منفرد على كل تفاصيل als/wenn. الجزء0 من1، كامل.
- **PAST — Lingolia — Präteritum** [Lingolia — Präteritum](https://deutsch.lingolia.com/de/grammatik/zeitformen/praeteritum): سرد الماضي والحالات؛ war/waren وhatte/hatten شائعان حتى في الكلام، و-e- مع جذع منتهٍ بـd/t يدعم endete. لا يفرض Präteritum على كل كلام عن الماضي. الجزء0 من1، كامل.
- **PERF — Lingolia — Perfekt** [Lingolia — Perfekt](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt): المساعد المصرف مع Partizip II، والشيوع في الكلام؛ gegangen معsein، وfotografiert بلاge بسبب-ieren، وteilgenommen معhaben. الجزء0 من1، كامل.
- **CONTRAST — Mein Deutschbuch — Temporalsätze mit wenn und als** [1](https://mein-deutschbuch.de/wenn-und-als/): يدعم مقابل الماضي المحدد/المتكرر وwenn لحدث مستقبلي واحد وترتيب الجمل وأمثلة Perfekt معwar. لا ننقل عبارته الافتتاحية عن Gleichzeitigkeit كقاعدة حصرية؛ Duden يذكر علاقات متعددة، والفترة كالطفولة ليست لحظة واحدة. الجزء0 من1، كامل.

**استبعاد موثق:** https://www.duden.de/rechtschreibung/als — صفحة الظرف اللهجي لا الرابط الزمني؛ ليست مصدرًا للقاعدة.

## سجل الوحدات الفردية

### scope-01

**النص:**

> # B1.1 — الحياة اليومية والهوايات والتجارب: als وwenn

**نتيجة المراجعة:** عنوان الحياة والهوايات والتجارب؛ لا يفرض شراء كاميرا أو زيارة نادي.

**المراجع ذات الصلة:** ALS, WENN, SUB, CONTRAST.

### scope-02

**النص:**

> **المدة المقترحة:** 40–45 دقيقة، ويمكن تقسيم العمل · **المهارات:** قراءة، استماع اختياري، سرد تجربة، قواعد، كتابة وجهر

**نتيجة المراجعة:** مدة مقترحة قابلة للتقسيم؛ الجهر صريح والاستماع اختياري، ولا يلزم إنهاء كل مهمة في 45 دقيقة.

**المراجع ذات الصلة:** ALS, WENN, SUB, CONTRAST.

### scope-03

**النص:**

> **الهدف:** أستطيع أن أحكي عن تجربة سابقة وأميّز بين حدث وقع مرة واحدة وعادة تكررت.

**نتيجة المراجعة:** هدف التمييز والسرد مدعوم بتدريب موجه وفقرة وحوار، لا بدرجة الاختيار وحدها.

**المراجع ذات الصلة:** ALS, WENN, SUB, CONTRAST.

### scope-04

**النص:**

> نستعمل **als** في هذه الأمثلة الزمنية لحدث أو فترة محددة في الماضي. الفترة قد تكون طويلة مثل الطفولة؛ لا تعني als أن كل نشاط داخلها وقع مرة واحدة فقط. في الجملة التابعة يأتي الفعل المصرف في النهاية.

**نتيجة المراجعة:** als قد يحدد فترة ماضية كاملة تتكرر خلالها أنشطة؛ أزيل احتمال فهمه على أنه مرة لعب واحدة في العمر.

**المراجع ذات الصلة:** ALS, WENN, SUB, CONTRAST.

### scope-05

**النص:**

> نستعمل **wenn** زمنيًا لما تكرر في الماضي، وكذلك لأحداث في الحاضر أو المستقبل، ومنها حدث مستقبلي واحد؛ وقد تعني «إذا» للشرط كما في مثال وقت الفراغ اليوم. لا يكفي وجود فعل ماضٍ لاختيار als: حدّد هل نتحدث عن فترة محددة أم مناسبات متكررة. وتُفصل الجملة التابعة عن الرئيسية بفاصلة.

**نتيجة المراجعة:** التكرار الماضي ليس كل استعمال wenn؛ أضيف الحدث المستقبلي الواحد مع فصل الزمن عن الشرط البسيط.

**المراجع ذات الصلة:** ALS, WENN, SUB, CONTRAST.

### scope-06

**النص:**

> النموذجان مكتوبان لشخصيتين متخيّلتين، وليسا نصين مسجلين أو إعادةً لحكاية لينا أو كريم أو راوي الاستماع. يمكن تغيير التفاصيل مع حفظ المطالب؛ عدد الحروف والإقرار لا يثبتان صحة اللغة تلقائيًا.

**نتيجة المراجعة:** نماذج خيالية مكتوبة غير مسجلة، لا امتدادًا لسيرة الشخصيات أو تعويضًا لتقييم اللغة آليًا.

**المراجع ذات الصلة:** ALS, WENN, SUB, CONTRAST.

### vocab-01

**النص:**

> | das Erlebnis | die Erlebnisse | التجربة/الحدث المميّز |

**نتيجة المراجعة:** Erlebnis محايد وجمعه Erlebnisse؛ تجربة معيشة مؤثرة، لا دائمًا سعيدة ولا مرادفًا تامًا للذكرى.

**المراجع ذات الصلة:** EVENT.

### vocab-02

**النص:**

> | der Verein | die Vereine | النادي/الجمعية |

**نتيجة المراجعة:** Verein مذكر وجمعه Vereine؛ نادي أو جمعية، لا موقع الويب نفسه.

### vocab-03

**النص:**

> | das Schachturnier | die Schachturniere | بطولة شطرنج |

**نتيجة المراجعة:** Schachturnier محايد وجمعه Schachturniere؛ بطولة، والمشاركة لا تعني الفوز.

### vocab-04

**النص:**

> | die Erinnerung | die Erinnerungen | الذكرى |

**نتيجة المراجعة:** Erinnerung مؤنث وجمعها Erinnerungen؛ ذكرى، لا الواقعة المعيشة نفسها.

### vocab-05

**النص:**

> | die Freizeit | — | وقت الفراغ |

**نتيجة المراجعة:** Freizeit مؤنث؛ وقت الفراغ هو المعنى السياقي المفرد هنا، والشرطة ليست ادعاء منع أي استعمال آخر.

### vocab-06

**النص:**

> | das Hobby | die Hobbys | الهواية |

**نتيجة المراجعة:** Hobby محايد وجمعه Hobbys؛ الهواية لا العمل الإلزامي.

### vocab-07

**النص:**

> | damals | — | آنذاك |

**نتيجة المراجعة:** damals ظرف بمعنى آنذاك في سياق ماضٍ؛ لا تصريف جمع.

### vocab-08

**النص:**

> | inzwischen | — | في هذه الأثناء / الآن بعد ذلك |

**نتيجة المراجعة:** inzwischen قد تعني في الأثناء أو الحال الآن بعد تغير؛ كلا المعنيين المذكورين مقيد بالسياق.

**المراجع ذات الصلة:** NOW.

### vocab-09

**النص:**

> | zum ersten Mal | — | للمرة الأولى |

**نتيجة المراجعة:** zum ersten Mal للمرة الأولى بالنسبة للنشاط المقصود، لا دليل على عمر بعينه دون النص.

### vocab-10

**النص:**

> | sich erinnern an | erinnert sich | يتذكر |

**نتيجة المراجعة:** sich erinnern an مصدر انعكاسي، و erinnert sich صيغة مفرد؛ ich erinnere mich و du erinnerst dich في الأمثلة.

**المراجع ذات الصلة:** REMEMBER.

### vocab-11

**النص:**

> | teilnehmen an | nimmt teil | يشارك في |

**نتيجة المراجعة:** teilnehmen an مصدر، و nimmt teil مفرد؛ an مع Dativ لا وجهة مكانية هنا.

**المراجع ذات الصلة:** JOIN.

### vocab-12

**النص:**

> | regelmäßig | — | بانتظام |

**نتيجة المراجعة:** regelmäßig بانتظام؛ لا يعني كل يوم أو عدد مرات محددًا.

### vocab-13

**النص:**

> | allein / gemeinsam | — | وحده / معًا |

**نتيجة المراجعة:** allein وحده و gemeinsam معًا؛ مفهومان مختلفان، و und في التسجيل تجمع قائمتين لا تجعل المعنيين مترادفين.

### grammar-01

**النص:**

> Als ich sechzehn Jahre alt war, bekam ich meine erste Kamera.

**نتيجة المراجعة:** سن 16 في مثال متكلم غير مسمى، لا عمر لينا في القراءة أو كريم في الحوار؛ هنا يقول صراحة erste Kamera.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, CONTRAST.

### grammar-02

**النص:**

> Als wir zum ersten Mal allein reisten, waren wir nervös.

**نتيجة المراجعة:** رحلة أولى محددة في الماضي؛ reisten و waren مع wir، وليس شرطًا حاضرًا.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, CONTRAST.

### grammar-03

**النص:**

> Wenn Lina am Wochenende Zeit hatte, fotografierte sie im Park.

**نتيجة المراجعة:** فراغ نهاية الأسبوع مناسبات ماضية متكررة مع wenn؛ التصوير في الحديقة، لا يعني كل عطلة بلا استثناء.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, CONTRAST.

### grammar-04

**النص:**

> Wenn ich heute frei habe, treffe ich meine Freunde.

**نتيجة المراجعة:** شرط فراغ اليوم مع Präsens؛ يثبت أن عنوان الأصل المختصر «wenn للعادة» ليس تعريفًا حصريًا للقاعدة.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, CONTRAST.

### helper-01

**النص:**

> - **فترة أم تكرار؟** في **Als ich ein Kind war, spielte ich gern Schach.** الطفولة فترة محددة، ويمكن أن يتكرر اللعب داخلها. أما **Wenn wir uns am Sonntag trafen, ...** في نص الاستماع فتصف لقاءات متكررة؛ لا عددًا معلومًا من أيام الأحد.

**نتيجة المراجعة:** يميز الفترة الفريدة من الأنشطة التي قد تتكرر داخلها، فلا يعامل مثال الطفولة كخطأ.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER, JOIN, NOW, EVENT, CONTRAST.

### helper-02

**النص:**

> - **wenn ليست للعادة فقط:** **Wenn ich morgen nach Hause komme, rufe ich dich an.** يصلح لعودة واحدة منتظرة غدًا. ندرس هنا الاستعمال الزمني والشرطي البسيط، لا كل استعمالات als وwenn أو أسلوب المقارنة.

**نتيجة المراجعة:** مثال عودة واحدة غدًا يرد على حصر wenn في العادات؛ لا مقارنة أو تمنٍّ مطلوبان.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER, JOIN, NOW, EVENT, CONTRAST.

### helper-03

**النص:**

> - **الفاصلة وموقع الفعل:** **Als ich jung war, spielte ich Fußball.** تأتي **war** في نهاية التابعة، وبعد تقديم التابعة تبدأ الرئيسية بـ**spielte** ثم **ich**. ويمكن أيضًا: **Ich spielte Fußball, als ich jung war.** في تمرين الترتيب اتبع البداية المحددة.

**نتيجة المراجعة:** الفعل آخر التابعة، والمصرف أول الرئيسية بعد الفاصلة؛ ترتيب بديل صحيح مع تحديد بداية تمرين الترتيب.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER, JOIN, NOW, EVENT, CONTRAST.

### helper-04

**النص:**

> - **الماضي لا يفرض زمنًا واحدًا:** **war/waren، hatte/hatten، endete، bekam، ging/gingen، traf/trafen** صيغ Präteritum. **habe teilgenommen، haben fotografiert، sind gegangen** صيغ Perfekt؛ الجمع بين **Als ich 17 war** و**habe ... teilgenommen** في الحوار طبيعي، وليس خطأ يجب تحويله كله إلى زمن واحد.

**نتيجة المراجعة:** war مع habe … teilgenommen ليس خلطًا خاطئًا؛ صور الماضي تساعد القراءة ولا تفرض زمنًا واحدًا آليًا.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER, JOIN, NOW, EVENT, CONTRAST.

### helper-05

**النص:**

> - **تذكّر ومشاركة:** **Ich erinnere mich an diesen Kurs. / Erinnerst du dich an deinen Kurs?** الضمير يتغير مع الفاعل، و**an + Akkusativ** هنا. أما **an einem Kurs teilnehmen** فمع **Dativ**؛ لا نختار الحالة بسؤال Wo أو Wohin لأن حرف الجر مرتبط بالفعل. **nimmt teil / hat teilgenommen** صيغتان للفعل نفسه.

**نتيجة المراجعة:** ضمير التذكر يتبع الفاعل؛ an+Akk للتذكر مقابل an+Dat للمشاركة، دون خلط بحركة مكانية.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER, JOIN, NOW, EVENT, CONTRAST.

### helper-06

**النص:**

> - **مفردات داخل النص:** **Porträts** صور شخصية، و**Partien** مباريات في سياق الشطرنج، و**neugierig** فضولي/محب للاستكشاف، و**lobte** أثنت، و**bekam** حصل/حصلت. **Erlebnis** حدث معيش يترك أثرًا؛ ليس دائمًا حدثًا سعيدًا، ولا هو نفسه **Erinnerung**، الذكرى.

**نتيجة المراجعة:** Porträts و Partien و neugierig و lobte و bekam دعم لما ورد في النص؛ Erlebnis ليس دائمًا حدثًا سارًا.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER, JOIN, NOW, EVENT, CONTRAST.

### helper-07

**النص:**

> - **علامات الزمن:** **damals** آنذاك؛ **seitdem** منذ ذلك الحين؛ **inzwischen** هنا الآن بعد التطور المذكور، وقد تعني «في هذه الأثناء» في سياق آخر. **nicht mehr so oft** تعني بتكرار أقل الآن، لا التوقف تمامًا. لا نستنتج الفوز من مجرد المشاركة في بطولة.

**نتيجة المراجعة:** يفصل seitdem/inzwischen؛ تكرار أقل ليس توقفًا، والبطولة لا تدل على الفوز.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER, JOIN, NOW, EVENT, CONTRAST.

### helper-08

**النص:**

> - **لا تخلط الأشخاص:** سن16 في مثال القاعدة، و17 لكريم في الحوار، و14 للينا في القراءة. النص يقول إن لينا حصلت على كاميرا من عمتها/خالتها، ولا يحدد هل كانت أول كاميرا أو أي جانب من العائلة؛ **Tante** تحتمل العمة والخالة. راوي الاستماع غير مسمى، و**sie** في أسئلته تعود إلى **die Person** نحويًا ولا تثبت جنس المتحدث.

**نتيجة المراجعة:** الأعمار 16/17/14 لأمثلة مختلفة؛ Tante لا تحدد عمة أم خالة؛ Person مؤنث نحوي لا إثبات جنس راوي الاستماع.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER, JOIN, NOW, EVENT, CONTRAST.

### helper-09

**النص:**

> - **حدود الدليل:** عرض الصور الموصوف كان في احتفال مدرسي؛ لا يخبرنا النص أين عرضتها أول مرة في حياتها. **für die Webseite** يبين الغرض من الصور، ولا يثبت أنها نُشرت فعلًا. **oft** لا تعني دائمًا، و**regelmäßig** لا تحدد عدد الدورات.

**نتيجة المراجعة:** المشهد المدرسي لا يثبت أول عرض في الحياة؛ غرض صور الموقع ليس دليل نشر، و oft/regelmäßig لا يحددان كل مرة أو عددًا.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER, JOIN, NOW, EVENT, CONTRAST.

### helper-10

**النص:**

> - **طريقة العمل:** اقرأ أو استمع ثم عد إلى الكلمات التي تثبت الجواب. المهمتان خياليتان؛ لا تذكر خبرة حساسة أو أسماء حقيقية ولا تتواصل مع شريك. اكتب الفقرة والحوار بنفسك واقرأ كليهما جهرًا؛ لا تسجيل مطلوب. التفريغ والحد الحرفي والإقرارات وسائل تعلم وليست تصحيحًا آليًا للغة أو النطق.

**نتيجة المراجعة:** عمل فردي خيالي دون بيانات حساسة أو شريك أو تسجيل؛ إقرار الجهر لا يقيس جودة النطق.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER, JOIN, NOW, EVENT, CONTRAST.

### dialogue-01

**النص:**

> Erinnerst du dich an deinen ersten Fotokurs?

**نتيجة المراجعة:** Lina تسأل Karim عن دورة التصوير الأولى، مع dich و an deinen ersten Fotokurs في Akkusativ.

**المراجع ذات الصلة:** REMEMBER, JOIN, ALS, WENN, SUB, PAST, PERF, NOW.

### dialogue-02

**النص:**

> Ja. Als ich siebzehn war, habe ich zum ersten Mal an einem Kurs teilgenommen.

**نتيجة المراجعة:** Karim يذكر عمر 17 وأول مشاركة في دورة؛ المساعد habe بعد التابعة و teilgenommen في نهاية الرئيسية.

**المراجع ذات الصلة:** REMEMBER, JOIN, ALS, WENN, SUB, PAST, PERF, NOW.

### dialogue-03

**النص:**

> Was hast du dort gemacht?

**نتيجة المراجعة:** سؤال عما فعل هناك؛ Perfekt طبيعي ولا يطلب مكانًا آخر.

**المراجع ذات الصلة:** REMEMBER, JOIN, ALS, WENN, SUB, PAST, PERF, NOW.

### dialogue-04

**النص:**

> Wir haben Porträts fotografiert. Wenn wir am Wochenende Zeit hatten, sind wir zusammen in den Park gegangen.

**نتيجة المراجعة:** تصوير Porträts ثم عادة الذهاب معًا للحديقة عند توفر الوقت؛ haben fotografiert مقابل sind gegangen. لا عدد دورات أو أسماء أشخاص مفترض.

**المراجع ذات الصلة:** REMEMBER, JOIN, ALS, WENN, SUB, PAST, PERF, NOW.

### dialogue-05

**النص:**

> Machst du das noch?

**نتيجة المراجعة:** Lina تسأل هل ما زال يمارس ذلك؛ ليس طلب موعد أو مشاركة جديدة.

**المراجع ذات الصلة:** REMEMBER, JOIN, ALS, WENN, SUB, PAST, PERF, NOW.

### dialogue-06

**النص:**

> Ja, inzwischen fotografiere ich auch auf Reisen.

**نتيجة المراجعة:** Karim يؤكد التصوير الآن أيضًا في السفر؛ لا يثبت أنه توقف عن التصوير في الحديقة أو عدد رحلاته.

**المراجع ذات الصلة:** REMEMBER, JOIN, ALS, WENN, SUB, PAST, PERF, NOW.

### reading-01

**النص:**

> Als Lina vierzehn Jahre alt war, bekam sie eine Kamera von ihrer Tante.

**نتيجة المراجعة:** حصلت لينا عند 14 على كاميرا من Tante؛ ليس 16 أو 17، ولا يصرح بأنها أول كاميرا أو شراء أو هدية.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, NOW.

### reading-02

**النص:**

> Sie war sofort neugierig.

**نتيجة المراجعة:** أصبحت فضولية فورًا؛ وصف استجابة لا إثبات موهبة أو إحراز جائزة.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, NOW.

### reading-03

**النص:**

> Wenn sie ihre Großeltern besuchte, fotografierte sie oft den Garten und die Tiere.

**نتيجة المراجعة:** كانت تصور الحديقة والحيوانات كثيرًا حين تزور الجدين؛ عادة مع wenn و oft لا كل زيارة حتمًا.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, NOW.

### reading-04

**النص:**

> Einmal zeigte sie ihre Bilder bei einem Schulfest.

**نتيجة المراجعة:** مشهد عرض في احتفال مدرسي؛ Einmal لا يخبرنا أول مكان عرض في كامل حياتها.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, NOW.

### reading-05

**النص:**

> Ihre Lehrerin lobte sie.

**نتيجة المراجعة:** المعلمة أثنت عليها؛ لا تقييم معين أو جائزة أو ضمان سبب قرار التسجيل.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, NOW.

### reading-06

**النص:**

> Seitdem nimmt Lina regelmäßig an Fotokursen teil.

**نتيجة المراجعة:** منذ ذلك الحين تشارك بانتظام في دورات؛ nimmt … teil مع an Fotokursen، لا يقول إنها أنهت كل دورة أو عددها.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, NOW.

### reading-07

**النص:**

> Inzwischen macht sie auch Bilder für die Webseite ihres Vereins.

**نتيجة المراجعة:** تصنع صورًا أيضًا لموقع ناديها؛ لا يثبت النص أن صور الاحتفال هي عينها صور الموقع أو أن النشر وقع.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, NOW.

### reading-question-01

**النص:**

> Wie alt war Lina, als sie die Kamera bekam?

**نتيجة المراجعة:** Sie war14 Jahre alt؛ حُذفت كلمة erste غير المسندة دون تغيير الصوت.

**المراجع ذات الصلة:** ALS, WENN, NOW.

### reading-question-02

**النص:**

> Von wem bekam sie die Kamera?

**نتيجة المراجعة:** Von ihrer Tante؛ السؤال عن المصدر لا فعل الإهداء المفترض، والعمة والخالة احتمالان في العربية.

**المراجع ذات الصلة:** ALS, WENN, NOW.

### reading-question-03

**النص:**

> Was fotografierte sie, wenn sie ihre Großeltern besuchte?

**نتيجة المراجعة:** Den Garten und die Tiere؛ لا الاقتصار على واحدة أو نقل الحديقة من حواركريم.

**المراجع ذات الصلة:** ALS, WENN, NOW.

### reading-question-04

**النص:**

> Wo zeigte sie einmal ihre Bilder?

**نتيجة المراجعة:** Bei einem Schulfest؛ المشهد المذكور لا أول عرض في الحياة.

**المراجع ذات الصلة:** ALS, WENN, NOW.

### reading-question-05

**النص:**

> Wofür macht sie inzwischen Bilder?

**نتيجة المراجعة:** Für die Webseite ihres Vereins؛ غرض الصور لا إثبات النشر.

**المراجع ذات الصلة:** ALS, WENN, NOW.

### listening-01

**النص:**

> Als ich ein Kind war, spielte ich gern Schach mit meinem Großvater.

**نتيجة المراجعة:** الطفولة فترة مع als، والشطرنج مع الجد نشاط قد يتكرر داخلها؛ ليس حكمًا بأن اللعب حدث مرة واحدة.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, JOIN, REMEMBER.

### listening-02

**النص:**

> Wenn wir uns am Sonntag trafen, spielten wir oft mehrere Partien.

**نتيجة المراجعة:** عند لقاءات الأحد لعبا غالبًا عدة مباريات؛ لا عدد محدد أو تأكيد كل أحد دون انقطاع.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, JOIN, REMEMBER.

### listening-03

**النص:**

> Später habe ich an einem Schachturnier teilgenommen.

**نتيجة المراجعة:** شارك لاحقًا في بطولة شطرنج مع haben+teilgenommen؛ لا فوز أو مدينة أو عمر أو صلة باسم Karim.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, JOIN, REMEMBER.

### listening-04

**النص:**

> Heute spiele ich nicht mehr so oft, aber ich erinnere mich gern an diese Zeit.

**نتيجة المراجعة:** الآن يلعب أقل ويتذكر تلك الفترة بسرور؛ nicht mehr so oft لا تعني أنه توقف تمامًا.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, JOIN, REMEMBER.

### listening-question-01

**النص:**

> Was spielte die Person als Kind?

**نتيجة المراجعة:** Schach؛ الهواية لا البطولة بوصفها لعبة مختلفة.

**المراجع ذات الصلة:** PAST, PERF, JOIN, REMEMBER.

### listening-question-02

**النص:**

> Wann spielte sie oft mit dem Großvater?

**نتيجة المراجعة:** Am Sonntag؛ اليوم لا ساعة أو تكرار أسبوعي إلزامي.

**المراجع ذات الصلة:** PAST, PERF, JOIN, REMEMBER.

### listening-question-03

**النص:**

> An welcher Veranstaltung nahm sie später teil?

**نتيجة المراجعة:** An einem Schachturnier؛ مشاركة لا فوز، وتحويل nahm…teil من habe teilgenommen صحيح.

**المراجع ذات الصلة:** PAST, PERF, JOIN, REMEMBER.

### listening-question-04

**النص:**

> Woran erinnert sie sich gern?

**نتيجة المراجعة:** An diese Zeit؛ الذكرى عن الفترة الموصوفة، ولا يكشف الصوت وحده هوية الشخصية أو جنسها.

**المراجع ذات الصلة:** PAST, PERF, JOIN, REMEMBER.

### paragraph-model-01

**النص:**

> Als ich zwölf Jahre alt war, besuchte ich meinen ersten Malkurs.

**نتيجة المراجعة:** تجربة أولى لدورة رسم عند 12 لشخصية خيالية؛ war أخيرًا ثم besuchte ich.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, REMEMBER.

### paragraph-model-02

**النص:**

> Dort lernte ich neue Freunde kennen.

**نتيجة المراجعة:** تفصيل التعرف إلى أصدقاء في الدورة؛ Dort ثم lernte ich، ولا يضيف حدثًا لا علاقة له بالهواية.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, REMEMBER.

### paragraph-model-03

**النص:**

> Wenn wir früher am Samstag Zeit hatten, malten wir zusammen im Park.

**نتيجة المراجعة:** عادة الرسم السبت حين توفر الوقت في الماضي؛ hatten في آخر التابعة ثم malten wir.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, REMEMBER.

### paragraph-model-04

**النص:**

> Heute male ich noch gern.

**نتيجة المراجعة:** الحال الحالي: ما زال يحب الرسم؛ يتمايز عن السرد الماضي.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, REMEMBER.

### paragraph-model-05

**النص:**

> Ich erinnere mich an diesen Kurs.

**نتيجة المراجعة:** ذكرى الدورة بصيغة Ich erinnere mich an diesen Kurs؛ Akkusativ معمذكر، وخمس جمل مكتملة.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, REMEMBER.

### dialogue-model-01

**النص:**

> A: Wann hast du zum ersten Mal Schach gespielt?

**نتيجة المراجعة:** سؤال Wann عن أول لعب شطرنج، لا wenn كرابط بدل أداة السؤال.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER.

### dialogue-model-02

**النص:**

> B: Als ich zehn Jahre alt war, spielte ich zum ersten Mal Schach.

**نتيجة المراجعة:** جواب als عن تجربة أولى عند 10؛ war أخيرًا ثم spielte ich، لا تكرار بلوغ السن.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER.

### dialogue-model-03

**النص:**

> A: Was hast du früher gemacht, wenn du am Sonntag Zeit hattest?

**نتيجة المراجعة:** سؤال عن عادة ماضية عند توفر الوقت الأحد؛ hattest مع du في التابعة.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER.

### dialogue-model-04

**النص:**

> B: Wenn ich am Sonntag Zeit hatte, spielte ich oft mit meiner Schwester. Ich erinnere mich an diese Nachmittage.

**نتيجة المراجعة:** جواب wenn مع hatte و spielte ثم ذكرى بعد ظهرات Akkusativ جمع؛ الدور الأخير جملتان، فيبقى الحوار 4 أسطر لا 4 جمل.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, PERF, REMEMBER.

### card-01

**النص:**

> - **Als ich 14 war, bekam ich eine Kamera.** → عندما كان عمري 14 سنة، حصلت على كاميرا.

**نتيجة المراجعة:** مثال سن 14 وحصول كاميرا، لا يضيف أنها الأولى أو يخلطه بسن 16 في القاعدة.

**المراجع ذات الصلة:** ALS, WENN, REMEMBER, NOW.

### card-02

**النص:**

> - **Wenn wir Zeit hatten, gingen wir spazieren.** → كلما كان لدينا وقت، كنا نتمشّى.

**نتيجة المراجعة:** تكرار عند توفر الوقت في الماضي؛ hatten/gingen مع wir.

**المراجع ذات الصلة:** ALS, WENN, REMEMBER, NOW.

### card-03

**النص:**

> - **Ich erinnere mich an diese Zeit.** → أتذكر تلك الفترة.

**نتيجة المراجعة:** تذكّر فترة محددة مع mich و an diese Zeit؛ ليس تذكير شخص آخر.

**المراجع ذات الصلة:** ALS, WENN, REMEMBER, NOW.

### card-04

**النص:**

> - **inzwischen** → الآن بعد ذلك / في الوقت الحالي.

**نتيجة المراجعة:** inzwischen في سياق التحول إلى الحال الآن؛ ليس هذا ترجمة وحيدة لكل استعمال، والشرح السابق يبين البدائل.

**المراجع ذات الصلة:** ALS, WENN, REMEMBER, NOW.

### DL-B1-01-T01

**النص:**

> 1. ______ ich zehn Jahre alt war, lernte ich schwimmen. (حدث/فترة واحدة)
> 2. ______ wir die Großeltern besuchten, aßen wir zusammen. (عادة متكررة)
> 3. ______ ich zum ersten Mal allein reiste, war ich nervös.
> 4. ______ ich heute Zeit habe, lese ich ein Buch. (شرط اليوم، لا حدث ماضٍ)

**نتيجة المراجعة:** أربعة اختيارات بسياق ماضٍ محدد أو تكرار أو شرط.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, REMEMBER, JOIN, EVENT, CONTRAST.

**البنود:**

1. ______ ich zehn Jahre alt war, lernte ich schwimmen. (حدث/فترة واحدة)
   - عمر 10 فترة محددة مع تعلم السباحة؛ Als بحسب القرينة لا لمجرد وجود ماضٍ. الجواب: Als.
2. ______ wir die Großeltern besuchten, aßen wir zusammen. (عادة متكررة)
   - زيارات متكررة صراحة؛ Wenn يحفظ المعنى. الجواب: Wenn.
3. ______ ich zum ersten Mal allein reiste, war ich nervös.
   - سفرة أولى محددة في الماضي؛ Als. الجواب: Als.
4. ______ ich heute Zeit habe, lese ich ein Buch. (شرط اليوم، لا حدث ماضٍ)
   - شرط توفر الوقت اليوم؛ Wenn لا Als للماضي. الجواب: Wenn.

### DL-B1-01-T02

**النص:**

> اكتب صيغة Präteritum المناسبة للفاعل، في نهاية التابعة:
> 
> 1. Als Rania neu in der Stadt ______, kannte sie niemanden. (sein)
> 2. Wenn wir als Kinder Ferien ______, fuhren wir ans Meer. (haben)
> 3. Als der Kurs ______, machten alle ein Foto. (enden)

**نتيجة المراجعة:** ثلاثة تصريفات Präteritum في آخر التابعة.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, REMEMBER, JOIN, EVENT, CONTRAST.

**البنود:**

1. Als Rania neu in der Stadt ______, kannte sie niemanden. (sein)
   - war للمفرد Rania من sein؛ زمن Präteritum صار مصرحًا به. الجواب: war.
2. Wenn wir als Kinder Ferien ______, fuhren wir ans Meer. (haben)
   - hatten مع wir؛ جمع وماضٍ لا hat أو haben. الجواب: hatten.
3. Als der Kurs ______, machten alle ein Foto. (enden)
   - endete مع der Kurs؛ -ete مع جذر ينتهي بـ d، والفعل أخيرًا. الجواب: endete.

### DL-B1-01-T03

**النص:**

> ابدأ الجملة1 بـAls والجملة2 بـWenn؛ أضف الفاصلة بين الجملتين والنقطة في النهاية:
> 
> 1. als / ich / jung / war / spielte / ich / Fußball
> 2. Wenn / sie / Zeit / hatte / besuchte / sie / den Verein

**نتيجة المراجعة:** ترتيبان ببداية محددة وفاصلة؛ يدعم Q04.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, REMEMBER, JOIN, EVENT, CONTRAST.

**البنود:**

1. als / ich / jung / war / spielte / ich / Fußball
   - بداية Als محددة؛ war أخيرًا ثم spielte ich؛ فترة الشباب لا مباراة واحدة فقط. الجواب: Als ich jung war, spielte ich Fußball..
2. Wenn / sie / Zeit / hatte / besuchte / sie / den Verein
   - بداية Wenn محددة؛ hatte أخيرًا ثم besuchte sie؛ ترتيب الكلمات يحفظ معنى العادة. الجواب: Wenn sie Zeit hatte, besuchte sie den Verein..

### DL-B1-01-T04

**النص:**

> **أ — معنى الرابط:**
> 
> 1. **Als ich 18 war, zog ich um.** تعني:  
> أ. انتقلت مرة في فترة كنت فيها 18 عامًا.  ب. كنت أنتقل كلما بلغت 18 عامًا.
> 2. **Wenn wir frei hatten, gingen wir wandern.** تعني:  
> أ. حدث واحد فقط.  ب. عادة متكررة في الماضي.
> 
> **ب — مفردات وتجربة:**
> 
> 3. ما معنى **das Erlebnis**؟ اختر: تجربة/حدث معيش مميز — النادي/الجمعية.
> 4. أي تركيب يعني «يشارك في دورة»؟ اختر: **an einem Kurs teilnehmen** — **sich für einen Kurs interessieren**.

**نتيجة المراجعة:** معنيان للروابط ومفردتان لدعم Q01/Q02 و Q05 بدل ربط المفردات بتدريب الرابط فقط.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, REMEMBER, JOIN, EVENT, CONTRAST.

**البنود:**

1. **Als ich 18 war, zog ich um.** تعني:  
   - أ: انتقال موصوف خلال فترة سن 18، لا كلما بلغ 18. لا يثبت أنه انتقل مرة فقط في حياته. الجواب: أ.
2. **Wenn wir frei hatten, gingen wir wandern.** تعني:  
   - ب: عادة متكررة عندما يتفرغان، لا حدث مفرد. الجواب: ب.
3. ما معنى **das Erlebnis**؟ اختر: تجربة/حدث معيش مميز — النادي/الجمعية.
   - Erlebnis تجربة أو حدث معيش؛ Verein نادي، وقد تكون التجربة سارة أو غير سارة. الجواب: تجربة/حدث معيش مميز.
4. أي تركيب يعني «يشارك في دورة»؟ اختر: **an einem Kurs teilnehmen** — **sich für einen Kurs interessieren**.
   - an einem Kurs teilnehmen مشاركة؛ sich interessieren اهتمام لا مشاركة. الجواب: an einem Kurs teilnehmen.

### DL-B1-01-T05

**النص:**

> حدّد صحيحًا أو خطأ:
> 
> 1. Lina bekam die Kamera von ihrer Tante.
> 2. Sie fotografierte oft den Garten und die Tiere, wenn sie ihre Großeltern besuchte.
> 3. In der beschriebenen Szene zeigte sie ihre Bilder in einer Zeitung.
> 4. Heute macht sie auch Bilder für die Webseite ihres Vereins.
> 5. Lina war 14 Jahre alt, als sie die Kamera bekam.

**نتيجة المراجعة:** خمسة أحكام مسندة للقراءة بعد تقييد المشهد وإضافة العمر.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, REMEMBER, JOIN, EVENT, CONTRAST.

**البنود:**

1. Lina bekam die Kamera von ihrer Tante.
   - صحيح: الكاميرا من Tante لا المعلمة. الجواب: صحيح.
2. Sie fotografierte oft den Garten und die Tiere, wenn sie ihre Großeltern besuchte.
   - صحيح: الحديقة والحيوانات عند زيارة الجدين؛ oft لا تعني كل زيارة. الجواب: صحيح.
3. In der beschriebenen Szene zeigte sie ihre Bilder in einer Zeitung.
   - خطأ: المشهد الموصوف احتفال مدرسي لا صحيفة؛ أزيلت دعوى أول عرض. الجواب: خطأ.
4. Heute macht sie auch Bilder für die Webseite ihres Vereins.
   - صحيح: صور لموقع ناديها، لا مجرد أي نادي دون تحديد الغرض. الجواب: صحيح.
5. Lina war 14 Jahre alt, als sie die Kamera bekam.
   - صحيح: عمر 14؛ أضيف لدعم Q06 مباشرة. الجواب: صحيح.

### DL-B1-01-T06

**النص:**

> استخدم الكلمات مرة واحدة: **Schach — Sonntag — Schachturnier — Zeit**.
> 
> أكمل: 1. Als Kind spielte die Person gern ______. 2. Sie spielte oft mit ihrem Großvater am ______. 3. Später nahm die Person an einem ______ teil. 4. Sie erinnert sich gern an diese ______.

**نتيجة المراجعة:** أربعة فراغات مع بنك كلمات، دون تخمين جنس الراوي أو هويته.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, REMEMBER, JOIN, EVENT, CONTRAST.

**البنود:**

1. Als Kind spielte die Person gern ______.
   - Schach اسم اللعبة؛ لا Schachturnier اسم الحدث. الجواب: Schach.
2. Sie spielte oft mit ihrem Großvater am ______.
   - Sonntag اسم اليوم، لا عدد اللقاءات أو الساعة. الجواب: Sonntag.
3. Später nahm die Person an einem ______ teil.
   - Schachturnier بطولة المشاركة، لا فوز مؤكد. الجواب: Schachturnier.
4. Sie erinnert sich gern an diese ______.
   - Zeit الفترة التي يتذكرها؛ die Person مؤنث نحوي لا جنس المتحدث. الجواب: Zeit.

### DL-B1-01-T07

**النص:**

> صحّح الرابط في **كلتا الجملتين** وفق المعنى المحدد بين القوسين؛ الثانية تصف زيارات خلال عطلات متكررة، لا عطلة واحدة بعينها:
> 
> 1. **Wenn ich zum ersten Mal nach Wien kam, war ich sehr aufgeregt.** (حدث واحد)
> 2. **Als wir früher Ferien hatten, besuchten wir oft unsere Tante.** (عادة متكررة)

**نتيجة المراجعة:** صحّح الرابطين لا واحدًا فقط، وفق المعنى المحدد.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, REMEMBER, JOIN, EVENT, CONTRAST.

**البنود:**

1. **Wenn ich zum ersten Mal nach Wien kam, war ich sehr aufgeregt.** (حدث واحد)
   - Als بدل Wenn لأن الزيارة الأولى حدث ماضٍ محدد في المطلوب. الجواب: Als ich zum ersten Mal nach Wien kam, war ich sehr aufgeregt..
2. **Als wir früher Ferien hatten, besuchten wir oft unsere Tante.** (عادة متكررة)
   - Wenn بدل Als لأن المطلوب عطلات وزيارات متكررة؛ Als قد تكون سليمة في سياق عطلة واحدة، لكن ليس ذلك المعطى. الجواب: Wenn wir früher Ferien hatten, besuchten wir oft unsere Tante..

### DL-B1-01-T08

**النص:**

> **أ — P01: فقرة مع الجهر**
> 
> اكتب خمس جمل مترابطة عن هواية لشخصية متخيّلة: جملة بـals لتجربة أولى أو حدث ماضٍ محدد؛ جملة لتفصيل ما حدث؛ جملة بـwenn لعادة متكررة في الماضي؛ جملة عن الهواية الآن؛ وجملة فيها **Ich erinnere mich an ...** لذكرى مرتبطة بها. ضع الفعل المصرف في نهاية التابعة، واقرأ الفقرة جهرًا. لا يلزم تسجيلها أو سرد تجربة شخصية.
> 
> **ب — P02: حوار مكتوب مع الجهر**
> 
> اكتب حوارًا خياليًا من أربعة أسطر: سؤال عن تجربة أولى لهواية؛ جواب يبدأ بـals يصف تلك التجربة في الماضي؛ سؤال عن نشاط تكرر في الماضي؛ وجواب يبدأ بـwenn يصف العادة ويضيف **Ich erinnere mich an ...** لذكرى مرتبطة بها. يمكن أن يحتوي الجواب الأخير جملتين. اكتب دوري الحوار بنفسك، ثم اقرأهما جهرًا دون شريك أو تسجيل.

**نتيجة المراجعة:** فقرة خمس جمل وحوار أربعة أسطر، كلاهما مكتوب ثم جهر؛ لكل منهما تجربة وعادة وذكرى، دون شريك أو تسجيل. المطالب النصية تطابق التقييم، لا شرح غامض واحد لمهمتين.

**المراجع ذات الصلة:** ALS, WENN, SUB, REMEMBER.

**البنود:**

1. P01، الجملة1: Als ich zwölf Jahre alt war, besuchte ich meinen ersten Malkurs.
   - تجربة أولى لدورة رسم عند 12 لشخصية خيالية؛ war أخيرًا ثم besuchte ich.
2. P01، الجملة2: Dort lernte ich neue Freunde kennen.
   - تفصيل التعرف إلى أصدقاء في الدورة؛ Dort ثم lernte ich، ولا يضيف حدثًا لا علاقة له بالهواية.
3. P01، الجملة3: Wenn wir früher am Samstag Zeit hatten, malten wir zusammen im Park.
   - عادة الرسم السبت حين توفر الوقت في الماضي؛ hatten في آخر التابعة ثم malten wir.
4. P01، الجملة4: Heute male ich noch gern.
   - الحال الحالي: ما زال يحب الرسم؛ يتمايز عن السرد الماضي.
5. P01، الجملة5: Ich erinnere mich an diesen Kurs.
   - ذكرى الدورة بصيغة Ich erinnere mich an diesen Kurs؛ Akkusativ معمذكر، وخمس جمل مكتملة.
6. P02، السطر1: A: Wann hast du zum ersten Mal Schach gespielt?
   - سؤال Wann عن أول لعب شطرنج، لا wenn كرابط بدل أداة السؤال.
7. P02، السطر2: B: Als ich zehn Jahre alt war, spielte ich zum ersten Mal Schach.
   - جواب als عن تجربة أولى عند 10؛ war أخيرًا ثم spielte ich، لا تكرار بلوغ السن.
8. P02، السطر3: A: Was hast du früher gemacht, wenn du am Sonntag Zeit hattest?
   - سؤال عن عادة ماضية عند توفر الوقت الأحد؛ hattest مع du في التابعة.
9. P02، السطر4: B: Wenn ich am Sonntag Zeit hatte, spielte ich oft mit meiner Schwester. Ich erinnere mich an diese Nachmittage.
   - جواب wenn مع hatte و spielte ثم ذكرى بعد ظهرات Akkusativ جمع؛ الدور الأخير جملتان، فيبقى الحوار 4 أسطر لا 4 جمل.

### DL-B1-01-Q01

**النص:**

> ما معنى الاسم **das Erlebnis**؟

**نتيجة المراجعة:** das Erlebnis تعني تجربة أو حدثًا مميّزًا، أما الذكرى فهي die Erinnerung.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, REMEMBER, EVENT, CONTRAST.

**الجواب:** تجربة أو حدث مميّز.

**البدائل:**

1. النادي أو الجمعية. — غير المختار في هذا السؤال
   - النادي أو الجمعية معنى Verein لا Erlebnis.
2. تجربة أو حدث مميّز. — الصحيح
   - التجربة أو الحدث المميز هو المعنى المناسب.
3. الذكرى. — غير المختار في هذا السؤال
   - الذكرى Erinnerung، لا الحدث المعيش نفسه.

### DL-B1-01-Q02

**النص:**

> أي تركيب يعني «يشارك في دورة»؟

**نتيجة المراجعة:** التركيب teilnehmen an يعني يشارك في؛ ومع einem Kurs يأتي حرف الجر an مع Dativ.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, REMEMBER, EVENT, CONTRAST.

**الجواب:** an einem Kurs teilnehmen

**البدائل:**

1. sich für einen Kurs interessieren — غير المختار في هذا السؤال
   - اهتمام بالدورة لا المشاركة.
2. sich an einen Kurs erinnern — غير المختار في هذا السؤال
   - تذكّر الدورة لا المشاركة.
3. an einem Kurs teilnehmen — الصحيح
   - المشاركة مع an einem Kurs؛ Dativ للمذكر.

### DL-B1-01-Q03

**النص:**

> أكمل بصيغة الماضي المناسبة، مع وضع الفعل في نهاية الجملة التابعة: **Als der Kurs ___, machten alle ein Foto.** (enden)

**نتيجة المراجعة:** الفاعل مفرد والموقف ماضٍ: endete. ويأتي الفعل المصرف في نهاية جملة als التابعة.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, REMEMBER, EVENT, CONTRAST.

**الجواب:** endete

**البدائل:**

1. endete — الصحيح
   - endete ماضٍ مفرد مناسب للسياق.
2. endet — غير المختار في هذا السؤال
   - endet مضارع لا صيغة الماضي المطلوبة.
3. enden — غير المختار في هذا السؤال
   - enden مصدر أو جمع حاضر، لا مفرد ماضٍ.

### DL-B1-01-Q04

**النص:**

> أي جملة ترتب الكلمات **als / ich / jung / war / spielte / ich / Fußball** ترتيبًا صحيحًا؟

**نتيجة المراجعة:** في التابعة يأتي war أخيرًا، وبعد تقديمها والفاصلة تبدأ الرئيسية بـ spielte ثم ich. تصف als فترة الشباب؛ لا يلزم أن اللعب وقع مرة واحدة فقط.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, REMEMBER, EVENT, CONTRAST.

**الجواب:** Als ich jung war, spielte ich Fußball.

**البدائل:**

1. Als ich war jung, spielte ich Fußball. — غير المختار في هذا السؤال
   - war ليس آخر التابعة.
2. Als war ich jung, spielte Fußball ich. — غير المختار في هذا السؤال
   - war قبل الفاعل و Fußball ich في الرئيسية لا الترتيب المطلوب.
3. Als ich jung war, spielte ich Fußball. — الصحيح
   - war آخر التابعة؛ spielte ich بعد الفاصلة.

### DL-B1-01-Q05

**النص:**

> ما المعنى الأنسب للجملة **Als ich 18 war, zog ich um**؟

**نتيجة المراجعة:** تحدد als هنا فترة ماضية وقع فيها الانتقال الموصوف، لا عادة مع كل بلوغ 18 أو شرطًا مستقبليًا. لا نثبت من الجملة عدد انتقالات الشخص طوال حياته.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, REMEMBER, EVENT, CONTRAST.

**الجواب:** انتقلت مرةً في فترة ماضية محددة.

**البدائل:**

1. كنت أنتقل كلما بلغت 18 عامًا. — غير المختار في هذا السؤال
   - لا بلوغ 18 متكررًا كل مرة.
2. انتقلت مرةً في فترة ماضية محددة. — الصحيح
   - انتقال موصوف في فترة ماضية محددة؛ لا تعداد انتقالات الحياة.
3. سأنتقل إذا بلغت 18 عامًا. — غير المختار في هذا السؤال
   - ليست جملة شرط ومستقبل.

### DL-B1-01-Q06

**النص:**

> Wie alt war Lina, als sie die Kamera bekam?

**نتيجة المراجعة:** يذكر نص القراءة أنها حصلت على الكاميرا عندما كان عمرها 14 عامًا.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, REMEMBER, EVENT, CONTRAST.

**الجواب:** Sie war 14 Jahre alt.

**البدائل:**

1. Sie war 16 Jahre alt. — غير المختار في هذا السؤال
   - 16 من مثال القاعدة لا عمر لينا في القراءة.
2. Sie war 17 Jahre alt. — غير المختار في هذا السؤال
   - 17 لكريم في الحوار لا عمر لينا.
3. Sie war 14 Jahre alt. — الصحيح
   - 14 في أول جملة من القراءة؛ حُذفت فرضية أول كاميرا.

### DL-B1-01-Q07

**النص:**

> Was fotografierte Lina oft, wenn sie ihre Großeltern besuchte?

**نتيجة المراجعة:** يقول النص إنها كانت تصوّر الحديقة والحيوانات كثيرًا عند زيارة جدّيها؛ oft لا تعني في كل زيارة بلا استثناء.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, REMEMBER, EVENT, CONTRAST.

**الجواب:** Den Garten und die Tiere.

**البدائل:**

1. Den Garten und die Tiere. — الصحيح
   - الحديقة والحيوانات صريحان.
2. Den Park und ihre Freunde. — غير المختار في هذا السؤال
   - الحديقة والأصدقاء ليست الإجابة في القراءة.
3. Die Webseite ihres Vereins. — غير المختار في هذا السؤال
   - تصوير للموقع لاحقًا، لا أنها صورت صفحة الويب عند الجدين.

### DL-B1-01-Q08

**النص:**

> Wo zeigte Lina einmal ihre Bilder?

**نتيجة المراجعة:** المشهد المذكور: عرضت صورها في احتفال مدرسي. لا يحدد النص أول مكان عرض في حياتها، ولا يؤكد نشر صور الموقع فعليًا.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, REMEMBER, EVENT, CONTRAST.

**الجواب:** Bei einem Schulfest.

**البدائل:**

1. In einem Fotokurs. — غير المختار في هذا السؤال
   - لا يقول إن عرض المشهد كان في دورة.
2. Auf der Webseite ihres Vereins. — غير المختار في هذا السؤال
   - الغرض الحالي صنع صور للموقع، لا إثبات عرض ذلك المشهد على الموقع.
3. Bei einem Schulfest. — الصحيح
   - الاحتفال المدرسي هو المشهد المذكور.

### DL-B1-01-Q09

**النص:**

> Wofür macht Lina inzwischen auch Bilder?

**نتيجة المراجعة:** تصنع الآن صورًا أيضًا لموقع ناديها؛ für يحدد الغرض، لا يثبت النشر الفعلي.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, REMEMBER, EVENT, CONTRAST.

**الجواب:** Für die Webseite ihres Vereins.

**البدائل:**

1. Für ein Reisebüro. — غير المختار في هذا السؤال
   - مكتب سفر غير مذكور.
2. Für die Webseite ihres Vereins. — الصحيح
   - لموقع ناديها، دون ضمان النشر.
3. Für die Zeitung ihrer Stadt. — غير المختار في هذا السؤال
   - صحيفة المدينة غير مذكورة.

### DL-B1-01-Q10

**النص:**

> في الجملة التالية استُعمل الرابط خطأً لأن الحديث عن أول زيارة محددة. ما التصحيح المناسب؟ **Wenn ich zum ersten Mal nach Wien kam, war ich sehr aufgeregt.**

**نتيجة المراجعة:** الزيارة الأولى حدث ماضٍ واحد؛ لذا نستخدم als بدل wenn.

**المراجع ذات الصلة:** ALS, WENN, SUB, PAST, JOIN, REMEMBER, EVENT, CONTRAST.

**الجواب:** Als ich zum ersten Mal nach Wien kam, war ich sehr aufgeregt.

**البدائل:**

1. Als ich zum ersten Mal nach Wien kam, war ich sehr aufgeregt. — الصحيح
   - Als لتلك الزيارة الأولى المحددة في الماضي.
2. Wenn ich zum ersten Mal nach Wien kam, war ich sehr aufgeregt. — غير المختار في هذا السؤال
   - يبقي الرابط غير المناسب للسياق المحدد.
3. Wenn ich zum ersten Mal nach Wien komme, war ich sehr aufgeregt. — غير المختار في هذا السؤال
   - Wenn مع komme والماضي war لا يصلح التصحيح المطلوب.

### DL-B1-01-P01

**النص:**

> اكتب خمس جمل مترابطة عن هواية لشخصية متخيّلة: جملة بـals لتجربة أولى أو حدث ماضٍ محدد؛ جملة لتفصيل ما حدث؛ جملة بـwenn لعادة متكررة في الماضي؛ جملة عن الهواية الآن؛ وجملة فيها **Ich erinnere mich an ...** لذكرى مرتبطة بها. ضع الفعل المصرف في نهاية التابعة، واقرأ الفقرة جهرًا. لا يلزم تسجيلها أو سرد تجربة شخصية.

**نتيجة المراجعة:** المصدر والمعايير والنموذج ونمط الدليل متطابقة؛ الحد الحرفي والإقرار ليسا تصحيحًا آليًا للغة أو النطق.

**المراجع ذات الصلة:** ALS, WENN, SUB, REMEMBER.

**المعايير:**

1. خمس جمل تتضمن تجربة محددة وتفصيلًا وعادة متكررة وحال الهواية الآن وذكرى، مع قراءة الفقرة جهرًا.
   - خمس جمل بمطالب محددة والجهر؛ النموذج 230 حرفًا فوق 180، لا خمس جمل غير مرتبطة.
2. تتصل الجمل بهواية الشخصية الخيالية، ويُفهم الفرق بين التجربة والعادة والحال الآن وما تتذكره.
   - تجربة الدورة وتفصيلها وعادة الرسم والحال الآن والذكرى موضوع واحد خيالي.
3. als للحدث الماضي المحدد وwenn للعادة الماضية، مع الفعل المصرف آخر التابعة ورئيسية سليمة؛ Ich erinnere mich an مع Akkusativ.
   - als للحدث المحدد و wenn للتكرار، و an diesen Kurs في Akkusativ؛ الفعل أخيرًا والرئيسية سليمة.

**الدليل المحلي:** حد 180 حرفًا؛ الجهر مطلوب؛ لا تسجيل مطلوب.

### DL-B1-01-P02

**النص:**

> اكتب حوارًا خياليًا من أربعة أسطر: سؤال عن تجربة أولى لهواية؛ جواب يبدأ بـals يصف تلك التجربة في الماضي؛ سؤال عن نشاط تكرر في الماضي؛ وجواب يبدأ بـwenn يصف العادة ويضيف **Ich erinnere mich an ...** لذكرى مرتبطة بها. يمكن أن يحتوي الجواب الأخير جملتين. اكتب دوري الحوار بنفسك، ثم اقرأهما جهرًا دون شريك أو تسجيل.

**نتيجة المراجعة:** المصدر والمعايير والنموذج ونمط الدليل متطابقة؛ الحد الحرفي والإقرار ليسا تصحيحًا آليًا للغة أو النطق.

**المراجع ذات الصلة:** ALS, WENN, SUB, REMEMBER.

**المعايير:**

1. أربعة أسطر، سؤالان وجوابان، عن تجربة أولى وعادة وذكرى لهواية خيالية؛ قراءة الدورين جهرًا.
   - أربعة أسطر للسؤالين والجوابين؛ نموذج 290 حرفًا فوق 220، والجواب الأخير قد يضم جملتين، والدوران جهرًا.
2. كل جواب يناسب سؤاله؛ تتضح التجربة الأولى والعادة وما تتذكره الشخصية، ويمكن أن يضم الجواب الأخير جملتين.
   - السؤال الأول متى بدأ والثاني عن العادة؛ كل جواب يناسب نوع السؤال وتظهر الذكرى.
3. جواب بـals للحدث المحدد وجواب بـwenn للعادة، مع الفعل المصرف آخر التابعة ورئيسية سليمة؛ Ich erinnere mich an مع Akkusativ.
   - جواب Als وآخر Wenn بماضٍ وترتيب سليم وتذكّر an diese Nachmittage؛ لا شريك ولا تسجيل.

**الدليل المحلي:** حد 220 حرفًا؛ الجهر مطلوب؛ لا تسجيل مطلوب.

### DL-B1-01-AUD-PHR-01

**النص:**

> Das Erlebnis, die Erlebnisse. Der Verein, die Vereine. Das Schachturnier, die Schachturniere. Die Erinnerung, die Erinnerungen. Die Freizeit. Das Hobby, die Hobbys. Damals. Inzwischen. Zum ersten Mal. Sich erinnern an. Teilnehmen an. Regelmäßig. Allein und gemeinsam.

**نتيجة المراجعة:** فحص نصي للأصل وموضعه وأصواته؛ العبارات والحالة والمسارات محفوظة. الأعداد المكتوبة لفظًا تطابق الأرقام 16/17/14، و allein und gemeinsam تعديد للكلمتين المفصولتين بشرطة مائلة في الجدول. لا استماع أو توليد أو اعتماد جديد.

**البنود:**

1. Das Erlebnis, die Erlebnisse.
   - Erlebnis محايد وجمعه Erlebnisse؛ تجربة معيشة مؤثرة، لا دائمًا سعيدة ولا مرادفًا تامًا للذكرى.
2. Der Verein, die Vereine.
   - Verein مذكر وجمعه Vereine؛ نادي أو جمعية، لا موقع الويب نفسه.
3. Das Schachturnier, die Schachturniere.
   - Schachturnier محايد وجمعه Schachturniere؛ بطولة، والمشاركة لا تعني الفوز.
4. Die Erinnerung, die Erinnerungen.
   - Erinnerung مؤنث وجمعها Erinnerungen؛ ذكرى، لا الواقعة المعيشة نفسها.
5. Die Freizeit.
   - Freizeit مؤنث؛ وقت الفراغ هو المعنى السياقي المفرد هنا، والشرطة ليست ادعاء منع أي استعمال آخر.
6. Das Hobby, die Hobbys.
   - Hobby محايد وجمعه Hobbys؛ الهواية لا العمل الإلزامي.
7. Damals.
   - damals ظرف بمعنى آنذاك في سياق ماضٍ؛ لا تصريف جمع.
8. Inzwischen.
   - inzwischen قد تعني في الأثناء أو الحال الآن بعد تغير؛ كلا المعنيين المذكورين مقيد بالسياق.
9. Zum ersten Mal.
   - zum ersten Mal للمرة الأولى بالنسبة للنشاط المقصود، لا دليل على عمر بعينه دون النص.
10. Sich erinnern an.
   - sich erinnern an مصدر انعكاسي، و erinnert sich صيغة مفرد؛ ich erinnere mich و du erinnerst dich في الأمثلة.
11. Teilnehmen an.
   - teilnehmen an مصدر، و nimmt teil مفرد؛ an مع Dativ لا وجهة مكانية هنا.
12. Regelmäßig.
   - regelmäßig بانتظام؛ لا يعني كل يوم أو عدد مرات محددًا.
13. Allein und gemeinsam.
   - allein وحده و gemeinsam معًا؛ مفهومان مختلفان، و und في التسجيل تجمع قائمتين لا تجعل المعنيين مترادفين.

### DL-B1-01-AUD-MODEL-01

**النص:**

> Als ich sechzehn Jahre alt war, bekam ich meine erste Kamera. Als wir zum ersten Mal allein reisten, waren wir nervös. Wenn Lina am Wochenende Zeit hatte, fotografierte sie im Park. Wenn ich heute frei habe, treffe ich meine Freunde.

**نتيجة المراجعة:** فحص نصي للأصل وموضعه وأصواته؛ العبارات والحالة والمسارات محفوظة. الأعداد المكتوبة لفظًا تطابق الأرقام 16/17/14، و allein und gemeinsam تعديد للكلمتين المفصولتين بشرطة مائلة في الجدول. لا استماع أو توليد أو اعتماد جديد.

**البنود:**

1. Als ich sechzehn Jahre alt war, bekam ich meine erste Kamera.
   - سن 16 في مثال متكلم غير مسمى، لا عمر لينا في القراءة أو كريم في الحوار؛ هنا يقول صراحة erste Kamera.
2. Als wir zum ersten Mal allein reisten, waren wir nervös.
   - رحلة أولى محددة في الماضي؛ reisten و waren مع wir، وليس شرطًا حاضرًا.
3. Wenn Lina am Wochenende Zeit hatte, fotografierte sie im Park.
   - فراغ نهاية الأسبوع مناسبات ماضية متكررة مع wenn؛ التصوير في الحديقة، لا يعني كل عطلة بلا استثناء.
4. Wenn ich heute frei habe, treffe ich meine Freunde.
   - شرط فراغ اليوم مع Präsens؛ يثبت أن عنوان الأصل المختصر «wenn للعادة» ليس تعريفًا حصريًا للقاعدة.

### DL-B1-01-AUD-DLG-01

**النص:**

> Erinnerst du dich an deinen ersten Fotokurs? Ja. Als ich siebzehn war, habe ich zum ersten Mal an einem Kurs teilgenommen. Was hast du dort gemacht? Wir haben Porträts fotografiert. Wenn wir am Wochenende Zeit hatten, sind wir zusammen in den Park gegangen. Machst du das noch? Ja, inzwischen fotografiere ich auch auf Reisen.

**نتيجة المراجعة:** فحص نصي للأصل وموضعه وأصواته؛ العبارات والحالة والمسارات محفوظة. الأعداد المكتوبة لفظًا تطابق الأرقام 16/17/14، و allein und gemeinsam تعديد للكلمتين المفصولتين بشرطة مائلة في الجدول. لا استماع أو توليد أو اعتماد جديد.

**البنود:**

1. Erinnerst du dich an deinen ersten Fotokurs?
   - Lina تسأل Karim عن دورة التصوير الأولى، مع dich و an deinen ersten Fotokurs في Akkusativ.
2. Ja. Als ich siebzehn war, habe ich zum ersten Mal an einem Kurs teilgenommen.
   - Karim يذكر عمر 17 وأول مشاركة في دورة؛ المساعد habe بعد التابعة و teilgenommen في نهاية الرئيسية.
3. Was hast du dort gemacht?
   - سؤال عما فعل هناك؛ Perfekt طبيعي ولا يطلب مكانًا آخر.
4. Wir haben Porträts fotografiert. Wenn wir am Wochenende Zeit hatten, sind wir zusammen in den Park gegangen.
   - تصوير Porträts ثم عادة الذهاب معًا للحديقة عند توفر الوقت؛ haben fotografiert مقابل sind gegangen. لا عدد دورات أو أسماء أشخاص مفترض.
5. Machst du das noch?
   - Lina تسأل هل ما زال يمارس ذلك؛ ليس طلب موعد أو مشاركة جديدة.
6. Ja, inzwischen fotografiere ich auch auf Reisen.
   - Karim يؤكد التصوير الآن أيضًا في السفر؛ لا يثبت أنه توقف عن التصوير في الحديقة أو عدد رحلاته.

### DL-B1-01-AUD-READ-01

**النص:**

> Als Lina vierzehn Jahre alt war, bekam sie eine Kamera von ihrer Tante. Sie war sofort neugierig. Wenn sie ihre Großeltern besuchte, fotografierte sie oft den Garten und die Tiere. Einmal zeigte sie ihre Bilder bei einem Schulfest. Ihre Lehrerin lobte sie. Seitdem nimmt Lina regelmäßig an Fotokursen teil. Inzwischen macht sie auch Bilder für die Webseite ihres Vereins.

**نتيجة المراجعة:** فحص نصي للأصل وموضعه وأصواته؛ العبارات والحالة والمسارات محفوظة. الأعداد المكتوبة لفظًا تطابق الأرقام 16/17/14، و allein und gemeinsam تعديد للكلمتين المفصولتين بشرطة مائلة في الجدول. لا استماع أو توليد أو اعتماد جديد.

**البنود:**

1. Als Lina vierzehn Jahre alt war, bekam sie eine Kamera von ihrer Tante.
   - حصلت لينا عند 14 على كاميرا من Tante؛ ليس 16 أو 17، ولا يصرح بأنها أول كاميرا أو شراء أو هدية.
2. Sie war sofort neugierig.
   - أصبحت فضولية فورًا؛ وصف استجابة لا إثبات موهبة أو إحراز جائزة.
3. Wenn sie ihre Großeltern besuchte, fotografierte sie oft den Garten und die Tiere.
   - كانت تصور الحديقة والحيوانات كثيرًا حين تزور الجدين؛ عادة مع wenn و oft لا كل زيارة حتمًا.
4. Einmal zeigte sie ihre Bilder bei einem Schulfest.
   - مشهد عرض في احتفال مدرسي؛ Einmal لا يخبرنا أول مكان عرض في كامل حياتها.
5. Ihre Lehrerin lobte sie.
   - المعلمة أثنت عليها؛ لا تقييم معين أو جائزة أو ضمان سبب قرار التسجيل.
6. Seitdem nimmt Lina regelmäßig an Fotokursen teil.
   - منذ ذلك الحين تشارك بانتظام في دورات؛ nimmt … teil مع an Fotokursen، لا يقول إنها أنهت كل دورة أو عددها.
7. Inzwischen macht sie auch Bilder für die Webseite ihres Vereins.
   - تصنع صورًا أيضًا لموقع ناديها؛ لا يثبت النص أن صور الاحتفال هي عينها صور الموقع أو أن النشر وقع.

### DL-B1-01-AUD-LST-01

**النص:**

> Als ich ein Kind war, spielte ich gern Schach mit meinem Großvater. Wenn wir uns am Sonntag trafen, spielten wir oft mehrere Partien. Später habe ich an einem Schachturnier teilgenommen. Heute spiele ich nicht mehr so oft, aber ich erinnere mich gern an diese Zeit.

**نتيجة المراجعة:** فحص نصي للأصل وموضعه وأصواته؛ العبارات والحالة والمسارات محفوظة. الأعداد المكتوبة لفظًا تطابق الأرقام 16/17/14، و allein und gemeinsam تعديد للكلمتين المفصولتين بشرطة مائلة في الجدول. لا استماع أو توليد أو اعتماد جديد.

**البنود:**

1. Als ich ein Kind war, spielte ich gern Schach mit meinem Großvater.
   - الطفولة فترة مع als، والشطرنج مع الجد نشاط قد يتكرر داخلها؛ ليس حكمًا بأن اللعب حدث مرة واحدة.
2. Wenn wir uns am Sonntag trafen, spielten wir oft mehrere Partien.
   - عند لقاءات الأحد لعبا غالبًا عدة مباريات؛ لا عدد محدد أو تأكيد كل أحد دون انقطاع.
3. Später habe ich an einem Schachturnier teilgenommen.
   - شارك لاحقًا في بطولة شطرنج مع haben+teilgenommen؛ لا فوز أو مدينة أو عمر أو صلة باسم Karim.
4. Heute spiele ich nicht mehr so oft, aber ich erinnere mich gern an diese Zeit.
   - الآن يلعب أقل ويتذكر تلك الفترة بسرور؛ nicht mehr so oft لا تعني أنه توقف تمامًا.

## البصمات والحفظ

```json
{
  "sourceHashes": {
    "content/B1/lesson-01-daily-life-hobbies-experiences.md": "58173634197c203b09c28a2548cbb0bfa487b7e526c69abb2763141ce3222b9f",
    "content/B1/lesson-01-daily-life-hobbies-experiences.assessment.json": "6221614cf794f7d1370ee44397a7d2b3047fb992dc624cff357d91f1ece386e4"
  },
  "audioSnapshotHashes": {
    "DL-B1-01-AUD-PHR-01": "1d18b86e5426aba8920cce4755e4499864177c564ab0be7ddfec08f93e807c31",
    "DL-B1-01-AUD-MODEL-01": "caac7cee56bf6f42c1df85c354bd7933fe5a1dd08655963b6717bb57a7ee2d64",
    "DL-B1-01-AUD-DLG-01": "faba76bf96e08fba4371109908ba07e3745e6f0e2024867d6ee7d9946f07b01a",
    "DL-B1-01-AUD-READ-01": "3077fd94fd2cc3d8f0b62d0eef1be0806da68fb34653f63d746133dacf9a20c3",
    "DL-B1-01-AUD-LST-01": "4b67bfb53faa5ff2435bfc2c45b9daef2617e13b47af9978de1964349f8718b0"
  },
  "preservation": {
    "baseline": "c5876d7d5e0be70c3baa48bc88926737c368209f",
    "otherLessonsUnchanged": 52,
    "otherCatalogRowsUnchanged": 1060,
    "mp3GitHashesUnchanged": 474,
    "playlistBytesUnchanged": true,
    "audioRegisterChanges": [
      {
        "assetId": "DL-B1-01-AUD-DLG-01",
        "fields": [
          "source_line"
        ]
      },
      {
        "assetId": "DL-B1-01-AUD-READ-01",
        "fields": [
          "source_line"
        ]
      },
      {
        "assetId": "DL-B1-01-AUD-LST-01",
        "fields": [
          "source_line"
        ]
      }
    ],
    "otherAudioRegisterRowsUnchanged": 214,
    "answerIndicesUnchanged": true,
    "unchangedOptionTexts": 30,
    "changedOptionTexts": [],
    "protectedFilesCompared": 115,
    "existingAudioConsistencyAssertionsUnchanged": true
  }
}
```
