#!/usr/bin/env python3
"""CR13 consistency guard, not independent language/acoustic certification."""
import csv,hashlib,json,re,runpy
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/A1/lesson-07-travel-weather.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
t={int(m[1]):m[2] for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert t[7].count('______')==4, 'T07 must contain four real prompts/blanks, not its answers'
assert a['assessment']['version']=='a1-07-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[0,1,1,0,0,0,1,1,1,0]
for q,n in zip(a['quiz'],[2,2,3,3,3,4,4,2,3,4]):assert q['sourceTaskIds']==[f'DL-A1-07-T{n:02}']
assert 'عند التاسعة' in a['quiz'][3]['prompt'] and 'بعدها' in a['quiz'][3]['prompt']
assert 'كثير الرياح' in a['quiz'][8]['options'][1] and 'تعني' in a['quiz'][9]['prompt']
assert a['quiz'][9]['skillTags'][0]!='فهم الاستماع'
for task,n,minimum,spoken in [(a['performanceTasks'][0],8,90,False),(a['performanceTasks'][1],4,90,True)]:
 assert task['prompt'] in t[n] and task['sourceTaskIds']==[f'DL-A1-07-T{n:02}']
 assert task['selfCheck']['minimumResponseCharacters']==minimum and task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
 assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][0]['modality']==['writing']
assert '| er/sie/es | fährt |' in s and 'المكان معروفًا' in s and 'zu dem = zum' in s
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a1-07-travel-weather']
assert len(assets)==3 and sum(len(x['segments']) for x in assets)==8
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 for seg in x['segments']:assert seg['text'] in s
v=[seg['voiceId'] for x in assets for seg in x['segments']];assert v==['voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-02','voice-03']
d=json.loads((R/'data/reviews/a1-07-review.json').read_text());ids=set()
for k,n in [('scope',10),('vocab',16),('transport',5),('example',3),('verb',6),('weather',8),('dialogue',6),('helper',10),('reading',5),('reading-question',4),('listening',6),('listening-question',4),('writing-model',4),('speaking-model',4),('card',4),('T',8),('Q',10),('P',2)]:
 ids|={f'DL-A1-07-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
ids|={x['assetId'] for x in assets}
assert len(d['units'])==d['unitCount']==len(ids)==118 and {u['id'] for u in d['units']}==ids
for u in d['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in d['sources']}
for i,n in enumerate([4,4,4,8,3,2,4,4],1):assert len(next(u for u in d['units'] if u['id']==f'DL-A1-07-T{i:02}')['items'])==n
assert d['exerciseSubItemCount']==33
for q in a['quiz']:
 u=next(u for u in d['units'] if u['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for f,h in d['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert d['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={row['task_id']:row for row in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-A1-07-T{i:02}';row=c[tid];assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
 assert set(re.findall(r'DL-A1-07-[QP]\d+',row['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==d['lessonId'])
for key in ['assessment','quiz','performanceTasks']:assert l[key]==a[key]
for seg in next(x for x in assets if x['kind']=='listening_dialogue')['segments']:
 assert f"</strong> {seg['text']}</p>" in l['contentHtml'], 'Each dialogue turn must stay a separate rendered paragraph'
assert len(l['vocabulary'])==16

headings=runpy.run_path(str(R/'tools/verify_course.py'))['dialogue_headings']
assert headings(s)==['4) حوار أصلي في محطة القطار']
assert headings('### مساعدة قبل الحوار والنصين\n## 4) حوار أصلي\n### تمرين 5 — رتّب الحوار\n')==['4) حوار أصلي','تمرين 5 — رتّب الحوار']
print('PASS: A1.7 118 units/33 subitems; real listening blanks, precise time/weather questions, aligned writing/speech, source/catalog/hashes and unchanged three audio assets/eight clips. Not linguistic/acoustic certification.')
