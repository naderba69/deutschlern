#!/usr/bin/env python3
"""CR29 source/evidence regression guard, not language or acoustic certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/A2/lesson-11-housing-neighborhood-wohin.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());lid='a2-11-housing-neighborhood-wohin'
assert a['assessment']['version']=='a2-11-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[0,1,2,1,0,2,1,0,2,1]
for q,n in zip(a['quiz'],[1,2,2,3,4,5,5,6,7,2]):assert q['sourceTaskIds']==[f'DL-A2-11-T{n:02}']
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert 'ابدأ1 بـDas Buch' in T[4]
assert 'Die nächste Straßenbahnhaltestelle ist an der Ecke.' in T[5]
assert 'Wand — Bett — Nachttisch — Schreibtisch' in T[6]
assert 'في الجملة الأولى' not in a['quiz'][9]['explanation']
assert 'Die Lampe steht neben dem Bett.' in a['quiz'][9]['explanation']
assert 'zu تتطلب Dativ' in s and 'لا يشترط أن يكون كل ما داخل المكان بلا حركة' in s
assert '| الجمع die (للمقارنة) | den | die |' in s
for t,minimum,spoken,n in zip(a['performanceTasks'],[120,110],[True,False],[8,7]):
 assert t['prompt'] in T[n] and t['sourceTaskIds']==[f'DL-A2-11-T{n:02}']
 assert t['selfCheck']['minimumResponseCharacters']==minimum and t['selfCheck']['speakAloud'] is spoken and t['selfCheck']['audioRequired'] is False
 assert set(t['criteria'])==set(t['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][1]['modality']==['writing'] and 'speaking' in a['performanceTasks'][0]['modality']
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']==lid]
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==10
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 if x['kind'] not in ['phrase_bank','model_sentences']:
  for seg in x['segments']:assert seg['text'] in s
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02','voice-02']+['voice-02','voice-03']*3+['voice-02','voice-03']
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==lid)
for k in ['assessment','quiz','performanceTasks']:assert l[k]==a[k]
assert len(l['vocabulary'])==20
for x in assets:
 if x['kind']=='dialogue':
  for seg in x['segments']:assert f"</strong> {seg['text']}</p>" in l['contentHtml']
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-A2-11-T{i:02}';r=c[tid];assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
 assert set(re.findall(r'DL-A2-11-[QP]\d+',r['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for r in csv.DictReader(f):
  if r['lesson_id']==lid:assert '; '.join(s.splitlines()[int(n)-1] for n in r['source_line'].split(';'))==r['source_heading']
if sys.argv[1:]==['--implementation-only']:
 print('PASS A2.11 implementation: position/destination/verbs/evidence/tasks/catalog/audio/bundle; detailed review not checked.');raise SystemExit
D=json.loads((R/'data/reviews/a2-11-review.json').read_text());expected=set()
for k,n in [('scope',8),('vocab',20),('case',4),('grammar',6),('phrase',5),('helper',10),('dialogue',6),('reading',9),('reading-question',6),('listening',6),('listening-question',5),('writing-model',4),('speaking-model',4),('card',4),('T',8),('Q',10),('P',2)]:
 expected|={f'DL-A2-11-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
expected|={x['assetId'] for x in assets}
assert {u['id'] for u in D['units']}==expected and len(expected)==D['unitCount']==len(D['units'])==122
assert len(D['sources'])==9 and sum(x['access']=='full_fetched_page' for x in D['sources'])==9
for x in assets:
 if x['kind'] in ['phrase_bank','model_sentences']:
  items=next(u for u in D['units'] if u['id']==x['assetId'])['items']
  assert len(items)==(24 if x['kind']=='phrase_bank' else 11)
  assert ' '.join(i['text'] for i in items)==x['segments'][0]['text']
  for item in items:assert item['text'].rstrip('.?!').lower() in s.lower()
assert ' '.join(u['text'] for u in D['units'] if u['id'].startswith(('grammar-','phrase-')))==next(x for x in assets if x['kind']=='model_sentences')['segments'][0]['text']
for kind,heading,count,minimum in [('speaking-model','### نموذج P01 — أربع جمل مع الجهر',4,120),('writing-model','### نموذج P02 — أربع جمل كتابة فقط',4,110)]:
 block=s.split(heading)[1].split('\n\n')[1]
 lines=re.findall(r'^\d\. (.+)$',block,re.M)
 assert len(lines)==count and len(' '.join(lines))>=minimum
 assert lines==[u['text'] for u in D['units'] if u['id'].startswith(kind+'-')]
for u in D['units']:
 if u['id'].startswith(('vocab-','case-','helper-','card-','scope-')):assert u['text'] in s
for k in ['dialogue','reading','listening']:
 reviewed=' '.join(u['text'] for u in D['units'] if u['id'].startswith(k+'-') and not u['id'].startswith(k+'-question'))
 assert reviewed==' '.join(seg['text'] for x in assets if x['kind']==k for seg in x['segments'])
for u in D['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in D['sources']}
for i,n in enumerate([4,6,4,3,5,4,5,4],1):
 u=next(x for x in D['units'] if x['id']==f'DL-A2-11-T{i:02}');assert len(u['items'])==n and u['text']==T[i]
assert D['exerciseSubItemCount']==35
for q in a['quiz']:
 u=next(x for x in D['units'] if x['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for t in a['performanceTasks']:
 u=next(x for x in D['units'] if x['id']==t['id']);assert u['text']==t['prompt'] and u['criteria']==t['criteria'] and u['selfCheck']==t['selfCheck']
# Audit metadata must expose every alternative and criterion, not only an answer key.
for q in a['quiz']:
 u=next(x for x in D['units'] if x['id']==q['id'])
 assert len(u['optionReview'])==3
 for i,item in enumerate(u['optionReview']):
  assert item['text']==q['options'][i] and item['correct']==(i==q['answerIndex']) and item['finding']
for t in a['performanceTasks']:
 u=next(x for x in D['units'] if x['id']==t['id'])
 assert {item['key']:item['text'] for item in u['criterionReview']}==t['criteria']
 assert all(item['finding'] for item in u['criterionReview'])
for u in D['units']:
 for item in u.get('items',[]):assert item['text'] and item['finding']
assert D['preservation']['baseline']=='ae107375443ae586c2a12444761f34a9e5d8b39c'
assert D['preservation']['changedOptionTexts']==[]
for f,h in D['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert D['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS A2.11: 122 units/35 subitems; hashes, mappings, tasks, bundle; 5 assets/10 clips unchanged. Not language/acoustic certification.')
