#!/usr/bin/env python3
from pathlib import Path
import json,re,sys,hashlib
p=Path('content/B2/lesson-01-time-management-habits-reading.md');s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());c=next(x for x in json.load(open('data/course.json'))['lessons'] if x['id']=='b2-01-time-management-habits-reading');assets=[x for x in json.load(open('data/audio-playlists.json'))['audioAssets'] if x['lessonId']=='b2-01-time-management-habits-reading']
assert a['assessment']['version']==c['assessment']['version']=='b2-01-v2' and a['assessment']['status']=='ready' and a['assessment']['minimumScore']==80 and a['assessment']['minimumItems']==10
assert [q['answerIndex'] for q in a['quiz']]==[1,2,0,1,2,0,1,2,0,1] and sum(len(q['options']) for q in a['quiz'])==30
assert [q['sourceTaskIds'] for q in a['quiz']]==[['DL-B2-01-T01'],['DL-B2-01-T02'],['DL-B2-01-T03'],['DL-B2-01-T04'],['DL-B2-01-T05'],['DL-B2-01-T05'],['DL-B2-01-T06'],['DL-B2-01-T06'],['DL-B2-01-T07'],['DL-B2-01-T07']]
t1,t2=a['performanceTasks']
assert t1['modality']==['writing'] and not t1['selfCheck']['speakAloud'] and t1['selfCheck']['minimumResponseCharacters']==160 and t1['sourceTaskIds']==['DL-B2-01-T08']
assert t2['modality']==['writing','speaking'] and t2['selfCheck']['speakAloud'] and t2['selfCheck']['minimumResponseCharacters']==190 and t2['sourceTaskIds']==['DL-B2-01-T06','DL-B2-01-T08']
for t in (t1,t2):assert t['selfCheck']['audioRequired'] is False and t['selfCheck']['requiredChecks']==['taskCompletion','meaningClarity','targetSkill'] and t['prompt'] in s
for x in ['*(رابط من كلمة واحدة)*','1. Früher hat die Person oft zwischen mehreren ______ gewechselt.','4. **Dadurch, dass sie Benachrichtigungen ausschaltet, liest sie konzentrierter.**','4. **Ich schreibe eine kurze Aufgabenliste. Ich möchte nichts Wichtiges vergessen.** → **um … zu**','Früher habe ich beim Lesen oft zwischen Nachrichten und langen Texten gewechselt.','In der Aufnahme berichtet die Person, dass sie früher oft zwischen mehreren Aufgaben gewechselt hat und jetzt zwei Zeitblöcke für konzentrierte Arbeit plant.']:assert x in s,x
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
counts=[len(re.findall(r'^\d\. ',T[i],re.M)) for i in range(1,8)]+[10]
assert counts==[4,3,3,5,5,5,4,10] and sum(counts)==39,counts
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==12 and all(x['status']=='generated_pending_acoustic_review' and x['transcriptPolicy']=='offer' for x in assets)
assert [z['voiceId'] for x in assets for z in x['segments']]==['voice-02','voice-02','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
if '--implementation-only' in sys.argv:
 print('PASS B2.1 implementation-only: b2-01-v2, 39 exercise subitems, 10 model parts, 5 pending assets/12 clips.');sys.exit(0)
r=json.load(open('data/reviews/b2-01-review.json'));md=Path('data/reviews/b2-01-review.md').read_text();U=r['units']
assert r['lessonId']=='b2-01-time-management-habits-reading' and r['assessmentVersion']=='b2-01-v2' and r['unitCount']==len(U)==100 and r['exerciseSubItemCount']==39 and r['modelPartCount']==10 and not r['acousticReviewed'] and not r['cefrCertification']
assert len(r['sources'])==10 and sum(x['access']=='full_fetched_page' for x in r['sources'])==9 and sum(x['access']=='scoped_fetched_chunks' for x in r['sources'])==1 and len(r['excludedSources'])==1
assert sum(len(u.get('items',[])) for u in U if u['id'].startswith('DL-B2-01-T'))==39
assert sum(len(u.get('items',[])) for u in U if u['id'].endswith('model-01'))==10
assert [len(u['items']) for u in U if '-AUD-' in u['id']]==[15,5,8,9,5]
assert sum(len(u.get('optionReview',[])) for u in U if u['id'].startswith('DL-B2-01-Q'))==30
assert sum(len(u.get('criterionReview',[])) for u in U if u['id'].startswith('DL-B2-01-P'))==6
for f,h in r['sourceHashes'].items():assert hashlib.sha256(Path(f).read_bytes()).hexdigest()==h,f
for x in assets:assert hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()==r['audioSnapshotHashes'][x['assetId']]
for u in U:assert f"### {u['id']}" in md and u['finding'] in md,u['id']
print('PASS B2.1: 100 units/39 exercise subitems/10 model parts/30 options/6 criteria; five pending assets/12 clips. Not language/acoustic certification.')
