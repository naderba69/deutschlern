#!/usr/bin/env python3
from pathlib import Path
import json,re,sys,hashlib
p=Path('content/B2/lesson-11-humans-nature-environment-nominalization.md');s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());c=next(x for x in json.load(open('data/course.json'))['lessons'] if x['id']=='b2-11-humans-nature-environment-nominalization');assets=[x for x in json.load(open('data/audio-playlists.json'))['audioAssets'] if x['lessonId']=='b2-11-humans-nature-environment-nominalization']
assert a['assessment']['version']==c['assessment']['version']=='b2-11-v2' and a['assessment']['status']=='ready' and a['assessment']['minimumScore']==80 and a['assessment']['minimumItems']==10
assert [q['answerIndex'] for q in a['quiz']]==[0,1,2,0,1,2,0,1,2,1] and sum(len(q['options']) for q in a['quiz'])==30
assert [q['sourceTaskIds'] for q in a['quiz']]==[['DL-B2-11-T01'],['DL-B2-11-T02'],['DL-B2-11-T02'],['DL-B2-11-T03'],['DL-B2-11-T03'],['DL-B2-11-T04'],['DL-B2-11-T05'],['DL-B2-11-T05'],['DL-B2-11-T06'],['DL-B2-11-T07']]
t1,t2=a['performanceTasks']
assert t1['modality']==['writing'] and not t1['selfCheck']['speakAloud'] and t1['selfCheck']['minimumResponseCharacters']==180 and t1['sourceTaskIds']==['DL-B2-11-T08']
assert t2['modality']==['writing','speaking'] and t2['selfCheck']['speakAloud'] and t2['selfCheck']['minimumResponseCharacters']==220 and t2['sourceTaskIds']==['DL-B2-11-T05','DL-B2-11-T06','DL-B2-11-T07','DL-B2-11-T08']
for t in (t1,t2):assert t['selfCheck']['audioRequired'] is False and t['selfCheck']['requiredChecks']==['taskCompletion','meaningClarity','targetSkill']
for x in ['ملاحظة حول الجمع والحالات وتصريف الأفعال في الجدول:','### مساعدة قبل النصوص والمهمات','5. موازنة المصالح والخيارات المختلفة قبل القرار: **abwägen / beeinträchtigen**','5. **Nachdem man mögliche Auswirkungen geprüft hat, …** → **Nach der ______ möglicher Auswirkungen …**','4. ______ Planung wurden mehrere Gespräche mit der Bevölkerung geführt. (**bei / Dativ**)','4. **Beim Schutz eines Feuchtgebiets müssen die Interessen verschiedener Gruppen abgewogen werden.**','4. **weil die Ufer wiederhergestellt werden** / **aufgrund der Wiederherstellung der Ufer**','2. Den Schutz eines kleinen Lebensraums und die Verbesserung des Zugangs zum Fluss.','- **تمرين 1:** 1. der Schutz، 2. die Renaturierung، 3. die Auswirkung، 4. der Lebensraum، 5. abwägen.','- **تمرين 2:** 1. Schutz، 2. Verringerung، 3. Wiederherstellung، 4. Beteiligung، 5. Prüfung.','- **تمرين 3:** 1. Bei dem / Beim، 2. Durch die، 3. Aufgrund der، 4. Bei der.','- **تمرين 4:** 1. den Abfall verringert، 2. beteiligt، 3. wiederhergestellt wird، 4. geschützt wird.','الجزء (أ) — المهمة الكتابية الأساسية (`DL-B2-11-P01` — كتابة فقط):','الجزء (ب) — المهمة التراكمية المتكاملة (`DL-B2-11-P02` — كتابة + قراءة بصوت واضح):','## 8) نماذج مكتوبة للمهمات العملية','In einem fiktiven Stadtpark am Nordbach wird ein Konzept zur Renaturierung','Laut dem fiktiven Lesetext wird im Viertel Flussbogen über die Renaturierung','## 9) بطاقات مراجعة']:assert x in s,x
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
counts=[len(re.findall(r'^\d\. ',T[i],re.M)) for i in range(1,8)]+[10]
assert counts==[5,5,4,4,5,5,4,10] and sum(counts)==42,counts
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==11 and all(x['status']=='ready' and x['transcriptPolicy']=='offer' for x in assets)
assert [z['voiceId'] for x in assets for z in x['segments']]==['voice-02','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
if '--implementation-only' in sys.argv:
 print('PASS B2.11 implementation-only: b2-11-v2, 42 exercise subitems, 11 model parts, 5 pending assets/11 clips.');sys.exit(0)
r=json.load(open('data/reviews/b2-11-review.json'));md=Path('data/reviews/b2-11-review.md').read_text();U=r['units']
assert r['lessonId']=='b2-11-humans-nature-environment-nominalization' and r['assessmentVersion']=='b2-11-v2' and r['unitCount']==len(U)==91 and r['exerciseSubItemCount']==42 and r['modelPartCount']==11 and not r['acousticReviewed'] and not r['cefrCertification']
assert len(r['sources'])==52 and sum(x['access']=='full_fetched_page' for x in r['sources'])==52 and len(r['excludedSources'])==5
assert sum(len(u.get('items',[])) for u in U if u['id'].startswith('DL-B2-11-T'))==42
assert sum(len(u.get('items',[])) for u in U if u['id'].endswith('model-01'))==11
assert [len(u['items']) for u in U if '-AUD-' in u['id']]==[16,7,7,8,5]
assert sum(len(u.get('optionReview',[])) for u in U if u['id'].startswith('DL-B2-11-Q'))==30
assert sum(len(u.get('criterionReview',[])) for u in U if u['id'].startswith('DL-B2-11-P'))==6
for f,h in r['sourceHashes'].items():assert hashlib.sha256(Path(f).read_bytes()).hexdigest()==h,f
for x in assets:assert hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()==r['audioSnapshotHashes'][x['assetId']]
for u in U:assert f"### {u['id']}" in md and u['finding'] in md,u['id']
print('PASS B2.11: 91 units/42 exercise subitems/11 model parts/30 options/6 criteria; five pending assets/11 clips. Not language/acoustic certification.')
