#!/usr/bin/env python3
from pathlib import Path
import json,re,sys,hashlib
p=Path('content/B2/lesson-07-travel-experiences-prepositional-relatives.md');s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());c=next(x for x in json.load(open('data/course.json'))['lessons'] if x['id']=='b2-07-travel-experiences-prepositional-relatives');assets=[x for x in json.load(open('data/audio-playlists.json'))['audioAssets'] if x['lessonId']=='b2-07-travel-experiences-prepositional-relatives']
assert a['assessment']['version']==c['assessment']['version']=='b2-07-v3' and a['assessment']['status']=='ready' and a['assessment']['minimumScore']==80 and a['assessment']['minimumItems']==10
assert [q['answerIndex'] for q in a['quiz']]==[1,2,0,1,2,0,1,2,0,1] and sum(len(q['options']) for q in a['quiz'])==30
assert [q['sourceTaskIds'] for q in a['quiz']]==[['DL-B2-07-T01'],['DL-B2-07-T02'],['DL-B2-07-T02'],['DL-B2-07-T03'],['DL-B2-07-T03'],['DL-B2-07-T04'],['DL-B2-07-T05'],['DL-B2-07-T05'],['DL-B2-07-T06'],['DL-B2-07-T07']]
t1,t2=a['performanceTasks']
assert t1['modality']==['writing'] and not t1['selfCheck']['speakAloud'] and t1['selfCheck']['minimumResponseCharacters']==150 and t1['sourceTaskIds']==['DL-B2-07-T08']
assert t2['modality']==['writing','speaking'] and t2['selfCheck']['speakAloud'] and t2['selfCheck']['minimumResponseCharacters']==180 and t2['sourceTaskIds']==['DL-B2-07-T03','DL-B2-07-T05','DL-B2-07-T06','DL-B2-07-T08']
for t in (t1,t2):assert t['selfCheck']['audioRequired'] is False and t['selfCheck']['requiredChecks']==['taskCompletion','meaningClarity','targetSkill'] and t['prompt'] in s.replace('`','').replace('**','')
for x in ['تنبيه مفردات: الاسم المركّب **die Reiseetappe**','### مساعدة قبل النصوص والمهمات','4. **Wir erreichen eine Bucht. An der Bucht liegen mehrere Fischerboote.**','4. Der Aussichtspunkt / von dem aus / wir / die Küste / sehen / ist / bekannt.','1. Zuerst besuchte die Gruppe einen kleinen ______.','- **تمرين 2:** 1. in dem، 2. zu dem، 3. über die، 4. von der.','Unsere fiktive Wochenendreise beginnt an einem kleinen Hafen, von dem aus wir am Morgen zur Nachbarinsel aufbrechen.','Die Reise über die fiktive Insel Morgenküste beginnt mit einer Fähre, mit der Lina und ihre Freunde im Hafen West ablegen.']:assert x in s,x
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
counts=[len(re.findall(r'^\d\. ',T[i],re.M)) for i in range(1,8)]+[10]
assert counts==[5,4,4,4,5,5,5,10] and sum(counts)==42,counts
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==10 and all(x['status']=='ready' and x['transcriptPolicy']=='offer' for x in assets)
assert [z['voiceId'] for x in assets for z in x['segments']]==['voice-02','voice-02','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
if '--implementation-only' in sys.argv:
 print('PASS B2.7 implementation-only: b2-07-v3, 42 exercise subitems, 10 model parts, 5 pending assets/10 clips.');sys.exit(0)
r=json.load(open('data/reviews/b2-07-review.json'));md=Path('data/reviews/b2-07-review.md').read_text();U=r['units']
assert r['lessonId']=='b2-07-travel-experiences-prepositional-relatives' and r['assessmentVersion']=='b2-07-v3' and r['unitCount']==len(U)==98 and r['exerciseSubItemCount']==42 and r['modelPartCount']==10 and not r['acousticReviewed'] and not r['cefrCertification']
assert len(r['sources'])==20 and sum(x['access']=='full_fetched_page' for x in r['sources'])==20 and len(r['excludedSources'])==2
assert sum(len(u.get('items',[])) for u in U if u['id'].startswith('DL-B2-07-T'))==42
assert sum(len(u.get('items',[])) for u in U if u['id'].endswith('model-01'))==10
assert [len(u['items']) for u in U if '-AUD-' in u['id']]==[16,5,6,7,4]
assert sum(len(u.get('optionReview',[])) for u in U if u['id'].startswith('DL-B2-07-Q'))==30
assert sum(len(u.get('criterionReview',[])) for u in U if u['id'].startswith('DL-B2-07-P'))==6
for f,h in r['sourceHashes'].items():assert hashlib.sha256(Path(f).read_bytes()).hexdigest()==h,f
for x in assets:assert hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()==r['audioSnapshotHashes'][x['assetId']]
for u in U:assert f"### {u['id']}" in md and u['finding'] in md,u['id']
print('PASS B2.7: 98 units/42 exercise subitems/10 model parts/30 options/6 criteria; five pending assets/10 clips. Not language/acoustic certification.')
