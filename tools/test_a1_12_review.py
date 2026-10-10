#!/usr/bin/env python3
"""CR18 source/bundle regression guard, not independent language/acoustic certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/A1/lesson-12-trip-invitations.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
assert a['assessment']['version']=='a1-12-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[0,1,2,1,0,1,0,2,0,1]
for q,n in zip(a['quiz'],[1,1,1,1,2,3,1,5,1,7]):assert q['sourceTaskIds']==[f'DL-A1-12-T{n:02}']
assert 'استماع' not in str(a['quiz'][8]['skillTags'])
assert 'بعد فعل مساعد يبقيان' not in s and 'بلا zu' in s
assert 'ج. wir fahren am Samstag nach Hammamet.' in s
assert 'نموذج رد مستقل' in s and 'لا نفترض أن صاحبه Salma' in s
assert 'Die Feier beginnt um 18 Uhr, nicht um 16 Uhr.' in s
T={int(m[1]):m[2] for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
for task,n,minimum,spoken in [(a['performanceTasks'][0],7,40,False),(a['performanceTasks'][1],8,160,True)]:
 assert task['prompt'] in T[n] and task['sourceTaskIds']==[f'DL-A1-12-T{n:02}']
 assert task['selfCheck']['minimumResponseCharacters']==minimum and task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
 assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][0]['modality']==['writing'] and 'speaking' in a['performanceTasks'][1]['modality']
assert '6. كلمة تعني الدعوة:' in T[1] and '4. Kannst du am Sonntag' in T[3]
assert 'Sonntag — Kuchen — Uhrzeit — ja' in T[6]
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a1-12-trip-invitations']
assert len(assets)==4 and sum(len(x['segments']) for x in assets)==11
def words(t):return re.findall(r'\w+',t.replace('16','sechzehn').casefold())
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 for seg in x['segments']:
  if x['kind']=='dialogue':assert seg['text'] in s
phr=s.split('## 2)')[1].split('### تذكير')[0]
phr=' '.join(re.findall(r'^- \*\*(.*?)\*\*',phr,re.M))
reading=' '.join(re.findall(r'^> (.*)',s.split('## 4)')[1].split('## 5)')[0],re.M))
listening=' '.join(re.findall(r'^> (.*)',s.split('## 5)')[1].split('## 6)')[0],re.M))
for part,text in [('PHR',phr),('READ',reading),('LST',listening)]:
 x=next(x for x in assets if f'-{part}-' in x['assetId']);assert words(' '.join(seg['text'] for seg in x['segments']))==words(text),(part,text)
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02','voice-02','voice-03']+['voice-02','voice-03']*4
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']=='a1-12-trip-invitations')
for key in ['assessment','quiz','performanceTasks']:assert l[key]==a[key]
for prefix in ['أ. Möchtest','ب. Hallo','ج. wir','د. Viele']:assert f'<p dir="auto">{prefix}' in l['contentHtml']
for seg in next(x for x in assets if x['kind']=='dialogue')['segments']:assert f"</strong> {seg['text']}</p>" in l['contentHtml']
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={row['task_id']:row for row in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-A1-12-T{i:02}';row=c[tid];assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
 assert set(re.findall(r'DL-A1-12-[QP]\d+',row['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for row in csv.DictReader(f):
  if row['lesson_id']=='a1-12-trip-invitations':assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
assert len(l['vocabulary'])==15
if sys.argv[1:]==['--implementation-only']:
 print('PASS A1.12 implementation source/keys/catalog/audio/bundle checks; detailed artifact not checked.');raise SystemExit
D=R/'data/reviews/a1-12-review.json';d=json.loads(D.read_text());ids=set()
for k,n in [('scope',10),('vocab',15),('phrase',9),('grammar',5),('helper',12),('dialogue',8),('reading',8),('reading-question',4),('listening',7),('listening-question',4),('writing-model',4),('speaking-model',6),('card',4),('T',8),('Q',10),('P',2)]:
 ids|={f'DL-A1-12-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
ids|={x['assetId'] for x in assets}
assert len(d['units'])==d['unitCount']==len(ids)==120 and {u['id'] for u in d['units']}==ids
for u in d['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in d['sources']}
for i,n in enumerate([6,4,4,4,4,4,2,6],1):assert len(next(u for u in d['units'] if u['id']==f'DL-A1-12-T{i:02}')['items'])==n
assert d['exerciseSubItemCount']==34
for q in a['quiz']:
 u=next(u for u in d['units'] if u['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for f,h in d['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert d['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS A1.12: 120 units/34 subitems; modal/separation/letter/context, aligned written reply and spoken agreement; hashes/catalog/bundle and unchanged 4 assets/11 clips. Not language/acoustic certification.')
