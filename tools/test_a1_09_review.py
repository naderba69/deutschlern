#!/usr/bin/env python3
"""CR15 consistency guard; no independent linguistic/acoustic certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/A1/lesson-09-work-appointments.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
assert 'Samir arbeitet in einem Hotel.' not in s, 'Working in an office does not rule out an office inside a hotel'
assert 'Samir kann heute drucken.' in s
assert '2. Mit seinem Chef.' not in s and '2. Mit dem Chef.' in s
assert a['assessment']['version']=='a1-09-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[1,1,1,0,0,0,0,0,1,0]
for q,n in zip(a['quiz'],[1,2,2,3,4,5,1,4,3,8]):assert q['sourceTaskIds']==[f'DL-A1-09-T{n:02}']
assert a['quiz'][6]['skillTags'][0]=='مفردات المواعيد'
assert 'النمط الأساسي' in a['quiz'][7]['prompt'] and 'متاح' in a['quiz'][9]['prompt']
t={int(m[1]):m[2] for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
for task,n,minimum,spoken in [(a['performanceTasks'][0],8,100,True),(a['performanceTasks'][1],5,80,False)]:
 assert task['prompt'] in t[n] and task['sourceTaskIds']==[f'DL-A1-09-T{n:02}']
 assert task['selfCheck']['minimumResponseCharacters']==minimum and task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
 assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][1]['modality']==['writing']
assert 'النمط الأساسي' in t[5] and 'schicken' in t[4] and '| er/sie/es | kann |' in s
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a1-09-work-appointments']
assert len(assets)==3 and sum(len(x['segments']) for x in assets)==8
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 for seg in x['segments']:assert seg['text'] in s
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']=='a1-09-work-appointments')
for key in ['assessment','quiz','performanceTasks']:assert l[key]==a[key]
for seg in next(x for x in assets if x['kind']=='dialogue')['segments']:assert f"</strong> {seg['text']}</p>" in l['contentHtml']
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={row['task_id']:row for row in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-A1-09-T{i:02}';row=c[tid];assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
 assert set(re.findall(r'DL-A1-09-[QP]\d+',row['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
assert len(l['vocabulary'])==16
if sys.argv[1:]==['--implementation-only']:
 print('PASS A1.9 implementation-only source/task/catalog/audio/bundle checks; granular review artifact not checked.');raise SystemExit
D=R/'data/reviews/a1-09-review.json';d=json.loads(D.read_text());ids=set()
for k,n in [('scope',10),('vocab',16),('phrase',4),('verb',6),('modal-example',3),('time',4),('helper',12),('dialogue',6),('reading',8),('reading-question',5),('listening',5),('listening-question',4),('speaking-model',4),('writing-model',3),('card',4),('T',8),('Q',10),('P',2)]:
 ids|={f'DL-A1-09-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
ids|={x['assetId'] for x in assets}
assert len(d['units'])==d['unitCount']==len(ids)==117 and {u['id'] for u in d['units']}==ids
for u in d['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in d['sources']}
for i,n in enumerate([4,4,4,4,7,4,4,4],1):assert len(next(u for u in d['units'] if u['id']==f'DL-A1-09-T{i:02}')['items'])==n
assert d['exerciseSubItemCount']==35
for q in a['quiz']:
 u=next(u for u in d['units'] if u['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for f,h in d['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert d['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS: A1.9 117 units/35 subitems; supported reading, neutral listening key, scoped word order, aligned appointment/message, catalog/hashes and unchanged 3 audio assets/8 clips. Not linguistic/acoustic certification.')
