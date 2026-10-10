#!/usr/bin/env python3
"""CR22 alignment guard: not independent language or acoustic certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/A2/lesson-04-office-phone-appointments.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());lid='a2-04-office-phone-appointments'
assert a['assessment']['version']=='a2-04-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[0,1,2,1,0,2,1,0,2,1]
for q,n in zip(a['quiz'],[1,2,3,3,5,5,1,7,1,1]):assert q['sourceTaskIds']==[f'DL-A2-04-T{n:02}']
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert 'einen Termin verschieben' in T[1]
assert 'Besprechung — Donnerstag — Nachmittag' in T[6]
assert 'Amal hat um zehn Uhr' not in T[6]
assert 'الفعل في الجزء التابع فقط' in T[7]
assert 'ليست «إذا» الشرطية' in s and 'ليست مواعيد فعلية' in s
for t,minimum,spoken in zip(a['performanceTasks'],[200,180],[True,False]):
 assert t['prompt'] in T[8] and t['sourceTaskIds']==['DL-A2-04-T08']
 assert t['selfCheck']['minimumResponseCharacters']==minimum and t['selfCheck']['speakAloud'] is spoken and t['selfCheck']['audioRequired'] is False
 assert set(t['criteria'])==set(t['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][1]['modality']==['writing'] and 'speaking' in a['performanceTasks'][0]['modality']
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']==lid]
assert len(assets)==4 and sum(len(x['segments']) for x in assets)==10
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 if x['kind'] not in ['phrase_bank','reading']:
  for seg in x['segments']:assert seg['text'] in s
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02']+['voice-00','voice-02']*3+['voice-00','voice-00','voice-00']
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==lid)
for k in ['assessment','quiz','performanceTasks']:assert l[k]==a[k]
assert len(l['vocabulary'])==14
for x in assets:
 if x['kind']=='dialogue':
  for seg in x['segments']:assert f"</strong> {seg['text']}</p>" in l['contentHtml']
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-A2-04-T{i:02}';r=c[tid];assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
 assert set(re.findall(r'DL-A2-04-[QP]\d+',r['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for r in csv.DictReader(f):
  if r['lesson_id']==lid:assert '; '.join(s.splitlines()[int(n)-1] for n in r['source_line'].split(';'))==r['source_heading']
def norm(t):
 return re.sub(r'[^a-zäöüß]', '', t.lower().replace('9','neun').replace('11','elf'))
read=next(x for x in assets if x['kind']=='reading')['segments'][0]['text']
source_read=' '.join(re.findall(r'^> (.*)$',s.split('## 5)')[1].split('### أسئلة')[0],re.M))
assert norm(read)==norm(source_read)
assert 'Guten Tag, Frau Weber,<br>leider' in l['contentHtml']
if sys.argv[1:]==['--implementation-only']:
 print('PASS A2.4 implementation: indirect questions/punctuation/tasks/keys/catalog/turns/audio/bundle. Detailed artifact not checked.');raise SystemExit
D=json.loads((R/'data/reviews/a2-04-review.json').read_text());ids={u['id'] for u in D['units']}
expected=set()
for k,n in [('scope',8),('vocab',14),('phone',7),('grammar',5),('helper',8),('dialogue',7),('reading',7),('reading-question',5),('listening',7),('listening-question',4),('speaking-model',6),('writing-model',8),('card',4),('T',8),('Q',10),('P',2)]:
 expected|={f'DL-A2-04-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
expected|={x['assetId'] for x in assets}
assert ids==expected and len(ids)==D['unitCount']==len(D['units'])==114
assert len(D['sources'])==9 and all(x['access']=='full_fetched_page' for x in D['sources'])
phr=next(x for x in assets if x['kind']=='phrase_bank')
items=next(u for u in D['units'] if u['id']==phr['assetId'])['items']
assert len(items)==24 and ' '.join(x['text'] for x in items)==phr['segments'][0]['text']
for item in items:assert item['text'].rstrip('.?!').lower() in s.lower().replace(' / ', ' oder ')
for k,kind in [('dialogue','dialogue'),('listening','listening')]:
 reviewed=' '.join(u['text'] for u in D['units'] if u['id'].startswith(k+'-') and not u['id'].startswith(k+'-question'))
 assert reviewed==' '.join(seg['text'] for x in assets if x['kind']==kind for seg in x['segments'])
for u in D['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in D['sources']}
for i,n in enumerate([5,4,3,3,4,3,2,14],1):
 u=next(x for x in D['units'] if x['id']==f'DL-A2-04-T{i:02}');assert len(u['items'])==n and u['text']==T[i]
assert D['exerciseSubItemCount']==38
for q in a['quiz']:
 u=next(x for x in D['units'] if x['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for t in a['performanceTasks']:
 u=next(x for x in D['units'] if x['id']==t['id']);assert u['text']==t['prompt'] and u['criteria']==t['criteria'] and u['selfCheck']==t['selfCheck']
for f,h in D['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert D['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print(f"PASS A2.4: {D['unitCount']} units/38 subitems; source/task alignment, hashes/catalog/bundle, 4 assets/10 clips preserved. Not language/acoustic certification.")
