#!/usr/bin/env python3
from pathlib import Path
import json,re,sys,hashlib
p=Path('content/B1/lesson-12-innovation-research-future.md');s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());c=next(x for x in json.load(open('data/course.json'))['lessons'] if x['id']=='b1-12-innovation-research-future');assets=[x for x in json.load(open('data/audio-playlists.json'))['audioAssets'] if x['lessonId']=='b1-12-innovation-research-future']
assert a['assessment']['version']==c['assessment']['version']=='b1-12-v2' and a['assessment']['status']=='ready' and a['assessment']['minimumScore']==80 and a['assessment']['minimumItems']==10
assert [q['answerIndex'] for q in a['quiz']]==[0,1,1,0,0,0,0,0,0,0] and sum(len(q['options']) for q in a['quiz'])==30
assert [q['sourceTaskIds'] for q in a['quiz']]==[['DL-B1-12-T01'],['DL-B1-12-T02'],['DL-B1-12-T03'],['DL-B1-12-T04'],['DL-B1-12-T05'],['DL-B1-12-T05'],['DL-B1-12-T06'],['DL-B1-12-T06'],['DL-B1-12-T07'],['DL-B1-12-T07']]
t1,t2=a['performanceTasks']
assert t1['modality']==['writing'] and not t1['selfCheck']['speakAloud'] and t1['selfCheck']['minimumResponseCharacters']==130 and t1['sourceTaskIds']==['DL-B1-12-T08']
assert t2['modality']==['writing','speaking'] and t2['selfCheck']['speakAloud'] and t2['selfCheck']['minimumResponseCharacters']==145 and t2['sourceTaskIds']==['DL-B1-12-T06','DL-B1-12-T08']
for t in (t1,t2):assert t['selfCheck']['audioRequired'] is False and t['selfCheck']['requiredChecks']==['taskCompletion','meaningClarity','targetSkill'] and t['prompt'] in s
for x in ['*(احتمال مفتوح: ربما)*','*(ترجيح: على الأرجح)*','*(تقدير مبني على الظن: فيما يُظن / وفق التقدير)*','dass der Prototyp beim Planen der Gartenarbeit helfen wird','Wenn ein Teil nicht zuverlässig funktioniert, werden sie das Modell verändern.','5. **Das Team testet den Prototyp nächste Woche.**','6. **Im nächsten Monat wird der Prototyp im Garten getestet.**','Unsere fiktive Projektgruppe entwickelt im Lernlabor einen kleinen Feuchtigkeitssensor für Schulgärten.','In unserem fiktiven Kurs untersuchen wir, wie auf dem Schulhof mehr Schatten entstehen kann.']:assert x in s,x
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
counts=[len(re.findall(r'^\d\. ',T[i],re.M)) for i in range(1,8)]+[10]
assert counts==[4,5,3,3,5,5,6,10] and sum(counts)==41,counts
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==12 and all(x['status']=='ready' and x['transcriptPolicy']=='offer' for x in assets)
assert [z['voiceId'] for x in assets for z in x['segments']]==['voice-02','voice-02','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
if '--implementation-only' in sys.argv:
 print('PASS B1.12 implementation-only: b1-12-v2, 41 exercise subitems, 10 model parts, 5 pending assets/12 clips.');sys.exit(0)
r=json.load(open('data/reviews/b1-12-review.json'));md=Path('data/reviews/b1-12-review.md').read_text();U=r['units']
assert r['lessonId']=='b1-12-innovation-research-future' and r['assessmentVersion']=='b1-12-v2' and r['unitCount']==len(U)==102 and r['exerciseSubItemCount']==41 and r['modelPartCount']==10 and not r['acousticReviewed'] and not r['cefrCertification']
assert len(r['sources'])==10 and sum(x['access']=='full_fetched_page' for x in r['sources'])==10 and len(r['excludedSources'])==4
assert sum(len(u.get('items',[])) for u in U if u['id'].startswith('DL-B1-12-T'))==41
assert sum(len(u.get('items',[])) for u in U if u['id'].endswith('model-01'))==10
assert [len(u['items']) for u in U if '-AUD-' in u['id']]==[18,6,8,8,6]
assert sum(len(u.get('optionReview',[])) for u in U if u['id'].startswith('DL-B1-12-Q'))==30
assert sum(len(u.get('criterionReview',[])) for u in U if u['id'].startswith('DL-B1-12-P'))==6
for f,h in r['sourceHashes'].items():assert hashlib.sha256(Path(f).read_bytes()).hexdigest()==h,f
for x in assets:assert hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()==r['audioSnapshotHashes'][x['assetId']]
for u in U:assert f"### {u['id']}" in md and u['finding'] in md,u['id']
print('PASS B1.12: 102 units/41 exercise subitems/10 model parts/30 options/6 criteria; five pending assets/12 clips. Not language/acoustic certification.')
