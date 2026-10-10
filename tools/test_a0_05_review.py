#!/usr/bin/env python3
"""CR5 regression guards; not independent linguistic or acoustic certification."""
import csv
import hashlib
import json
import re
from pathlib import Path
R = Path(__file__).resolve().parents[1]
p = R/'content/A0/lesson-05-classroom-phrases.md'
s = p.read_text(encoding='utf-8')
a = json.loads(p.with_suffix('.assessment.json').read_text(encoding='utf-8'))
t = {int(m[1]):m[3] for m in re.finditer(r'^### تمرين (\d+) — (.+)\n([\s\S]*?)(?=^### |^## |\Z)', s, re.M)}
assert 'Was bedeutet' in t[7], 'T07 must explicitly train the meaning request required by P01, not only repetition and spelling/writing'
assert a['assessment']['version']=='a0-05-v2' and a['assessment']['minimumScore']==80
assert len(t)==8 and len(a['quiz'])==10 and len(a['performanceTasks'])==2
expected=['لا أفهم','bitte','bedeutet','Können Sie mir helfen?','Wiederholen Sie das bitte.','Können Sie das bitte wiederholen?','nicht','für','لا، لا يظهر ذلك من صيغة الجملة وحدها.','Wie schreibt man das?']
links=[1,2,2,3,4,5,6,6,3,3]
for i,(q,answer,n) in enumerate(zip(a['quiz'],expected,links),1):
    assert q['id']==f'DL-A0-05-Q{i:02}' and q['options'][q['answerIndex']]==answer
    assert len(q['options'])==len(set(q['options']))
    assert q['sourceTaskIds']==[f'DL-A0-05-T{n:02}']
assert 'يبدأ بالفعل' in a['quiz'][4]['prompt'] and 'ليست' in a['quiz'][4]['explanation']
assert a['quiz'][4]['options'][0]=='Sie wiederholen bitte das.', 'do not mislabel this declarative as always ungrammatical'
assert 'Was bedeutet „Buch“?' in a['quiz'][2]['explanation']
assert 'Welches Wort?' in t[6] and 'Was bedeutet das Wort?' not in t[6]
assert 'Ja, was' not in t[6]
assert re.findall(r'^\*\*([AB]):\*\*',t[6],re.M)==['A','B','A','B','A']
assert 'علامة الترقيم' in t[4] and 'Ich.' not in t[4] and 'Können?' not in t[4]
assert 'الخمسة' in t[7] and 'معناها بالعربية' in t[8]
assert 'بداية الجملة' in s and 'Bitte' in s
p1,p2=a['performanceTasks']
assert p1['sourceTaskIds']==['DL-A0-05-T07'] and p2['sourceTaskIds']==['DL-A0-05-T08']
assert p1['modality']==['reading','writing','speaking']
assert p2['modality']==['reading','writing']
assert 'Unterricht' in p1['prompt'] and 'الخمسة' in p1['prompt'] and 'مسودة' in p1['prompt']
for task,minimum,spoken in [(p1,120,True),(p2,50,False)]:
    assert task['selfCheck']['minimumResponseCharacters']==minimum
    assert task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
    assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a0-05-classroom-phrases']
assert len(assets)==2 and sum(len(x['segments']) for x in assets)==6
bank=next(x for x in assets if x['kind']=='phrase_bank')
rows=[line.split('|')[1].strip() for line in s.split('## 1)')[1].split('## 2)')[0].splitlines() if line.startswith('| ')][1:]
assert len(rows)==10
assert ' '.join(x.replace('…','das') for x in rows)==bank['segments'][0]['text'], 'only the two explicit template slots expand to das'
dialogue=next(x for x in assets if x['kind']=='dialogue')
turns=[m.strip() for m in re.findall(r'^\*\*(?:Lernender|Lehrerin):\*\* (.+)$',s.split('## 3)')[1].split('## 4)')[0],re.M)]
assert len(turns)==5
assert [x.replace('„','').replace('“','') for x in turns]==[x['text'] for x in dialogue['segments']], 'only quotation marks differ from recorded transcript'
assert [x['voiceId'] for x in dialogue['segments']]==['voice-03','voice-02','voice-03','voice-02','voice-03']
assert bank['segments'][0]['voiceId']=='voice-02'
assert 'لا يعرض إعادة الشرح نفسها' in s and 'الوقت المحدد أو المتفق عليه' in s
review=json.loads((R/'data/reviews/a0-05-review.json').read_text())
ids={'goal-and-scope','request-pattern','meaning-writing','dialogue-boundary'}
for kind,count in [('phrase',10),('register',3),('gloss',9),('dialogue',5),('practice-dialogue',5),('card',5)]:
    ids|={f'{kind}-{i:02}' for i in range(1,count+1)}
for kind,count in [('T',8),('Q',10),('P',2)]:ids|={f'DL-A0-05-{kind}{i:02}' for i in range(1,count+1)}
ids|={x['assetId'] for x in assets}
assert len(review['units'])==len(ids) and {u['id'] for u in review['units']}==ids
for u in review['units']:
    assert u['finding'] and u['decision'] in ['retained','corrected','clarified','text-only-reviewed']
    assert set(u['sourceIds'])<={x['id'] for x in review['sources']}
for i,n in enumerate([4,4,4,4,1,3,5,3],1):
    assert len(next(u for u in review['units'] if u['id']==f'DL-A0-05-T{i:02}')['items'])==n
for filename,h in review['sourceHashes'].items():assert hashlib.sha256((R/filename).read_bytes()).hexdigest()==h
for x in assets:assert review['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:catalog={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
    tid=f'DL-A0-05-T{i:02}';row=catalog[tid]
    assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
    linked={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
    assert set(re.findall(r'DL-A0-05-[QP]\d+',row['current_representation']))==linked
for q in a['quiz']+a['performanceTasks']:
    assert catalog[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
lesson=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==review['lessonId'])
for key in ['assessment','quiz','performanceTasks']:assert lesson[key]==a[key]
print(f'PASS: A0.5 {len(ids)} review units/28 exercise sub-items, ten keys, scoped requests, coherent practice dialogue, source/task/catalog alignment, written-only P02, two unchanged audio assets/6 clips, hashes and bundle. Not linguistic/acoustic certification.')
