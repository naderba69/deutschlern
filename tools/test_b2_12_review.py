#!/usr/bin/env python3
from pathlib import Path
import json,re,sys,hashlib
p=Path('content/B2/lesson-12-leisure-media-reported-speech.md');s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());c=next(x for x in json.load(open('data/course.json'))['lessons'] if x['id']=='b2-12-leisure-media-reported-speech');assets=[x for x in json.load(open('data/audio-playlists.json'))['audioAssets'] if x['lessonId']=='b2-12-leisure-media-reported-speech']
assert a['assessment']['version']==c['assessment']['version']=='b2-12-v2' and a['assessment']['status']=='ready' and a['assessment']['minimumScore']==80 and a['assessment']['minimumItems']==10
assert [q['answerIndex'] for q in a['quiz']]==[0,1,2,0,1,2,1,0,1,2] and sum(len(q['options']) for q in a['quiz'])==30
assert [q['sourceTaskIds'] for q in a['quiz']]==[['DL-B2-12-T01'],['DL-B2-12-T02'],['DL-B2-12-T02'],['DL-B2-12-T03'],['DL-B2-12-T03'],['DL-B2-12-T05'],['DL-B2-12-T05'],['DL-B2-12-T06'],['DL-B2-12-T07'],['DL-B2-12-T04']]
t1,t2=a['performanceTasks']
assert t1['modality']==['writing'] and not t1['selfCheck']['speakAloud'] and t1['selfCheck']['minimumResponseCharacters']==220 and t1['sourceTaskIds']==['DL-B2-12-T08']
assert t2['modality']==['writing','speaking'] and t2['selfCheck']['speakAloud'] and t2['selfCheck']['minimumResponseCharacters']==250 and t2['sourceTaskIds']==['DL-B2-12-T05','DL-B2-12-T06','DL-B2-12-T07','DL-B2-12-T08']
for t in (t1,t2):assert t['selfCheck']['audioRequired'] is False and t['selfCheck']['requiredChecks']==['taskCompletion','meaningClarity','targetSkill']
for x in ['**ملاحظة حول الجمع والتصريف والحالات في الجدول:**','### مساعدة قبل النصوص والمهمات','5. Die Moderatorin erklärt, die neuen Folgen ______ für ein breites Publikum gedacht. (sein)','4. **Einige Leserinnen berichten: „Wir haben das offene Ende überraschend gefunden.“** → Einige Leserinnen berichten, sie ______ das offene Ende überraschend gefunden.','4. **Der Gast antwortet direkt auf die Frage nach seiner eigenen Meinung:** „Ich finde die Bilder eindrucksvoll, aber die Erklärung ______ manchmal zu kurz.“ (**ist / sei**؛ رأي شخصي مباشر بصيغة الخبر)','5. **Der Regisseur sagt: „Der Film will Fragen stellen.“** → Der Regisseur sagt, der Film ______ Fragen stellen. (**wolle / will**؛ قول منسوب إلى المخرج)','5. **Dem Gast zufolge seien manche Themen umstritten.**','1. Die Autorin schreibe am liebsten am frühen ______.','**الجزء (أ) — المهمة الكتابية الأساسية (`DL-B2-12-P01` — كتابة فقط):**','**الجزء (ب) — المهمة التراكمية المتكاملة (`DL-B2-12-P02` — كتابة وجهر استنادًا إلى `T05` و`T06` و`T07`):**','- **تمرين 1:** 1. sei، 2. arbeite، 3. habe، 4. beginne، 5. seien.','- **تمرين 2:** 1. sei، 2. habe، 3. würden، 4. hätten.','- **تمرين 3:** 1. sei، 2. verstünden، 3. beginne، 4. ist، 5. wolle.','- **تمرين 4:** 1. قول منسوب، 2. رأي الكاتب، 3. قول منسوب، 4. رأي الكاتب، 5. قول منسوب.','## 8) نماذج مكتوبة للمهمات العملية','In einer fiktiven Kultursendung berichtet der Moderator über ein Gespräch mit einer jungen Theaterregisseurin.','Laut der fiktiven Rezension im Kulturmagazin „Freizeitblick“ berichtet die Redaktion über einen neuen Podcast zur Stadtgeschichte, der regelmäßig ergänzt werde.','## 9) بطاقات مراجعة']:assert x in s,x
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
counts=[len(re.findall(r'^\d\. ',T[i],re.M)) for i in range(1,8)]+[10]
assert counts==[5,4,5,5,5,5,4,10] and sum(counts)==43,counts
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==10 and all(x['status']=='generated_pending_acoustic_review' and x['transcriptPolicy']=='offer' for x in assets)
assert [z['voiceId'] for x in assets for z in x['segments']]==['voice-02','voice-02','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
if '--implementation-only' in sys.argv:
 print('PASS B2.12 implementation-only: b2-12-v2, 43 exercise subitems, 11 model parts, 5 pending assets/10 clips.');sys.exit(0)
r=json.load(open('data/reviews/b2-12-review.json'));md=Path('data/reviews/b2-12-review.md').read_text();U=r['units']
assert r['lessonId']=='b2-12-leisure-media-reported-speech' and r['assessmentVersion']=='b2-12-v2' and r['unitCount']==len(U)==89 and r['exerciseSubItemCount']==43 and r['modelPartCount']==11 and not r['acousticReviewed'] and not r['cefrCertification']
assert len(r['sources'])==55 and sum(x['access']=='full_fetched_page' for x in r['sources'])==55 and len(r['excludedSources'])==4
assert sum(len(u.get('items',[])) for u in U if u['id'].startswith('DL-B2-12-T'))==43
assert sum(len(u.get('items',[])) for u in U if u['id'].endswith('model-01'))==11
assert [len(u['items']) for u in U if '-AUD-' in u['id']]==[16,6,6,8,5]
assert sum(len(u.get('optionReview',[])) for u in U if u['id'].startswith('DL-B2-12-Q'))==30
assert sum(len(u.get('criterionReview',[])) for u in U if u['id'].startswith('DL-B2-12-P'))==6
for f,h in r['sourceHashes'].items():assert hashlib.sha256(Path(f).read_bytes()).hexdigest()==h,f
for x in assets:assert hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()==r['audioSnapshotHashes'][x['assetId']]
for u in U:assert f"### {u['id']}" in md and u['finding'] in md,u['id']
print('PASS B2.12: 89 units/43 exercise subitems/11 model parts/30 options/6 criteria; five pending assets/10 clips. Not language/acoustic certification.')
