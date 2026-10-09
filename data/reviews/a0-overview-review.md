# تقرير المراجعة الفردية والتراكمية — `a0-01-overview` ومزامنة سجلات المنهج (`CR55`)

- **معرّف المراجعة:** `cr55-a0-overview-audit-v1`
- **النطاق:** `content/A0/lesson-01-overview.md` + `data/source-plan.md` + `data/curriculum-production-matrix.md` (`v1.5`) + `data/curriculum-audit.md` + `data/curriculum-file-audit.csv` (`53` صفًا)
- **عدد الوحدات المدققة:** `12` وحدة (`9` وحدات في نظرة `A0` العامة + `3` وحدات تدقيق تراكمي عبر المستويات الخمسة)
- **عدد المصادر الإلكترونية المحققة كاملًا (`full_fetched_page`):** `25` مصدرًا (`1` مصدر مستبعد HTTP 404 مسجّل في `excludedSources`)
- **مراجعة سمعية بشرية لملفات MP3:** `false` (فحص بنيوي لإطارات MPEG Layer III فقط)
- **اعتماد CEFR رسمي:** `false`

## 1) المصادر الإلكترونية المحققة

- `coe-cefr-global-scale` — [Council of Europe — Table 1 (CEFR 3.3): Common Reference Levels: Global Scale](https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale) (`chunksFetched: [0, 1]/2`): Official 6-level CEFR scale (A1, A2 Basic User; B1, B2 Independent User; C1, C2 Proficient User), confirming that A0 is an informal pedagogical pre-A1 bridge rather than an official CEFR level.
- `coe-cefr-descriptors` — [Council of Europe — The CEFR Descriptors](https://www.coe.int/en/web/common-european-framework-reference-languages/the-cefr-descriptors) (`chunksFetched: [0]/1`): CEFR Companion Volume communicative activities (reception, production, interaction, mediation) and Pre-A1 bridging descriptors vs. formal certification.
- `schubert-spektrum-overview` — [Schubert-Verlag — Spektrum Deutsch A1+, A2+, B1+, B2 Lehrwerksübersicht](https://www.schubert-verlag.de/spektrum.php) (`chunksFetched: [0, 1]/2`): Publisher overview of the four Spektrum Deutsch volumes (A1+, A2+, B1+, B2), each structured into 12 integrated chapters with Vertiefungsteil, Übersichten, and Abschlusstest.
- `schubert-spektrum-a1-ihv` — [Schubert-Verlag — Spektrum Deutsch A1+ Inhaltsverzeichnis & Kursübersicht (PDF)](https://www.schubert-verlag.de/spektrum/pdf/spektrum_a1_ihv.pdf) (`chunksFetched: [0, 1]/2`): Chapter 1–12 topical and structural progression of Spektrum Deutsch A1+ matched in data/source-plan.md.
- `schubert-spektrum-a2-ihv` — [Schubert-Verlag — Spektrum Deutsch A2+ Inhaltsverzeichnis & Kursübersicht (PDF)](https://www.schubert-verlag.de/spektrum/pdf/spektrum_a2_ihv.pdf) (`chunksFetched: [0, 1]/2`): Chapter 1–12 topical and structural progression of Spektrum Deutsch A2+ matched in data/source-plan.md.
- `schubert-spektrum-b1-ihv` — [Schubert-Verlag — Spektrum Deutsch B1+ Inhaltsverzeichnis & Kursübersicht (PDF)](https://www.schubert-verlag.de/spektrum/pdf/spektrum_b1_ihv.pdf) (`chunksFetched: [0, 1]/2`): Chapter 1–12 topical and structural progression of Spektrum Deutsch B1+ matched in data/source-plan.md.
- `schubert-spektrum-b2-ihv` — [Schubert-Verlag — Spektrum Deutsch B2 Inhaltsverzeichnis & Kursübersicht (PDF)](https://www.schubert-verlag.de/spektrum/pdf/spektrum_b2_ihv.pdf) (`chunksFetched: [0, 1]/2`): Chapter 1–12 topical and structural progression of Spektrum Deutsch B2 matched in data/source-plan.md.
- `schubert-online-aufgaben-b2` — [Schubert-Verlag — Online-Aufgaben Deutsch als Fremdsprache (Vorkurs bis B2)](https://www.schubert-verlag.de/aufgaben/uebungen_b2/sb2_uebungen_index.htm) (`chunksFetched: [0, 1]/2`): Online exercise portal referenced in data/source-plan.md covering Vorkurs (Vom Wort zum Satz) and A1+ through B2.
- `lingolia-en-personal-pronouns` — [Lingolia English — Personal Pronouns in German Grammar](https://deutsch.lingolia.com/en/grammar/pronouns/personal-pronouns) (`chunksFetched: [0]/1`): Subject pronouns (ich, du, er, sie, es, wir, ihr, sie, Sie) and informal du vs. capitalized formal Sie in A0.2 and A0.4.
- `lingolia-en-present-tense` — [Lingolia English — Present Tense (Präsens) in German Grammar](https://deutsch.lingolia.com/en/grammar/tenses/present-tense) (`chunksFetched: [0]/1`): Present-tense conjugation of sein, haben, and regular verbs in A0.2–A0.5.
- `lingolia-en-cardinal-numbers` — [Lingolia English — Cardinal Numbers (Kardinalzahlen) in German](https://deutsch.lingolia.com/en/vocabulary/numbers-dates-time/cardinal-numbers) (`chunksFetched: [0]/1`): Core cardinal numbers 0–20 (null to zwanzig) vs. inverted compound numbers 21–100 (optional recognition expansion in A0.3).
- `lingolia-en-sein-haben` — [Lingolia English — sein and haben in German Grammar](https://deutsch.lingolia.com/en/grammar/verbs/sein-haben) (`chunksFetched: [0]/1`): Full present-tense paradigms of sein (bin, bist, ist, sind, seid, sind) and haben (habe, hast, hat, haben, habt, haben) in A0.4.
- `lingolia-en-main-clauses` — [Lingolia English — Main Clauses (Hauptsätze) in German Grammar](https://deutsch.lingolia.com/en/grammar/sentence-structure/main-clauses) (`chunksFetched: [0]/1`): Finite verb in second position (V2) in declarative main clauses (Aussagesätze).
- `lingolia-en-questions` — [Lingolia English — Questions (Fragesätze) in German Grammar](https://deutsch.lingolia.com/en/grammar/sentence-structure/questions) (`chunksFetched: [0]/1`): Verb-first yes/no questions (Entscheidungsfragen) vs. W-word + V2 open questions (Ergänzungsfragen).
- `duden-alphabet-abc` — [Duden — Alphabet (Abc)](https://www.duden.de/rechtschreibung/Alphabet_Abc) (`chunksFetched: [0]/1`): das Alphabet; Genitiv des Alphabet[e]s, Plural die Alphabete.
- `duden-umlaut` — [Duden — Umlaut](https://www.duden.de/rechtschreibung/Umlaut) (`chunksFetched: [0]/1`): der Umlaut; Umlaut letters ä, ö, ü in the German writing system.
- `duden-eszett` — [Duden — Eszett](https://www.duden.de/rechtschreibung/Eszett) (`chunksFetched: [0]/1`): das Eszett (ß / ẞ, scharfes s) after long vowels and diphthongs.
- `duden-buchstabe` — [Duden — Buchstabe](https://www.duden.de/rechtschreibung/Buchstabe) (`chunksFetched: [0]/1`): der Buchstabe; Genitiv des Buchstabens, Plural die Buchstaben.
- `duden-buchstabieren` — [Duden — buchstabieren](https://www.duden.de/rechtschreibung/buchstabieren) (`chunksFetched: [0]/1`): buchstabieren (buchstabiert, buchstabierte, hat buchstabiert): naming the letters of a word or name in sequence.
- `duden-aussprache` — [Duden — Aussprache](https://www.duden.de/rechtschreibung/Aussprache) (`chunksFetched: [0]/1`): die Aussprache; Genitiv der Aussprache, Plural die Aussprachen.
- `duden-begrueszung` — [Duden — Begrüßung](https://www.duden.de/rechtschreibung/Begrueszung) (`chunksFetched: [0]/1`): die Begrüßung; Genitiv der Begrüßung, Plural die Begrüßungen.
- `duden-kardinalzahl` — [Duden — Kardinalzahl](https://www.duden.de/rechtschreibung/Kardinalzahl) (`chunksFetched: [0]/1`): die Kardinalzahl (Grundzahl); Plural die Kardinalzahlen.
- `duden-personalpronomen` — [Duden — Personalpronomen](https://www.duden.de/rechtschreibung/Personalpronomen) (`chunksFetched: [0]/1`): das Personalpronomen; Plural die Personalpronomina / Personalpronomen.
- `duden-aussagesatz` — [Duden — Aussagesatz](https://www.duden.de/rechtschreibung/Aussagesatz) (`chunksFetched: [0]/1`): der Aussagesatz; declarative main clause with V2 finite verb.
- `duden-fragesatz` — [Duden — Fragesatz](https://www.duden.de/rechtschreibung/Fragesatz) (`chunksFetched: [0]/1`): der Fragesatz (Interrogativsatz); yes/no V1 and W-word V2 questions.

### المصادر المستبعدة (`excludedSources`)

- `https://www.duden.de/rechtschreibung/Alphabet`: HTTP 404 on bare /Alphabet path because Duden disambiguates /Alphabet_Abc vs. /Alphabet_Person; replaced by https://www.duden.de/rechtschreibung/Alphabet_Abc.

## 2) الوحدات المدققة (`units`)

### DL-A0-OVERVIEW-SCOPE-01
- **العنوان:** تعريف جسر A0 التمهيدي غير الرسمي قبل A1
- **الموضع:** `content/A0/lesson-01-overview.md#L1-L4`
- **النتيجة:** يحدد بوضوح أن A0 جسر تعليمي تمهيدي غير رسمي قبل A1 وليس مستوى CEFR مستقلًا، بما يطابق جدول المستويات الستة الرسمي لدى مجلس أوروبا (A1–C2).
- **المراجع:** `coe-cefr-global-scale`, `coe-cefr-descriptors`, `schubert-spektrum-overview`

### DL-A0-OVERVIEW-OUTCOME-01
- **العنوان:** مخرج A0.1: الحروف الـ26 وحروف الإمالة Ä/Ö/Ü وحرف Eszett والتهجئة
- **الموضع:** `content/A0/lesson-01-overview.md#L7`
- **النتيجة:** يضبط بدقة عدد الحروف اللاتينية الأساسية (26) وحروف الإمالة الثلاثة (Ä ä, Ö ö, Ü ü) وحرف Eszett (ß / ẞ بعد الصائت الطويل أو المركب الصوتي مقابل ss بعد الصائت القصير) ومهارة التهجئة (buchstabieren).
- **المراجع:** `duden-alphabet-abc`, `duden-umlaut`, `duden-eszett`, `duden-buchstabe`, `duden-buchstabieren`

### DL-A0-OVERVIEW-OUTCOME-02
- **العنوان:** مخرج A0.1: الأنماط الصوتية المستهدفة (ei, ie, sch, z, w, v, sp-/st-, ch)
- **الموضع:** `content/A0/lesson-01-overview.md#L8`
- **النتيجة:** يوثق الأنماط الصوتية المستهدفة في A0.1 مع التمثيل الصوتي القياسي ([aɪ], [iː], [ʃ], [ts], [v]) وملاحظة الفروق الإملائية الصوتية الأساسية.
- **المراجع:** `duden-aussprache`, `schubert-spektrum-a1-ihv`

### DL-A0-OVERVIEW-OUTCOME-03
- **العنوان:** مخرج A0.2: التحية والوداع والتمييز بين du وSie
- **الموضع:** `content/A0/lesson-01-overview.md#L9`
- **النتيجة:** يطابق مراجعة A0.2 (a0-02-v2) في التمييز بين الخطاب غير الرسمي du (Wie heißt du? / Wie geht es dir?) والخطاب الرسمي الكبير الحرف Sie (Wie heißen Sie? / Wie geht es Ihnen?).
- **المراجع:** `lingolia-en-personal-pronouns`, `duden-begrueszung`

### DL-A0-OVERVIEW-OUTCOME-04
- **العنوان:** مخرج A0.3: الأعداد الأساسية 0–20 والبيانات الشخصية النموذجية وقراءة رقم الهاتف خانةً خانة
- **الموضع:** `content/A0/lesson-01-overview.md#L10`
- **النتيجة:** يطابق مراجعة A0.3 (a0-03-v3) في حصر شرط الإتقان بالأعداد الأساسية 0–20 وقراءة رقم الهاتف خانةً خانة واستخدام بيانات نموذجية/تدريبية، مع إبقاء الأعداد المركبة 21–100 توسعة تعرّف اختيارية.
- **المراجع:** `lingolia-en-cardinal-numbers`, `duden-kardinalzahl`

### DL-A0-OVERVIEW-OUTCOME-05
- **العنوان:** مخرج A0.4: ضمائر الفاعل وتصريف sein/haben وترتيب الجملة الخبرية V2 والسؤال
- **الموضع:** `content/A0/lesson-01-overview.md#L11`
- **النتيجة:** يطابق مراجعة A0.4 (a0-04-v2) في جدول ضمائر الفاعل وتصريف sein وhaben والتمييز بين الجملة الخبرية (Aussagesatz — V2) والسؤال المفتوح (W-Frage — V2) وسؤال نعم/لا (Ja/Nein-Frage — V1).
- **المراجع:** `lingolia-en-personal-pronouns`, `lingolia-en-present-tense`, `lingolia-en-sein-haben`, `lingolia-en-main-clauses`, `lingolia-en-questions`, `duden-personalpronomen`, `duden-aussagesatz`, `duden-fragesatz`

### DL-A0-OVERVIEW-OUTCOME-06
- **العنوان:** مخرج A0.5: عبارات الصف وطلب الإعادة والإبطاء والتهجئة والمعنى والمساعدة
- **الموضع:** `content/A0/lesson-01-overview.md#L12`
- **النتيجة:** يطابق مراجعة A0.5 (a0-05-v2) في العبارات الصفية القياسية (Noch einmal, bitte! / Langsamer, bitte! / Wie schreibt man das? / Was bedeutet …? / Können Sie mir bitte helfen?).
- **المراجع:** `coe-cefr-descriptors`, `lingolia-en-questions`

### DL-A0-OVERVIEW-MAP-01
- **العنوان:** خريطة وحدات A0.1–A0.5 وبوابة الانتقال A0→A1 والأصول الصوتية الـ12 (27 مقطعًا)
- **الموضع:** `content/A0/lesson-01-overview.md#L14-L21`
- **النتيجة:** توثق خريطة الوحدات المعرّفات الرسمية ونسخ التقييم المعتمدة (a0-01-v2, a0-02-v2, a0-03-v3, a0-04-v2, a0-05-v2, a0-gate-v2) وتوزيع الأصول الصوتية الـ12 المعتمدة (27 مقطع MP3 بحالة ready) وسياسة إخفاء نص استماع البوابة (hide_until_first_attempt).
- **المراجع:** `coe-cefr-descriptors`, `schubert-spektrum-overview`

### DL-A0-OVERVIEW-GATE-RULE-01
- **العنوان:** قاعدة الانتقال من A0 إلى A1 بعتبة 80% ومهام الأداء ذاتية التحقق محليًا
- **الموضع:** `content/A0/lesson-01-overview.md#L23-L25`
- **النتيجة:** تشرح بدقة شرط إتقان الدروس الخمسة (80% + P01/P02) وبوابة الانتقال (80% في DL-A0-GATE-Q01..Q10 + المهام الثلاث DL-A0-GATE-P01..P03) والتحقق الذاتي المحلي دون تسجيل صوتي أو ادعاء شهادة CEFR رسمية.
- **المراجع:** `coe-cefr-global-scale`, `coe-cefr-descriptors`

### DL-COURSE-AUDIT-SOURCE-PLAN-01
- **العنوان:** مزامنة خريطة المنهج المرجعية data/source-plan.md (المخزنة في APP_SHELL والمربوطة من الواجهة)
- **الموضع:** `data/source-plan.md#L1-L87`
- **النتيجة:** حُدّثت الأرقام والحالات في data/source-plan.md لتطابق الحزمة المبنية بعد CR54/CR55: 53 درسًا + بوابة A0، 55 حارس مراجعة، 431 معرّف T (428 تمرينًا في الدروس + 3 مهام مصدرية في البوابة)، 61 قسم حوار، 754 مفردة، 540 سؤالًا، 109 مهمات أداء، 1080 معرّفًا في الفهرس، و217 أصلًا صوتيًا / 474 مقطع MP3 (137 ready / 302 مقاطع في A0–B1.8؛ 80 generated_pending_acoustic_review / 172 مقطعًا في B1.9–B2.12).
- **المراجع:** `schubert-spektrum-overview`, `schubert-spektrum-a1-ihv`, `schubert-spektrum-a2-ihv`, `schubert-spektrum-b1-ihv`, `schubert-spektrum-b2-ihv`, `schubert-online-aufgaben-b2`

### DL-COURSE-AUDIT-MATRIX-01
- **العنوان:** مزامنة مصفوفة الإنتاج التعليمية data/curriculum-production-matrix.md (الإصدار 1.5) وتقرير التدقيق data/curriculum-audit.md
- **الموضع:** `data/curriculum-production-matrix.md#L1-L161`
- **النتيجة:** رُقّيت مصفوفة الإنتاج إلى الإصدار 1.5 وحُدّث تقرير التدقيق data/curriculum-audit.md لتوثيق نسخ التقييم المعتمدة v2/v3 لجميع الدروس الـ53 وبوابة A0، و1080 معرّفًا في الفهرس، و217 أصلًا صوتيًا / 474 مقطع MP3 دون ادعاء مراجعة سمعية بشرية.
- **المراجع:** `coe-cefr-global-scale`, `coe-cefr-descriptors`, `schubert-spektrum-overview`

### DL-COURSE-AUDIT-FILE-CSV-01
- **العنوان:** مزامنة سجل تدقيق ملفات الدروس الـ53 في data/curriculum-file-audit.csv
- **الموضع:** `data/curriculum-file-audit.csv#L1-L54`
- **النتيجة:** حُدّثت صفوف الدروس الـ53 كافة في data/curriculum-file-audit.csv لتطابق عناوين H1 والأهداف والمدد وعدد التمارين (428) وأقسام الحوار (61) ونسخ التقييم (v2/v3) والمقاطع الصوتية الفعلية (473 مقطعًا في الدروس + مقطع البوابة = 474) وحالاتها (ready في A0.1–B1.8 وgenerated_pending_acoustic_review في B1.9–B2.12).
- **المراجع:** `coe-cefr-descriptors`, `schubert-spektrum-overview`
