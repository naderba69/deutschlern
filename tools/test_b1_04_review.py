#!/usr/bin/env python3
"""CR34 textual/evidence invariants; not automatic language or acoustic assessment."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/B1/lesson-04-continuing-education-damit.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());lid='b1-04-continuing-education-damit'
assert a['assessment']['version']=='b1-04-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[0,1,2,1,1,2,0,1,0,2]
for q,ns in zip(a['quiz'],[[1],[1],[2],[4,7],[5],[5],[5],[6],[6],[6]]):assert q['sourceTaskIds']==[f'DL-B1-04-T{n:02}' for n in ns]
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert 'der Lernstoff / das Zertifikat' in T[1] and '**um** أو **damit** فقط' in T[1]
assert 'verstehen können' in T[2] and 'يسبقه المصدر verstehen' in a['quiz'][2]['explanation']
assert 'Kommunikation؛ Morgen؛ verstehen؛ Kolleginnen' in s and 'verstehen können' not in T[6]
assert 'Ich übe jeden Tag, damit ich sicherer spreche.' in T[7]
assert 'wenn sie regelmäßig am Kurs teilnehmen' in s and 'die Tabellenkalkulationen' in s
for t,minimum,spoken in zip(a['performanceTasks'],[220,210],[False,True]):
 assert t['sourceTaskIds']==['DL-B1-04-T08'] and t['prompt'] in T[8]
 assert t['modality']==(['writing','speaking'] if spoken else ['writing'])
 assert t['selfCheck']['minimumResponseCharacters']==minimum and t['selfCheck']['speakAloud'] is spoken and t['selfCheck']['audioRequired'] is False
 assert set(t['criteria'])==set(t['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']==lid]
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==10
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02','voice-02','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 if x['kind'] in ['dialogue','reading','listening']:
  for seg in x['segments']:assert seg['text'] in s
 if x['kind']=='model_sentences':
  for sentence in re.split(r'(?<=\.) ',x['segments'][0]['text']):assert sentence in s
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==lid)
for k in ['assessment','quiz','performanceTasks']:assert l[k]==a[k]
assert len(l['vocabulary'])==15
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-B1-04-T{i:02}';r=c[tid];assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
 assert set(re.findall(r'DL-B1-04-[QP]\d+',r['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for r in csv.DictReader(f):
  if r['lesson_id']==lid:
   assert all(h in s for h in r['source_heading'].split(';'))
   for n in r['source_line'].split(';'):assert s.splitlines()[int(n)-1].startswith(('| ','- **','**Nadia:','**Farid:','> '))
   if r['asset_kind']=='dialogue':assert r['planned_output_path']=='assets/audio/DL-B1-04-AUD-DLG-01-*.mp3'
models=[]
for heading,minimum in [('### نموذج P01 — أربع جمل كتابة فقط',220),('### نموذج P02 — أربعة أدوار مع الجهر',210)]:
 lines=re.findall(r'^\d\. (.+)$',s.split(heading)[1].split('\n\n')[1],re.M);assert len(lines)==4 and len(' '.join(lines))>=minimum;models.append(lines)
if sys.argv[1:]==['--implementation-only']:
 print('PASS B1.4 implementation: source/tasks/versions/mappings/bundle/audio; detailed review not checked.');raise SystemExit
D=json.loads((R/'data/reviews/b1-04-review.json').read_text());U={u['id']:u for u in D['units']}
assert len(U)==D['unitCount']==len(D['units'])
assert len(D['sources'])==10 and all(x['access']=='full_fetched_page' for x in D['sources'])
for u in D['units']:
 assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in D['sources']}
 for x in u.get('items',[]):assert x['text'] and x['finding']
for k in ['dialogue','reading','listening']:
 texts=[u['text'] for u in D['units'] if re.match(k+r'-\d+$',u['id'])]
 assert ' '.join(texts)==' '.join(seg['text'] for x in assets if x['kind']==k for seg in x['segments'])
for kind,lines in zip(['plan-model','coaching-model'],models):assert lines==[u['text'] for u in D['units'] if u['id'].startswith(kind+'-')]
for i,n in enumerate([5,3,3,3,4,4,4,8],1):assert U[f'DL-B1-04-T{i:02}']['text']==T[i] and len(U[f'DL-B1-04-T{i:02}']['items'])==n
assert D['exerciseSubItemCount']==34
for q in a['quiz']:
 u=U[q['id']];assert u['text']==q['prompt'] and u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']] and u['sourceTaskIds']==q['sourceTaskIds']
 assert len(u['optionReview'])==3
 for i,x in enumerate(u['optionReview']):assert x['text']==q['options'][i] and x['correct']==(i==q['answerIndex']) and x['finding']
for t in a['performanceTasks']:
 u=U[t['id']];assert u['text']==t['prompt'] and u['criteria']==t['criteria'] and u['selfCheck']==t['selfCheck']
 assert {x['key']:x['text'] for x in u['criterionReview']}==t['criteria'] and all(x['finding'] for x in u['criterionReview'])
assert D['preservation']['baseline']=='dc5aae5056bd3acfbe1e4c83b43cb2eeb51a6815'
assert D['preservation']['changedOptionTexts']==[] and D['preservation']['unchangedOptionTexts']==30
for f,h in D['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert D['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print(f"PASS B1.4: {len(U)} units/34 subitems, 30 options/6 criteria, models/mappings/hashes; five assets/10 clips preserved. Not language/acoustic certification.")
