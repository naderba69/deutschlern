#!/usr/bin/env python3
"""CR33: textual coverage and evidence invariants, not language/acoustic certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/B1/lesson-03-work-communication-konjunktiv.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());lid='b1-03-work-communication-konjunktiv'
assert a['assessment']['version']=='b1-03-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[1,1,0,2,1,2,1,1,1,0]
for q,ns in zip(a['quiz'],[[1],[1],[2],[3,7],[4],[4],[5],[5],[6],[6]]):assert q['sourceTaskIds']==[f'DL-B1-03-T{n:02}' for n in ns]
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert 'sich um eine Stelle bewerben' in T[1]
assert 'hätte / wäre' in T[4] and 'Könnten wir die Aufgaben neu verteilen?' in T[4]
assert 'بإمكانه تحديث' in T[6] and 'bis heute Nachmittag' in T[6] and 'Farid aus dem Projektteam' in T[6]
assert 'مهذبة أصلًا' in s and 'نهاية الجزء الرئيسي' in s
assert '| er / sie / es | würde |' in s
assert a['quiz'][9]['prompt']=='Welchen Grund nennt Farid für seinen Vorschlag, die Besprechung zu verschieben?'
for t,minimum,spoken in zip(a['performanceTasks'],[240,220],[False,True]):
 assert t['sourceTaskIds']==['DL-B1-03-T08'] and t['prompt'] in T[8]
 assert t['modality']==(['writing','speaking'] if spoken else ['writing'])
 assert t['selfCheck']['minimumResponseCharacters']==minimum and t['selfCheck']['speakAloud'] is spoken and t['selfCheck']['audioRequired'] is False
 assert set(t['criteria'])==set(t['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']==lid]
assert len(assets)==4 and sum(len(x['segments']) for x in assets)==10
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02','voice-00','voice-02','voice-03','voice-00','voice-03','voice-02','voice-00','voice-02','voice-03']
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 if x['kind'] in ['dialogue','reading','listening']:
  for seg in x['segments']:assert seg['text'] in s
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==lid)
for k in ['assessment','quiz','performanceTasks']:assert l[k]==a[k]
assert len(l['vocabulary'])==14
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-B1-03-T{i:02}';r=c[tid];assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
 assert set(re.findall(r'DL-B1-03-[QP]\d+',r['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for r in csv.DictReader(f):
  if r['lesson_id']==lid:
   assert all(h in s for h in r['source_heading'].split(';'))
   for n in r['source_line'].split(';'):assert s.splitlines()[int(n)-1].startswith(('| ','- **','**Leiterin:','**Nora:','**Omar:','> '))
models=[]
for heading,count,minimum in [('### نموذج P01 — خمس جمل كتابة فقط',5,240),('### نموذج P02 — أربعة أدوار مع الجهر',4,220)]:
 lines=re.findall(r'^\d\. (.+)$',s.split(heading)[1].split('\n\n')[2 if 'P01' in heading else 1],re.M);assert len(lines)==count and len(' '.join(lines))>=minimum;models.append(lines)
if sys.argv[1:]==['--implementation-only']:
 print('PASS B1.3 implementation: source/tasks/versions/mappings/bundle/audio; detailed review not checked.');raise SystemExit
D=json.loads((R/'data/reviews/b1-03-review.json').read_text());expected=set()
for k,n in [('scope',7),('vocab',14),('conjugation',6),('grammar',8),('helper',10),('dialogue',7),('reading',5),('reading-question',4),('listening',6),('listening-question',4),('letter-model',5),('letter-format',2),('meeting-model',4),('card',4),('T',8),('Q',10),('P',2)]:
 expected|={f'DL-B1-03-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
expected|={x['assetId'] for x in assets};U={u['id']:u for u in D['units']}
assert set(U)==expected and len(expected)==D['unitCount']==len(D['units'])==110
assert len(D['sources'])==10 and all(x['access']=='full_fetched_page' for x in D['sources'])
for u in D['units']:
 assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in D['sources']}
 if u['id'].startswith(('vocab-','conjugation-','helper-','card-','scope-','letter-format-')):assert u['text'] in s
 for x in u.get('items',[]):assert x['text'] and x['finding']
for k in ['dialogue','reading','listening']:
 texts=[u['text'] for u in D['units'] if re.match(k+r'-\d+$',u['id'])]
 assert ' '.join(texts)==' '.join(seg['text'] for x in assets if x['kind']==k for seg in x['segments'])
phr=next(x for x in assets if x['kind']=='phrase_bank')
items=U[phr['assetId']]['items'];assert len(items)==22
assert ' '.join(i['text'] for i in items)==phr['segments'][0]['text']
assert [i['text'] for i in items[14:]]==[u['text'] for u in D['units'] if u['id'].startswith('grammar-')]
assert all(i['text'] in s for i in items[14:])
for kind,lines in zip(['letter-model','meeting-model'],models):assert lines==[u['text'] for u in D['units'] if u['id'].startswith(kind+'-')]
for i,n in enumerate([5,4,3,5,4,5,3,11],1):assert U[f'DL-B1-03-T{i:02}']['text']==T[i] and len(U[f'DL-B1-03-T{i:02}']['items'])==n
assert D['exerciseSubItemCount']==40
for q in a['quiz']:
 u=U[q['id']];assert u['text']==q['prompt'] and u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']] and u['sourceTaskIds']==q['sourceTaskIds']
 assert len(u['optionReview'])==3
 for i,x in enumerate(u['optionReview']):assert x['text']==q['options'][i] and x['correct']==(i==q['answerIndex']) and x['finding']
for t in a['performanceTasks']:
 u=U[t['id']];assert u['text']==t['prompt'] and u['criteria']==t['criteria'] and u['selfCheck']==t['selfCheck']
 assert {x['key']:x['text'] for x in u['criterionReview']}==t['criteria'] and all(x['finding'] for x in u['criterionReview'])
assert D['preservation']['baseline']=='23ea56c8e9ceb5827f0ce6a3fbbb8df727133205'
assert D['preservation']['changedOptionTexts']==[] and D['preservation']['unchangedOptionTexts']==30
for f,h in D['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert D['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS B1.3: 110 units/40 subitems, 30 options/6 criteria, models/mappings/hashes; four assets/10 clips preserved. Not language/acoustic certification.')
