import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# CSSやJS等の構造を維持するため、<body>の直後から<footer>の手前までを差し替える。
header_html = """
<div class="lang-switch">
    <button class="lang-btn active" id="btn-ja" onclick="setLanguage('ja')">日本語</button>
    <button class="lang-btn" id="btn-en" onclick="setLanguage('en')">English</button>
</div>
<a class="back-button" href="https://nasu-midcity-guide.netlify.app/" title="戻る">
    <span lang="ja">戻る</span>
    <span lang="en">Back</span>
</a>

<div class="container">
    <header>
        <h1 lang="ja">♨️ 那須ミッドシティホテル 近隣日帰り温泉ガイド</h1>
        <h1 lang="en">♨️ Nasu Mid-City Hotel Nearby Day-Trip Hot Spring Guide</h1>
        <div class="catchcopy" lang="ja">✨駅前ホテルから、那須・塩原の名湯めぐりへ。✨</div>
        <div class="catchcopy" lang="en">✨From the Station Hotel to the Famous Waters of Nasu & Shiobara✨</div>
        <div class="subtitle">
            <div lang="ja">那須ミッドシティホテルは全室ユニットバスですが、<br>その分周辺には多様な日帰り温泉が充実しております。<br>駅チカの施設から五ツ星源泉、風情ある秘湯まで、<br>お客様のスタイルに合ったお気に入りの温泉を見つけてください。</div>
            <div lang="en">
                Nasu Mid-City Hotel features in-room modular baths only,<br>
                but we invite you to enjoy the variety of unique nearby day-trip hot springs instead.<br>
                From new facilities just 5 minutes away by car, to 5-star premium springs,<br>
                and historic hidden hot springs, we offer a diverse range of onsen experiences.
            </div>
        </div>
        <div class="nav-shortcuts" style="margin-top: 30px; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
            <a href="#access" class="shortcut-btn" style="background: rgba(255, 255, 255, 0.2); border: 1px solid white; color: white; padding: 12px 30px; border-radius: 50px; text-decoration: none; font-weight: bold; transition: all 0.3s ease; backdrop-filter: blur(5px);">
                <span lang="ja">🚕 お車以外でお越しの方はこちら（タクシー・レンタカー）</span>
                <span lang="en">🚕 For Visitors Not Using a Car (Taxi & Rental Car)</span>
            </a>
        </div>
    </header>
"""

footer_html = """
    <!-- Recommendations -->
    <div class="section">
        <h2 class="section-title">
            <span lang="ja">✨ シーン別おすすめ</span>
            <span lang="en">✨ Recommendations by Scene</span>
        </h2>
        <div class="recommendation-grid">
            <div class="recommendation-card">
                <h3 lang="ja">👑 プレミアムな体験</h3>
                <h3 lang="en">👑 Premium Experience</h3>
                <p lang="ja">大鷹の湯(車で10分)<br>五ツ星源泉・美容液のようなお湯</p>
                <p lang="en">Ootaka-no-Yu (10 min drive)<br>5-star source, silky skin water</p>
            </div>
            <div class="recommendation-card">
                <h3 lang="ja">🚗 近くで手軽に</h3>
                <h3 lang="en">🚗 Easy Access Nearby</h3>
                <p lang="ja">那須塩原駅前温泉(車5分)<br>大鷹の湯(車10分)<br>みかえりの郷 彩花の湯(車15分)</p>
                <p lang="en">Nasu-shiobara Ekimae (5 min)<br>Ootaka-no-Yu (10 min)<br>Saika-no-Yu (15 min)</p>
            </div>
            <div class="recommendation-card">
                <h3 lang="ja">🌙 夜遅くまで営業</h3>
                <h3 lang="en">🌙 Late Night Bathing</h3>
                <p lang="ja">千本松温泉(23時まで)<br>大鷹の湯(夜21時まで/要確認)</p>
                <p lang="en">Senbonmatsu (until 11 PM)<br>Ootaka-no-Yu (until 9 PM/check)</p>
            </div>
            <div class="recommendation-card">
                <h3 lang="ja">💰 コスパ重視</h3>
                <h3 lang="en">💰 Best Value</h3>
                <p lang="ja">鹿の湯 (500円)<br>小鹿の湯 (500円)</p>
                <p lang="en">Shika-no-Yu (500 yen)<br>Kojika-no-Yu (500 yen)</p>
            </div>
            <div class="recommendation-card">
                <h3 lang="ja">🌲 秘湯・絶景</h3>
                <h3 lang="en">🌲 Hidden & Scenic</h3>
                <p lang="ja">大丸温泉旅館<br>北温泉旅館<br>源泉館</p>
                <p lang="en">Omaru Onsen<br>Kita Onsen<br>Gensen-kan</p>
            </div>
            <div class="recommendation-card">
                <h3 lang="ja">👨‍👩‍👧‍👦 ファミリー向け</h3>
                <h3 lang="en">👨‍👩‍👧‍👦 For Families</h3>
                <p lang="ja">塩原あかつきの湯(歩行プールあり)</p>
                <p lang="en">Shiobara Akatsuki-no-Yu (with pool)</p>
            </div>
            <div class="recommendation-card">
                <h3 lang="ja">🎬 映画のロケ地</h3>
                <h3 lang="en">🎬 Movie Locations</h3>
                <p lang="ja">北温泉<br>(テルマエ・ロマエ)</p>
                <p lang="en">Kita Onsen<br>(Thermae Romae)</p>
            </div>
        </div>
    </div>

    <!-- Access Info -->
    <div class="section" id="access">
        <h2 class="section-title">
            <span lang="ja">🚉 お車以外でお越しの方へ</span>
            <span lang="en">🚉 For Visitors Not Using a Car</span>
        </h2>
        
        <div class="info-grid">
            <!-- Taxi Info -->
            <div class="info-box">
                <h4>
                    <span lang="ja">🚕 タクシーのご案内</span>
                    <span lang="en">🚕 Taxi Information</span>
                </h4>
                <p lang="ja">
                    那須塩原駅西口のタクシー乗り場は徒歩1〜2分の場所にあり、常時、数台のタクシーが待機しており、観光案内も対応します。
                </p>
                <p lang="en">
                    The taxi stand at Nasu-Shiobara Station West Exit is just a 1-2 minute walk away. Several taxis are usually available at any time, and sightseeing tours are also available.
                </p>
                <div class="contact-info" style="margin-top: 15px;">
                    <p><strong><span lang="ja">黒磯観光タクシー株式会社</span><span lang="en">Kuroiso Kanko Taxi</span></strong></p>

                    <p>📞 <a href="tel:0287621526">0287-62-1526</a></p>
                </div>
            </div>

            <!-- Rental Car Info -->
            <div class="info-box">
                <h4>
                    <span lang="ja">🏎️ レンタカーのご案内</span>
                    <span lang="en">🏎️ Car Rental Information</span>
                </h4>
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">
                    <span lang="ja">※すべてのレンタカー会社は那須塩原駅西口にございます。</span>
                    <span lang="en">*All car rental companies are located at the Nasu-Shiobara Station West Exit.</span>
                </p>
                <div class="rental-grid">
                    <div class="rental-item">
                        <strong>トヨタレンタカー 那須塩原駅前店</strong>
                        <p>📞 <a href="tel:0287653100">0287-65-3100</a></p>
                    </div>
                    <div class="rental-item">
                        <strong>ニッポンレンタカー 那須塩原駅前営業所</strong>
                        <p>📞 <a href="tel:05017122823">050-1712-2823</a></p>
                    </div>
                    <div class="rental-item">
                        <strong>日産レンタカー 那須塩原駅前店</strong>
                        <p>📞 <a href="tel:0287671523">0287-67-1523</a></p>
                    </div>
                    <div class="rental-item">
                        <strong>JR駅レンタカー 那須塩原営業所</strong>
                        <p>📞 <a href="tel:0287651680">0287-65-1680</a></p>
                    </div>
                    <div class="rental-item">
                        <strong>ワンズレンタカー 那須塩原駅前店</strong>
                        <p>📞 <a href="tel:0287738255">0287-73-8255</a></p>
                    </div>
                    <div class="rental-item">
                        <strong>オリックスレンタカー 那須塩原駅前店</strong>
                        <p>📞 <a href="tel:0287671543">0287-67-1543</a></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="info-box" style="margin-top: 25px; border-top: 1px solid #eee; padding-top: 25px;">
            <h4><span lang="ja">🚌 公共交通機関 (バス)</span><span lang="en">🚌 Public Transport (Bus)</span></h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                <div>
                    <p><strong lang="ja">那須エリア:</strong><strong lang="en">Nasu Area:</strong></p>
                    <p lang="ja" style="font-size: 0.9rem;">関東自動車バス「那須ロープウェイ行き」等</p>
                    <p lang="en" style="font-size: 0.85rem;">Kanto Bus bound for "Nasu Ropeway", etc.</p>
                </div>
                <div>
                    <p><strong lang="ja">塩原エリア:</strong><strong lang="en">Shiobara Area:</strong></p>
                    <p lang="ja" style="font-size: 0.9rem;">JRバス「塩原温泉バスターミナル行き」<br>「もみじ谷大吊橋」等で下車</p>
                    <p lang="en" style="font-size: 0.85rem;">JR Bus Kanto bound for "Shiobara Onsen Bus Terminal"<br>Stop at "Momijidani Otsuribashi", etc.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- FAQ -->
    <div class="section">
        <h2 class="section-title">
            <span lang="ja">❓ よくあるご質問(FAQ)</span>
            <span lang="en">❓ Frequently Asked Questions (FAQ)</span>
        </h2>
        <div class="faq-item">
            <h4 lang="ja">Q. 温泉までの送迎はありますか？</h4>
            <h4 lang="en">Q. Is there a shuttle service to the hot springs?</h4>
            <p lang="ja">A. ホテルからの送迎はございませんが、フロントにてタクシーやバスのご案内をしております。</p>
            <p lang="en">A. We do not provide shuttle services from the hotel, but our front desk can assist with taxi and bus information.</p>
        </div>
        <div class="faq-item">
            <h4 lang="ja">Q. 日帰り入浴に予約は必要ですか？</h4>
            <h4 lang="en">Q. Is a reservation required for day-trip bathing?</h4>
            <p lang="ja">A. 施設により異なります。貸切風呂や夜のご利用などは事前に各施設へ直接確認・ご予約をおすすめします。</p>
            <p lang="en">A. It varies by facility. Please contact each facility in advance, especially for private baths or night use.</p>
        </div>
        <div class="faq-item">
            <h4 lang="ja">Q. タオルは持参した方がよいですか？</h4>
            <h4 lang="en">Q. Should I bring my own towel?</h4>
            <p lang="ja">A. 多くの施設で販売・レンタルがありますが、持参したほうがスムーズです。※当ホテルのタオルの持ち出しはご遠慮ください。</p>
            <p lang="en">A. While many facilities sell towels, we recommend bringing your own. (Please do not take hotel towels.)</p>
        </div>
        <div class="faq-item">
            <h4 lang="ja">Q. 硫黄泉の注意点はありますか？</h4>
            <h4 lang="en">Q. Are there any precautions for sulfur springs?</h4>
            <p lang="ja">A. 金属アクセサリーは真っ黒に変色するため必ず外してください。また、肌が弱い方は入浴後にシャワーで軽く流すことをおすすめします。</p>
            <p lang="en">A. Metal jewelry will tarnish. Also, those with sensitive skin should rinse off after bathing.</p>
        </div>
    </div>

    <!-- Tips -->
    <div class="section">
        <div class="tips-list">
            <h3 lang="ja">💡 温泉めぐりのヒント</h3>
            <h3 lang="en">💡 Tips for Hot Spring Touring</h3>
            <ol lang="ja">
                <li><strong>タイミング:</strong> 平日の午前中などが比較的空いています。</li>
                <li><strong>タオル:</strong> 事前に持参するか、現地で購入する前提で計画を。</li>
                <li><strong>水分補給:</strong> 入浴前後はしっかりと水分を取りましょう。</li>
                <li><strong>営業時間:</strong> 季節や日付により変動するため、直前のご確認を。</li>
                <li><strong>天候:</strong> 冬季は路面凍結や積雪にお気をつけください。</li>
            </ol>
            <ol lang="en">
                <li><strong>Timing:</strong> Weekday mornings are generally less crowded.</li>
                <li><strong>Towels:</strong> Bringing your own is recommended.</li>
                <li><strong>Hydration:</strong> Drink plenty of water before and after bathing.</li>
                <li><strong>Hours:</strong> Check in advance as hours may vary by season.</li>
                <li><strong>Weather:</strong> Check road conditions during the winter.</li>
            </ol>
        </div>
    </div>

    <footer>
        <p lang="ja">このガイドが、那須・塩原の素晴らしい温泉めぐりのお役に立てれば幸いです。<br>
        お気をつけていってらっしゃいませ！</p>
        <p lang="en">We hope this guide helps you with your Nasu/Shiobara hot spring tour.<br>
        Enjoy a wonderful hot spring experience!</p>
    </footer>
</div> <!-- end container -->

<div class="scroll-top" onclick="window.scrollTo({top: 0, behavior: 'smooth'});">
    ▲
</div>
"""

def make_card(data):
    # data: dict with keys
    html = f"""
    <div class="onsen-card{ ' new' if data.get('is_new', False) else '' }">
        <div class="onsen-name">
            <span lang="ja">{data['num']}. {data['name_ja']}</span>
            <span lang="en">{data['num']}. {data['name_en']}</span>
"""
    if data.get('badge_ja'):
        c = "badge-new" if data['badge_en'] == "NEW" else "badge-secret"
        html += f"""
            <span class="badge {c}">
                <span lang="ja">{data['badge_ja']}</span>
                <span lang="en">{data['badge_en']}</span>
            </span>
"""
    html += f"""
        </div>
        <span class="distance-badge">
            <span lang="ja">📍 {data['dist_ja']}</span>
            <span lang="en">📍 {data['dist_en']}</span>
        </span>
        <div class="info-grid">
            <div class="info-box">
                <h4><span lang="ja">🚗 アクセス</span><span lang="en">🚗 Access</span></h4>
                <ul lang="ja">{''.join(f'<li>{a}</li>' for a in data['acc_ja'])}</ul>
                <ul lang="en">{''.join(f'<li>{a}</li>' for a in data['acc_en'])}</ul>
            </div>
            <div class="info-box">
                <h4><span lang="ja">⏰ 営業時間</span><span lang="en">⏰ Hours</span></h4>
                <ul lang="ja">{''.join(f'<li>{h}</li>' for h in data['hours_ja'])}</ul>
                <ul lang="en">{''.join(f'<li>{h}</li>' for h in data['hours_en'])}</ul>
            </div>
            <div class="info-box">
                <h4><span lang="ja">💰 料金</span><span lang="en">💰 Fees</span></h4>
                <ul lang="ja">{''.join(f'<li>{f}</li>' for f in data['fees_ja'])}</ul>
                <ul lang="en">{''.join(f'<li>{f}</li>' for f in data['fees_en'])}</ul>
            </div>
            <div class="info-box">
                <h4><span lang="ja">♨️ 泉質・特徴</span><span lang="en">♨️ Spring Quality & Features</span></h4>
                <ul lang="ja">{''.join(f'<li>{q}</li>' for q in data['qual_ja'])}</ul>
                <ul lang="en">{''.join(f'<li>{q}</li>' for q in data['qual_en'])}</ul>
            </div>
        </div>
        <div class="highlights">
            <h4><span lang="ja">✨ おすすめポイント</span><span lang="en">✨ Highlights</span></h4>
            <ul lang="ja">{''.join(f'<li>{h}</li>' for h in data['hl_ja'])}</ul>
            <ul lang="en">{''.join(f'<li>{h}</li>' for h in data['hl_en'])}</ul>
        </div>
        <div class="contact-info">
"""
    if data.get('tel'):
        html += f"""
            <p lang="ja">📞 TEL: <a href="tel:{data['tel']}">{data['tel']}</a></p>
            <p lang="en">📞 TEL: <a href="tel:{data['tel']}">{data['tel']}</a></p>
"""
    if data.get('addr_ja'):
        html += f"""
            <p lang="ja">🏠 住所: {data['addr_ja']}</p>
            <p lang="en">🏠 Address: {data['addr_en']}</p>
"""
    if data.get('extra_ja'):
        html += f"""
            <p lang="ja">ℹ️ {data['extra_ja']}</p>
            <p lang="en">ℹ️ {data['extra_en']}</p>
"""
    if data.get('url'):
        html += f"""
            <a href="{data['url']}" class="url-link">
                <span lang="ja">🌐 公式サイトを見る</span>
                <span lang="en">🌐 Visit Official Website</span>
                <span class="arrow-span">▶</span>
            </a>
"""
    elif data.get('no_url'):
        html += f"""
            <p lang="ja"><strong>※公式サイト無し（ネット検索等でご確認ください）</strong></p>
            <p lang="en"><strong>*No official website available. Please search online.</strong></p>
"""
    html += """
        </div>
    </div>
"""
    return html

# === 施設データ定義 ===
onsens = [
    {
        "num": 1,
        "name_ja": "大鷹の湯 (五ツ星源泉の宿)", "name_en": "Ootaka-no-Yu (5-Star Spring Inn)",
        "badge_ja": "おすすめ", "badge_en": "Recommended",
        "dist_ja": "車で約10分", "dist_en": "Approx. 10 min drive",
        "acc_ja": ["車で約10分", "那須塩原駅/西那須野駅からタクシー約15分"],
        "acc_en": ["Approx. 10 min drive", "15 min by taxi from Nasu-shiobara Station"],
        "hours_ja": ["昼の部: 10:00～14:00 (最終受付13:00)", "夜の部: 18:00～21:00 (最終受付20:00) ※要確認"],
        "hours_en": ["Day: 10:00 AM – 2:00 PM (Last entry 1:00 PM)", "Night: 6:00 PM – 9:00 PM (Last entry 8:00 PM) *Check in advance"],
        "fees_ja": ["大人: 1,000円", "小学生: 600円", "幼児: 200円", "貸切風呂: 45分/2名 5,000円 (最大4名)"],
        "fees_en": ["Adult: 1,000 yen", "Elementary: 600 yen", "Infant: 200 yen", "Private Bath: 45 min/2 persons 5,000 yen"],
        "qual_ja": ["ナトリウム-塩化物・炭酸水素塩温泉", "源泉温度: 59.1℃", "茶褐色 (ウーロン茶色) のとろみあるモール泉"],
        "qual_en": ["Sodium-chloride, hydrogen carbonate spring", "Source Temp: 59.1℃", "Green tea-colored (brownish) cloudy water. Smooth, lotion-like texture."],
        "hl_ja": ["全国でも希少な「五ツ星源泉」100%源泉かけ流し", "プロも絶賛する最高ランクの泉質", "日帰りでも個室の貸切露天風呂が利用可能"],
        "hl_en": ["100% natural flow of 5-Star Source (held by only 1% in Japan)", "Top-grade spring quality recognized by professionals", "Private open-air baths available for day-trip users"],
        "tel": "0287-36-6802", "addr_ja": "栃木県那須塩原市井口548-350", "addr_en": "548-350 Iguchi, Nasu-shiobara City, Tochigi",
        "url": "https://www.ootakanoyu.com/"
    },
    {
        "num": 2,
        "name_ja": "千本松温泉", "name_en": "Senbonmatsu Onsen",
        "dist_ja": "車で約15分", "dist_en": "Approx. 15 min drive",
        "acc_ja": ["車で約15分", "千本松牧場内 (西那須野塩原IC降りてすぐ)"],
        "acc_en": ["Approx. 15 min drive", "Inside Senbonmatsu Ranch (near Nishi-nasuno-shiobara IC)"],
        "hours_ja": ["13:00～23:00 (最終受付22:30)", "定休日: なし (メンテナンス時除く)"],
        "hours_en": ["1:00 PM – 11:00 PM (Last entry 10:30 PM)", "Open daily (except for maintenance)"],
        "fees_ja": ["平日: 大人 700円、小学生 250円、未就学児 無料", "土日祝: 大人 800円、小学生 300円、未就学児 無料", "回数券(10回分): 6,000円"],
        "fees_en": ["Weekdays: Adult 700 yen, Elem 250 yen, Pre-school Free", "Weekends/Holidays: Adult 800 yen, Elem 300 yen, Pre-school Free", "Multi-use Ticket: 6,000 yen/10 entries"],
        "qual_ja": ["アルカリ性の美肌の湯", "植物由来の天然モール泉"],
        "qual_en": ["Alkaline skin-beautifying bath", "Plant-derived natural hot spring"],
        "hl_ja": ["夜23時まで営業しており遅めの利用に便利", "千本松牧場内にある穴場的温泉", "仕事終わりのリフレッシュに最適"],
        "hl_en": ["Open until 11:00 PM, great for late-night use", "A hidden gem inside Senbonmatsu Ranch", "Perfect for relaxation after work"],
        "tel": "0287-36-1025", "addr_ja": "栃木県那須塩原市千本松799", "addr_en": "799 Senbonmatsu, Nasu-shiobara City, Tochigi",
        "url": "https://www.senbonmatsu.com/onsen/"
    },
    {
        "num": 3,
        "name_ja": "那須塩原駅前温泉", "name_en": "Nasu-shiobara Ekimae Onsen",
        "is_new": True, "badge_ja": "NEW", "badge_en": "NEW",
        "dist_ja": "車で約5分", "dist_en": "Approx. 5 min drive",
        "acc_ja": ["車で約5分 (2.3km)", "徒歩約26分", "バス停「唐杉南」から徒歩2分"],
        "acc_en": ["Approx. 5 min drive (2.3km)", "26 min walk", "2 min walk from 'Karasugi Minami' bus stop"],
        "hours_ja": ["平日: 13:00～21:00 (最終受付20:00)", "定休日: 第3火曜日"],
        "hours_en": ["Weekdays: 1:00 PM – 9:00 PM (Last entry 8:00 PM)", "Closed: 3rd Tuesday"],
        "fees_ja": ["大人: 1,000円", "子供: 500円"],
        "fees_en": ["Adult: 1,000 yen", "Child: 500 yen"],
        "qual_ja": ["エメラルドグリーンの源泉かけ流し", "2020年オープンの新しい施設"],
        "qual_en": ["100% natural flow with emerald green water", "Modern facility opened in 2020"],
        "hl_ja": ["当ホテルから最も近い温泉施設", "内湯・露天風呂・サウナ・水風呂を完備", "新しくて清潔感のある施設"],
        "hl_en": ["Closest hot spring facility from the hotel", "Indoor/outdoor baths, sauna, and cold plunge", "New and clean facilities"],
        "tel": "0287-65-1126", "addr_ja": "栃木県那須塩原市唐杉曽根林41", "addr_en": "41 Sonebayashi, Karasugi, Nasu-shiobara City",
        "no_url": True
    },
    {
        "num": 4,
        "name_ja": "みかえりの郷 彩花の湯", "name_en": "Mikaeri-no-Sato Saika-no-Yu",
        "dist_ja": "車で約10〜15分", "dist_en": "Approx. 10-15 min drive",
        "acc_ja": ["車で約10〜15分", "もみじ谷大吊橋近く"],
        "acc_en": ["Approx. 10-15 min drive", "Near Momijidani suspension bridge"],
        "hours_ja": ["10:00～21:00 (最終受付20:30)", "定休: 第3水曜・不定休(要HP確認)"],
        "hours_en": ["10:00 AM – 9:00 PM (Last entry 8:30 PM)", "Closed: 3rd Wednesday + irregular"],
        "fees_ja": ["大人(中学生以上): 700円", "小人(3歳～小学生): 400円"],
        "fees_en": ["Adult (13+): 700 yen", "Child (3-12): 400 yen"],
        "qual_ja": ["ナトリウム-塩化物温泉 (低張性 弱アルカリ性)", "pH値: 8.8 (アルカリ性)"],
        "qual_en": ["Sodium-chloride spring (Hypotonic weak alkaline)", "pH: 8.8 (Alkaline)"],
        "hl_ja": ["山々を見渡せる絶景の露天風呂", "もみじ谷大吊橋の近くで観光帰りに最適", "サウナ完備"],
        "hl_en": ["Open-air bath with mountain views", "Located near Momijidani suspension bridge", "Sauna available"],
        "tel": "0287-34-1126", "addr_ja": "栃木県那須塩原市関谷1425-211", "addr_en": "1425-211 Sekiya, Nasu-shiobara City, Tochigi",
        "url": "http://www.mikaerinosato.jp/"
    },
    {
        "num": 5, "name_ja": "芦野温泉", "name_en": "Ashino Onsen",
        "dist_ja": "車で約20分", "dist_en": "Approx. 20 min drive",
        "acc_ja": ["那須塩原駅より約20km"], "acc_en": ["Approx. 20km from Nasu-shiobara Station"],
        "hours_ja": ["事前に要確認"], "hours_en": ["Please check in advance"],
        "fees_ja": ["施設にお問い合わせください"], "fees_en": ["Please check with the facility"],
        "qual_ja": ["大型複合温泉施設"], "qual_en": ["Large natural hot spring complex"],
        "hl_ja": ["人気の大型日帰り温泉", "設備が充実しており長時間楽しめる"],
        "hl_en": ["Large day-trip hot spring facility", "Well-equipped facilities for a long stay"],
        "url": "https://www.asinoonsen.co.jp/"
    },
    {
        "num": 6, "name_ja": "鹿の湯 (那須温泉元湯)", "name_en": "Shika-no-Yu (Nasu Onsen Motoyu)",
        "dist_ja": "車で約35分", "dist_en": "Approx. 35 min drive",
        "acc_ja": ["車で約35分"], "acc_en": ["Approx. 35 min drive"],
        "hours_ja": ["8:00～18:00 (11月～3月は17:00まで)"], "hours_en": ["8:00 AM – 6:00 PM (until 5:00 PM Nov–Mar)"],
        "fees_ja": ["大人: 500円", "小学生: 300円"], "fees_en": ["Adult: 500 yen", "Elementary: 300 yen"],
        "qual_ja": ["硫黄泉 (乳白色)", "約1300年の歴史を持つ「元湯」"], "qual_en": ["Sulfur spring (Milky white water)", "Historic 'Motoyu' with approx. 1,300 years of history"],
        "hl_ja": ["那須温泉発祥の地", "強い硫黄の香りと乳白色の濁り湯", "歴史的名湯でありながら500円と高コスパ"],
        "hl_en": ["Birthplace of Nasu Onsen", "Strong sulfur aroma and milky white water", "Best value for a historic famous spring"],
        "url": "http://www.shikanoyu.jp/"
    },
    {
        "num": 7, "name_ja": "大丸温泉旅館", "name_en": "Omaru Onsen Ryokan",
        "badge_ja": "秘湯", "badge_en": "Hidden Spring",
        "dist_ja": "車で約40分", "dist_en": "Approx. 40 min drive",
        "acc_ja": ["車で約40分"], "acc_en": ["Approx. 40 min drive"],
        "hours_ja": ["11:30～15:00 (最終受付14:30)"], "hours_en": ["11:30 AM – 3:00 PM (Last entry 2:30 PM)"],
        "fees_ja": ["大人: 1,000円", "小学生: 700円"], "fees_en": ["Adult: 1,000 yen", "Elementary: 700 yen"],
        "qual_ja": ["硫黄泉", "標高1300mに湧く秘湯"], "qual_en": ["Sulfur spring", "Hidden spring at 1,300m altitude"],
        "hl_ja": ["川そのものが巨大な露天風呂となっている「川の湯」", "大自然の中のダイナミックな入浴", "本格的な秘湯を味わえる"],
        "hl_en": ["Stunning 'River Bath' open-air pool", "Outdoor bathing in pure nature", "Authentic hidden spring experience"],
        "url": "https://www.omaru.co.jp/"
    },
    {
        "num": 8, "name_ja": "北温泉旅館", "name_en": "Kita Onsen Ryokan",
        "badge_ja": "秘湯・映画ロケ地", "badge_en": "Hidden Spring / Movie Location",
        "dist_ja": "車で約50分", "dist_en": "Approx. 50 min drive",
        "acc_ja": ["車で約50分"], "acc_en": ["Approx. 50 min drive"],
        "hours_ja": ["8:30～17:30"], "hours_en": ["8:30 AM – 5:30 PM"],
        "fees_ja": ["大人: 700円", "小人: 400円"], "fees_en": ["Adult: 700 yen", "Child: 400 yen"],
        "qual_ja": ["天狗の湯", "温泉情緒あふれるレトロな雰囲気"], "qual_en": ["Tengu Onsen", "Edo-period hot spring resort atmosphere"],
        "hl_ja": ["映画「テルマエ・ロマエ」のロケ地", "江戸時代のような風情が残る", "天狗伝説が残る歴史ある湯"],
        "hl_en": ["Filming location for the movie 'Thermae Romae'", "A must-visit for movie fans", "Hidden spring with Tengu legends"],
        "url": "http://www.kitaonsen.com/"
    },
    {
        "num": 9, "name_ja": "小鹿の湯", "name_en": "Kojika-no-Yu",
        "dist_ja": "車で約35分", "dist_en": "Approx. 35 min drive",
        "acc_ja": ["車で約35分"], "acc_en": ["Approx. 35 min drive"],
        "hours_ja": ["9:00～21:00"], "hours_en": ["9:00 AM – 9:00 PM"],
        "fees_ja": ["大人: 500円", "小人: 300円"], "fees_en": ["Adult: 500 yen", "Child: 300 yen"],
        "qual_ja": ["名湯「鹿の湯」と同じ源泉を使用"], "qual_en": ["Uses the same spring source as Shika-no-Yu"],
        "hl_ja": ["夜21時まで営業", "鹿の湯源泉を引きながら、比較的空いている穴場", "500円で名湯を満喫できコスパ抜群"],
        "hl_en": ["Open until 9:00 PM", "Often less crowded than Shika-no-Yu", "Excellent value"],
        "no_url": True
    },
    {
        "num": 10, "name_ja": "金ちゃん温泉", "name_en": "Kin-chan Onsen",
        "dist_ja": "車で約40分", "dist_en": "Approx. 40 min drive",
        "acc_ja": ["車で約40分"], "acc_en": ["Approx. 40 min drive"],
        "hours_ja": ["昼の部: 11:30～16:00", "夜の部: 17:00～21:00"], "hours_en": ["Day: 11:30 AM – 4:00 PM", "Night: 5:00 PM – 9:00 PM"],
        "fees_ja": ["昼: 大人 800円", "夜: 大人 650円"], "fees_en": ["Day: Adult 800 yen", "Night: Adult 650 yen"],
        "qual_ja": ["塩化物泉", "自然に囲まれた心安らぐ温泉"], "qual_en": ["Chloride spring", "Quiet hot spring in the forest"],
        "hl_ja": ["静かな森の中の露天風呂", "夜のライトアップが人気（夜の部がお得）"],
        "hl_en": ["Relaxing atmosphere", "Great value for the night session"],
        "url": "http://www.kinchan-onsen.com/"
    },
    {
        "num": 11, "name_ja": "塩原あかつきの湯", "name_en": "Shiobara Akatsuki-no-Yu",
        "dist_ja": "車で約40分", "dist_en": "Approx. 40 min drive",
        "acc_ja": ["車で約40分"], "acc_en": ["Approx. 40 min drive"],
        "hours_ja": ["10:00～22:00"], "hours_en": ["10:00 AM – 10:00 PM"],
        "fees_ja": ["平日: 大人 800円", "土日祝: 大人 1,000円"], "fees_en": ["Weekdays: Adult 800 yen", "Weekends/Holidays: Adult 1,000 yen"],
        "qual_ja": ["高アルカリ性温泉 (pH 9.2)", "サウナ・歩行湯プール有(水着着用)"], "qual_en": ["High alkaline spring (pH 9.2)", "Sauna and swimming pool available"],
        "hl_ja": ["抜群の美肌効果(pH 9.2)", "設備が充実", "プールがあるため家族連れにもおすすめ"],
        "hl_en": ["Excellent skin-beautifying effect", "Well-equipped facilities", "Recommended for families"],
        "url": "http://www.acatsuki.co.jp/shiobara/"
    },
    {
        "num": 12, "name_ja": "湯っ歩の里", "name_en": "Yuppo-no-Sato (Footbath Park)",
        "dist_ja": "車で約45分", "dist_en": "Approx. 45 min drive",
        "acc_ja": ["車で約45分"], "acc_en": ["Approx. 45 min drive"],
        "hours_ja": ["9:00～18:00"], "hours_en": ["9:00 AM – 6:00 PM"],
        "fees_ja": ["大人: 300円", "小中学生: 200円"], "fees_en": ["Adult: 300 yen", "Elem/Junior High: 200 yen"],
        "qual_ja": ["日本最大級の足湯"], "qual_en": ["One of the largest footbaths in Japan"],
        "hl_ja": ["気軽に足湯を楽しめる", "温泉街の散策・休憩に最適", "とてもリーズナブル"],
        "hl_en": ["Casual footbath enjoyment", "Perfect for a stroll", "Very reasonable prices"],
        "url": "http://www.yupponosato.com/"
    },
    {
        "num": 13, "name_ja": "源泉館 (秘湯の宿)", "name_en": "Gensen-kan (Hidden Spring Inn)",
        "badge_ja": "秘湯", "badge_en": "Hidden Spring",
        "dist_ja": "車で約50分", "dist_en": "Approx. 50 min drive",
        "acc_ja": ["車で約50分"], "acc_en": ["Approx. 50 min drive"],
        "hours_ja": ["8:00～18:00"], "hours_en": ["8:00 AM – 6:00 PM"],
        "fees_ja": ["大人: 800円"], "fees_en": ["Adult: 800 yen"],
        "qual_ja": ["濁り湯 (白・緑・黒に変化することも)"], "qual_en": ["Cloudy water (Color-changing springs)"],
        "hl_ja": ["日によって色が変化する神秘的な温泉", "本格的な秘湯体験", "成分が非常に濃い温泉"],
        "hl_en": ["Mysterious color-changing waters", "Authentic hidden spring experience", "Rich mineral content"],
        "url": "http://www.gensenkan.com/"
    }
]

# === HTMLを繋ぎ合わせる ===
parts = []
parts.append('<div class="section"><h2 class="section-title"><span lang="ja">📍 A. 駅周辺エリア(車で5〜15分)</span><span lang="en">📍 A. Station Area (5-15 min drive)</span> <span class="badge badge-new" style="font-size:1rem;margin-left:10px;">⭐ おすすめエリア</span></h2>')
for d in onsens[:5]:
    parts.append(make_card(d))
parts.append('</div>')

parts.append('<div class="section"><h2 class="section-title"><span lang="ja">📍 B. 那須エリア(車で30〜40分)</span><span lang="en">📍 B. Nasu Area (30-40 min drive)</span></h2>')
for d in onsens[5:10]:
    parts.append(make_card(d))
parts.append('</div>')

parts.append('<div class="section"><h2 class="section-title"><span lang="ja">📍 C. 塩原温泉エリア(車で35〜50分)</span><span lang="en">📍 C. Shiobara Onsen Area (35-50 min drive)</span></h2>')
for d in onsens[10:]:
    parts.append(make_card(d))
parts.append('</div>')

body_content = header_html + ''.join(parts) + footer_html

# htmlの差し替え
# <body>直後から</body>直前までを置換したいが、
# scriptsとcssが<body>等と分かれているので、
# <body>直後の <div class="lang-switch"> から
# </footer></div> <!-- end container --> や
# <div class="scroll-top" ...> </div> までの範囲を消して新しいのを挿入。

start_idx = html.find('<div class="lang-switch">')
end_idx = html.find('<script>', start_idx)

if start_idx != -1 and end_idx != -1:
    new_html = html[:start_idx] + body_content + html[end_idx:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    print("Rebuild success.")
else:
    print("Could not find replacement boundaries in the HTML file.")
