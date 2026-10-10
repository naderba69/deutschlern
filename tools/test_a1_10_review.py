#!/usr/bin/env python3
"""CR16 source/bundle regression guard, not linguistic or clinical certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/A1/lesson-10-hobbies-health.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
assert a['assessment']['version']=='a1-10-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[0,1,1,1,0,0,1,0,0,0]
for q,n in zip(a['quiz'],[1,2,3,4,5,6,6,4,2,3]):assert q['sourceTaskIds']==[f'DL-A1-10-T{n:02}']
assert '1. Mona fährt am Wochenende Rad.' in s and '1. Mona fährt gern Rad.' not in s
assert '1. Was macht Mona gern?' in s and '**أسئلة القراءة:** 1. Sie liest gern.' in s
assert 'المشكلة الصحية' in a['quiz'][4]['prompt'] and 'Mona' in a['quiz'][7]['prompt']
assert '| er/sie/es | soll |' in s and 'ما الذي يؤلمك؟' not in s
assert 'ليست تشخيصًا' in s and 'النمط' in s
T={int(m[1]):m[2] for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
for task,n,minimum,spoken in [(a['performanceTasks'][0],5,110,True),(a['performanceTasks'][1],8,80,False)]:
 assert task['prompt'] in T[n] and task['sourceTaskIds']==[f'DL-A1-10-T{n:02}']
 assert task['selfCheck']['minimumResponseCharacters']==minimum and task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
 assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][1]['modality']==['writing']
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a1-10-hobbies-health']
assert len(assets)==3 and sum(len(x['segments']) for x in assets)==8
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 for seg in x['segments']:assert seg['text'] in s
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']=='a1-10-hobbies-health')
for key in ['assessment','quiz','performanceTasks']:assert l[key]==a[key]
dlg=next(x for x in assets if x['kind']=='dialogue');assert dlg['title']=='حوار: زيارة العيادة'
for seg in dlg['segments']:assert f"</strong> {seg['text']}</p>" in l['contentHtml']
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={row['task_id']:row for row in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-A1-10-T{i:02}';row=c[tid];assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
 assert set(re.findall(r'DL-A1-10-[QP]\d+',row['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for row in csv.DictReader(f):
  if row['lesson_id']=='a1-10-hobbies-health':
   assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
   if row['asset_id']==dlg['assetId']:assert row['linked_task_ids']=='DL-A1-10-T05'
assert len(l['vocabulary'])==20
if sys.argv[1:]==['--implementation-only']:
 print('PASS A1.10 implementation source/keys/catalog/audio/bundle checks; detailed artifact not checked.');raise SystemExit
D=R/'data/reviews/a1-10-review.json';d=json.loads(D.read_text());ids=set()
for k,n in [('scope',10),('vocab',20),('phrase',4),('verb',6),('modal-example',3),('helper',12),('dialogue',6),('reading',8),('reading-question',5),('listening',5),('listening-question',4),('speaking-model',6),('writing-model',3),('card',4),('T',8),('Q',10),('P',2)]:
 ids|={f'DL-A1-10-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
ids|={x['assetId'] for x in assets}
assert len(d['units'])==d['unitCount']==len(ids)==119 and {u['id'] for u in d['units']}==ids
for u in d['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in d['sources']}
for i,n in enumerate([4,4,4,4,8,4,4,3],1):assert len(next(u for u in d['units'] if u['id']==f'DL-A1-10-T{i:02}')['items'])==n
assert d['exerciseSubItemCount']==35
for q in a['quiz']:
 u=next(u for u in d['units'] if u['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for f,h in d['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert d['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS A1.10: 119 units/35 subitems, scoped instructions/evidence, spoken clinic vs written note, hashes/catalog/bundle and 3 assets/8 clips. No linguistic, clinical or acoustic certification.')
