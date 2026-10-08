# CR37 — مراجعة B1.7: أساليب الحياة والعادات والثقافات والروابط الثنائية

رُوجع **B1.7 — أساليب الحياة والعادات والثقافات: الروابط الثنائية** في **114 وحدة و45 بندًا أو مطلبًا داخل التمارين**، مع **30 خيار تقييم و6 معايير و20 صفحة مرجعية كاملة في23 جزءًا**. قُيدت مقاصد T02/T03، ودُعمت الأسئلة في تمارينها. صُحح Q10 إلى **عدم الإلزام بالتمثيل**، لا نفي حدوثه؛ Q03 يحدد معنى الإضافة، وQ06 يطلب موضع الضمير المحايد. **P01 خمس جمل كتابة فقط؛ P02 ستة أدوار كتابة وجهر**، بمصدر ومعايير ونموذجين متطابقة. بقيت29 صيغة خيار والفهارس والروابط و80% وحد160 ثابتة. الإصدار `b1-07-v2` والمخزن `v85`؛ خمسة أصول/12 مقطعًا ثابتة بلا استماع أو توليد أو اعتماد جديد. **الحملة36/53 درسًا والبوابة منفصلة؛ تبقى17، والتالي CR38/B1.8.** هذا سجل نصي مفحوص، لا دمج أو اكتمال المشروع أو شهادة مستوى.

**التاريخ:**2026-10-08. **التنفيذ المرفوع:**`5fb2d98671b6b9bae5b54a5c5610baa4059d70bc` على`arena/01a1036f-deutschlern`. PR#1 مفتوحة وغير مدمجة. نشر التنفيذ توقف بحدVercel؛ ليس نشرProduction. تقرير المراجعة يُرفع فور فحص مجموعته ثم يوثَّق إيصال الرفع.

## أبرز التصحيحات

- T01 يدرب المراعاة المتبادلة مباشرة؛T02/T03 يحددان المقصد ويقدمان دعمًا للأسئلة المرتبطة.
- Q03 يصرح بمعنى الإضافة، وQ06 يميز الترتيب المحايد للضمير؛Q10 يصحح«لا يفعل أحد» إلى«لا يُلزم أحد». تغير خيار واحد فقط وبقيت الفهارس والروابط.
- P01 كتابة خمس جمل،وP02 كتابة ستة أدوار ثم جهر؛ كلاهما خيالي ومطابق للمصدر والمعايير، دون شريك أو تسجيل.
- جمع Austausch موجود معجميًا؛ قُيدت شرطة الجدول كتابيًا دون مساس بالصوت. النصوص تفصل الأشخاص والأوقات وتتجنب التعميم الثقافي.

## الفحوص التراكمية — CR37

- **PASS:** البناء والتحقق و37 حارس مراجعة وخمس مجموعاتNode وسلامةJS وgit diff؛ الحزمة **2,081,619 بايت**. التحقق:53 درسًا،428 عنوان تمرين،61 قسم حوار،754 مفردة،530 سؤال درس+10 بوابة،109 مهمات،1080 صفcatalog،217 أصلًا/474 MP3،137ready و80 معلقة.
- **المتصفح:** Chromium143.0.7499.0، Playwright1.58.2، axe4.11.0؛ المجموعات الخمس browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout نجحت. فحص1440×900 و390×844، RTL والقفل والتنقل والتفريغات وتشغيلMP3 آليًا بسرعتي1 و0.8 والتوقف عند الانتقال؛ لا أخطاء صفحة في الاختبارات العامة.
- **دون اتصال:** إعادة التحميل والتنقل وMP3 الكامل ونطاقات البايت/اللاحقة و416/503؛ تحديثfixture v42 إلىv85 دون إعادة تحميل قسرية، وحفظ التقدم والإجابات وعزل المخازن وإعادة تخزين الصوت المفقود عند الاتصال. ليس ضمانًا لبقاء كل الصوت مخزنًا أو اختبارًا لكل ترحيل تاريخي.
- **الدليل والتدرج:** سجلB1.7 القديمv1 يبقى محفوظًا دون منحه إتقانv2 أو فتحB1.8؛ المسودة القديمة مرفوضة. الدرجة والدليل الحاليان يفتحان التالي، وحذف الدليل يغلقه. مربع الجهر غائب عنP01 ومطلوب فيP02؛ الإقرارات الثلاثة وحد160 لازمة. النموذجان270/350 حرفًا؛ لا يعد التطبيق الجمل والأدوار أو يصحح اللغة والنطق آليًا.
- **axe:**161 حالة ممثلة، صفر مخالفات للقواعد الآلية المختارة؛ **112 ظهورًا غير حاسم تشمل256 ظهورًا لعقد**. هذا ليس اجتيازWCAG كاملًا؛ النتائج غير الحاسمة ليست مخالفات مؤكدة أو عملًا يُشترط له مراجع بشري قبل الاستمرار.
- **العرض الضيق:**126 حالة،63 عند320×900 و63 عند568×320، تشمل53 درسًا وتفريغاتها والجداول والقائمة. ليست اختبارات هاتف فعلي أو تكبير أصلي للمتصفح.
- **التعثر والإصلاح البيئي:** أول تشغيلChromium فشل قبل فتح التطبيق بسببlibnspr4.so مفقودة؛ استُخرجت مكتباتal2023 المصاحبة في/tmp وضُبطLD_LIBRARY_PATH، ثم نجحت المجموعات الخمس. لم يُعدل التطبيق أو الاختبار بسبب ذلك. forms_keyboard نجح من أول تنفيذ بعد تجهيز المتصفح؛ تذبذبnative chooser التاريخي غير محلول ولا سبب مثبت له.
- **الصوت:** تشغيل آلي صامت ومطابقة تفريغات وبنيةMP3، لا استماع أو اعتماد جديد. الملفات والأصوات والتوفر في الدرس محفوظة. الواجهة البعيدة وProduction لم تختبرا.

## الحفظ والحدود

مقارنة بالأساس`e9e8ba23e1de795f90432496c9daaa06b111d1f6`:52 درسًا آخر وكل المفاتيح الأخرى ثابتة؛1060 صفcatalog و212 صفaudio-register ثابتة، وخمسة صفوفB1.7 تغيرت فيsource_line فقط. حُفظت590 ملفًا محميًا تشمل474MP3، وplaylist مطابقة بالبايت. لم تتغير أصولB1.7 الخمسة/12 مقطعًا، أوأصواتLaila02/Omar03 والرواة02/03. نموذجا الأداء270/350 حرفًا غير مسجلين.

- مراجعة مصدرية نصية بالذكاء الاصطناعي، لا شهادة CEFR أو تقييم متعلم حقيقي.
- لا استماع أو توليد أو اعتماد صوتي جديد؛ لم تُفتح موارد AIE أو PDF أو صوت Duden المرتبط.
- الحارس يثبت التغطية والمطابقة، ولا يثبت وحده صحة اللغة أو جودة المصادر.
- 161 حالةaxe تمثل الشاشات المختبرة، لا كل الاحتمالات أو شهادةWCAG؛112 ظهورًا غير حاسم تشمل256 ظهورًا لعقد، وليست مخالفات مؤكدة.
- تشغيل MP3 آلي صامت لا مراجعة سمعية لكل ملف؛ مقاساتCSS ليست هاتفًا فعليًا أو تكبيرًا أصليًا.
- اختبار تحديث عامل الخدمة منfixture v42 إلىv85 لا يثبت كل مسار ترحيل تاريخي أوProduction.
- الحروف والإقرارات ليست تصحيحًا آليًا لعدد الجمل أو الدقة أو التعميم الثقافي أو النطق؛ لا مراجع بشري شرطًا للاستمرار.
- Alltagsroutine: صفحةDuden المباشرة لم توجد؛ استُخدم مدخلRoutine للرأس الصرفي فقط، ولم ينسب للمصدر تعريف مركب لم يعرضه.

## المراجع المقروءة ونطاق استخدامها

- **V2 — [Lingolia — Hauptsätze](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)**: المصرف في الموقع الثاني للرئيسية الخبرية، والفاعل بعده عند تقديم عنصر آخر؛ ترتيب بعض العناصر يتأثر بالمعلومة والنبر، فلا نحكم على كل ترتيب معلّم بأنه مستحيل. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **BOTH — [Duden — sowohl](https://www.duden.de/rechtschreibung/sowohl)**: تنسيق عناصر متكافئة بـ sowohl … als/wie [auch]؛ المصدر يذكر التوافق الجمعي والمفرد الأقل شيوعًا في مثاله، فلا نعمم صيغة واحدة على كل فاعلين مفردين. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **NEITHER — [Duden — weder](https://www.duden.de/rechtschreibung/weder)**: نفي العنصرين وربط عناصر أو جمل؛ مثال المصدر يسمح في سياقه بمفرد أو جمع، فلا ننقل قاعدة جمع مطلقة إلى كل روابط الدرس. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **EITHER — [Duden — entweder](https://www.duden.de/rechtschreibung/entweder)**: اختيار أحد بديلين؛ قد يسبق entweder المصرف أو الفاعل بحسب البناء. التمرين يقيد المقصد، لا يفرض موضعًا واحدًا في كل جملة. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **CARE — [Duden — Rücksicht](https://www.duden.de/rechtschreibung/Ruecksicht)**: مراعاة حاجات ومشاعر الآخرين، غالبًا مفرد في هذا المعنى؛ يرد الجمع Rücksichten في معانٍ واستعمالات أخرى. الشرطة في جدولنا مقيدة بالسياق. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **USED — [Duden — gewöhnen](https://www.duden.de/rechtschreibung/gewoehnen)**: الانعكاسي مع an وصيغ gewöhnt/gewöhnte/hat gewöhnt؛ أمثلة المصدر على الاعتياد على شخص أو صفاته. الحالة هنا ليست اختيار موقع مكاني. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **EXCHANGE — [Duden — Austausch](https://www.duden.de/rechtschreibung/Austausch)**: تبادل خبرات وأفكار؛ الجمع Austäusche/Austausche موجود. صُحح إيحاء الشرطة في الدرس بتوضيح مكتوب، دون تغيير النص المنطوق. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **AIE — [Council of Europe — Autobiography of Intercultural Encounters](https://www.coe.int/en/web/autobiography-intercultural-encounters)**: صفحة مقدمة الموارد: التأمل في اللقاءات والخبرات الشخصية ووعي الاستجابات. لم تُقرأ الأدوات أو ملفات PDF المرتبطة؛ ليست إثباتًا لوقائع القصة أو شهادة CEFR أو بحثًا عن شعب بعينه. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **SUB — [Lingolia — Konjunktionalsätze](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)**: المصرف آخر الجملة التابعة؛ wenn شرطية بحسب السياق، كما في wenn sie möchten. لا نقول إن الروابط الثنائية كلها أدوات تابعة أو تغير المصرف إلى النهاية. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **COMMA — [Lingolia — Kommaregeln](https://deutsch.lingolia.com/de/kommaregeln)**: استُخدم باب الروابط بين الكلمات والعبارات: فاصلة قبل sondern، لا لمجرد either/neither بين عنصرين. ربط جمل كاملة له أحكام أخرى. لم تُنقل أحكام صفحة المصدر عن المصدر الموسع مع zu أو أبواب أخرى خارج نطاق هذا الدرس. قرئت كاملة في 4 جزء/أجزاء بتاريخ 2026-10-08.
- **STYLE — [Duden — Lebensstil](https://www.duden.de/rechtschreibung/Lebensstil)**: المذكر Lebensstil وجمعه Lebensstile ومعنى أسلوب الحياة؛ لا يلزم ربطه بجنسية. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **ROUTINE — [Duden — Routine](https://www.duden.de/rechtschreibung/Routine)**: مؤنث، وجمعه Routinen؛ مصدر للرأس Routine لا صفحة موثقة للمركب Alltagsroutine. اشتقاق المركب ومعنى الروتين اليومي مراجعة صرفية سياقية؛ لا نعمم الدلالة القدحية لبعض معاني Routine على كل روتين. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **ENCOUNTER — [Duden — Begegnung](https://www.duden.de/rechtschreibung/Begegnung)**: لقاء؛ مؤنث وجمع Begegnungen. المعنى الرياضي وارد لكن ليس المقصود في عنوان مفردات الحياة الاجتماعية. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **GROUP — [Duden — Gemeinschaft](https://www.duden.de/rechtschreibung/Gemeinschaft)**: جماعة متصلة بقواسم مشتركة، ومؤنث وجمع Gemeinschaften؛ معنى العيش المشترك المجرد قد يكون دون جمع. لا تختزل الكلمة في أمة أو دين. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **VARIETY — [Duden — Vielfalt](https://www.duden.de/rechtschreibung/Vielfalt)**: مؤنث ومعنى كثرة الأنواع والأشكال؛ الصفحة لا تقدم جمعًا في المدخل المقروء. الشرطة تعليمية في هذا الاستعمال. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **TRADITION — [Duden — Tradition](https://www.duden.de/rechtschreibung/Tradition)**: مؤنث وجمع Traditionen؛ ما تتناقله جماعة أو يستقر عرفًا، وليس صفة واحدة مفروضة على كل أفراد أي بلد. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **APPOINTMENT — [Duden — Verabredung](https://www.duden.de/rechtschreibung/Verabredung)**: مؤنث وجمع Verabredungen للاتفاقات واللقاءات؛ عملية الاتفاق بوصفها مجردًا قد تكون دون جمع، ولا يلزم أن يكون اللقاء عاطفيًا. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **INDIVIDUAL — [Duden — individuell](https://www.duden.de/rechtschreibung/individuell)**: صفة: متعلق بخصوصية الفرد أو ملائم له؛ ليست مرادفًا للأنانية أو العزلة. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **TOGETHER — [Duden — gemeinsam](https://www.duden.de/rechtschreibung/gemeinsam)**: صفة تستعمل أيضًا استعمالًا ظرفيًا: مشترك أو معًا بحسب السياق؛ ترجمة معًا تلائم أفعال الحوار. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.
- **DIFFERENT — [Duden — unterschiedlich](https://www.duden.de/rechtschreibung/unterschiedlich)**: صفة: غير متساوٍ أو مختلف؛ لا حكم بقيمة الأشخاص أو ترتيب الثقافات. قرئت كاملة في 1 جزء/أجزاء بتاريخ 2026-10-08.

**صفحات مستبعدة، لا تُعد مصادر:**
- https://www.duden.de/rechtschreibung/sondern — أعيدت صفحة غير موجودة، فاستبعدت من عدد المراجع والاستدلال.
- https://www.duden.de/rechtschreibung/sondern_Konjunktion — أعيدت صفحة غير موجودة، فاستبعدت من عدد المراجع والاستدلال.
- https://deutsch.lingolia.com/de/grammatik/satzbau/konjunktionalsatz — أعيدت صفحة غير موجودة، فاستبعدت من عدد المراجع والاستدلال.
- https://deutsch.lingolia.com/de/grammatik/satzbau/konjunktionalsaetze — أعيدت صفحة غير موجودة، فاستبعدت من عدد المراجع والاستدلال.
- https://www.duden.de/rechtschreibung/Alltagsroutine — أعيدت صفحة غير موجودة، فاستبعدت من عدد المراجع والاستدلال.

## الوحدات الفردية — 114 وحدة

التقسيم:7 نطاقات،14 مفردة،4 صفوف روابط،5 أمثلة مسجلة،10 مساعدات،8 أدوار حوار،8 جمل قراءة و6 أسئلة،6 جمل استماع و5 أسئلة،8 تمارين،10 أسئلة تقييم،مهمتا أداء،11 جملة/دور نموذجي،5 بطاقات،5 أصول صوتية. التكرار بين المثال والأصل الصوتي مقصود لفحص التعليم والمطابقة كلٍّ على حدة. بنودالتمارين45 بتوزيع5/7/6/3/5/5/3/11، ولا تدخل ضمنعددالوحدات114 مرةثانية.

### scope-01

**المدة المقترحة:** 40–45 دقيقة، ويمكن تقسيم العمل · **المهارات:** قراءة، استماع اختياري، قواعد، مقارنة عادات، كتابة وجهر

**نتيجة المراجعة:** المدة اقتراح يقبل التقسيم؛ الاستماع ليس شرطًا مستقلًا للإتقان، لكن P02 تتطلب الجهر الذاتي. لا قياس زمني لقارئ حقيقي.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### scope-02

**الهدف:** أستطيع أن أقارن عادات لأشخاص أو مجموعة محددة، وأحافظ على توازي عناصرها باستخدام الروابط الثنائية **sowohl … als auch** و**nicht nur … sondern auch** و**entweder … oder** و**weder … noch**، من دون تعميم ثقافي.

**نتيجة المراجعة:** هدف يقارن أشخاصًا محددين بالروابط الأربعة دون تمثيل شعب؛P01 تختبر ثلاثًا و P02 تعيد الإضافة والاختيار. ليس اعتمادًا رسميًا لمستوى B1.


**مصادر القاعدة/المنهج:** [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder)

### scope-03

تنبيه مفردات: الشرطة في خانة الجمع تعني أننا لا ندرّس جمعًا في هذا الاستعمال، لا أنه مستحيل في كل سياق. يورد Duden لـ Austausch الصيغتين **Austäusche / Austausche**، لكن المقصود هنا تبادل الخبرات بوصفه عملية. هذه إضافة مكتوبة؛ التسجيل الموجود ينطق **Der Austausch** فقط.

**نتيجة المراجعة:** استدراك معجمي: Austausch له جمعان موثقان؛ الشرطة ليست نفيًا عامًا للجمع. نص الصوت المفرد محفوظ، والتوضيح غير مسجل.


**مصادر القاعدة/المنهج:** [EXCHANGE](https://www.duden.de/rechtschreibung/Austausch), [CARE](https://www.duden.de/rechtschreibung/Ruecksicht)

### scope-04

تربط هذه التركيبات عناصر متوازية في الوظيفة والمعنى: اسمين أو عبارتين أو جزأين من الكلام بحسب النمط. في أمثلتنا نحدد أولًا هل المقصود إضافة الأمرين أم اختيار أحدهما أم نفيهما، ثم نحافظ على جزأي الرابط والحالة الإعرابية المناسبة.

**نتيجة المراجعة:** التوازي وظيفي وليس وجوب كلمتين منفردتين دائمًا؛ الحوار يربط جزأين بفاعل وفعل. اختيار الرابط يبدأ بالمقصد.


**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder)

### scope-05

في مثال **Sowohl die Nachbarn als auch die Gäste helfen beim Fest.** الاسمان Nachbarn و Gäste جمع، ولذلك نستخدم **helfen**. لا نعمم كل تفاصيل التوافق على فاعلين مفردين أو على كل رابط ثنائي آخر. ولا نضيف **nicht** أو **kein** إلى **weder … noch** لنفي الاسمين مرة ثانية في النمط البسيط المدروس.

**نتيجة المراجعة:** Nachbarn و Gäste كلاهما جمع؛ helfen لازم هنا. لا تعميم للتوافق على فاعلين مفردين أو روابط أخرى؛ منع النفي المكرر مقيد بهذا النمط البسيط.


**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [NEITHER](https://www.duden.de/rechtschreibung/weder)

### scope-06

دليل التطبيق: اكتب لكل مهمة 160 حرفًا على الأقل وراجع الإقرارات الثلاثة. حد الحروف لا يحسب الجمل أو الأدوار آليًا؛ P02 وحدها تحتاج تأكيد الجهر، ولا يلزم تسجيل الصوت.

**نتيجة المراجعة:** لكل P حد 160 حرفًا وثلاثة إقرارات. P01 لا جهر فيها و P02 تتطلبه؛ التطبيق لا يعد الجمل ولا يصحح المعنى أو النطق، ولا يتطلب ملف صوت.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### scope-07

النموذجان مكتوبان خياليان وغير مسجلين. الأسماء لا تمثل ثقافة أو بلدًا، والمواعيد بيانات لغوية لا التزامات حقيقية. لا يلزم نسخ النموذج، بل تحقيق المطالب بعبارات سليمة؛ الحروف والإقرارات لا تصحح المحتوى آليًا.

**نتيجة المراجعة:** النموذجان أصليان مكتوبان غير مسجلين؛ الأسماء والأيام عناصر خيال تعليمي، لا أدلة ثقافية أو التزامات. لا يلزم التطابق اللفظي مع النموذج.


**مصادر القاعدة/المنهج:** [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### vocab-01

| der Lebensstil | die Lebensstile | أسلوب الحياة |

**نتيجة المراجعة:** der Lebensstil وجمعه die Lebensstile مطابقان للمدخل؛ أسلوب الحياة معنى مناسب لا جنسية محددة.


**مصادر القاعدة/المنهج:** [STYLE](https://www.duden.de/rechtschreibung/Lebensstil)

### vocab-02

| die Alltagsroutine | die Alltagsroutinen | الروتين اليومي |

**نتيجة المراجعة:** die Alltagsroutine وجمعها die Alltagsroutinen مركب برأس Routine. مدخل المركب لم يوجد؛ مرجع Routine يثبت جنس الرأس وجمعه فقط، ولا ندعي أنه يعرّف المركب كاملًا.


**مصادر القاعدة/المنهج:** [ROUTINE](https://www.duden.de/rechtschreibung/Routine)

### vocab-03

| die Begegnung | die Begegnungen | لقاء |

**نتيجة المراجعة:** die Begegnung وجمع Begegnungen: لقاء في هذا السياق، لا مباراة رياضية.


**مصادر القاعدة/المنهج:** [ENCOUNTER](https://www.duden.de/rechtschreibung/Begegnung)

### vocab-04

| der Austausch | — | تبادل / حوار |

**نتيجة المراجعة:** der Austausch هنا تبادل/حوار خبرات؛ الشرطة قُيدت في تنبيه لأن الجمع Austäusche/Austausche موجود.


**مصادر القاعدة/المنهج:** [EXCHANGE](https://www.duden.de/rechtschreibung/Austausch)

### vocab-05

| die Gemeinschaft | die Gemeinschaften | جماعة / مجتمع |

**نتيجة المراجعة:** die Gemeinschaft وجمع Gemeinschaften: جماعة/مجتمع بحسب الاستعمال؛ لا مرادف مطلقًا للبلد.


**مصادر القاعدة/المنهج:** [GROUP](https://www.duden.de/rechtschreibung/Gemeinschaft)

### vocab-06

| die Vielfalt | — | التنوّع |

**نتيجة المراجعة:** die Vielfalt: التنوع، والشرطة مقبولة للاستعمال المجرد المعروض؛ ليست نقصًا يلزم إصلاحه في MP3.


**مصادر القاعدة/المنهج:** [VARIETY](https://www.duden.de/rechtschreibung/Vielfalt)

### vocab-07

| die Tradition | die Traditionen | تقليد |

**نتيجة المراجعة:** die Tradition وجمع Traditionen: تقليد متوارث أو عرف، لا إلزام كل أفراد جماعة بعادة واحدة.


**مصادر القاعدة/المنهج:** [TRADITION](https://www.duden.de/rechtschreibung/Tradition)

### vocab-08

| die Verabredung | die Verabredungen | موعد / اتفاق على لقاء |

**نتيجة المراجعة:** die Verabredung وجمع Verabredungen: موعد أو اتفاق على لقاء؛ لا نخصصه بعلاقة عاطفية.


**مصادر القاعدة/المنهج:** [APPOINTMENT](https://www.duden.de/rechtschreibung/Verabredung)

### vocab-09

| die Rücksicht | — | مراعاة الآخرين |

**نتيجة المراجعة:** die Rücksicht: مراعاة الآخرين؛ غالبًا مفرد في هذا المعنى، مع وجود Rücksichten في سياقات أخرى.


**مصادر القاعدة/المنهج:** [CARE](https://www.duden.de/rechtschreibung/Ruecksicht)

### vocab-10

| sich gewöhnen an + Akkusativ | gewöhnt sich | يعتاد على |

**نتيجة المراجعة:** sich gewöhnen an مع Akkusativ؛ gewöhnt sich صيغة غائب مفرد. لا نحذف sich ولا نقيس an على ظروف المكان.


**مصادر القاعدة/المنهج:** [USED](https://www.duden.de/rechtschreibung/gewoehnen)

### vocab-11

| Rücksicht nehmen auf + Akkusativ | nimmt Rücksicht | يراعي |

**نتيجة المراجعة:** Rücksicht nehmen auf مع Akkusativ؛ nimmt Rücksicht صيغة مفرد مناسبة. aufeinander يضيف التبادل في العبارة المسجلة وبطاقة Q01.


**مصادر القاعدة/المنهج:** [CARE](https://www.duden.de/rechtschreibung/Ruecksicht)

### vocab-12

| individuell | — | فردي / خاص بكل شخص |

**نتيجة المراجعة:** individuell صفة تعني فردي/خاص بكل شخص؛ الشرطة ليست جمع اسم ولا تجعل الفردية أنانية.


**مصادر القاعدة/المنهج:** [INDIVIDUAL](https://www.duden.de/rechtschreibung/individuell)

### vocab-13

| gemeinsam | — | معًا |

**نتيجة المراجعة:** gemeinsam معًا في السياق الفعلي؛ المدخل صفة قد تستعمل ظرفيًا، فلا ندعي أنها ظرف فقط.


**مصادر القاعدة/المنهج:** [TOGETHER](https://www.duden.de/rechtschreibung/gemeinsam)

### vocab-14

| unterschiedlich | — | مختلف / متنوّع |

**نتيجة المراجعة:** unterschiedlich مختلف/متنوع، لا حكم تفاضلي أو وصف ثابت لكل جماعة.


**مصادر القاعدة/المنهج:** [DIFFERENT](https://www.duden.de/rechtschreibung/unterschiedlich)

### connector-01

| **sowohl … als auch** | كلا … و… أيضًا | **Mina besucht sowohl einen Sprachkurs als auch einen Kochkurs.** — تحضر مينا دورة لغة ودورة طبخ أيضًا. |

**نتيجة المراجعة:** الإضافة تشمل العنصرين دون اشتراط التزامن؛ كلا … و… أيضًا ترجمة تعليمية، ولا تُقصر sowohl على شكل واحد في كل استعمال.


**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl)

### connector-02

| **nicht nur … sondern auch** | ليس … فقط، بل … أيضًا | **Samir liest nicht nur Nachrichten, sondern auch Romane.** — لا يقرأ سمير الأخبار فقط، بل الروايات أيضًا. |

**نتيجة المراجعة:** nicht nur تثبت الأول وتضيف الثاني مع sondern auch؛ الفاصلة قبل sondern محفوظة. لا نخلطها بـ nicht … sondern الاستدراكية النافية للأول.


**مصادر القاعدة/المنهج:** [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### connector-03

| **entweder … oder** | إمّا … أو | **Am Freitag treffen wir uns entweder im Park oder im Café.** — نلتقي يوم الجمعة إمّا في الحديقة أو في المقهى. |

**نتيجة المراجعة:** الاختيار هنا بين موقعين للقاء الجمعة؛ لا يفيد الذهاب إلى كليهما أو ينفيهما.


**مصادر القاعدة/المنهج:** [EITHER](https://www.duden.de/rechtschreibung/entweder)

### connector-04

| **weder … noch** | لا … ولا | **Ich trinke am Abend weder Kaffee noch schwarzen Tee.** — لا أشرب قهوة ولا شايًا أسود في المساء. |

**نتيجة المراجعة:** نفي المشروبين في المساء؛ لا يلزم منه حكم على اليوم كله أو ضرورة إضافة nicht.


**مصادر القاعدة/المنهج:** [NEITHER](https://www.duden.de/rechtschreibung/weder)

### grammar-01

Mina besucht sowohl einen Sprachkurs als auch einen Kochkurs.

**نتيجة المراجعة:** Mina فاعل مفرد و besucht مصرف؛ einen Sprachkurs و einen Kochkurs مفعولان منصوبان متوازيان. تشمل الدورتين دون فرض تزامن.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [BOTH](https://www.duden.de/rechtschreibung/sowohl)

### grammar-02

Samir liest nicht nur Nachrichten, sondern auch Romane.

**نتيجة المراجعة:** Samir مفرد و liest مصرف؛ الأخبار والروايات مثبتتان. Nachricht/News هنا Nachrichten، ولا نغيره إلى Sachbücher من المهمة الجديدة.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### grammar-03

Am Freitag treffen wir uns entweder im Park oder im Café.

**نتيجة المراجعة:** Am Freitag عنصر وقت مقدم و treffen في الموقع الثاني ثم wir؛ im Park/im Café عبارتا مكان، واختيار موضع واحد لا ادعاء يومين.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [EITHER](https://www.duden.de/rechtschreibung/entweder)

### grammar-04

Ich trinke am Abend weder Kaffee noch schwarzen Tee.

**نتيجة المراجعة:** Ich trinke رئيسية خبرية؛ weder/noch تنفيان Kaffee و schwarzen Tee مساءً. النهاية-en في Tee المنصوب محفوظة لاحقة للصفة، وليست جزءًا من الرابط.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [NEITHER](https://www.duden.de/rechtschreibung/weder)

### grammar-05

Sowohl die Nachbarn als auch die Gäste helfen beim Fest.

**نتيجة المراجعة:** Sowohl die Nachbarn als auch die Gäste فاعلان جمع؛ helfen صحيح، ولا نحوله إلىقاعدة مطلقة لكل فاعلين مفردين.


**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl)

### helper-01

**الإضافة ليست التزامن:** sowohl … als auch تشمل العنصرين، وقد يكونان يومين مختلفين مثل الثلاثاء والخميس. nicht nur … sondern auch تثبت الأول وتضيف الثاني؛ ليست نفيًا للأول مثل nicht … sondern وحدها.

**نتيجة المراجعة:** يفصل تحقق العنصرين عن وقوعهما في اللحظة نفسها، ويفصل الإضافة المؤكدة عن نفي الأول؛ يمنع تفسير nicht nur كنفي مطلق.


**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### helper-02

**حدد المقصد قبل الحل:** إما موعد واحد بـ entweder … oder، أو نفي كلا الاسمين بـ weder … noch. من دون سياق يمكن أن تلائم أكثر من صيغة الجملة نفسها؛ لذلك تحدد التدريبات المقصد أو الرابط المطلوب، ولا يعد كل جواب آخر خطأ نحويًا مطلقًا.

**نتيجة المراجعة:** يعالج سبب غموض الفراغ القديم: تغيير الرابط قد يغير المقصد مع بقاء الجملة نحوية. التقييم الآن يصرح بالمقصد.


**مصادر القاعدة/المنهج:** [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder)

### helper-03

**التوازي والحالة:** **einen Sprachkurs / einen Kochkurs** مفعولان متوازيان، و**im Park / im Café** عبارتا مكان، و**am Dienstag / am Donnerstag** عبارتا وقت. **schwarzen Tee** منصوب مع trinken؛ لا نغيّر الحالة لمجرد وجود رابط. في الحوار **Wir gehen ... oder wir treffen uns ...** يربط oder جزأين لهما فاعل وفعل.

**نتيجة المراجعة:** تراجع وظائف المفعول والمكان والوقت؛ الفعل يحكم الحالة، والحوار مثال علىوصل جزأين لا اسمين فقط.


**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### helper-04

**الفاصلة:** نكتب فاصلة قبل **sondern auch** في أمثلتنا. لا نضع فاصلة لمجرد الربط بين اسمين أو عبارتين بـ sowohl … als auch أو entweder … oder أو weder … noch. ربط جملتين كاملتين أو وجود جملة اعتراضية له أحكام أخرى؛ لا نجعل هذا منعًا لكل فاصلة قرب oder أو noch.

**نتيجة المراجعة:** الفاصلة قبل sondern واجبة في أمثلة الدرس؛ لا تنقل قاعدة الكلمات إلىكل جملتين كاملتين أو جملة اعتراضية.


**مصادر القاعدة/المنهج:** [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### helper-05

**الموقع الثاني وحدة لا كلمة:** **Weder Kaffee noch schwarzen Tee trinke ich am Abend.** الزوج المنفي كله يشغل الموقع الأول، و trinke هو المصرف ثم ich. في تمرين الترتيب والسؤال Q06 نطلب هذا النمط المحايد مع الضمير بعد المصرف مباشرة؛ ليس المقصود الحكم على كل ترتيب ذي نبر خاص خارج المهمة.

**نتيجة المراجعة:** الزوج المنفي وحدة نحوية طويلة، فلا نعد الكلمات للوصول إلى V2. شرط ich المباشر يميز Q06.2 من المطلوب دون ادعاء استحالة كل ترتيب معلّم.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### helper-06

**المصرف والبادئة:** **Die Teilnehmenden bringen nicht nur Rezepte mit, sondern auch Geschichten ...** إضافة مفعول ثانٍ تشترك في mitbringen؛ لا يلزم نسخ mit في النهاية كي تصح هذه الجملة. **meldet sich ... an** تسجيل انعكاسي، و**hat sich an die ... Uhrzeiten gewöhnt** اعتياد مع an + Akkusativ. لا يثبت التسجيل حضور كل موعد.

**نتيجة المراجعة:** يحافظ mitbringen على بادئته، والمفعول الثاني مع sondern تشترك فيه؛ تسجيل Noura انعكاسي مع an والاعتياد Perfekt مع hat sich ... gewöhnt. التسجيل ليس حضورًا مثبتًا.


**مصادر القاعدة/المنهج:** [USED](https://www.duden.de/rechtschreibung/gewoehnen), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### helper-07

**التبادل والمراعاة:** **Rücksicht aufeinander nehmen** يراعي بعضهم بعضًا؛ **aufeinander** إحالة متبادلة، لا مجرد العمل منفردًا أو تغيير موعد. Gemeinschaft جماعة بحسب السياق، لا مرادف لازم لأمة واحدة. لا نستنتج هوية ثقافية أو دينية من الاسم أو الطعام أو المشروب.

**نتيجة المراجعة:** معنى المراعاة متبادل؛ الجماعة غير الهوية الوطنية تلقائيًا. لا يستنتج بلد أو دين من الأسماء أو المشروبات.


**مصادر القاعدة/المنهج:** [CARE](https://www.duden.de/rechtschreibung/Ruecksicht), [GROUP](https://www.duden.de/rechtschreibung/Gemeinschaft), [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### helper-08

**افصل نصوص السكن:** Omar يطبخ يومين ويذكر الحديقة أو المقهى؛ زميلته لا تشرب القهوة والشاي الأسود مساءً. راوي الاستماع غير مسمى وجنسه غير مذكور؛ يتحدث عن الحديقة أو المتحف وعننفسه بعد الثامنة مع القهوة ومشروبات الطاقة. لا ننسب إليه عادات زميلة Omar أو نفترض أنه Omar من الصوت.

**نتيجة المراجعة:** يفصل شخصيات الحوار عن راوي الاستماع، والمقهى عن المتحف، والشاي عنمشروبات الطاقة؛ تشابه الصوت ليس هوية سردية.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### helper-09

**النطاق والتكرار:** القراءة تقول أمسية مفتوحة مرة في الشهر، لا أن كل نشاط يحدث مرة واحدة فقط. Noura تعمل متأخرة أحيانًا؛ لا ساعة لانتهاء العمل أو وصول مضمون. regelmäßig تعني بانتظام لا جدولًا أسبوعيًا محددًا، و weder مساءً لا ينفي الشرب طوال اليوم. لا نستنتج تناول شيء في الأوقات غير المذكورة.

**نتيجة المراجعة:** يفصل جدول الأمسية الشهري عن الأنشطة الأخرى، و manchmal عن دائمًا، و regelmäßig عنرقم أسبوعي، ونفي المساء عن بقية اليوم.


**مصادر القاعدة/المنهج:** [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder)

### helper-10

**المشاركة دون تعميم:** **muss niemand ... sprechen** لا يُلزم أحد، وليست خبرًا بأن أحدًا لا يفعل ذلك مطلقًا. **wenn sie möchten** شرط الرغبة؛ لا يلزم كشف بيانات حقيقية أو تمثيل بلد. المهمتان خياليتان: خمس جمل كتابة فقط، وستة أدوار كتابة ثم جهر؛ لا شريك أو تسجيل. إقرارات الدليل لا تصحح اللغة أو النطق أو سلامة التعميم آليًا.

**نتيجة المراجعة:** عدم الإلزام غير نفي الحدوث، والمشاركة عند الرغبة؛ المهمتان تحميان البيانات وتوضحان الكتابة والجهر وحدود الإقرار.


**مصادر القاعدة/المنهج:** [SUB](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze), [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### dialogue-01

Wie plant ihr die Aufgaben in eurer Wohngemeinschaft?

**نتيجة المراجعة:** سؤال Wie يتبعه plant ثم ihr عن تنظيم المهام؛ لا يفترض اختلافًا ثقافيًا، و eurer تناسب مجموعة المخاطب.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### dialogue-02

Wir sprechen jede Woche darüber. Ich koche sowohl am Dienstag als auch am Donnerstag.

**نتيجة المراجعة:** حديث التخطيط أسبوعي صراحة، والطبخ يومي الثلاثاء والخميس عادة Omar. لا تنسب الجملة الطبخ إلى كل السكان.


**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl)

### dialogue-03

Und was macht ihr am Wochenende?

**نتيجة المراجعة:** سؤال عن نشاط نهاية الأسبوع بصيغة ihr؛ لا يثبت وقوع حدث في تاريخ محدد.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### dialogue-04

Wir gehen entweder in den Park oder wir treffen uns mit Freunden im Café.

**نتيجة المراجعة:** الحديقة أو لقاء الأصدقاء في المقهى. الجزء بعد oder له فاعل وفعل؛ لا يجب اختزاله إلى اسمين فقط.


**مصادر القاعدة/المنهج:** [EITHER](https://www.duden.de/rechtschreibung/entweder)

### dialogue-05

Lest ihr auch gemeinsam?

**نتيجة المراجعة:** سؤال يبدأ بـ Lest ثم ihr، و gemeinsam عن المشاركة. السؤال وحده لا يثبت طريقة القراءة.


**مصادر القاعدة/المنهج:** [TOGETHER](https://www.duden.de/rechtschreibung/gemeinsam)

### dialogue-06

Ja. Ich lese nicht nur Romane, sondern auch Sachbücher. Meine Mitbewohnerin trinkt am Abend weder Kaffee noch schwarzen Tee.

**نتيجة المراجعة:** Ja يتبعها بيان قراءة Omar الروايات والكتب غير الروائية، ثم عادة زميلته مساءً. لا ننقل نفي مشروباتها إليه أو إلى راوي الاستماع.


**مصادر القاعدة/المنهج:** [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [NEITHER](https://www.duden.de/rechtschreibung/weder)

### dialogue-07

Ihr habt also verschiedene Gewohnheiten.

**نتيجة المراجعة:** تلخيص اختلاف العادات بين المخاطبين؛ لا تعميم على بلدان أو ثقافات.


**مصادر القاعدة/المنهج:** [DIFFERENT](https://www.duden.de/rechtschreibung/unterschiedlich), [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### dialogue-08

Genau. Wir nehmen Rücksicht aufeinander und wechseln die Aufgaben regelmäßig.

**نتيجة المراجعة:** المراعاة متبادلة وتبديل المهام منتظم. التخطيط الأسبوعي في دور سابق لا يثبت أن التبديل نفسه أسبوعي.


**مصادر القاعدة/المنهج:** [CARE](https://www.duden.de/rechtschreibung/Ruecksicht)

### reading-01

In der Lerngruppe „Miteinander“ treffen sich Menschen mit unterschiedlichen Arbeits- und Familienzeiten.

**نتيجة المراجعة:** يلتقي أشخاص تختلف أوقات عملهم وأسرتهم. النص لا يحدد جنسًا أو بلدًا واحدًا للمجموعة.


**مصادر القاعدة/المنهج:** [GROUP](https://www.duden.de/rechtschreibung/Gemeinschaft), [DIFFERENT](https://www.duden.de/rechtschreibung/unterschiedlich)

### reading-02

Einmal im Monat organisieren sie einen offenen Abend.

**نتيجة المراجعة:** أمسية مفتوحة مرة في الشهر، لا عدد جميع الاجتماعات أو عدد مرات حضور Noura.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### reading-03

Das Programm umfasst sowohl kurze Musikbeiträge als auch Gesprächsrunden.

**نتيجة المراجعة:** sowohl … als auch تشمل المساهمات الموسيقية القصيرة وحلقات النقاش معًا، لا اختيار أحدهما.


**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl)

### reading-04

Die Teilnehmenden bringen nicht nur Rezepte mit, sondern auch Geschichten aus ihrem Alltag.

**نتيجة المراجعة:** الوصفات والقصص مثبتة مع nicht nur … sondern auch. المفعول الثاني يشترك في mitbringen؛ لا يلزم تكرار البادئة، ولا تنسب الوصفات إلى بلد.


**مصادر القاعدة/المنهج:** [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### reading-05

Noura arbeitet manchmal spät und meldet sich deshalb entweder für den frühen Termin oder für das Treffen am Wochenende an.

**نتيجة المراجعة:** manchmal spät سبب اختيار موعد مبكر أو لقاء نهاية الأسبوع. meldet sich … an تسجيل، لا حضور مضمون أو ساعة انتهاء عمل محددة.


**مصادر القاعدة/المنهج:** [EITHER](https://www.duden.de/rechtschreibung/entweder), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### reading-06

Sie hat sich an die wechselnden Uhrzeiten gewöhnt.

**نتيجة المراجعة:** hat sich … gewöhnt صيغة Perfekt مع الضمير و an. التعود على تغير الأوقات لا يحولها إلى مواعيد ثابتة.


**مصادر القاعدة/المنهج:** [USED](https://www.duden.de/rechtschreibung/gewoehnen)

### reading-07

In der Gruppe muss niemand für ein ganzes Land oder eine ganze Gemeinschaft sprechen: Alle teilen persönliche Erfahrungen, wenn sie möchten.

**نتيجة المراجعة:** muss niemand تنفي الإلزام، و wenn sie möchten تقيد المشاركة بالرغبة. لم يقل النص إن التمثيل لا يحدث إطلاقًا.


**مصادر القاعدة/المنهج:** [SUB](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze), [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### reading-08

So lernen die Mitglieder voneinander, ohne einzelne Erlebnisse zu allgemeinen Regeln zu machen.

**نتيجة المراجعة:** التعلم من الخبرات دون جعلها قواعد عامة؛ نص تربوي خيالي لا بحث ميداني عن ثقافات.


**مصادر القاعدة/المنهج:** [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### reading-question-01

Wer trifft sich in der Lerngruppe „Miteinander“?

**نتيجة المراجعة:** الجواب يصف اختلاف أوقات العمل والأسرة، لا جنسيات الأعضاء.

**الجواب:** Menschen mit unterschiedlichen Arbeits- und Familienzeiten.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### reading-question-02

Wie oft organisieren die Mitglieder einen offenen Abend?

**نتيجة المراجعة:** السؤال عن تكرار الأمسية المفتوحة وحدها، لا كل أنشطة المجموعة.

**الجواب:** Einmal im Monat.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### reading-question-03

Was umfasst das Programm?

**نتيجة المراجعة:** البرنامج يشمل الموسيقى والنقاش بلا مفاضلة أو اختيار أحدهما.

**الجواب:** Kurze Musikbeiträge und Gesprächsrunden.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### reading-question-04

Was bringen die Teilnehmenden mit?

**نتيجة المراجعة:** الوصفات والقصص معًا؛ ذكر الوصفات وحدها جواب ناقص.

**الجواب:** Rezepte und Geschichten aus ihrem Alltag.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### reading-question-05

Warum meldet sich Noura manchmal für unterschiedliche Termine an?

**نتيجة المراجعة:** سؤال سبب؛ جملة Weil تضع arbeitet في نهاية التابعة. لا نضيف ساعة لانتهاء العمل.

**الجواب:** Weil Noura manchmal spät arbeitet.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### reading-question-06

Muss jemand für ein ganzes Land oder eine Gemeinschaft sprechen?

**نتيجة المراجعة:** سؤال عن الواجب؛ Nein تنفي الإلزام لا حدوث الكلام، مع إبقاء شرط الرغبة.

**الجواب:** Nein. Alle teilen persönliche Erfahrungen, wenn sie möchten.


**مصادر القاعدة/المنهج:** [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### listening-01

In unserer Wohngemeinschaft planen wir die Aufgaben zusammen.

**نتيجة المراجعة:** wir للراوي وسكان السكن، والتخطيط مشترك. الاسم والجنس غير مصرح بهما؛ لا يستنتجان من الصوت.


**مصادر القاعدة/المنهج:** [TOGETHER](https://www.duden.de/rechtschreibung/gemeinsam)

### listening-02

Wir kochen sowohl am Dienstag als auch am Donnerstag.

**نتيجة المراجعة:** الطبخ الثلاثاء والخميس؛ الإضافة لا تحصره في يوم واحد ولا تعني التزامن.


**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl)

### listening-03

Ich lese nicht nur Romane, sondern auch Sachbücher.

**نتيجة المراجعة:** Ich للراوي: الروايات والكتب غير الروائية، لا الأخبار من مثال Samir.


**مصادر القاعدة/المنهج:** [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### listening-04

Am Wochenende gehen wir entweder in den Park oder ins Museum.

**نتيجة المراجعة:** الحديقة أو المتحف بديلان. ins Museum تعني الوجهة، ولا نستبدله بالمقهى من الحوار.


**مصادر القاعدة/المنهج:** [EITHER](https://www.duden.de/rechtschreibung/entweder)

### listening-05

Nach acht Uhr abends trinke ich weder Kaffee noch Energydrinks.

**نتيجة المراجعة:** بعد الثامنة مساءً ينفي الراوي القهوة ومشروبات الطاقة، لا الشاي الأسود. لا حكم على أوقات أخرى.


**مصادر القاعدة/المنهج:** [NEITHER](https://www.duden.de/rechtschreibung/weder)

### listening-06

Jeder kann etwas vorschlagen, und wir wechseln die Aufgaben regelmäßig.

**نتيجة المراجعة:** يمكن لكل شخص اقتراح شيء، والتبديل منتظم بلا وتيرة رقمية. kann إتاحة لا واجب.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### listening-question-01

An welchen Tagen kocht die Gruppe?

**نتيجة المراجعة:** اليومان مطلوبان، ولا يستبدل أحدهما بأيام الحوار الجديد في P02.

**الجواب:** Dienstag und Donnerstag.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### listening-question-02

Was liest die Person außer Romanen?

**نتيجة المراجعة:** außer Romanen يطلب النوع الآخر: Sachbücher. لا نستنتج جنس الراوي.

**الجواب:** Sachbücher.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### listening-question-03

Wohin geht die Gruppe am Wochenende?

**نتيجة المراجعة:** يحفظ الجواب البديلين والمتحف بدل المقهى.

**الجواب:** Entweder in den Park oder ins Museum.


**مصادر القاعدة/المنهج:** [EITHER](https://www.duden.de/rechtschreibung/entweder)

### listening-question-04

Was trinkt die Person nach acht Uhr abends nicht?

**نتيجة المراجعة:** السؤال منفي ومقيد بما بعد الثامنة؛ تعداد الاسمين بـ und لا يثبت شربهما.

**الجواب:** Kaffee und Energydrinks.


**مصادر القاعدة/المنهج:** [NEITHER](https://www.duden.de/rechtschreibung/weder)

### listening-question-05

Wie oft wechseln sie die Aufgaben?

**نتيجة المراجعة:** المتاح Regelmäßig فقط؛ لا نختلق تكرارًا أسبوعيًا أو يوميًا.

**الجواب:** Regelmäßig.


**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### comparison-model-01

Mina und Samir wohnen in einer fiktiven Wohngemeinschaft.

**نتيجة المراجعة:** تعريف الشخصيتين والسكن الخيالي؛ ليس تقريرًا عن شخصين حقيقيين أو ممثلين لبلد.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### comparison-model-02

Mina kocht sowohl am Dienstag als auch am Donnerstag.

**نتيجة المراجعة:** Mina مفرد و kocht مصرف؛ اليومان مع رابط الإضافة دون اشتراط التزامن.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### comparison-model-03

Samir liest nicht nur Romane, sondern auch Sachbücher.

**نتيجة المراجعة:** Samir يقرأ النوعين؛ الفاصلة قبل sondern auch والمفعولان محفوظة.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### comparison-model-04

Mina trinkt am Abend weder Kaffee noch schwarzen Tee.

**نتيجة المراجعة:** نفي مشروبين عن Mina مساءً دون nicht مكررة؛ لا حكم عن اليوم كله.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### comparison-model-05

Samir trinkt dagegen am Abend gern schwarzen Tee.

**نتيجة المراجعة:** dagegen يقارن Samir بـ Mina في المشروب والوقت نفسه. تغيير صاحب العادة يفسد المقارنة.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### agreement-model-01

Mina: Wann planen wir die Aufgaben für diese Woche?

**نتيجة المراجعة:** سؤال Wann ثم planen ثم wir عن وقت التخطيط، لا وقت تنفيذ كل المهام.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### agreement-model-02

Samir: Wir können entweder am Montag oder am Dienstag darüber sprechen.

**نتيجة المراجعة:** können مصرف و sprechen مصدر في نهاية الجملة؛ الاثنين أو الثلاثاء بديلان.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### agreement-model-03

Mina: Am Montag habe ich Zeit.

**نتيجة المراجعة:** Mina تختار الاثنين؛ لا تذكر الساعة حتى هذا الدور.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### agreement-model-04

Samir: Gut, dann treffen wir uns am Montag um achtzehn Uhr.

**نتيجة المراجعة:** Samir يثبت الاثنين عند 18:00، فيحسم الاختيار ولا يقرر لقاءين.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### agreement-model-05

Mina: Am Dienstag übernehme ich sowohl das Kochen als auch den Einkauf.

**نتيجة المراجعة:** Am Dienstag ثم übernehme ثم ich؛ Kochen و Einkauf مفعولان اسميان متوازيان، وكلاهما يوم الثلاثاء.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### agreement-model-06

Samir: Einverstanden. Dann räume ich am Dienstag die Küche auf.

**نتيجة المراجعة:** موافقة Samir وترتيب المطبخ يوم الثلاثاء؛ räume … auf مفصول صحيح. الدور يضم جملتين لكنه دور واحد.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### DL-B1-07-T01

1. **sowohl … als auch**  
2. **nicht nur … sondern auch**  
3. **entweder … oder**  
4. **weder … noch**

أ. لا هذا ولا ذاك.  ب. كلا الأمرين.  ج. اختيار بين أمرين.  د. ليس الأمر الأول وحده، بل الثاني أيضًا.

5. معنى **Rücksicht aufeinander nehmen**: **يراعي بعضنا بعضًا / يختار كل شخص نشاطًا منفردًا**.

**نتيجة المراجعة:** أربعة روابط ومعانيها ثم المراعاة ببديلين؛ دعم Q01 صار صريحًا.

- T01.1: **sowohl … als auch**  
  - الجواب: ب — كلا الأمرين.؛ sowohl يثبت العنصرين؛ المعنى ب، لا الاختيار أو النفي.
- T01.2: **nicht nur … sondern auch**  
  - الجواب: د — ليس الأمر الأول وحده، بل الثاني أيضًا.؛ د تحتفظ بمعنى «ليس الأول وحده»؛ إضافة الثاني لا تنفي الأول.
- T01.3: **entweder … oder**  
  - الجواب: ج — اختيار بين أمرين.؛ ج اختيار بين بديلين، لا جمعهما كما في ب.
- T01.4: **weder … noch**
  - الجواب: أ — لا هذا ولا ذاك.؛ أ تنفي العنصرين، لا تختار واحدًا أو تضيف الثاني.
- T01.5: معنى **Rücksicht aufeinander nehmen**: **يراعي بعضنا بعضًا / يختار كل شخص نشاطًا منفردًا**.
  - الجواب: يراعي بعضنا بعضًا.؛ المراعاة المتبادلة هي الجواب؛ النشاط الفردي لا يترجم العبارة. أضيف دعم مباشر لـ Q01.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [CARE](https://www.duden.de/rechtschreibung/Ruecksicht), [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### DL-B1-07-T02

في 1–4 استخدم كل رابط من الأربعة مرة واحدة وفق المقصد. في 5 استعمل sowohl … als auch، وفي 6 أكمل nicht nur … sondern auch دون تكرار nicht الموجودة؛ في 7 صرّف helfen:

1. Ich lerne ______ Deutsch ______ Französisch. (اللغتان معًا)
2. Sie hört ______ Podcasts, ______ Musik. (ليست البودكاست وحدها)
3. Am Sonntag gehen wir ______ wandern ______ wir bleiben zu Hause. (خياران)
4. Er trinkt ______ Kaffee ______ Tee. (لا يشرب أيًّا منهما)
5. Mina besucht ______ einen Sprachkurs ______ einen Kochkurs.
6. Samir liest nicht ______ Nachrichten, ______ Romane.
7. Sowohl die Nachbarn als auch die Gäste ______ beim Fest. (helfen)

**نتيجة المراجعة:** سبعة بنود محددة المقصد والرابط؛ تدعم Q02 و Q03 و Q07 مباشرة.

- T02.1: Ich lerne ______ Deutsch ______ Französisch. (اللغتان معًا)
  - الجواب: sowohl / als auch؛ تعليمات استخدام كل رابط مرة والمقصد المعطى تحددان sowohl. صيغة إضافة أخرى قد تصح خارج قيد هذه المهمة.
- T02.2: Sie hört ______ Podcasts, ______ Musik. (ليست البودكاست وحدها)
  - الجواب: nicht nur / sondern auch؛ ليست البودكاست وحدها: nicht nur … sondern auch، مع الفاصلة قبل sondern.
- T02.3: Am Sonntag gehen wir ______ wandern ______ wir bleiben zu Hause. (خياران)
  - الجواب: entweder / oder؛ إما التنزه أو البقاء؛ بعد oder جزء كامل wir bleiben، لا فعل في نهاية تابعة.
- T02.4: Er trinkt ______ Kaffee ______ Tee. (لا يشرب أيًّا منهما)
  - الجواب: weder / noch؛ نفي القهوة والشاي بـ weder … noch دون nicht إضافية.
- T02.5: Mina besucht ______ einen Sprachkurs ______ einen Kochkurs.
  - الجواب: sowohl / als auch؛ دعم مباشر لـ Q02؛ التعليمات تعين sowohl والمفعولين المتوازيين.
- T02.6: Samir liest nicht ______ Nachrichten, ______ Romane.
  - الجواب: nur / sondern auch؛ nicht مطبوعة بالفعل؛ نضيف nur ثم sondern auch ولا نكرر nicht.
- T02.7: Sowohl die Nachbarn als auch die Gäste ______ beim Fest. (helfen)
  - الجواب: helfen؛ دعم مباشر لـ Q07؛ Nachbarn و Gäste جمعان، فيلزم helfen لا hilft أو helfe.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [CARE](https://www.duden.de/rechtschreibung/Ruecksicht), [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### DL-B1-07-T03

في 1 استعمل sowohl … als auch، وفي 2 استعمل nicht nur … sondern auch. في 3 و 5 اختر بديلًا واحدًا، وفي 4 و 6 انفِ كلا العنصرين؛ المقاصد معطاة وليست مستنتجة من الفراغ وحده:

1. ______ die Nachbarn ______ die Gäste helfen beim Fest.
2. Die Gruppe plant ______ Ausflüge, ______ Ausstellungen.
3. Am freien Abend entscheide ich mich ______ für einen Abend zu Hause ______ für ein Treffen mit Freunden.
4. Ich esse ______ Fleisch ______ Fisch.
5. Am Freitag treffen wir uns ______ im Park ______ im Café.
6. Ich trinke am Abend ______ Kaffee ______ schwarzen Tee.

**نتيجة المراجعة:** ستة بنود ذات مقاصد معلنة؛ أضيفت الجمعة والمشروبات لدعم السؤالين المرتبطين.

- T03.1: ______ die Nachbarn ______ die Gäste helfen beim Fest.
  - الجواب: Sowohl / als auch؛ sowohl معين صراحة، و helfen جمع. الفراغ القديم بلا سياق لم يكن يستبعد weder.
- T03.2: Die Gruppe plant ______ Ausflüge, ______ Ausstellungen.
  - الجواب: nicht nur / sondern auch؛ إضافة الرحلات والمعارض بـ nicht nur … sondern auch مع فاصلة.
- T03.3: Am freien Abend entscheide ich mich ______ für einen Abend zu Hause ______ für ein Treffen mit Freunden.
  - الجواب: entweder / oder؛ اختيار واحد في أمسية حرة؛ entweder für … oder für … لا ترتيب أفضلية.
- T03.4: Ich esse ______ Fleisch ______ Fisch.
  - الجواب: weder / noch؛ نفي اللحوم والسمك في الجملة، لا استنتاج دين أو هوية أو سبب صحي.
- T03.5: Am Freitag treffen wir uns ______ im Park ______ im Café.
  - الجواب: entweder / oder؛ دعم Q04: الجمعة ومكان واحد، لا المكانان معًا.
- T03.6: Ich trinke am Abend ______ Kaffee ______ schwarzen Tee.
  - الجواب: weder / noch؛ دعم Q05: نفي مشروبين مساءً وحفظ schwarzen Tee منصوبًا.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [CARE](https://www.duden.de/rechtschreibung/Ruecksicht), [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### DL-B1-07-T04

في 1 ابدأ بـ Sowohl مع الفاعلين، وفي 2 ابدأ بـ Ich وأضف فاصلة قبل sondern. في 3 قدم الزوج Weder ... noch كله، ثم trinke، ثم الضمير ich مباشرة؛ هذا هو الترتيب المحايد المطلوب:

1. Sowohl / die Eltern / als auch / die Kinder / helfen / beim Fest.
2. Ich / lese / nicht nur / Romane / sondern auch / Sachbücher.
3. Weder / Kaffee / noch / schwarzen Tee / ich / am Abend / trinke.

**نتيجة المراجعة:** ثلاثة ترتيبات مع البداية والترقيم وموضع ich المحايد؛ لا تعميم الحكم على كل أساليب النبر.

- T04.1: Sowohl / die Eltern / als auch / die Kinder / helfen / beim Fest.
  - الجواب: Sowohl die Eltern als auch die Kinder helfen beim Fest.؛ فاعل مركب من Eltern و Kinder، والفعل helfen. البداية Sowohl كما طلب التمرين.
- T04.2: Ich / lese / nicht nur / Romane / sondern auch / Sachbücher.
  - الجواب: Ich lese nicht nur Romane, sondern auch Sachbücher.؛ Ich ثم lese، مع فاصلة قبل sondern. صارت المطالبة بالترقيم صريحة.
- T04.3: Weder / Kaffee / noch / schwarzen Tee / ich / am Abend / trinke.
  - الجواب: Weder Kaffee noch schwarzen Tee trinke ich am Abend.؛ الزوج المنفي أولًا، ثم trinke ثم ich مباشرة. البديل Ich trinke صحيح خارج شرط التقديم.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [CARE](https://www.duden.de/rechtschreibung/Ruecksicht), [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### DL-B1-07-T05

حدّد صحيحًا أو خطأ:

1. تضم المجموعة أشخاصًا لديهم أوقات عمل وأسرة مختلفة.
2. تنظم المجموعة أمسية مفتوحة كل أسبوع.
3. يتضمن البرنامج فقرات موسيقية وجلسات حوار.
4. على كل مشارك أن يتحدث نيابةً عن بلد كامل.
5. تعمل نورة متأخرة أحيانًا، ولذلك تسجّل لموعد مبكر أو لقاء في نهاية الأسبوع.

**نتيجة المراجعة:** خمسة أحكام صحيح/خطأ تراعي سبب الاختيار وعدم الإلزام.

- T05.1: تضم المجموعة أشخاصًا لديهم أوقات عمل وأسرة مختلفة.
  - الجواب: صحيح.؛ افتتاح القراءة يثبت اختلاف أوقات العمل والأسرة.
- T05.2: تنظم المجموعة أمسية مفتوحة كل أسبوع.
  - الجواب: خطأ: مرة فيالشهر.؛ كل أسبوع لا تطابق Einmal im Monat للأمسية المفتوحة.
- T05.3: يتضمن البرنامج فقرات موسيقية وجلسات حوار.
  - الجواب: صحيح.؛ يشمل البرنامج الموسيقى والنقاش بـ sowohl … als auch.
- T05.4: على كل مشارك أن يتحدث نيابةً عن بلد كامل.
  - الجواب: خطأ: لا يُلزم أحد بتمثيل بلد.؛ التمثيل المفروض يناقض muss niemand؛ عدم الإلزام لا ينفي الحدوث.
- T05.5: تعمل نورة متأخرة أحيانًا، ولذلك تسجّل لموعد مبكر أو لقاء في نهاية الأسبوع.
  - الجواب: صحيح.؛ صارت الصياغة «تعمل متأخرة أحيانًا» بدل استنتاج انتهاء العمل؛ السبب والبديلان من النص.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [CARE](https://www.duden.de/rechtschreibung/Ruecksicht), [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### DL-B1-07-T06

أكمل بالألمانية من نص الاستماع، دون نقل تفاصيل الحوار. بنك الكلمات: **Dienstag — Donnerstag — Sachbücher — Museum — Energydrinks — regelmäßig**.

1. Wir kochen sowohl am ______ als auch am ______.
2. Ich lese nicht nur Romane, sondern auch ______.
3. Am Wochenende gehen wir entweder in den Park oder ins ______.
4. Nach acht Uhr abends trinke ich weder Kaffee noch ______.
5. Wir wechseln die Aufgaben ______.

**نتيجة المراجعة:** خمسة بنود وست كلمات إجابة لأن بند الأيام به فراغان؛ بنك ألماني يميز الاستماع عن الحوار.

- T06.1: Wir kochen sowohl am ______ als auch am ______.
  - الجواب: Dienstag / Donnerstag؛ Dienstag و Donnerstag مع am. بند واحد بفراغين؛ لا يحسب سؤالين مستقلين.
- T06.2: Ich lese nicht nur Romane, sondern auch ______.
  - الجواب: Sachbücher؛ Sachbücher بعد sondern auch؛ لا ننقل Nachrichten من مثال القواعد.
- T06.3: Am Wochenende gehen wir entweder in den Park oder ins ______.
  - الجواب: Museum؛ Museum بعد ins؛ المقهى ليس في هذا النص.
- T06.4: Nach acht Uhr abends trinke ich weder Kaffee noch ______.
  - الجواب: Energydrinks؛ Energydrinks من الراوي، لا schwarzen Tee من زميلة Omar.
- T06.5: Wir wechseln die Aufgaben ______.
  - الجواب: regelmäßig؛ regelmäßig انتظام دون عدد مرات. النص المكتوب متاح فلا يتوقف التقييم على MP3.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [CARE](https://www.duden.de/rechtschreibung/Ruecksicht), [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### DL-B1-07-T07

1. **Ich besuche einen Sprachkurs. Ich besuche auch einen Sportkurs.** → **sowohl … als auch**
2. **Mina liest Romane. Sie liest auch Sachbücher.** → **nicht nur … sondern auch**
3. **Ich trinke keinen Kaffee. Ich trinke keinen schwarzen Tee.** → **weder … noch**

**نتيجة المراجعة:** ثلاثة دموج تحافظ على المعنى والحالة والنفي والفاصلة.

- T07.1: **Ich besuche einen Sprachkurs. Ich besuche auch einen Sportkurs.** → **sowohl … als auch**
  - الجواب: Ich besuche sowohl einen Sprachkurs als auch einen Sportkurs.؛ besuche فعل واحد للدورتين مع einen في كل مفعول؛ الرابط يثبت كليهما.
- T07.2: **Mina liest Romane. Sie liest auch Sachbücher.** → **nicht nur … sondern auch**
  - الجواب: Mina liest nicht nur Romane, sondern auch Sachbücher.؛ Mina مع liest ثم المفعولين و nicht nur … sondern auch والفاصلة. لا تكرار غير لازم لـ Sie.
- T07.3: **Ich trinke keinen Kaffee. Ich trinke keinen schwarzen Tee.** → **weder … noch**
  - الجواب: Ich trinke weder Kaffee noch schwarzen Tee.؛ احذف keinen عند نقل النفي إلى weder … noch، وأبق schwarzen Tee دون تعميم ثقافي.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [CARE](https://www.duden.de/rechtschreibung/Ruecksicht), [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### DL-B1-07-T08

دليل التطبيق: اكتب لكل مهمة 160 حرفًا على الأقل وراجع الإقرارات الثلاثة. حد الحروف لا يحسب الجمل أو الأدوار آليًا؛ P02 وحدها تحتاج تأكيد الجهر، ولا يلزم تسجيل الصوت.

**أ — P01: خمس جمل كتابة فقط**

اكتب خمس جمل عن Mina و Samir في سكن مشترك خيالي: عرّف الشخصيتين؛ صف طبخ Mina يومي الثلاثاء والخميس بـ sowohl … als auch؛ صف قراءة Samir للروايات والكتب غير الروائية بـ nicht nur … sondern auch؛ انفِ شرب Mina القهوة والشاي الأسود مساءً بـ weder … noch؛ واختم بمقارنة أن Samir يحب الشاي الأسود مساءً. احفظ التوازي والفاصلة قبل sondern والنفي المقيد بالمساء. هذه كتابة فقط، بلا جهر أو تسجيل أو بيانات حقيقية. لا تعمّم عادةً على ثقافة أو بلد كامل.

**ب — P02: ستة أدوار مع الجهر**

اكتب حوارًا خياليًا من ستة أدوار بين Mina و Samir ينظمان مهام الأسبوع: سؤال عن وقت التخطيط؛ عرض الاثنين أو الثلاثاء بـ entweder … oder؛ اختيار الاثنين؛ تثبيت الاثنين عند السادسة مساءً؛ عرض Mina تولي الطبخ والشراء يوم الثلاثاء بـ sowohl … als auch؛ ثم موافقة Samir وتوليه ترتيب المطبخ يوم الثلاثاء. اكتب الطرفين ثم اقرأهما جهرًا بنفسك دون شريك أو تسجيل. اجعل الاتفاق عن هاتين الشخصيتين فقط، وحافظ على التوازي والوقت؛ لا تعميم ثقافي أو موعد حقيقي.

**نتيجة المراجعة:** فرعان: خمس جمل كتابة فقط وستة أدوار كتابة ثم جهر؛ 11 مطلب محتوى، وحد 160 مستقل. لا شريك أو تسجيل.

- T08.1: P01: تعريف شخصيتين في سكن خيالي
  - الجواب: Mina und Samir wohnen in einer fiktiven Wohngemeinschaft.؛ تعريف الشخصيتين والسكن الخيالي؛ ليس تقريرًا عن شخصين حقيقيين أو ممثلين لبلد.
- T08.2: P01: طبخ Mina في يومين مع رابط الإضافة
  - الجواب: Mina kocht sowohl am Dienstag als auch am Donnerstag.؛ Mina مفرد و kocht مصرف؛ اليومان مع رابط الإضافة دون اشتراط التزامن.
- T08.3: P01: قراءة Samir نوعين مع ليس فقط بل أيضًا
  - الجواب: Samir liest nicht nur Romane, sondern auch Sachbücher.؛ Samir يقرأ النوعين؛ الفاصلة قبل sondern auch والمفعولان محفوظة.
- T08.4: P01: نفي مشروبين عن Mina مساءً
  - الجواب: Mina trinkt am Abend weder Kaffee noch schwarzen Tee.؛ نفي مشروبين عن Mina مساءً دون nicht مكررة؛ لا حكم عن اليوم كله.
- T08.5: P01: مقارنة Samir في المشروب مساءً
  - الجواب: Samir trinkt dagegen am Abend gern schwarzen Tee.؛ dagegen يقارن Samir بـ Mina في المشروب والوقت نفسه. تغيير صاحب العادة يفسد المقارنة.
- T08.6: P02: سؤال عن وقت التخطيط
  - الجواب: Mina: Wann planen wir die Aufgaben für diese Woche?؛ سؤال Wann ثم planen ثم wir عن وقت التخطيط، لا وقت تنفيذ كل المهام.
- T08.7: P02: عرض الاثنين أو الثلاثاء
  - الجواب: Samir: Wir können entweder am Montag oder am Dienstag darüber sprechen.؛ können مصرف و sprechen مصدر في نهاية الجملة؛ الاثنين أو الثلاثاء بديلان.
- T08.8: P02: اختيار الاثنين
  - الجواب: Mina: Am Montag habe ich Zeit.؛ Mina تختار الاثنين؛ لا تذكر الساعة حتى هذا الدور.
- T08.9: P02: تثبيت الاثنين 18:00
  - الجواب: Samir: Gut, dann treffen wir uns am Montag um achtzehn Uhr.؛ Samir يثبت الاثنين عند 18:00، فيحسم الاختيار ولا يقرر لقاءين.
- T08.10: P02: عرض الطبخ والشراء الثلاثاء
  - الجواب: Mina: Am Dienstag übernehme ich sowohl das Kochen als auch den Einkauf.؛ Am Dienstag ثم übernehme ثم ich؛ Kochen و Einkauf مفعولان اسميان متوازيان، وكلاهما يوم الثلاثاء.
- T08.11: P02: الموافقة وترتيب المطبخ الثلاثاء
  - الجواب: Samir: Einverstanden. Dann räume ich am Dienstag die Küche auf.؛ موافقة Samir وترتيب المطبخ يوم الثلاثاء؛ räume … auf مفصول صحيح. الدور يضم جملتين لكنه دور واحد.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [CARE](https://www.duden.de/rechtschreibung/Ruecksicht), [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters)

### DL-B1-07-Q01

ما معنى **Rücksicht aufeinander nehmen**؟

**نتيجة المراجعة:** تعني العبارة أن يراعي الأشخاص بعضهم بعضًا، كما تفعل شخصيات الحوار عند توزيع المهام.

**الجواب:** يراعي بعضنا بعضًا.

**التتبع:** DL-B1-07-T01

- الخيار 1 (المفتاح): يراعي بعضنا بعضًا. — المعنى مراعاة متبادلة؛ aufeinander ليست مجرد فعل فردي.
- الخيار 2 (مشتت): يغيّر الموعد كل أسبوع. — تغيير الموعد أسبوعيًا ليس معنى العبارة، ولو وُجد تخطيط أسبوعي في الحوار.
- الخيار 3 (مشتت): يختار نشاطًا فرديًا. — اختيار نشاط فردي لا يترجم مراعاة الآخرين.

**مصادر القاعدة/المنهج:** [CARE](https://www.duden.de/rechtschreibung/Ruecksicht)

### DL-B1-07-Q02

أكمل تركيب الجملة للدلالة على أن مينا تحضر الدورتين: **Mina besucht ___ einen Sprachkurs ___ einen Kochkurs.**

**نتيجة المراجعة:** sowohl … als auch تشمل الدورتين معًا في المعنى، ولا تشترط حضورهما في الوقت نفسه؛ العنصران مفعولان متوازيان.

**الجواب:** sowohl / als auch

**التتبع:** DL-B1-07-T02

- الخيار 1 (المفتاح): sowohl / als auch — يشمل الدورتين ولا يشترط التزامن.
- الخيار 2 (مشتت): entweder / sondern auch — خلط طرف entweder بطرف sondern auch لا يعطي الرابط المطلوب.
- الخيار 3 (مشتت): weder / oder — خلط weder مع oder بدل noch لا يحقق الإضافة.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-07-Q03

أكمل للدلالة على أن سمير لا يقرأ الأخبار وحدها، بل يقرأ الروايات أيضًا: **Samir liest nicht ___ Nachrichten, ___ Romane.**

**نتيجة المراجعة:** nicht nur … sondern auch تثبت قراءة الأخبار وتضيف الروايات. كلمة nicht موجودة؛ نكمل بـ nur / sondern auch. نفي sowohl أو entweder لا يؤدي معنى الإضافة المطلوبة، ولو أمكن في سياق مختلف.

**الجواب:** nur / sondern auch

**التتبع:** DL-B1-07-T02

- الخيار 1 (مشتت): sowohl / als auch — nicht قبل sowohl قد تنفي الجمع في سياق آخر؛ لا تؤدي معنى إضافة الروايات المطلوب هنا.
- الخيار 2 (المفتاح): nur / sondern auch — nicht الموجودة مع nur / sondern auch تثبت الأخبار وتضيف الروايات كما صرح السؤال.
- الخيار 3 (مشتت): entweder / oder — نفي entweder … oder ليس الإضافة المطلوبة؛ لا يكفي اكتمال الزوج دون فحص موضع النفي.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-07-Q04

أكمل للدلالة على اختيار مكان واحد يوم الجمعة: **Am Freitag treffen wir uns ___ im Park ___ im Café.**

**نتيجة المراجعة:** entweder … oder تعرض خيارًا بين بديلين: الحديقة أو المقهى.

**الجواب:** entweder / oder

**التتبع:** DL-B1-07-T03

- الخيار 1 (مشتت): sowohl / als auch — يثبت المكانين بدل اختيار مكان واحد.
- الخيار 2 (مشتت): weder / noch — ينفي المكانين بدل عرض بديلين.
- الخيار 3 (المفتاح): entweder / oder — اختيار الحديقة أو المقهى يطابق المقصد.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-07-Q05

أي رابط يعبّر عن أن المتكلم لا يشرب أيًا من المشروبين مساءً؟ **Ich trinke am Abend ___ Kaffee ___ schwarzen Tee.**

**نتيجة المراجعة:** weder … noch تنفي العنصرين معًا، ولا نضيف nicht إلى هذا النمط.

**الجواب:** weder / noch

**التتبع:** DL-B1-07-T03, DL-B1-07-T07

- الخيار 1 (مشتت): nicht nur / sondern auch — يثبت المشروبين بدل نفيهما.
- الخيار 2 (المفتاح): weder / noch — ينفي المشروبين مساءً، دون نفي اليوم كله.
- الخيار 3 (مشتت): entweder / oder — يختار أحدهما، فلا ينفي كليهما.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-07-Q06

اختر الترتيب المحايد المطلوب عند تقديم الزوج المنفي، مع الضمير **ich** مباشرة بعد المصرف: **Weder Kaffee noch schwarzen Tee …**

**نتيجة المراجعة:** الزوج المنفي كله في الموقع الأول، ثم trinke المصرف، ثم ich مباشرة في النمط المحايد المطلوب. وجود trinke ثانيًا وحده لا يفسر ترتيب بقية الكلمات، ولا نحكم هنا على كل سياق ذي نبر خاص.

**الجواب:** Weder Kaffee noch schwarzen Tee trinke ich am Abend.

**التتبع:** DL-B1-07-T04

- الخيار 1 (مشتت): Weder Kaffee noch schwarzen Tee ich trinke am Abend. — تقديم الزوج ثم ich ثم trinke يجعل المصرف ثالث وحدة، لا ثانيها في الرئيسية الخبرية المطلوبة.
- الخيار 2 (مشتت): Weder Kaffee noch schwarzen Tee trinke am Abend ich. — trinke بالفعل ثاني وحدة، لكن ich ليست بعده مباشرة. يخالف شرط النمط المحايد؛ لا ندعي استحالته في كل سياق ذي نبر خاص.
- الخيار 3 (المفتاح): Weder Kaffee noch schwarzen Tee trinke ich am Abend. — الزوج أولًا، ثم trinke، ثم ich مباشرة؛ يحقق جميع الشروط.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-07-Q07

أكمل الفعل: **Sowohl die Nachbarn als auch die Gäste ___ beim Fest.**

**نتيجة المراجعة:** Nachbarn و Gäste كلاهما جمع في هذه الجملة؛ لذلك نختار helfen، لا hilft أو helfe. لا نعمم الحكم على كل رابط ثنائي أو تركيب بفاعلين مفردين.

**الجواب:** helfen

**التتبع:** DL-B1-07-T02, DL-B1-07-T04

- الخيار 1 (المفتاح): helfen — helfen يوافق الاسمين الجمعين؛ لا تعميم على كل فاعلين مفردين.
- الخيار 2 (مشتت): hilft — hilft غائب مفرد لا يوافق هذين الاسمين الجمعين.
- الخيار 3 (مشتت): helfe — helfe متكلم مفرد في الحاضر المدروس، لا مصرف الجمع هنا.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-07-Q08

اقرأ السطر الوارد في نص الاستماع: **Am Wochenende gehen wir entweder in den Park oder ins Museum.** إلى أين تذهب المجموعة؟

**نتيجة المراجعة:** يذكر السطر المكتوب احتمالين: الحديقة أو المتحف. هذا السؤال يُجاب من نص المصدر المكتوب ولا يتطلب MP3.

**الجواب:** إلى الحديقة أو المتحف.

**التتبع:** DL-B1-07-T06

- الخيار 1 (المفتاح): إلى الحديقة أو المتحف. — الحديقة والمتحف البديلان المذكوران؛ لا يعني زيارة كليهما.
- الخيار 2 (مشتت): إلى المقهى أو المكتبة. — المقهى من الحوار لا الاستماع، والمكتبة غير مذكورة هنا.
- الخيار 3 (مشتت): إلى السوق أو محطة القطار. — السوق والمحطة غير مذكورين في النص.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-07-Q09

لماذا تسجّل Noura أحيانًا لمواعيد مختلفة؟

**نتيجة المراجعة:** توضح القراءة أن Noura تعمل متأخرة أحيانًا، لذلك تختار موعدًا مبكرًا أو لقاء عطلة الأسبوع.

**الجواب:** لأنها تعمل متأخرة أحيانًا.

**التتبع:** DL-B1-07-T05

- الخيار 1 (المفتاح): لأنها تعمل متأخرة أحيانًا. — manchmal spät سبب صريح دون ساعة عمل محددة.
- الخيار 2 (مشتت): لأن المجموعة لا تنظّم لقاءات في عطلة الأسبوع. — لقاء نهاية الأسبوع مذكور؛ لا يصح نفي وجوده.
- الخيار 3 (مشتت): لأنها تتولى تنظيم البرنامج الموسيقي. — وجود موسيقى لا يثبت أن Noura تنظمها.

**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-07-Q10

أي عبارة توافق نهاية نص القراءة؟

**نتيجة المراجعة:** muss niemand تعني أن أحدًا لا يُلزم بالتمثيل، لا أن ذلك لا يحدث مطلقًا؛ و wenn sie möchten تقيد المشاركة بالرغبة. تُروى خبرات شخصية دون جعلها قاعدة عن بلد أو جماعة.

**الجواب:** يمكنهم مشاركة الخبرات الشخصية عند الرغبة، ولا يُلزم أحد بالحديث نيابة عن بلد أو جماعة كاملة.

**التتبع:** DL-B1-07-T05

- الخيار 1 (مشتت): يجب على كل مشارك أن يمثل ثقافته أمام المجموعة. — يفرض التمثيل الذي ينفي النص إلزامه؛ المشتت ليس وصفًا يتبناه الدرس عن ثقافة.
- الخيار 2 (المفتاح): يمكنهم مشاركة الخبرات الشخصية عند الرغبة، ولا يُلزم أحد بالحديث نيابة عن بلد أو جماعة كاملة. — صُحح إلى عدم الإلزام، مطابقًا لـ muss niemand مع شرط الرغبة.
- الخيار 3 (مشتت): لكل مجتمع عادة واحدة ثابتة ينبغي اتباعها. — العادة الواحدة الثابتة لكل مجتمع تعميم يرفضه ختام النص؛ هذا مشتت لا ادعاء واقعي.

**مصادر القاعدة/المنهج:** [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters), [SUB](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/konjunktionalsaetze)

### DL-B1-07-P01

اكتب خمس جمل عن Mina و Samir في سكن مشترك خيالي: عرّف الشخصيتين؛ صف طبخ Mina يومي الثلاثاء والخميس بـ sowohl … als auch؛ صف قراءة Samir للروايات والكتب غير الروائية بـ nicht nur … sondern auch؛ انفِ شرب Mina القهوة والشاي الأسود مساءً بـ weder … noch؛ واختم بمقارنة أن Samir يحب الشاي الأسود مساءً. احفظ التوازي والفاصلة قبل sondern والنفي المقيد بالمساء. هذه كتابة فقط، بلا جهر أو تسجيل أو بيانات حقيقية. لا تعمّم عادةً على ثقافة أو بلد كامل.

**نتيجة المراجعة:** مطابقة T08 أ؛ كتابة فقط ونموذج 270 حرفًا. حد 160 وثلاثة إقرارات محفوظة، دون تصحيح آلي للغة أو النطق.

**التتبع:** DL-B1-07-T08

- معيار `taskCompletion`: خمس جمل بالمطالب المحددة عن Mina و Samir: تعريف وطبخ وقراءة ونفي مشروبين ومقارنة الشاي؛ كتابة فقط. — المصدر يحدد خمس جمل؛ الإقرار لا يعدها آليًا. P01 كتابة فقط دون جهر.
- معيار `meaningClarity`: مقارنة مفهومة بين شخصيتين خياليتين، مع نسبة كل عادة لصاحبها وتقييد نفي المشروبات بالمساء دون تعميم ثقافي. — المقارنة عن المشروب في الوقت نفسه وكل عادة لصاحبها؛ لا استنتاج جنسية من الاسم.
- معيار `targetSkill`: sowohl … als auch و nicht nur … sondern auch و weder … noch في ثلاثة مواضع سليمة؛ توازي وفاصلة قبل sondern وترتيب فعل ونفي دون nicht إضافية. — ثلاثة روابط مختلفة كاملة مع توازٍ وفاصلة؛ المعيار ظاهر لكن التطبيق لا يصحح النحو.

**دليل التطبيق:** حد160 حرفًا وثلاثة إقرارات؛ دون تأكيد جهر. لا تسجيل مطلوب.

**مصادر القاعدة/المنهج:** [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-07-P02

اكتب حوارًا خياليًا من ستة أدوار بين Mina و Samir ينظمان مهام الأسبوع: سؤال عن وقت التخطيط؛ عرض الاثنين أو الثلاثاء بـ entweder … oder؛ اختيار الاثنين؛ تثبيت الاثنين عند السادسة مساءً؛ عرض Mina تولي الطبخ والشراء يوم الثلاثاء بـ sowohl … als auch؛ ثم موافقة Samir وتوليه ترتيب المطبخ يوم الثلاثاء. اكتب الطرفين ثم اقرأهما جهرًا بنفسك دون شريك أو تسجيل. اجعل الاتفاق عن هاتين الشخصيتين فقط، وحافظ على التوازي والوقت؛ لا تعميم ثقافي أو موعد حقيقي.

**نتيجة المراجعة:** مطابقة T08 ب؛ كتابة وجهر ونموذج 350 حرفًا. حد 160 وثلاثة إقرارات محفوظة، دون تصحيح آلي للغة أو النطق.

**التتبع:** DL-B1-07-T08

- معيار `taskCompletion`: ستة أدوار تتضمن اختيار الاثنين بدل الثلاثاء وتثبيت 18:00 وتوزيع الطبخ والشراء وترتيب المطبخ يوم الثلاثاء؛ اكتب الطرفين ثم اجهر بهما. — ستة أدوار ثم جهر الطرفين وحدك؛ التخطيط الاثنين 18 والمهام الثلاثاء، بلا شريك أو ملف صوت.
- معيار `meaningClarity`: البديل ثم الاتفاق على وقت التخطيط وتوزيع مهام الثلاثاء واضحان، ولا ينسب النص العادات إلى ثقافة أو بلد. — يفصل البدائل عن حسم الوقت وعن موعد المهام؛ الأيام تعليمية لا مواعيد حقيقية.
- معيار `targetSkill`: رابط إضافة sowohl … als auch ورابط اختيار entweder … oder، مع اكتمال الجزأين والتوازي والمصرف في موضعه. — الإضافة والاختيار مطلوبان صراحة؛ لا يلزم استخدام الروابط الأربعة كلها في هذه المهمة.

**دليل التطبيق:** حد160 حرفًا وثلاثة إقرارات؛ مع تأكيد الجهر. لا تسجيل مطلوب.

**مصادر القاعدة/المنهج:** [AIE](https://www.coe.int/en/web/autobiography-intercultural-encounters), [BOTH](https://www.duden.de/rechtschreibung/sowohl), [EITHER](https://www.duden.de/rechtschreibung/entweder), [NEITHER](https://www.duden.de/rechtschreibung/weder), [COMMA](https://deutsch.lingolia.com/de/kommaregeln), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### card-01

**sowohl … als auch** → كلا … و… أيضًا.

**نتيجة المراجعة:** تذكير بإضافة العنصرين دون اشتراط التزامن.


**مصادر القاعدة/المنهج:** [BOTH](https://www.duden.de/rechtschreibung/sowohl)

### card-02

**nicht nur … sondern auch** → ليس … فقط، بل … أيضًا.

**نتيجة المراجعة:** تحتفظ بليس … فقط، بل … أيضًا؛ لا تنفي الأول.


**مصادر القاعدة/المنهج:** [COMMA](https://deutsch.lingolia.com/de/kommaregeln)

### card-03

**entweder … oder** → إمّا … أو.

**نتيجة المراجعة:** اختيار بديل كما في مهمة التخطيط، لا جمع البديلين.


**مصادر القاعدة/المنهج:** [EITHER](https://www.duden.de/rechtschreibung/entweder)

### card-04

**weder … noch** → لا … ولا.

**نتيجة المراجعة:** نفي العنصرين دون نفي إضافي في النمط المدروس.


**مصادر القاعدة/المنهج:** [NEITHER](https://www.duden.de/rechtschreibung/weder)

### card-05

**Rücksicht aufeinander nehmen** → يراعي بعضنا بعضًا.

**نتيجة المراجعة:** مراعاة متبادلة تدعم T01 و Q01، لا العمل الفردي.


**مصادر القاعدة/المنهج:** [CARE](https://www.duden.de/rechtschreibung/Ruecksicht)

### DL-B1-07-AUD-PHR-01

Der Lebensstil, die Lebensstile. Die Alltagsroutine, die Alltagsroutinen. Die Begegnung, die Begegnungen. Der Austausch. Die Gemeinschaft, die Gemeinschaften. Die Vielfalt. Die Tradition, die Traditionen. Die Verabredung, die Verabredungen. Die Rücksicht. Sich an etwas gewöhnen. Rücksicht aufeinander nehmen. Individuell. Gemeinsam. Unterschiedlich.

**نتيجة المراجعة:** 14 وحدة نطق مفردات، لكن ليس كل جمع وتصريف في الجدول منطوقًا. جمع Austausch توضيح مكتوب فقط. حالة ready محفوظة باعتماد سابق، لا اعتماد أو استماع جديد.

- وحدة نصية: Der Lebensstil, die Lebensstile.
  - der Lebensstil وجمعه die Lebensstile مطابقان للمدخل؛ أسلوب الحياة معنى مناسب لا جنسية محددة.
- وحدة نصية: Die Alltagsroutine, die Alltagsroutinen.
  - die Alltagsroutine وجمعها die Alltagsroutinen مركب برأس Routine. مدخل المركب لم يوجد؛ مرجع Routine يثبت جنس الرأس وجمعه فقط، ولا ندعي أنه يعرّف المركب كاملًا.
- وحدة نصية: Die Begegnung, die Begegnungen.
  - die Begegnung وجمع Begegnungen: لقاء في هذا السياق، لا مباراة رياضية.
- وحدة نصية: Der Austausch.
  - der Austausch هنا تبادل/حوار خبرات؛ الشرطة قُيدت في تنبيه لأن الجمع Austäusche/Austausche موجود.
- وحدة نصية: Die Gemeinschaft, die Gemeinschaften.
  - die Gemeinschaft وجمع Gemeinschaften: جماعة/مجتمع بحسب الاستعمال؛ لا مرادف مطلقًا للبلد.
- وحدة نصية: Die Vielfalt.
  - die Vielfalt: التنوع، والشرطة مقبولة للاستعمال المجرد المعروض؛ ليست نقصًا يلزم إصلاحه في MP3.
- وحدة نصية: Die Tradition, die Traditionen.
  - die Tradition وجمع Traditionen: تقليد متوارث أو عرف، لا إلزام كل أفراد جماعة بعادة واحدة.
- وحدة نصية: Die Verabredung, die Verabredungen.
  - die Verabredung وجمع Verabredungen: موعد أو اتفاق على لقاء؛ لا نخصصه بعلاقة عاطفية.
- وحدة نصية: Die Rücksicht.
  - die Rücksicht: مراعاة الآخرين؛ غالبًا مفرد في هذا المعنى، مع وجود Rücksichten في سياقات أخرى.
- وحدة نصية: Sich an etwas gewöhnen.
  - sich gewöhnen an مع Akkusativ؛ gewöhnt sich صيغة غائب مفرد. لا نحذف sich ولا نقيس an على ظروف المكان.
- وحدة نصية: Rücksicht aufeinander nehmen.
  - Rücksicht nehmen auf مع Akkusativ؛ nimmt Rücksicht صيغة مفرد مناسبة. aufeinander يضيف التبادل في العبارة المسجلة وبطاقة Q01.
- وحدة نصية: Individuell.
  - individuell صفة تعني فردي/خاص بكل شخص؛ الشرطة ليست جمع اسم ولا تجعل الفردية أنانية.
- وحدة نصية: Gemeinsam.
  - gemeinsam معًا في السياق الفعلي؛ المدخل صفة قد تستعمل ظرفيًا، فلا ندعي أنها ظرف فقط.
- وحدة نصية: Unterschiedlich.
  - unterschiedlich مختلف/متنوع، لا حكم تفاضلي أو وصف ثابت لكل جماعة.

**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### DL-B1-07-AUD-MODEL-01

Mina besucht sowohl einen Sprachkurs als auch einen Kochkurs. Samir liest nicht nur Nachrichten, sondern auch Romane. Am Freitag treffen wir uns entweder im Park oder im Café. Ich trinke am Abend weder Kaffee noch schwarzen Tee. Sowohl die Nachbarn als auch die Gäste helfen beim Fest.

**نتيجة المراجعة:** خمسة أمثلة: أربعة في الجدول وخامس عن جمع الفاعلين؛ ليست نموذجي P01/P02 الجديدين. حالة ready محفوظة باعتماد سابق، لا اعتماد أو استماع جديد.

- وحدة نصية: Mina besucht sowohl einen Sprachkurs als auch einen Kochkurs.
  - Mina فاعل مفرد و besucht مصرف؛ einen Sprachkurs و einen Kochkurs مفعولان منصوبان متوازيان. تشمل الدورتين دون فرض تزامن.
- وحدة نصية: Samir liest nicht nur Nachrichten, sondern auch Romane.
  - Samir مفرد و liest مصرف؛ الأخبار والروايات مثبتتان. Nachricht/News هنا Nachrichten، ولا نغيره إلى Sachbücher من المهمة الجديدة.
- وحدة نصية: Am Freitag treffen wir uns entweder im Park oder im Café.
  - Am Freitag عنصر وقت مقدم و treffen في الموقع الثاني ثم wir؛ im Park/im Café عبارتا مكان، واختيار موضع واحد لا ادعاء يومين.
- وحدة نصية: Ich trinke am Abend weder Kaffee noch schwarzen Tee.
  - Ich trinke رئيسية خبرية؛ weder/noch تنفيان Kaffee و schwarzen Tee مساءً. النهاية-en في Tee المنصوب محفوظة لاحقة للصفة، وليست جزءًا من الرابط.
- وحدة نصية: Sowohl die Nachbarn als auch die Gäste helfen beim Fest.
  - Sowohl die Nachbarn als auch die Gäste فاعلان جمع؛ helfen صحيح، ولا نحوله إلىقاعدة مطلقة لكل فاعلين مفردين.

**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### DL-B1-07-AUD-DLG-01

Wie plant ihr die Aufgaben in eurer Wohngemeinschaft? Wir sprechen jede Woche darüber. Ich koche sowohl am Dienstag als auch am Donnerstag. Und was macht ihr am Wochenende? Wir gehen entweder in den Park oder wir treffen uns mit Freunden im Café. Lest ihr auch gemeinsam? Ja. Ich lese nicht nur Romane, sondern auch Sachbücher. Meine Mitbewohnerin trinkt am Abend weder Kaffee noch schwarzen Tee. Ihr habt also verschiedene Gewohnheiten. Genau. Wir nehmen Rücksicht aufeinander und wechseln die Aufgaben regelmäßig.

**نتيجة المراجعة:** ثمانية أدوار وثمانية MP3؛ Laila02 و Omar03 ثابتان. حالة ready محفوظة باعتماد سابق، لا اعتماد أو استماع جديد.

- وحدة نصية: Wie plant ihr die Aufgaben in eurer Wohngemeinschaft?
  - سؤال Wie يتبعه plant ثم ihr عن تنظيم المهام؛ لا يفترض اختلافًا ثقافيًا، و eurer تناسب مجموعة المخاطب.
- وحدة نصية: Wir sprechen jede Woche darüber. Ich koche sowohl am Dienstag als auch am Donnerstag.
  - حديث التخطيط أسبوعي صراحة، والطبخ يومي الثلاثاء والخميس عادة Omar. لا تنسب الجملة الطبخ إلى كل السكان.
- وحدة نصية: Und was macht ihr am Wochenende?
  - سؤال عن نشاط نهاية الأسبوع بصيغة ihr؛ لا يثبت وقوع حدث في تاريخ محدد.
- وحدة نصية: Wir gehen entweder in den Park oder wir treffen uns mit Freunden im Café.
  - الحديقة أو لقاء الأصدقاء في المقهى. الجزء بعد oder له فاعل وفعل؛ لا يجب اختزاله إلى اسمين فقط.
- وحدة نصية: Lest ihr auch gemeinsam?
  - سؤال يبدأ بـ Lest ثم ihr، و gemeinsam عن المشاركة. السؤال وحده لا يثبت طريقة القراءة.
- وحدة نصية: Ja. Ich lese nicht nur Romane, sondern auch Sachbücher. Meine Mitbewohnerin trinkt am Abend weder Kaffee noch schwarzen Tee.
  - Ja يتبعها بيان قراءة Omar الروايات والكتب غير الروائية، ثم عادة زميلته مساءً. لا ننقل نفي مشروباتها إليه أو إلى راوي الاستماع.
- وحدة نصية: Ihr habt also verschiedene Gewohnheiten.
  - تلخيص اختلاف العادات بين المخاطبين؛ لا تعميم على بلدان أو ثقافات.
- وحدة نصية: Genau. Wir nehmen Rücksicht aufeinander und wechseln die Aufgaben regelmäßig.
  - المراعاة متبادلة وتبديل المهام منتظم. التخطيط الأسبوعي في دور سابق لا يثبت أن التبديل نفسه أسبوعي.

**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### DL-B1-07-AUD-READ-01

In der Lerngruppe „Miteinander“ treffen sich Menschen mit unterschiedlichen Arbeits- und Familienzeiten. Einmal im Monat organisieren sie einen offenen Abend. Das Programm umfasst sowohl kurze Musikbeiträge als auch Gesprächsrunden. Die Teilnehmenden bringen nicht nur Rezepte mit, sondern auch Geschichten aus ihrem Alltag. Noura arbeitet manchmal spät und meldet sich deshalb entweder für den frühen Termin oder für das Treffen am Wochenende an. Sie hat sich an die wechselnden Uhrzeiten gewöhnt. In der Gruppe muss niemand für ein ganzes Land oder eine ganze Gemeinschaft sprechen: Alle teilen persönliche Erfahrungen, wenn sie möchten. So lernen die Mitglieder voneinander, ohne einzelne Erlebnisse zu allgemeinen Regeln zu machen.

**نتيجة المراجعة:** ثماني جمل في MP3 واحد بصوت 02؛ مطابقة النص ليست استماعًا. حالة ready محفوظة باعتماد سابق، لا اعتماد أو استماع جديد.

- وحدة نصية: In der Lerngruppe „Miteinander“ treffen sich Menschen mit unterschiedlichen Arbeits- und Familienzeiten.
  - يلتقي أشخاص تختلف أوقات عملهم وأسرتهم. النص لا يحدد جنسًا أو بلدًا واحدًا للمجموعة.
- وحدة نصية: Einmal im Monat organisieren sie einen offenen Abend.
  - أمسية مفتوحة مرة في الشهر، لا عدد جميع الاجتماعات أو عدد مرات حضور Noura.
- وحدة نصية: Das Programm umfasst sowohl kurze Musikbeiträge als auch Gesprächsrunden.
  - sowohl … als auch تشمل المساهمات الموسيقية القصيرة وحلقات النقاش معًا، لا اختيار أحدهما.
- وحدة نصية: Die Teilnehmenden bringen nicht nur Rezepte mit, sondern auch Geschichten aus ihrem Alltag.
  - الوصفات والقصص مثبتة مع nicht nur … sondern auch. المفعول الثاني يشترك في mitbringen؛ لا يلزم تكرار البادئة، ولا تنسب الوصفات إلى بلد.
- وحدة نصية: Noura arbeitet manchmal spät und meldet sich deshalb entweder für den frühen Termin oder für das Treffen am Wochenende an.
  - manchmal spät سبب اختيار موعد مبكر أو لقاء نهاية الأسبوع. meldet sich … an تسجيل، لا حضور مضمون أو ساعة انتهاء عمل محددة.
- وحدة نصية: Sie hat sich an die wechselnden Uhrzeiten gewöhnt.
  - hat sich … gewöhnt صيغة Perfekt مع الضمير و an. التعود على تغير الأوقات لا يحولها إلى مواعيد ثابتة.
- وحدة نصية: In der Gruppe muss niemand für ein ganzes Land oder eine ganze Gemeinschaft sprechen: Alle teilen persönliche Erfahrungen, wenn sie möchten.
  - muss niemand تنفي الإلزام، و wenn sie möchten تقيد المشاركة بالرغبة. لم يقل النص إن التمثيل لا يحدث إطلاقًا.
- وحدة نصية: So lernen die Mitglieder voneinander, ohne einzelne Erlebnisse zu allgemeinen Regeln zu machen.
  - التعلم من الخبرات دون جعلها قواعد عامة؛ نص تربوي خيالي لا بحث ميداني عن ثقافات.

**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

### DL-B1-07-AUD-LST-01

In unserer Wohngemeinschaft planen wir die Aufgaben zusammen. Wir kochen sowohl am Dienstag als auch am Donnerstag. Ich lese nicht nur Romane, sondern auch Sachbücher. Am Wochenende gehen wir entweder in den Park oder ins Museum. Nach acht Uhr abends trinke ich weder Kaffee noch Energydrinks. Jeder kann etwas vorschlagen, und wir wechseln die Aufgaben regelmäßig.

**نتيجة المراجعة:** ست جمل في MP3 واحد بصوت 03؛ جنس الراوي غير مصرح به في النص. حالة ready محفوظة باعتماد سابق، لا اعتماد أو استماع جديد.

- وحدة نصية: In unserer Wohngemeinschaft planen wir die Aufgaben zusammen.
  - wir للراوي وسكان السكن، والتخطيط مشترك. الاسم والجنس غير مصرح بهما؛ لا يستنتجان من الصوت.
- وحدة نصية: Wir kochen sowohl am Dienstag als auch am Donnerstag.
  - الطبخ الثلاثاء والخميس؛ الإضافة لا تحصره في يوم واحد ولا تعني التزامن.
- وحدة نصية: Ich lese nicht nur Romane, sondern auch Sachbücher.
  - Ich للراوي: الروايات والكتب غير الروائية، لا الأخبار من مثال Samir.
- وحدة نصية: Am Wochenende gehen wir entweder in den Park oder ins Museum.
  - الحديقة أو المتحف بديلان. ins Museum تعني الوجهة، ولا نستبدله بالمقهى من الحوار.
- وحدة نصية: Nach acht Uhr abends trinke ich weder Kaffee noch Energydrinks.
  - بعد الثامنة مساءً ينفي الراوي القهوة ومشروبات الطاقة، لا الشاي الأسود. لا حكم على أوقات أخرى.
- وحدة نصية: Jeder kann etwas vorschlagen, und wir wechseln die Aufgaben regelmäßig.
  - يمكن لكل شخص اقتراح شيء، والتبديل منتظم بلا وتيرة رقمية. kann إتاحة لا واجب.

**مصادر القاعدة/المنهج:** مقارنة داخلية بالمصدر والتقييم؛ لا ينسب المرجع الخارجي وقائع القصة الخيالية.

## الخطوة التالية

CR38/B1.8: الاستهلاك والإعلان وje … desto؛ مراجعة فردية وتراكمية، مع حفظMira02/Bilal05 وراويةالقراءة04 والمفردات/النماذج02 والاستماع03. لا توليد قبلالمحتوى،ولا حاجةلمراجعبشريشرطًا. الرفعلايساويالدمج أوالنشر.
