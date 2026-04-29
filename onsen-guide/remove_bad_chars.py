# remove_bad_chars.py
import re
import sys

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# count them before replace
fffd_count = text.count('\ufffd')

# Remove all U+FFFD (Replacement Characters)
text = text.replace('\ufffd', '')

# Remove some other garbage characters from mojibake
for char in '횥ߥåɥƥۥOՎ':
    text = text.replace(char, '')

# Restore specific broken Javascript comments
text = text.replace('// rZ (FOUC)', '// 初期表示 (FOUC防止)')
text = text.replace('// I', '// イベントリスナー登録')
text = text.replace('// ZC', '// 言語切り替え設定')
text = text.replace('// `ȥåץܥαʾ', '// トップへ戻るボタンの表示制御')
text = text.replace('// `', '// スムーススクロール制御')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print(f"Removed {fffd_count} instances of U+FFFD (Replacement Character).")
