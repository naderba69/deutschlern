# مراجعة CR21 — A2.3: الطعام والكميات والمطعم

رُوجع **A2.3 — الطعام والتغذية والشراء والمطعم** في **117 وحدة و39 بندًا أو مطلبًا**، مع **11 مرجعًا مقروءًا كاملًا**. ضُبطت الكميات وman، وأزيل غموض الكيلو والأفعال، وصُححت ترجمة حبات الخيار وروابط Q09→T04 وQ10→T03. **P01/T08أ قائمة أربعة أصناف وسؤال، كتابة فقط**؛ **P02/T08ب أربعة أدوار وتعليق man مع الجهر**، بنموذجين ومعايير مطابقة. الإصدار `a2-03-v2` والمخزن `v68`؛ عتبة80% وفهارس المفاتيح محفوظة، وتغيرت خيارات Q07 الثلاثة فقط. أربعة أصول/10 مقاطع محفوظة دون توليد أو استماع أو اعتماد جديد. **الحملة20/53 درسًا والبوابة منفصلة؛ تبقى33 درسًا، والتاليCR22/A2.4.** هذا سجل مراجعة وفحوص، لا شهادة مستوى أو إعلان دمج.

## الملفات والرفع والخطوة التالية

- `content/A2/lesson-03-food-nutrition-shopping.md/.assessment.json` و`data/course.json`، و20 صفًا في`data/production-task-catalog.csv`، وأربعة صفوف مرجعية فقط في`data/audio-asset-register.csv`.
- `service-worker.js` و`tools/test_service_worker.cjs` و`tools/test_accessibility_update.cjs`، وتوسعة`test_progression.cjs` و`test_accessibility_audit.cjs`، والحارس`tools/test_a2_03_review.py`.
- `data/reviews/a2-03-review.json/.md` وفهرس المراجعات وREADME وPROGRESS وخطة التحسين2.27 وتقرير المتصفح وملفا التسليم. لا تغييرplaylist أوMP3 أوapp.js أوCSS.
- التنفيذ **c509908f02fac735c5d9763f7164a8442282001c** رُفع وتطابق معorigin. PR#1 كانOPEN وmergedAt=null ورأسهc509908 عند التحقق؛ إشارةVercel success بيانات فقط، لا اختبار واجهة بعيد أو نشر إنتاج مدّعى.
- دفعة السجل والفحوص بعنوان `Record CR21 granular A2.3 review and cumulative checks`؛ معرفها فيgit log بعد الرفع، ثم يوثق إيصالها. الفرع الوحيد`arena/01a1036f-deutschlern`؛ لا تبديل أو دمج.
- التالي **CR22/A2.4 — المكتب والهاتف والمواعيد**: مراجعة فردية للنصوص والأدوار والتمارين والتقييم مع المراجع. احفظ صوتAmal00/Mitarbeiter02؛ لا تولد الموجود من جديد.
- القرارات مستمرة:كل تعديل يُرفع فور فحص مجموعته؛ المحتوى والتقييم والتطبيق قبل الصوت؛ لا مراجع بشري شرطًا للمتابعة. لا إعادة توليد أو إخفاء أو تغيير صوت أوready/نهائي بلا موافقة؛ حد10 طلبات صوت/رد. B1.9/B1.10 معلقان واختيارB1.11 محفوظ. احفظA2.7Q08→T05 واتساقA2.9 وتاريخB2.6 دون إعادة تسميتهB2.7.

## الفحوص وحدودها — CR21

- PASS: البناء والتحقق؛ الحزمة **1,892,977 بايت** والمخزن **v68**. 53 درسًا و428 عنوان تمرين و**56 قسم حوار** (زاد نموذج P02 النصي قسمًا، لا أصلًا صوتيًا) و754 مفردة؛ 530 سؤال درس و10 للبوابة و109 مهام أداء و1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا،137ready و80pending.
- PASS: **21 حارس مراجعة** تشمل A0.1–5 والبوابة وA1.1–12 وA2.1–3. الحارس الجديد يطابق117 وحدة و39 بندًا، و26 عبارة داخل أصلPHR، والأدوار والنصين والبصمات والروابط والمهمتين. ليس مصححًا لغويًا مستقلًا.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan، وصياغةapp.js وservice-worker.js وكلtools/test_*.cjs وdiff. لا تعديلapp.js أوCSS.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**. فشل تنزيلPlaywright بسببECONNRESET، فاستُخدمت حزمة@sparticuz/chromium143.0.4 ومكتباتal2023 المطابقة خارجGit؛ ليس تعديلًا للتطبيق.
- العام عند1440×900 و390×844: تنقل وRTL وتفريغ وتشغيل آلي صامت بسرعة1 و0.8 وإيقاف عند التنقل، وعمل دون اتصال ونطاقات بايت. لا هاتف فعلي أو استماع أو ضمان تخزين كل الصوت دائمًا.
- تحديثfixture العاملv42→v68 دون تحديث قسري، مع حفظ التقدم والإجابة وعزل المخازن؛ قد يلزم فتح الصوت مع الاتصال لإعادة تخزينه بعد حذف مخزن قديم. هذا ليس اختبار ترحيل مستقلًا لكل إصدار محتوى تاريخي.
- progression: يبقى تاريخv1 لكن لا يمنح إتقانv2 أو يفتحA2.4؛ تُرفض مسودةv1، ويمرv2 مع80% ودليل الأداء. P01 لا يطلب الجهر وP02 يرفض غيابه؛ النموذجان يمران بالطول، والإجابة القصيرة والمربعات الناقصة لا تمر. الإقرار لا يصحح اللغة أو النطق.
- axe-core4.11.0: **97 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة**؛ بقي **63 ظهورًا لفحوص غير حاسمة تشمل148 ظهورًا لعقد**. غير الحاسم ليس مخالفة مثبتة أو شهادةWCAG؛ لا نجعل مراجعًا بشريًا شرطًا للمتابعة.
- النماذج: المحاولة الأولى نجحت عند1440 ثم انتهت مهلةfilechooser عند390 (السطر48). **إعادة المجموعة منفردة نجحت عند1440 و390**، بما يشمل الحفظ والتصدير والاستيراد والمسودات. السبب المتقطع غير مشخص وغير مُصلح؛ لا نحذف النتيجة الأولى من السجل.
- العرض الضيق: **126 حالة**؛63 عند320×900 و63 عند568×320، تشمل كل الدروس والتفريغات والجداول. تغييرviewport ليس تكبير نظام أو تجربة جهاز فعلي.
- الحفظ مقابل `59dd2c9490f1f0636271c6158a5f6472067de168`: **52 درسًا آخر و1060 صف كتالوج آخر** لم تتغير؛ **27 نص خيار** محفوظة، وثلاثة خيارات Q07 صُححت، مع بقاء فهارس الإجابات العشرة.
- playlist مطابق بايتًا ببايت و**474MP3** طابقت بصماتGit السابقة؛ أربعة صفوفA2.3 فيaudio-register تغيرت في **source_line/source_heading فقط**. بقية213 صفًا وحقول الروابط والحالات محفوظة؛ Narrator/Salma/Kellnerin02 وGast03 وErzählperson03. لا استماع أو توليد أو اعتماد جديد.

## المنهج والمراجع

السجل مراجعة نصية أجراها المساعد، تدعمها المراجع أدناه والفحوص. ليست الأعداد وحدها دليل صحة تعليمية، ولا توثيقًا لمراجعة سمعية. تداخل المصادر يدعم قواعد محددة؛ أسماء الطعام البسيطة واستدلال النصوص روجعت لغويًا وسياقيًا، ولا ننسب كل كلمة إلى كل مرجع. فُحصت مفاتيح النصين وجميع المشتتات والمعايير؛ النص الكامل والبصمات في [JSON](a2-03-review.json).

1. **INDEF — [Lingolia Indefinitpronomen](https://deutsch.lingolia.com/de/grammatik/pronomen/indefinitpronomen)**: الجزآن كاملان؛man لفاعل غير معين،و etwas لشيء غير معين. لا ننقل تصريف الحالات المتقدمة كله إلى A2.3.
2. **POLITE — [Lingolia Konjunktiv I und II](https://deutsch.lingolia.com/de/grammatik/verben/konjunktiv)**: الجزآن كاملان؛صيغة hätte من haben والطلب المهذب. يُدرّس التركيب الجاهز لا كامل Konjunktiv أو الكلام المنقول.
3. **MAIN — [Lingolia Hauptsätze](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)**: الفعل المصرف ثاني مكون في الخبرية والمصدر في نهاية إطار الفعل؛لا نقيس الثانية بعدد الكلمات.
4. **GRAMM — [Duden Gramm](https://www.duden.de/rechtschreibung/Gramm)**: das Gramm؛جمع Gramme،لكن 2 Gramm في استعمال القياس؛الألف غرام كيلوغرام.
5. **KILO — [Duden Kilo](https://www.duden.de/rechtschreibung/Kilo)**: اختصار Kilogramm؛das مع der العامي النمساوي،والجمع Kilo[s]؛لا حجم عبوة.
6. **VEG — [Duden vegetarisch](https://www.duden.de/rechtschreibung/vegetarisch)**: الوصف النباتي في سياق الطعام؛دلالة لغوية لا حكم تغذية أو ضمان مكونات وجبة بعينها.
7. **REGION — [Duden regional](https://www.duden.de/rechtschreibung/regional)**: ما يخص منطقة؛لا يعني بذاته طازجًا أو صحيًا أو مصنوعًا في مدينة المتعلم.
8. **LENTIL — [Duden Linse](https://www.duden.de/rechtschreibung/Linse)**: feminine وجمع Linsen؛بذرة البقول في السياق لا العدسة البصرية.
9. **MAN — [Deutsch mit Anna — Indefinitpronomen](https://deutsch-mit-anna.de/lektion/indefinitpronomen/)**: الجزآن كاملان؛man معالغائب المفرد،والفرق بين kann و darf. لا ننقل تعميمات الأمثلة الثقافية على كل الناس.
10. **QUANTITY — [Studyflix — wie viel oder wieviel](https://studyflix.de/deutsch/wieviel-wie-viel-3328)**: الجزآن كاملان؛wie viel للمقدار و wie viele للمعدود،وكتابتهما منفصلتين. لم يُشاهد الفيديو ولا نعتمد أمثلة خارج نطاق الدرس.
11. **MASS — [Deutsche Grammatik2.0 — Nicht zählbare Nomen](https://deutschegrammatik20.de/das-substantiv-nomen/numerus-singular-plural/nicht-zaehlbare-nomen/)**: مواد مثل Wasser تُقاس بمقدار أو وعاء؛جمع مواد قد يعني الأنواع. نستعمل Flaschen هنا ولا ننقل كل تعميم عن المجردات.

جميع المراجع أعلاه جُلبت كاملة بأجزائها في2026-10-08. لم يُشاهد فيديوStudyflix. أُسقط رابطDuden/man الذي أعاد404؛ نتائج البحث الاستكشافية ليست مراجع إضافية مقروءة.

## الوحدات الفردية —117

### scope-01

**النص:** # A2.3 — الطعام والتغذية والشراء والمطعم

الموضوع طعام وتسوق ومطعم؛ ليس إرشادًا غذائيًا متخصصًا.

### scope-02

**النص:** **المدة:** نحو 35–40 دقيقة (تقدير مرن؛ يمكن تقسيم الدرس) · **المهارات:** مفردات، قراءة، كتابة، قواعد، محادثة، واستماع اختياري

الوقت تقديري مرن؛ أضيفت الكتابة ووُصف الاستماع بالاختياري لتوافق عدم اعتماد التقييم على MP3.

### scope-03

**النص:** **الهدف:** أستطيع أن أطلب طعامًا، وأتحدث عن الكميات والعادات الغذائية اليومية.

الطلب والكميات وman والعادات تنتقل من الأمثلة إلى الفهم ثم الإنتاج الموجه.

### scope-04

**النص:** في الاستعمالات المدروسة نستخدم **Wie viel?** مع مقدار مادة مثل Reis أو Käse، و**Wie viele?** مع عدد الأشياء بصيغة الجمع مثل Tomaten أو Flaschen. الماء مادة،لكن زجاجاته معدودة: **Wie viel Wasser? / Wie viele Flaschen Wasser?** لا نحكم على الكلمة في كل سياق؛قد نسأل عن أنواع مادة أو حصصها. نكتب wie viel و wie viele كلمتين:

تمييز مقدار المادة وعدد العبوات؛ لا نفرض سؤالًا ثابتًا لكل كلمة في جميع السياقات.

**المراجع الداعمة للنقطة:** QUANTITY, MASS.

### scope-05

**النص:** نستخدم **man** بمعنى «المرء/الناس/الشخص عمومًا» عندما لا نحدد فاعلًا بعينه. يأخذ الفعل معه تصريف المفرد الغائب:

فاعل غير محدد يأخذ الغائب المفرد؛ ترجمة «الناس» لا تفرض تصريف الجمع بالألمانية.

**المراجع الداعمة للنقطة:** INDEF, MAN.

### scope-06

**النص:** لا تخلط **man** (المرء) مع **der Mann** (الرجل). لا يقتصر man على الرجال ولا يعني كل الناس بلا استثناء؛هو فاعل غير محدد في السياق. مثال طلب المشروب أولًا تدريب لغوي،لا قاعدة تلزم كل مطعم وكل زبون.

man ليس Mann ولا الرجال وحدهم أو كل الناس بالضرورة؛ طلب المشروب أولًا مثال لا عادة ملزمة.

**المراجع الداعمة للنقطة:** INDEF, MAN.

### scope-07

**النص:** في الخبرية الرئيسية البسيطة يكون الفعل المصرف ثانيًا: **Im Restaurant bestellt man…**؛العبارة Im Restaurant كتلة واحدة،وقد يأتي man بعدها. في سؤال نعم/لا يبدأ الفعل المصرف: **Kann man hier vegetarisch essen?**؛بعد kann يأتي essen مصدرًا بلا zu في النهاية. نحفظ **man isst / man bestellt / man kauft / man kann**؛لا نصرفه جمعًا لأن الترجمة العربية قد تكون «الناس».

الموقع الثاني مكون نحوي؛ kann مصرف وessen مصدر؛ لا zu بعد الفعل الناقص في هذا النمط.

**المراجع الداعمة للنقطة:** MAIN, MAN.

### scope-08

**النص:** الجواب موجود في السطر 4؛المطلوب هنا صياغة السؤال عن المعلومة. الصفوف الأربعة عبارات قائمة لا جمل كاملة،ولا يلزم جعلها خبرية.

سؤال القائمة تحويل للمعلومة، لا ادعاء أن الكاتب يجهلها؛ تقبل القائمة عبارات اسمية.

### scope-09

**النص:** جملة man تلخص إمكانًا في هذا الموقف الخيالي،لا كل المطاعم. النماذج الجديدة غير مسجلة ولا تستبدل كلام التسجيلات القائمة؛المقارنة بالمعايير تحقق ذاتي لا تصحيح آلي للغة أو النطق.

التعليق خارج الحوار والنموذج غير مسجل؛ لا ننسب كلامًا جديدًا إلى الصوت القائم.

### scope-10

**النص الكامل:** محفوظ في وحدةJSON المطابقة، وراجع المصدر المشار إليه أعلاه.

طابقت مفاتيح التمارين وأسئلة النصين الأدلة. حركة bitte مقبولة، والإنتاج المفتوح ليس ذا جواب وحيد.

### vocab-01

**النص:** | die Speisekarte | die Speisekarten | قائمة الطعام |

Speisekarte مؤنث، والجمع en؛ قائمة الطعام لا الفاتورة.

### vocab-02

**النص:** | die Rechnung | die Rechnungen | الفاتورة |

Rechnung مؤنث والجمع en؛ حساب المطعم هنا، لا جميع معاني الحساب.

### vocab-03

**النص:** | die Zutat | die Zutaten | المكوّن |

Zutat المكوّن والجمع Zutaten؛ اسم الطبق لا يذكر جميع مكوناته.

### vocab-04

**النص:** | die Linse | die Linsen | حبة عدس؛ الجمع: العدس |

صُحح المفرد إلى حبة عدس؛ Linsen الجمع/العدس في السياق الغذائي، لا عدسة بصرية.

**المراجع الداعمة للنقطة:** LENTIL.

### vocab-05

**النص:** | die Gurke | die Gurken | حبة خيار |

صُحح المفرد إلى حبة خيار؛ Gurken حبات الخيار، لا «خيارات» بمعنى بدائل.

### vocab-06

**النص:** | die Kartoffel | die Kartoffeln | البطاطا |

Kartoffel مؤنث وجمعه Kartoffeln؛ البطاطا هنا صنف طعام، ويقيس Kilo وزنها.

### vocab-07

**النص:** | der Nachtisch | die Nachtische | التحلية بعد الوجبة |

Nachtisch تحلية بعد الوجبة؛ قد تكون فاكهة ولا يلزم أن تكون حلوى مصنعة.

### vocab-08

**النص:** | das Olivenöl | — | زيت الزيتون |

Olivenöl زيت زيتون؛ عدم تقديم جمع هنا لا يعني استحالة جمع أنواع المادة.

**المراجع الداعمة للنقطة:** MASS.

### vocab-09

**النص:** | das Öl | die Öle | الزيت |

Öl مادة وÖle زيوت/أنواع؛ ليس جمعًا بسبب زيادة الغرامات.

**المراجع الداعمة للنقطة:** MASS.

### vocab-10

**النص:** | der Reis | — | الأرز |

Reis أرز بوصفه مادة؛ زيادة كمية العبوة لا تقتضي جمعه.

**المراجع الداعمة للنقطة:** MASS.

### vocab-11

**النص:** | die Hülsenfrucht | die Hülsenfrüchte | البقولية |

Hülsenfrucht مؤنث مع Umlaut في الجمع؛ فئة البقول لا العدس وحده.

### vocab-12

**النص:** | frisch | — | طازج |

frisch طازج؛ ليس regional ولا ضمانًا لسلامة وجبة بعينها.

### vocab-13

**النص:** | salzig / süß | — | مالح / حلو |

salzig مالح وsüß حلو؛ صفتان، بخلاف Süßes المستعملة اسمًا في القراءة.

### vocab-14

**النص:** | regional | — | من المنطقة / إقليمي |

صُحح regional إلى ما يتعلق بالمنطقة؛ لا افتراض أنه منتج في بلدة المتعلم.

**المراجع الداعمة للنقطة:** REGION.

### vocab-15

**النص:** | vegetarisch | — | نباتي (من دون لحم أو سمك) |

vegetarisch وصف نباتي للطعام؛ لا يقدم قائمة مكونات أو ضمانًا صحيًا.

**المراجع الداعمة للنقطة:** VEG.

### vocab-16

**النص:** | die Flasche | die Flaschen | الزجاجة |

Flasche زجاجة معدودة؛ ليست وحدة وزن أو لترًا حتميًا.

### vocab-17

**النص:** | die Packung | die Packungen | العبوة |

Packung عبوة معدودة؛ وزنها وحجمها لا يحددهما الاسم.

### vocab-18

**النص:** | das Kilo | die Kilo / die Kilos | الكيلوغرام |

أضيف الجمع Kilo إلى Kilos؛ كلاهما معجمي، وein Kilo يقيس الوزن.

**المراجع الداعمة للنقطة:** KILO.

### vocab-19

**النص:** | das Gramm | die Gramme؛ كوحدة بعد العدد: Gramm | الغرام |

جمع معجمي Gramme، لكن Gramm بعد رقم الوزن في النمط المدروس.

**المراجع الداعمة للنقطة:** GRAMM.

### vocab-20

**النص:** | die Menge | die Mengen | الكمية |

Menge كمية مؤنثة وجمعها Mengen؛ ليست وحدة وزن بنفسها.

### quantity-01

**النص:** **Wie viel Reis brauchen wir?** — كم نحتاج من الأرز؟

Wie viel مع مقدار الأرز؛ brauchen wir لا يفرض جمع Reis.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, KILO, GRAMM.

### quantity-02

**النص:** **Wie viele Tomaten kaufen wir?** — كم حبة طماطم نشتري؟

Wie viele مع Tomaten المعدودة بصيغة الجمع؛ السؤال عن عدد الحبات.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, KILO, GRAMM.

### quantity-03

**النص:** **ein Kilo Äpfel** — كيلوغرام من التفاح.

ein مع Kilo المحايد؛ Äpfel جمع حبات التفاح المشتراة بالوزن.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, KILO, GRAMM.

### quantity-04

**النص:** **eine Flasche Wasser** — زجاجة ماء.

eine مع Flasche المؤنثة؛ Wasser يبقى اسم مادة.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, KILO, GRAMM.

### quantity-05

**النص:** **eine Packung Reis** — عبوة أرز.

eine Packung عبوة أرز؛ Reis المادة داخلها.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, KILO, GRAMM.

### quantity-06

**النص:** **250 Gramm Käse** — 250 غرامًا من الجبن.

250 Gramm قياس الوزن؛ Käse مادة لا عدد قطع.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, KILO, GRAMM.

### shop-01

**النص:** **Ich hätte gern ein Kilo Tomaten.** — أريد كيلوغرامًا من الطماطم، من فضلك. (صيغة مهذبة جاهزة)

hätte gern طلب مهذب مع كمية الطماطم؛ ليست ترجمة لزمن ماضٍ هنا.

**المراجع الداعمة للنقطة:** POLITE.

### shop-02

**النص:** **Was kostet ein Kilo?** — كم سعر الكيلو؟

سعر كيلو المنتج المفهوم من الموقف؛ الجملة وحدها لا تحدد السلعة.

**المراجع الداعمة للنقطة:** POLITE.

### shop-03

**النص:** **Das ist alles, danke.** — هذا كل شيء، شكرًا.

صيغة ختام الطلب، لا طلب فاتورة أو إثبات دفع ضمني.

**المراجع الداعمة للنقطة:** POLITE.

### man-01

**النص:** **Man isst hier oft Gemüse.** — يأكل الناس هنا الخضار غالبًا.

isst غائب مفرد؛ oft غالبًا لا دائمًا.

**المراجع الداعمة للنقطة:** MAN, MAIN, INDEF.

### man-02

**النص:** **Im Restaurant bestellt man zuerst ein Getränk.** — في المطعم يطلب المرء مشروبًا أولًا.

Im Restaurant مكون أول وbestellt ثانٍ وman فاعل؛ مثال لا قاعدة خدمة عامة.

**المراجع الداعمة للنقطة:** MAN, MAIN, INDEF.

### man-03

**النص:** **Man kann frische Produkte auf dem Markt kaufen.** — يمكن شراء منتجات طازجة في السوق.

kann مع المصدر kaufen في النهاية؛ frische Produkte مفعول جمع. الإمكان ليس حكمًا غذائيًا.

**المراجع الداعمة للنقطة:** MAN, MAIN, INDEF.

### helper-01

**النص:** **ein Kilo / 200 Gramm** — كيلوغرام واحد /200 غرام. الكيلوغرام 1000 غرام؛Kilo اختصار Kilogramm. نستعمل das Kilo في الدرس،ولا نخطئ der Kilo الإقليمي النمساوي في سياقه. بعد العدد في الوزن نقول 200 Gramm؛وجود جمع معجمي Gramme لا يغير هذا النمط.

تمييز الكيلوغرام والغرام وصيغ العدد والجمع؛ الصيغة الإقليمية ليست خطأ مطلقًا.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, GRAMM, KILO, MAN, POLITE, REGION, VEG.

### helper-02

**النص:** **eine Flasche / eine Packung / ein Glas** — زجاجة / عبوة / كأس. لا تحدد Flasche وحدها عدد اللترات،ولا Packung وزنًا ثابتًا؛الوحدة ليست دليلًا على «كمية كبيرة» دائمًا.

تمييز العبوات عن وحدات الوزن؛ إزالة وصف «كمية كبيرة» الملتبس.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, GRAMM, KILO, MAN, POLITE, REGION, VEG.

### helper-03

**النص:** **die Linse / die Gurke / die Linsen / die Gurken** — حبة عدس / حبة خيار / العدس / حبات الخيار. لا نخلط جمع اسم الخضار العربي هنا مع«خيارات» بمعنى بدائل.

ضبط المفرد والجمع العربيين، خاصة الخيار والعدس.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, GRAMM, KILO, MAN, POLITE, REGION, VEG.

### helper-04

**النص:** **Reis / Käse / Öl** — مواد في أمثلتنا؛السؤال عن مقدارها بـ Wie viel. قد يدل جمع مثل Öle على أنواع،ولا نضيف جمعًا إلى Käse لمجرد أن الوزن 200 غرام. **Flaschen Wasser** سؤال عن عدد الزجاجات لا جمع Wasser.

المادة مقابل أنواعها أو عبواتها؛ اختيار wie viel/viele حسب السياق.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, GRAMM, KILO, MAN, POLITE, REGION, VEG.

### helper-05

**النص:** **Ich hätte gern…** — صيغة طلب مهذبة جاهزة؛hätte من haben في Konjunktiv II،وليست habe. هنا يليها المطلوب مباشرةً: **eine Suppe / ein Glas Wasser**؛لا يلزم مصدر فعل بعدها. لا نطلب دراسة Konjunktiv كاملة.

hätte في تركيب جاهز؛ لا يلزم مصدر بجواره إذا تلاه الشيء المطلوب.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, GRAMM, KILO, MAN, POLITE, REGION, VEG.

### helper-06

**النص:** **Was kostet ein Kilo? / weniger als gestern** — ما سعر الكيلو؟ / أقل من أمس. المنتج مفهوم من الموقف؛لا سعر رقمي في النص،والمقارنة تخص سعر الجبن لا وزنه أو كل الأسعار دائمًا.

Was kostet للسعر؛ weniger في الاستماع أقل ثمنًا لا وزنًا.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, GRAMM, KILO, MAN, POLITE, REGION, VEG.

### helper-07

**النص:** **vegetarisch / regional / frisch** — نباتي كما تصف النادلة الحساء / من المنطقة / طازج. ليست هذه الكلمات مرادفات ولا حكمًا طبيًا. وصف طبق بأنه نباتي لا يعطينا قائمته الكاملة؛عند حاجة غذائية معينة اسأل عن المكونات الفعلية. هذا تدريب لغة لا خطة تغذية شخصية.

الصفات ليست مترادفات أو توصية غذائية؛ المكونات الفعلية تحتاج سؤالًا.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, GRAMM, KILO, MAN, POLITE, REGION, VEG.

### helper-08

**النص:** **Welche Suppe…? / Möchten Sie…? / dazu / später** — أي حساء؟ / هل ترغب بصيغة الاحترام؟ / مع ذلك / لاحقًا. الطلب الأول حساء وماء؛الخبز يُعرض ويُقبل لاحقًا،والفاتورة مطلوبة بعد ذلك.

تسلسل الأدوار يفصل الطلب الأول عن الخبز والفاتورة اللاحقين.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, GRAMM, KILO, MAN, POLITE, REGION, VEG.

### helper-09

**النص:** **etwas Süßes / zum Nachtisch / lieber Obst** — شيء حلو / للتحلية بعد الوجبة / يفضل الفاكهة. Süßes مكتوبة بحرف كبير لاستعمال الصفة اسمًا؛الفاكهة قد تكون حلوة،فلا نستنتج تقابلًا علميًا بين الفاكهة والحلاوة أو تفضيلًا صحيًا عامًا.

Süßes اسم مشتق يبدأ بحرف كبير؛ تفضيل الفاكهة لا يثبت رفض كل حلو.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, GRAMM, KILO, MAN, POLITE, REGION, VEG.

### helper-10

**النص:** **oft / meistens / gemeinsam** — غالبًا / في معظم الأحيان / معًا. ليست oft أو meistens بمعنى دائمًا. شراء العدس لا يثبت وضعه في الحساء الذي يذكر النص أنه بالخضار والأرز.

قيدا oft/meistens مهمان؛ شراء العدس لا يثبت وضعه في الحساء.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, GRAMM, KILO, MAN, POLITE, REGION, VEG.

### helper-11

**النص:** **حدود الشخصيات:** Salma في بيانات صوت القراءة اسم الراوي،والنص عنها بضمير الغائب. الاستماع لا يسمي صاحبه؛sie في الأسئلة تتبع die Person نحويًا،ولا تثبت الجنس أو أن المتكلم Salma.

اسم صوت القراءة لا يحدد هوية المتكلم المجهول في الاستماع؛ sie تتبع Person ولا تثبت الجنس.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, GRAMM, KILO, MAN, POLITE, REGION, VEG.

### helper-12

**النص:** **حدود الدليل:** قائمة P01 كتابة فقط،وحوار P02 مع تعليقه يُقرأ جهرًا،ويمكن أداء الطرفين منفردًا. لا شريك أو تسجيل أو شراء حقيقي مطلوب. حاول الاستماع قبل فتح التفريغ؛قراءته لا تثبت فهمًا مسموعًا مستقلًا،والطول والإقرار لا يصححان اللغة أو النطق.

P01 كتابة وP02 مع الجهر؛ فتح التفريغ لا يقيس فهم الاستماع المستقل.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, GRAMM, KILO, MAN, POLITE, REGION, VEG.

### dialogue-01

**النص:** Guten Abend. Hier ist die Speisekarte.

تحية وتقديم قائمة الطعام لا الفاتورة؛ ist مفرد مع Speisekarte.

**المراجع الداعمة للنقطة:** POLITE, MAIN, VEG.

### dialogue-02

**النص:** Danke. Welche Suppe ist heute frisch?

سؤال Welche Suppe عن الصنف الطازج اليوم؛ لا اسم طبق في السؤال.

**المراجع الداعمة للنقطة:** POLITE, MAIN, VEG.

### dialogue-03

**النص:** Die Gemüsesuppe. Sie ist vegetarisch.

إجابة مختصرة؛ sie تعود إلى Suppe لا النادلة. وصف نباتي دون قائمة مكونات كاملة.

**المراجع الداعمة للنقطة:** POLITE, MAIN, VEG.

### dialogue-04

**النص:** Dann hätte ich gern eine Suppe und ein Glas Wasser.

Dann hätte ich طلب مهذب يحوي حساء وكأس ماء؛ الدليل المباشر لـQ06 وT05.4.

**المراجع الداعمة للنقطة:** POLITE, MAIN, VEG.

### dialogue-05

**النص:** Möchten Sie auch Brot dazu?

عرض الخبز إضافي؛ لم يكن في طلب الضيف الأول.

**المراجع الداعمة للنقطة:** POLITE, MAIN, VEG.

### dialogue-06

**النص:** Ja, bitte. Und später die Rechnung.

قبول الخبز ثم طلب الفاتورة لاحقًا؛ صيغة مختصرة صحيحة لا يلزم إكمالها خبريًا.

**المراجع الداعمة للنقطة:** POLITE, MAIN, VEG.

### dialogue-07

**النص:** Natürlich.

موافقة طبيعية؛ لا تدل على دفع الفاتورة بالفعل.

**المراجع الداعمة للنقطة:** POLITE, MAIN, VEG.

### reading-01

**النص:** In Salmas Familie kocht man oft zu Hause.

man فاعل عام ضمن أسرة Salma؛ oft لا يعني كل الأيام.

**المراجع الداعمة للنقطة:** INDEF, MAN, MASS.

### reading-02

**النص:** Am Samstag kauft Salma auf dem Markt frisches Gemüse.

السبت والسوق مذكوران؛ لا ينفي النص زيارة متجر في وقت آخر.

**المراجع الداعمة للنقطة:** INDEF, MAN, MASS.

### reading-03

**النص:** Sie nimmt ein Kilo Tomaten, zwei Gurken und eine Packung Linsen.

كيلو طماطم وحبتا خيار وعبوة عدس؛ تدريب الوحدة والعدد.

**المراجع الداعمة للنقطة:** INDEF, MAN, MASS.

### reading-04

**النص:** Zu Hause kocht sie eine Suppe mit Gemüse und Reis.

حساء بالخضار والأرز؛ لا يقول النص إن العدس وُضع فيه.

**المراجع الداعمة للنقطة:** INDEF, MAN, MASS.

### reading-05

**النص:** Ihr Bruder isst gern etwas Süßes zum Nachtisch, aber Salma mag lieber Obst.

الأخ يحب شيئًا حلوًا والأخت تفضل الفاكهة؛ ليس تقابلًا غذائيًا أو حكمًا صحيًا.

**المراجع الداعمة للنقطة:** INDEF, MAN, MASS.

### reading-06

**النص:** In der Familie trinkt man zum Essen meistens Wasser.

meistens Wasser تعني الماء غالبًا؛ لا حصر جميع مشروبات العائلة فيه.

**المراجع الداعمة للنقطة:** INDEF, MAN, MASS.

### reading-question-01

**النص:** Wo kauft Salma das Gemüse?

Auf dem Markt؛ لا اسم مدينة مطلوب أو مذكور.

### reading-question-02

**النص:** Wie viele Gurken kauft sie?

Zwei Gurken؛ الحبتان دليل Q07.

### reading-question-03

**النص:** Was kocht sie zu Hause?

Eine Suppe mit Gemüse und Reis؛ لا نضيف العدس من الاستنتاج.

### reading-question-04

**النص:** Was isst ihr Bruder gern zum Nachtisch?

Etwas Süßes؛ لم يسمّ النص نوع حلوى معينًا.

### reading-question-05

**النص:** Was trinkt man in der Familie meistens zum Essen?

Wasser؛ قيد meistens في السؤال محفوظ.

### listening-01

**النص:** Für das Abendessen brauche ich ein Kilo Kartoffeln, drei Tomaten, eine Flasche Olivenöl und 200 Gramm Käse.

أربعة أصناف للعشاء: كيلو بطاطا وثلاث حبات طماطم وزجاجة زيت زيتون و200 غرام جبن؛ لا أرز هنا.

**المراجع الداعمة للنقطة:** KILO, GRAMM, MASS.

### listening-02

**النص:** Ich kaufe auch zwei Gurken.

حبتا خيار إضافيتان؛ المتكلم غير مسمى وليس بالضرورة Salma.

**المراجع الداعمة للنقطة:** KILO, GRAMM, MASS.

### listening-03

**النص:** Im Geschäft kostet der Käse heute weniger als gestern.

الجبن أقل ثمنًا اليوم من أمس؛ لا سعر رقمي ولا حكم على كل الأصناف.

**المراجع الداعمة للنقطة:** KILO, GRAMM, MASS.

### listening-question-01

**النص:** Wie viele Tomaten braucht die Person?

Drei Tomaten؛ السؤال عن العدد.

### listening-question-02

**النص:** Wie viel Käse kauft sie?

200 Gramm؛ مقدار الجبن لا اسم منتجه.

### listening-question-03

**النص:** Was kauft sie in einer Flasche?

Olivenöl؛ الزجاجة للزيت لا الماء في هذا النص.

### listening-question-04

**النص:** Was kostet heute weniger als gestern?

Der Käse؛ المقارنة تخص السعر لا الكمية.

### writing-model-01

**النص:** ein Kilo Kartoffeln

الصنف الأول بوحدة Kilo؛ عبارة قائمة صالحة لا يلزم تحويلها إلى خبرية.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, KILO, GRAMM.

### writing-model-02

**النص:** eine Flasche Wasser

صنف سائل مع Flasche؛ لا يفترض لترًا تلقائيًا.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, KILO, GRAMM.

### writing-model-03

**النص:** eine Packung Reis

الصنف الثالث Packung Reis؛ لا وزن ثابت للعبوة.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, KILO, GRAMM.

### writing-model-04

**النص:** 200 Gramm Käse

الصنف الرابع 200 Gramm Käse؛ صيغة القياس واسم المادة.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, KILO, GRAMM.

### writing-model-05

**النص:** Wie viel Käse brauchen wir?

سؤال Wie viel عن الجبن، وإجابته السطر الرابع؛ تحويل موجه للمعلومة.

**المراجع الداعمة للنقطة:** QUANTITY, MASS, KILO, GRAMM.

### speaking-model-01

**النص:** Guten Abend. Ich hätte gern eine Gemüsesuppe und ein Glas Wasser.

تحية وطلب حساء وماء بصيغة مهذبة؛ يحقق الدور الأول.

**المراجع الداعمة للنقطة:** POLITE, MAN, MAIN, VEG.

### speaking-model-02

**النص:** Gern.

رد قصير يؤكد قبول الطلب؛ لا يلزم حشو كلامي.

**المراجع الداعمة للنقطة:** POLITE, MAN, MAIN, VEG.

### speaking-model-03

**النص:** Ist die Suppe vegetarisch?

سؤال عن وصف الحساء؛ Ist في البداية.

**المراجع الداعمة للنقطة:** POLITE, MAN, MAIN, VEG.

### speaking-model-04

**النص:** Ja, sie ist vegetarisch.

Ja مع sie التي تعود إلى الحساء؛ جواب متسق.

**المراجع الداعمة للنقطة:** POLITE, MAN, MAIN, VEG.

### speaking-model-05

**النص:** Man kann hier vegetarisch essen.

تعليق منفصل Man kann…essen؛ المصدر في النهاية والإمكان في المكان الخيالي نفسه.

**المراجع الداعمة للنقطة:** POLITE, MAN, MAIN, VEG.

### card-01

**النص:** **Wie viel Reis brauchen wir?** → كم نحتاج من الأرز؟

سؤال مقدار الأرز لا عدد حباته.

**المراجع الداعمة للنقطة:** QUANTITY, MAN, MAIN, POLITE.

### card-02

**النص:** **Wie viele Tomaten kaufen wir?** → كم حبة طماطم نشتري؟

سؤال عن عدد شيء معدود بصيغة الجمع.

**المراجع الداعمة للنقطة:** QUANTITY, MAN, MAIN, POLITE.

### card-03

**النص:** **Man kann auf dem Markt einkaufen.** → يمكن للمرء أن يتسوّق في السوق.

man kann مع المصدر einkaufen في النهاية؛ لا ينفصل المصدر بعد kann إلى kaufen ein.

**المراجع الداعمة للنقطة:** QUANTITY, MAN, MAIN, POLITE.

### card-04

**النص:** **Ich hätte gern die Rechnung.** → أريد الفاتورة من فضلك.

طلب مهذب للفاتورة؛ ليس إقرارًا بدفعها.

**المراجع الداعمة للنقطة:** QUANTITY, MAN, MAIN, POLITE.

### DL-A2-03-T01

**النص:** 1. أطلب الطعام من خلالها: **die Speisekarte / die Rechnung**
2. أدفعها بعد الطعام: **die Rechnung / die Zutat**
3. وحدة وزن تساوي 1000 غرام: **das Kilo / die Flasche**
4. وصف الطعام الذي لا يحتوي لحمًا أو سمكًا: **vegetarisch / salzig**

رُوجع كل بند ومفتاحه وقيود الإجابة كما تبين items؛ لا استنتاج غير مسند ولا ادعاء أن الاختيار من بنك يثبت الإنتاج الحر.

**المراجع الداعمة للنقطة:** QUANTITY, MAN, MAIN, POLITE.

- **1. أطلب الطعام من خلالها: **die Speisekarte / die Rechnung**** — الجواب: die Speisekarte. قائمة الطعام لا الفاتورة.
- **2. أدفعها بعد الطعام: **die Rechnung / die Zutat**** — الجواب: die Rechnung. الحساب بعد الطعام لا المكوّن.
- **3. وحدة وزن تساوي 1000 غرام: **das Kilo / die Flasche**** — الجواب: das Kilo. حُددت وحدة 1000 غرام بدل كمية كبيرة قد تكون زجاجة؛ جواب محدد.
- **4. وصف الطعام الذي لا يحتوي لحمًا أو سمكًا: **vegetarisch / salzig**** — الجواب: vegetarisch. تعريف نباتي في سياق الطعام لا صفة الملوحة.

### DL-A2-03-T02

**النص:** 1. ______ Tomaten brauchst du?
2. ______ Reis möchtest du?
3. ______ Flaschen Wasser kaufen wir?
4. ______ Käse brauchen wir?

رُوجع كل بند ومفتاحه وقيود الإجابة كما تبين items؛ لا استنتاج غير مسند ولا ادعاء أن الاختيار من بنك يثبت الإنتاج الحر.

**المراجع الداعمة للنقطة:** QUANTITY, MAN, MAIN, POLITE.

- **1. ______ Tomaten brauchst du?** — الجواب: Wie viele. Tomaten جمع معدود.
- **2. ______ Reis möchtest du?** — الجواب: Wie viel. Reis مادة في السياق.
- **3. ______ Flaschen Wasser kaufen wir?** — الجواب: Wie viele. Flaschen هي المعدودة ولو كان المحتوى Wasser.
- **4. ______ Käse brauchen wir?** — الجواب: Wie viel. Käse مادة في السؤال.

### DL-A2-03-T03

**النص:** في البنود 1–4 صرّف الفعل المكتوب بين القوسين مع man. ليس المطلوب تخمين أي فعل يمكن حدوثه في المكان:

1. Im Restaurant ______ man zuerst ein Getränk. (bestellen)
2. Auf dem Markt ______ man frisches Gemüse. (kaufen)
3. ______ man hier vegetarisch essen? (können)
4. Zu Hause ______ man oft gemeinsam. (essen)
5. معنى man في Man isst hier oft Gemüse: **المرء/الناس عمومًا / رجل محدد**.

رُوجع كل بند ومفتاحه وقيود الإجابة كما تبين items؛ لا استنتاج غير مسند ولا ادعاء أن الاختيار من بنك يثبت الإنتاج الحر.

**المراجع الداعمة للنقطة:** QUANTITY, MAN, MAIN, POLITE.

- **1. Im Restaurant ______ man zuerst ein Getränk. (bestellen)** — الجواب: bestellt. bestellen محدد ومصرف مع man؛ أزيل البنك الملتبس.
- **2. Auf dem Markt ______ man frisches Gemüse. (kaufen)** — الجواب: kauft. kaufen محدد؛ لا تخمين فعل من مجرد مكان السوق.
- **3. ______ man hier vegetarisch essen? (können)** — الجواب: Kann. können يتحول إلى Kann؛ سؤال نعم/لا وessen في النهاية.
- **4. Zu Hause ______ man oft gemeinsam. (essen)** — الجواب: isst. essen يتحول إلى isst؛ لا مصدر أو جمع.
- **5. معنى man في Man isst hier oft Gemüse: **المرء/الناس عمومًا / رجل محدد**.** — الجواب: المرء/الناس عمومًا. تدريب مباشر لمعنى man يدعم رابط Q10.

### DL-A2-03-T04

**النص:** 1. ______ Kilo Äpfel
2. eine ______ Wasser
3. eine ______ Reis
4. 200 ______ Käse

استخدم: *Packung, Flasche, Gramm, ein*.

رُوجع كل بند ومفتاحه وقيود الإجابة كما تبين items؛ لا استنتاج غير مسند ولا ادعاء أن الاختيار من بنك يثبت الإنتاج الحر.

**المراجع الداعمة للنقطة:** QUANTITY, MAN, MAIN, POLITE.

- **1. ______ Kilo Äpfel** — الجواب: ein. ein للجنس المحايد مع Kilo.
- **2. eine ______ Wasser** — الجواب: Flasche. Flasche مؤنث؛ الماء في الزجاجة.
- **3. eine ______ Reis** — الجواب: Packung. Packung مؤنث؛ الأرز داخل العبوة.
- **4. 200 ______ Käse** — الجواب: Gramm. Gramm بعد رقم الوزن؛ لا عبوة.

### DL-A2-03-T05

**النص:** في البنود 1–3 ابدأ بالكتلة المحددة،واستعمل كل كتلة مرة؛يمكن تغيير موضع bitte في البند 2 ما دام الطلب مفهومًا. ثم أجب عن البند 4 من الحوار:

1. gern / hätte / eine Gemüsesuppe / Ich (ابدأ بـ Ich)
2. die Rechnung / bitte / Und / später (ابدأ بـ Und)
3. vegetarisch / Die Suppe / ist (ابدأ بـ Die Suppe)
4. ما الذي طلبه الضيف مع الحساء في أول طلب له؟ **ein Glas Wasser / eine Flasche Öl**.

رُوجع كل بند ومفتاحه وقيود الإجابة كما تبين items؛ لا استنتاج غير مسند ولا ادعاء أن الاختيار من بنك يثبت الإنتاج الحر.

**المراجع الداعمة للنقطة:** QUANTITY, MAN, MAIN, POLITE.

- **1. gern / hätte / eine Gemüsesuppe / Ich (ابدأ بـ Ich)** — الجواب: Ich hätte gern eine Gemüsesuppe.. البداية Ich محددة؛ استعمل كل كتلة مرة وحافظ على كتلة المفعول.
- **2. die Rechnung / bitte / Und / später (ابدأ بـ Und)** — الجواب: Und später die Rechnung, bitte. / Und bitte später die Rechnung.. طلب مختصر صحيح؛ موضع bitte مرن فلا ندعي ترتيبًا صحيحًا وحيدًا.
- **3. vegetarisch / Die Suppe / ist (ابدأ بـ Die Suppe)** — الجواب: Die Suppe ist vegetarisch.. البداية Die Suppe محددة؛ الفعل ثاني مكون.
- **4. ما الذي طلبه الضيف مع الحساء في أول طلب له؟ **ein Glas Wasser / eine Flasche Öl**.** — الجواب: ein Glas Wasser. الدليل الطلب الأول؛ لا تخلطه بالخبز أو الفاتورة، ويدعم Q06.

### DL-A2-03-T06

**النص:** حدّد صحيحًا أو خطأ:

1. Am Sonntag, nicht am Samstag, kauft Salma das Gemüse auf dem Markt.
2. Sie kauft zwei Gurken.
3. Sie kocht eine Suppe mit Gemüse und Reis.
4. In der Familie trinkt man meistens Wasser.

رُوجع كل بند ومفتاحه وقيود الإجابة كما تبين items؛ لا استنتاج غير مسند ولا ادعاء أن الاختيار من بنك يثبت الإنتاج الحر.

**المراجع الداعمة للنقطة:** QUANTITY, MAN, MAIN, POLITE.

- **1. Am Sonntag, nicht am Samstag, kauft Salma das Gemüse auf dem Markt.** — الجواب: خطأ: Samstag لا Sonntag. العبارة تنفي السبت المذكور وتستبدله بالأحد؛ نفي صريح بدل استنتاج عدم زيارة متجر.
- **2. Sie kauft zwei Gurken.** — الجواب: صحيح: zwei Gurken. عدد الخيار صريح في النص.
- **3. Sie kocht eine Suppe mit Gemüse und Reis.** — الجواب: صحيح: Gemüse und Reis. مكونات الحساء مذكورة دون إضافة العدس.
- **4. In der Familie trinkt man meistens Wasser.** — الجواب: صحيح: meistens Wasser. meistens غالبًا لا دائمًا؛ القيد محفوظ.

### DL-A2-03-T07

**النص:** أكمل من البنك واستعمل كل عنصر مرة: **Kartoffeln — drei — 200 — weniger**.

1. Die Person braucht ein Kilo ______.
2. Sie kauft ______ Tomaten.
3. Sie braucht ______ Gramm Käse.
4. Heute kostet der Käse ______ als gestern.

رُوجع كل بند ومفتاحه وقيود الإجابة كما تبين items؛ لا استنتاج غير مسند ولا ادعاء أن الاختيار من بنك يثبت الإنتاج الحر.

**المراجع الداعمة للنقطة:** QUANTITY, MAN, MAIN, POLITE.

- **1. Die Person braucht ein Kilo ______.** — الجواب: Kartoffeln. كيلو بطاطا من أول جملة.
- **2. Sie kauft ______ Tomaten.** — الجواب: drei. ثلاث حبات طماطم لا ثلاث زجاجات.
- **3. Sie braucht ______ Gramm Käse.** — الجواب: 200. 200 وزن الجبن؛ لا 250 الموجودة في مثال آخر.
- **4. Heute kostet der Käse ______ als gestern.** — الجواب: weniger. weniger للسعر بالمقارنة مع أمس.

### DL-A2-03-T08

**النص الكامل:** محفوظ في وحدةJSON المطابقة، وراجع المصدر المشار إليه أعلاه.

طوبقت المهمتان مع التدريب: خمسة مطالب للقائمة والسؤال كتابةً فقط، وخمسة للحوار والتعليق مع قراءة الجميع جهرًا.

**المراجع الداعمة للنقطة:** QUANTITY, MAN, POLITE.

- **1. صنف بوحدة ein Kilo** — الجواب: مثال: ein Kilo Kartoffeln. P01 كتابة فقط، حد 90؛ أربعة أصناف بوحدات مناسبة وسؤال مرتبط.
- **2. صنف مختلف بوحدة eine Flasche** — الجواب: مثال: eine Flasche Wasser. P01 كتابة فقط، حد 90؛ أربعة أصناف بوحدات مناسبة وسؤال مرتبط.
- **3. صنف ثالث بوحدة eine Packung** — الجواب: مثال: eine Packung Reis. P01 كتابة فقط، حد 90؛ أربعة أصناف بوحدات مناسبة وسؤال مرتبط.
- **4. صنف رابع بوحدة 200 Gramm** — الجواب: مثال: 200 Gramm Käse. P01 كتابة فقط، حد 90؛ أربعة أصناف بوحدات مناسبة وسؤال مرتبط.
- **5. سؤال Wie viel/viele عن صنف في القائمة** — الجواب: مثال: Wie viel Käse brauchen wir?. P01 كتابة فقط، حد 90؛ أربعة أصناف بوحدات مناسبة وسؤال مرتبط.
- **6. الدور الأول: طلب الحساء والماء بـIch hätte gern** — الجواب: مثال: Guten Abend. Ich hätte gern eine Gemüsesuppe und ein Glas Wasser.. P02 مع الجهر للجميع، حد 150؛ التعليق خارج أدوار الخدمة ولا يلزم MP3.
- **7. الدور الثاني: رد قبول** — الجواب: مثال: Gern.. P02 مع الجهر للجميع، حد 150؛ التعليق خارج أدوار الخدمة ولا يلزم MP3.
- **8. الدور الثالث: سؤال عن vegetarisch** — الجواب: مثال: Ist die Suppe vegetarisch?. P02 مع الجهر للجميع، حد 150؛ التعليق خارج أدوار الخدمة ولا يلزم MP3.
- **9. الدور الرابع: جواب إيجابي متسق** — الجواب: مثال: Ja, sie ist vegetarisch.. P02 مع الجهر للجميع، حد 150؛ التعليق خارج أدوار الخدمة ولا يلزم MP3.
- **10. تعليق Man kann…essen منفصل، وقراءة الحوار والتعليق جهرًا** — الجواب: مثال: Man kann hier vegetarisch essen.. P02 مع الجهر للجميع، حد 150؛ التعليق خارج أدوار الخدمة ولا يلزم MP3.

### DL-A2-03-Q01

**النص:** ما معنى **die Rechnung** في المطعم؟

تعريف الفاتورة مباشر؛ القائمة والمكوّن مشتتان مختلفان.

**الجواب:** الفاتورة

**الخيارات:** الفاتورة / قائمة الطعام / المكوّن

### DL-A2-03-Q02

**النص:** اختر السؤال المناسب مع Tomaten: ___ Tomaten brauchst du?

Wie viele مع Tomaten؛ lange للمدة وviel ليس للعد هنا.

**الجواب:** Wie viele

**الخيارات:** Wie viel / Wie viele / Wie lange

### DL-A2-03-Q03

**النص:** أكمل: Im Restaurant ___ man zuerst ein Getränk.

bestellt غائب مفرد؛ bestellen مصدر/جمع وbestellst مخاطب.

**الجواب:** bestellt

**الخيارات:** bestellen / bestellst / bestellt

### DL-A2-03-Q04

**النص:** أي عبارة تعني «زجاجة ماء»؟

Flasche زجاجة وKilo وزن وPackung عبوة؛ لا يلزم أن تكون كل عبارة مشتتة مستحيلة في الواقع.

**الجواب:** eine Flasche Wasser

**الخيارات:** ein Kilo Wasser / eine Flasche Wasser / eine Packung Wasser

### DL-A2-03-Q05

**النص:** أي عبارة هي صيغة طلب الطعام المهذبة المدروسة؟

المطلوب الصيغة المهذبة المدروسة؛ bin لا يعني الطلب ولا ندعي استحالة habe في كل سياق.

**الجواب:** Ich hätte gern eine Gemüsesuppe.

**الخيارات:** Ich hätte gern eine Gemüsesuppe. / Ich bin eine Gemüsesuppe. / Ich habe gern eine Gemüsesuppe.

### DL-A2-03-Q06

**النص:** ما الذي طلبه الضيف مع الحساء في أول طلب له في الحوار؟

حُدد الطلب الأول؛ الماء صريح لا الزيت أو الفاتورة.

**الجواب:** كوب ماء.

**الخيارات:** إيصال الشراء. / زجاجة زيت. / كوب ماء.

### DL-A2-03-Q07

**النص:** كم حبة خيار اشترت Salma بحسب القراءة؟

صُححت حبات الخيار في السؤال والخيارات الثلاثة؛ فهرس الجواب 1 محفوظ.

**الجواب:** حبتين.

**الخيارات:** حبة واحدة. / حبتين. / أربع حبات.

### DL-A2-03-Q08

**النص:** ماذا تشرب العائلة غالبًا مع الطعام؟

meistens Wasser يدعم الجواب؛ لا يفترض أن العائلة لا تشرب غيره.

**الجواب:** الماء.

**الخيارات:** الماء. / العصير. / الحليب.

### DL-A2-03-Q09

**النص:** في التعبير **200 Gramm Käse**، ما وحدة كمية الجبن؟

وحدة Gramm مدربة في T04؛ نُقل الرابط عن T07 الخاص بفهم الاستماع.

**الجواب:** Gramm

**الخيارات:** Flasche / Kilo / Gramm

### DL-A2-03-Q10

**النص:** في جملة **Man isst hier oft Gemüse**، ماذا تعني man؟

فاعل عام لا مخاطب أو شخص اسمه Mann؛ الرابط الآن إلى T03 الذي يدرب المعنى.

**الجواب:** المرء أو الناس عمومًا.

**الخيارات:** شخصًا محددًا اسمه Mann. / المرء أو الناس عمومًا. / ضمير المخاطب.

### DL-A2-03-P01

**النص:** اكتب قائمة شراء خيالية في خمسة أسطر: أربعة أصناف طعام أو شراب مختلفة من الدرس،مع كمية كل صنف؛استعمل مرة واحدة كلًّا من ein Kilo و eine Flasche و eine Packung و 200 Gramm مع اسم مناسب. في السطر الخامس صغ سؤالًا بـ Wie viel أو Wie viele عن كمية أحد الأصناف،بحيث تصلح الكمية المكتوبة في القائمة جوابًا له. هذا تدريب تحويل المعلومة إلى سؤال،لا ادعاء أن الكمية مجهولة لك. كتابة فقط،دون جهر أو تسجيل أو شراء حقيقي.

مطابقة حرفية مع T08 ومعايير ونموذج بالمودالية المحددة؛ تحقق progression من حدود الطول والإقرارات. ليس تصحيحًا لغويًا أو سمعيًا.

### DL-A2-03-P02

**النص:** اكتب أربعة أدوار متناوبة لضيف ونادلة في مطعم خيالي،ثم جملة تعليق منفصلة: الدور 1 يطلب حساء خضار وكأس ماء بـ Ich hätte gern؛الدور 2 يؤكد الطلب برد قصير؛الدور 3 يسأل Ist die Suppe vegetarisch?؛الدور 4 يجيب بالإيجاب بصيغة Ja, sie ist vegetarisch. بعد الحوار اكتب تعليقًا عامًا يوافقه ويبدأ Man kann عن إمكان أكل طعام نباتي هنا. اقرأ الأدوار الأربعة والتعليق بصوت مرتفع،ويمكنك أداء الطرفين منفردًا. التعليق ليس دورًا خامسًا للنادلة؛لا تسجيل أو شريك أو ادعاء بمكونات مطعم حقيقي مطلوب.

مطابقة حرفية مع T08 ومعايير ونموذج بالمودالية المحددة؛ تحقق progression من حدود الطول والإقرارات. ليس تصحيحًا لغويًا أو سمعيًا.

### DL-A2-03-AUD-PHR-01

**النص:** Die Speisekarte. Die Rechnung. Die Zutat. Die Linse. Die Gurke. Die Kartoffel. Der Nachtisch. Das Olivenöl. Der Reis. Frisch. Salzig. Süß. Regional. Vegetarisch. Ein Kilo Äpfel. Eine Flasche Wasser. Eine Packung Reis. 250 Gramm Käse. Wie viel Reis brauchen wir? Wie viele Tomaten kaufen wir? Ich hätte gern ein Kilo Tomaten. Was kostet ein Kilo? Das ist alles, danke. Man isst hier oft Gemüse. Im Restaurant bestellt man zuerst ein Getränk. Man kann frische Produkte auf dem Markt kaufen.

حُفظت الهوية والصوت والمسار والحالة والتفريغ؛ روجع النص في الوحدات أعلاه. تغير source_line/source_heading فقط. فحص بنية MP3 لا يثبت النطق.

- **1. Die Speisekarte.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **2. Die Rechnung.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **3. Die Zutat.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **4. Die Linse.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **5. Die Gurke.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **6. Die Kartoffel.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **7. Der Nachtisch.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **8. Das Olivenöl.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **9. Der Reis.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **10. Frisch.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **11. Salzig.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **12. Süß.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **13. Regional.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **14. Vegetarisch.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **15. Ein Kilo Äpfel.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **16. Eine Flasche Wasser.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **17. Eine Packung Reis.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **18. 250 Gramm Käse.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **19. Wie viel Reis brauchen wir?** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **20. Wie viele Tomaten kaufen wir?** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **21. Ich hätte gern ein Kilo Tomaten.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **22. Was kostet ein Kilo?** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **23. Das ist alles, danke.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **24. Man isst hier oft Gemüse.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **25. Im Restaurant bestellt man zuerst ein Getränk.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.
- **26. Man kann frische Produkte auf dem Markt kaufen.** — موجود في مفردات الدرس أو أمثلة الكمية أو طلب السوق أو قاعدة man؛ طابق نص PHR دون استماع أو توليد.

### DL-A2-03-AUD-DLG-01

**النص:** Guten Abend. Hier ist die Speisekarte.
Danke. Welche Suppe ist heute frisch?
Die Gemüsesuppe. Sie ist vegetarisch.
Dann hätte ich gern eine Suppe und ein Glas Wasser.
Möchten Sie auch Brot dazu?
Ja, bitte. Und später die Rechnung.
Natürlich.

حُفظت الهوية والصوت والمسار والحالة والتفريغ؛ روجع النص في الوحدات أعلاه. تغير source_line/source_heading فقط. فحص بنية MP3 لا يثبت النطق.

### DL-A2-03-AUD-READ-01

**النص:** In Salmas Familie kocht man oft zu Hause. Am Samstag kauft Salma auf dem Markt frisches Gemüse. Sie nimmt ein Kilo Tomaten, zwei Gurken und eine Packung Linsen. Zu Hause kocht sie eine Suppe mit Gemüse und Reis. Ihr Bruder isst gern etwas Süßes zum Nachtisch, aber Salma mag lieber Obst. In der Familie trinkt man zum Essen meistens Wasser.

حُفظت الهوية والصوت والمسار والحالة والتفريغ؛ روجع النص في الوحدات أعلاه. تغير source_line/source_heading فقط. فحص بنية MP3 لا يثبت النطق.

### DL-A2-03-AUD-LST-01

**النص:** Für das Abendessen brauche ich ein Kilo Kartoffeln, drei Tomaten, eine Flasche Olivenöl und 200 Gramm Käse. Ich kaufe auch zwei Gurken. Im Geschäft kostet der Käse heute weniger als gestern.

حُفظت الهوية والصوت والمسار والحالة والتفريغ؛ روجع النص في الوحدات أعلاه. تغير source_line/source_heading فقط. فحص بنية MP3 لا يثبت النطق.

## حدود النتيجة

هذه مراجعة نصية مسجلة ومرفوعة على فرع العمل بعد الفحص، وليست اكتمالًا للمنهج أو دمجًا أو شهادةCEFR/WCAG. عدّ39 يشمل مطالب التمارين الثمانية؛ عباراتPHR الست والعشرون موثقة داخل أصلها ولا تضاف إلى هذا العدد. بقي33 درسًا؛ التاليA2.4.
