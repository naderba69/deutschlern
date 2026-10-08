#!/usr/bin/env python3
"""CR10 content regression guard; not independent linguistic/acoustic certification."""
import csv,hashlib,json,re
from pathlib import Path
R=Path(__file__).resolve().parents[1]
p=R/'content/A1/lesson-04-daily-routine-time.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
assert re.search(r'\*\*تمرين 6:\*\*.*3\. sechs',s), 'T06 key omits sechs for the third question'
t={int(m[1]):m[2] for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert a['assessment']['version']=='a1-04-v2' and a['assessment']['minimumScore']==80
assert len(t)==9 and len(a['quiz'])==10 and len(a['performanceTasks'])==2
keys=['am','um','bis','halb neun','Ich stehe früh auf.','Am Nachmittag kauft er ein.','rufe … an','في المساء','يتناول الفطور','kaufen … ein']
links=[1,1,1,2,3,4,4,9,6,3]
for q,key,n in zip(a['quiz'],keys,links):
 assert q['options'][q['answerIndex']]==key and len(set(q['options']))==3
 assert q['sourceTaskIds']==[f'DL-A1-04-T{n:02}']
assert 'الكاملة' in a['quiz'][6]['prompt'] and 'نهاية' in a['quiz'][4]['prompt']
assert 'im Supermarkt' in t[5] and 'frühstückt' in s and 'halb sieben = 6:30' in s
assert 'كلمتين' in s and 'كتلة' in s
for task,n,minimum,spoken in [(a['performanceTasks'][0],8,90,False),(a['performanceTasks'][1],9,170,True)]:
 assert task['prompt'] in t[n] and task['sourceTaskIds']==[f'DL-A1-04-T{n:02}']
 assert task['selfCheck']['minimumResponseCharacters']==minimum and task['selfCheck']['speakAloud'] is spoken
 assert task['selfCheck']['audioRequired'] is False
 assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][0]['modality']==['writing']
assert '5–7' in t[8] and 'مختلفين' in t[8] and all(x in t[9] for x in ['Wann stehst du auf?','Wann lernst du Deutsch?','Was machst du am Abend?','بجملتين'])
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a1-04-daily-routine-time']
assert len(assets)==2 and all(len(x['segments'])==1 and x['status']=='ready' and x['transcriptPolicy']=='offer' for x in assets)
for x in assets:
 assert '> '+x['segments'][0]['text'] in s
 assert x['segments'][0]['voiceId']==('voice-02' if x['kind']=='reading' else 'voice-03')
d=json.loads((R/'data/reviews/a1-04-review.json').read_text());ids={'scope','time-rule','clock-scope','separable-rule','word-order','w-question','modal-limit','reading-scope','listening-scope','self-check-limit'}
for kind,count in [('vocab',12),('weekday',7),('clock',4),('separable-example',3),('conjugation',6),('fronted-time',2),('gloss',15),('reading',7),('reading-question',5),('listening',6),('listening-question',4),('day-model',6),('interview-model',8),('card',5),('T',9),('Q',10),('P',2)]:
 ids|={f'DL-A1-04-{kind}{i:02}' if kind in ['T','Q','P'] else f'{kind}-{i:02}' for i in range(1,count+1)}
ids|={x['assetId'] for x in assets}
assert len(d['units'])==len(ids)==d['unitCount'] and {u['id'] for u in d['units']}==ids
for u in d['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in d['sources']}
for i,n in enumerate([3,3,3,3,3,5,4,5,5],1):assert len(next(u for u in d['units'] if u['id']==f'DL-A1-04-T{i:02}')['items'])==n
assert d['exerciseSubItemCount']==34
for q in a['quiz']:
 u=next(u for u in d['units'] if u['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for f,h in d['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert d['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:catalog={row['task_id']:row for row in csv.DictReader(f)}
for i in range(1,10):
 tid=f'DL-A1-04-T{i:02}';row=catalog[tid];assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
 assert set(re.findall(r'DL-A1-04-[QP]\d+',row['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert catalog[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==d['lessonId'])
for key in ['assessment','quiz','performanceTasks']:assert l[key]==a[key]
assert len(l['vocabulary'])==12
# Non-exercise headings may mention تمرين; the verifier must not count them as exercises.
h3=re.findall(r'<h3\b[^>]*>(.*?)</h3>',l['contentHtml'],re.S)
assert sum('تمرين' in h for h in h3)==12
assert sum(bool(re.match(r'^\s*(?:\d+\)?[).]?\s*)?تمرين\b',h)) for h in h3)==9
print(f'PASS: A1.4 {len(ids)} reviewed units/34 exercise requirements, corrected reading key, time/separation scope, aligned written/interview tasks, unchanged audio, catalog and hashes/bundle. Not independent language/acoustic certification.')
