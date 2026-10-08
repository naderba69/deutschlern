#!/usr/bin/env python3
"""CR32: textual coverage and evidence invariants, not language/acoustic certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/B1/lesson-02-food-habits-obwohl.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());lid='b1-02-food-habits-obwohl'
assert a['assessment']['version']=='b1-02-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[1,1,1,2,2,1,2,1,0,1]
for q,n in zip(a['quiz'],[1,1,3,3,2,5,5,6,6,7]):assert q['sourceTaskIds']==[f'DL-B1-02-T{n:02}']
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert 'die Ernährung / die Auswahl' in T[1] and 'auf bestimmte Lebensmittel verzichten' in T[1]
assert 'Gemüsegericht' in T[2] and 'تعني «هي»' in T[3]
assert 'كان يأكل كثيرًا أثناء التنقل' in T[5]
assert 'Vater — Sonntag — Wasser — bestellt' in T[6]
assert 'إذا بدأت بها الرئيسية' in s and 'Ich koche trotzdem oft selbst.' in s
assert 'die Geschmäcke؛ die Geschmäcker (دارج/مازح)' in s
assert 'إن أمكن' not in a['performanceTasks'][0]['prompt']
for t,minimum in zip(a['performanceTasks'],[190,180]):
 assert t['sourceTaskIds']==['DL-B1-02-T08'] and t['prompt'] in T[8]
 assert t['modality']==['writing','speaking']
 assert t['selfCheck']['minimumResponseCharacters']==minimum and t['selfCheck']['speakAloud'] is True and t['selfCheck']['audioRequired'] is False
 assert set(t['criteria'])==set(t['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']==lid]
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==10
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02','voice-02']+['voice-02','voice-03']*3+['voice-02','voice-03']
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 if x['kind'] in ['dialogue','reading','listening']:
  for seg in x['segments']:assert seg['text'] in s
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==lid)
for k in ['assessment','quiz','performanceTasks']:assert l[k]==a[k]
assert len(l['vocabulary'])==13
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-B1-02-T{i:02}';r=c[tid];assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
 assert set(re.findall(r'DL-B1-02-[QP]\d+',r['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for r in csv.DictReader(f):
  if r['lesson_id']==lid:
   assert r['source_heading'] in s
   for n in r['source_line'].split(';'):assert s.splitlines()[int(n)-1].startswith(('| ','- **','**Mira:','**Tarek:','> ','قارن في'))
models=[]
for heading,count,minimum in [('### نموذج P01 — خمس جمل مع الجهر',5,190),('### نموذج P02 — أربعة أسطر مع الجهر',4,180)]:
 lines=re.findall(r'^\d\. (.+)$',s.split(heading)[1].split('\n\n')[1],re.M);assert len(lines)==count and len(' '.join(lines))>=minimum;models.append(lines)
if sys.argv[1:]==['--implementation-only']:
 print('PASS B1.2 implementation: source/tasks/versions/mappings/bundle/audio; detailed review not checked.');raise SystemExit
D=json.loads((R/'data/reviews/b1-02-review.json').read_text());expected=set()
for k,n in [('scope',7),('vocab',13),('grammar',4),('helper',10),('dialogue',6),('reading',8),('reading-question',5),('listening',6),('listening-question',5),('paragraph-model',5),('dialogue-model',4),('card',4),('T',8),('Q',10),('P',2)]:
 expected|={f'DL-B1-02-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
expected|={x['assetId'] for x in assets};U={u['id']:u for u in D['units']}
assert set(U)==expected and len(expected)==D['unitCount']==len(D['units'])==102
assert len(D['sources'])==10 and all(x['access']=='full_fetched_page' for x in D['sources'])
for u in D['units']:
 assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in D['sources']}
 if u['id'].startswith(('vocab-','helper-','card-','scope-')):assert u['text'] in s
 for x in u.get('items',[]):assert x['text'] and x['finding']
for k in ['dialogue','reading','listening']:
 texts=[u['text'] for u in D['units'] if re.match(k+r'-\d+$',u['id'])]
 assert ' '.join(texts)==' '.join(seg['text'] for x in assets if x['kind']==k for seg in x['segments'])
for x in assets:
 if x['kind'] in ['phrase_bank','model_sentences']:
  items=U[x['assetId']]['items'];assert len(items)==(13 if x['kind']=='phrase_bank' else 4)
  assert ' '.join(i['text'] for i in items)==x['segments'][0]['text']
  if x['kind']=='model_sentences':
   assert [i['text'] for i in items]==[u['text'] for u in D['units'] if u['id'].startswith('grammar-')]
   assert all(i['text'] in s for i in items)
for kind,lines in zip(['paragraph-model','dialogue-model'],models):assert lines==[u['text'] for u in D['units'] if u['id'].startswith(kind+'-')]
for i,n in enumerate([6,4,3,2,5,4,2,9],1):assert U[f'DL-B1-02-T{i:02}']['text']==T[i] and len(U[f'DL-B1-02-T{i:02}']['items'])==n
assert D['exerciseSubItemCount']==35
for q in a['quiz']:
 u=U[q['id']];assert u['text']==q['prompt'] and u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']] and u['sourceTaskIds']==q['sourceTaskIds']
 assert len(u['optionReview'])==3
 for i,x in enumerate(u['optionReview']):assert x['text']==q['options'][i] and x['correct']==(i==q['answerIndex']) and x['finding']
for t in a['performanceTasks']:
 u=U[t['id']];assert u['text']==t['prompt'] and u['criteria']==t['criteria'] and u['selfCheck']==t['selfCheck']
 assert {x['key']:x['text'] for x in u['criterionReview']}==t['criteria'] and all(x['finding'] for x in u['criterionReview'])
assert D['preservation']['baseline']=='f741ee9136cf6072785bbb6ac383235d359ad9b8'
assert D['preservation']['changedOptionTexts']==[] and D['preservation']['unchangedOptionTexts']==30
for f,h in D['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert D['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS B1.2: 102 units/35 subitems, 30 options/6 criteria, models/mappings/hashes; five assets/10 clips preserved. Not language/acoustic certification.')
