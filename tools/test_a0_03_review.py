#!/usr/bin/env python3
"""CR3 reviewed-content regression guards; not independent linguistic/acoustic proof."""
import csv
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
path = ROOT / 'content/A0/lesson-03-numbers-personal-info.md'
source = path.read_text(encoding='utf-8')
a = json.loads(path.with_suffix('.assessment.json').read_text(encoding='utf-8'))
assert a['quiz'][5]['sourceTaskIds'] == ['DL-A0-03-T02'], 'Q06 must link to the reading-number exercise containing neunzehn, not T01 which omits 19'
assert a['assessment']['version'] == 'a0-03-v3'
assert a['assessment']['minimumScore'] == 80 and len(a['quiz']) == 10
words = 'null eins zwei drei vier fünf sechs sieben acht neun zehn elf zwölf dreizehn vierzehn fünfzehn sechzehn siebzehn achtzehn neunzehn zwanzig'.split()
# Check all 21 entries, including both halves of the four-column table.
number_table = source.split('## 1)')[1].split('### توسعة')[0]
actual = {}
for line in number_table.splitlines():
    if not line.startswith('|'): continue
    cells = [c.strip() for c in line.strip('|').split('|')]
    for i in [0, 2]:
        if len(cells) > i + 1 and cells[i].isdigit(): actual[int(cells[i])] = cells[i+1]
assert actual == dict(enumerate(words))
answers = ['drei', '7', 'zwölf', 'sechzehn', 'siebzehn', '19', 'Wie alt bist du?', 'Woher kommst du?', 'zwei sechs', 'zwanzig']
for i, (q, expected) in enumerate(zip(a['quiz'], answers), 1):
    assert q['id'] == f'DL-A0-03-Q{i:02}'
    assert q['options'][q['answerIndex']] == expected
    assert len(q['options']) == len(set(q['options']))
    assert 'DL-A0-03-T03' not in q['sourceTaskIds'], 'optional extension must not gate mastery'
quiz_text = json.dumps(a['quiz'], ensure_ascii=False)
for optional in ['dreißig', 'sechzig', 'siebzig', 'neunzig', 'sechsundzwanzig', 'zweiundsechs']:
    assert optional not in quiz_text, 'core distractors/explanations should not draw on optional compounds'
for i in [1, 5]: assert all(0 <= int(x) <= 20 for x in a['quiz'][i]['options'])
assert 'من 21 إلى 99' in source and 'مضاعفات العشرة' in source
assert 'من 21 فصاعدًا' not in source
for q in ['Wie heißen Sie?', 'Wie alt sind Sie?', 'Woher kommen Sie?', 'Wo wohnen Sie?', 'Wie ist Ihre Telefonnummer?']:
    assert q in source
assert 'استبدل **du / dein**' not in source
assert 'تهجئة اسم' not in source.split('## 1)')[0]
exercises = {int(m[1]): m[3] for m in re.finditer(r'^### تمرين (\d+) — (.+)\n([\s\S]*?)(?=^### |^## |\Z)', source, re.M)}
assert len(exercises) == 8 and 'neunzehn' in exercises[2]
assert 'Wie ist deine Telefonnummer?' in exercises[6]
assert 'تدريبي' in exercises[6] and 'ليس رقم هاتف كاملًا' in exercises[6]
assert 'الدورين' in exercises[7] and 'خيالية' in exercises[7]
assert 'أربعة أسطر' in exercises[8]
for task in a['performanceTasks']:
    assert 'DL-A0-03-T03' not in task['sourceTaskIds']
    assert task['selfCheck']['audioRequired'] is False and task['selfCheck']['speakAloud'] is True
p1, p2 = a['performanceTasks']
assert p1['sourceTaskIds'] == ['DL-A0-03-T07', 'DL-A0-03-T08']
assert p2['sourceTaskIds'] == ['DL-A0-03-T06']
assert 'خيالية' in p1['prompt'] and '18 أو 20' in p1['prompt']
assert 'Wie ist deine Telefonnummer?' in p2['prompt'] and 'بيانات حقيقية' in p2['prompt']
assert p1['selfCheck']['minimumResponseCharacters'] == 120
assert p2['selfCheck']['minimumResponseCharacters'] == 50

assets = [x for x in json.loads((ROOT/'data/audio-playlists.json').read_text(encoding='utf-8'))['audioAssets'] if x['lessonId']=='a0-03-numbers-personal-info']
assert len(assets)==2 and sum(len(x['segments']) for x in assets)==7
turns = [x.strip() for x in re.findall(r'^\*\*[AB]:\*\* (.+)$', source.split('## 3)')[1].split('## 4)')[0], re.M)]
recorded = next(x for x in assets if x['kind']=='dialogue')['segments']
assert len(turns)==6 and turns[:5]==[x['text'] for x in recorded[:5]]
assert turns[5]=='Ich bin 18 Jahre alt.' and recorded[5]['text']=='Ich bin achtzehn Jahre alt.', 'only this explicit digit/word equivalence is accepted'

review = json.loads((ROOT/'data/reviews/a0-03-review.json').read_text(encoding='utf-8'))
expected = {'goal-and-scope', 'compound-rule', 'privacy-and-models'}
expected |= {f'number-{i:02}' for i in range(21)}
expected |= {f'extension-{i}' for i in [30,40,50,60,70,80,90,100]}
for kind,count in [('personal',5),('formal',5),('dialogue',6),('card',4)]: expected |= {f'{kind}-{i:02}' for i in range(1,count+1)}
for kind,count in [('T',8),('Q',10),('P',2)]: expected |= {f'DL-A0-03-{kind}{i:02}' for i in range(1,count+1)}
expected |= {x['assetId'] for x in assets}
assert len(review['units'])==len(expected) and {u['id'] for u in review['units']}==expected
for unit in review['units']:
    assert unit['finding'] and unit['decision'] in ['retained','corrected','clarified','text-only-reviewed']
    assert set(unit['sourceIds']).issubset({r['id'] for r in review['sources']})
for i,count in enumerate([5,6,4,3,6,8,4,4],1):
    unit=next(u for u in review['units'] if u['id']==f'DL-A0-03-T{i:02}')
    assert len(unit['items'])==count and all(unit['items'])
for filename,digest in review['sourceHashes'].items(): assert hashlib.sha256((ROOT/filename).read_bytes()).hexdigest()==digest, filename
for asset in assets:
    assert review['audioSnapshotHashes'][asset['assetId']]==hashlib.sha256(json.dumps(asset,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
with (ROOT/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f: catalog={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
    row=catalog[f'DL-A0-03-T{i:02}']
    assert source.splitlines()[int(row['source_line'])-1]==row['source_heading']
    linked={q['id'] for q in a['quiz']+a['performanceTasks'] if row['task_id'] in q['sourceTaskIds']}
    assert set(re.findall(r'DL-A0-03-[QP]\d+',row['current_representation']))==linked
for q in a['quiz']+a['performanceTasks']:
    assert catalog[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds']),q['id']
lesson=next(l for l in json.loads((ROOT/'data/course.json').read_text(encoding='utf-8'))['lessons'] if l['id']==review['lessonId'])
assert lesson['assessment']==a['assessment'] and lesson['quiz']==a['quiz'] and lesson['performanceTasks']==a['performanceTasks']
print(f'PASS: A0.3 {len(expected)} review units/40 exercise sub-items; 21 numbers, ten keys, limited optional scope, formal forms, privacy, source/catalog links, six dialogue turns with explicit 18/achtzehn equivalence, snapshots and bundle. Not acoustic or independent linguistic certification.')
