#!/usr/bin/env python3
"""CR35 textual and evidence invariants; not language or acoustic certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/B1/lesson-05-cities-relative-clauses.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());lid='b1-05-cities-relative-clauses'
assert a['assessment']['version']=='b1-05-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[1,1,0,1,0,0,2,0,1,1]
for q,n in zip(a['quiz'],[1,2,2,7,4,3,5,5,6,6]):assert q['sourceTaskIds']==[f'DL-B1-05-T{n:02}']
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert 'Der Aussichtspunkt, ______ viele Gäste besuchen, liegt am Fluss.' in T[2]
assert 'تبدأ نورة جولتها في ساحة السوق.' in T[5]
assert 'احتفظ بالجملة الأولى رئيسية' in T[3] and 'أضف الفاصلتين' in s
assert 'Eine Straße führt direkt zur ______.' in T[6]
assert 'der Innenstadt؛ spät؛ einen Platz؛ Haltestelle؛ zu Fuß.' in s
assert 'Bis wann ist die Bibliothek geöffnet? Nenne nur die Angabe im Text.' in s
assert '| Nominativ — فاعل | der | die | das | die |' in s
assert '| Akkusativ — مفعول به | den | die | das | die |' in s
assert 'Ich besuche den Park, der am Fluss liegt.' in s
assert 'وصفان منسقان داخل صلة واحدة' in s
for t,spoken in zip(a['performanceTasks'],[False,True]):
 assert t['sourceTaskIds']==['DL-B1-05-T08'] and t['prompt'] in T[8]
 assert t['modality']==(['writing','speaking'] if spoken else ['writing'])
 assert t['selfCheck']['minimumResponseCharacters']==110 and t['selfCheck']['speakAloud'] is spoken and t['selfCheck']['audioRequired'] is False
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
assert len(l['vocabulary'])==14
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-B1-05-T{i:02}';r=c[tid];assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
 assert set(re.findall(r'DL-B1-05-[QP]\d+',r['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for r in csv.DictReader(f):
  if r['lesson_id']==lid:
   assert all(h in s for h in r['source_heading'].split(';'))
   for n in r['source_line'].split(';'):assert s.splitlines()[int(n)-1].startswith(('| ','- **','**Mara:','**Yusuf:','> '))
models=[]
for heading,count in [('### نموذج P01 — خمس جمل كتابة فقط',5),('### نموذج P02 — أربعة أدوار مع الجهر',4)]:
 lines=re.findall(r'^\d\. (.+)$',s.split(heading)[1].split('\n\n')[1],re.M);assert len(lines)==count and len(' '.join(lines))>=110;models.append(lines)
if sys.argv[1:]==['--implementation-only']:
 print('PASS B1.5 implementation: source/tasks/versions/mappings/bundle/audio; detailed review not checked.');raise SystemExit
D=json.loads((R/'data/reviews/b1-05-review.json').read_text());U={u['id']:u for u in D['units']};expected=set()
for k,n in [('scope',5),('vocab',14),('grammar',4),('pronoun-form',8),('helper',10),('dialogue',6),('reading',7),('reading-question',5),('listening',5),('listening-question',5),('description-model',5),('tour-model',4),('card',4),('T',8),('Q',10),('P',2)]:
 expected|={f'DL-B1-05-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
expected|={x['assetId'] for x in assets}
assert set(U)==expected and len(U)==D['unitCount']==len(D['units'])==107
assert len(D['sources'])==10 and all(x['access']=='full_fetched_page' for x in D['sources'])
for u in D['units']:
 assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in D['sources']}
 if u['id'].startswith(('scope-','vocab-','grammar-','helper-','card-','reading-question-','listening-question-')):assert u['text'] in s
 for x in u.get('items',[]):assert x['text'] and x['finding']
for k in ['dialogue','reading','listening']:
 texts=[u['text'] for u in D['units'] if re.match(k+r'-\d+$',u['id'])]
 assert ' '.join(texts)==' '.join(seg['text'] for x in assets if x['kind']==k for seg in x['segments'])
for x in assets:
 items=U[x['assetId']]['items']
 assert len(items)=={'phrase_bank':14,'model_sentences':4,'dialogue':6,'reading':7,'listening':5}[x['kind']]
 assert ' '.join(i['text'] for i in items)==' '.join(seg['text'] for seg in x['segments'])
 if x['kind']=='model_sentences':assert [i['text'] for i in items]==[U[f'grammar-{n:02}']['text'] for n in range(1,5)]
for kind,lines in zip(['description-model','tour-model'],models):assert lines==[u['text'] for u in D['units'] if u['id'].startswith(kind+'-')]
for i,n in enumerate([4,6,3,2,6,5,4,9],1):assert U[f'DL-B1-05-T{i:02}']['text']==T[i] and len(U[f'DL-B1-05-T{i:02}']['items'])==n
assert D['exerciseSubItemCount']==39
for i,(case,gender,form) in enumerate(( (case,gender,form) for case,forms in [('Nominativ',['der','die','das','die']),('Akkusativ',['den','die','das','die'])] for gender,form in zip(['masculine','feminine','neuter','plural'],forms)),1):
 u=U[f'pronoun-form-{i:02}'];assert (u['case'],u['gender'],u['text'])==(case,gender,form)
for q in a['quiz']:
 u=U[q['id']];assert u['text']==q['prompt'] and u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']] and u['sourceTaskIds']==q['sourceTaskIds']
 assert len(u['optionReview'])==3
 for i,x in enumerate(u['optionReview']):assert x['text']==q['options'][i] and x['correct']==(i==q['answerIndex']) and x['finding']
for t in a['performanceTasks']:
 u=U[t['id']];assert u['text']==t['prompt'] and u['criteria']==t['criteria'] and u['selfCheck']==t['selfCheck']
 assert {x['key']:x['text'] for x in u['criterionReview']}==t['criteria'] and all(x['finding'] for x in u['criterionReview'])
assert D['preservation']['baseline']=='3048537769a6a2523af80066bb04b23f2273ab9e'
assert D['preservation']['changedOptionTexts']==[] and D['preservation']['unchangedOptionTexts']==30
for f,h in D['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert D['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS B1.5: 107 units/39 subitems, 30 options/6 criteria, models/mappings/hashes; five assets/10 clips preserved. Not language/acoustic certification.')
