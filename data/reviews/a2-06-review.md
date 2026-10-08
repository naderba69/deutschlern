# مراجعة CR24 — A2.6: الأسرة والمشاعر والدعوات والهدايا

رُوجع **A2.6 — الأسرة والمشاعر والدعوات والهدايا** في **104 وحدات و36 بندًا أو مطلبًا داخل التمارين**، مع **9 مراجع مقروءة كاملة**. وُسعت ترجمة القرابة دون اختلاق جهة أو نسب، وفُرق بين محتوى dass وتحقق الخبر، وبين auf مع اسم وdass مع جملة. أضيف تدريب مباشر على anschauen möchten والتطلع إلى الاحتفال؛ ضُبطت الدعوة والمشاعر والفصل بين السيناريوهات. **P01/T08أ أربع جمل مع الجهر**؛ **P02/T08ب تحية وأربع جمل وختام واسم، كتابة فقط**، بمعايير ونموذجين مطابقين. Q02→T07؛ تغير خيارQ06 الصحيح وحده، مع حفظ29 خيارًا وفهارس المفاتيح و80%. الإصدار `a2-06-v2` والمخزن `v71`. خمسة أصول/10 مقاطع محفوظة دون توليد أو استماع أو اعتماد جديد. **الحملة23/53 درسًا والبوابة منفصلة؛ تبقى30 درسًا، والتاليCR25/A2.7.** هذا سجل مراجعة وفحوص، لا شهادة مستوى أو إعلان اكتمال الدمج.

## الملفات والرفع والخطوة التالية

- المصدر والتقييم `content/A2/lesson-06-family-happiness-gifts.md/.assessment.json`، والحزمة `data/course.json`، و20 صفًا في `data/production-task-catalog.csv`، وخمسة صفوف مرجعية فقط في `data/audio-asset-register.csv`.
- `service-worker.js` واختباراه، و`tools/test_progression.cjs` و`tools/test_accessibility_audit.cjs` والحارس `tools/test_a2_06_review.py`.
- السجلان `data/reviews/a2-06-review.json/.md`، وفهرس المراجعات وREADME وPROGRESS وخطة التحسين2.30 وتقرير المتصفح وملفا التسليم. لا تعديلplaylist أوMP3 أوapp.js أوCSS.
- التنفيذ **94685bc8aafb6d6794ce223d7dadc5b798cbf9fc** رُفع وتطابق معorigin. دفعة السجل بعنوان `Record CR24 granular A2.6 review and cumulative checks`؛ معرفها فيgit log بعد الدفع ثم يسجل إيصالها.
- الفرع الوحيد `arena/01a1036f-deutschlern`؛ لا تبديل أو دمجPR#1. عند البداية عادتmetadata إلىcommitقديم، لكن قورنت692 ملفًا بصفر اختلاف أو إضافات قبلreset --mixed الآمن؛ لا تعاد هذه العملية مع عمل جديد دون مقارنة.
- لا اختبار واجهة بعيدة أو نشرProduction مدّعى. بياناتVercel القديمة تخصCR23؛ لا ننسبها إلىCR24 ولا نطلب إعادة نشر متكررة أو ترقية مدفوعة بسبب حد الخدمة السابق.
- التالي **CR25/A2.7 — تعلّم اللغات والسفر والغاية بـum … zu**: افحص المصدر الفعلي والعنوان وكل نص وتمرين وتقييم بالمراجع قبل تعديله. احفظHiba02/Maha00 وQ08→T05، ولا تعد توليد المقاطع الموجودة.
- القرارات مستمرة: كل تعديل يُرفع فور فحص مجموعته؛ المحتوى والتقييم والتطبيق قبل الصوت؛ لا مراجع بشري شرطًا للمتابعة. لا إخفاء صوت أو إعادة توليد أو تغييرready/نهائي بلا موافقة؛ حد10طلبات صوت/رد. B1.9/B1.10 معلقان، واختيارB1.11 محفوظ. احفظ اتساقA2.9 وتاريخB2.6 دون إعادة تسميتهB2.7.

## الفحوص وحدودها — CR24

- PASS: البناء والتحقق؛ الحزمة **1,925,590 بايت** والمخزن **v71**. 53 درسًا،428 عنوان تمرين،55 عنوان حوار وفق نمط العداد،754 مفردة؛530 سؤال درس+10 للبوابة،109 مهمات أداء،1080 صف كتالوج. 217 أصلًا صوتيًا/474 مقطعًا،137ready و80pending. عداد الحوار لا يحصي جميع الأدوار أو التسجيلات.
- PASS: **24 حارس مراجعة تراكميًا** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–6. الحارس الجديد يطابق104 وحدات و36 بندًا وبصمات المصدر، وروابط التقييم والكتالوج، و30 بديلًا وستة معايير، والمهمتين والحزمة. داخل الأصلين PHR/MODEL روجعت20 عبارة و6 جمل على التوالي، دون إضافتها مرة ثانية لعدد104. لا يعني الحارس مصحح لغة مستقلًا.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan، وصياغةapp.js وservice-worker.js وكلtools/test_*.cjs وgit diff --check.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0** عبر@sparticuz/chromium143.0.4 ومكتباتal2023 خارجGit. التشغيل آلي صامت، لا استماع أو هاتف فعلي.
- العام عند1440×900 و390×844: تنقل وRTL وتفريغات وتشغيل MP3 بسرعتي1 و0.8 وإيقافه عند التنقل، والعمل دون اتصال ونطاقات البايت. لا ضمان تخزين جميع التسجيلات دائمًا.
- تحديثfixture عامل الخدمةv42→v71 دون تحديث قسري، مع حفظ الإجابات والتقدم وعزل المخازن وتوضيح فقد الصوت بـ503 وإعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل ترحيل تاريخي.
- progression: إتقانv1 محفوظ كسجل لكنه لا يمنح إتقانv2 أو يفتحA2.7؛ مسودةv1 مرفوضة. يمرv2 مع80% ودليل الأداء. P01 يرفض غياب الجهر، وP02 كتابة فقط؛ النموذجان يمران بالطول، ولا تمر الإجابة القصيرة أو الإقرارات الناقصة. هذا ليس تصحيحًا للغة أو النطق.
- axe-core4.11.0: **109 حالات ممثلة، وصفر مخالفات للقواعد الآلية المختارة**. بقي **72 ظهورًا لفحوص غير حاسمة تشمل167 ظهورًا لعقد**. لا نحول عدم الحسم إلى نجاح شامل أو شهادةWCAG، ولا نجعل مراجعًا بشريًا شرطًا للمتابعة.
- النماذج: **PASS من أول تشغيل متسلسل** عند1440 و390؛ حفظ وإعادة تحميل وتصدير واستيراد ومسودات. تذبذبfilechooser التاريخي لم يتكرر، لكن لم يثبت إصلاح سببه.
- العرض الضيق: **126 حالة**؛63 عند320×900 و63 عند568×320، مع الدروس والتفريغات والجداول. viewport ليس تكبير نظام أو جهازًا فعليًا.
- الحفظ مقابل `0ac548565836255e6f2aa7b3190df01927c52111`: **52 درسًا آخر و1060 صف كتالوج آخر و114 ملفًا محميًا** لم تتغير، بما فيها مصادر الدروس الأخرى والبوابة وapp.js وCSS وpackage/lock وأداتاbuild/verify. تغير20 صفًا تخصA2.6 فقط في الكتالوج.
- playlist مطابق بايتًا ببايت، و**474MP3** طابقت بصماتGit السابقة. خمسة صفوفA2.6 فيaudio-register تغيرت فيsource_line/source_heading فقط؛ بقية212 صفًا وكل الحالات والأصوات والمسارات محفوظة. Mariam02/Sami03، وNarrator02 للمفردات والقراءة والنماذج، وErzählperson03 للاستماع. لا توليد أو استماع أو اعتماد جديد.
- فهارس الإجابات العشرة ثابتة، وتغير نص خيارQ06 الصحيح فقط من الثلاثين. يُراجع كل بديل في السجل، لا المفتاح وحده. لا تنقل جاهزية التسجيل التاريخية إلى اعتماد جديد أو شهادةCEFR.

## طريقة العد وحدود المرجعية

104 وحدات:7 للنطاق والشرح العام،14 صف مفردات،4 أمثلة قاعدة،2 مقارنة ترتيب،9 مساعدات،6 أدوار حوار،7 جمل قراءة و5 أسئلتها،5 جمل استماع و5 أسئلته،4 جمل نموذج الجهر،7 مكونات نموذج الدعوة،4 بطاقات،8 تمارين،10 أسئلة تقييم،مهمتا أداء،و5 أصول صوت. التمارين تتضمن36 بندًا أو مطلبًا:4+3+4+3+4+4+3+11. البدائل والمعايير والوحدات داخل التسجيلات تظهر تحت وحدتها ولا تضخم العدد. أحداث القصص خيالية؛ دليل فهمها المصدر المحلي، لا تحقق خارجي من حياة أشخاص. المراجع تسند المعاني والقواعد ذات الصلة، ولا تمنح شهادة مستوى أو تحققًا صوتيًا.

## المراجع المقروءة — 2026-10-08

- **COUSIN — Duden — Cousin**: https://www.duden.de/rechtschreibung/Cousin
  - ابن أخ أو أخت أحد الوالدين؛الجمعCousins لا Cousinen. صفحة كاملة أعادتها أداة القراءة، بلا جزء تالٍ.
- **COUSINE — Duden — Cousine**: https://www.duden.de/rechtschreibung/Cousine
  - بنت أخ أو أخت أحد الوالدين؛الجمعCousinen. صفحة كاملة أعادتها أداة القراءة، بلا جزء تالٍ.
- **TANTE — Duden — Tante**: https://www.duden.de/rechtschreibung/Tante
  - أخت أو زوجة أخ أحد الوالدين؛لا جهة أو نسب للأبناء يستنتج من النص. صفحة كاملة أعادتها أداة القراءة، بلا جزء تالٍ.
- **FREUEN — Duden — freuen**: https://www.duden.de/rechtschreibung/freuen
  - انعكاسي؛auf للتطلع إلى حدث،وdass تدخل محتوى الفرح،وقد يتعلق بالمستقبل. صفحة كاملة أعادتها أداة القراءة، بلا جزء تالٍ.
- **ZUFRIEDEN — Duden — zufrieden**: https://www.duden.de/rechtschreibung/zufrieden
  - راضٍ عن الحال أو النتيجة،ليس مطابقًا لكل معنىglücklich. صفحة كاملة أعادتها أداة القراءة، بلا جزء تالٍ.
- **SUB — Lingolia — Nebensätze**: https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze
  - فاصلة وفعل مصرف أخير في النمط البسيط المدروس؛مصدر قبلmodal المصرف. صفحة كاملة أعادتها أداة القراءة، بلا جزء تالٍ.
- **CONTENT — Lingolia — Objektsätze/Subjektsätze**: https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/objektsaetzesubjektsaetze
  - تابعة بدور محتوى القول/الشعور،ومثالtelefonieren kann؛لا نقل حرفي للمثال الاستفهامي غير المتسق في الصفحة. صفحة كاملة أعادتها أداة القراءة، بلا جزء تالٍ.
- **MODAL — Lingolia — Modalverben**: https://deutsch.lingolia.com/de/grammatik/verben/modalverben
  - können/möchten مع مصدر دونzu في الأمثلة؛لا تعميم النهاية على أنماطErsatzinfinitiv المتقدمة. صفحة كاملة أعادتها أداة القراءة، بلا جزء تالٍ.
- **SEP — Lingolia — Trennbare Verben**: https://deutsch.lingolia.com/de/grammatik/verben/trennbare
  - ein-/mit- قابلة للفصل في الرئيسية البسيطة؛تجمع هنا مع قاعدة التابعة منSUB. صفحة كاملة أعادتها أداة القراءة، بلا جزء تالٍ.

## المراجعة التفصيلية

### scope-01

# A2.6 — الأسرة والمشاعر والدعوات والهدايا

**الحكم:** عنوان مناسب للأسرة والمشاعر والدعوات والهدايا؛الأحداث خيالية.

مراجع متصلة: SUB, CONTENT, MODAL, SEP.

### scope-02

**المدة:** نحو 35–40 دقيقة (تقدير مرن؛ يمكن تقسيم الدرس) · **المهارات:** مفردات، قراءة، كتابة، كلام، قواعد، واستماع اختياري

**الحكم:** 35–40 دقيقة تقدير مرن لا ضمان زمن أو اكتساب؛الاستماع اختياري في مسار الدرس.

مراجع متصلة: SUB, CONTENT, MODAL, SEP.

### scope-03

**الهدف:** أستطيع أن أتحدث عن مناسبة عائلية ومشاعري، وأن أنقل فكرة باستخدام جملة dass.

**الحكم:** الهدف قابل للتمثيل في مهمتين؛القول عن مشاعر أو أمل ليس إثباتًا لخبر.

مراجع متصلة: SUB, CONTENT, MODAL, SEP.

### scope-04

بعد أفعال وعبارات مثل **sagen, glauben, hoffen, sich freuen** يمكن أن نضيف جملة تبدأ بـ**dass** («أنّ»). هي تنقل محتوى قول أو اعتقاد أو أمل أو شعور، ولا تؤكد وحدها صحة الخبر أو تحققه. نضع فاصلة قبل dass في النمط المدروس، ويأتي الفعل المصرف في نهاية التابعة. ونقارنها بعبارة auf مع اسم:

**الحكم:** شرح dass للمحتوى والفاصلة والنهاية في هذا النمط،لا رابط سبب أو حرف جر؛auf مع اسم مميز.

مراجع متصلة: SUB, CONTENT, MODAL, SEP.

### scope-05

في أمثلتنا بفعلين، يأتي المصدر قبل الفعل المصرف: **…, dass sie das Foto anschauen möchten.** و**…, dass wir zusammen sein können.** لا نضع zu بعد möchten/können هنا. انتبه إلى **unsere Familie kommt** (اسم مفرد) و**alle Gäste haben** (جمع).

**الحكم:** المصدر anschauen/sein قبل möchten/können؛لاzu. Familie مفرد وGäste جمع فلا تسوية بينهما.

مراجع متصلة: SUB, CONTENT, MODAL, SEP.

### scope-06

مع الفعل القابل للفصل نقول في الرئيسية **Mein Bruder bringt einen Kuchen mit.** وفي التابعة **…, dass er einen Kuchen mitbringt.** أما **Ich glaube, dass der Abend schön wird.** فـ wird هنا بمعنى «يصبح/يكون» مع الصفة schön؛لا نبحث عن مصدر محذوف بعده.

**الحكم:** bringt…mit في الرئيسية وmitbringt في التابعة؛wird معschön هنا فعل رابط لا مصدر ناقص.

مراجع متصلة: SUB, CONTENT, MODAL, SEP.

### scope-07

نموذج الدعوة تمرين مستقل، لا رسالة وردت في النصوص المسجلة. لا يتحول الأمل بالحضور إلى تأكيد، ولا يلزم إرسال النص. النموذجان غير مسجلين ولا يستبدلان الملفات القائمة؛التحقق الذاتي ليس تصحيحًا آليًا للغة أو النطق.

**الحكم:** الدعوة مستقلة غير مسجلة؛النموذجان لا يستبدلانMP3،والطول والإقرار ليسا تصحيحًا لغويًا أو صوتيًا.

مراجع متصلة: SUB, CONTENT, MODAL, SEP.

### vocab-01

| der Verwandte / die Verwandte | die Verwandten | القريب/القريبة |

**الحكم:** القريب بصيغتي المذكر والمؤنث؛ الجمع die Verwandten. الجنس النحوي لا يحدد هوية متكلم الاستماع.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-02

| der Cousin / die Cousine | die Cousins / die Cousinen | ابن/ابنة العم أو العمة أو الخال أو الخالة |

**الحكم:** صُحح الحصر في أبناء الأعمام والأخوال ليشمل أبناء العمات والخالات؛ Cousins مقابل Cousinen.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-03

| die Einladung | die Einladungen | الدعوة |

**الحكم:** دعوة اسم مؤنث، جمعه Einladungen؛ ليس مصدر الفعل einladen.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-04

| die Feier | die Feiern | الاحتفال |

**الحكم:** احتفال مؤنث، جمعه Feiern؛ ذكره وحده لا ينشئ دعوة.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-05

| das Geschenk | die Geschenke | الهدية |

**الحكم:** هدية محايدة، جمعها Geschenke؛ متميزة عن الذكرى.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-06

| die Überraschung | die Überraschungen | المفاجأة |

**الحكم:** مفاجأة مؤنثة، جمعها Überraschungen؛ رد Sami لا يثبت خطة حفلة سرية.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-07

| einladen | lädt ein | يدعو |

**الحكم:** einladen يصرف lädt ein في الرئيسية؛ فصل ein ظاهر في نموذج الدعوة.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-08

| besuchen | besucht | يزور |

**الحكم:** besuchen يصرف besucht؛ be- غير منفصل، فلا صيغة sucht…be.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-09

| gemeinsam | — | معًا |

**الحكم:** gemeinsam تعني معًا أو بصورة مشتركة؛ الغداء عائلي من السياق لا الكلمة وحدها.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-10

| glücklich | — | سعيد |

**الحكم:** glücklich سعيد؛ لا تعميم على كل العلاقات والمناسبات.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-11

| zufrieden | — | راضٍ |

**الحكم:** zufrieden راضٍ؛ أضيف سؤال تعريف مباشر بدل موقف يحتمل أكثر من شعور.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-12

| enttäuscht | — | خائب الأمل |

**الحكم:** enttäuscht خائب الأمل؛ لا يقول النص إن فردًا بعينه يشعر بذلك.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-13

| sich freuen auf | freut sich auf | يتطلع إلى/يفرح بحدث قادم |

**الحكم:** sich freuen auf، وتصريف freut sich auf مع فاعل مفرد؛ auf die Feier للتطلع.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### vocab-14

| die Erinnerung | die Erinnerungen | الذكرى |

**الحكم:** Erinnerung ذكرى، جمعها Erinnerungen؛ ليست Geschenk حتى إن ارتبطا في الواقع.

مراجع متصلة: COUSIN, COUSINE, TANTE, ZUFRIEDEN, FREUEN, SEP.

### grammar-01

- **Ich glaube, dass meine Schwester heute kommt.** — أعتقد أن أختي ستأتي اليوم.

**الحكم:** اعتقاد بمجيء الأخت اليوم؛ kommt آخر التابعة. صيغة الحاضر مع ظرف اليوم قد تتجه إلى المستقبل.

مراجع متصلة: SUB, CONTENT, FREUEN.

### grammar-02

- **Wir hoffen, dass alle Gäste Zeit haben.** — نأمل أن يكون لدى جميع الضيوف وقت.

**الحكم:** أمل في توفر الوقت؛ haben مع فاعل جمع. لا يثبت هذا حضور الضيوف.

مراجع متصلة: SUB, CONTENT, FREUEN.

### grammar-03

- **Ich freue mich, dass du da bist.** — يسعدني أنك هنا.

**الحكم:** فرح بحضور المخاطب الآن؛ bist آخر التابعة وmich مع ich.

مراجع متصلة: SUB, CONTENT, FREUEN.

### grammar-04

- **Ich freue mich auf die Feier.** — أتطلع إلى الاحتفال (حدث قادم).

**الحكم:** auf مع اسم الحدث القادم؛ لا جملة dass أو فاصلة تابعة في هذا المثال.

مراجع متصلة: SUB, CONTENT, FREUEN.

### comparison-01

- جملة عادية: **Meine Schwester kommt heute.**

**الحكم:** kommt في موضع الفعل الثاني في الرئيسية.

مراجع متصلة: SUB.

### comparison-02

- بعد dass: **…, dass meine Schwester heute kommt.**

**الحكم:** المعنى المضمّن نفسه مع kommt في نهاية التابعة؛ كلمات التسجيل محفوظة.

مراجع متصلة: SUB.

### helper-01

- **die Tante / der Cousin / die Cousine** — Tante عمة أو خالة، وقد تكون زوجة عم أو خال في معنى القرابة؛لا يحدد النص الجهة. Cousin ابن أخ أو أخت أحد الوالدين، و Cousine بنت أخ أو أخت أحد الوالدين. لا نستنتج أن Cousins الزائرين هما ابنا Tante المذكورة، ولا نترجم Cousins آليًا إلى Cousinen.

**الحكم:** Tante لا تحدد جهة الأب أو الأم أو كون Cousins ابنيها؛ تعريف Cousine مستقل وواضح.

مراجع متصلة: COUSIN, COUSINE, TANTE, FREUEN, ZUFRIEDEN, SUB, MODAL, SEP.

### helper-02

- **zufrieden / glücklich / enttäuscht / froh** — راضٍ / سعيد / خائب الأمل / مسرور. ليست الصفات مترادفة تمامًا؛الرضا يتعلق بما يراه الشخص مناسبًا أو كافيًا. لا يلزم أن تكون كل مناسبة عائلية سعيدة للجميع؛البيانات هنا خيالية.

**الحكم:** المشاعر الأربعة مميزة؛ الرضا ليس السعادة في كل سياق، ولا تُفرض مشاعر معينة على المتعلم.

مراجع متصلة: COUSIN, COUSINE, TANTE, FREUEN, ZUFRIEDEN, SUB, MODAL, SEP.

### helper-03

- **Sich auf etwas freuen.** — التطلع بفرح إلى شيء قادم. **Ich freue mich auf die Feier.** فيها auf مع اسم، أما **Ich freue mich, dass du kommst.** ففيها جملة كاملة بمحتوى الفرح، ويمكن أن تتعلق بقدوم لاحق أيضًا. لا يعني dass «حاضرًا فقط» ولا هو حرف جر.

**الحكم:** auf مع اسم مقابل dass مع جملة؛ dass ليست مقيدة بالحاضر.

مراجع متصلة: COUSIN, COUSINE, TANTE, FREUEN, ZUFRIEDEN, SUB, MODAL, SEP.

### helper-04

- **mich / sich / einladen / mitbringen** — مع ich نقول Ich freue mich، ومع Lina نقول Lina freut sich. **Ich lade dich zur Feier ein.** دعوة صريحة، و**Ich bringe einen Kuchen mit.** بيان لما سأحضره؛مجرد ذكر الاحتفال ليس دعوة بالضرورة.

**الحكم:** mich وsich متوافقان مع الفاعل؛ أضيف تدريب الدعوة الصريحة وفصل فعل الإحضار.

مراجع متصلة: COUSIN, COUSINE, TANTE, FREUEN, ZUFRIEDEN, SUB, MODAL, SEP.

### helper-05

- **sagen / glauben / hoffen / vielleicht / möchten** — يقول / يعتقد / يأمل / ربما / يرغب. «نأمل أن يأتي الجميع» لا تعني أنهم أكدوا الحضور؛اقتراح كعكة لا يثبت أن Sami أحضرها. صفة المفاجأة في الحوار رد Sami على الخبر، لا دليل على حفل سري مخطط.

**الحكم:** القول والاعتقاد والأمل والاحتمال ليست جميعًا أدلة وقوع؛ فُصل رد المفاجأة عن افتراض خطة سرية.

مراجع متصلة: COUSIN, COUSINE, TANTE, FREUEN, ZUFRIEDEN, SUB, MODAL, SEP.

### helper-06

- **zusammen / gemeinsam / wiedersehen / anschauen** — معًا / بصورة مشتركة / يرى مجددًا / يشاهد أو ينظر إلى. **ein gemeinsames Mittagessen** غداء مشترك؛كونه عائليًا يأتي من النص لا من كلمة gemeinsam وحدها. **wiedersehen kann / anschauen möchten** مصدر ثم فعل مصرف في نهاية التابعة.

**الحكم:** مشترك لا يعني عائليًا وحده؛ wiedersehen kann وanschauen möchten يوضحان ترتيب المصدر والفعل المصرف.

مراجع متصلة: COUSIN, COUSINE, TANTE, FREUEN, ZUFRIEDEN, SUB, MODAL, SEP.

### helper-07

- **النصوص منفصلة:** عيد ميلاد الجدة يوم السبت في الحوار، وزيارة الأحد في نابل Nabeul بالقراءة، وعيد ميلاد الأم في الاستماع. لا نفترض أن Lina هي المتكلمة في الاستماع؛الضمير ich لا يحدد الجنس، وصوت Erzählperson لا يضيف هوية إلى النص. **aus Sfax** من صفاقس، لا جهة قرابة أو عنوان منزل مفصل.

**الحكم:** سيناريوهات الجدة والأحد والأم مستقلة؛ ich لا يحدد جنس الراوي، وصوت التسجيل لا يثبت هويته.

مراجع متصلة: COUSIN, COUSINE, TANTE, FREUEN, ZUFRIEDEN, SUB, MODAL, SEP.

### helper-08

- **denn / zu Hause / im Garten** — denn هنا تربط سببًا بجملة رئيسية: **denn wir möchten auch im Garten sitzen.** لا ننقل möchten إلى نهاية الجملة بعد denn. **zu Hause** في البيت و**im Garten** في الحديقة؛الرغبة في الجلوس خارجًا لا تثبت أن الطقس سيكون جميلًا أو أن الجلوس حدث.

**الحكم:** denn مع جملة رئيسية لا تنقل möchten إلى النهاية؛ الرغبة في الحديقة لا تثبت الطقس أو وقوع الجلوس.

مراجع متصلة: COUSIN, COUSINE, TANTE, FREUEN, ZUFRIEDEN, SUB, MODAL, SEP.

### helper-09

- **طريقة العمل:** P01 أربع جمل مع الجهر؛P02 دعوة كتابة فقط فيها تحية وأربع جمل وختام واسم خيالي. لا شريك أو تسجيل أو إرسال دعوة حقيقية، ولا ضرورة لذكر بياناتك العائلية. حاول الاستماع قبل فتح التفريغ؛قراءة النص لا تثبت فهمًا مسموعًا مستقلًا، والطول والإقرار لا يصححان اللغة أو النطق.

**الحكم:** P01 مع الجهر وP02 كتابة فقط؛ لا شريك أو تسجيل أو إرسال أو بيانات شخصية. التفريغ والإقرار لا يثبتان استقلال الاستماع أو جودة النطق.

مراجع متصلة: COUSIN, COUSINE, TANTE, FREUEN, ZUFRIEDEN, SUB, MODAL, SEP.

### dialogue-01

Hast du gehört, dass unsere Großmutter am Samstag Geburtstag hat?

**الحكم:** Mariam تسأل عن سماع خبر عيد ميلاد جدتهما السبت؛ hat آخر جملة dass.

مراجع متصلة: SUB, CONTENT, MODAL, SEP, COUSIN.

### dialogue-02

Nein! Das ist eine schöne Überraschung.

**الحكم:** Sami لم يسمع الخبر ويراه مفاجأة جميلة؛ Das ضمير إشارة هنا، لا dass الرابطة. لا دليل على خطة حفلة سرية.

مراجع متصلة: SUB, CONTENT, MODAL, SEP, COUSIN.

### dialogue-03

Wir planen eine kleine Feier bei unseren Eltern.

**الحكم:** خطة احتفال صغير عند والديهما؛ planen لا يعني أن الاحتفال حدث.

مراجع متصلة: SUB, CONTENT, MODAL, SEP, COUSIN.

### dialogue-04

Ich freue mich, dass wir alle zusammen sein können. Was soll ich mitbringen?

**الحكم:** Sami يعبر عن إمكان اجتماعهم بترتيب sein können ثم يسأل ماذا يحضر؛ لا التزام بالكعكة بعد.

مراجع متصلة: SUB, CONTENT, MODAL, SEP, COUSIN.

### dialogue-05

Vielleicht einen Kuchen. Ich hoffe, dass alle Cousins kommen.

**الحكم:** Mariam تقترح الكعكة بلفظ Vielleicht وتأمل مجيء Cousins؛ لا موافقة حضور مثبتة ولا تحويلهم إلى Cousinen.

مراجع متصلة: SUB, CONTENT, MODAL, SEP, COUSIN.

### dialogue-06

Ich glaube, dass der Abend schön wird.

**الحكم:** Sami يعتقد أن الأمسية ستكون جميلة؛ wird مع الصفة، لا مصدر ناقص أو قياس فعلي لسعادة الأمسية.

مراجع متصلة: SUB, CONTENT, MODAL, SEP, COUSIN.

### reading-01

Lina lebt mit ihrer Familie in Nabeul.

**الحكم:** Lina تعيش مع أسرتها في Nabeul؛ الاسم مكان وليس نوع قرابة.

مراجع متصلة: SUB, MODAL, SEP, TANTE, COUSIN, FREUEN.

### reading-02

Am Sonntag kommen ihre Tante und zwei Cousins zu Besuch.

**الحكم:** الزيارة الأحد من Tante واثنين من Cousins؛ لا تعيين لجهة القرابة أو إثبات لوالدتهما.

مراجع متصلة: SUB, MODAL, SEP, TANTE, COUSIN, FREUEN.

### reading-03

Die Familie plant ein gemeinsames Mittagessen.

**الحكم:** خطة غداء مشترك؛ كونه عائليًا مأخوذ من سياق الفاعل لا من gemeinsam وحدها.

مراجع متصلة: SUB, MODAL, SEP, TANTE, COUSIN, FREUEN.

### reading-04

Lina freut sich, dass alle Verwandten Zeit haben.

**الحكم:** فرح Lina بتوفر وقت الأقارب؛ freut sich مع Lina وhaben آخر التابعة.

مراجع متصلة: SUB, MODAL, SEP, TANTE, COUSIN, FREUEN.

### reading-05

Ihr Bruder ist glücklich, dass er seine Cousins wiedersehen kann.

**الحكم:** الأخ سعيد بإمكان رؤية أبناء العمومة أو الخؤولة؛ wiedersehen kann وليس العكس.

مراجع متصلة: SUB, MODAL, SEP, TANTE, COUSIN, FREUEN.

### reading-06

Die Eltern sagen, dass sie zusammen ein altes Familienfoto anschauen möchten.

**الحكم:** الوالدان يقولان إنهما يريدان مشاهدة صورة قديمة؛ anschauen möchten. النية ليست مشاهدة وقعت.

مراجع متصلة: SUB, MODAL, SEP, TANTE, COUSIN, FREUEN.

### reading-07

Lina bringt ein kleines Geschenk für ihre Tante mit.

**الحكم:** هدية صغيرة لـTante؛ bringt…mit في الرئيسية وfür مع Akkusativ.

مراجع متصلة: SUB, MODAL, SEP, TANTE, COUSIN, FREUEN.

### reading-question-01

1. Wo lebt Lina?

**الحكم:** المفتاح In Nabeul. يستند إلى جملة القراءة 1.

مراجع متصلة: SUB, MODAL, TANTE, COUSIN.

**المفتاح:** In Nabeul.

### reading-question-02

2. Wer kommt am Sonntag zu Besuch?

**الحكم:** المفتاح Ihre Tante und zwei Cousins. يستند إلى جملة القراءة 2.

مراجع متصلة: SUB, MODAL, TANTE, COUSIN.

**المفتاح:** Ihre Tante und zwei Cousins.

### reading-question-03

3. Worüber freut sich Lina?

**الحكم:** المفتاح Dass alle Verwandten Zeit haben. يستند إلى جملة القراءة 4.

مراجع متصلة: SUB, MODAL, TANTE, COUSIN.

**المفتاح:** Dass alle Verwandten Zeit haben.

### reading-question-04

4. Warum ist ihr Bruder glücklich?

**الحكم:** المفتاح Er kann seine Cousins wiedersehen. يستند إلى جملة القراءة 5.

مراجع متصلة: SUB, MODAL, TANTE, COUSIN.

**المفتاح:** Er kann seine Cousins wiedersehen.

### reading-question-05

5. Was möchten die Eltern zusammen anschauen?

**الحكم:** المفتاح Ein altes Familienfoto. يستند إلى جملة القراءة 6.

مراجع متصلة: SUB, MODAL, TANTE, COUSIN.

**المفتاح:** Ein altes Familienfoto.

### listening-01

Am Samstag ist der Geburtstag meiner Mutter.

**الحكم:** عيد ميلاد الأم السبت؛ ليس عيد ميلاد الجدة في الحوار ولا زيارة الأحد في القراءة.

مراجع متصلة: SUB, CONTENT, SEP, MODAL.

### listening-02

Wir feiern zu Hause.

**الحكم:** احتفال في البيت zu Hause؛ لا عنوان مفصل مذكور.

مراجع متصلة: SUB, CONTENT, SEP, MODAL.

### listening-03

Ich bin froh, dass meine Schwester aus Sfax kommt.

**الحكم:** فرح بقدوم الأخت من Sfax؛ ich لا يحدد جنس المتكلم أو يثبت أن اسمه Lina.

مراجع متصلة: SUB, CONTENT, SEP, MODAL.

### listening-04

Mein Bruder sagt, dass er einen Kuchen mitbringt.

**الحكم:** ينقل الراوي قول الأخ عن الكعكة؛ mitbringt متصل آخر التابعة، وليس هذا إثباتًا لإحضار فعلي.

مراجع متصلة: SUB, CONTENT, SEP, MODAL.

### listening-05

Ich hoffe, dass das Wetter schön ist, denn wir möchten auch im Garten sitzen.

**الحكم:** أمل بطقس جميل بسبب الرغبة في الجلوس بالحديقة؛ denn تليها رئيسية فيها möchten ثانيًا. لا ضمان لتحقق الأمل.

مراجع متصلة: SUB, CONTENT, SEP, MODAL.

### listening-question-01

1. Wessen Geburtstag ist am Samstag?

**الحكم:** السؤال عن صاحب عيد الميلاد؛ المفتاح لا ينسب الأم إلى Sami أو Mariam.

**المفتاح:** Der Geburtstag der Mutter der sprechenden Person.

### listening-question-02

2. Wo feiert die Familie?

**الحكم:** مكان الاحتفال المصرح به دون اختلاق عنوان.

**المفتاح:** Zu Hause.

### listening-question-03

3. Warum ist die Person froh?

**الحكم:** سبب الفرح قدوم الأخت من صفاقس؛ لا جنس مفترض للراوي.

**المفتاح:** Die Schwester der sprechenden Person kommt aus Sfax.

### listening-question-04

4. Was bringt der Bruder mit?

**الحكم:** الكعكة بحسب قول الأخ في النص؛ لا إثبات لوقوع الإحضار.

**المفتاح:** Einen Kuchen.

### listening-question-05

5. Wo möchte die Familie auch sitzen?

**الحكم:** الحديقة مكان مرغوب فيه أيضًا، لا خبر عن طقس تحقق أو جلوس حدث.

**المفتاح:** Im Garten.

### speaking-model-01

1. Am Samstag feiern wir den Geburtstag meiner Großmutter bei meinen Eltern.

**الحكم:** المناسبة والجدة والسبت والوالدان مطابقة للمطلوب؛ wir لا يتعارض مع منظور الكاتب ich في مجمل النص.

مراجع متصلة: SUB, MODAL, SEP, COUSIN, FREUEN.

### speaking-model-02

2. Ich bringe einen Kuchen mit.

**الحكم:** إحضار الكعكة بترتيب bringe…mit في الرئيسية.

مراجع متصلة: SUB, MODAL, SEP, COUSIN, FREUEN.

### speaking-model-03

3. Ich hoffe, dass meine Cousins kommen.

**الحكم:** أمل مجيء Cousins، لا تأكيد حضور؛ kommen آخر التابعة.

مراجع متصلة: SUB, MODAL, SEP, COUSIN, FREUEN.

### speaking-model-04

4. Ich freue mich, dass wir zusammen sein können.

**الحكم:** فرح بإمكان الاجتماع؛ sein können مرتب وتسبقه فاصلة التابعة. المطلوب قراءة الجمل الأربع جميعًا بصوت مرتفع.

مراجع متصلة: SUB, MODAL, SEP, COUSIN, FREUEN.

### writing-model-01

> Lieber Sami,

**الحكم:** Lieber Sami تحية للشخص المحدد وتنتهي بفاصلة.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

### writing-model-02

> ich lade dich zur Feier am Samstag um 18 Uhr bei meinen Eltern ein.

**الحكم:** دعوة صريحة بترتيب lade…ein، السبت الساعة18 عند الوالدين؛ ich صغيرة بعد فاصلة التحية.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

### writing-model-03

> Wir feiern den Geburtstag meiner Großmutter.

**الحكم:** تعيين عيد ميلاد الجدة؛ لا خلط بأم المتكلم في الاستماع.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

### writing-model-04

> Ich freue mich auf die Feier.

**الحكم:** auf مع اسم Feier؛ تطلع إلى احتفال قادم.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

### writing-model-05

> Ich hoffe, dass du kommen kannst.

**الحكم:** أمل قدرة Sami على المجيء؛ kommen kannst دون zu والفعل المصرف أخيرًا.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

### writing-model-06

> Liebe Grüße

**الحكم:** Liebe Grüße صيغة ختام، وليست جملة خامسة في المتن.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

### writing-model-07

> Mariam

**الحكم:** Mariam اسم خيالي للمرسلة؛ لا كشف لاسم حقيقي.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

### card-01

- **Ich freue mich, dass du kommst.** → يسعدني أنك قادم.

**الحكم:** dass مع قدوم قد يكون لاحقًا؛ ليست خاصة بالحاضر.

مراجع متصلة: SUB, FREUEN.

### card-02

- **Ich hoffe, dass alle Zeit haben.** → آمل أن يكون لدى الجميع وقت.

**الحكم:** أمل توفر الوقت، وليس تأكيد حضور الجميع.

مراجع متصلة: SUB, FREUEN.

### card-03

- **die Verwandten** → الأقارب.

**الحكم:** Verwandten جمع الأقارب، لا الزملاء أو الجيران.

مراجع متصلة: SUB, FREUEN.

### card-04

- **ein gemeinsames Mittagessen** → غداء مشترك (عائلي في هذا النص).

**الحكم:** صُححت إلى غداء مشترك؛ كونه عائليًا يأتي من سياق قراءة Lina.

مراجع متصلة: SUB, FREUEN.

### DL-A2-06-T01

1. أخت أبي أو أمي: **die Tante / die Einladung**
2. صفة تعني راضيًا عن النتيجة: **zufrieden / enttäuscht**
3. كلمة تعني هدية: **das Geschenk / die Erinnerung**
4. أشخاص من العائلة الممتدة: **die Verwandten / die Gäste**

**الحكم:** فُحص كل بند ومفتاحه وبدائله دون دمج الأسئلة في إقرار عام.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN, ZUFRIEDEN.

- **أخت أبي أو أمي: **die Tante / die Einladung**** → die Tante — أخت أحد الوالدين Tante؛ Einladung دعوة. التعريف أحد معاني Tante وليس حصرًا لها.

- **صفة تعني راضيًا عن النتيجة: **zufrieden / enttäuscht**** → zufrieden — تعريف مباشر للرضا يفصل zufrieden عن enttäuscht دون تخمين مشاعر من موقف محتمل.

- **كلمة تعني هدية: **das Geschenk / die Erinnerung**** → das Geschenk — تعريف الهدية مباشر؛ Erinnerung ذكرى، حتى إن ارتبطت بهدية في واقع آخر.

- **أشخاص من العائلة الممتدة: **die Verwandten / die Gäste**** → die Verwandten — Verwandten تدل على القرابة؛ Gäste ضيوف قد يكونون أقارب لكن اللفظ لا يدل على القرابة.

### DL-A2-06-T02

1. Ich hoffe, ______ meine Tante am Sonntag kommt.
2. Wir glauben, ______ das Essen lecker ist.
3. Sami freut sich, ______ seine Cousins da sind.

**الحكم:** فُحص كل بند ومفتاحه وبدائله دون دمج الأسئلة في إقرار عام.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN, ZUFRIEDEN.

- **Ich hoffe, ______ meine Tante am Sonntag kommt.** → dass — المحتوى المرجو مجيء Tante الأحد؛ dass وkommt في النهاية.

- **Wir glauben, ______ das Essen lecker ist.** → dass — اعتقاد بأن الطعام لذيذ؛ ist آخر التابعة، وليس التصديق حقيقة مستقلة.

- **Sami freut sich, ______ seine Cousins da sind.** → dass — Sami freut sich؛ dass تدخل محتوى الفرح، والفاصلة معطاة.

### DL-A2-06-T03

1. Ich glaube, dass unsere Familie heute ______. (kommen)
2. Sie sagt, dass die Feier um sechs Uhr ______. (beginnen)
3. Wir hoffen, dass alle Gäste Zeit ______. (haben)
4. Meine Eltern sagen, dass sie das Foto ______. (anschauen / möchten؛استعمل الفعلين)

**الحكم:** فُحص كل بند ومفتاحه وبدائله دون دمج الأسئلة في إقرار عام.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN, ZUFRIEDEN.

- **Ich glaube, dass unsere Familie heute ______. (kommen)** → kommt — Familie مفرد، فتكون kommt لا kommen.

- **Sie sagt, dass die Feier um sechs Uhr ______. (beginnen)** → beginnt — die Feier مفرد، فتكون beginnt؛ الساعة السادسة ضمن محتوى القول.

- **Wir hoffen, dass alle Gäste Zeit ______. (haben)** → haben — alle Gäste جمع، فتكون haben لا تصريف المفرد.

- **Meine Eltern sagen, dass sie das Foto ______. (anschauen / möchten؛استعمل الفعلين)** → anschauen möchten — تدريب مباشر جديد لترتيب anschauen möchten؛ الفعلان مطلوبان والمصرف أخير.

### DL-A2-06-T04

1. **Meine Schwester kommt. Ich freue mich.** → Ich freue mich, dass ______.
2. **Das Geschenk ist schön. Ich glaube das.** → Ich glaube, dass ______.
3. **Alle Cousins sind da. Wir hoffen das.** → Wir hoffen, dass ______.

**الحكم:** فُحص كل بند ومفتاحه وبدائله دون دمج الأسئلة في إقرار عام.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN, ZUFRIEDEN.

- ****Meine Schwester kommt. Ich freue mich.** → Ich freue mich, dass ______.** → meine Schwester kommt — الأخت فاعل kommt؛ Ich freue mich تجعل مضمون الجملة سبب الفرح.

- ****Das Geschenk ist schön. Ich glaube das.** → Ich glaube, dass ______.** → das Geschenk schön ist — das Geschenk مفرد محايد؛ schön ist وليس ist schön في التابعة.

- ****Alle Cousins sind da. Wir hoffen das.** → Wir hoffen, dass ______.** → alle Cousins da sind — الأمل بوجود الجميع لا يثبت حضورهم؛ alle Cousins da sind.

### DL-A2-06-T05

حدّد صحيحًا أو خطأ:

1. Lina lebt in Tunis.
2. Ihre Tante und zwei Cousins kommen am Sonntag.
3. Die Eltern möchten ein Familienfoto anschauen.
4. Lina bringt ein Geschenk für ihre Tante mit.

**الحكم:** فُحص كل بند ومفتاحه وبدائله دون دمج الأسئلة في إقرار عام.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN, ZUFRIEDEN.

- **Lina lebt in Tunis.** → خطأ:In Nabeul. — خطأ بحسب الجملة الأولى؛ التصحيح المحدد In Nabeul.

- **Ihre Tante und zwei Cousins kommen am Sonntag.** → صحيح — مطابق لجملة الزيارة؛ لا يفترض أن Cousins ابنا Tante.

- **Die Eltern möchten ein Familienfoto anschauen.** → صحيح — مطابق لنية الوالدين المذكورة؛ لا يدعي حدوث المشاهدة.

- **Lina bringt ein Geschenk für ihre Tante mit.** → صحيح — هدية Tante صريحة في آخر جملة.

### DL-A2-06-T06

أكمل من البنك، واستعمل كل كلمة مرة: **Mutter — Hause — Kuchen — Garten**.

1. Am Samstag hat die ______ der sprechenden Person Geburtstag.
2. Die Familie feiert zu ______.
3. Der Bruder sagt, dass er einen ______ mitbringt.
4. Die Familie möchte auch im ______ sitzen.

**الحكم:** فُحص كل بند ومفتاحه وبدائله دون دمج الأسئلة في إقرار عام.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN, ZUFRIEDEN.

- **Am Samstag hat die ______ der sprechenden Person Geburtstag.** → Mutter — Mutter؛ إعادة صياغة المناسبة نفسها دون تعيين هوية صاحب الصوت.

- **Die Familie feiert zu ______.** → Hause — zu Hause التعبير المكاني المطابق للبنك.

- **Der Bruder sagt, dass er einen ______ mitbringt.** → Kuchen — Kuchen ضمن مقولة الأخ؛ احتفظ البند بكلمة sagt.

- **Die Familie möchte auch im ______ sitzen.** → Garten — Garten بعد im مع الرغبة في الجلوس؛ كل كلمة في البنك تستعمل مرة واحدة.

### DL-A2-06-T07

ابدأ في 1 بـ Ich hoffe، وفي 2 بـ Ich freue mich؛استعمل كل كتلة مرة، وأضف الفاصلة والنقطة دون تغيير الصيغ:

1. dass / Ich hoffe / Zeit haben / alle Gäste
2. meine Schwester / dass / Ich freue mich / kommt
3. للتطلع إلى الاحتفال القادم، أكمل: Ich freue mich ______ die Feier. (**auf / dass**)

**الحكم:** فُحص كل بند ومفتاحه وبدائله دون دمج الأسئلة في إقرار عام.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN, ZUFRIEDEN.

- **dass / Ich hoffe / Zeit haben / alle Gäste** → Ich hoffe, dass alle Gäste Zeit haben. — البداية Ich hoffe محددة؛ كل كتلة مرة، وhaben آخر التابعة، والفاصلة قبل dass.

- **meine Schwester / dass / Ich freue mich / kommt** → Ich freue mich, dass meine Schwester kommt. — البداية Ich freue mich محددة وkommt آخر التابعة؛ لا حاجة لتغيير الصيغ المعطاة.

- **للتطلع إلى الاحتفال القادم، أكمل: Ich freue mich ______ die Feier. (**auf / dass**)** → auf — auf يسبق اسم الاحتفال؛ dass تحتاج جملة في هذا النمط، فلا تصلح في الفراغ.

### DL-A2-06-T08

**أ — P01: وصف مع الجهر**

اكتب أربع جمل عن مناسبة عائلية خيالية: الجملة 1 تذكر الاحتفال بعيد ميلاد الجدة يوم السبت في بيت الوالدين؛الجملة 2 تذكر أنك ستحضر كعكة؛الجملة 3 تبدأ بـ Ich hoffe, dass وتتمنى مجيء أبناء العمومة أو الخؤولة؛الجملة 4 تبدأ بـ Ich freue mich, dass وتعبّر عن الفرح بإمكان اجتماعكم، مستعملًا sein können في نهاية التابعة. اكتب بضمير ich، ثم اقرأ الجمل الأربع بصوت مرتفع. البيانات خيالية؛لا معلومات شخصية أو تسجيل أو شريك مطلوب.

**ب — P02: دعوة كتابة فقط**

اكتب باسم Mariam دعوة خيالية إلى قريب اسمه Sami، كتابة فقط: تحية، ثم أربع جمل في المتن، ثم ختام واسم. الجملة 1 تدعوه صراحة بـ Ich lade dich إلى احتفال السبت الساعة 18 في بيت والديك؛الجملة 2 تذكر أنه عيد ميلاد جدتك؛الجملة 3 تعبّر عن التطلع بـ Ich freue mich auf مع اسم الاحتفال؛الجملة 4 تتمنى أن يستطيع الحضور بـ Ich hoffe, dass مع kommen kannst في النهاية. فرّق بين اسم بعد auf وجملة بعد dass، ولا تدّع أن المدعو وافق. لا جهر أو إرسال أو بيانات عائلية حقيقية مطلوبة.

**الحكم:** مهمتان مختلفتان، لا طلب عام مفتوح؛ أربعة مطالب في P01 وسبعة مكونات في P02، مع نموذجين متفقين معهما.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

- **P01 مطلب 1** → 1. Am Samstag feiern wir den Geburtstag meiner Großmutter bei meinen Eltern. — المناسبة والجدة والسبت والوالدان مطابقة للمطلوب؛ wir لا يتعارض مع منظور الكاتب ich في مجمل النص.

- **P01 مطلب 2** → 2. Ich bringe einen Kuchen mit. — إحضار الكعكة بترتيب bringe…mit في الرئيسية.

- **P01 مطلب 3** → 3. Ich hoffe, dass meine Cousins kommen. — أمل مجيء Cousins، لا تأكيد حضور؛ kommen آخر التابعة.

- **P01 مطلب 4** → 4. Ich freue mich, dass wir zusammen sein können. — فرح بإمكان الاجتماع؛ sein können مرتب وتسبقه فاصلة التابعة. المطلوب قراءة الجمل الأربع جميعًا بصوت مرتفع.

- **P02 مطلب 1** → > Lieber Sami, — Lieber Sami تحية للشخص المحدد وتنتهي بفاصلة.

- **P02 مطلب 2** → > ich lade dich zur Feier am Samstag um 18 Uhr bei meinen Eltern ein. — دعوة صريحة بترتيب lade…ein، السبت الساعة18 عند الوالدين؛ ich صغيرة بعد فاصلة التحية.

- **P02 مطلب 3** → > Wir feiern den Geburtstag meiner Großmutter. — تعيين عيد ميلاد الجدة؛ لا خلط بأم المتكلم في الاستماع.

- **P02 مطلب 4** → > Ich freue mich auf die Feier. — auf مع اسم Feier؛ تطلع إلى احتفال قادم.

- **P02 مطلب 5** → > Ich hoffe, dass du kommen kannst. — أمل قدرة Sami على المجيء؛ kommen kannst دون zu والفعل المصرف أخيرًا.

- **P02 مطلب 6** → > Liebe Grüße — Liebe Grüße صيغة ختام، وليست جملة خامسة في المتن.

- **P02 مطلب 7** → > Mariam — Mariam اسم خيالي للمرسلة؛ لا كشف لاسم حقيقي.

### DL-A2-06-Q01

ما معنى **die Verwandten**؟

**الحكم:** Verwandte تعني الأقارب.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN.

**المفتاح:** الأقارب.

- بديل1 (الصحيح): **الأقارب.** — الأقارب هي الترجمة المباشرة.

- بديل2 (غير المختار): **الجيران.** — الجيران Nachbarn، ولا يدل اللفظ على قرابة.

- بديل3 (غير المختار): **الزملاء.** — الزملاء Kollegen، ولا يدل اللفظ على قرابة.

### DL-A2-06-Q02

اختر الجملة الصحيحة:

**الحكم:** نضع فاصلة قبل dass ويأتي الفعل في نهاية الجملة التابعة.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN.

**المفتاح:** Ich hoffe, dass alle Gäste Zeit haben.

- بديل1 (غير المختار): **Ich hoffe, dass alle Gäste haben Zeit.** — haben Zeit ترتيب رئيسية داخل التابعة؛ خطأ هنا.

- بديل2 (الصحيح): **Ich hoffe, dass alle Gäste Zeit haben.** — فاصلة قبل dass، وhaben آخر التابعة.

- بديل3 (غير المختار): **Ich hoffe dass, alle Gäste Zeit haben.** — الفاصلة بعد dass في غير موضعها.

### DL-A2-06-Q03

أكمل: Ich freue mich, dass meine Schwester heute ___.

**الحكم:** مع الفاعل المفرد تأتي kommt في نهاية جملة dass.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN.

**المفتاح:** kommt

- بديل1 (غير المختار): **heute kommt sie** — إضافة sie وتكرار heute لا يناسبان الفراغ.

- بديل2 (غير المختار): **kommen** — kommen لا يوافق meine Schwester المفرد.

- بديل3 (الصحيح): **kommt** — kommt تصريف مفرد صحيح آخر التابعة.

### DL-A2-06-Q04

أي جملة كتبت بفاصلة صحيحة؟

**الحكم:** توضع الفاصلة قبل جملة dass.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN.

**المفتاح:** Wir glauben, dass der Abend schön wird.

- بديل1 (غير المختار): **Wir glauben dass der Abend, schön wird.** — الفاصلة بين Abend وخبره في غير موضعها.

- بديل2 (الصحيح): **Wir glauben, dass der Abend schön wird.** — الفاصلة تفصل الرئيسية عن جملة dass التابعة.

- بديل3 (غير المختار): **Wir glauben dass, der Abend schön wird.** — الفاصلة بعد dass خطأ.

### DL-A2-06-Q05

أين تعيش Lina؟

**الحكم:** ينص النص على Lina lebt … in Nabeul.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN.

**المفتاح:** في Nabeul.

- بديل1 (الصحيح): **في Nabeul.** — Nabeul صريحة في بداية القراءة.

- بديل2 (غير المختار): **في Wien.** — Wien غير مذكورة؛ لا حاجة إلى دحض واقعي عن المدينة.

- بديل3 (غير المختار): **في Linden.** — Linden غير مذكورة في القراءة.

### DL-A2-06-Q06

من سيزور Lina يوم الأحد؟

**الحكم:** die Tante und zwei Cousins؛لا يحدد النص جهة القرابة،ولا يقول إن Cousins هما ابنا Tante المذكورة.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN.

**المفتاح:** قريبتها (Tante) واثنان من أبناء العمومة أو الخؤولة.

- بديل1 (غير المختار): **زملاؤها في العمل.** — الزملاء لم يذكروا.

- بديل2 (غير المختار): **جيرانها فقط.** — الجيران فقط ليست المجموعة المذكورة.

- بديل3 (الصحيح): **قريبتها (Tante) واثنان من أبناء العمومة أو الخؤولة.** — Tante واثنان من Cousins دون تخصيص نسب؛ صُححت الترجمة.

### DL-A2-06-Q07

ماذا يريد الوالدان أن يشاهدا معًا؟

**الحكم:** يريد الوالدان مشاهدة ein altes Familienfoto.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN.

**المفتاح:** صورة عائلية قديمة.

- بديل1 (غير المختار): **فيلمًا عن السفر.** — فيلم السفر غير مذكور.

- بديل2 (الصحيح): **صورة عائلية قديمة.** — الصورة العائلية القديمة هي المذكورة في القراءة.

- بديل3 (غير المختار): **برنامجًا رياضيًا.** — البرنامج الرياضي غير مذكور.

### DL-A2-06-Q08

في **Mein Bruder sagt, dass er einen Kuchen mitbringt**، ماذا يقول الأخ إنه سيحضر؟

**الحكم:** يقول إنه سيحضر كعكة (einen Kuchen)؛لا تثبت الجملة وحدها أنه أحضرها فعلًا.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN.

**المفتاح:** كعكة.

- بديل1 (الصحيح): **كعكة.** — einen Kuchen كعكة ضمن قول الأخ، لا واقعة مثبتة.

- بديل2 (غير المختار): **صورة.** — الصورة من القراءة، وليست مضمون قول الأخ في الاستماع.

- بديل3 (غير المختار): **هدية أخرى.** — هدية أخرى ليست مدلول Kuchen.

### DL-A2-06-Q09

أي عبارة تعبّر عن التطلع إلى الاحتفال القادم؟

**الحكم:** sich freuen auf تستخدم للتطلع إلى حدث قادم.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN.

**المفتاح:** Ich freue mich auf die Feier.

- بديل1 (غير المختار): **Ich freue mich, dass du da bist.** — صحيحة لغويًا، لكنها فرح بحضور المخاطب الحالي، لا تطلع إلى الاحتفال المحدد.

- بديل2 (غير المختار): **Ich bin die Feier.** — أكون الاحتفال ليست صيغة التعبير عن التطلع.

- بديل3 (الصحيح): **Ich freue mich auf die Feier.** — auf die Feier هي العبارة المطابقة لهدف السؤال.

### DL-A2-06-Q10

أكمل بصورة صحيحة: Meine Eltern sagen, dass sie das Foto ___.

**الحكم:** بعد dass يبقى الفعل المصرف في النهاية؛ هنا möchten في آخر الجملة.

مراجع متصلة: SUB, MODAL, SEP, FREUEN, TANTE, COUSIN.

**المفتاح:** anschauen möchten

- بديل1 (غير المختار): **möchten anschauen sie** — sie فاعل زائد والفعل المصرف ليس في موضع النهاية.

- بديل2 (الصحيح): **anschauen möchten** — المصدر anschauen ثم möchten المصرف آخر التابعة.

- بديل3 (غير المختار): **sie möchten anschauen** — sie زائدة بعد الفاعل المعطى، وmöchten ليس آخر التابعة.

### DL-A2-06-P01

اكتب أربع جمل عن مناسبة عائلية خيالية: الجملة 1 تذكر الاحتفال بعيد ميلاد الجدة يوم السبت في بيت الوالدين؛الجملة 2 تذكر أنك ستحضر كعكة؛الجملة 3 تبدأ بـ Ich hoffe, dass وتتمنى مجيء أبناء العمومة أو الخؤولة؛الجملة 4 تبدأ بـ Ich freue mich, dass وتعبّر عن الفرح بإمكان اجتماعكم، مستعملًا sein können في نهاية التابعة. اكتب بضمير ich، ثم اقرأ الجمل الأربع بصوت مرتفع. البيانات خيالية؛لا معلومات شخصية أو تسجيل أو شريك مطلوب.

**الحكم:** متطابق مع T08أ: أربع جمل مع الجهر وحد150. النموذج يتجاوز الحد؛ لا شريك أو تسجيل أو بيانات حقيقية.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

- معيار `taskCompletion`: أربع جمل عن المناسبة ومكانها ويومها والكعكة وأمل مجيء الأقارب والفرح باجتماعكم؛قرأت الجميع جهرًا. — عدد المكونات وقناة الأداء محددان، والنموذج يوفيهما؛ الإقرار ليس إرسالًا أو تسجيلًا.

- معيار `meaningClarity`: عيد ميلاد الجدة يوم السبت في بيت الوالدين؛المشاعر والآمال منسجمة دون ادعاء تأكيد الحضور. — المكان واليوم والمناسبة واضحة؛ لا يتحول الأمل إلى قبول للدعوة.

- معيار `targetSkill`: جملتا dass بعد hoffen و sich freuen،بفاصلة وفعل مصرف آخر التابعة؛sein können بالترتيب الصحيح،و bringe…mit في الرئيسية. — هدف الترتيب والفاصلة مصرح به ومتدرب عليه؛ النظام لا يدرّج صحة اللغة.

ضبط الدليل المحلي: `{"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 150, "speakAloud": true, "audioRequired": false}`

### DL-A2-06-P02

اكتب باسم Mariam دعوة خيالية إلى قريب اسمه Sami، كتابة فقط: تحية، ثم أربع جمل في المتن، ثم ختام واسم. الجملة 1 تدعوه صراحة بـ Ich lade dich إلى احتفال السبت الساعة 18 في بيت والديك؛الجملة 2 تذكر أنه عيد ميلاد جدتك؛الجملة 3 تعبّر عن التطلع بـ Ich freue mich auf مع اسم الاحتفال؛الجملة 4 تتمنى أن يستطيع الحضور بـ Ich hoffe, dass مع kommen kannst في النهاية. فرّق بين اسم بعد auf وجملة بعد dass، ولا تدّع أن المدعو وافق. لا جهر أو إرسال أو بيانات عائلية حقيقية مطلوبة.

**الحكم:** متطابق مع T08ب: تحية وأربع جمل وختام واسم، كتابة فقط وحد180. النموذج يتجاوز الحد؛ لا شريك أو تسجيل أو بيانات حقيقية.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

- معيار `taskCompletion`: تحية وأربع جمل وختام واسم خيالي؛دعوة صريحة مع اليوم والساعة 18 والمكان والمناسبة،كتابة فقط. — عدد المكونات وقناة الأداء محددان، والنموذج يوفيهما؛ الإقرار ليس إرسالًا أو تسجيلًا.

- معيار `meaningClarity`: Sami هو المدعو،والسبت 18 في بيت والدي Mariam؛لا ادعاء قبول الدعوة أو إرسالها فعلًا. — المكان واليوم والمناسبة واضحة؛ لا يتحول الأمل إلى قبول للدعوة.

- معيار `targetSkill`: auf مع اسم الاحتفال،و dass مع جملة لها فعل مصرف في النهاية:kommen kannst؛فصل lade…ein في الرئيسية. — هدف الترتيب والفاصلة مصرح به ومتدرب عليه؛ النظام لا يدرّج صحة اللغة.

ضبط الدليل المحلي: `{"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 180, "speakAloud": false, "audioRequired": false}`

### DL-A2-06-AUD-PHR-01

Der Verwandte. Die Verwandte. Der Cousin. Die Cousine. Die Einladung. Die Feier. Das Geschenk. Die Überraschung. Einladen. Besuchen. Gemeinsam. Glücklich. Zufrieden. Enttäuscht. Sich auf etwas freuen. Die Erinnerung. Ich glaube, dass meine Schwester heute kommt. Wir hoffen, dass alle Gäste Zeit haben. Ich freue mich, dass du da bist. Ich freue mich auf die Feier.

**الحكم:** كلمات الأصل وأصواته ومساراته وحالاته ومقاطعه محفوظة؛ المراجعة نصية فقط، ولا نستنتج حفلة سرية من عنوان الحوار.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

- **Der Verwandte.** — القريب بصيغة المذكر. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Die Verwandte.** — القريبة بصيغة المؤنث. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Der Cousin.** — Cousin يشمل ابن أخ أو أخت أحد الوالدين. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Die Cousine.** — Cousine تشمل بنت أخ أو أخت أحد الوالدين. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Die Einladung.** — اسم الدعوة. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Die Feier.** — اسم الاحتفال. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Das Geschenk.** — اسم الهدية. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Die Überraschung.** — اسم المفاجأة؛ لا يفترض غرض حفلة سرية. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Einladen.** — مصدر einladen القابل للفصل. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Besuchen.** — مصدر besuchen غير المنفصل. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Gemeinsam.** — معًا أو بصورة مشتركة؛ ليس عائليًا حصرًا. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Glücklich.** — سعيد. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Zufrieden.** — راضٍ. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Enttäuscht.** — خائب الأمل. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Sich auf etwas freuen.** — عبارة انعكاسية للتطلع إلى شيء؛ أضيفت بالمساعدة لتطابق المسجل. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Die Erinnerung.** — اسم الذكرى. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Ich glaube, dass meine Schwester heute kommt.** — اعتقاد قدوم الأخت مع فعل مصرف أخير. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Wir hoffen, dass alle Gäste Zeit haben.** — أمل توفر الوقت لا موافقة حضور مثبتة. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Ich freue mich, dass du da bist.** — فرح بالحضور مع mich. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Ich freue mich auf die Feier.** — التطلع باستخدام auf مع اسم. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

### DL-A2-06-AUD-DLG-01

Hast du gehört, dass unsere Großmutter am Samstag Geburtstag hat? Nein! Das ist eine schöne Überraschung. Wir planen eine kleine Feier bei unseren Eltern. Ich freue mich, dass wir alle zusammen sein können. Was soll ich mitbringen? Vielleicht einen Kuchen. Ich hoffe, dass alle Cousins kommen. Ich glaube, dass der Abend schön wird.

**الحكم:** كلمات الأصل وأصواته ومساراته وحالاته ومقاطعه محفوظة؛ المراجعة نصية فقط، ولا نستنتج حفلة سرية من عنوان الحوار.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

- **Hast du gehört, dass unsere Großmutter am Samstag Geburtstag hat?** — Mariam تسأل عن سماع خبر عيد ميلاد جدتهما السبت؛ hat آخر جملة dass.

- **Nein! Das ist eine schöne Überraschung.** — Sami لم يسمع الخبر ويراه مفاجأة جميلة؛ Das ضمير إشارة هنا، لا dass الرابطة. لا دليل على خطة حفلة سرية.

- **Wir planen eine kleine Feier bei unseren Eltern.** — خطة احتفال صغير عند والديهما؛ planen لا يعني أن الاحتفال حدث.

- **Ich freue mich, dass wir alle zusammen sein können. Was soll ich mitbringen?** — Sami يعبر عن إمكان اجتماعهم بترتيب sein können ثم يسأل ماذا يحضر؛ لا التزام بالكعكة بعد.

- **Vielleicht einen Kuchen. Ich hoffe, dass alle Cousins kommen.** — Mariam تقترح الكعكة بلفظ Vielleicht وتأمل مجيء Cousins؛ لا موافقة حضور مثبتة ولا تحويلهم إلى Cousinen.

- **Ich glaube, dass der Abend schön wird.** — Sami يعتقد أن الأمسية ستكون جميلة؛ wird مع الصفة، لا مصدر ناقص أو قياس فعلي لسعادة الأمسية.

### DL-A2-06-AUD-READ-01

Lina lebt mit ihrer Familie in Nabeul. Am Sonntag kommen ihre Tante und zwei Cousins zu Besuch. Die Familie plant ein gemeinsames Mittagessen. Lina freut sich, dass alle Verwandten Zeit haben. Ihr Bruder ist glücklich, dass er seine Cousins wiedersehen kann. Die Eltern sagen, dass sie zusammen ein altes Familienfoto anschauen möchten. Lina bringt ein kleines Geschenk für ihre Tante mit.

**الحكم:** كلمات الأصل وأصواته ومساراته وحالاته ومقاطعه محفوظة؛ المراجعة نصية فقط، ولا نستنتج حفلة سرية من عنوان الحوار.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

- **Lina lebt mit ihrer Familie in Nabeul.** — Lina تعيش مع أسرتها في Nabeul؛ الاسم مكان وليس نوع قرابة.

- **Am Sonntag kommen ihre Tante und zwei Cousins zu Besuch.** — الزيارة الأحد من Tante واثنين من Cousins؛ لا تعيين لجهة القرابة أو إثبات لوالدتهما.

- **Die Familie plant ein gemeinsames Mittagessen.** — خطة غداء مشترك؛ كونه عائليًا مأخوذ من سياق الفاعل لا من gemeinsam وحدها.

- **Lina freut sich, dass alle Verwandten Zeit haben.** — فرح Lina بتوفر وقت الأقارب؛ freut sich مع Lina وhaben آخر التابعة.

- **Ihr Bruder ist glücklich, dass er seine Cousins wiedersehen kann.** — الأخ سعيد بإمكان رؤية أبناء العمومة أو الخؤولة؛ wiedersehen kann وليس العكس.

- **Die Eltern sagen, dass sie zusammen ein altes Familienfoto anschauen möchten.** — الوالدان يقولان إنهما يريدان مشاهدة صورة قديمة؛ anschauen möchten. النية ليست مشاهدة وقعت.

- **Lina bringt ein kleines Geschenk für ihre Tante mit.** — هدية صغيرة لـTante؛ bringt…mit في الرئيسية وfür مع Akkusativ.

### DL-A2-06-AUD-LST-01

Am Samstag ist der Geburtstag meiner Mutter. Wir feiern zu Hause. Ich bin froh, dass meine Schwester aus Sfax kommt. Mein Bruder sagt, dass er einen Kuchen mitbringt. Ich hoffe, dass das Wetter schön ist, denn wir möchten auch im Garten sitzen.

**الحكم:** كلمات الأصل وأصواته ومساراته وحالاته ومقاطعه محفوظة؛ المراجعة نصية فقط، ولا نستنتج حفلة سرية من عنوان الحوار.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

- **Am Samstag ist der Geburtstag meiner Mutter.** — عيد ميلاد الأم السبت؛ ليس عيد ميلاد الجدة في الحوار ولا زيارة الأحد في القراءة.

- **Wir feiern zu Hause.** — احتفال في البيت zu Hause؛ لا عنوان مفصل مذكور.

- **Ich bin froh, dass meine Schwester aus Sfax kommt.** — فرح بقدوم الأخت من Sfax؛ ich لا يحدد جنس المتكلم أو يثبت أن اسمه Lina.

- **Mein Bruder sagt, dass er einen Kuchen mitbringt.** — ينقل الراوي قول الأخ عن الكعكة؛ mitbringt متصل آخر التابعة، وليس هذا إثباتًا لإحضار فعلي.

- **Ich hoffe, dass das Wetter schön ist, denn wir möchten auch im Garten sitzen.** — أمل بطقس جميل بسبب الرغبة في الجلوس بالحديقة؛ denn تليها رئيسية فيها möchten ثانيًا. لا ضمان لتحقق الأمل.

### DL-A2-06-AUD-MODEL-01

Ich glaube, dass meine Schwester heute kommt. Wir hoffen, dass alle Gäste Zeit haben. Ich freue mich, dass du da bist. Ich freue mich auf die Feier. Meine Schwester kommt heute. Ich glaube, dass der Abend schön wird.

**الحكم:** كلمات الأصل وأصواته ومساراته وحالاته ومقاطعه محفوظة؛ المراجعة نصية فقط، ولا نستنتج حفلة سرية من عنوان الحوار.

مراجع متصلة: SUB, MODAL, SEP, FREUEN.

- **Ich glaube, dass meine Schwester heute kommt.** — اعتقاد بجملة dass وفعل مصرف أخير. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Wir hoffen, dass alle Gäste Zeit haben.** — أمل بجملة dass وتصريف الجمع haben. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Ich freue mich, dass du da bist.** — فرح بالحضور الحالي. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Ich freue mich auf die Feier.** — auf مع اسم للتطلع. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Meine Schwester kommt heute.** — مقارنة الرئيسية: kommt ثانيًا. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

- **Ich glaube, dass der Abend schön wird.** — اعتقاد بخصوص الأمسية مع wird وصفة؛ لا دليل حدوث. مراجعة نصية مقابل المصدر، لا إثبات لجودة الصوت.

## البصمات

توجد SHA-256 للمصدر والتقييم ولكل كائن صوت كامل في `a2-06-review.json`، مع نتيجة مقارنة474 ملفMP3 ببصماتGit السابقة. لم يخزن تقرير المتصفح أو الاعتماد النصي كدليل نطق.
