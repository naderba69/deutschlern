#!/usr/bin/env python3
from pathlib import Path
import json,re,sys,hashlib
p=Path('content/B2/lesson-05-health-fitness-medical-information.md');s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());c=next(x for x in json.load(open('data/course.json'))['lessons'] if x['id']=='b2-05-health-fitness-medical-information');assets=[x for x in json.load(open('data/audio-playlists.json'))['audioAssets'] if x['lessonId']=='b2-05-health-fitness-medical-information']
assert a['assessment']['version']==c['assessment']['version']=='b2-05-v3' and a['assessment']['status']=='ready' and a['assessment']['minimumScore']==80 and a['assessment']['minimumItems']==10
assert [q['answerIndex'] for q in a['quiz']]==[1,2,0,1,2,0,2,1,0,1] and sum(len(q['options']) for q in a['quiz'])==30
assert [q['sourceTaskIds'] for q in a['quiz']]==[['DL-B2-05-T01'],['DL-B2-05-T02'],['DL-B2-05-T02'],['DL-B2-05-T03'],['DL-B2-05-T03'],['DL-B2-05-T04'],['DL-B2-05-T04'],['DL-B2-05-T05'],['DL-B2-05-T06'],['DL-B2-05-T07']]
t1,t2=a['performanceTasks']
assert t1['modality']==['writing'] and not t1['selfCheck']['speakAloud'] and t1['selfCheck']['minimumResponseCharacters']==160 and t1['sourceTaskIds']==['DL-B2-05-T08']
assert t2['modality']==['writing','speaking'] and t2['selfCheck']['speakAloud'] and t2['selfCheck']['minimumResponseCharacters']==180 and t2['sourceTaskIds']==['DL-B2-05-T05','DL-B2-05-T08']
for t in (t1,t2):assert t['selfCheck']['audioRequired'] is False and t['selfCheck']['requiredChecks']==['taskCompletion','meaningClarity','targetSkill'] and t['prompt'] in s.replace('`','').replace('**','')
for x in ['تنبيه مفردات: الاسم **das Ergebnis** محايد','### مساعدة قبل النصوص والمهمات','4. **Alle Teilnehmenden kamen aus einer Gruppe. Die Ergebnisse gelten nicht für alle.** → **sodass**','4. **Es gab keine Kontrollgruppe, sodass …**','4. **Das Ergebnis war vorläufig. Deshalb zog man keine feste Schlussfolgerung.** → استخدم **aufgrund**.','In einem fiktiven Kurzbericht wurde eine kleine Befragung über Schlaf- und Bewegungsgewohnheiten vorgestellt.','Im fiktiven Kurzbericht wurden 24 freiwillige Mitglieder einer örtlichen Gehgruppe dazu befragt, wo sie Informationen über Bewegung finden.']:assert x in s,x
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
counts=[len(re.findall(r'^\d\. ',T[i],re.M)) for i in range(1,8)]+[10]
assert counts==[4,4,5,4,5,5,4,10] and sum(counts)==41,counts
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==10 and all(x['status']=='generated_pending_acoustic_review' and x['transcriptPolicy']=='offer' for x in assets)
assert [z['voiceId'] for x in assets for z in x['segments']]==['voice-02','voice-02','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
if '--implementation-only' in sys.argv:
 print('PASS B2.5 implementation-only: b2-05-v3, 41 exercise subitems, 10 model parts, 5 pending assets/10 clips.');sys.exit(0)
r=json.load(open('data/reviews/b2-05-review.json'));md=Path('data/reviews/b2-05-review.md').read_text();U=r['units']
assert r['lessonId']=='b2-05-health-fitness-medical-information' and r['assessmentVersion']=='b2-05-v3' and r['unitCount']==len(U)==101 and r['exerciseSubItemCount']==41 and r['modelPartCount']==10 and not r['acousticReviewed'] and not r['cefrCertification']
assert len(r['sources'])==14 and sum(x['access']=='full_fetched_page' for x in r['sources'])==14 and len(r['excludedSources'])==2
assert sum(len(u.get('items',[])) for u in U if u['id'].startswith('DL-B2-05-T'))==41
assert sum(len(u.get('items',[])) for u in U if u['id'].endswith('model-01'))==10
assert [len(u['items']) for u in U if '-AUD-' in u['id']]==[19,9,6,8,5]
assert sum(len(u.get('optionReview',[])) for u in U if u['id'].startswith('DL-B2-05-Q'))==30
assert sum(len(u.get('criterionReview',[])) for u in U if u['id'].startswith('DL-B2-05-P'))==6
for f,h in r['sourceHashes'].items():assert hashlib.sha256(Path(f).read_bytes()).hexdigest()==h,f
for x in assets:assert hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()==r['audioSnapshotHashes'][x['assetId']]
for u in U:assert f"### {u['id']}" in md and u['finding'] in md,u['id']
print('PASS B2.5: 101 units/41 exercise subitems/10 model parts/30 options/6 criteria; five pending assets/10 clips. Not language/acoustic certification.')
