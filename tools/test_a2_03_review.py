#!/usr/bin/env python3
"""CR21 alignment guard: not independent language or acoustic certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/A2/lesson-03-food-nutrition-shopping.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());lid='a2-03-food-nutrition-shopping'
assert a['assessment']['version']=='a2-03-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[0,1,2,1,0,2,1,0,2,1]
for q,n in zip(a['quiz'],[1,2,3,4,5,5,6,6,4,3]):assert q['sourceTaskIds']==[f'DL-A2-03-T{n:02}']
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert '1000 غرام' in T[1] and 'كمية كبيرة' not in T[1]
for v in ['bestellen','kaufen','können','essen']:assert f'({v})' in T[3]
assert 'معنى man' in T[3] and 'أول طلب' in T[5] and 'nicht am Samstag' in T[6]
assert 'Kartoffeln — drei — 200 — weniger' in T[7]
assert a['quiz'][6]['options']==['حبة واحدة.','حبتين.','أربع حبات.']
for t,minimum,spoken in zip(a['performanceTasks'],[90,150],[False,True]):
 assert t['prompt'] in T[8] and t['sourceTaskIds']==['DL-A2-03-T08']
 assert t['selfCheck']['minimumResponseCharacters']==minimum and t['selfCheck']['speakAloud'] is spoken and t['selfCheck']['audioRequired'] is False
 assert set(t['criteria'])==set(t['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][0]['modality']==['writing'] and 'speaking' in a['performanceTasks'][1]['modality']
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']==lid]
assert len(assets)==4 and sum(len(x['segments']) for x in assets)==10
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 if x['kind']!='phrase_bank':
  for seg in x['segments']:assert seg['text'] in s
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02']+['voice-02','voice-03']*3+['voice-02','voice-02','voice-03']
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==lid)
for k in ['assessment','quiz','performanceTasks']:assert l[k]==a[k]
assert len(l['vocabulary'])==20
for x in assets:
 if x['kind']=='dialogue':
  for seg in x['segments']:assert f"</strong> {seg['text']}</p>" in l['contentHtml']
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-A2-03-T{i:02}';r=c[tid];assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
 assert set(re.findall(r'DL-A2-03-[QP]\d+',r['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for r in csv.DictReader(f):
  if r['lesson_id']==lid:assert '; '.join(s.splitlines()[int(n)-1] for n in r['source_line'].split(';'))==r['source_heading']
if sys.argv[1:]==['--implementation-only']:
 print('PASS A2.3 implementation: quantities/man/tasks/keys/catalog/turns/audio/bundle. Detailed artifact not checked.');raise SystemExit
D=json.loads((R/'data/reviews/a2-03-review.json').read_text());ids={u['id'] for u in D['units']}
expected=set()
for k,n in [('scope',10),('vocab',20),('quantity',6),('shop',3),('man',3),('helper',12),('dialogue',7),('reading',6),('reading-question',5),('listening',3),('listening-question',4),('writing-model',5),('speaking-model',5),('card',4),('T',8),('Q',10),('P',2)]:
 expected|={f'DL-A2-03-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
expected|={x['assetId'] for x in assets}
assert ids==expected and len(ids)==D['unitCount']==len(D['units'])==117
assert len(D['sources'])==11 and all(x['access']=='full_fetched_page' for x in D['sources'])
phr=next(x for x in assets if x['kind']=='phrase_bank')
items=next(u for u in D['units'] if u['id']==phr['assetId'])['items']
assert len(items)==26 and ' '.join(x['text'] for x in items)==phr['segments'][0]['text']
for item in items:assert item['text'].rstrip('.?!').lower() in s.lower()
for k,kind in [('dialogue','dialogue'),('reading','reading'),('listening','listening')]:
 reviewed=' '.join(u['text'] for u in D['units'] if u['id'].startswith(k+'-') and not u['id'].startswith(k+'-question'))
 assert reviewed==' '.join(seg['text'] for x in assets if x['kind']==kind for seg in x['segments'])
for u in D['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in D['sources']}
for i,n in enumerate([4,4,5,4,4,4,4,10],1):
 u=next(x for x in D['units'] if x['id']==f'DL-A2-03-T{i:02}');assert len(u['items'])==n and u['text']==T[i]
assert D['exerciseSubItemCount']==39
for q in a['quiz']:
 u=next(x for x in D['units'] if x['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for t in a['performanceTasks']:
 u=next(x for x in D['units'] if x['id']==t['id']);assert u['text']==t['prompt'] and u['criteria']==t['criteria'] and u['selfCheck']==t['selfCheck']
for f,h in D['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert D['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print(f"PASS A2.3: {D['unitCount']} units/39 subitems; source/task alignment, hashes/catalog/bundle, 4 assets/10 clips preserved. Not language/acoustic certification.")
