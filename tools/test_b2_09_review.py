#!/usr/bin/env python3
from pathlib import Path
import json,re,sys,hashlib
p=Path('content/B2/lesson-09-business-marketing-employment-prepositions.md');s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());c=next(x for x in json.load(open('data/course.json'))['lessons'] if x['id']=='b2-09-business-marketing-employment-prepositions');assets=[x for x in json.load(open('data/audio-playlists.json'))['audioAssets'] if x['lessonId']=='b2-09-business-marketing-employment-prepositions']
assert a['assessment']['version']==c['assessment']['version']=='b2-09-v2' and a['assessment']['status']=='ready' and a['assessment']['minimumScore']==80 and a['assessment']['minimumItems']==10
assert [q['answerIndex'] for q in a['quiz']]==[0,1,2,0,1,2,0,1,2,1] and sum(len(q['options']) for q in a['quiz'])==30
assert [q['sourceTaskIds'] for q in a['quiz']]==[['DL-B2-09-T01'],['DL-B2-09-T02'],['DL-B2-09-T02'],['DL-B2-09-T03'],['DL-B2-09-T03'],['DL-B2-09-T04'],['DL-B2-09-T05'],['DL-B2-09-T05'],['DL-B2-09-T06'],['DL-B2-09-T07']]
t1,t2=a['performanceTasks']
assert t1['modality']==['writing'] and not t1['selfCheck']['speakAloud'] and t1['selfCheck']['minimumResponseCharacters']==150 and t1['sourceTaskIds']==['DL-B2-09-T08']
assert t2['modality']==['writing','speaking'] and t2['selfCheck']['speakAloud'] and t2['selfCheck']['minimumResponseCharacters']==180 and t2['sourceTaskIds']==['DL-B2-09-T05','DL-B2-09-T06','DL-B2-09-T07','DL-B2-09-T08']
for t in (t1,t2):assert t['selfCheck']['audioRequired'] is False and t['selfCheck']['requiredChecks']==['taskCompletion','meaningClarity','targetSkill']
for x in ['ملاحظة حول الجمع وتصريف الأفعال في الجدول:','### مساعدة قبل النصوص والمهمات','1. Was bietet das fiktive Unternehmen „Nordwerk“ laut Text an?','4. Wovon hängt die Auswahl nicht nur ab, und was ist laut der Personalchefin außerdem entscheidend?','5. ______ interessiert sich die Zielgruppe *(الفئة المستهدفة)* in der Kampagne?','1. Die Personalchefin spricht über eine neue ______.','4. **Die Personalabteilung informiert über die erforderlichen Qualifikationen.**','- **تمرين 1:** 1. Worauf، 2. Womit، 3. Wovon، 4. Worüber، 5. Wofür.','- **تمرين 6:** 1. Stellenanzeige، 2. Erfahrung، 3. Aufgaben، 4. Zeugnis، 5. Beispielen.','الجزء (أ) — المهمة الكتابية الأساسية (`DL-B2-09-P01` — كتابة فقط):','الجزء (ب) — المهمة التراكمية المتكاملة (`DL-B2-09-P02` — كتابة + قراءة بصوت واضح):','## 8) نماذج مكتوبة للمهمات العملية','Das fiktive Unternehmen „Südtechnik“ spezialisiert sich auf wartungsfreundliche Haushaltsgeräte','In der fiktiven Leseübung bietet das erfundene Unternehmen „Nordwerk“ Reparaturdienste und Ausbildungsplätze an','## 9) بطاقات مراجعة']:assert x in s,x
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
counts=[len(re.findall(r'^\d\. ',T[i],re.M)) for i in range(1,8)]+[10]
assert counts==[5,4,4,4,5,5,4,10] and sum(counts)==41,counts
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==12 and all(x['status']=='generated_pending_acoustic_review' and x['transcriptPolicy']=='offer' for x in assets)
assert [z['voiceId'] for x in assets for z in x['segments']]==['voice-02','voice-02','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
if '--implementation-only' in sys.argv:
 print('PASS B2.9 implementation-only: b2-09-v2, 41 exercise subitems, 10 model parts, 5 pending assets/12 clips.');sys.exit(0)
r=json.load(open('data/reviews/b2-09-review.json'));md=Path('data/reviews/b2-09-review.md').read_text();U=r['units']
assert r['lessonId']=='b2-09-business-marketing-employment-prepositions' and r['assessmentVersion']=='b2-09-v2' and r['unitCount']==len(U)==95 and r['exerciseSubItemCount']==41 and r['modelPartCount']==10 and not r['acousticReviewed'] and not r['cefrCertification']
assert len(r['sources'])==34 and sum(x['access']=='full_fetched_page' for x in r['sources'])==34 and len(r['excludedSources'])==3
assert sum(len(u.get('items',[])) for u in U if u['id'].startswith('DL-B2-09-T'))==41
assert sum(len(u.get('items',[])) for u in U if u['id'].endswith('model-01'))==10
assert [len(u['items']) for u in U if '-AUD-' in u['id']]==[15,13,8,7,5]
assert sum(len(u.get('optionReview',[])) for u in U if u['id'].startswith('DL-B2-09-Q'))==30
assert sum(len(u.get('criterionReview',[])) for u in U if u['id'].startswith('DL-B2-09-P'))==6
for f,h in r['sourceHashes'].items():assert hashlib.sha256(Path(f).read_bytes()).hexdigest()==h,f
for x in assets:assert hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()==r['audioSnapshotHashes'][x['assetId']]
for u in U:assert f"### {u['id']}" in md and u['finding'] in md,u['id']
print('PASS B2.9: 95 units/41 exercise subitems/10 model parts/30 options/6 criteria; five pending assets/12 clips. Not language/acoustic certification.')
