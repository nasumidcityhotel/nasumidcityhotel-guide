import re
with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

en_texts = re.findall(r'lang="en">([^<]+)<', html)
en_texts = sorted(list(set(en_texts)))
for i, t in enumerate(en_texts):
    if len(t.strip()) > 0:
        print(f'{i}: {repr(t)}')
