#!/usr/bin/env python3
"""CR9 regression checks; not independent language, map-reading or acoustic certification."""
import csv, hashlib, json, re
from pathlib import Path
R=Path(__file__).resolve().parents[1]
p=R/'content/A1/lesson-03-city-cafe-hotel.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
t={int(m[1]):m[2] for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert 'السعر' in a['performanceTasks'][0]['prompt'], 'P01 omits the price question that its source T08 requires'
assert a['assessment']['version']=='a1-03-v2' and a['assessment']['minimumScore']==80
assert len(t)==9 and len(a['quiz'])==10 and len(a['performanceTasks'])==2
answers=['محطة القطار','إلى الأمام مباشرة','möchte','möchtest','einen','Wie komme ich zum Bahnhof?','Gehen Sie bitte geradeaus.','المتحف','الصيدلية','Ich möchte bitte einen Tee.']
links=[1,2,3,3,4,7,9,1,1,8]
for q,answer,n in zip(a['quiz'],answers,links):
    assert q['options'][q['answerIndex']]==answer and len(set(q['options']))==len(q['options'])
    assert q['sourceTaskIds']==[f'DL-A1-03-T{n:02}']
assert 'أداة الرفع' in t[1] and 'der ______' not in t[1]
assert 'Zimmer' in t[3] and 'das Zimmer' in s
assert 'الزبون يبدأ' in t[5] and 'Gast' in t[5] and 'Servicekraft' in t[5]
assert 'Vom Bahnhof gehen Sie zuerst links.' in t[6] and 'Das Café ist am Bahnhof.' not in t[6]
assert 'Wie komme ich zum Bahnhof?' in t[7]
assert 'نصان لموقفين خياليين مستقلين' in s
for task,n,minimum,spoken in [(a['performanceTasks'][0],8,70,True),(a['performanceTasks'][1],9,100,False)]:
    assert task['prompt'] in t[n] and task['sourceTaskIds']==[f'DL-A1-03-T{n:02}']
    assert task['selfCheck']['minimumResponseCharacters']==minimum
    assert task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
    assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][1]['modality']==['reading','writing']
assert 'جملة مكان' in t[9] and 'neben' in t[9] and 'الصيدلية' in t[9]
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a1-03-city-cafe-hotel']
assert len(assets)==3 and sum(len(x['segments']) for x in assets)==12
for x in assets:assert x['status']=='ready' and x['transcriptPolicy']=='offer'
dlg=next(x for x in assets if x['kind']=='dialogue')
turns=re.findall(r'^\*\*(Servicekraft|Gast):\*\* (.+)$',s.split('## 4)')[1].split('## 5)')[0],re.M)
assert [x[1] for x in turns]==[x['text'] for x in dlg['segments']]
assert [x[0] for x in turns]==[x['speaker'] for x in dlg['segments']]
assert [x['voiceId'] for x in dlg['segments']]==['voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02']
read=next(x for x in assets if x['kind']=='reading');assert read['segments'][0]['voiceId']=='voice-02'
assert '> '+read['segments'][0]['text'] in s.replace('„','').replace('“','')
lst=next(x for x in assets if x['kind']=='listening_dialogue')
assert [x['voiceId'] for x in lst['segments']]==['voice-03','voice-02','voice-03','voice-02']
raw=s.split('## 6)')[1].split('## 7)')[0];assert all(x['text'] in raw for x in lst['segments'])
review=json.loads((R/'data/reviews/a1-03-review.json').read_text())
ids={'scope','route-question','request-rule','case-rule','water-serving','hotel-model','text-boundaries','price-context','map-scenario'}
for kind,count in [('vocab',13),('phrase',5),('moechte',6),('request',4),('gloss',18),('dialogue',7),('reading',6),('reading-question',4),('listening-turn',4),('listening-question',3),('ordered-dialogue',4),('cafe-model',4),('route-model',4),('card',4)]:ids|={f'{kind}-{i:02}' for i in range(1,count+1)}
for kind,count in [('T',9),('Q',10),('P',2)]:ids|={f'DL-A1-03-{kind}{i:02}' for i in range(1,count+1)}
ids|={x['assetId'] for x in assets}
assert len(review['units'])==len(ids)==review['unitCount'] and {u['id'] for u in review['units']}==ids
for u in review['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in review['sources']}
for i,n in enumerate([4,3,5,3,4,3,4,4,4],1):assert len(next(u for u in review['units'] if u['id']==f'DL-A1-03-T{i:02}')['items'])==n
for q in a['quiz']:
    u=next(u for u in review['units'] if u['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for f,h in review['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert review['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:catalog={row['task_id']:row for row in csv.DictReader(f)}
for i in range(1,10):
    tid=f'DL-A1-03-T{i:02}';row=catalog[tid]
    assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
    linked={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
    assert set(re.findall(r'DL-A1-03-[QP]\d+',row['current_representation']))==linked
for q in a['quiz']+a['performanceTasks']:assert catalog[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==review['lessonId'])
for key in ['assessment','quiz','performanceTasks']:assert l[key]==a[key]
assert len(l['vocabulary'])==13
print(f'PASS: A1.3 {len(ids)} review units/34 exercise sub-items, keys/source links, cafe price act, explicit written route, unchanged three audio assets/12 clips, catalog/hashes/bundle; not language/acoustic certification.')
