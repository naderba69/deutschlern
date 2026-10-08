#!/usr/bin/env python3
"""CR14 local consistency checks; not independent language/acoustic certification."""
import csv,hashlib,json,re
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/A1/lesson-08-shopping-clothes.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
assert 'Er muss ein Hemd ______. (brauchen)' not in s, 'T03.2 should train a necessary action, not unmotivated muss brauchen'
assert 'Er muss einen Mantel ______. (kaufen)' in s
assert a['assessment']['version']=='a1-08-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[0,0,1,0,1,0,1,0,0,0]
for q,n in zip(a['quiz'],[1,2,2,3,4,4,6,8,3,7]):assert q['sourceTaskIds']==[f'DL-A1-08-T{n:02}']
assert a['quiz'][6]['skillTags'][0]=='وصف الملابس'
t={int(m[1]):m[2] for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
for task,n,minimum,spoken in [(a['performanceTasks'][0],8,120,True),(a['performanceTasks'][1],3,70,False)]:
 assert task['prompt'] in t[n] and task['sourceTaskIds']==[f'DL-A1-08-T{n:02}']
 assert task['selfCheck']['minimumResponseCharacters']==minimum and task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
 assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][1]['modality']==['writing']
assert 'Kann ich die Hose anprobieren?' in t[7] and 'am Samstag' in t[3]
assert '| er/sie/es | muss |' in s and '**Welche Größe haben Sie?** → ما مقاسك؟' in s
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a1-08-shopping-clothes']
assert len(assets)==3 and sum(len(x['segments']) for x in assets)==9
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 for seg in x['segments']:assert seg['text'] in s
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']=='a1-08-shopping-clothes')
for key in ['assessment','quiz','performanceTasks']:assert l[key]==a[key]
for seg in assets[0]['segments']:assert f"</strong> {seg['text']}</p>" in l['contentHtml']
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={row['task_id']:row for row in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-A1-08-T{i:02}';row=c[tid];assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
 assert set(re.findall(r'DL-A1-08-[QP]\d+',row['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
assert len(l['vocabulary'])==16
# The first implementation push may precede the detailed review artifact.
if __import__('sys').argv[1:]==['--implementation-only']:
 print('PASS implementation-only A1.8 source/task/catalog/audio/bundle checks; detailed review still pending.');raise SystemExit
D=R/'data/reviews/a1-08-review.json';d=json.loads(D.read_text());ids=set()
for k,n in [('scope',10),('vocab',16),('color',5),('dialogue',7),('verb',6),('modal-example',3),('shop',4),('helper',11),('reading',7),('reading-question',4),('listening',6),('listening-question',4),('speaking-model',5),('writing-model',5),('card',4),('T',8),('Q',10),('P',2)]:
 ids|={f'DL-A1-08-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
ids|={x['assetId'] for x in assets}
assert len(d['units'])==d['unitCount']==len(ids)==120 and {u['id'] for u in d['units']}==ids
for u in d['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in d['sources']}
for i,n in enumerate([3,4,9,4,4,4,2,5],1):assert len(next(u for u in d['units'] if u['id']==f'DL-A1-08-T{i:02}')['items'])==n
assert d['exerciseSubItemCount']==35
for q in a['quiz']:
 u=next(u for u in d['units'] if u['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for f,h in d['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert d['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS: A1.8 120 units/35 subitems, meaningful modal action, aligned oral/written tasks, source/catalog/hashes, and unchanged 3 audio assets/9 clips. Not language/acoustic certification.')
