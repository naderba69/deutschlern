# مراجعة A2.1 — الحياة اليومية والقدرات والتجارب

**CR19 · 2026-10-08 · مراجعة نصية مدعومة بالمصادر**

رُوجع **A2.1 — الحياة اليومية والقدرات والتجارب** في **125 وحدة و37 بندًا أو مطلبًا**، مع9 مراجع كاملة. صُحح معنى **vor**: وقت سابق لا دليل انتهاء النشاط؛ وأضيف شرحDativ وseitdem والفصل وPerfekt. صُححت روابط الأسئلة والكتالوج ودليل القراءة وترتيب التدريب. **T08أ/P01 أربع جمل مع الجهر**، و**T08ب/P02 أربع جمل كتابة فقط**، بمعايير ونموذجين مطابقين. الإصدار`a2-01-v2` والمخزن`v66`؛ عتبة80% وفهارس المفاتيح محفوظة،وتغير نص الخيار الصحيحQ01 فقط. خمسة أصول/10 مقاطع محفوظة دون استماع أو توليد أو اعتماد جديد. **الحملة18/53 درسًا والبوابة منفصلة؛تبقى35 درسًا،والتاليA2.2.** هذا سجل مراجعة وفحوص،لا شهادة مستوى أو إعلان دمج.

## الملفات والرفع والخطوة التالية

- المصدر والتقييم`content/A2/lesson-01-routines-abilities-experiences.md/.assessment.json`،و`data/course.json`،و20 صفًا في`data/production-task-catalog.csv` وخمسة صفوف مرجعية في`data/audio-asset-register.csv`؛لا تغييرplaylist أوMP3.
- `service-worker.js`v66 واختباراهservice_worker/accessibility_update،وتوسعةprogression وaccessibility_audit،والحارس`tools/test_a2_01_review.py`. لا تعديلapp.js أوCSS.
- `data/reviews/a2-01-review.json/.md` وفهرس المراجعات وREADME وPROGRESS وخطة التحسين2.25 وتقرير المتصفح وملفا التسليم.
- رُفع التنفيذ **39f04f87fceedf2a5016607a7b86392a23fd2b71** وتطابق معorigin؛حالةVercel success بيانات فقط،لا اختبار معاينة عن بُعد أو نشر إنتاج. دفعة السجل والفحوص بعنوان`Record CR19 granular A2.1 review and cumulative checks`؛معرفها فيgit log بعد دفعها،ثم يسجل إيصالها.
- PR#1 مفتوح وغير مدمج ورأسه39f04f8 عند هذا التحقق. الفرع الوحيد`arena/01a1036f-deutschlern`؛لا تبديل أو دمج. استردادmetadata تم بعد تطابق677 ملفًا وصفر إضافات،لاreset أعمى أو حذف عمل. خط أساس الحفظ17fe5b8.
- التالي **CR20/A2.2 — الرحلات والأماكن والمقارنة**: مراجعة كل نص وحوار وتمرين ومهمة بالمراجع وإصلاح ما يظهر. اقرأ أحدث إيصال أولًا؛لا تكررCR19 أو تولد تسجيلاته.
- القرارات مستمرة:كل تعديل يُرفع فور فحص مجموعته؛المحتوى والتقييم والتطبيق قبل الصوت؛لا مراجع بشري شرطًا للمتابعة. لا إعادة توليد أو إخفاء أو تغيير صوت أوready/نهائي بلا موافقة. حد10 طلبات توليد/رد؛B1.9/B1.10 معلقان واختيارB1.11 محفوظ. احفظA2.7Q08→T05 واتساقA2.9 وتاريخB2.6 دون إعادة تسميتهB2.7.

## الفحوص وحدودها — CR19

- PASS:build/verify؛الحزمة **1,867,423 بايت**،وcachev66.53 درسًا،428 عنوان تمرين،55 قسم حوار،754 مفردة،530 سؤال درس و10 للبوابة،109 مهام أداء،1080 معرّفًا في الكتالوج.217 أصلًا صوتيًا/474 مقطعًا،137ready و80pending. هذا تحقق بنية لا مراجعة تفصيلية للدروس غير المسجلة.
- PASS: **19 حارس مراجعة**:A0.1–5 والبوابة وA1.1–12 وA2.1. الحارس الجديد يتحقق من125 وحدة و37 مطلبًا والبصمات والمفاتيح والمصدر والكتالوج والأصوات والعرض،لا صحة لغوية مستقلة.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan،وفحوص صياغةJavaScript وdiff. fixtureA2.1 المنسوخ أخفق أولًا بسبب عكس مؤشر الجهر منA1.12؛صُححت بيانات الاختبار وأعيدت المجموعات كلها بنجاح. لا تعديلapp.js أوCSS ولا ادعاء خطأ تطبيق غير مثبت.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout علىChromium143.0.7499.0. استُخدمت مكتباتal2023 المناسبة من حزمةChromium خارجGit؛المتصفح آلي وصامت،لا مراجعة سمعية.
- العام:1440×900 و390×844،التنقل والتفريغ وRTL وتشغيل MP3 بسرعة1 و0.8 وإيقافه عند التنقل،والعمل دون اتصال ونطاقات البايت. لا جهاز هاتف فعلي أو اعتماد نطق.
- تحديثfixture عامل الخدمةv42→v66 نجح دون تحديث قسري،مع حفظ التقدم والإجابة وعزل المخازن. قد يلزم فتح الصوت مع الاتصال لإعادة تخزينه؛لا ضمان ببقاء جميع التسجيلات دائمًا.
- progression يختبر بقاء تاريخv1 دون منحه إتقانv2 أو فتحA2.2،ورفض المسودة القديمة،وقبولv2 مع80% ودليل الأداء. P01 يتطلب إقرار الجهر،P02 لا يعرض شرط الجهر؛النموذجان يمران بالطول ولا تكفي إجابة قصيرة أو مربعات ناقصة. هذه شروط وإقرارات لا تصحيح لغة أو نطق.
- axe-core4.11.0: **89 حالة ممثلة،صفر مخالفات للقواعد الآلية المختارة**،مع **57 ظهورًا لفحوص غير حاسمة تشمل136 ظهورًا لعقد**. غير الحاسم ليس مخالفة مثبتة أو نجاحًا شاملًا؛لا شهادةWCAG ولا شرط مراجع بشري.
- النماذج:PASS من أول تشغيل عند1440 و390،بما فيها الحفظ وإعادة التحميل والتصدير والاستيراد والمسودات. تذبذبfilechooser التاريخي لم يتكرر؛سببه غير مشخص ولا ندعي إصلاحه.
- العرض الضيق: **126 حالة**،63 عند320×900 و63 عند568×320؛كل الدروس والتفريغ والجداول. تغييرviewport لا تكبير نظام أو اختبار هاتف فعلي.
- الحفظ مقابل`17fe5b87e7a3eed76e3c9b7a5bf792213df521ca`: **52 درسًا آخر و1060 صف كتالوج آخر** دون تغيير. فهارس إجاباتA2.1 العشرة و29 خيارًا محفوظة؛تغير فقط نصQ01[0] لإزالة ادعاء انتهاء الدورة.
- ملفplaylist مطابق بايتًا ببايت،و**474MP3** طابقت بصماتGit السابقة. خمسة صفوفA2.1 فيaudio-register تغيرت في **source_line/source_heading فقط**؛212 صفًا آخر وبقية الحقول والروابط والحالات محفوظة. أصواتA2.1:PHR/MODEL/READ02،الحوارKarim03/Nour02،LST03؛لا استماع أو موافقة جديدة.

## المراجع المقروءة وحدود الاستدلال

- **TEMP — [Lingolia Temporale Präpositionen](https://deutsch.lingolia.com/de/grammatik/praepositionen/temporal)**: seit زمن من الماضي إلى الآن، و vor نقطة تسبق الآن بمقدار معلوم؛ كلاهما مع Dativ في هذا الاستعمال. لم نعتمد تقييد um إلى 12 في جدول الصفحة؛ليس موضوع هذه المراجعة ولا قاعدة ننقلها.
- **PERF — [Lingolia Perfekt](https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt)**: فعل haben/sein مصرف و Partizip II؛الانتقال دون مفعول مباشر،والصيغ المنفصلة وغير المنفصلة و-ieren. ذكر بدء الدورة لا يثبت انتهاء الدورة،ولا نحصر كل استعمال Perfekt في تعريف مبسط واحد.
- **PART — [Duden teilnehmen](https://www.duden.de/rechtschreibung/teilnehmen)**: المشاركة كمتعلم،an مع اسم النشاط؛nimmt teil/hat teilgenommen. فصل teil عن الفعل لا يعني أن an حرف الجر جزء منفصل منه.
- **START — [Duden anfangen](https://www.duden.de/rechtschreibung/anfangen)**: البدء واستعمال مفعول مباشر أو mit،والتصريف المنفصل و Perfekt مع hat؛لا معنى الانتهاء.
- **MODAL — [Lingolia Modalverben](https://deutsch.lingolia.com/de/grammatik/verben/modalverben)**: تصريف können مع الأشخاص والمصدر معه؛لا تعميمه على تركيب Perfekt مع haben.
- **MAIN — [Lingolia Hauptsätze](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)**: الفعل المصرف في الموقع الثاني وغير المصرف آخر النمط الخبري الرئيسي المدروس؛الموقع كتلة نحوية،ولا نحكم بخطأ كل ترتيب آخر خارج المطلوب.
- **SEP — [Lingolia Trennbare Verben](https://deutsch.lingolia.com/de/grammatik/verben/trennbare)**: فصل البادئة في الخبرية البسيطة وإدخال ge في Partizip II للفعل المنفصل؛تمييز beginnen عن anfangen.
- **DAT — [Lingolia Deklination](https://deutsch.lingolia.com/de/grammatik/nomen/deklination)**: جدول Dativ: einem/einer؛الجمع يضيف n إن لم ينتهِ بـ n أو s. وسم f الخاطئ بعد das Kleid في مثال الصفحة ليس دليلًا؛استُعمل الجدول الصحيح.
- **SINCE — [Duden seitdem (Adverb)](https://www.duden.de/rechtschreibung/seitdem_seither_von_da_an)**: منذ ذلك الوقت؛مدخل الظرف يميزه عن مدخل أداة الربط. المقصود Seitdem lernt sie في النص،لا درس لكل الجمل التابعة.

### روابط مستبعدة

- https://www.duden.de/rechtschreibung/seitdem — 404؛ليس دليلًا لغويًا.
- https://www.duden.de/rechtschreibung/seitdem_Adverb — 404؛استعمل رابطالظرف الفعلي.
- https://deutsch.lingolia.com/de/grammatik/nomen/deklination/dativ — Forward page not found؛استعملت صفحةDeklination وجدولDativ.

جميع المراجع التسعة جُلبت كاملة؛نتائج البحث الاستكشافية ليست مراجعة مستقلة.

## حدود المراجعة

- 125 وحدة و 37 بندًا أو مطلبًا متداخلة، لا 125 مهارة مستقلة. المفردات وأصول الصوت تعيد تغطية أجزاء من المراجعة النصية.
- المراجع التسعة للقواعد والمعاني المحددة؛ لا مدخل قاموسي منفصل لكل مفردة أو ترجمة. راجع المساعد الاستدلالات النصية.
- خمسة أصول و 10 مقاطع محفوظة دون استماع أو توليد أو تغيير للاعتماد.
- الطول والإقرار والبنية لا تثبت جودة الألمانية أو النطق أو الاستماع المستقل. لا شهادة CEFR/WCAG ولا اشتراط مراجع بشري.

## سجل كل وحدة

### scope-01

> الهدف والوقت

**نتيجة المراجعة:** الروتين والخبرة والقدرة ومدة الاستمرار؛35–40 دقيقة تقدير مرن،والاستماع اختياري.

### scope-02

> seit وvor

**نتيجة المراجعة:** حُذف القول إن vor يعني انتهاء المدة أو النشاط؛هو وقت سابق في هذا الاستعمال. بدء الدورة قد يعقبه استمرار التعلم.

**المراجع ذات الصلة:** TEMP, START.

### scope-03

> Dativ

**نتيجة المراجعة:** جُمعت حالة seit و vor الزمانية معأمثلة einer/einem/Monaten وتفسير n؛لا قاعدة عمياء بإضافة n لكل جمع.

**المراجع ذات الصلة:** TEMP, DAT.

### scope-04

> Perfekt

**نتيجة المراجعة:** مساعد مصرف و Partizip II؛لا مصدر بعد haben في نمطنا. يمكن ذكر البداية ثم استمرار أثرها أو نشاطها.

**المراجع ذات الصلة:** PERF.

### scope-05

> الأفعال المنفصلة

**نتيجة المراجعة:** anfangen و teilnehmen منفصلان،beginnen غير منفصل؛an في an einem Kurs حرف جر لا جزء منفصل من nehmen.

**المراجع ذات الصلة:** SEP, START, PART.

### scope-06

> الترتيب

**نتيجة المراجعة:** قُيد بالنمط الرئيسي المدروس وحددت بدايات T05؛nicht jeder andere Satz ist falsch لا يعني قبول مشتت يصرف lesen بعد kann.

**المراجع ذات الصلة:** MAIN, MODAL.

### scope-07

> seitdem

**نتيجة المراجعة:** ظرف يعود إلى بداية الدورة؛ليس رجوعًا إلى السكن منذ سنة،ولا أداة ربط تستدعي نفس الترتيب في كل استعمال.

**المراجع ذات الصلة:** SINCE.

### scope-08

> دليل النص

**نتيجة المراجعة:** تعارض 7/9 ساعات صريح في T06.2 بدل افتراض أنها لا تعمل عملًا ثانيًا؛حُفظت الكلمات المسجلة دون تغيير.

### scope-09

> المهمتان

**نتيجة المراجعة:** T08 أ/P01 أربع جمل مع الجهر؛T08 ب/P02 أربع جمل كتابة فقط مع المشاركة الأسبوعية؛المصدر والمعايير والنموذجان متطابقون.

### scope-10

> حدود القياس والحفظ

**نتيجة المراجعة:** لا تصحيح آلي للغة أو النطق ولا شهادة A2؛الخصوصية والصوت محفوظان. سجل v1 يبقى تاريخيًا ولا يحقق v2 أو يفتح A2.2.

### vocab-01

> | der Alltag | — | الحياة اليومية |

**نتيجة المراجعة:** Alltag مذكر بمعنى الحياة اليومية؛لم يطلب جمعًا هنا.

### vocab-02

> | die Erfahrung | die Erfahrungen | التجربة |

**نتيجة المراجعة:** Erfahrung مؤنث وجمعه Erfahrungen؛خبرة أو تجربة بحسب السياق.

### vocab-03

> | die Fähigkeit | die Fähigkeiten | القدرة |

**نتيجة المراجعة:** Fähigkeit مؤنث وجمعه Fähigkeiten؛قدرة لا تكرار نشاط.

### vocab-04

> | der Sprachkurs | die Sprachkurse | دورة اللغة |

**نتيجة المراجعة:** Sprachkurs مذكر وجمعه Sprachkurse؛دورة لغة.

### vocab-05

> | die Bäckerei | die Bäckereien | المخبز |

**نتيجة المراجعة:** Bäckerei مؤنث وجمعه Bäckereien؛المخبز مكان عمل النص.

### vocab-06

> | beginnen | beginnt | يبدأ |

**نتيجة المراجعة:** beginnen غير منفصل؛beginnt مع الغائب المفرد.

### vocab-07

> | anfangen | fängt an | يبدأ |

**نتيجة المراجعة:** anfangen منفصل؛fängt an للغائب المفرد،لا anfangt.

### vocab-08

> | teilnehmen an | nimmt teil | يشارك في |

**نتيجة المراجعة:** teilnehmen مصدر،و nimmt teil تصريف غائب؛an حرف جر مكمل للمشاركة.

### vocab-09

> | seitdem | — | منذ ذلك الحين |

**نتيجة المراجعة:** seitdem هنا منذ ذلك الحين،لا قبل ذلك أو مستقبلًا.

### vocab-10

> | regelmäßig | — | بانتظام |

**نتيجة المراجعة:** regelmäßig بانتظام؛لا يعني كل يوم بالضرورة.

### vocab-11

> | die Freizeit | — | وقت الفراغ |

**نتيجة المراجعة:** Freizeit مؤنث؛وقت الفراغ،لا مدة دورة اللغة.

### vocab-12

> | backen | — | يخبز |

**نتيجة المراجعة:** backen يخبز؛Kuchen backen قدرة في السياق.

### vocab-13

> | fotografieren | — | يصوّر |

**نتيجة المراجعة:** fotografieren يصوّر؛Perfekt fotografiert دون ge.

### vocab-14

> | eine Sprache sprechen | — | يتحدث لغة |

**نتيجة المراجعة:** eine Sprache sprechen يتحدث لغة؛صيغة مصدر لمجموعة فعلية لا اسم مستقل.

### vocab-15

> | eine Erfahrung machen | — | يكتسب/يخوض تجربة |

**نتيجة المراجعة:** eine Erfahrung machen يمر بتجربة أو يكتسب خبرة،لا ترجمة machen حرفيًا في كل تركيب.

### separation-01

> Der Kurs fängt an

**نتيجة المراجعة:** خبرية بفعل مصرف وجزء an منفصل.

**المراجع ذات الصلة:** SEP, START, PART.

### separation-02

> Der Kurs hat angefangen

**نتيجة المراجعة:** Perfekt:hat مصرف و angefangen كلمة واحدة.

**المراجع ذات الصلة:** SEP, START, PART.

### separation-03

> Ich nehme am Kurs teil

**نتيجة المراجعة:** nehme مصرف و teil منفصل،و am اختصار an dem.

**المراجع ذات الصلة:** SEP, START, PART.

### temporal-01

> Ich lerne seit sechs Monaten Deutsch.

**نتيجة المراجعة:** ستة أشهر من تعلم مستمر؛Präsens مع seit في هذا السياق.

**المراجع ذات الصلة:** TEMP, DAT, PERF.

### temporal-02

> Nour wohnt seit einem Jahr in Tunis.

**نتيجة المراجعة:** سنة من السكن في Tunis؛لا دليل على سنة في الدورة نفسها.

**المراجع ذات الصلة:** TEMP, DAT, PERF.

### temporal-03

> Seit wann arbeitest du hier?

**نتيجة المراجعة:** السؤال عن بداية الاستمرار،لا عدد مرات الأسبوع.

**المراجع ذات الصلة:** TEMP, DAT, PERF.

### temporal-04

> Seit Januar. / Seit drei Wochen.

**نتيجة المراجعة:** يناير نقطة بداية،وثلاثة أسابيع مدة؛جوابان نموذجيان مستقلان.

**المراجع ذات الصلة:** TEMP, DAT, PERF.

### temporal-05

> Vor drei Monaten habe ich einen Kurs begonnen.

**نتيجة المراجعة:** بدء قبل ثلاثة أشهر؛لا معنى ضمني لانتهاء الدورة الآن.

**المراجع ذات الصلة:** TEMP, DAT, PERF.

### temporal-06

> Vor einer Woche sind wir nach Sousse gefahren.

**نتيجة المراجعة:** رحلة قبل أسبوع؛sind gefahren للانتقال إلى Sousse في هذا المثال.

**المراجع ذات الصلة:** TEMP, DAT, PERF.

### ability-01

> Ich kann gut kochen.

**نتيجة المراجعة:** kann مع ich و kochen مصدر؛gut يصف القدرة.

**المراجع ذات الصلة:** MODAL.

### ability-02

> Kannst du Fahrrad fahren?

**نتيجة المراجعة:** kannst مع du في سؤال نعم/لا،و Fahrrad fahren مصدر التعبير.

**المراجع ذات الصلة:** MODAL.

### ability-03

> Wir können einfache Gespräche auf Deutsch führen.

**نتيجة المراجعة:** können مع wir و führen مصدر؛einfache Gespräche مفعول.

**المراجع ذات الصلة:** MODAL.

### experience-01

> Am Wochenende habe ich meine Tante besucht.

**نتيجة المراجعة:** habe besucht مع مفعول meine Tante؛خالتي أو عمتي دون تعيين جهة القرابة.

**المراجع ذات الصلة:** PERF, START.

### experience-02

> Letztes Jahr bin ich nach Berlin gefahren.

**نتيجة المراجعة:** bin gefahren إلى Berlin؛ليس كل fahren مع sein في كل سياق.

**المراجع ذات الصلة:** PERF, START.

### experience-03

> Vor zwei Monaten habe ich mit dem Deutschkurs angefangen.

**نتيجة المراجعة:** habe angefangen مع mit dem Deutschkurs؛قبل شهرين وقت بداية لا نهاية.

**المراجع ذات الصلة:** PERF, START.

### audio-phrase-01

> Seit wann lernst du Deutsch?

**نتيجة المراجعة:** سؤال مدة تعلم في التسجيل؛أضيف نصه نفسه إلى المصدر.

**المراجع ذات الصلة:** TEMP, MODAL, PERF.

### audio-phrase-02

> Ich lerne seit einem Jahr Deutsch.

**نتيجة المراجعة:** مثال تعلم منذ سنة؛مستقل عن مثال ستة أشهر.

**المراجع ذات الصلة:** TEMP, MODAL, PERF.

### audio-phrase-03

> Vor drei Monaten habe ich einen Kurs begonnen.

**نتيجة المراجعة:** حدث بدء دورة قبل ثلاثة أشهر دون حكم بانتهائها.

**المراجع ذات الصلة:** TEMP, MODAL, PERF.

### audio-phrase-04

> Ich kann kurze Texte lesen.

**نتيجة المراجعة:** قدرة على قراءة نصوص قصيرة؛ليس إثباتًا آليًا لقدرة المتعلم.

**المراجع ذات الصلة:** TEMP, MODAL, PERF.

### audio-phrase-05

> Am Wochenende bin ich nach Sousse gefahren.

**نتيجة المراجعة:** رحلة إلى Sousse في مثال مستقل؛لا تبديل لوجهة Mahdia في نص القراءة.

**المراجع ذات الصلة:** TEMP, MODAL, PERF.

### audio-model-01

> Ich lerne seit sechs Monaten Deutsch.

**نتيجة المراجعة:** تعلم مستمر منذ ستة أشهر؛الكلمات الصوتية محفوظة.

**المراجع ذات الصلة:** TEMP, MODAL, PERF.

### audio-model-02

> Nour wohnt seit einem Jahr in Tunis.

**نتيجة المراجعة:** السكن منذ سنة؛لا تاريخ بدء الدورة.

**المراجع ذات الصلة:** TEMP, MODAL, PERF.

### audio-model-03

> Vor drei Monaten habe ich einen Kurs begonnen.

**نتيجة المراجعة:** بداية دورة قبل ثلاثة أشهر؛انتهاء البداية لا انتهاء الدورة.

**المراجع ذات الصلة:** TEMP, MODAL, PERF.

### audio-model-04

> Ich kann gut kochen.

**نتيجة المراجعة:** الطبخ قدرة،ب kann ومصدر kochen.

**المراجع ذات الصلة:** TEMP, MODAL, PERF.

### audio-model-05

> Wir können einfache Gespräche auf Deutsch führen.

**نتيجة المراجعة:** محادثات بسيطة بالألمانية مع wir können.

**المراجع ذات الصلة:** TEMP, MODAL, PERF.

### audio-model-06

> Am Wochenende bin ich nach Mahdia gefahren.

**نتيجة المراجعة:** Mahdia في مثال مستقل،لا إلغاء Sousse في PHR.

**المراجع ذات الصلة:** TEMP, MODAL, PERF.

### helper-01

> - **teilnehmen an + Dativ** — يشارك في؛ **Ich nehme an einem Sprachkurs teil. / Ich nehme am Kurs teil.** و am اختصار an dem. الجزء المنفصل teil، أما an قبل اسم النشاط فحرف جر، لا جزء منفصل من nehmen.

**نتيجة المراجعة:** التمييز بين teil المنفصلة و an حرف الجر و am=an dem؛مساعدة مباشرة لمهمة P02.

### helper-02

> - **Perfekt في هذا الدرس:** besuchen→hat besucht، schreiben→hat geschrieben، machen→hat gemacht، fotografieren→hat fotografiert، beginnen→hat begonnen، anfangen→hat angefangen، fahren إلى وجهة دون مفعول مباشر→ist gefahren. احفظ صيغنا؛ ليست كل الأفعال بـ ge، وليست كل حركة مع sein. بدأ الدورة ≠ أنهى الدورة.

**نتيجة المراجعة:** المصادر والـ Partizip مع haben/sein في استعمالات محددة؛لا تعميم كل حركة أو إضافة ge دائمًا.

### helper-03

> - **ich kann / du kannst / Nour kann / wir können** — الصيغ اللازمة هنا. **Ich kann kurze Texte lesen.** لا نضع liest بعد kann؛ ونقول ich habe / Karim hat / die Freunde haben / wir sind في أمثلة الماضي.

**نتيجة المراجعة:** تصريف können والمساعدين واضح؛لا liest المصرفة بعد kann.

### helper-04

> - **Seitdem lernt sie regelmäßig.** — منذ ذلك الحين تتعلم بانتظام؛seitdem هنا ظرف يعود إلى بداية الدورة المذكورة، و lernt ثانيًا. لا نعمم هذا الترتيب على seitdem حين يعمل أداة ربط في تركيب آخر.

**نتيجة المراجعة:** seitdem ظرف زمني في النص،مع lernt في الموقع الثاني؛لا خلط بأداة الربط.

### helper-05

> - **zweimal pro Woche / jeden Morgen / regelmäßig** — مرتان أسبوعيًا / كل صباح / بانتظام. التكرار الأسبوعي ليس مدة التعلم الإجمالية.

**نتيجة المراجعة:** مرتان أسبوعيًا وكل صباح وبانتظام:تكرار لا مدة الاستمرار.

### helper-06

> - **kurze Texte / einfache Gespräche / der erste Brief / der alte Markt** — نصوص قصيرة / محادثات بسيطة / الرسالة الأولى / السوق القديم. **meine Tante / einen Freund / eine Freundin** — خالتي أو عمتي / صديقًا / صديقةً؛لا يحدد Tante جهة القرابة ولا يعني Freund تلقائيًا علاقة عاطفية.

**نتيجة المراجعة:** تفسيرات العبارات والأقارب والأصدقاء؛لا تعيين خالة مقابل عمة أو علاقة عاطفية غير مذكورة.

### helper-07

> - **Sie beginnt jeden Morgen um sieben Uhr.** — تبدأ عملها في سياق المخبز الساعة 7 صباحًا؛ الفعل beginnen غير منفصل. **Seit einem Jahr** في القراءة مدة السكن، لا موعد بدء الدورة.

**نتيجة المراجعة:** beginnt يعود إلى العمل في سياق المخبز،والسنة مدة سكن لا تعلم في رسالة القراءة.

### helper-08

> - **اتساق الأزمنة:** تعلم Nour منذ سنة في الحوار لا يناقض بدء دورة معينة قبل ثلاثة أشهر في القراءة؛ لا نستنتج تاريخ أول تعلم لها من تاريخ هذه الدورة، ولا أن vor يعني انتهاء الدراسة.

**نتيجة المراجعة:** تعلم سنة مع دورة بدأت قبل ثلاثة أشهر ممكن؛لا تناقض زمني لازم بين الحوار والقراءة.

### helper-09

> - **حدود الأمثلة:** الراوي المسمى Nour في بيانات قراءة الصوت يقرأ عنها بضمير الغائب؛ ليس النص حديثًا منها عن نفسها. الاستماع بصوت 03 لا يذكر اسم الشخص؛ لا نفترض أنه Nour. وجهة Sousse في PHR مثال مستقل عن Mahdia في القراءة والاستماع.

**نتيجة المراجعة:** اسم Nour في بيانات الراوي لا يحول السرد بضمير الغائب إلى حديث ذاتي؛لا هوية مفترضة لمتكلم الاستماع.

### helper-10

> - **حدود التدريب:** حاول الاستماع قبل فتح التفريغ، لكنه متاح ولا يثبت قراءته فهمًا مسموعًا مستقلًا. يمكن استعمال حياة ومدة وخبرة خيالية؛ لا عنوان أو تاريخ شخصي حقيقي أو شريك أو تسجيل متعلم مطلوب. الجهر مطلوب فقط في P01؛P02 كتابة فقط.

**نتيجة المراجعة:** تفريغ متاح وحياة خيالية؛P01 جهر و P02 كتابة،ولا جودة نطق أو استماع مستقل بمجرد قراءة النص.

### dialogue-01

> Karim: Seit wann lernst du Deutsch, Nour?

**نتيجة المراجعة:** Karim يسأل Nour عن بداية تعلم الألمانية، لا السكن.

**المراجع ذات الصلة:** TEMP, MODAL, PART, PERF.

### dialogue-02

> Nour: Seit einem Jahr. Ich nehme zweimal pro Woche an einem Sprachkurs teil.

**نتيجة المراجعة:** سنة تعلم مع حضور مرتين أسبوعيًا؛ المدة تختلف عن التكرار.

**المراجع ذات الصلة:** TEMP, MODAL, PART, PERF.

### dialogue-03

> Karim: Was kannst du schon gut?

**نتيجة المراجعة:** يسأل عما تستطيع فعله الآن، لا عن تجربة سفر.

**المراجع ذات الصلة:** TEMP, MODAL, PART, PERF.

### dialogue-04

> Nour: Ich kann kurze Texte lesen und einfache Gespräche führen. Vor drei Monaten habe ich meinen ersten Brief auf Deutsch geschrieben.

**نتيجة المراجعة:** قراءة نصوص ومحادثات بسيطة ورسالة أولى قبل ثلاثة أشهر؛ لا يقول إن التعلم انتهى.

**المراجع ذات الصلة:** TEMP, MODAL, PART, PERF.

### dialogue-05

> Karim: Toll! Und was machst du in deiner Freizeit?

**نتيجة المراجعة:** ينتقل إلى هوايات وقت الفراغ؛ سؤال مستقل عن موعد الدورة.

**المراجع ذات الصلة:** TEMP, MODAL, PART, PERF.

### dialogue-06

> Nour: Ich fotografiere gern. Letztes Wochenende habe ich den alten Markt fotografiert.

**نتيجة المراجعة:** تحب التصوير وصورت السوق القديم في نهاية الأسبوع الماضية؛ fotografiert بلا ge.

**المراجع ذات الصلة:** TEMP, MODAL, PART, PERF.

### reading-01

> Nour wohnt seit einem Jahr in Tunis.

**نتيجة المراجعة:** تسكن Nour في Tunis منذ سنة؛ الجملة عن السكن.

### reading-02

> Sie arbeitet in einer Bäckerei und beginnt jeden Morgen um sieben Uhr.

**نتيجة المراجعة:** تعمل في مخبز وتبدأ صباحًا 7؛ لا ننفي عملًا آخر غير مذكور.

### reading-03

> Vor drei Monaten hat sie einen Deutschkurs angefangen.

**نتيجة المراجعة:** بدأت دورة ألمانية قبل ثلاثة أشهر؛ لا ادعاء بانتهاء الدراسة.

### reading-04

> Seitdem lernt sie regelmäßig.

**نتيجة المراجعة:** تعلم منتظم منذ بداية الدورة؛ seitdem يعود إلى وقت البدء السابق مباشرة.

### reading-05

> Nour kann gut Kuchen backen und spricht Arabisch und Französisch.

**نتيجة المراجعة:** تجيد خبز الكعك وتتحدث العربية والفرنسية؛ لا شهادة إجادة مستقلة.

### reading-06

> Am Wochenende ist sie nach Mahdia gefahren.

**نتيجة المراجعة:** سافرت إلى Mahdia في نهاية الأسبوع؛ sein مع الانتقال في هذا السياق.

### reading-07

> Dort hat sie eine Freundin besucht und viele Fotos gemacht.

**نتيجة المراجعة:** هناك زارت صديقة والتقطت صورًا؛ dort يعود إلى Mahdia، و Freundin مؤنث.

### reading-question-01

> Seit wann wohnt Nour in Tunis?

**نتيجة المراجعة:** Seit einem Jahr؛ مدة السكن المذكورة.

### reading-question-02

> Wo arbeitet sie?

**نتيجة المراجعة:** In einer Bäckerei؛ مكان العمل الصريح.

### reading-question-03

> Wann hat sie den Deutschkurs angefangen?

**نتيجة المراجعة:** Vor drei Monaten؛ وقت بدء الدورة، لا إثبات انتهاء مدتها.

### reading-question-04

> Was kann Nour gut?

**نتيجة المراجعة:** Sie kann gut Kuchen backen؛ القدرة الموصوفة بكلمة gut.

### reading-question-05

> Wohin ist sie am Wochenende gefahren?

**نتيجة المراجعة:** Nach Mahdia؛ الوجهة، لا البلد الذي تتعلم لغته.

### listening-01

> Ich lerne seit acht Monaten Deutsch.

**نتيجة المراجعة:** ثمانية أشهر تعلم مستمر؛ المتكلم غير مسمى.

**المراجع ذات الصلة:** TEMP, PERF, MODAL.

### listening-02

> Vor acht Monaten habe ich mit einem Kurs angefangen.

**نتيجة المراجعة:** بدأ دورة قبل ثمانية أشهر؛ متوافق مع مدة التعلم الحالية.

**المراجع ذات الصلة:** TEMP, PERF, MODAL.

### listening-03

> Jetzt kann ich einfache Gespräche führen.

**نتيجة المراجعة:** قدرة حالية على محادثات بسيطة؛ لا وعد بتحققها لدى كل متعلم في المدة نفسها.

**المراجع ذات الصلة:** TEMP, PERF, MODAL.

### listening-04

> Letztes Wochenende bin ich nach Mahdia gefahren.

**نتيجة المراجعة:** رحلة إلى Mahdia في نهاية الأسبوع الماضية؛ bin gefahren.

**المراجع ذات الصلة:** TEMP, PERF, MODAL.

### listening-05

> Ich habe einen Freund besucht und viele Fotos gemacht.

**نتيجة المراجعة:** زار صديقًا والتقط صورًا؛ Freund مذكر بخلاف Freundin في القراءة.

**المراجع ذات الصلة:** TEMP, PERF, MODAL.

### listening-question-01

> Seit wann lernt die Person Deutsch?

**نتيجة المراجعة:** Seit acht Monaten؛ لا سنة الحوار أو ستة أشهر الأمثلة.

### listening-question-02

> Was kann sie jetzt?

**نتيجة المراجعة:** Einfache Gespräche führen؛ مهارة مذكورة صراحة.

### listening-question-03

> Wohin ist sie am Wochenende gefahren?

**نتيجة المراجعة:** Nach Mahdia؛ لا Sousse في مثال العبارات.

### listening-question-04

> Wen hat sie besucht?

**نتيجة المراجعة:** Einen Freund؛ wen يسأل عن الشخص المزور. الضمير sie يتبع Person نحويًا، لا جنس المتكلم.

### speaking-model-01

> Ich lerne seit sechs Monaten Deutsch.

**نتيجة المراجعة:** تعلم مستمر منذ ستة أشهر؛ أول مطلب في P01.

**المراجع ذات الصلة:** TEMP, PERF, MODAL.

### speaking-model-02

> Vor sechs Monaten habe ich mit einem Kurs angefangen.

**نتيجة المراجعة:** بداية الدورة قبل ستة أشهر متوافقة مع مدة التعلم؛ لا يقول إن الدورة انتهت.

**المراجع ذات الصلة:** TEMP, PERF, MODAL.

### speaking-model-03

> Ich kann einfache Texte lesen.

**نتيجة المراجعة:** قدرة قراءة نصوص بسيطة؛ kann مع المصدر lesen.

**المراجع ذات الصلة:** TEMP, PERF, MODAL.

### speaking-model-04

> Letztes Wochenende habe ich einen Freund besucht.

**نتيجة المراجعة:** زيارة صديق في نهاية الأسبوع الماضية؛ habe besucht. تُقرأ الجمل الأربع جهرًا دون تسجيل.

**المراجع ذات الصلة:** TEMP, PERF, MODAL.

### writing-model-01

> Ich lerne seit einem Jahr Deutsch.

**نتيجة المراجعة:** سنة تعلم مستمرة؛ P02 كتابة فقط.

**المراجع ذات الصلة:** TEMP, PART, MODAL, PERF.

### writing-model-02

> Ich nehme zweimal pro Woche an einem Sprachkurs teil.

**نتيجة المراجعة:** مشاركة مرتين أسبوعيًا؛ nehme و teil منفصلان و an einem Sprachkurs مكمل الفعل.

**المراجع ذات الصلة:** TEMP, PART, MODAL, PERF.

### writing-model-03

> Ich kann kurze Texte lesen.

**نتيجة المراجعة:** قدرة لغوية على قراءة النصوص؛ kann مع مصدر.

**المراجع ذات الصلة:** TEMP, PART, MODAL, PERF.

### writing-model-04

> Letzte Woche habe ich einen Brief auf Deutsch geschrieben.

**نتيجة المراجعة:** كتابة رسالة الأسبوع الماضي إنجاز محدد؛ ليست مجرد قدرة نظرية أو وعد.

**المراجع ذات الصلة:** TEMP, PART, MODAL, PERF.

### card-01

> - **Seit wann lernst du Deutsch?** → منذ متى تتعلم الألمانية؟

**نتيجة المراجعة:** سؤال منذ متى، لا كم مرة أسبوعيًا.

### card-02

> - **Ich lerne seit einem Jahr Deutsch.** → أتعلم الألمانية منذ سنة.

**نتيجة المراجعة:** تعلم منذ سنة، مع استمرار في السياق.

### card-03

> - **Vor drei Monaten habe ich angefangen.** → بدأت قبل ثلاثة أشهر.

**نتيجة المراجعة:** بدأ قبل ثلاثة أشهر دون القول بانتهاء النشاط.

### card-04

> - **Ich kann gut kochen.** → أستطيع الطبخ جيدًا.

**نتيجة المراجعة:** قدرة على الطبخ باستخدام المصدر kochen.

### DL-A2-01-T01

> 1. Ich wohne ______ zwei Jahren in Nabeul. (ما زلت أسكن هناك)
> 2. ______ drei Monaten habe ich den Kurs begonnen.
> 3. Sie arbeitet ______ Januar in diesem Büro. (ما زالت تعمل فيه)
> 4. ______ einer Woche sind wir nach Tunis gefahren.

**نتيجة المراجعة:** أربع حالات من سياق واضح؛ vor لا يحكم بانتهاء النشاط.

1. seit لاستمرار السكن.
2. Vor لوقت بدء الدورة الماضي.
3. seit للعمل المستمر من يناير؛ أضيف السياق الصريح.
4. Vor للرحلة قبل أسبوع.

### DL-A2-01-T02

> 1. Seit ______ Jahr lernt Omar Deutsch. (ein)
> 2. Nour arbeitet seit drei ______ in der Bäckerei. (Monat)
> 3. Wir wohnen seit einer ______ in dieser Wohnung. (Woche)

**نتيجة المراجعة:** ثلاثة بنود Dativ تميز الأداة من نهاية الجمع.

1. einem مع Jahr المحايد في Dativ.
2. Monaten: جمع Monate مع n في Dativ.
3. Woche بعد einer؛ لا جمع جديد أو n إضافية هنا.

### DL-A2-01-T03

> 1. Ich ______ am Samstag meine Tante besucht.
> 2. Wir ______ nach Sousse gefahren.
> 3. Karim ______ einen Brief geschrieben.
> 4. Die Freunde ______ viele Fotos gemacht.

**نتيجة المراجعة:** أربعة مساعدين مصرفين حسب الفاعل واستعمال الفعل.

1. habe مع ich و besucht.
2. sind مع wir و gefahren للانتقال.
3. hat مع Karim و geschrieben.
4. haben مع die Freunde و gemacht.

### DL-A2-01-T04

> 1. Ich ______ gut kochen.
> 2. ______ du schwimmen?
> 3. Wir ______ einfache Texte lesen.
> 4. Nour ______ Arabisch und Französisch sprechen.

**نتيجة المراجعة:** أربع صيغ können مع مصادر مدربة.

1. kann مع ich.
2. Kannst مع du وبحرف كبير أول السؤال.
3. können مع wir.
4. kann مع Nour المفرد الغائب.

### DL-A2-01-T05

> ابدأ بالاسم أو الضمير المحدد بين القوسين، واستعمل كل كتلة مرة واحدة. الفعل المصرف ثانيًا والمصدر أو Partizip II في النهاية في هذه الخبرية البسيطة؛ لا نزعم أن كل ترتيب آخر خطأ:
>
> 1. seit einem Jahr / Deutsch / lernt / Nour (ابدأ بـ Nour)
> 2. gut / kann / Karim / fotografieren (ابدأ بـ Karim)
> 3. vor drei Monaten / angefangen / hat / sie / den Kurs (ابدأ بـ Sie)
> 4. kurze Texte / lesen / Ich / kann (ابدأ بـ Ich)

**نتيجة المراجعة:** أربع خبريّات ببدايات محددة؛ أضيف تدريب مباشر لـ Q06.

1. Nour lernt seit einem Jahr Deutsch؛ البداية Nour محددة.
2. Karim kann gut fotografieren؛ المصدر في النهاية.
3. Sie hat vor drei Monaten den Kurs angefangen؛ هذا نموذج، لا حكم بأن كل تنويع آخر خطأ.
4. Ich kann kurze Texte lesen؛ تدريب مباشر على Q06.

### DL-A2-01-T06

> حدّد صحيحًا أو خطأ:
>
> 1. Nour wohnt seit einem Jahr in Tunis.
> 2. Sie beginnt in der Bäckerei um neun Uhr, nicht um sieben Uhr.
> 3. Sie kann gut Kuchen backen.
> 4. Am Wochenende ist sie nach Mahdia gefahren.
> 5. Den Deutschkurs hat sie vor drei Monaten angefangen.
> 6. „Seitdem lernt sie regelmäßig“ heißt hier: Seit dem Kursbeginn lernt sie regelmäßig.

**نتيجة المراجعة:** ستة أحكام على دليل القراءة؛ الثاني تناقض صريح وبندان جديدان للبدء و seitdem.

1. صحيح: سنة سكن في Tunis.
2. خطأ: نفي 7 واستبدالها 9 يناقض النص صراحة.
3. صحيح: تخبز الكعك جيدًا.
4. صحيح: الوجهة Mahdia.
5. صحيح: بدء الدورة قبل ثلاثة أشهر.
6. صحيح: seitdem منذ بداية الدورة المذكورة.

### DL-A2-01-T07

> أكمل من البنك، واستعمل كل كلمة مرة واحدة: **acht — Gespräche — Mahdia — Freund**.
>
> 1. Die Person lernt seit ______ Monaten Deutsch.
> 2. Sie kann einfache ______ führen.
> 3. Sie ist nach ______ gefahren.
> 4. Sie hat einen ______ besucht.

**نتيجة المراجعة:** بنك كلمات محدد؛ كل بند مرئي منفصل عن غيره.

1. acht من مدة التعلم.
2. Gespräche بعد einfache.
3. Mahdia وجهة السفر.
4. Freund المزور؛ كل لفظ من البنك مرة واحدة.

### DL-A2-01-T08

> **أ — P01: أربع جمل مع الجهر**
>
> اكتب أربع جمل مترابطة عن حياة خيالية ثم اقرأ الأربع بصوت مرتفع، ويمكنك أداؤها منفردًا: الأولى بـ seit والمضارع عن تعلم مستمر؛ الثانية بـ vor و Perfekt عن وقت بدء دورة لا عن انتهائها؛ الثالثة بـ können عن قدرة؛ الرابعة بـ Letztes Wochenende و Perfekt عن نشاط واحد. اجعل مدة التعلم ووقت بدء الدورة متوافقين؛ قد تبدأ الدورة بعد بدء التعلم أو معه. لا شريك أو تسجيل أو معلومات شخصية حقيقية مطلوبة.
>
> **ب — P02: أربع جمل كتابة فقط**
>
> اكتب أربع جمل عن متعلم لغة خيالي بضمير ich: الأولى بـ seit والمضارع عن مدة التعلم المستمرة؛ الثانية تذكر المشاركة مرتين أسبوعيًا باستعمال Ich nehme zweimal pro Woche an einem Sprachkurs teil؛ الثالثة بـ können عن قدرة لغوية؛ الرابعة بـ Letzte Woche و Perfekt عن إنجاز محدد ككتابة رسالة أو قراءة نص. هذه كتابة فقط، دون جهر أو تسجيل؛ لا تخلط مدة التعلم بتكرار الحضور الأسبوعي.

**نتيجة المراجعة:** مساران مختلفان، كل منهما أربع جمل؛ أ مع الجهر وب كتابة فقط، بمعايير ونموذجين مطابقين.

1. أ 1: تعلم مستمر مع seit والمضارع.
2. أ 2: بداية دورة مع vor و Perfekt متوافقة زمنيًا.
3. أ 3: قدرة مع können ومصدر.
4. أ 4: نشاط Letztes Wochenende مع Perfekt؛ الجهر مطلوب للأربع.
5. ب 1: مدة تعلم مستمرة مع seit.
6. ب 2: teilnehmen مع مرتين أسبوعيًا.
7. ب 3: قدرة لغوية مع können.
8. ب 4: إنجاز Letzte Woche مع Perfekt؛ الأربع كتابة فقط.

### DL-A2-01-Q01

> ما معنى vor drei Monaten عند تحديد وقت بدء الدورة؟

**نتيجة المراجعة:** صُحح الخيار 0 ليحدد وقت البدء لا انتهاء الدورة؛ seit استمرار، وبعد ثلاثة أشهر مستقبل.

**الخيارات:** قبل ثلاثة أشهر؛ يحدد وقت البداية ولا يثبت انتهاء الدورة. / منذ ثلاثة أشهر وما زال مستمرًا. / بعد ثلاثة أشهر.

**الصحيح:** قبل ثلاثة أشهر؛ يحدد وقت البداية ولا يثبت انتهاء الدورة. — vor هنا يحدد كم مضى على البداية، لا نهاية الدورة. قد أبدأ قبل ثلاثة أشهر وأظل أتعلم الآن.

**الربط:** DL-A2-01-T01.

### DL-A2-01-Q02

> تسكن نور في تونس وما زالت تعيش هناك: Nour wohnt ___ einem Jahr in Tunis.

**نتيجة المراجعة:** seit في هذا السياق المستمر؛ صُحح الربط إلى T01 لاختيار seit/vor بدل الاقتصار على تصريف الأداة.

**الخيارات:** vor / seit / nach

**الصحيح:** seit — نستخدم seit لشيء بدأ وما زال مستمرًا.

**الربط:** DL-A2-01-T01.

### DL-A2-01-Q03

> أي تركيب صحيح؟

**نتيجة المراجعة:** seit einem Jahr صحيح؛ ein ليس Dativ و eines لا يطابق هذه الحالة والاسم.

**الخيارات:** seit ein Jahr / seit eines Jahr / seit einem Jahr

**الصحيح:** seit einem Jahr — بعد seit هنا تأتي صيغة Dativ: seit einem Jahr.

**الربط:** DL-A2-01-T02.

### DL-A2-01-Q04

> أكمل: Wir ___ nach Sousse gefahren.

**نتيجة المراجعة:** sind مع wir و gefahren للانتقال؛ haben ليس مساعد هذا الاستعمال و ist مفرد.

**الخيارات:** haben / sind / ist

**الصحيح:** sind — هنا انتقال إلى سوسة دون مفعول مباشر مع fahren؛ نستعمل sein ومع wir الصيغة sind. لا نعمم sein على كل حركة.

**الربط:** DL-A2-01-T03.

### DL-A2-01-Q05

> أكمل: Nour ___ gut Kuchen backen.

**نتيجة المراجعة:** Nour مفرد غائب فتأخذ kann؛ kannst مع du و können ليس تصريفها.

**الخيارات:** kann / kannst / können

**الصحيح:** kann — مع الاسم المفرد Nour نستخدم kann.

**الربط:** DL-A2-01-T04.

### DL-A2-01-Q06

> أي جملة خبرية رئيسية تتبع النمط المدروس: فاعل ثم können مصرف، ومصدر في النهاية؟

**نتيجة المراجعة:** Ich kann kurze Texte lesen في النمط المحدد؛ liest مصرف لا مصدر، والبديل الآخر يخالف المصدر النهائي المطلوب.

**الخيارات:** Ich kann kurze Texte liest. / Ich kann lesen kurze Texte. / Ich kann kurze Texte lesen.

**الصحيح:** Ich kann kurze Texte lesen. — في هذا النمط تأتي kann مع ich ثم المفعول، وlesen مصدر بلا zu في النهاية؛ لا نختار liest المصرفة أو المصدر قبل المفعول.

**الربط:** DL-A2-01-T05.

### DL-A2-01-Q07

> أين تعمل Nour بحسب النص؟

**نتيجة المراجعة:** المخبز مذكور صراحة؛ الفندق والمدرسة ليسا معلومة النص. لا ندعي أن النص يمنع أي عمل آخر.

**الخيارات:** In einem Hotel. / In einer Bäckerei. / In einer Schule.

**الصحيح:** In einer Bäckerei. — يذكر النص أنها تعمل في مخبز: in einer Bäckerei.

**الربط:** DL-A2-01-T06.

### DL-A2-01-Q08

> متى بدأت Nour دورة الألمانية؟

**نتيجة المراجعة:** Vor drei Monaten يجيب عن وقت البداية؛ seit مدة استمرار لا الصياغة نفسها، والسنة مدة السكن في القراءة.

**الخيارات:** Vor drei Monaten. / Seit drei Monaten. / Vor einem Jahr.

**الصحيح:** Vor drei Monaten. — بدأت الدورة قبل ثلاثة أشهر: vor drei Monaten.

**الربط:** DL-A2-01-T06.

### DL-A2-01-Q09

> ماذا تعني جملة **Ich nehme zweimal pro Woche an einem Sprachkurs teil**؟

**نتيجة المراجعة:** المشاركة مرتين أسبوعيًا هي المعنى، لا بداية شهرية أو نهاية يومية. T08 ب يدرب الجملة نفسها.

**الخيارات:** أبدأ دورة لغة مرة في الشهر. / أنهي دورة اللغة كل يوم. / أشارك في دورة لغة مرتين أسبوعيًا.

**الصحيح:** أشارك في دورة لغة مرتين أسبوعيًا. — التركيب teilnehmen an يعني المشاركة في، وzweimal pro Woche تعني مرتين أسبوعيًا.

**الربط:** DL-A2-01-T08.

### DL-A2-01-Q10

> ما معنى **Seitdem lernt sie regelmäßig**؟

**نتيجة المراجعة:** منذ ذلك الحين وبانتظام، لا قبل ذلك أو بداية لاحقة. صُحح رقم الكتالوج من 8 إلى 6 ليطابق التقييم.

**الخيارات:** كانت تتعلم قبل ذلك. / منذ ذلك الحين تتعلم بانتظام. / ستبدأ التعلم لاحقًا.

**الصحيح:** منذ ذلك الحين تتعلم بانتظام. — seitdem تعني منذ ذلك الحين.

**الربط:** DL-A2-01-T06.

### DL-A2-01-P01

> اكتب أربع جمل مترابطة عن حياة خيالية ثم اقرأ الأربع بصوت مرتفع، ويمكنك أداؤها منفردًا: الأولى بـ seit والمضارع عن تعلم مستمر؛ الثانية بـ vor و Perfekt عن وقت بدء دورة لا عن انتهائها؛ الثالثة بـ können عن قدرة؛ الرابعة بـ Letztes Wochenende و Perfekt عن نشاط واحد. اجعل مدة التعلم ووقت بدء الدورة متوافقين؛ قد تبدأ الدورة بعد بدء التعلم أو معه. لا شريك أو تسجيل أو معلومات شخصية حقيقية مطلوبة.

**نتيجة المراجعة:** P01/T08 أ: حد 120 حرفًا وأربع جمل مع الجهر؛ مدة التعلم وبداية الدورة متوافقتان، ولا تُفرض واقعة شخصية أو تسجيل.

**المعايير:**
- أربع جمل: تعلم مستمر، وقت بدء دورة، قدرة، ونشاط في نهاية الأسبوع؛ قرأت الأربع جهرًا.
- مدة التعلم ووقت بدء الدورة متوافقان، ولا أفترض أن ذكر البداية يعني انتهاء الدراسة.
- seit مع المضارع وDativ،وvor الزمانية معDativ وPerfekt؛können مصرف ومصدر،وفعل مساعد مصرف وPartizip II في نمط الماضي.

**الربط:** DL-A2-01-T08.

### DL-A2-01-P02

> اكتب أربع جمل عن متعلم لغة خيالي بضمير ich: الأولى بـ seit والمضارع عن مدة التعلم المستمرة؛ الثانية تذكر المشاركة مرتين أسبوعيًا باستعمال Ich nehme zweimal pro Woche an einem Sprachkurs teil؛ الثالثة بـ können عن قدرة لغوية؛ الرابعة بـ Letzte Woche و Perfekt عن إنجاز محدد ككتابة رسالة أو قراءة نص. هذه كتابة فقط، دون جهر أو تسجيل؛ لا تخلط مدة التعلم بتكرار الحضور الأسبوعي.

**نتيجة المراجعة:** P02/T08 ب: حد 130 حرفًا وأربع جمل كتابة فقط؛ التكرار الأسبوعي يختلف عن مدة التعلم، وإنجاز Perfekt حدث لا وصف قدرة.

**المعايير:**
- أربع جمل: مدة تعلم، مشاركة مرتين أسبوعيًا، قدرة لغوية، وإنجاز الأسبوع الماضي؛ كتابة فقط.
- لا أخلط مدة التعلم بتكرار المشاركة، والإنجاز حدث محدد لا وصف قدرة فقط.
- seit مع المضارع، وnehme…an einem Sprachkurs teil، وkönnen مع مصدر، وPerfekt في جملة الإنجاز.

**الربط:** DL-A2-01-T08.

### DL-A2-01-AUD-PHR-01

> Seit wann lernst du Deutsch? Ich lerne seit einem Jahr Deutsch. Vor drei Monaten habe ich einen Kurs begonnen. Ich kann kurze Texte lesen. Am Wochenende bin ich nach Sousse gefahren.

**نتيجة المراجعة:** خمس عبارات بصوت 02؛ أضيفت الكلمات نفسها إلى مصدرها مع مرجع دقيق، لا أمثلة قريبة فقط. الحالة ready والسياسة offer محفوظتان؛ لا استماع أو اعتماد جديد.

### DL-A2-01-AUD-DLG-01

> Seit wann lernst du Deutsch, Nour? / Seit einem Jahr. Ich nehme zweimal pro Woche an einem Sprachkurs teil. / Was kannst du schon gut? / Ich kann kurze Texte lesen und einfache Gespräche führen. Vor drei Monaten habe ich meinen ersten Brief auf Deutsch geschrieben. / Toll! Und was machst du in deiner Freizeit? / Ich fotografiere gern. Letztes Wochenende habe ich den alten Markt fotografiert.

**نتيجة المراجعة:** ستة أدوار متناوبة: Karim03 و Nour02؛ الكلمات والأصوات والمسارات محفوظة والعرض مفصول. الحالة ready والسياسة offer محفوظتان؛ لا استماع أو اعتماد جديد.

### DL-A2-01-AUD-READ-01

> Nour wohnt seit einem Jahr in Tunis. Sie arbeitet in einer Bäckerei und beginnt jeden Morgen um sieben Uhr. Vor drei Monaten hat sie einen Deutschkurs angefangen. Seitdem lernt sie regelmäßig. Nour kann gut Kuchen backen und spricht Arabisch und Französisch. Am Wochenende ist sie nach Mahdia gefahren. Dort hat sie eine Freundin besucht und viele Fotos gemacht.

**نتيجة المراجعة:** مقطع بصوت 02 مسمى Nour في البيانات؛ سرد عنها بالغائب لا حديث ذاتي. الحالة ready والسياسة offer محفوظتان؛ لا استماع أو اعتماد جديد.

### DL-A2-01-AUD-LST-01

> Ich lerne seit acht Monaten Deutsch. Vor acht Monaten habe ich mit einem Kurs angefangen. Jetzt kann ich einfache Gespräche führen. Letztes Wochenende bin ich nach Mahdia gefahren. Ich habe einen Freund besucht und viele Fotos gemacht.

**نتيجة المراجعة:** مقطع بصوت 03 غير مسمى في الموقف؛ ثمانية أشهر وصديق Freund، لا افتراض أنه Nour. الحالة ready والسياسة offer محفوظتان؛ لا استماع أو اعتماد جديد.

### DL-A2-01-AUD-MODEL-01

> Ich lerne seit sechs Monaten Deutsch. Nour wohnt seit einem Jahr in Tunis. Vor drei Monaten habe ich einen Kurs begonnen. Ich kann gut kochen. Wir können einfache Gespräche auf Deutsch führen. Am Wochenende bin ich nach Mahdia gefahren.

**نتيجة المراجعة:** ستة أمثلة بصوت 02؛ مواقف مستقلة لا جواب كامل على المهمة، وصُحح مرجع المصدر. الحالة ready والسياسة offer محفوظتان؛ لا استماع أو اعتماد جديد.

