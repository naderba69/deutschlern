# مراجعة A2.2 — الرحلات والأماكن والمقارنة

**CR20 · 2026-10-08 · مراجعة نصية مدعومة بالمصادر**

رُوجع **A2.2 — الرحلات والأماكن والمقارنة** في **141 وحدة و30 بندًا أو مطلبًا**،مع8 مراجع كاملة. ضُبطت المقارنة والتساوي والنفي والتفضيل،وفُرق بينdenn للسبب وdeshalb للنتيجة،وصُححت روابط التقييم والكتالوج. **P01/T08 أربع جمل مع الجهر من جدول خيالي**؛**P02/T07 أربع جمل كتابة فقط من الحوار**،بمعايير ونموذجين مطابقين. أوقات الرحلات بيانات تدريب لا جدول حالي،ولا يحول التقريب إلى فرق دقيق بالدقائق. الإصدار`a2-02-v2` والمخزن`v67`؛80% والخيارات الثلاثون وفهارس المفاتيح محفوظة. خمسة أصول/10 مقاطع دون تغيير أو استماع أو توليد أو اعتماد جديد. **الحملة19/53 درسًا والبوابة منفصلة؛تبقى34 درسًا،والتاليA2.3.** سجل مراجعة وفحوص،لا شهادة مستوى أو إعلان دمج.

## الملفات والرفع والخطوة التالية

- `content/A2/lesson-02-travel-comparisons.md/.assessment.json`،و`data/course.json`،و20 صفًا في`data/production-task-catalog.csv` وخمسة صفوف مرجعية فقط في`data/audio-asset-register.csv`؛لا تغييرplaylist أوMP3.
- `service-worker.js`v67 واختباراهservice_worker/accessibility_update،وتوسعةprogression وaccessibility_audit،والحارس`tools/test_a2_02_review.py`. لا تعديلapp.js أوCSS.
- `data/reviews/a2-02-review.json/.md` وفهرس المراجعات وREADME وPROGRESS وخطة التحسين2.26 وتقرير المتصفح وملفا التسليم.
- رُفع التنفيذ **80114c432efee43ff1b642ab0b2867bf7eef13ab** وتطابق معorigin؛إشارةVercel success بيانات فقط،لا اختبار واجهة أو حزمة عن بُعد أو نشر إنتاج. دفعة السجل والفحوص بعنوان`Record CR20 granular A2.2 review and cumulative checks`؛معرفها فيgit log بعد دفعها،ثم يوثق إيصالها.
- PR#1 مفتوح وغير مدمج ورأسه80114c4 عند التحقق. الفرع الوحيد`arena/01a1036f-deutschlern`،لا تبديل أو دمج. خط أساس الحفظf158d32؛استردادmetadata تم بعد تطابق680 ملفًا وصفر إضافات،لاreset أعمى أو حذف عمل.
- التالي **CR21/A2.3 — الطعام والتغذية والشراء والمطعم**: راجع كل نص وحوار وتمرين ومهمة بالمراجع وأصلح ما يظهر. اقرأ أحدث إيصال أولًا؛لا تكررCR20 أو تولد صوته من جديد.
- القرارات مستمرة:كل تعديل يُرفع فور فحص مجموعته؛المحتوى والتقييم والتطبيق قبل الصوت؛لا مراجع بشري شرطًا للمتابعة. لا إعادة توليد أو إخفاء أو تغيير صوت أوready/نهائي بلا موافقة. حد10 طلبات توليد/رد؛B1.9/B1.10 معلقان واختيارB1.11 محفوظ. احفظA2.7Q08→T05 واتساقA2.9 وتاريخB2.6 دون إعادة تسميتهB2.7.

## الفحوص وحدودها — CR20

- PASS:build/verify؛الحزمة **1,880,848 بايت** وcachev67.53 درسًا،428 عنوان تمرين،55 قسم حوار،754 مفردة،530 سؤال درس و10 للبوابة،109 مهام أداء،1080 معرّفًا في الكتالوج.217 أصلًا صوتيًا/474 مقطعًا،137ready و80pending. سلامة البنية لا تعني مراجعة مفصلة لكل الدروس.
- PASS: **20 حارس مراجعة** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–2. الحارس الجديد يطابق141 وحدة و30 بندًا والمصادر والبصمات والمفاتيح والكتالوج والمهمتين وأدوار الحوار وجدول الرحلة؛ليس مصححًا مستقلًا للألمانية.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan،وصياغةJavaScript وdiff. لا تغييرapp.js أوCSS.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout علىChromium143.0.7499.0. مكتباتal2023 المستعملة من حزمةChromium خارجGit؛المتصفح آلي وصامت،لا استماع أو اعتماد نطق.
- العام:1440×900 و390×844،التنقل وRTL والتفريغ وتشغيل MP3 بسرعة1 و0.8 وإيقافه عند التنقل،والعمل دون اتصال ونطاقات البايت. لا هاتف فعلي أو ضمان تخزين الصوت كله دائمًا.
- تحديثfixture عامل الخدمةv42→v67 نجح دون تحديث قسري،مع حفظ التقدم والإجابة وعزل المخازن. قد يلزم فتح التسجيل مع الاتصال لإعادة تخزينه بعد إزالة مخزن قديم.
- progression يتحقق من بقاء تاريخv1 دون اعتباره إتقانv2 أو فتحA2.3،ورفض مسودته القديمة،وقبولv2 مع80% ودليل الأداء. النموذجان يمران بالطول؛P01 يرفض غياب الجهر،P02 لا يعرض شرطه؛المربعات الناقصة والإجابة القصيرة لا تمر. هذا تحقق إقرارات لا تصحيح اللغة أو النطق.
- axe-core4.11.0: **93 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة**،مع **60 ظهورًا لفحوص غير حاسمة تشمل142 ظهورًا لعقد**. غير الحاسم ليس نجاحًا شاملًا أو مخالفة مثبتة؛لا شهادةWCAG ولا شرط مراجع بشري.
- النماذج:PASS من أول تشغيل للمجموعة عند1440 و390،مع الحفظ والتصدير والاستيراد والمسودات. تذبذبfilechooser التاريخي لم يتكرر؛سببه غير مشخص ولا ندعي إصلاحه.
- العرض الضيق: **126 حالة**،63 عند320×900 و63 عند568×320،تشمل كل الدروس والتفريغ والجداول ومنها جدولT08. تغييرviewport لا تكبير نظام أو جهاز هاتف فعلي.
- الحفظ مقابل`f158d32dd783d3aae19593d6928673e8552d84c7`: **52 درسًا آخر و1060 صف كتالوج آخر** لم تتغير. الخيارات الثلاثون وفهارس إجاباتA2.2 العشرة محفوظة.
- playlist مطابق بايتًا ببايت و**474MP3** طابقت بصماتGit السابقة. خمسة صفوفA2.2 فيaudio-register تغيرت في **source_line/source_heading فقط**؛212 صفًا آخر وبقية الحقول والروابط والحالات محفوظة. PHR/MODEL/READ02،Lea02/Ben03 بالتناوب،LST03؛لا مراجعة سمعية جديدة.

## المراجع المقروءة وحدود الاستدلال

- **ADJ — [Lingolia Adjektive](https://deutsch.lingolia.com/de/grammatik/adjektive)**: الجزآن 0 و 1 كاملان: المقارنة مع als والتساوي والنفي مع wie،والتفضيل و Umlaut والصيغ غير المنتظمة؛تمييز am عن النعت قبل الاسم. لا تعميم كل تبسيط على كل تركيب.
- **CONJ — [Lingolia Konjunktionen](https://deutsch.lingolia.com/de/grammatik/satzbau/konjunktionen)**: denn تربط جملتين رئيسيتين،و deshalb في صدر الجملة يليها الفعل والفاعل. التفريق عن weil دون فرض إنتاج جملة تابعة هنا.
- **MAIN — [Lingolia Hauptsätze](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)**: موقع الفعل المصرف ثانيًا في الخبرية الرئيسية؛الموقع كتلة نحوية لا الكلمة الثانية دائمًا،ويمكن تغيير ترتيب المكونات ضمن ضوابط.
- **PRICE — [Duden günstig](https://www.duden.de/rechtschreibung/guenstig)**: المعنى المناسب/المفيد ومعنى billig أو preiswert؛في نص السفر المقصود أقل كلفة لا أفضل من كل وجه.
- **CONNECTION — [Duden Verbindung](https://www.duden.de/rechtschreibung/Verbindung)**: الجزآن 0 و 1 كاملان: مؤنث والجمع Verbindungen؛Verkehrsverbindung إمكانية الانتقال بين مكانين،لا نوع مركبة مستقل.
- **PENSION — [Duden Pension](https://www.duden.de/rechtschreibung/Pension)**: مؤنث وجمع Pensionen؛فندق صغير بطابع خاص في سياق الإقامة،لا معنى المعاش هنا.
- **ALMOST — [Duden fast](https://www.duden.de/rechtschreibung/fast)**: قريب من مقدار أو حالة،beinahe/nahezu؛في مدة الحوار ليست ساعتين بالضبط ولا لفظالسرعة الإنجليزي fast.
- **APPROX — [Duden ungefähr (Adverb)](https://www.duden.de/rechtschreibung/ungefaehr_schaetzungsweise_rund)**: تقدير غير دقيق،أكثر أو أقل قليلًا؛لا حساب فرق 10 دقائق بالضبط بين سيارة تستغرقحوالي ساعتين وقطار 110 دقائق.

### روابط مستبعدة

- https://deutsch.lingolia.com/de/grammatik/adjektive/steigerung — صفحة غير موجودة؛استُعملت صفحةAdjektive الكاملة.
- https://www.duden.de/rechtschreibung/ungefaehr — محتوى404؛استُعمل رابط مدخل الظرف الفعلي.

المراجع الثمانية قُرئت كاملة،بما فيها جزآAdjektive وجزآVerbindung. نتائج البحث الاستكشافية ليست مراجع مستقلة،ولا تتضمن المراجعة جداول مواعيد أو أسعار سفر حالية.

## حدود المراجعة

- 141 وحدة و 30 بندًا أو مطلبًا متداخلة،لا 141 مهارة مستقلة؛الأمثلة الصوتية تعيد بعض الجمل،وجدول الرحلة 3 صفوف مدخلات لا 3 تمارين إضافية.
- المراجع الثمانية للقواعد والمعاني المحددة؛لا مدخل قاموسي منفصل لكل كلمة أو ترجمة،والاستدلال النصي راجعه المساعد.
- خمسة أصول/10 مقاطع دون تغيير كلمات أو أصوات أو مسارات أو حالات،ودون استماع أو توليد أو اعتماد جديد.
- الطول والإقرار والبنية لا يثبتون جودة اللغة أو النطق أو الاستماع المستقل؛لا شهادة CEFR/WCAG ولا شرط مراجع بشري للمتابعة.

## سجل كل وحدة

### scope-01

> الهدف والوقت

**نتيجة المراجعة:** المقارنة والاختيار مع السبب؛35–40 دقيقة تقدير مرن لا شرط نجاح،وأضيف التصريح بالكتابة والكلام والاستماع الاختياري.

### scope-02

> المقارنة والتساوي

**نتيجة المراجعة:** -er/als مقارنة؛so مع الصفة الأساسية و wie تساوٍ،أما nicht so lang في المثال فيعني أقصر لا تساوي الطولين.

**المراجع ذات الصلة:** ADJ.

### scope-03

> التفضيل

**نتيجة المراجعة:** am مع صيغة التفضيل لا مع besser؛يوجد-sten و-esten واستثناءات،والنعت قبل الاسم تركيب آخر.

**المراجع ذات الصلة:** ADJ.

### scope-04

> السبب والنتيجة

**نتيجة المراجعة:** denn خارج الموقع الأول داخل الخبرية التالية،و deshalb تشغله إذا صُدرت؛لا وجوب تصديرها في كل سياق.

**المراجع ذات الصلة:** CONJ, MAIN.

### scope-05

> المدة والتقريب

**نتيجة المراجعة:** 70 دقيقة ليست الساعة 1:10؛fast و ungefähr لا يساويان رقمًا دقيقًا. الأوقات نسب تدريبية لا مواعيد شركة نقل.

**المراجع ذات الصلة:** ALMOST, APPROX.

### scope-06

> نطاق التفضيل

**نتيجة المراجعة:** الأفضل مرتبط بمعيار المتكلم؛الأسرع بين مجموعة محددة،والأرخص ليس الأنسب للجميع.

**المراجع ذات الصلة:** ADJ, PRICE.

### scope-07

> مواءمة التقييم

**نتيجة المراجعة:** Q05 انتقل إلى T07 الذي يدرب denn؛Q09/Q10 فيالكتالوج إلى T05/T03. كل الخيارات والمفاتيح و 80% محفوظة.

### scope-08

> المهمتان

**نتيجة المراجعة:** P01/T08 أربع جمل مع الجهر من جدول،و P02/T07 أربع كتابة فقط من الحوار؛لا تعارض أو/و بين التساوي والتفضيل.

### scope-09

> الصوت والعرض

**نتيجة المراجعة:** خمسة أصول/10 مقاطع محفوظة؛أضيفت كلمات PHR/MODEL نفسها للمصدر،وفُصلت أدوار الحوار وبنود الاستماع مرئيًا.

### scope-10

> حدود القياس

**نتيجة المراجعة:** الطول والإقرار لا يصححان اللغة أو النطق أو يثبتان الاستماع المستقل؛لا شريك أو حجز حقيقي. v1 تاريخ محفوظ لا إتقان v2.

### vocab-01

> | die Unterkunft | die Unterkünfte | مكان الإقامة |

**نتيجة المراجعة:** Unterkunft مؤنث وجمع Unterkünfte؛مكان إقامة،لا يلزم فندقًا.

### vocab-02

> | die Sehenswürdigkeit | die Sehenswürdigkeiten | معلم سياحي |

**نتيجة المراجعة:** Sehenswürdigkeit مؤنث والجمع Sehenswürdigkeiten؛معلم يستحق الزيارة.

### vocab-03

> | die Altstadt | die Altstädte | البلدة القديمة |

**نتيجة المراجعة:** Altstadt مؤنث والجمع Altstädte؛الجزء القديم من مدينة،لا وصف كل المدينة بالقدم.

### vocab-04

> | die Verbindung | die Verbindungen | خط/وصلة مواصلات |

**نتيجة المراجعة:** Verbindung مؤنث والجمع Verbindungen؛وصلة مواصلات في هذا السياق.

**المراجع ذات الصلة:** CONNECTION.

### vocab-05

> | die Fahrtdauer | die Fahrtdauern | مدة الرحلة |

**نتيجة المراجعة:** Fahrtdauer مؤنث والجمع Fahrtdauern؛مدة لا موعد انطلاق.

### vocab-06

> | die Zugfahrt | die Zugfahrten | رحلة القطار |

**نتيجة المراجعة:** Zugfahrt مؤنث والجمع Zugfahrten؛رحلة بالقطار لا القطار نفسه.

### vocab-07

> | die Pension | die Pensionen | النُزل/دار الضيافة |

**نتيجة المراجعة:** Pension مؤنث والجمع Pensionen؛نُزل لا معاش تقاعد في الدرس.

**المراجع ذات الصلة:** PENSION.

### vocab-08

> | das Einkaufszentrum | die Einkaufszentren | مركز التسوق |

**نتيجة المراجعة:** Einkaufszentrum محايد وجمع Einkaufszentren؛مركز تسوق.

### vocab-09

> | der Fahrplan | die Fahrpläne | جدول المواعيد |

**نتيجة المراجعة:** Fahrplan مذكر وجمع Fahrpläne؛جدول مواعيد،لكن أرقام الدرس ليست جدولًا حاليًا.

### vocab-10

> | vergleichen | vergleicht | يقارن |

**نتيجة المراجعة:** vergleichen مصدر و vergleicht تصريف الغائب المفرد؛يقارن.

### vocab-11

> | dauern | — | يستغرق |

**نتيجة المراجعة:** dauern مصدر؛استغراق مدة كما في die Fahrt dauert.

### vocab-12

> | wählen | — | يختار |

**نتيجة المراجعة:** wählen مصدر؛يختار،وفي السياق بين بدائل رحلة.

### vocab-13

> | der Strand | die Strände | الشاطئ |

**نتيجة المراجعة:** Strand مذكر والجمع Strände؛شاطئ،ولا يثبت وروده في المفردات وجود شاطئ في نص Leipzig.

### vocab-14

> | bequem | — | مريح |

**نتيجة المراجعة:** bequem صفة الراحة؛لا تساوي الأرخص أو الأسرع.

### vocab-15

> | günstig | — | مناسب السعر |

**نتيجة المراجعة:** günstig مناسب السعر في السياق،وقد يكون ملائمًا في سياق آخر.

**المراجع ذات الصلة:** PRICE.

### vocab-16

> | ruhig / lebendig | — | هادئ / حيوي |

**نتيجة المراجعة:** ruhig/lebendig هادئ/حيوي؛الحيوية لا تقتضي الإزعاج.

### vocab-17

> | direkt | — | مباشر |

**نتيجة المراجعة:** direkt مباشر في السياق؛لا نستنتج تفاصيل توقف أو تبديل لم يذكرها النص.

### vocab-18

> | die Reise planen | — | يخطط للرحلة |

**نتيجة المراجعة:** die Reise planen تركيب فعلي؛التخطيط لا الحجز الفعلي.

### comparison-01

> Der Zug ist schneller als der Bus.

**نتيجة المراجعة:** schneller als يفضل سرعة القطار في المثال،لا في كل رحلة.

**المراجع ذات الصلة:** ADJ.

### comparison-02

> Das Hotel ist günstiger als die Pension.

**نتيجة المراجعة:** günstiger als يقارن السعر،لا الجودة العامة للإقامة.

**المراجع ذات الصلة:** ADJ.

### comparison-03

> Die Altstadt ist interessanter als das Einkaufszentrum.

**نتيجة المراجعة:** interessanter als يقارن مقدار الاهتمام؛حكم مثالي لا حقيقة للجميع.

**المراجع ذات الصلة:** ADJ.

### comparison-04

> Der Bus ist so bequem wie der Zug.

**نتيجة المراجعة:** so bequem wie مساواة في الراحة،لا في مدة الرحلة أو السعر.

**المراجع ذات الصلة:** ADJ.

### comparison-05

> Der Weg ist nicht so lang wie die andere Route.

**نتيجة المراجعة:** nicht so lang wie نفي بلوغ الطول نفسه؛الطريق أقصر في المثال.

**المراجع ذات الصلة:** ADJ.

### form-01

> | schnell | schneller | am schnellsten | أسرع |

**نتيجة المراجعة:** schnell/schneller/am schnellsten: نهاية-er ثم-sten.

**المراجع ذات الصلة:** ADJ.

### form-02

> | günstig | günstiger | am günstigsten | أرخص/أفضل سعرًا |

**نتيجة المراجعة:** günstig/günstiger/am günstigsten: نحافظ على الصيغة دون am günstiger.

**المراجع ذات الصلة:** ADJ.

### form-03

> | alt | älter | am ältesten | أكبر سنًا / أقدم |

**نتيجة المراجعة:** alt/älter/am ältesten: Umlaut ونهاية-esten.

**المراجع ذات الصلة:** ADJ.

### form-04

> | groß | größer | am größten | أكبر |

**نتيجة المراجعة:** groß/größer/am größten: Umlaut وß؛لا großesten في هذا النموذج.

**المراجع ذات الصلة:** ADJ.

### form-05

> | gut | besser | am besten | أفضل |

**نتيجة المراجعة:** gut/besser/am besten: صيغ غير منتظمة،لا guter أو am besser.

**المراجع ذات الصلة:** ADJ.

### form-06

> | viel | mehr | am meisten | أكثر |

**نتيجة المراجعة:** viel/mehr/am meisten: مقدار أكبر وأكبر مقدار؛لا vieler للمقارنة المطلوبة.

**المراجع ذات الصلة:** ADJ.

### form-07

> | wenig | weniger | am wenigsten | أقل |

**نتيجة المراجعة:** wenig/weniger/am wenigsten: مقدار أقل وأقل مقدار في الاستعمال المدروس.

**المراجع ذات الصلة:** ADJ.

### form-08

> | nah | näher | am nächsten | أقرب |

**نتيجة المراجعة:** nah/näher/am nächsten: لا am näher؛nächsten هنا الأقرب لا تفسير زمني وحيد.

**المراجع ذات الصلة:** ADJ.

### superlative-01

> Der Zug ist am schnellsten.

**نتيجة المراجعة:** الأسرع ضمن الخيارات المعتبرة،لا أسرع وسيلة في العالم.

**المراجع ذات الصلة:** ADJ.

### superlative-02

> Dieses Hotel ist am günstigsten.

**نتيجة المراجعة:** أقل كلفة بين الفنادق المعنية؛لا سعر مالي محدد في المثال.

**المراجع ذات الصلة:** ADJ.

### superlative-03

> Die Verbindung am Morgen ist am besten.

**نتيجة المراجعة:** أفضل وصلة صباحية بحسب السياق؛ليس التصريح بأن كل رحلة صباحية أفضل.

**المراجع ذات الصلة:** ADJ.

### connector-01

> Ich nehme den Zug, denn er ist schneller.

**نتيجة المراجعة:** الاختيار ثم السبب؛فاصلة قبل denn و er ist بعدها في النموذج.

**المراجع ذات الصلة:** CONJ, MAIN.

### connector-02

> Elif möchte nicht lange fahren. Deshalb fährt sie nach Bremen.

**نتيجة المراجعة:** الرغبة في رحلة قصيرة ثم النتيجة؛Deshalb ثم fährt ثم sie.

**المراجع ذات الصلة:** CONJ, MAIN.

### audio-phrase-01

> Der Zug ist schneller als der Bus.

**نتيجة المراجعة:** مقارنة سرعة من المقطع الموجود؛الكلمات محفوظة.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-phrase-02

> Das Hotel ist günstiger als die Pension.

**نتيجة المراجعة:** مقارنة سعر إقامة،لا قاعدة أن الفندق أرخص دائمًا.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-phrase-03

> Der Bus ist so bequem wie der Zug.

**نتيجة المراجعة:** تساوٍ في الراحة،لا تعارض مع اختلاف السرعة أو السعر.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-phrase-04

> Gut, besser, am besten.

**نتيجة المراجعة:** ثلاث صيغ gut مسموعة؛ليست جملة تفضيل جديدة بـ am gut.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-phrase-05

> Ich nehme den Zug, denn er ist schneller.

**نتيجة المراجعة:** اختيار وسبب مع denn؛يرتبط بتدريب T07.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-phrase-06

> Deshalb fährt Elif nach Bremen.

**نتيجة المراجعة:** الفاعل Elif بعد fährt؛نص التسجيل يختلف عن نسخة sie في الشرح لكنه صحيح ومحفوظ.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-model-01

> Der Zug ist schneller als der Bus.

**نتيجة المراجعة:** سرعة القطار أعلى في المثال.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-model-02

> Das Hotel ist so ruhig wie die Pension.

**نتيجة المراجعة:** so ruhig wie للمساواة في الهدوء،لا Bequemlichkeit حرفيًا.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-model-03

> Die Altstadt ist interessanter als das Einkaufszentrum.

**نتيجة المراجعة:** interessanter مقارنة الاهتمام بين معلمين.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-model-04

> Der Zug ist am schnellsten.

**نتيجة المراجعة:** am schnellsten تفضيل سرعة دون اسم بعد الصفة.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-model-05

> Die direkte Verbindung ist am besten.

**نتيجة المراجعة:** أفضل وصلة مباشرة في سياق النموذج؛لا حكم شامل.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-model-06

> Ich nehme den Zug, denn er ist schneller.

**نتيجة المراجعة:** denn مع السبب و er ist في الخبرية.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-model-07

> Elif möchte nicht lange fahren.

**نتيجة المراجعة:** تفضيل Elif لقصر المدة،لا تعليل بأقل سعر.

**المراجع ذات الصلة:** ADJ, CONJ.

### audio-model-08

> Deshalb fährt sie nach Bremen.

**نتيجة المراجعة:** Deshalb fährt sie نتيجة التفضيل السابق.

**المراجع ذات الصلة:** ADJ, CONJ.

### helper-01

> - **schnell / langsam / kurz / lang** — سريع / بطيء / قصير / طويل. **kürzer / länger** للمقارنة؛ مدة الرحلة الأقصر تعني وقتًا أقل في سياقنا،لا حكمًا ثابتًا على كل قطار وحافلة.

**نتيجة المراجعة:** تمييز السرعة من الطول والمدة،وتقديم kürzer/länger لفهم المفتاح.

### helper-02

> - **so bequem wie / nicht so lang wie** — مساوٍ في الراحة / ليس بالطول نفسه بل أقصر في المثال. نستعمل الصفة الأساسية،لا bequemer بين so و wie.

**نتيجة المراجعة:** التساوي بصيغة أساسية،والنفي ليس مساواة موجبة.

### helper-03

> - **am besten / am schnellsten** — الأفضل وفق معيار المتكلم / الأسرع داخل الخيارات المذكورة. ليس كل أسرع أفضل للجميع؛ قد يفضل شخص آخر السعر أو الراحة.

**نتيجة المراجعة:** الأفضلية بحسب الأولوية،ولا مساواة بين fastest و best لكل شخص.

### helper-04

> - **denn / deshalb** — السبب مقابل النتيجة؛ **er ist** بعد denn في نموذجنا،و**deshalb fährt sie** عند تصدير deshalb. لا نحول weil إلى بديل بنفس ترتيب الكلمات؛تراكيبها ليست مهمة هذا الدرس.

**نتيجة المراجعة:** فرق السبب والنتيجة وترتيب كل منهما؛لا نقل weil إلى نفس موضع denn وترتيبه.

### helper-05

> - **eine Stunde und zehn Minuten / eine Stunde und fünfzig Minuten / drei Stunden** —70 دقيقة /110 دقيقة /180 دقيقة؛هذه مدد،لا ساعات انطلاق مثل 1:10. وقت Bremen يختلف عن وقت Dresden في النص الآخر.

**نتيجة المراجعة:** مدد 70/110/180 دقيقة؛لا ساعات انطلاق أو دمج وجهات النصوص.

### helper-06

> - **fast zwei Stunden / ungefähr zwei Stunden** — ما يقارب ساعتين دون بلوغهما في سياق الحوار / حوالي ساعتين وقد تزيد أو تنقص قليلًا. لا نحول التقريب إلى 120 دقيقة بالضبط أو نستنتج فرقًا دقيقًا قدره 10 دقائق للسيارة والقطار.

**نتيجة المراجعة:** تقريب لا حساب دقيق؛لا فرق 10 دقائق مؤكد عندما كانت مدة السيارة تقريبية.

### helper-07

> - **günstig / günstiger** — مناسب السعر / أقل كلفة هنا؛ قد تعني الكلمة مناسبًا أو ملائمًا في سياق آخر. لا أسعار عددية في النصوص،ولا قاعدة أن الحافلة أرخص دائمًا.

**نتيجة المراجعة:** المعنى السعري لـ günstig في السياق،وغياب سعر عددي أو قاعدة لكل حافلة.

### helper-08

> - **die Pension** — دار ضيافة أو نُزل في هذا الدرس،لا معاش تقاعد. **ruhig / lebendig** هادئ / حيوي؛حيوي ليس مزعجًا بالضرورة،ولا نفترض أن كل بلدة قديمة هادئة.

**نتيجة المراجعة:** المعنى السكني لـ Pension،والحيوية ليست ضوضاء لازمة.

### helper-09

> - **die Verbindung / direkt** — وصلة أو خيار مواصلات / مباشر؛ليست Verbindung وسيلة نقل جديدة. لا نستنتج تفاصيل توقف أو تبديل غير مذكورة،و«الأفضل» يتوقف على الموقف.

**نتيجة المراجعة:** Verbindung خيار مواصلات،و direkt لا يقدم كل تفاصيل الرحلة.

### helper-10

> - **von Berlin nach Dresden / zwischen Bremen und Leipzig** — من برلين إلى دريسدن / بين بريمن ولايبزيغ. Hamburg مرجع المقارنة في القراءة؛لا يستنتج منه عنوان Elif أو مكان سكنها،ولا نحول المدة إلى جدول رحلة فعلية.

**نتيجة المراجعة:** اتجاه von…nach ومقارنة zwischen؛Hamburg مرجع في النص لا إثبات محل سكن Elif.

### helper-11

> - **Dort / unterwegs / am Nachmittag noch** — هناك / أثناء الطريق / أيضًا بعد الظهر في سياق الزيارة. Dort في القراءة يعود إلى Leipzig،واسم Elif في بيانات الراوي لا يجعل السرد بضمير الغائب حديثًا ذاتيًا. لا نسمي أصحاب الاستماع Lea و Ben لأن التسجيل لا يسميهم.

**نتيجة المراجعة:** Dort إلى Leipzig؛سرد Elif بصوت 02 عن الغائب،والاستماع لا يسمي أصحابه Lea/Ben.

### helper-12

> - **حدود الدليل:** المقارنة في P01 من جدول T08 فقط،والاختيار الكتابي P02 من حوار T07 المرجعي. الجهر مطلوب للأولى لا الثانية؛لا شريك أو تسجيل أو حجز حقيقي. التفريغ متاح؛قراءته لا تثبت فهمًا مسموعًا مستقلًا،والطول والإقرار لا يصححان اللغة أو النطق.

**نتيجة المراجعة:** جدول P01 وحوار P02 سياقان واضحان،مع جهر الأولى وكتابة الثانية وحدود القياس والخصوصية.

### dialogue-01

> Lea: Wie fahren wir am Wochenende nach Bremen?

**نتيجة المراجعة:** Lea تسأل عن وسيلة الرحلة إلى Bremen،لا موعد وصول محدد.

### dialogue-02

> Ben: Der Zug ist schneller als der Bus.

**نتيجة المراجعة:** Ben يقارن السرعة؛المقارنة كاملة بـ als.

### dialogue-03

> Lea: Ja, aber der Bus ist günstiger.

**نتيجة المراجعة:** الحافلة أقل كلفة في هذا الموقف؛حذف طرف المقارنة مفهوم من الحوار.

### dialogue-04

> Ben: Stimmt. Die Zugfahrt dauert eine Stunde und zehn Minuten. Mit dem Bus fahren wir fast zwei Stunden.

**نتيجة المراجعة:** القطار 70 دقيقة والحافلة تقارب ساعتين؛لا تحديد دقيق لدقائق الحافلة.

### dialogue-05

> Lea: Ich möchte nicht lange unterwegs sein. Der Zug ist für mich am besten.

**نتيجة المراجعة:** Lea تفضل قصر المدة،فتقول الأفضل بالنسبة لها لا الأفضل للجميع.

### dialogue-06

> Ben: Gut. Dann nehmen wir den Zug.

**نتيجة المراجعة:** اتفاق على القطار؛Dann يتصدر فتليه nehmen ثم wir.

### reading-01

> Elif plant einen Wochenendausflug.

**نتيجة المراجعة:** Elif تخطط رحلة نهاية أسبوع؛لا حجز وقع فعلًا.

### reading-02

> Sie kann zwischen Bremen und Leipzig wählen.

**نتيجة المراجعة:** الخياران Bremen و Leipzig،لا كل المدن المذكورة في الدرس.

### reading-03

> Bremen liegt näher an Hamburg als Leipzig.

**نتيجة المراجعة:** Bremen أقرب إلى Hamburg في مقارنة النص؛لا يستنتج عنوان Elif أو المسافة بالكيلومترات.

### reading-04

> Mit dem Zug dauert die Fahrt nach Bremen eine Stunde und zehn Minuten.

**نتيجة المراجعة:** مدة Bremen70 دقيقة وفق المثال،لا جدول حديث مثبت.

### reading-05

> Der Bus ist günstiger, aber langsamer.

**نتيجة المراجعة:** الحافلة أقل سعرًا لكنها أبطأ من القطار في هذا السياق.

### reading-06

> Die Zugfahrt nach Leipzig dauert drei Stunden.

**نتيجة المراجعة:** القطار إلى Leipzig180 دقيقة؛لا تنقلها إلى Bremen.

### reading-07

> Dort gibt es viele Museen und eine große Altstadt.

**نتيجة المراجعة:** Dort يعود إلى Leipzig؛متاحف كثيرة وبلدة قديمة كبيرة،لا شاطئ مذكور.

### reading-08

> Elif möchte nicht lange fahren.

**نتيجة المراجعة:** لا تريد مدة سفر طويلة؛ليست أولوية أقل سعر.

### reading-09

> Für sie ist eine kurze Reise am besten, deshalb fährt sie nach Bremen.

**نتيجة المراجعة:** اختارت Bremen لرحلة أقصر؛deshalb في جملة رئيسية بعد الفاصلة لا أداة تعيد الفعل للنهاية.

### reading-question-01

> Welche zwei Städte vergleicht Elif?

**نتيجة المراجعة:** Bremen und Leipzig هما الخياران؛Hamburg مرجع لا وجهة ثالثة.

### reading-question-02

> Wie lange dauert die Zugfahrt nach Bremen?

**نتيجة المراجعة:** Eine Stunde und zehn Minuten؛مدة 70 دقيقة.

### reading-question-03

> Welches Verkehrsmittel ist günstiger?

**نتيجة المراجعة:** Der Bus؛أقل كلفة في الموقف المذكور.

### reading-question-04

> Was gibt es in Leipzig?

**نتيجة المراجعة:** Viele Museen und eine große Altstadt؛لا نختلق معالم غير مذكورة.

### reading-question-05

> Warum fährt Elif nach Bremen?

**نتيجة المراجعة:** تريد رحلة قصيرة ومدة Bremen أقصر؛الجواب يربط معيار الاختيار بالدليل.

### listening-01

> Wir möchten von Berlin nach Dresden fahren.

**نتيجة المراجعة:** من Berlin إلى Dresden؛صيغة wir دون أسماء أو عدد أفراد محدد.

### listening-02

> Mit dem Auto dauert die Fahrt ungefähr zwei Stunden.

**نتيجة المراجعة:** السيارة حوالي ساعتين؛المقدار تقديري لا 120 دقيقة بالضبط.

### listening-03

> Der Zug ist schneller: eine Stunde und fünfzig Minuten.

**نتيجة المراجعة:** القطار 110 دقائق وأسرع وفق تصريح النص؛لا حساب فرق 10 دقائق بالضبط من تقدير السيارة.

### listening-04

> Der Bus ist am günstigsten, aber die Fahrt dauert drei Stunden.

**نتيجة المراجعة:** الحافلة أقل كلفة بين الخيارات وتستغرق 180 دقيقة؛لا أسعار عددية.

### listening-05

> Wir nehmen den Zug, denn wir möchten am Nachmittag noch die Altstadt besuchen.

**نتيجة المراجعة:** يختارون القطار لأنهم يريدون زيارة البلدة القديمة بعد الظهر أيضًا؛لا تقرير بأن الزيارة حصلت بالفعل.

### listening-question-01

> Von welcher Stadt nach welcher Stadt reisen die Personen?

**نتيجة المراجعة:** Von Berlin nach Dresden؛المصدر والوجهة بترتيبهما.

### listening-question-02

> Wie lange dauert die Fahrt mit dem Zug?

**نتيجة المراجعة:** Eine Stunde und fünfzig Minuten؛لا zehn في رحلة Bremen.

### listening-question-03

> Welches Verkehrsmittel ist am günstigsten?

**نتيجة المراجعة:** Der Bus؛أقل كلفة لا أسرع.

### listening-question-04

> Warum nehmen sie den Zug?

**نتيجة المراجعة:** يريدون زيارة البلدة القديمة بعد الظهر أيضًا؛أُكمل المفتاح بوقت الزيارة المصرح به.

### table-row-01

> | der Zug | 70 | 3 |

**نتيجة المراجعة:** القطار 70 دقيقة وراحة 3/5؛أقل مدة بين الثلاثة.

### table-row-02

> | der Bus | 110 | 3 |

**نتيجة المراجعة:** الحافلة 110 دقيقة وراحة 3/5؛مساوية القطار في الراحة رغم بطئها.

### table-row-03

> | das Auto | 90 | 4 |

**نتيجة المراجعة:** السيارة 90 دقيقة وراحة 4/5؛أعلى راحة لكنها ليست الأسرع،والأولوية للمدة.

### speaking-model-01

> Der Zug ist schneller als der Bus.

**نتيجة المراجعة:** 70 أقل من 110؛مقارنة السرعة توافق الجدول.

**المراجع ذات الصلة:** ADJ, CONJ.

### speaking-model-02

> Der Bus ist so bequem wie der Zug.

**نتيجة المراجعة:** راحة 3/5 لكل منهما،فتصح so bequem wie.

**المراجع ذات الصلة:** ADJ, CONJ.

### speaking-model-03

> Der Zug ist am schnellsten.

**نتيجة المراجعة:** 70 أقل من 90 و 110؛أسرع الثلاثة هو القطار.

**المراجع ذات الصلة:** ADJ, CONJ.

### speaking-model-04

> Ich nehme den Zug, denn er ist am schnellsten.

**نتيجة المراجعة:** اختيار معلل بأولوية أقصر مدة؛denn er ist ثم التفضيل. الجهر بالأربع مطلوب.

**المراجع ذات الصلة:** ADJ, CONJ.

### writing-model-01

> Der Zug ist schneller als der Bus.

**نتيجة المراجعة:** سرعة القطار أعلى من الحافلة بحسب الحوار.

**المراجع ذات الصلة:** ADJ, CONJ.

### writing-model-02

> Ich möchte nicht lange fahren.

**نتيجة المراجعة:** قصر المدة أولوية المتعلم الخيالي،لا السعر.

**المراجع ذات الصلة:** ADJ, CONJ.

### writing-model-03

> Ich nehme den Zug, denn er ist schneller.

**نتيجة المراجعة:** اختيار القطار وسبب السرعة بـ denn؛يوافق الأولوية.

**المراجع ذات الصلة:** ADJ, CONJ.

### writing-model-04

> Deshalb fahre ich mit dem Zug nach Bremen.

**نتيجة المراجعة:** إعادة عرض الاختيار نتيجةً بـ Deshalb fahre ich؛ليس اختيارًا مختلفًا أو وعدًا بساعة وصول.

**المراجع ذات الصلة:** ADJ, CONJ.

### card-01

> - **schnell – schneller – am schnellsten** → سريع – أسرع – الأسرع.

**نتيجة المراجعة:** schnell/schneller/am schnellsten متسقة مع الشرح.

**المراجع ذات الصلة:** ADJ.

### card-02

> - **gut – besser – am besten** → جيد – أفضل – الأفضل.

**نتيجة المراجعة:** gut/besser/am besten غير منتظمة؛لا am besser.

**المراجع ذات الصلة:** ADJ.

### card-03

> - **Der Bus ist günstiger als der Zug.** → الحافلة أرخص من القطار.

**نتيجة المراجعة:** حافلة أقل كلفة ضمن السياق،لا قاعدة مطلقة.

**المراجع ذات الصلة:** ADJ.

### card-04

> - **so bequem wie** → مريح مثل.

**نتيجة المراجعة:** so bequem wie مساواة راحة بصيغة أساسية.

**المراجع ذات الصلة:** ADJ.

### DL-A2-02-T01

> 1. schnell → ______
> 2. günstig → ______
> 3. groß → ______
> 4. gut → ______
> 5. viel → ______

**نتيجة المراجعة:** خمس صيغ مقارنة بمفاتيح واضحة،منها غير المنتظم.

1. schneller: النهاية-er.
2. günstiger؛نحافظ علىü.
3. größer؛Umlaut.
4. besser؛صيغة غير منتظمة.
5. mehr؛صيغة كمية.

### DL-A2-02-T02

> 1. Der Zug ist schneller ______ der Bus.
> 2. Das Hotel ist so ruhig ______ die Pension.
> 3. Die Reise ist günstiger ______ letztes Jahr.

**نتيجة المراجعة:** ثلاث مطابقات als/wie،لا وضع صيغة مقارنة بعد so.

1. als بعد schneller.
2. wie بعد so ruhig.
3. als بعد günstiger؛المقارنة مع رحلة العام الماضي المفهومة.

### DL-A2-02-T03

> 1. الأسرع: **am schnellsten / am schneller**
> 2. الأفضل: **am besten / am gutsten**
> 3. الأرخص: **am günstigsten / am günstiger**

**نتيجة المراجعة:** ثلاث صيغ تفضيل لا خلط am بالمقارنة.

1. am schnellsten لا am schneller.
2. am besten لا am gutsten.
3. am günstigsten لا am günstiger.

### DL-A2-02-T04

> رتّب كتل كل جملة،وابدأ بالكتلة المحددة بين القوسين. لا تحسب النقطة كلمة مستقلة،وأضفها في النهاية:
>
> 1. Der Zug / schneller / als / ist / der Bus (ابدأ بـ Der Zug)
> 2. so / Das Hotel / die Pension / ruhig / ist / wie (ابدأ بـ Das Hotel)
> 3. am besten / Die direkte Verbindung / ist (ابدأ بـ Die direkte Verbindung)

**نتيجة المراجعة:** ثلاث جمل ذات بداية محددة وكتل دون نقطة ملتصقة بكلمة خاطئة.

1. Der Zug ist schneller als der Bus؛البدء المحدد Der Zug.
2. Das Hotel ist so ruhig wie die Pension؛البدء المحدد Das Hotel.
3. Die direkte Verbindung ist am besten؛عبارة الفعل تأتي بعد الفاعل الكامل.

### DL-A2-02-T05

> حدّد صحيحًا أو خطأ:
>
> 1. Die Zugfahrt nach Bremen dauert drei Stunden.
> 2. Der Bus nach Bremen ist günstiger als der Zug.
> 3. In Leipzig gibt es Museen und eine Altstadt.
> 4. Elif möchte nicht lange fahren. Deshalb fährt sie nach Bremen.

**نتيجة المراجعة:** أربعة أحكام من القراءة لا من رحلة الاستماع.

1. خطأ:70 دقيقة إلى Bremen،لا 180.
2. صحيح:الحافلة أقل كلفة في السياق.
3. صحيح:متاحف وبلدة قديمة في Leipzig.
4. صحيح:الاختيار مرتبط بقصر المدة و deshalb نتيجة.

### DL-A2-02-T06

> أكمل من البنك،واستعمل كل كلمة مرة: **zwei — fünfzig — günstigsten — Altstadt**.
>
> 1. Mit dem Auto dauert die Fahrt ungefähr ______ Stunden.
> 2. Der Zug braucht eine Stunde und ______ Minuten.
> 3. Der Bus ist am ______.
> 4. Sie möchten in Dresden die ______ besuchen.

**نتيجة المراجعة:** بنك محدد وأربعة بنود مرئية؛التقريب باقٍ في الأول.

1. zwei مع ungefähr؛يبقى التقريب.
2. fünfzig للقطار إلى Dresden.
3. günstigsten بعد am؛لا günstiger.
4. Altstadt موضع الزيارة المطلوبة.

### DL-A2-02-T07

> اكتب أربع جمل بضمير ich لاختيار وسيلة من حوار Lea و Ben إلى Bremen؛أولويتك قصر المدة لا أقل سعر. الأولى تقارن سرعة القطار والحافلة بـ schneller als؛الثانية تقول إنك لا تريد السفر طويلًا؛الثالثة تختار القطار وتعطي السبب بـ Ich nehme…, denn er ist…؛الرابعة تعيد صياغة الاختيار نتيجةً تبدأ بـ Deshalb ثم الفعل ثم ich،وتذكر Bremen. هذه كتابة فقط،دون جهر أو تسجيل. لا تخترع سعرًا عدديًا أو ساعة وصول غير مذكورين؛الثالثة والرابعة تدريب طريقتين مترابطتين لشرح الاختيار نفسه.

**نتيجة المراجعة:** أربع جمل مكتوبة بدعم الحوار؛تدريب denn مباشر لمواءمة Q05 و P02.

1. جملة 1:مقارنة القطار والحافلة بـ schneller als.
2. جملة 2:تفضيل ألا تكون الرحلة طويلة.
3. جملة 3:اختيار القطار وسبب بـ denn er ist.
4. جملة 4:الاختيار نفسه إلى Bremen بـ Deshalb ثم الفعل والفاعل؛الأربع كتابة فقط.

### DL-A2-02-T08

> الجدول موقف تدريبي مستقل،لا أوقات إضافية نستنتجها من التسجيل. درجة الراحة افتراضية من 5؛الأكبر أريح. الأولوية هنا أقصر مدة للرحلة نفسها.
>
> | الوسيلة | مدة الرحلة بالدقائق | درجة الراحة من 5 |
> |---|---|---|
> | der Zug | 70 | 3 |
> | der Bus | 110 | 3 |
> | das Auto | 90 | 4 |
>
> استعمل جدول T08 الخيالي وأولوية قصر المدة لتكتب أربع جمل ثم اقرأ الأربع بصوت مرتفع،ويمكنك الأداء منفردًا: الأولى تقارن سرعة القطار بالحافلة بـ schneller als؛الثانية تساوي راحة الحافلة والقطار بـ so bequem wie؛الثالثة تحدد أسرع الوسائل الثلاث بـ am schnellsten؛الرابعة تختار القطار وتشرح السبب بـ denn. الصيغ الثلاث كلها مطلوبة،لا الاختيار بين التساوي والتفضيل. لا شريك أو تسجيل أو بيانات سفر شخصية مطلوبة.

**نتيجة المراجعة:** جدول وثلاث صيغ مقارنة واختيار معلل في أربع جمل مع الجهر؛التعليمات والمعايير لا تتعارض.

1. جملة 1:سرعة القطار مقارنة بالحافلة من الجدول.
2. جملة 2:مساواة الراحة بـ so bequem wie.
3. جملة 3:الأسرع بين الثلاثة بـ am schnellsten.
4. جملة 4:اختيار القطار وسبب بـ denn؛الجهر بالأربع والصيغ كلها مطلوبة.

### DL-A2-02-Q01

> ما صيغة المقارنة غير المنتظمة للصفة **gut**؟

**نتيجة المراجعة:** besser مقارنة gut؛guter ليس الصيغة المطلوبة و am gutesten ليس التفضيل الصحيح.

**الخيارات:** besser / guter / am gutesten

**الصحيح:** besser — الصيغ هي gut – besser – am besten.

**الربط:** DL-A2-02-T01.

### DL-A2-02-Q02

> أكمل جملة التساوي: Der Bus ist ___ bequem ___ der Zug.

**نتيجة المراجعة:** so…wie للمساواة؛البديلان لا يكونان النمط المطلوب.

**الخيارات:** mehr … als / so … wie / am … wie

**الصحيح:** so … wie — للتساوي نستخدم so … wie.

**الربط:** DL-A2-02-T02.

### DL-A2-02-Q03

> أي عبارة تعني «الأفضل»؟

**نتيجة المراجعة:** am besten الأفضل؛besser أفضل من لا صيغة التفضيل،و am gut ناقصة.

**الخيارات:** besser / am gut / am besten

**الصحيح:** am besten — صيغة التفضيل من gut هي am besten.

**الربط:** DL-A2-02-T03.

### DL-A2-02-Q04

> أي جملة صحيحة؟

**نتيجة المراجعة:** schneller als صحيح؛schnell لا مقارنة و am schneller خلط صيغ.

**الخيارات:** Der Zug ist schnell als der Bus. / Der Zug ist schneller als der Bus. / Der Zug ist am schneller als der Bus.

**الصحيح:** Der Zug ist schneller als der Bus. — مع المقارنة بين شيئين نستخدم الصفة المقارنة مع als.

**الربط:** DL-A2-02-T04.

### DL-A2-02-Q05

> أي ترتيب صحيح بعد **denn**؟

**نتيجة المراجعة:** denn er ist؛انتقل الربط من T04 إلى T07 الذي ينتج هذا النمط. المشتتان لا يتبعان الخبرية المطلوبة.

**الخيارات:** Ich nehme den Zug, denn er ist schneller. / Ich nehme den Zug, denn ist er schneller. / Ich nehme den Zug, denn schneller er ist.

**الصحيح:** Ich nehme den Zug, denn er ist schneller. — في النمط المدروس بعد denn: er ثم ist؛denn لا تشغل الموقع الأول داخل الجملة الرئيسية الثانية.

**الربط:** DL-A2-02-T07.

### DL-A2-02-Q06

> كم تستغرق رحلة القطار إلى Bremen بحسب النص؟

**نتيجة المراجعة:** 70 دقيقة وفق القراءة؛180 تخص Leipzig و 120 ليست مدتها.

**الخيارات:** ثلاث ساعات. / ساعتان. / ساعة وعشر دقائق.

**الصحيح:** ساعة وعشر دقائق. — النص يذكر eine Stunde und zehn Minuten.

**الربط:** DL-A2-02-T05.

### DL-A2-02-Q07

> أي وسيلة أقل كلفة بحسب نص قراءةElif؟

**نتيجة المراجعة:** Der Bus أقل كلفة في نص Elif؛وضّحنا مرجع السؤال،لا حكمًا على كل النصوص.

**الخيارات:** Der Zug. / Der Bus. / Das Fahrrad.

**الصحيح:** Der Bus. — النص يقول إن الحافلة أرخص لكنها أبطأ.

**الربط:** DL-A2-02-T05.

### DL-A2-02-Q08

> ماذا يوجد في Leipzig بحسب النص؟

**نتيجة المراجعة:** متاحف كثيرة وبلدة قديمة كبيرة؛لا شاطئ أو متحف واحد فقط في النص.

**الخيارات:** متاحف كثيرة وبلدة قديمة كبيرة. / شاطئ كبير. / متحف واحد فقط.

**الصحيح:** متاحف كثيرة وبلدة قديمة كبيرة. — يذكر النص viele Museen und eine große Altstadt.

**الربط:** DL-A2-02-T05.

### DL-A2-02-Q09

> اختر الجملة الصحيحة: Elif möchte nicht lange fahren. ___ fährt sie nach Bremen.

**نتيجة المراجعة:** Deshalb مع fährt sie يقدم النتيجة؛Denn و Weil لا يلائمان تركيب الخبرية المعطاة. صُحح كتالوج Q09 إلى T05.

**الخيارات:** Denn / Weil / Deshalb

**الصحيح:** Deshalb — عند وضع deshalb أول الجملة الرئيسية تأتي بعدها fährt ثم sie؛الأداة تعرض نتيجة تفضيل رحلة قصيرة.

**الربط:** DL-A2-02-T05.

### DL-A2-02-Q10

> أي جملة تستخدم صيغة التفضيل بشكل صحيح؟

**نتيجة المراجعة:** am besten صيغة التفضيل؛am besser و am gut غير مناسبتين. صُحح كتالوج Q10 إلى T03 ووسمه إلىالتفضيل.

**الخيارات:** Die Verbindung ist am besser. / Die Verbindung ist am besten. / Die Verbindung ist am gut.

**الصحيح:** Die Verbindung ist am besten. — الصيغة الصحيحة للتفضيل هي am besten.

**الربط:** DL-A2-02-T03.

### DL-A2-02-P01

> استعمل جدول T08 الخيالي وأولوية قصر المدة لتكتب أربع جمل ثم اقرأ الأربع بصوت مرتفع،ويمكنك الأداء منفردًا: الأولى تقارن سرعة القطار بالحافلة بـ schneller als؛الثانية تساوي راحة الحافلة والقطار بـ so bequem wie؛الثالثة تحدد أسرع الوسائل الثلاث بـ am schnellsten؛الرابعة تختار القطار وتشرح السبب بـ denn. الصيغ الثلاث كلها مطلوبة،لا الاختيار بين التساوي والتفضيل. لا شريك أو تسجيل أو بيانات سفر شخصية مطلوبة.

**نتيجة المراجعة:** P01/T08: حد 130 حرفًا وأربع جمل مع الجهر. الجدول يسند مقارنة وتساويًا وتفضيلًا مع اختيار حسب المدة؛النموذج يحققها كلها.

**المعايير:**
- أربع جمل تحقق المقارنة والتساوي والتفضيل والاختيار المعلل كلها؛قرأت الأربع جهرًا.
- الجمل تطابق جدولT08: القطار أسرع الثلاثة وراحة القطار والحافلة متساوية؛الاختيار حسب قصر المدة.
- schneller als،وso bequem wie،وam schnellsten،وdenn مع ترتيب الفاعل ثم الفعل في النموذج؛لاam schneller.

**الربط:** DL-A2-02-T08.

### DL-A2-02-P02

> اكتب أربع جمل بضمير ich لاختيار وسيلة من حوار Lea و Ben إلى Bremen؛أولويتك قصر المدة لا أقل سعر. الأولى تقارن سرعة القطار والحافلة بـ schneller als؛الثانية تقول إنك لا تريد السفر طويلًا؛الثالثة تختار القطار وتعطي السبب بـ Ich nehme…, denn er ist…؛الرابعة تعيد صياغة الاختيار نتيجةً تبدأ بـ Deshalb ثم الفعل ثم ich،وتذكر Bremen. هذه كتابة فقط،دون جهر أو تسجيل. لا تخترع سعرًا عدديًا أو ساعة وصول غير مذكورين؛الثالثة والرابعة تدريب طريقتين مترابطتين لشرح الاختيار نفسه.

**نتيجة المراجعة:** P02/T07: حد 130 حرفًا وأربع جمل كتابة فقط من الحوار،مع denn و Deshalb. لا تفصيل وصول أو سعر غير مسند.

**المعايير:**
- أربع جمل: مقارنة السرعة،أولوية قصر المدة،اختيار وسبب بـdenn،ونتيجة بـDeshalb؛كتابة فقط.
- الاختيار نفسه في الجملتين الأخيرتين ويطابق الحوار؛لا سعر أو ساعة وصول مختلقة.
- schneller als،وdenn er ist في السبب،وDeshalb fahre ich في النتيجة،معBremen وجهة.

**الربط:** DL-A2-02-T07.

### DL-A2-02-AUD-PHR-01

> Der Zug ist schneller als der Bus. Das Hotel ist günstiger als die Pension. Der Bus ist so bequem wie der Zug. Gut, besser, am besten. Ich nehme den Zug, denn er ist schneller. Deshalb fährt Elif nach Bremen.

**نتيجة المراجعة:** ست وحدات بصوت 02؛كلمات المقطع أصبحت متاحة في المصدر بمرجع دقيق،لا مجرد صيغ قريبة. الحالة ready والسياسة offer محفوظتان؛لا استماع أو اعتماد جديد.

### DL-A2-02-AUD-DLG-01

> Wie fahren wir am Wochenende nach Bremen? / Der Zug ist schneller als der Bus. / Ja, aber der Bus ist günstiger. / Stimmt. Die Zugfahrt dauert eine Stunde und zehn Minuten. Mit dem Bus fahren wir fast zwei Stunden. / Ich möchte nicht lange unterwegs sein. Der Zug ist für mich am besten. / Gut. Dann nehmen wir den Zug.

**نتيجة المراجعة:** ستة أدوار Lea02/Ben03 متناوبة؛فُصل عرض الأدوار دون تغيير كلماتها. الحالة ready والسياسة offer محفوظتان؛لا استماع أو اعتماد جديد.

### DL-A2-02-AUD-READ-01

> Elif plant einen Wochenendausflug. Sie kann zwischen Bremen und Leipzig wählen. Bremen liegt näher an Hamburg als Leipzig. Mit dem Zug dauert die Fahrt nach Bremen eine Stunde und zehn Minuten. Der Bus ist günstiger, aber langsamer. Die Zugfahrt nach Leipzig dauert drei Stunden. Dort gibt es viele Museen und eine große Altstadt. Elif möchte nicht lange fahren. Für sie ist eine kurze Reise am besten, deshalb fährt sie nach Bremen.

**نتيجة المراجعة:** قراءة بصوت 02 مسمى Elif في البيانات،لكن النص عنها بالغائب؛الأوقات تدريبية لا جدول حالي. الحالة ready والسياسة offer محفوظتان؛لا استماع أو اعتماد جديد.

### DL-A2-02-AUD-LST-01

> Wir möchten von Berlin nach Dresden fahren. Mit dem Auto dauert die Fahrt ungefähr zwei Stunden. Der Zug ist schneller: eine Stunde und fünfzig Minuten. Der Bus ist am günstigsten, aber die Fahrt dauert drei Stunden. Wir nehmen den Zug, denn wir möchten am Nachmittag noch die Altstadt besuchen.

**نتيجة المراجعة:** صوت 03،رحلة Berlin→Dresden؛110 دقائق للقطار وحوالي ساعتين للسيارة،ولا أسماء للمتكلمين. الحالة ready والسياسة offer محفوظتان؛لا استماع أو اعتماد جديد.

### DL-A2-02-AUD-MODEL-01

> Der Zug ist schneller als der Bus. Das Hotel ist so ruhig wie die Pension. Die Altstadt ist interessanter als das Einkaufszentrum. Der Zug ist am schnellsten. Die direkte Verbindung ist am besten. Ich nehme den Zug, denn er ist schneller. Elif möchte nicht lange fahren. Deshalb fährt sie nach Bremen.

**نتيجة المراجعة:** ثماني جمل بصوت 02؛أمثلة مستقلة لا نموذج الأداء الجديد. كلماتها الأصلية محفوظة. الحالة ready والسياسة offer محفوظتان؛لا استماع أو اعتماد جديد.

