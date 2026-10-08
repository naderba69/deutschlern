# مراجعة CR22 — A2.4: المكتب والهاتف والمواعيد

رُوجع **A2.4 — المكتب والهاتف والمواعيد** في **114 وحدة و38 بندًا أو مطلبًا**، مع **9 مراجع كاملة**. ضُبط الفرق بينob وwann والفاصلة وعلامة النهاية، والفصل في الأفعال، والفرق بين التوفر والمقترح والتأكيد. **P01/T08أ ستة أدوار هاتفية مع الجهر**؛ **P02/T08ب تحية وخمس جمل وختام واسم، كتابة فقط**، بمعايير ونموذجين مطابقين. صُححت الروابطQ04→T03 وQ09/Q10→T01، وأضيف تدريب مباشر لمعنىverschieben. الإصدار `a2-04-v2` والمخزن `v69`؛ الخيارات الثلاثون وفهارس المفاتيح و80% محفوظة. أربعة أصول/10 مقاطع دون توليد أو استماع أو اعتماد جديد. **الحملة21/53 درسًا والبوابة منفصلة؛ تبقى32 درسًا، والتاليCR23/A2.5.** لا شهادة مستوى أو إعلان دمج.

## الملفات والرفع والخطوة التالية

- `content/A2/lesson-04-office-phone-appointments.md/.assessment.json` و`data/course.json`،و20 صفًا في`data/production-task-catalog.csv` وأربعة صفوف مرجعية فقط في`data/audio-asset-register.csv`.
- `service-worker.js` و`tools/test_service_worker.cjs` و`tools/test_accessibility_update.cjs`،وتوسعة`test_progression.cjs` و`test_accessibility_audit.cjs`،والحارس`tools/test_a2_04_review.py`.
- `data/reviews/a2-04-review.json/.md` وفهرس المراجعات وREADME وPROGRESS وخطة التحسين2.28 وتقرير المتصفح وملفا التسليم. لا تغييرplaylist أوMP3 أوapp.js أوCSS.
- التنفيذ **944a0574092f6332bf403a1febb4ca25b500fc34** رُفع وتطابق معorigin. PR#1 كانOPEN وmergedAt=null ورأسه944a057 عند التحقق؛إشارةVercel success بيانات فقط،لا اختبار واجهة بعيد أو نشر إنتاج مدّعى.
- دفعة السجل والفحوص بعنوان `Record CR22 granular A2.4 review and cumulative checks`؛معرفها فيgit log بعد دفعها،ثم يوثق إيصالها. الفرع الوحيد`arena/01a1036f-deutschlern`؛لا تبديل أو دمج. استردادmetadata عند البداية تم بعد تطابق686 ملفًا وصفر إضافات،لاreset أعمى.
- التالي **CR23/A2.5 — التدريب والروتين وwenn**: راجع كل نص وحوار وتمرين ومهمة بالمراجع وأصلح ما يظهر. احفظMira02/Rami03 ولا تعد توليد الموجود. لا حاجة إلى تكرار إيصالCR22.
- القرارات مستمرة:كل تعديل يُرفع فور فحص مجموعته؛المحتوى والتقييم والتطبيق قبل الصوت؛لا مراجع بشري شرطًا للمتابعة. لا إعادة توليد أو إخفاء أو تغيير صوت أوready/نهائي بلا موافقة؛حد10طلبات صوت/رد. B1.9/B1.10 معلقان واختيارB1.11 محفوظ. احفظA2.7Q08→T05 واتساقA2.9 وتاريخB2.6 دون إعادة تسميتهB2.7.

## الفحوص وحدودها — CR22

- PASS:build/verify؛ الحزمة **1,903,251 بايت** والمخزن **v69**. 53 درسًا و428 عنوان تمرين و55 عنوان حوار مطابقًا لنمط العداد و754 مفردة؛530 سؤال درس و10 للبوابة و109 مهمات أداء و1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا،137ready و80pending.
- **تصحيح وصف العداد:** وصوله إلى56 فيCR21 كان بسبب إضافة كلمة«الحوار» إلىعنوانT05، لا بسبب نموذجP02 كما وُصف في تقريرCR21. صار55 هنا لأن عنوانT08 يستعمل«مكالمة» بدل«محادثة». لا حوار أو تسجيل محذوف؛العداد يقيس نمط العناوين، لا عدد المحادثات أو الأدوار.
- PASS: **22 حارس مراجعة** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–4؛ الحارس الجديد يطابق114 وحدة و38 بندًا و24 عبارة داخلPHR، وأدوار الحوار ونص الاستماع وروابط التقييم والكتالوج والبصمات. مقارنة البريد تراعي9/neun و11/elf والترقيم؛ليست شهادة نطق.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan، وصياغةapp.js وservice-worker.js وجميعtools/test_*.cjs وdiff. لا تعديلapp.js أوCSS.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**. استُعملت حزمة@sparticuz/chromium143.0.4 ومكتباتal2023 خارجGit؛التشغيل آلي وصامت،لا اختبار هاتف فعلي أو استماع.
- العام عند1440×900 و390×844: التنقل وRTL والتفريغ وتشغيل MP3 بسرعة1 و0.8 وإيقافه عند التنقل، والعمل دون اتصال ونطاقات البايت. هذا لا يضمن تخزين جميع التسجيلات دائمًا.
- تحديثfixture عامل الخدمةv42→v69 دون تحديث قسري، مع حفظ التقدم والإجابة وعزل المخازن وإعادة تخزين الصوت عبر الاتصال عند الحاجة. لا تدّعي هذه التجربة اختبار ترحيل كل إصدار محتوى تاريخي.
- progression: يبقى سجلv1 لكن لا يمنح إتقانv2 أو يفتحA2.5؛مسودةv1 مرفوضة،ويمرv2 مع80% ودليل الأداء. P01 يرفض غياب الجهر،P02 لا يطلبه؛النموذجان يمران بالطول،والإجابة القصيرة أو المربعات الناقصة لا تمر. التحقق من الإقرار ليس تصحيحًا للغة أو النطق.
- axe-core4.11.0: **101 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة**، مع **66 ظهورًا لفحوص غير حاسمة تشمل154 ظهورًا لعقد**. غير الحاسم ليس مخالفة مؤكدة أو شهادةWCAG؛لا مراجع بشري شرطًا لمتابعة العمل.
- النماذج: **PASS من أول تشغيل متسلسل** عند1440 و390،مع الحفظ والتصدير والاستيراد والمسودات. تذبذبfilechooser السابق لم يتكرر هنا؛ليس دليل إصلاح سببه.
- العرض الضيق: **126 حالة**؛63 عند320×900 و63 عند568×320،تشمل كل الدروس مع التفريغات والجداول. تغييرviewport ليس تكبير نظام أو تجربة جهاز فعلي.
- الحفظ مقابل `d3109c2ccc327ba3888c3737f5d36eb2993256e3`: **52 درسًا آخر و1060 صف كتالوج آخر** لم تتغير. الخيارات الثلاثون وفهارس الإجابات العشرة محفوظة.
- playlist مطابق بايتًا ببايت و**474MP3** طابقت بصماتGit السابقة. أربعة صفوفA2.4 فيaudio-register تغيرت في **source_line/source_heading فقط**؛بقية213 صفًا وبقية الحقول والحالات والمسارات محفوظة. **Amal00/Mitarbeiter02/Narrator02**؛لا توليد أو استماع أو اعتماد جديد.

## المنهج والمراجع

مراجعة نصية أجراها المساعد مع مراجع وحراس؛ليست شهادة مستوى أو اعتمادًا سمعيًا. فُحص كل نص ودور وتمرين ومفتاح ومشتت ومعيار،والنصوص الكاملة والبصمات في [JSON](a2-04-review.json). المراجع تدعم النقاط المسماة لا كل كلمة في كل سطر؛اللغة اليومية واستدلال النصوص روجعا كذلك في السياق. استُبعدت صفحات404،ولا يُنسخ خطأ من مثال مرجعي لمجرد أن المصدر منشور.

1. **INDIRECT — [Lingolia — Indirekte Fragen](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/indirekte-fragen)**: ob لسؤال نعم/لا وأداة السؤال للمعلومة، والفعل المصرف آخر التابعة وعلامة النهاية بحسب الجملة الكاملة. لا ننسخ تهجئة wieviel الموجودة في مثال خارج نطاق الدرس.
2. **SEPARATE — [Lingolia — Trennbare und untrennbare Verben](https://deutsch.lingolia.com/de/grammatik/verben/trennbare)**: بادئات mit-/zurück-/ab- منفصلة في الرئيسية؛ be-/ver- غير منفصلة. تبقى الأمثلة المدروسة أبسط من استثناءات الصفحة.
3. **ANNA — [Deutsch mit Anna — Indirekte Fragen](https://deutsch-mit-anna.de/lektion/indirekte-fragen/)**: الجزآن كاملان؛ مقارنة ob وأداة السؤال وموقع الفعل. لا نعتمد تعميم أن كل فعل أولًا يعني استفهامًا، ولا تنسخ تمارين الصفحة أو تعليقاتها؛ الأمر مثال مضاد، والترقيم هنا مدعوم أيضًا بـLingolia/Duden.
4. **TERM — [Duden — Termin](https://www.duden.de/rechtschreibung/Termin)**: der Termin وجمع Termine؛ فعل vereinbaren مع موعد، وتمييز الموعد من معنى آخر كالمهلة.
5. **DIRECT — [Duden — Durchwahl](https://www.duden.de/rechtschreibung/Durchwahl)**: الاتصال المباشر بامتداد هاتفي، والاستعمال الدارج للرقم؛ أوسع من رقم داخلي لا يمكن بلوغه من الخارج.
6. **MOVE — [Duden — verschieben](https://www.duden.de/rechtschreibung/verschieben)**: نقل الشيء، وفي معنى المواعيد تعرض الصفحة التأجيل؛ المثال هنا الثلاثاء إلى الأربعاء، لا تغيير إلى يوم سابق.
7. **CANCEL — [Duden — absagen](https://www.duden.de/rechtschreibung/absagen)**: عدم حصول حدث/إبلاغ إلغاء حضور؛ لا يعني وضع بديل تلقائيًا، وصيغة sagt ab.
8. **TELL — [Duden — mitteilen](https://www.duden.de/rechtschreibung/mitteilen)**: إبلاغ شخص بمعلومة، jemandem etwas، وصيغ teilt mit/hat mitgeteilt.
9. **COMMA — [Duden — Komma](https://www.duden.de/sprachwissen/rechtschreibregeln/komma)**: الأجزاء0–4 كاملة؛ فصل التابعة بالفاصلة، والتحية بفاصلة يتبعها حرف صغير عند اقتضاء الإملاء، والختام المستقل عادة بلا علامة نهائية؛ تذكر الصفحة اختلاف العرف السويسري والليختنشتايني.

قُرئت الصفحات التسع كاملة في2026-10-08،ومنها جزآDeutsch mit Anna والأجزاء الخمسة لـDuden Komma. رابطLingolia الأول بلاnebensaetze ورابطDuden Komma-nach-Anrede أعادا404 واستُبعدا. نتائج البحث ليست مصادر إضافية مقروءة.

## الوحدات الفردية —114

### scope-01

**النص:** # A2.4 — المكتب والهاتف والمواعيد

موضوع المكتب والهاتف والمواعيد؛ لا تنفيذ حجز أو مراسلة حقيقية.

**المراجع الداعمة:** INDIRECT, COMMA.

### scope-02

**النص:** **المدة:** نحو 35–40 دقيقة (تقدير مرن؛ يمكن تقسيم الدرس) · **المهارات:** كتابة، محادثة هاتفية، قراءة بريد إلكتروني، قواعد، واستماع اختياري

المدة تقديرية مرنة؛ الكتابة صريحة والاستماع اختياري لأن التقييم لا يحتاج MP3.

**المراجع الداعمة:** INDIRECT, COMMA.

### scope-03

**النص:** **الهدف:** أستطيع أن أطلب موعدًا هاتفيًا، وأفهم رسالة عمل، وأسأل سؤالًا غير مباشر بأدب.

الهدف يتدرب عبر العبارات وفهم البريد والمكالمة وإنتاج سؤال تابع؛ لا شهادة مستوى.

**المراجع الداعمة:** INDIRECT, COMMA.

### scope-04

**النص:** في نمطي السؤال المباشر المدروسين: يبدأ سؤال نعم/لا بالفعل المصرف، ويأتي الفعل بعد أداة السؤال في سؤال الوقت بـ wann:

قُيد الوصف بنمطي نعم/لا ووقت مباشر، لا جميع أنواع الأسئلة أو الاستعمالات.

**المراجع الداعمة:** INDIRECT, COMMA.

### scope-05

**النص:** السؤال غير المباشر جزء تابع داخل جملة أخرى. قد يساعد على الطلب المهذب مع مقدمة مثل Können Sie mir sagen، لكنه ليس مهذبًا تلقائيًا في كل موقف. نستخدم **ob** بمعنى «ما إذا كان / هل» لنقل سؤال نعم/لا، و**wann** للسؤال عن الوقت. ob هنا ليست «إذا» الشرطية. في الجمل البسيطة المدروسة يأتي الفعل المصرف في نهاية الجزء التابع:

ob يطلب معرفة صحة معلومة وwann وقتها؛ غير المباشر ليس شرطًا أو تهذيبًا تلقائيًا.

**المراجع الداعمة:** INDIRECT, COMMA.

### scope-06

**النص:** الفاصلة تفصل الجزء التابع عن الجملة الرئيسية. تذكّر: **ob … ist**، **wann … beginnt**؛ ننقل الفعل المصرف ولا نحوله إلى مصدر: **die Besprechung beginnt/endet**، **der Zug fährt**، **Frau Weber ist**.

المطلوب نقل الفعل المصرف، لا تحويله إلى مصدر أو إهمال توافقه مع الفاعل.

**المراجع الداعمة:** INDIRECT, COMMA.

### scope-07

**النص:** علامة النهاية تتبع الجملة الكاملة: **Können Sie mir sagen, wann der Termin beginnt?** سؤال ينتهي بعلامة استفهام (?)؛ أما **Ich möchte wissen, wann der Termin beginnt.** فخبرية تنتهي بنقطة. والطلب **Bitte teilen Sie mir mit, ob Mittwoch möglich ist.** ليس سؤال نعم/لا لمجرد وجود ob أو تقدم الفعل؛هذه صيغة طلب. نحافظ على الفاصلة قبل ob/wann.

الفاصلة وعلامة النهاية منفصلتان؛ الطلب Bitte teilen Sie… ليس استفهامًا لمجرد تقدم الفعل.

**المراجع الداعمة:** INDIRECT, COMMA.

### scope-08

**النص:** هذه الأسماء والتفاصيل للتدريب؛الاجتماع الآخر سبب مضاف في نموذج P02 لا معلومة من البريد الأصلي. النماذج نصية ولا تغيّر التسجيلات القائمة. التحقق الذاتي يقارن المحتوى والترتيب، ولا يعطي تصحيحًا آليًا للنطق أو اللغة.

المثال الجديد مستقل؛ السبب المفترض لا يضاف إلى البريد الأصلي، ولا ننسبه للتسجيل.

**المراجع الداعمة:** INDIRECT, COMMA.

### vocab-01

**النص:** | das Gespräch | die Gespräche | المحادثة |

Gespräch محادثة محايدة وجمعها Gespräche مع Umlaut؛ لا تقتصر على الهاتف.

### vocab-02

**النص:** | die Nachricht | die Nachrichten | الرسالة |

Nachricht رسالة/خبر؛ المقصود رسالة في هذا السياق، وجمعها Nachrichten.

### vocab-03

**النص:** | der Anruf | die Anrufe | المكالمة |

Anruf مكالمة أو اتصال هاتفي، مذكر وجمع Anrufe.

### vocab-04

**النص:** | die Durchwahl | die Durchwahlen | رقم الاتصال المباشر / التحويلة |

وُسع معنى Durchwahl إلى رقم اتصال مباشر/تحويلة؛ لا يُحصر بالاتصال الداخلي.

**المراجع الداعمة:** DIRECT.

### vocab-05

**النص:** | die Besprechung | die Besprechungen | الاجتماع |

Besprechung اجتماع مؤنث وجمعه Besprechungen؛ ليس تأكيد موعد بحد ذاته.

### vocab-06

**النص:** | der Kalender | die Kalender | التقويم |

Kalender مذكر وجمعه مطابق؛ التقويم أداة لا موعد واحد.

### vocab-07

**النص:** | der Termin | die Termine | الموعد |

Termin مذكر وجمع Termine؛ vereinbaren حجز باتفاق لا إشغال تقويم من طرف واحد.

**المراجع الداعمة:** TERM.

### vocab-08

**النص:** | frei / besetzt | — | متاح / مشغول؛ بحسب السياق |

frei متاح وbesetzt مشغول بحسب الخط أو الوقت؛ لا تعني مجانية الموعد.

### vocab-09

**النص:** | verschieben | verschiebt | ينقل الموعد إلى وقت آخر؛ يؤجله هنا |

verschieben نقل موعد قائم؛ يؤخره المثال من الثلاثاء للأربعاء، بخلاف إلغائه.

**المراجع الداعمة:** MOVE.

### vocab-10

**النص:** | absagen | sagt ab | يلغي |

absagen يلغي في السياق؛ أضيفت sagt ab لتوضيح الفصل.

**المراجع الداعمة:** CANCEL, SEPARATE.

### vocab-11

**النص:** | bestätigen | bestätigt | يؤكد |

bestätigen يؤكد، وصيغة bestätigt غير منفصلة؛ طلب التأكيد ليس تحقق حصوله.

**المراجع الداعمة:** SEPARATE.

### vocab-12

**النص:** | zurückrufen | ruft zurück | يعاود الاتصال |

zurückrufen يعاود الاتصال، ruft zurück في الرئيسية؛ لا يعني زيارة الشخص.

**المراجع الداعمة:** SEPARATE.

### vocab-13

**النص:** | vereinbaren | vereinbart | يتفق على/يحجز (موعدًا) |

vereinbaren يتفق على الموعد؛ vereinbart غير منفصل.

**المراجع الداعمة:** TERM, SEPARATE.

### vocab-14

**النص:** | mitteilen | teilt mit | يبلغ/يخبر |

mitteilen يبلغ؛ teilt mit منفصل، والمتلقي Dativ كما في mir.

**المراجع الداعمة:** TELL, SEPARATE.

### phone-01

**النص:** **Guten Tag, hier spricht Amal Ben Ali.** — نهارك سعيد، معك أمل بن علي.

تحية وتعريف مهني؛ hier spricht لا يعني السكن هنا.

**المراجع الداعمة:** TERM, SEPARATE.

### phone-02

**النص:** **Kann ich bitte mit Frau Weber sprechen?** — هل يمكنني التحدث مع السيدة فيبر؟

Kann ich…sprechen طلب مهذب؛ mit Frau Weber لا تنكير للسيدة ولا تغيير للاسم.

**المراجع الداعمة:** TERM, SEPARATE.

### phone-03

**النص:** **Einen Moment, bitte.** — لحظة من فضلك.

طلب انتظار قصير؛ ليس وعدًا بوقت محدد أو مطالبة بالاتصال غدًا.

**المراجع الداعمة:** TERM, SEPARATE.

### phone-04

**النص:** **Sie ist gerade in einer Besprechung.** — إنها في اجتماع الآن.

Sie تعود إلى Frau Weber في تسلسل الأمثلة؛ gerade الآن لا عادة دائمة.

**المراجع الداعمة:** TERM, SEPARATE.

### phone-05

**النص:** **Kann sie mich bitte zurückrufen?** — هل يمكنها معاودة الاتصال بي؟

sie للسيدة وmich للمتصل؛ zurückrufen مصدر متصل بعد kann.

**المراجع الداعمة:** TERM, SEPARATE.

### phone-06

**النص:** **Ich möchte einen Termin vereinbaren.** — أود حجز موعد.

طلب حجز موعد؛ einen Termin مفعول، ولا يحدد الوقت وحده.

**المراجع الداعمة:** TERM, SEPARATE.

### phone-07

**النص:** **Der Termin passt mir gut.** — الموعد مناسب لي.

الموعد مناسب للمتحدث؛ mir لا mich مع passt؛ قبول لا إيصال حجز رسمي.

**المراجع الداعمة:** TERM, SEPARATE.

### grammar-01

**النص:** **Ist Frau Weber heute im Büro?** — هل السيدة فيبر في المكتب اليوم؟

سؤال نعم/لا مباشر يبدأ بـIst؛ im Büro قيد مكان لا وقت فقط.

**المراجع الداعمة:** INDIRECT, COMMA.

### grammar-02

**النص:** **Wann beginnt die Besprechung?** — متى يبدأ الاجتماع؟

سؤال مباشر عن البداية لا النهاية، والفعل بعد Wann.

**المراجع الداعمة:** INDIRECT, COMMA.

### grammar-03

**النص:** **Können Sie mir sagen, ob Frau Weber heute im Büro ist?** — هل يمكن أن تخبرني إن كانت السيدة فيبر في المكتب اليوم؟

نقل سؤال نعم/لا إلى ob مع ist في النهاية؛ السؤال الرئيسي يقتضي علامة استفهام.

**المراجع الداعمة:** INDIRECT, COMMA.

### grammar-04

**النص:** **Ich möchte wissen, wann die Besprechung beginnt.** — أود أن أعرف متى يبدأ الاجتماع.

wann يبقي معنى وقت البداية؛ خبرية Ich möchte wissen تنتهي بنقطة.

**المراجع الداعمة:** INDIRECT, COMMA.

### grammar-05

**النص:** **Wissen Sie, ob der Termin noch frei ist?** — هل تعرف إن كان الموعد ما زال متاحًا؟

ob عن التوفر وnoch ما زال؛ السؤال لا يؤكد توفر الموعد أو نفيه.

**المراجع الداعمة:** INDIRECT, COMMA.

### helper-01

**النص:** **frei / besetzt / offen / online** — الموعد frei أي متاح، والخط besetzt أي مشغول، والمكتب offen أي مفتوح، و online عبر الإنترنت. لا يعني الموعد المتاح أنه تأكد حجزه أو أنه مجاني.

تمييز التوفر والانشغال وفتح المكتب والموعد عبر الإنترنت؛ لا حجز مؤكد أو مجانية مستنتجة.

**المراجع الداعمة:** INDIRECT, SEPARATE, TERM, MOVE, CANCEL, TELL, COMMA.

### helper-02

**النص:** **vereinbaren / verschieben / absagen / bestätigen** — نتفق على موعد / ننقل موعدًا قائمًا (من الثلاثاء إلى الأربعاء هنا) / نلغي الموعد / نؤكد الموعد. طلب التغيير ليس موافقة الطرف الآخر، و absagen لا يحدد موعدًا بديلًا تلقائيًا.

حجز/نقل/إلغاء/تأكيد وظائف مختلفة؛ نقل الموعد طلب ينتظر جوابًا.

**المراجع الداعمة:** INDIRECT, SEPARATE, TERM, MOVE, CANCEL, TELL, COMMA.

### helper-03

**النص:** **zurückrufen / mitteilen** — يعاود الاتصال / يبلغ شخصًا بمعلومة. نقول **Rufen Sie mich bitte zurück.** و**Bitte teilen Sie mir mit,…**؛في الرئيسية ينفصل zurück/mit. بعد können يبقى المصدر متصلًا: **Können Sie mich zurückrufen?** لا zu هنا.

الفصل في الطلب الرئيسي والمصدر المتصل بعد können؛ موضع mir/mich مناسب.

**المراجع الداعمة:** INDIRECT, SEPARATE, TERM, MOVE, CANCEL, TELL, COMMA.

### helper-04

**النص:** **Sie / sie / mir / mich** — Sie للمخاطب بصيغة الاحترام؛sie في Kann sie mich… تعود إلى Frau Weber. في بداية الجملة قد يبدأ الضميران بحرف كبير؛السياق يميز. نقول mir sagen/mitteilen لكن mich zurückrufen. وفي mit Herrn König تأتي Herrn بعد mit؛ليست Herr König في هذا التركيب.

Sie الاحترامي وsie المرجعي يميزهما السياق؛ صرف Herrn بعد mit مقصود.

**المراجع الداعمة:** INDIRECT, SEPARATE, TERM, MOVE, CANCEL, TELL, COMMA.

### helper-05

**النص:** **am Dienstag / um 9 Uhr / auf Mittwoch / am Nachmittag** — يوم الثلاثاء / الساعة 9 / إلى الأربعاء عند نقل الموعد / بعد الظهر دون ساعة دقيقة. الأوقات خيالية وليست مواعيد فعلية؛اليوم نفسه لا يعني التاريخ نفسه في كل نص.

am لليوم وum للساعة وauf للبديل؛ Nachmittag دون ساعة دقيقة، والمواعيد خيالية.

**المراجع الداعمة:** INDIRECT, SEPARATE, TERM, MOVE, CANCEL, TELL, COMMA.

### helper-06

**النص:** **نصوص مستقلة:** الحوار مع موظف بشأن Herr König، والبريد موجّه إلى Frau Weber، والاستماع رسالة إلى Herr König. لا تخلط الأربعاء 11 في البريد بالخميس 14 في الحوار. سبب تعذر الحضور في البريد غير مذكور؛الاستماع يذكر اجتماعًا. Frau König في T04 مثال نحوي مستقل، لا خطأ في اسم Herr König ولا دليل قرابة.

لا نجمع تفاصيل النصوص في حكاية واحدة؛ سبب البريد غائب، وFrau König مثال آخر لا خطأ تلقائيًا.

**المراجع الداعمة:** INDIRECT, SEPARATE, TERM, MOVE, CANCEL, TELL, COMMA.

### helper-07

**النص:** **البريد المكتوب:** بعد التحية المنتهية بفاصلة تبدأ leider بحرف صغير، وصيغة الختام المستقلة بلا فاصلة نهائية. هذا النمط المستعمل هنا، لا كل الأعراف الإقليمية. في تفريغ التسجيل ترد neun/elf بدل 9/11، وتفصل نقطةٌ التحيةَ عن المتن؛لا ننسخ ترقيم التفريغ الصوتي بدل تنسيق الرسالة.

الرسالة بتنسيق مكتوب، والتفريغ يعرض الأرقام بالكلمات؛ ليست مراجعة سمعية أو تغييرًا للتسجيل.

**المراجع الداعمة:** INDIRECT, SEPARATE, TERM, MOVE, CANCEL, TELL, COMMA.

### helper-08

**النص:** **طريقة التدريب:** P01 حوار من ستة أدوار يُقرأ كله جهرًا؛يمكن أداء الطرفين منفردًا. P02 رسالة كتابة فقط، وتفاصيلها تمرين خيالي مستقل. لا اتصال أو إرسال بريد أو تسجيل مطلوب. حاول الاستماع قبل فتح التفريغ؛قراءة النص لا تثبت فهمًا مسموعًا مستقلًا، والطول والإقرار لا يصححان اللغة أو النطق.

حدود الدليل: P01 مع الجهر وP02 كتابة، ولا إرسال أو تسجيل أو تصحيح آلي للغة.

**المراجع الداعمة:** INDIRECT, SEPARATE, TERM, MOVE, CANCEL, TELL, COMMA.

### dialogue-01

**النص:** Guten Tag, hier spricht Amal Ben Ali. Ich möchte einen Termin mit Herrn König vereinbaren.

تحية وتعريف وطلب مع Herrn König؛ لم يحدد الوقت بعد.

**المراجع الداعمة:** INDIRECT, TERM.

### dialogue-02

**النص:** Guten Tag. Einen Moment, bitte. Herr König ist gerade in einer Besprechung.

رد تحية وطلب انتظار وسبب عدم الحديث معه الآن؛ ليس إلغاءً للموعد.

**المراجع الداعمة:** INDIRECT, TERM.

### dialogue-03

**النص:** Können Sie mir sagen, wann er Zeit hat?

er يعود إلى Herrn König؛ wann لوقت التوفر وhat في النهاية.

**المراجع الداعمة:** INDIRECT, TERM.

### dialogue-04

**النص:** Am Donnerstag um 14 Uhr.

الخميس14 جواب مختصر صالح؛ ليس الأربعاء11 من البريد.

**المراجع الداعمة:** INDIRECT, TERM.

### dialogue-05

**النص:** Wissen Sie, ob der Termin online ist?

ob لسؤال نعم/لا عن كون الموعد online؛ لا يسأل عن بدايته.

**المراجع الداعمة:** INDIRECT, TERM.

### dialogue-06

**النص:** Ja, die Besprechung ist online.

Ja ثم إيضاح أن الاجتماع عبر الإنترنت؛ لا معلومات منصة أو رابط اتصال.

**المراجع الداعمة:** INDIRECT, TERM.

### dialogue-07

**النص:** Das passt mir gut. Vielen Dank.

قبول للوقت المقترح وشكر؛ لا وثيقة حجز أو إثبات انعقاد لاحق.

**المراجع الداعمة:** INDIRECT, TERM.

### reading-01

**النص:** Guten Tag, Frau Weber,

تحية إلى Frau Weber بفاصلة؛ يليها leider الصغيرة في المتن.

**المراجع الداعمة:** INDIRECT, COMMA, MOVE, TELL.

### reading-02

**النص:** leider kann ich am Dienstag um 9 Uhr nicht zu unserem Termin kommen.

تعذر حضور الثلاثاء9 صريح؛ سبب التعذر غير مصرح به.

**المراجع الداعمة:** INDIRECT, COMMA, MOVE, TELL.

### reading-03

**النص:** Können wir den Termin auf Mittwoch verschieben?

طلب نقل الموعد إلى الأربعاء؛ لا موافقة مستلمة.

**المراجع الداعمة:** INDIRECT, COMMA, MOVE, TELL.

### reading-04

**النص:** Bitte teilen Sie mir mit, ob Mittwoch um 11 Uhr möglich ist.

اقتراح الأربعاء11 مع طلب جواب ob؛ teilen…mit في الرئيسية وist في التابعة.

**المراجع الداعمة:** INDIRECT, COMMA, MOVE, TELL.

### reading-05

**النص:** Ich möchte auch wissen, wann die Besprechung endet.

طلب وقت نهاية الاجتماع؛ الجواب الزمني غير وارد في النص.

**المراجع الداعمة:** INDIRECT, COMMA, MOVE, TELL.

### reading-06

**النص:** Vielen Dank und freundliche Grüße

ختام مستقل بلا فاصلة نهائية؛ لا يمثل جملة متن إضافية في عد المهمة.

**المراجع الداعمة:** INDIRECT, COMMA, MOVE, TELL.

### reading-07

**النص:** Amal Ben Ali

توقيع Amal Ben Ali؛ لا يدل على أن كل نص في الدرس الواقعة نفسها.

**المراجع الداعمة:** INDIRECT, COMMA, MOVE, TELL.

### reading-question-01

**النص:** Warum schreibt Amal?

تكتب لتعذر الحضور وطلب النقل؛ لا نختلق سبب الغياب.

### reading-question-02

**النص:** An welchem Tag kann sie nicht kommen?

Am Dienstag؛ الساعة9 تفصيل صحيح غير لازم لسؤال اليوم.

### reading-question-03

**النص:** Auf welchen Tag möchte sie den Termin verschieben?

Auf Mittwoch؛ لا Donnerstag الواردة في النصين الآخرين.

### reading-question-04

**النص:** Um wie viel Uhr schlägt sie den neuen Termin vor?

Um 11 Uhr؛ وقت مقترح لا حجز مؤكد.

### reading-question-05

**النص:** Was möchte sie über die Besprechung wissen?

Wann die Besprechung endet؛ السؤال عما تريد معرفته لا عن ساعة نهاية معلومة.

### listening-01

**النص:** Guten Morgen, Herr König.

تحية صباحية إلى Herrn König؛ Herr في النداء هنا دون mit.

**المراجع الداعمة:** INDIRECT, SEPARATE.

### listening-02

**النص:** Hier ist Amal Ben Ali.

المتحدثة تعرّف نفسها؛ ليست هوية مفترضة من اسم الصوت فقط.

**المراجع الداعمة:** INDIRECT, SEPARATE.

### listening-03

**النص:** Ich kann heute um zehn Uhr nicht anrufen.

لا تستطيع الاتصال اليوم10؛ لا يقول النص إنها لا تستطيع الحضور إلى كل موعد.

**المراجع الداعمة:** INDIRECT, SEPARATE.

### listening-04

**النص:** Ich habe eine Besprechung.

لديها اجتماع؛ يوضح السياق سبب تعذر الاتصال، ولا يحدد بداية الاجتماع أو مدته.

**المراجع الداعمة:** INDIRECT, SEPARATE.

### listening-05

**النص:** Können Sie mir bitte sagen, ob der Termin am Donnerstag noch frei ist?

تسأل عن توفر الخميس بـob؛ السؤال لا يؤكد التوفر.

**المراجع الداعمة:** INDIRECT, SEPARATE.

### listening-06

**النص:** Rufen Sie mich bitte am Nachmittag zurück.

طلب معاودة الاتصال بعد الظهر؛ لا ساعة رقمية أو إثبات أن الاتصال وقع.

**المراجع الداعمة:** INDIRECT, SEPARATE.

### listening-07

**النص:** Vielen Dank.

ختام بالشكر؛ لا يضيف تفاصيل موعد.

**المراجع الداعمة:** INDIRECT, SEPARATE.

### listening-question-01

**النص:** Wer spricht?

Amal Ben Ali مذكورة بالاسم.

### listening-question-02

**النص:** Warum kann Amal um zehn Uhr nicht anrufen?

Sie hat eine Besprechung؛ سبب تعذر الاتصال لا تفاصيل الاجتماع.

### listening-question-03

**النص:** Worüber möchte sie eine Auskunft?

Ob der Termin am Donnerstag noch frei ist؛ لا نفترض الجواب نعم.

### listening-question-04

**النص:** Wann soll Herr König zurückrufen?

Am Nachmittag؛ لا نختلق ساعة مثل14 من الحوار الآخر.

### speaking-model-01

**النص:** Guten Tag, hier spricht Amal Ben Ali. Ich möchte einen Termin vereinbaren.

تحية وتعريف وطلب موعد؛ الدور الواحد قد يضم جملتين، فلا نخلط الجمل والأدوار.

**المراجع الداعمة:** INDIRECT, TERM.

### speaking-model-02

**النص:** An welchem Tag möchten Sie kommen?

سؤال عن اليوم يتيح الانتقال إلى اقتراح يوم ووقت.

**المراجع الداعمة:** INDIRECT, TERM.

### speaking-model-03

**النص:** Können Sie mir sagen, ob am Donnerstag um 14 Uhr ein Termin frei ist?

ob عن توفر الخميس14؛ الفعل ist آخر التابعة ولو لم يأت الفاعل مباشرة بعد ob.

**المراجع الداعمة:** INDIRECT, TERM.

### speaking-model-04

**النص:** Leider ist um 14 Uhr kein Termin frei. Am Donnerstag um 15 Uhr ist ein Termin frei.

رفض14 وعرض الخميس15؛ عرض البديل يسبق القبول والتأكيد.

**المراجع الداعمة:** INDIRECT, TERM.

### speaking-model-05

**النص:** Das passt mir gut. Vielen Dank.

قبول مفهوم للبديل المذكور وشكر؛ لا قبول للوقت المرفوض.

**المراجع الداعمة:** INDIRECT, TERM.

### speaking-model-06

**النص:** Ich bestätige den Termin am Donnerstag um 15 Uhr.

تأكيد صريح للخميس15 متسق مع العرض والقبول.

**المراجع الداعمة:** INDIRECT, TERM.

### writing-model-01

**النص:** Guten Tag, Frau Weber,

تحية بفاصلة كما يقتضي النمط المدروس.

**المراجع الداعمة:** INDIRECT, COMMA, TELL, MOVE.

### writing-model-02

**النص:** leider kann ich am Dienstag um 9 Uhr nicht zu unserem Termin kommen.

الجملة1: تعذر حضور الثلاثاء9، وleider صغيرة بعد التحية.

**المراجع الداعمة:** INDIRECT, COMMA, TELL, MOVE.

### writing-model-03

**النص:** Ich habe eine andere Besprechung.

الجملة2: اجتماع آخر سبب مفترض مستقل، لا حقيقة مستنتجة من البريد الأصلي.

**المراجع الداعمة:** INDIRECT, COMMA, TELL, MOVE.

### writing-model-04

**النص:** Können wir den Termin auf Mittwoch um 11 Uhr verschieben?

الجملة3: طلب بديل الأربعاء11؛ سؤال مباشر مع Können وعلامة استفهام.

**المراجع الداعمة:** INDIRECT, COMMA, TELL, MOVE.

### writing-model-05

**النص:** Bitte teilen Sie mir mit, ob der Termin möglich ist.

الجملة4: طلب جواب بـob؛ ليست صيغة استفهام رئيسي، وist في نهاية التابعة.

**المراجع الداعمة:** INDIRECT, COMMA, TELL, MOVE.

### writing-model-06

**النص:** Ich möchte wissen, wann die Besprechung endet.

الجملة5: wann لنهاية الاجتماع؛ endet مصرف ونقطة نهائية بعد الخبرية.

**المراجع الداعمة:** INDIRECT, COMMA, TELL, MOVE.

### writing-model-07

**النص:** Vielen Dank und freundliche Grüße

ختام مستقل بلا فاصلة؛ خارج الجمل الخمس المطلوبة.

**المراجع الداعمة:** INDIRECT, COMMA, TELL, MOVE.

### writing-model-08

**النص:** Amal Ben Ali

اسم خيالي للتوقيع؛ لا إرسال أو كشف هوية شخصية مطلوب.

**المراجع الداعمة:** INDIRECT, COMMA, TELL, MOVE.

### card-01

**النص:** **Ich möchte einen Termin vereinbaren.** → أود حجز موعد.

طلب موعد لا تأكيد حصوله.

**المراجع الداعمة:** INDIRECT, TERM.

### card-02

**النص:** **Können Sie mir sagen, ob …?** → هل يمكن أن تخبرني إن…؟

قالب سؤال بـob؛ يحتاج تتمة بفعل مصرف في النهاية، لا جملة مستقلة مكتملة.

**المراجع الداعمة:** INDIRECT, TERM.

### card-03

**النص:** **Ich möchte wissen, wann …** → أود أن أعرف متى…

قالب خبرية فيها سؤال غير مباشر بـwann؛ يحتاج تتمة لا علامة استفهام آلية.

**المراجع الداعمة:** INDIRECT, TERM.

### card-04

**النص:** **Der Termin passt mir gut.** → الموعد مناسب لي.

التعبير عن ملاءمة الموعد مع mir؛ لا وعد خارج السيناريو.

**المراجع الداعمة:** INDIRECT, TERM.

### DL-A2-04-T01

**النص:** 1. تعريف المتصل بنفسه: **Hier spricht Amal Ben Ali. / Hier wohnt Amal Ben Ali.**
2. طلب الانتظار: **Einen Moment, bitte. / Gute Reise!**
3. طلب حجز موعد: **Ich möchte einen Termin vereinbaren. / Ich möchte ein Zimmer nehmen.**
4. طلب معاودة الاتصال: **Können Sie mich zurückrufen? / Können Sie mich besuchen?**
5. نقل موعد قائم من الثلاثاء إلى الأربعاء: **einen Termin verschieben / einen Termin bestätigen**.

رُوجع كل بند ومفتاحه وبدائله بحسب الدليل؛ التفاصيل في items.

- **1. تعريف المتصل بنفسه: **Hier spricht Amal Ben Ali. / Hier wohnt Amal Ben Ali.**** — الجواب: Hier spricht Amal Ben Ali.. spricht يقدم المتصل؛ wohnt للسكن.
- **2. طلب الانتظار: **Einen Moment, bitte. / Gute Reise!**** — الجواب: Einen Moment, bitte.. طلب الانتظار لا تمني رحلة سعيدة.
- **3. طلب حجز موعد: **Ich möchte einen Termin vereinbaren. / Ich möchte ein Zimmer nehmen.**** — الجواب: Ich möchte einen Termin vereinbaren.. موعد لا غرفة؛ المشتت سليم لغويًا لكن وظيفته مختلفة.
- **4. طلب معاودة الاتصال: **Können Sie mich zurückrufen? / Können Sie mich besuchen?**** — الجواب: Können Sie mich zurückrufen?. معاودة اتصال لا زيارة.
- **5. نقل موعد قائم من الثلاثاء إلى الأربعاء: **einen Termin verschieben / einen Termin bestätigen**.** — الجواب: einen Termin verschieben. نقل موعد قائم؛ أضيف دعم مباشر لـQ01 بدل الاكتفاء بمفردات الدرس.

### DL-A2-04-T02

**النص:** 1. Können Sie mir sagen, ______ der Termin frei ist? (هل)
2. Ich möchte wissen, ______ die Besprechung beginnt. (متى)
3. Wissen Sie, ______ Frau Weber heute im Büro ist? (هل)
4. Können Sie mir sagen, ______ Herr König Zeit hat? (متى)

رُوجع كل بند ومفتاحه وبدائله بحسب الدليل؛ التفاصيل في items.

**المراجع الداعمة:** INDIRECT, COMMA.

- **1. Können Sie mir sagen, ______ der Termin frei ist? (هل)** — الجواب: ob. التلميح هل يحصر الاختيار في ob.
- **2. Ich möchte wissen, ______ die Besprechung beginnt. (متى)** — الجواب: wann. متى للبداية: wann، لا ob.
- **3. Wissen Sie, ______ Frau Weber heute im Büro ist? (هل)** — الجواب: ob. هل عن الوجود في المكتب: ob.
- **4. Können Sie mir sagen, ______ Herr König Zeit hat? (متى)** — الجواب: wann. متى لتوفر الوقت: wann.

### DL-A2-04-T03

**النص:** 1. **Ist Frau Weber heute da?** → Können Sie mir sagen, ob ______?
2. **Wann beginnt der Termin?** → Ich möchte wissen, wann ______.
3. **Ist Mittwoch um 11 Uhr möglich?** → Bitte teilen Sie mir mit, ob ______.

رُوجع كل بند ومفتاحه وبدائله بحسب الدليل؛ التفاصيل في items.

**المراجع الداعمة:** INDIRECT, COMMA.

- **1. **Ist Frau Weber heute da?** → Können Sie mir sagen, ob ______?** — الجواب: Frau Weber heute da ist.. Ist ينقل آخر الجزء بعد ob؛ علامته تتبع السؤال الرئيسي.
- **2. **Wann beginnt der Termin?** → Ich möchte wissen, wann ______.** — الجواب: der Termin beginnt.. begint غير صحيح؛ الصيغة beginnt آخر التابعة بعد wann.
- **3. **Ist Mittwoch um 11 Uhr möglich?** → Bitte teilen Sie mir mit, ob ______.** — الجواب: Mittwoch um 11 Uhr möglich ist.. ist آخر التابعة، وteilen…mit في الرئيسية؛ دعم مباشر لـQ04.

### DL-A2-04-T04

**النص:** 1. Ich weiß nicht, wann die Besprechung ______. (beginnen)
2. Können Sie mir sagen, ob Frau König im Büro ______? (sein)
3. Sie möchte wissen, wann der Zug ______. (fahren)

رُوجع كل بند ومفتاحه وبدائله بحسب الدليل؛ التفاصيل في items.

**المراجع الداعمة:** INDIRECT, COMMA.

- **1. Ich weiß nicht, wann die Besprechung ______. (beginnen)** — الجواب: beginnt. beginnen يتصرف beginnt مع مفرد الاجتماع.
- **2. Können Sie mir sagen, ob Frau König im Büro ______? (sein)** — الجواب: ist. sein يصبح ist؛ Frau König مثال مستقل لا تعديل لهوية Herrn König.
- **3. Sie möchte wissen, wann der Zug ______. (fahren)** — الجواب: fährt. fahren يصبح fährt مع der Zug؛ ليست fahren المصدر.

### DL-A2-04-T05

**النص:** حدّد صحيحًا أو خطأ:

1. Amal kann am Dienstag um 9 Uhr kommen.
2. Sie möchte den Termin auf Mittwoch verschieben.
3. Sie schlägt Mittwoch um 11 Uhr vor.
4. Sie möchte wissen, wann die Besprechung endet.

رُوجع كل بند ومفتاحه وبدائله بحسب الدليل؛ التفاصيل في items.

- **1. Amal kann am Dienstag um 9 Uhr kommen.** — الجواب: خطأ: لا تستطيع الحضور.. النص ينفي الحضور في ذلك الموعد؛ مفتاح خطأ مسند.
- **2. Sie möchte den Termin auf Mittwoch verschieben.** — الجواب: صحيح: Mittwoch.. تنقل إلى الأربعاء كما طلبت، لا تأكيد الموافقة.
- **3. Sie schlägt Mittwoch um 11 Uhr vor.** — الجواب: صحيح: um 11 Uhr.. الأربعاء11 وقت الاقتراح.
- **4. Sie möchte wissen, wann die Besprechung endet.** — الجواب: صحيح: wann die Besprechung endet.. تريد معرفة النهاية؛ ليست النهاية معلومة في النص.

### DL-A2-04-T06

**النص:** أكمل من البنك، واستعمل كل كلمة مرة: **Besprechung — Donnerstag — Nachmittag**.

1. Amal kann nicht anrufen. Sie hat eine ______.
2. Sie fragt, ob der Termin am ______ frei ist.
3. Herr König soll am ______ zurückrufen.

رُوجع كل بند ومفتاحه وبدائله بحسب الدليل؛ التفاصيل في items.

- **1. Amal kann nicht anrufen. Sie hat eine ______.** — الجواب: Besprechung. السبب اجتماع دون الجزم بساعة بدايته؛ أصلحت صياغة البند وفصلته.
- **2. Sie fragt, ob der Termin am ______ frei ist.** — الجواب: Donnerstag. الخميس كما في الاستماع؛ لا الأربعاء في البريد.
- **3. Herr König soll am ______ zurückrufen.** — الجواب: Nachmittag. بعد الظهر دون ساعة إضافية.

### DL-A2-04-T07

**النص:** صحح موضع الفعل في الجزء التابع فقط، مع إبقاء الكلمات والمقدمة وعلامة النهاية:

1. Ich möchte wissen, wann beginnt der Termin.
2. Können Sie mir sagen, ob ist das Büro offen?

رُوجع كل بند ومفتاحه وبدائله بحسب الدليل؛ التفاصيل في items.

**المراجع الداعمة:** INDIRECT, COMMA.

- **1. Ich möchte wissen, wann beginnt der Termin.** — الجواب: Ich möchte wissen, wann der Termin beginnt.. ننقل beginnt فقط ونبقي wann والمقدمة والنقطة.
- **2. Können Sie mir sagen, ob ist das Büro offen?** — الجواب: Können Sie mir sagen, ob das Büro offen ist?. ننقل ist فقط ونبقي ob وعلامة الاستفهام للسؤال الكلي.

### DL-A2-04-T08

**النص الكامل:** في وحدةJSON المطابقة والمصدر الأصلي.

ستة أدوار للمكالمة وثمانية مكونات للرسالة (تحية وخمس جمل وختام واسم)؛ لا خلط عدد الجمل بعدد الأدوار، ولا جهر إلزامي للرسالة.

**المراجع الداعمة:** INDIRECT, COMMA, TERM.

- **1. تحية وتعريف وطلب موعد** — الجواب: Guten Tag, hier spricht Amal Ben Ali. Ich möchte einen Termin vereinbaren.. P01 مع الجهر للجميع، والبديل يسبق القبول والتأكيد.
- **2. سؤال الموظف عن اليوم** — الجواب: An welchem Tag möchten Sie kommen?. P01 مع الجهر للجميع، والبديل يسبق القبول والتأكيد.
- **3. سؤال توفر الخميس14 بـob** — الجواب: Können Sie mir sagen, ob am Donnerstag um 14 Uhr ein Termin frei ist?. P01 مع الجهر للجميع، والبديل يسبق القبول والتأكيد.
- **4. رفض14 وعرض15 في الخميس نفسه** — الجواب: Leider ist um 14 Uhr kein Termin frei. Am Donnerstag um 15 Uhr ist ein Termin frei.. P01 مع الجهر للجميع، والبديل يسبق القبول والتأكيد.
- **5. قبول البديل** — الجواب: Das passt mir gut. Vielen Dank.. P01 مع الجهر للجميع، والبديل يسبق القبول والتأكيد.
- **6. تأكيد الخميس15 وقراءة الأدوار كلها جهرًا** — الجواب: Ich bestätige den Termin am Donnerstag um 15 Uhr.. P01 مع الجهر للجميع، والبديل يسبق القبول والتأكيد.
- **7. تحية للرسالة** — الجواب: Guten Tag, Frau Weber,. P02 كتابة فقط؛ السبب مفترض والموعد البديل طلب ينتظر الرد.
- **8. تعذر حضور الثلاثاء9** — الجواب: leider kann ich am Dienstag um 9 Uhr nicht zu unserem Termin kommen.. P02 كتابة فقط؛ السبب مفترض والموعد البديل طلب ينتظر الرد.
- **9. السبب المفترض: اجتماع آخر** — الجواب: Ich habe eine andere Besprechung.. P02 كتابة فقط؛ السبب مفترض والموعد البديل طلب ينتظر الرد.
- **10. طلب البديل الأربعاء11** — الجواب: Können wir den Termin auf Mittwoch um 11 Uhr verschieben?. P02 كتابة فقط؛ السبب مفترض والموعد البديل طلب ينتظر الرد.
- **11. طلب جواب عن الإمكان بـob** — الجواب: Bitte teilen Sie mir mit, ob der Termin möglich ist.. P02 كتابة فقط؛ السبب مفترض والموعد البديل طلب ينتظر الرد.
- **12. سؤال نهاية الاجتماع بـwann** — الجواب: Ich möchte wissen, wann die Besprechung endet.. P02 كتابة فقط؛ السبب مفترض والموعد البديل طلب ينتظر الرد.
- **13. ختام الرسالة** — الجواب: Vielen Dank und freundliche Grüße. P02 كتابة فقط؛ السبب مفترض والموعد البديل طلب ينتظر الرد.
- **14. اسم خيالي للتوقيع** — الجواب: Amal Ben Ali. P02 كتابة فقط؛ السبب مفترض والموعد البديل طلب ينتظر الرد.

### DL-A2-04-Q01

**النص:** ما معنى **einen Termin verschieben**؟

نقل موعد/تأجيله في السياق، لا تأكيده؛ T01.5 أصبح يدربه مباشرة.

**الخيارات:** تأجيل الموعد أو نقله. / تأكيد موعد. / إلغاء الهاتف.

**الجواب:** تأجيل الموعد أو نقله.

### DL-A2-04-Q02

**النص:** أي كلمة تبدأ سؤالًا غير مباشر جوابه نعم أو لا؟

ob لسؤال نعم/لا؛ wann وقت وwohin وجهة.

**الخيارات:** wann / ob / wohin

**الجواب:** ob

### DL-A2-04-Q03

**النص:** اختر الصيغة الصحيحة: Ich möchte wissen, ___.

endet مصرف في النهاية؛ enden مصدر، والتقديم المباشر لا يصلح بعد المقدمة. T03 يدرب التحويل نفسه ولو اختلف الفعل من يبدأ إلى ينتهي.

**الخيارات:** wann endet die Besprechung / wann die Besprechung enden / wann die Besprechung endet

**الجواب:** wann die Besprechung endet

### DL-A2-04-Q04

**النص:** أكمل: Bitte teilen Sie mir mit, ob Mittwoch um 11 Uhr möglich ___.

ist وحدها تكمل العبارة؛ تكرار möglich أو إضافة am لا يصح. نُقل الرابط إلى T03.3 المطابق مباشرة.

**الخيارات:** möglich ist am / ist / ist möglich

**الجواب:** ist

### DL-A2-04-Q05

**النص:** لماذا كتبت Amal الرسالة؟

السبب الوظيفي للرسالة تعذر الحضور وطلب النقل؛ لا إلغاء وظيفة أو حجز رحلة.

**الخيارات:** لا تستطيع الحضور يوم الثلاثاء وتطلب نقل الموعد. / تريد إلغاء الوظيفة. / تريد حجز رحلة إلى Bremen.

**الجواب:** لا تستطيع الحضور يوم الثلاثاء وتطلب نقل الموعد.

### DL-A2-04-Q06

**النص:** إلى أي يوم تقترح Amal نقل الموعد؟

الأربعاء في البريد لا يوم آخر؛ المفاتيح محفوظة.

**الخيارات:** إلى الاثنين. / إلى الجمعة. / إلى الأربعاء.

**الجواب:** إلى الأربعاء.

### DL-A2-04-Q07

**النص:** ماذا تعني **Einen Moment, bitte** في مكالمة؟

انتظار لحظة لا معاودة غدًا أو انعدام موعد.

**الخيارات:** أعد الاتصال غدًا. / لحظة من فضلك. / الموعد غير متاح.

**الجواب:** لحظة من فضلك.

### DL-A2-04-Q08

**النص:** أي سؤال ترتيبه صحيح؟

المقدمة Können Sie mir sagen صحيحة وist في نهاية التابعة؛ المشتتان يخالفان ترتيبها.

**الخيارات:** Können Sie mir sagen, ob das Büro offen ist? / Können Sie mir sagen, ob ist das Büro offen? / Können Sie sagen mir, ob das Büro ist offen?

**الجواب:** Können Sie mir sagen, ob das Büro offen ist?

### DL-A2-04-Q09

**النص:** أي عبارة تقدم المتحدثة على الهاتف؟

Hier spricht تعريف بالنفس؛ الرابط T01.1 أوضح من الإنتاج المفتوح T08.

**الخيارات:** Ich bin ein Termin. / Der Termin telefoniert. / Hier spricht Amal Ben Ali.

**الجواب:** Hier spricht Amal Ben Ali.

### DL-A2-04-Q10

**النص:** كيف تطلب بأدب أن يعاود شخص الاتصال بك؟

طلب معاودة اتصال: mich مفعول والمصدر في النهاية بعد können؛ الرابط T01.4 بدل T08.

**الخيارات:** Rufen Sie ich zurück? / Können Sie mich zurückrufen? / Sie zurückrufen mich?

**الجواب:** Können Sie mich zurückrufen?

### DL-A2-04-P01

**النص:** اكتب ستة أدوار متناوبة لمكالمة خيالية بين Amal وموظف: الدور 1 تحية وتعريف بالنفس وطلب موعد؛الدور 2 يسأل عن اليوم؛الدور 3 تسأل Amal بـ Können Sie mir sagen, ob عن توفر الخميس الساعة 14؛الدور 4 يعتذر الموظف عن عدم توفر 14 ويقترح 15 في الخميس نفسه؛الدور 5 تقبل Amal الساعة 15؛الدور 6 يؤكد الموظف الخميس 15. اكتب لكل دور قولًا قصيرًا (قد يضم أكثر من جملة)، ثم اقرأ الأدوار الستة بصوت مرتفع. يمكنك أداء الطرفين منفردًا؛لا مكالمة حقيقية أو تسجيل مطلوب.

مطابقة حرفية لتدريب T08 مع مودالية ونموذج ومعايير متسقة؛ الطول والإقرار لا يصححان اللغة أو النطق.

### DL-A2-04-P02

**النص:** اكتب رسالة خيالية مستقلة إلى Frau Weber، كتابة فقط: تحية، ثم خمس جمل في المتن، ثم ختام واسم خيالي. الجملة 1 تعتذر عن عدم حضور موعد الثلاثاء 9؛الجملة 2 تعطي السبب المفترض في هذا التدريب: لديك اجتماع آخر؛الجملة 3 تطلب نقل الموعد إلى الأربعاء 11؛الجملة 4 تطلب إبلاغك بـ ob إن كان البديل ممكنًا؛الجملة 5 تسأل بـ Ich möchte wissen, wann عن نهاية الاجتماع. اجعل الفعل في نهاية كل جزء تابع وافصله بفاصلة؛لا تدّع أن البديل تأكد. لا تستنتج سبب البريد الأصلي من هذه المهمة، ولا يلزم الجهر أو إرسال الرسالة.

مطابقة حرفية لتدريب T08 مع مودالية ونموذج ومعايير متسقة؛ الطول والإقرار لا يصححان اللغة أو النطق.

### DL-A2-04-AUD-PHR-01

**النص:** Das Gespräch. Die Nachricht. Der Anruf. Die Durchwahl. Die Besprechung. Der Kalender. Der Termin. Frei oder besetzt. Verschieben. Absagen. Bestätigen. Zurückrufen. Vereinbaren. Mitteilen. Guten Tag, hier spricht Amal Ben Ali. Kann ich bitte mit Frau Weber sprechen? Einen Moment, bitte. Sie ist gerade in einer Besprechung. Kann sie mich bitte zurückrufen? Ich möchte einen Termin vereinbaren. Der Termin passt mir gut. Können Sie mir sagen, ob Frau Weber heute im Büro ist? Ich möchte wissen, wann die Besprechung beginnt. Wissen Sie, ob der Termin noch frei ist?

نص قائم محفوظ مع الصوت والمسار والحالة. تفريغ القراءة يقابل المصدر مع تحويل 9/11 إلى neun/elf واختلاف ترقيم التحية والختام؛ لا تعديل للصوت أو تفريغه.

- **1. Das Gespräch.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **2. Die Nachricht.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **3. Der Anruf.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **4. Die Durchwahl.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **5. Die Besprechung.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **6. Der Kalender.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **7. Der Termin.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **8. Frei oder besetzt.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **9. Verschieben.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **10. Absagen.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **11. Bestätigen.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **12. Zurückrufen.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **13. Vereinbaren.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **14. Mitteilen.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **15. Guten Tag, hier spricht Amal Ben Ali.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **16. Kann ich bitte mit Frau Weber sprechen?** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **17. Einen Moment, bitte.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **18. Sie ist gerade in einer Besprechung.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **19. Kann sie mich bitte zurückrufen?** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **20. Ich möchte einen Termin vereinbaren.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **21. Der Termin passt mir gut.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **22. Können Sie mir sagen, ob Frau Weber heute im Büro ist?** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **23. Ich möchte wissen, wann die Besprechung beginnt.** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.
- **24. Wissen Sie, ob der Termin noch frei ist?** — مطابقة نصية للمفردة أو المثال في المصدر؛ Frei oder besetzt تقابل صيغة الشرطة المائلة في الجدول. لا استماع أو توليد جديد.

### DL-A2-04-AUD-DLG-01

**النص:** Guten Tag, hier spricht Amal Ben Ali. Ich möchte einen Termin mit Herrn König vereinbaren.
Guten Tag. Einen Moment, bitte. Herr König ist gerade in einer Besprechung.
Können Sie mir sagen, wann er Zeit hat?
Am Donnerstag um 14 Uhr.
Wissen Sie, ob der Termin online ist?
Ja, die Besprechung ist online.
Das passt mir gut. Vielen Dank.

نص قائم محفوظ مع الصوت والمسار والحالة. تفريغ القراءة يقابل المصدر مع تحويل 9/11 إلى neun/elf واختلاف ترقيم التحية والختام؛ لا تعديل للصوت أو تفريغه.

### DL-A2-04-AUD-READ-01

**النص:** Guten Tag, Frau Weber. Leider kann ich am Dienstag um neun Uhr nicht zu unserem Termin kommen. Können wir den Termin auf Mittwoch verschieben? Bitte teilen Sie mir mit, ob Mittwoch um elf Uhr möglich ist. Ich möchte auch wissen, wann die Besprechung endet. Vielen Dank und freundliche Grüße. Amal Ben Ali.

نص قائم محفوظ مع الصوت والمسار والحالة. تفريغ القراءة يقابل المصدر مع تحويل 9/11 إلى neun/elf واختلاف ترقيم التحية والختام؛ لا تعديل للصوت أو تفريغه.

### DL-A2-04-AUD-LST-01

**النص:** Guten Morgen, Herr König. Hier ist Amal Ben Ali. Ich kann heute um zehn Uhr nicht anrufen. Ich habe eine Besprechung. Können Sie mir bitte sagen, ob der Termin am Donnerstag noch frei ist? Rufen Sie mich bitte am Nachmittag zurück. Vielen Dank.

نص قائم محفوظ مع الصوت والمسار والحالة. تفريغ القراءة يقابل المصدر مع تحويل 9/11 إلى neun/elf واختلاف ترقيم التحية والختام؛ لا تعديل للصوت أو تفريغه.

## حدود النتيجة

عدّ38 يشمل بنود التمارين ومكونات الإنتاج؛عباراتPHR الأربع والعشرون داخل أصلها ولا تضاف لهذا العدد. التحقق الذاتي والاختبارات الآلية لا يمنحان شهادة لغة أو نطق أوCEFR/WCAG. الحملة21/53 والبوابة منفصلة؛تبقى32 درسًا. التاليA2.5؛لا دمج أو إعلان اكتمال المنهج.
