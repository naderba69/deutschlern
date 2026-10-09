#!/usr/bin/env python3
from pathlib import Path
import json,re,sys,hashlib
p=Path('content/B2/lesson-08-food-nutrition-data-passives.md');s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());c=next(x for x in json.load(open('data/course.json'))['lessons'] if x['id']=='b2-08-food-nutrition-data-passives');assets=[x for x in json.load(open('data/audio-playlists.json'))['audioAssets'] if x['lessonId']=='b2-08-food-nutrition-data-passives']
assert a['assessment']['version']==c['assessment']['version']=='b2-08-v2' and a['assessment']['status']=='ready' and a['assessment']['minimumScore']==80 and a['assessment']['minimumItems']==10
assert [q['answerIndex'] for q in a['quiz']]==[2,0,1,1,2,0,1,2,0,1] and sum(len(q['options']) for q in a['quiz'])==30
assert [q['sourceTaskIds'] for q in a['quiz']]==[['DL-B2-08-T01'],['DL-B2-08-T02'],['DL-B2-08-T02'],['DL-B2-08-T03'],['DL-B2-08-T03'],['DL-B2-08-T04'],['DL-B2-08-T05'],['DL-B2-08-T05'],['DL-B2-08-T06'],['DL-B2-08-T07']]
t1,t2=a['performanceTasks']
assert t1['modality']==['writing'] and not t1['selfCheck']['speakAloud'] and t1['selfCheck']['minimumResponseCharacters']==150 and t1['sourceTaskIds']==['DL-B2-08-T08']
assert t2['modality']==['writing','speaking'] and t2['selfCheck']['speakAloud'] and t2['selfCheck']['minimumResponseCharacters']==180 and t2['sourceTaskIds']==['DL-B2-08-T04','DL-B2-08-T05','DL-B2-08-T06','DL-B2-08-T07','DL-B2-08-T08']
for t in (t1,t2):assert t['selfCheck']['audioRequired'] is False and t['selfCheck']['requiredChecks']==['taskCompletion','meaningClarity','targetSkill']
for x in ['ملاحظة حول الجمع وتصريف الأفعال في الجدول:','### مساعدة قبل النصوص والمهمات','1. Heute werden ______ Proben vorbereitet.','5. Die Ergebnisse sind noch nicht ______.','- **تمرين 6:** 1. drei، 2. abgewogen، 3. gekennzeichnet، 4. geprüft، 5. ausgewertet.','الجزء (أ) — المهمة الكتابية الأساسية (`DL-B2-08-P01` — كتابة فقط):','الجزء (ب) — المهمة التراكمية المتكاملة (`DL-B2-08-P02` — كتابة + قراءة بصوت واضح):','## 8) نماذج مكتوبة للمهمات العملية','In unserer Lehrküche werden heute drei fiktive Proben für eine Sprachübung vorbereitet.','In der fiktiven Tabelle aus der Leseübung hat Mischung B je 100 Gramm einen Zuckergehalt von 11 Gramm und 4 Gramm Ballaststoffe','## 9) بطاقات مراجعة']:assert x in s,x
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
counts=[len(re.findall(r'^\d\. ',T[i],re.M)) for i in range(1,8)]+[10]
assert counts==[4,4,4,4,5,5,4,10] and sum(counts)==40,counts
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==10 and all(x['status']=='generated_pending_acoustic_review' and x['transcriptPolicy']=='offer' for x in assets)
assert [z['voiceId'] for x in assets for z in x['segments']]==['voice-02','voice-02','voice-00','voice-03','voice-00','voice-03','voice-00','voice-03','voice-02','voice-03']
if '--implementation-only' in sys.argv:
 print('PASS B2.8 implementation-only: b2-08-v2, 40 exercise subitems, 10 model parts, 5 pending assets/10 clips.');sys.exit(0)
r=json.load(open('data/reviews/b2-08-review.json'));md=Path('data/reviews/b2-08-review.md').read_text();U=r['units']
assert r['lessonId']=='b2-08-food-nutrition-data-passives' and r['assessmentVersion']=='b2-08-v2' and r['unitCount']==len(U)==97 and r['exerciseSubItemCount']==40 and r['modelPartCount']==10 and not r['acousticReviewed'] and not r['cefrCertification']
assert len(r['sources'])==31 and sum(x['access']=='full_fetched_page' for x in r['sources'])==31 and len(r['excludedSources'])==1
assert sum(len(u.get('items',[])) for u in U if u['id'].startswith('DL-B2-08-T'))==40
assert sum(len(u.get('items',[])) for u in U if u['id'].endswith('model-01'))==10
assert [len(u['items']) for u in U if '-AUD-' in u['id']]==[16,7,6,10,5]
assert sum(len(u.get('optionReview',[])) for u in U if u['id'].startswith('DL-B2-08-Q'))==30
assert sum(len(u.get('criterionReview',[])) for u in U if u['id'].startswith('DL-B2-08-P'))==6
for f,h in r['sourceHashes'].items():assert hashlib.sha256(Path(f).read_bytes()).hexdigest()==h,f
for x in assets:assert hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()==r['audioSnapshotHashes'][x['assetId']]
for u in U:assert f"### {u['id']}" in md and u['finding'] in md,u['id']
print('PASS B2.8: 97 units/40 exercise subitems/10 model parts/30 options/6 criteria; five pending assets/10 clips. Not language/acoustic certification.')
