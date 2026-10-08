#!/usr/bin/env python3
from pathlib import Path
import json,re,sys,hashlib
p=Path('content/B1/lesson-11-history-politics-passive-past.md');s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());c=next(x for x in json.load(open('data/course.json'))['lessons'] if x['id']=='b1-11-history-politics-passive-past');assets=[x for x in json.load(open('data/audio-playlists.json'))['audioAssets'] if x['lessonId']=='b1-11-history-politics-passive-past']
assert a['assessment']['version']==c['assessment']['version']=='b1-11-v2' and a['assessment']['status']=='ready' and a['assessment']['minimumScore']==80 and a['assessment']['minimumItems']==10
assert [q['answerIndex'] for q in a['quiz']]==[1,1,2,0,0,1,0,0,2,1] and sum(len(q['options']) for q in a['quiz'])==30
assert [q['sourceTaskIds'] for q in a['quiz']]==[['DL-B1-11-T01'],['DL-B1-11-T04'],['DL-B1-11-T02'],['DL-B1-11-T03'],['DL-B1-11-T03'],['DL-B1-11-T07'],['DL-B1-11-T05'],['DL-B1-11-T05'],['DL-B1-11-T06'],['DL-B1-11-T06']]
t1,t2=a['performanceTasks']
assert t1['modality']==['writing'] and not t1['selfCheck']['speakAloud'] and t1['selfCheck']['minimumResponseCharacters']==100 and t1['sourceTaskIds']==['DL-B1-11-T08']
assert t2['modality']==['writing','speaking'] and t2['selfCheck']['speakAloud'] and t2['selfCheck']['minimumResponseCharacters']==125 and t2['sourceTaskIds']==['DL-B1-11-T06','DL-B1-11-T08']
for t in (t1,t2):assert t['selfCheck']['audioRequired'] is False and t['selfCheck']['requiredChecks']==['taskCompletion','meaningClarity','targetSkill'] and t['prompt'] in s
assert 'einem؛ Gästebuch' not in s and 'einem Gästebuch' not in s.split('**تمرين 6:**')[1].split('\n')[0] and 'Gästebuch' in s.split('**تمرين 6:**')[1].split('\n')[0]
for x in ['غائب مفرد','غائب جمع','du wurdest','Mira weiß, dass das Kulturhaus 1985 eröffnet wurde.','Danach wurde in einer Sitzung über den Vorschlag abgestimmt.','Das Museum war geöffnet.','1970 wurde in der fiktiven Gemeinde Morgenhain eine Brücke gebaut.','Im Museum von Sonnenfeld wurde 2021 eine Ausstellung über die alte Brücke eröffnet.']:assert x in s,x
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
counts=[len(re.findall(r'^\d\. ',T[i],re.M)) for i in range(1,8)]+[9]
assert counts==[4,7,3,3,5,5,6,9] and sum(counts)==42,counts
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==10 and all(x['status']=='generated_pending_acoustic_review' and x['transcriptPolicy']=='offer' for x in assets)
assert [z['voiceId'] for x in assets for z in x['segments']]==['voice-02','voice-02','voice-02','voice-00','voice-02','voice-00','voice-02','voice-00','voice-02','voice-03']
if '--implementation-only' in sys.argv:
 print('PASS B1.11 implementation-only: b1-11-v2, 42 exercise subitems, 9 model parts, 5 pending assets/10 clips.');sys.exit(0)
r=json.load(open('data/reviews/b1-11-review.json'));md=Path('data/reviews/b1-11-review.md').read_text();U=r['units']
assert r['lessonId']=='b1-11-history-politics-passive-past' and r['assessmentVersion']=='b1-11-v2' and r['unitCount']==len(U)==99 and r['exerciseSubItemCount']==42 and r['modelPartCount']==9 and not r['acousticReviewed'] and not r['cefrCertification']
assert len(r['sources'])==10 and sum(x['access']=='full_fetched_page' for x in r['sources'])==10 and len(r['excludedSources'])==1
assert sum(len(u.get('items',[])) for u in U if u['id'].startswith('DL-B1-11-T'))==42
assert sum(len(u.get('items',[])) for u in U if u['id'].endswith('model-01'))==9
assert [len(u['items']) for u in U if '-AUD-' in u['id']]==[18,4,6,9,5]
assert sum(len(u.get('optionReview',[])) for u in U if u['id'].startswith('DL-B1-11-Q'))==30
assert sum(len(u.get('criterionReview',[])) for u in U if u['id'].startswith('DL-B1-11-P'))==6
for f,h in r['sourceHashes'].items():assert hashlib.sha256(Path(f).read_bytes()).hexdigest()==h,f
for x in assets:assert hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()==r['audioSnapshotHashes'][x['assetId']]
for u in U:assert f"### {u['id']}" in md and u['finding'] in md,u['id']
print('PASS B1.11: 99 units/42 exercise subitems/9 model parts/30 options/6 criteria; five pending assets/10 clips. Not language/acoustic certification.')
