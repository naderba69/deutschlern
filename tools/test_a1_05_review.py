#!/usr/bin/env python3
"""CR11 guard: source/evidence consistency, not independent linguistic or acoustic grading."""
import csv,hashlib,json,re
from pathlib import Path
R=Path(__file__).resolve().parents[1]
p=R/'content/A1/lesson-05-food-drink.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
assert 'Mag die Schwester die Suppe besonders gern?' not in s, 'Preference for rice does not refute liking soup very much'
assert 'Was mag die Schwester lieber?' in s and 'Sami frühstückt allein.' in s
assert 'Was trinkt die Person am Abend manchmal?' in s
assert a['assessment']['version']=='a1-05-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[1,2,0,1,0,1,0,0,0,0]
links=[1,2,3,3,2,1,1,4,8,4]
for q,n in zip(a['quiz'],links):
 assert q['sourceTaskIds']==[f'DL-A1-05-T{n:02}'] and len(set(q['options']))==3
assert 'المفرد' in a['quiz'][6]['prompt'] and a['quiz'][5]['options']==['Wasser','Obst','Milch']
assert 'في أمثلة' in a['quiz'][8]['prompt'] and 'الآن' not in a['quiz'][8]['options'][0]
t={int(m[1]):m[2] for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert len(t)==8 and 'Gemüse' in t[1] and 'der Käse' in t[1]
assert 'الزبون يبدأ' in t[7] and 'Gast' in t[7] and 'Servicekraft' in t[7]
for task,n,minimum,spoken in [(a['performanceTasks'][0],8,100,False),(a['performanceTasks'][1],4,90,True)]:
 assert task['prompt'] in t[n] and task['sourceTaskIds']==[f'DL-A1-05-T{n:02}']
 assert task['selfCheck']['minimumResponseCharacters']==minimum and task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
 assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][0]['modality']==['writing']
assert '| الضمير | essen | trinken |' in s and '| er/sie/es | isst | trinkt |' in s
assert '**Service:**' not in s and 'ليس له تسجيل مرتبط' in s
turns=re.findall(r'^\*\*(Servicekraft|Gast):\*\* (.+)$',s.split('## 3)')[1].split('## 4)')[0],re.M)
assert [x[1] for x in turns]==['Guten Morgen! Was möchten Sie?','Ich möchte ein Ei und Brot, bitte.','Möchten Sie auch Kaffee?','Nein, danke. Ich trinke lieber Tee.','Sehr gern.','Was kostet das zusammen?','Fünf Euro.','Bitte schön. Danke!']

assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a1-05-food-drink']
assert len(assets)==2 and all(len(x['segments'])==1 and x['status']=='ready' and x['transcriptPolicy']=='offer' for x in assets)
for x in assets:
 assert '> '+x['segments'][0]['text'] in s
 assert x['segments'][0]['voiceId']==('voice-02' if x['kind']=='reading' else 'voice-03')
d=json.loads((R/'data/reviews/a1-05-review.json').read_text())
ids={'scope','mass-count','gern-rule','mag-moechte-rule','case-rule','reading-limit','listening-limit','self-check-limit'}
for k,n in [('vocab',15),('essen',6),('trinken',6),('phrase',4),('preference',2),('gloss',13),('dialogue',8),('reading',6),('reading-question',5),('listening',4),('listening-question',3),('fill-dialogue',4),('performance-dialogue',4),('ordered-dialogue',4),('day-model',6),('card',4),('T',8),('Q',10),('P',2)]:
 ids|={f'DL-A1-05-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
ids|={x['assetId'] for x in assets}
assert len(d['units'])==d['unitCount']==len(ids) and {x['id'] for x in d['units']}==ids
for u in d['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in d['sources']}
for i,n in enumerate([6,4,2,8,4,3,4,6],1):assert len(next(u for u in d['units'] if u['id']==f'DL-A1-05-T{i:02}')['items'])==n
assert d['exerciseSubItemCount']==37
for q in a['quiz']:
 u=next(u for u in d['units'] if u['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for f,h in d['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert d['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={row['task_id']:row for row in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-A1-05-T{i:02}';row=c[tid];assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
 assert set(re.findall(r'DL-A1-05-[QP]\d+',row['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==d['lessonId'])
for key in ['assessment','quiz','performanceTasks']:assert l[key]==a[key]
assert len(l['vocabulary'])==15
print(f'PASS: A1.5 {len(ids)} units/37 subitems, supported inference, singular cheese, bounded listening, aligned day/cafe tasks, source links/catalog/hashes, unchanged 2 audio clips. Not independent language/acoustic certification.')
