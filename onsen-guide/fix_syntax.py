import re
with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 12行目と1695行目付近にある `startsWith('ja') 💡 'ja' : 'en'` を直す
text = text.replace("startsWith('ja') 💡 'ja' : 'en'", "startsWith('ja') ? 'ja' : 'en'")
# 英語の質問文 `hot springs💡` などの末尾の💡を戻す
text = re.sub(r'([a-zA-Z])💡', r'\1?', text)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print('Fixed script payload')
