#!/usr/bin/env python3
"""CR4 regression guard, not independent linguistic or acoustic certification."""
import csv
import hashlib
import json
import re
from pathlib import Path
R = Path(__file__).resolve().parents[1]
p = R/'content/A0/lesson-04-first-sentences.md'
s = p.read_text(encoding='utf-8')
a = json.loads(p.with_suffix('.assessment.json').read_text(encoding='utf-8'))
t = {int(m[1]): m[3] for m in re.finditer(r'^### تمرين (\d+) — (.+)\n([\s\S]*?)(?=^### |^## |\Z)', s, re.M)}
assert 'Mila ist' in t[7] and 'Sie hat' in t[7], 'T07 must train third-person sentences required by P01, not only Ich bin/Ich habe'
assert a['assessment']['version']=='a0-04-v2' and a['assessment']['minimumScore']==80
assert len(t)==8 and len(a['quiz'])==10 and len(a['performanceTasks'])==2
expected=['sie','bin','bist','haben','Wir haben Zeit.','Ich habe eine Frage.','Bist du hier?','Sind Sie Herr Weber?','ist','Habt']
links=[1,2,2,3,4,5,6,2,2,3]
for i,(q,answer,n) in enumerate(zip(a['quiz'],expected,links),1):
    assert q['id']==f'DL-A0-04-Q{i:02}' and q['options'][q['answerIndex']]==answer
    assert len(q['options'])==len(set(q['options']))
    assert q['sourceTaskIds']==[f'DL-A0-04-T{n:02}']
for section,forms in [(2,['bin','bist','ist','sind','seid','sind']),(3,['habe','hast','hat','haben','habt','haben'])]:
    table=s.split(f'## {section})')[1].split(f'## {section+1})')[0]
    rows=[line.split('|')[2].strip() for line in table.splitlines() if line.startswith('| ')][1:]
    assert rows==forms
assert 'بداية الجملة' in s and 'لا تكفي' in s and 'اسم محايد نحويًا' in s
assert 'الكلمة الثانية' in s and 'Frau Ali' in s.split('## 4)')[1].split('## 5)')[0]
assert 'Ich.' not in t[5] and 'hier.' not in t[5] and 'Hast?' not in t[5]
assert 'علامة الترقيم' in t[5] and 'الدورين' in t[8]
p1,p2=a['performanceTasks']
assert p1['sourceTaskIds']==['DL-A0-04-T07'] and p2['sourceTaskIds']==['DL-A0-04-T08']
assert 'Mila ist' in p1['prompt'] and 'Sie hat' in p1['prompt']
assert 'الأربعة' in p2['prompt'] and 'Bist du neu hier?' in p2['prompt']
for task,minimum in [(p1,60),(p2,100)]:
    assert task['selfCheck']['minimumResponseCharacters']==minimum
    assert task['selfCheck']['speakAloud'] is True and task['selfCheck']['audioRequired'] is False
    assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert 'سؤال نعم/لا' in s.split('## 8)')[1]
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a0-04-first-sentences']
assert len(assets)==1 and len(assets[0]['segments'])==1
recorded=assets[0]['segments'][0]['text']
assert recorded=='Ich bin achtzehn Jahre alt. Du bist in Nabeul. Wir sind Freunde. Ich habe eine Frage. Mila hat ein Handy. Haben Sie Zeit? Bist du hier? Wir haben Zeit. Ich bin müde. Nora ist hier.'
plain=s.replace('**','')
for sentence in re.findall(r'[^.!?]+[.!?]',recorded):
    assert sentence.strip().replace('achtzehn','18') in plain
assert assets[0]['segments'][0]['voiceId']=='voice-02'
review=json.loads((R/'data/reviews/a0-04-review.json').read_text())
ids={'goal-and-scope','sie-context','es-context','model-method','word-order-rule'}
for kind,count in [('pronoun',9),('sein',6),('haben',6),('gloss',17),('syntax',5),('example',6),('dialogue',4),('card',3)]:
    ids|={f'{kind}-{i:02}' for i in range(1,count+1)}
for kind,count in [('T',8),('Q',10),('P',2)]: ids|={f'DL-A0-04-{kind}{i:02}' for i in range(1,count+1)}
ids|={assets[0]['assetId']}
assert len(review['units'])==len(ids) and {u['id'] for u in review['units']}==ids
for u in review['units']:
    assert u['finding'] and u['decision'] in ['retained','corrected','clarified','text-only-reviewed']
    assert set(u['sourceIds'])<=set(x['id'] for x in review['sources'])
for i,n in enumerate([4,5,5,4,4,3,4,4],1):
    assert len(next(u for u in review['units'] if u['id']==f'DL-A0-04-T{i:02}')['items'])==n
for filename,h in review['sourceHashes'].items(): assert hashlib.sha256((R/filename).read_bytes()).hexdigest()==h
for x in assets: assert review['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f: catalog={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
    tid=f'DL-A0-04-T{i:02}';row=catalog[tid]
    assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
    linked={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
    assert set(re.findall(r'DL-A0-04-[QP]\d+',row['current_representation']))==linked
for q in a['quiz']+a['performanceTasks']:
    assert catalog[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
lesson=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==review['lessonId'])
for key in ['assessment','quiz','performanceTasks']: assert lesson[key]==a[key]
print(f'PASS: A0.4 {len(ids)} review units/33 exercise sub-items; ten keys, conjugations, qualified pronouns/word order, aligned tasks, catalog, unchanged ten-sentence audio transcript and snapshots/bundle. Not linguistic/acoustic certification.')
