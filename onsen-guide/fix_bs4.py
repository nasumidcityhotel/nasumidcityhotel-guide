from bs4 import BeautifulSoup
import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html_content = f.read()

# 元データの "\n" などを保持したままパーサーにかける
soup = BeautifulSoup(html_content, 'html.parser')

# 英日翻訳マッピング
translations = {
    # 汎用
    "Access": "アクセス",
    "Hours": "営業時間",
    "Fees": "料金",
    "Spring Quality & Features": "泉質・特徴",
    "Highlights": "おすすめポイント",
    "Recommended": "おすすめ",
    "Premium Onsen": "プレミアム温泉",
    "Hidden Spring": "秘湯",
    "Hidden Spring / Movie Location": "秘湯・映画ロケ地",
    "No official website available (Please search online).": "公式サイトなし（ネット検索等でご確認ください）",
    "Visit Official Website": "公式サイトを見る",
    "Back": "戻る",
    
    # Header
    "♨️ Nasu Mid-City Hotel Nearby Day-Trip Hot Spring Guide": "♨️ 那須ミッドシティホテル 近隣日帰り温泉ガイド",
    "✨From the Station Hotel to the Famous Waters of Nasu & Shiobara✨": "✨駅前ホテルから、那須・塩原の名湯めぐりへ。✨",
    "Nasu Mid-City Hotel features in-room modular baths only, \n                    but we invite you to enjoy the variety of unique nearby day-trip hot springs instead. \n                    From new facilities just 5 minutes away by car, to 5-star premium springs, \n                    and historic hidden hot springs, we offer a diverse range of onsen experiences.": "那須ミッドシティホテルは全室ユニットバスですが、<br>その分周辺には多様な日帰り温泉が充実しております。<br>駅チカの施設から五ツ星源泉、風情ある秘湯まで、<br>お客様のスタイルに合ったお気に入りの温泉を見つけてください。",
    
    # 温泉エリア
    "📍 A. Station Area (5-15 min drive)": "📍 A. 駅周辺エリア (車5〜15分)",
    "⭐ Top Priority Area": "⭐ おすすめエリア",
    "📍 B. Nasu Area (30-40 min drive)": "📍 B. 那須エリア (車30〜40分)",
    "📍 C. Shiobara Onsen Area (35-50 min drive)": "📍 C. 塩原エリア (車35〜50分)",

    # 温泉名
    "1. Ootaka-no-Yu (5-Star Spring Inn)": "1. 大鷹の湯 (五ツ星源泉の宿)",
    "2. Senbonmatsu Onsen": "2. 千本松温泉",
    "3. Nasu-shiobara Ekimae Onsen": "3. 那須塩原駅前温泉",
    "4. Mikaeri-no-Sato Saika-no-Yu": "4. みかえりの郷 彩花の湯",
    "5. Ashino Onsen": "5. 芦野温泉",
    "6. Shika-no-Yu (Nasu Onsen Motoyu)": "6. 鹿の湯",
    "7. Omaru Onsen Ryokan": "7. 大丸温泉",
    "8. Kita Onsen Ryokan": "8. 北温泉",
    "9. Kojika-no-Yu": "9. 小鹿の湯",
    "10. Kin-chan Onsen": "10. 金ちゃん温泉",
    "11. Shiobara Akatsuki-no-Yu": "11. 塩原あかつきの湯",
    "12. Yuppo-no-Sato (Footbath Park)": "12. 湯っ歩の里",
    "13. Gensen-kan (Hidden Spring Inn)": "13. 源泉館",

    # Details (Access)
    "🚗 Approx. 5 min drive (2.3km)": "🚗 車で約5分 (2.3km)",
    "🚗 Approx. 10 min drive": "🚗 車で約10分",
    "🚗 Approx. 10 min by car": "🚗 車で約10分",
    "🚗 Approx. 10-15 min drive": "🚗 車で約10〜15分",
    "🚗 Approx. 15 min drive": "🚗 車で約15分",
    "🚗 Approx. 20 min drive": "🚗 車で約20分",
    "🚗 Approx. 35 min drive": "🚗 車で約35分",
    "🚗 Approx. 40 min drive": "🚗 車で約40分",
    "🚗 Approx. 45 min drive": "🚗 車で約45分",
    "🚗 Approx. 50 min drive": "🚗 車で約50分",
    "🚗 15 min by taxi from Nasu-shiobara/Nishi-nasuno Station": "🚗 那須塩原駅・西那須野駅よりタクシー約15分",
    "🚗 5 min from Nishi-nasuno-shiobara IC (Tohoku Expy)": "🚗 東北道 西那須野塩原ICより約5分",
    "799 Senbonmatsu, Nasu-shiobara (Inside Senbonmatsu Ranch)": "千本松牧場内 (西那須野塩原IC降りてすぐ)",
    "🚶 26 min walk": "🚶 徒歩約26分",
    "🚶 2 min walk from \"Karasugi Minami\" bus stop": "🚶 バス停 唐杉南より徒歩2分",
    "🚌 23 min by JR Bus toward Shiobara Onsen from Nasu-shiobara Station, 3 min walk from \"Momijidani Otsuribashi\"": "🚌 JRバス塩原温泉行(那須塩原駅より約23分)、もみじ谷大吊橋下車徒歩3分",
    "🚗 7km (13 min) from Nishi-nasuno-shiobara IC via Rt 400": "🚗 西那須野塩原ICより国道400号線を約7km (約13分)",
    "Approx. 20km from Nasu-shiobara Station": "那須塩原駅より約20km",

    # Details (Hours)
    "Day: 10:00 AM – 2:00 PM (Last entry 1:00 PM)": "昼: 10:00～14:00 (最終受付13:00)",
    "Night: 6:00 PM – 9:00 PM (Last entry 8:00 PM)": "夜: 18:00～21:00 (最終受付20:00)",
    "*Night hours may be closed during peak hotel occupancy (please check in advance).": "※夜はホテル繁忙時休館の場合あり(要確認)",
    "1:00 PM – 11:00 PM (Last entry 10:30 PM)": "13:00～23:00 (最終受付22:30)",
    "Closed: Open daily (except for emergency maintenance)": "年中無休（メンテナンス休業あり）",
    "Weekdays: 1:00 PM – 9:00 PM (Last entry 8:00 PM)": "平日: 13:00～21:00 (最終受付20:00)",
    "Closed: 3rd Tuesday": "定休日: 第3火曜",
    "10:00 AM – 9:00 PM (Last entry 8:30 PM)": "10:00～21:00 (最終受付20:30)",
    "Closed: 3rd Wednesday + irregular (check website)": "定休: 第3水曜 (臨時休業あり・HP確認)",
    "Please check in advance": "事前に要確認",
    "8:00 AM – 6:00 PM (until 5:00 PM Nov–Mar)": "8:00～18:00 (11月～3月は17:00まで)",
    "11:30 AM – 3:00 PM (Last entry 2:30 PM)": "11:30～15:00 (最終受付14:30)",
    "8:30 AM – 5:30 PM": "8:30～17:30",
    "9:00 AM – 9:00 PM": "9:00～21:00",
    "Day: 11:30 AM – 4:00 PM": "昼: 11:30～16:00",
    "Night: 5:00 PM – 9:00 PM": "夜: 17:00～21:00",
    "10:00 AM – 10:00 PM": "10:00～22:00",
    "9:00 AM – 6:00 PM": "9:00～18:00",
    "8:00 AM – 6:00 PM": "8:00～18:00",

    # Details (Fees)
    "Weekdays:": "平日:",
    "Weekends/Holidays:": "土日祝:",
    "Private Bath:": "貸切風呂:",
    "Multi-use Ticket:": "回数券:",
    "45 min / 2 persons: 5,000 yen (Add. person: +1,000 yen / Max 4)": "45分/2名: 5,000円 (追加1名1,000円/最大4名)",
    "6,000 yen for 10 entries": "6,000円 (10回券)",
    "Adult: 800 yen": "大人: 800円",
    "Elementary: 500 yen": "小学生: 500円",
    "Infant: 200 yen": "幼児: 200円",
    "Adult: 1,000 yen": "大人: 1,000円",
    "Elementary: 600 yen": "小学生: 600円",
    "Adult: 700 yen": "大人: 700円",
    "Elementary: 250 yen": "小学生: 250円",
    "Pre-school: Free": "未就学児: 無料",
    "Elementary: 300 yen": "小学生: 300円",
    "Child: 500 yen": "小人: 500円",
    "Adult (13+): 700 yen": "大人(中学生以上): 700円",
    "Child (3-12): 400 yen": "小人(3歳～小学生): 400円",
    "Adult: 500 yen": "大人: 500円",
    "Elementary: 700 yen": "小学生: 700円",
    "Child: 400 yen": "小人: 400円",
    "Child: 300 yen": "小人: 300円",
    "Day: Adult 800 yen": "昼 大人: 800円",
    "Night: Adult 650 yen": "夜 大人: 650円",
    "Weekdays: Adult 800 yen": "平日 大人: 800円",
    "Weekends/Holidays: Adult 1,000 yen": "土日祝 大人: 1,000円",
    "Adult: 300 yen": "大人: 300円",
    "Elem/Junior High: 200 yen": "小中学生: 200円",
    
    # Details (Spring Quality)
    "Sodium-chloride, hydrogen carbonate spring": "ナトリウム-塩化物・炭酸水素塩温泉",
    "Source Temp: 59.1℃": "源泉温度: 59.1℃",
    "Green tea-colored (brownish) cloudy water": "茶褐色(ウーロン茶色)でお肌つるつる",
    "Smooth, lotion-like texture (Moor spring)": "とろみのあるモール泉の質感",
    "🎖️ 5-Star Source (Highest rating, held by only 1% in Japan)": "🎖️ 希少な「五ツ星源泉」(全国にわずか1%)",
    "Skin-beautifying bath (Alkaline)": "美肌の湯 (アルカリ性)",
    "Plant-derived natural hot spring": "植物由来の天然モール泉",
    "100% natural flow with emerald green water": "源泉かけ流し エメラルドグリーンの湯",
    "Indoor/outdoor baths, sauna, and cold plunge": "内湯・露天風呂・サウナ・水風呂",
    "Modern facility opened in 2020": "2020年オープンの綺麗な施設",
    "Sodium-chloride spring (Hypotonic weak alkaline)": "ナトリウム・塩化物温泉 (低張性 弱アルカリ性)",
    "pH: 8.8 (Alkaline)": "pH 8.8 のアルカリ性",
    "Benefits: Neuralgia, muscle pain, joint pain, stiff shoulders, etc.": "効能: 神経痛、筋肉痛、関節痛、疲労回復など",
    "Sulfur spring (Milky white water)": "硫黄泉 (乳白色)",
    "Historic \"Motoyu\" with approx. 1,300 years of history": "開湯約1300年の歴史を持つ「元湯」",
    "Sulfur spring": "硫黄泉",
    "Hidden spring at 1,300m altitude": "標高1300mに湧く秘湯",
    "Tengu Onsen": "天狗の湯",
    "Filming location for the movie \"Thermae Romae\"": "映画「テルマエ・ロマエ」ロケ地",
    "Shika-no-Yu Source": "鹿の湯源泉引湯",
    "Uses the same spring source as Shika-no-Yu": "名湯「鹿の湯」と同じ源泉を使用",
    "Chloride spring": "塩化物泉",
    "Quiet hot spring in the forest": "自然に囲まれた心安らぐ温泉",
    "High alkaline spring (pH 9.2)": "高アルカリ性温泉 (pH 9.2)",
    "Sauna and swimming pool available": "サウナ・歩行湯プール有",
    "One of the largest footbaths in Japan": "日本最大級の足湯",
    "Cloudy water": "濁り湯(白・緑・黒に変化することも)",
    "Color-changing springs (white, green, black)": "色が変化するお湯",

    # Details (Highlights)
    "Top-grade spring quality recognized by professionals": "温泉専門家も絶賛する泉質",
    "100% natural flow (no dilution, heating, circulation, or disinfection)": "100%源泉かけ流し(加水加温なし)",
    "Abundant flow rate: approx. 1L per minute per person": "圧倒的な湧出量",
    "\"Skin-beautifying bath\" containing ancient somatids": "古代ソマチッド含有の奇跡の湯",
    "Atmospheric hidden spring setting on a vast 26,000 m2 site": "8000坪の自然に囲まれた癒しの宿",
    "Private open-air baths available for day-trip users": "日帰りでも個室貸切露天が利用可能",
    "Open until 11:00 PM, great for late-night use": "夜23時まで営業で仕事帰りにも最適",
    "A hidden gem inside Senbonmatsu Ranch": "千本松牧場内にある温泉",
    "Perfect for relaxation after work": "リラックス効果抜群",
    "High alkaline content for skin-beautifying effects": "高いアルカリ性の美肌の湯",
    "Closest hot spring facility from the hotel": "当ホテルから一番近い温泉",
    "Beautiful jade-colored water": "美しい翡翠色の温泉",
    "New and clean facilities": "設備が充実した新施設",
    "Refresh yourself in the sauna": "サウナでととのう",
    "Open-air bath with mountain views": "四季の花と山々を望む露天風呂",
    "Sauna available": "サウナ設備あり",
    "Located near Momijidani suspension bridge, great for sightseeing": "もみじ谷大吊橋に近く観光ついでに便利",
    "Alkaline water for skin beautifying": "お肌がすべすべになる湯",
    "Large day-trip hot spring facility": "人気の大型日帰り温泉",
    "Well-equipped facilities": "設備が充実",
    "Best value for a historic famous spring": "風情があってリーズナブル",
    "Birthplace of Nasu Onsen": "那須温泉発祥の地",
    "Strong sulfur aroma and milky white water": "強い硫黄の香りで温泉感たっぷり",
    "Stunning \"River Bath\" open-air pool": "川そのものが巨大な露天風呂「川の湯」",
    "Outdoor bathing in pure nature": "大自然の中のダイナミックな入浴",
    "Authentic hidden spring experience": "本格的な秘湯を味わえる",
    "A must-visit for movie fans": "テルマエ・ロマエのロケ地",
    "Edo-period hot spring resort atmosphere": "江戸時代のような風情",
    "Hidden spring with Tengu legends": "天狗伝説が残る歴史ある湯",
    "Excellent value": "500円で名湯を満喫",
    "Open until 9:00 PM": "夜21時まで営業",
    "Often less crowded than Shika-no-Yu": "鹿の湯よりも空いている穴場",
    "Relaxing atmosphere": "静かな森の中の露天風呂",
    "Great value for the night session": "夜のライトアップが人気",
    "Excellent skin-beautifying effect": "抜群の美肌効果(pH 9.2)",
    "Recommended for families": "家族連れにもおすすめ",
    "Casual footbath enjoyment": "気軽に足湯を楽しめる",
    "Perfect for a stroll": "温泉街の散策・休憩に最適",
    "Very reasonable prices": "とてもリーズナブル",
    "Mysterious color-changing waters": "日によって色が変化する神秘的な温泉",
    "Rich mineral content": "成分が非常に濃い温泉",

    # Address / Contact
    "📞 TEL: <a href=\"tel:0287-36-6802\">0287-36-6802</a> / <a href=\"tel:0120-27-1126\">0120-27-1126</a> (Reservation)": "📞 TEL: <a href=\"tel:0287-36-6802\">0287-36-6802</a>",
    "Reception: 9:00 AM – 9:00 PM": "受付: 9:00～21:00",
    "📍 Address: 548-350 Iguchi, Nasu-shiobara City, Tochigi": "📍 住所: 栃木県那須塩原市井口548",
    "Parking: 50 slots (Free)": "駐車場: 50台 (無料)",
    "📞 TEL: <a href=\"tel:0287-36-1025\">0287-36-1025</a>": "📞 TEL: <a href=\"tel:0287-36-1025\">0287-36-1025</a>",
    "📍 Address: 799 Senbonmatsu, Nasu-shiobara City, Tochigi": "📍 住所: 栃木県那須塩原市千本松799",
    "📞 TEL: <a href=\"tel:0287-65-1126\">0287-65-1126</a>": "📞 TEL: <a href=\"tel:0287-65-1126\">0287-65-1126</a>",
    "📍 Address: 41 Sonebayashi, Karasugi, Nasu-shiobara City, Tochigi": "📍 住所: 栃木県那須塩原市唐杉曽根林41",
    "📞 TEL: <a href=\"tel:0287-34-1126\">0287-34-1126</a>": "📞 TEL: <a href=\"tel:0287-34-1126\">0287-34-1126</a>",
    "📍 Address: 1425-211 Sekiya, Nasu-shiobara City, Tochigi": "📍 住所: 栃木県那須塩原市関谷1425-211",
    "Parking: 70-100 slots (Free)": "駐車場: 70～100台 (無料)",
    "📍 Nasu-shiobara Area": "📍 那須塩原エリア",
    "📍 Yumoto, Nasu Town": "📍 那須町 湯本",
    "📍 Nasu Town": "📍 那須町",
    "📍 Shiobara Onsen": "📍 塩原温泉",

    # Scenes
    "✨ Recommendations by Scene": "✨ シーン別おすすめ",
    "👑 Premium Experience": "👑 プレミアム温泉",
    "Ootaka-no-Yu (10 min drive)<br>5-star source, silky skin water": "大鷹の湯 (車で10分)<br>五ツ星源泉・美容液のような湯",
    "🚗 Easy Access Nearby": "🚗 アクセス良好(ホテル近隣)",
    "Nasu-shiobara Ekimae (5 min)<br>Ootaka-no-Yu (10 min)<br>Saika-no-Yu (10-15 min)": "那須塩原駅前温泉(車5分)<br>大鷹の湯(車10分)<br>彩花の湯(車10〜15分)",
    "🌙 Late Night Bathing": "🌙 夜遅くまで営業",
    "Senbonmatsu (until 11 PM)<br>Ootaka-no-Yu (until 9 PM/check)": "千本松温泉(23時まで)<br>大鷹の湯(夜21時まで/要確認)",
    "💰 Best Value": "💰 コスパ抜群",
    "Shika-no-Yu (500 yen)<br>Kojika-no-Yu (500 yen)": "鹿の湯 (500円)<br>小鹿の湯 (500円)",
    "🌲 Hidden & Scenic": "🌲 秘湯・絶景",
    "Omaru Onsen<br>Kita Onsen<br>Gensen-kan": "大丸温泉旅館<br>北温泉旅館<br>源泉館",
    "👨‍👩‍👧‍👦 For Families": "👨‍👩‍👧‍👦 ファミリー向け",
    "Shiobara Akatsuki-no-Yu (with pool)": "塩原あかつきの湯 (プールあり)",
    "🎬 Movie Locations": "🎬 映画のロケ地",
    "Kita Onsen<br>(Thermae Romae)": "北温泉 <br>(テルマエ・ロマエ)",

    # Info
    "🚌 Access Information": "🚌 アクセス情報",
    "🚗 By Car": "🚗 車で",
    "Access each hot spring from Nasu IC": "那須ICから各温泉へ",
    "Access each hot spring from Nishi-nasuno-shiobara IC": "西那須野塩原ICから各温泉へ",
    "Refer to each facility for parking details": "駐車場については各施設にご確認ください",
    "🚋 Public Transport": "🚋 公共交通機関 (バス)",
    "Nasu Area:": "那須エリア:",
    "Kanto Bus bound for \"Nasu Ropeway\"": "関東自動車バス「那須ロープウェイ行き」等",
    "Shiobara Area:": "塩原エリア:",
    "JR Bus Kanto bound for \"Shiobara Onsen Bus Terminal\"": "JRバス「塩原温泉バスターミナル行き」",
    "Stops at \"Momijidani Otsuribashi\", etc.": "「もみじ谷大吊橋」等で下車",
    "🚕 Taxi": "🚕 タクシー",
    "Taxi stand at Nasu-shiobara Station (West Exit)": "那須塩原駅西口にタクシー乗り場あり",
    "Refer to each facility for estimated fares": "料金の目安は距離によります",

    # FAQ / Tips
    "❓ Frequently Asked Questions (FAQ)": "❓ よくあるご質問(FAQ)",
    "Q. Is there a shuttle service to the hot springs?": "Q. 温泉までの送迎はありますか？",
    "A. We do not provide shuttle services from the hotel, but our front desk can assist with taxi and bus information.": "A. ホテルからの送迎はございませんが、フロントにてタクシーやバスの案内をしております。",
    "Q. Is a reservation required for day-trip bathing?": "Q. 予約は必要ですか？",
    "A. It varies by facility. Please contact each facility in advance, especially for private baths or night use.": "A. 施設により異なります。貸切風呂や夜のご利用などは直接施設への確認をおすすめします。",
    "Q. Should I bring my own towel?": "Q. タオルは持参した方がよいですか？",
    "A. While many facilities sell towels, we recommend bringing your own.": "A. 販売・レンタルもありますが、持参したほうがスムーズです（当ホテルのタオルの持ち出しはご遠慮ください）。",
    "Q. Are there any precautions for sulfur springs?": "Q. 硫黄泉の注意点はありますか？",
    "A. Metal jewelry may tarnish. Also, those with sensitive skin should rinse off thoroughly after bathing.": "A. 金属アクセサリーは変色するため必ず外してください。肌が弱い方は入浴後にシャワーで流すことをおすすめします。",

    "💡 Tips for Hot Spring Touring": "💡 温泉めぐりのヒント",
    "Timing: Weekday mornings are generally less crowded.": "タイミング: 平日の午前中などが空いています。",
    "Towels: Bringing your own is recommended.": "タオル: 事前に用意しておくと便利です。",
    "Hydration: Drink plenty of water before and after bathing.": "水分補給: 入浴前後はしっかりと水分を取ってください。",
    "Hours: Check in advance as hours may vary by season.": "営業時間: 季節により変動するため、直前の確認をおすすめします。",
    "Weather: Check road conditions during the winter.": "天候: 冬季は路面凍結や積雪にお気をつけください。",
    "We hope this guide helps you with your Nasu/Shiobara hot spring tour.<br>\n            Enjoy a wonderful hot spring experience!": "このガイドが那須・塩原の温泉めぐりのお役に立てば幸いです。<br>ぜひ素晴らしい温泉体験をお楽しみください！",

    # Emoji replacements
    "Nasu Mid-City Hotel Nearby Day-Trip Hot Spring Guide": "那須ミッドシティホテル 近隣日帰り温泉ガイド",
    "From the Station Hotel to the Famous Waters of Nasu & Shiobara": "駅前ホテルから、那須・塩原の名湯めぐりへ。",
    "A. Station Area (5-15 min drive)": "A. 駅周辺エリア (車5〜15分)",
    "B. Nasu Area (30-40 min drive)": "B. 那須エリア (車30〜40分)",
    "C. Shiobara Onsen Area (35-50 min drive)": "C. 塩原エリア (車35〜50分)",
    "Recommendations by Scene": "シーン別おすすめ",
}

# title tag treatment
title_tag = soup.find('title')
if title_tag:
    title_tag.string = "♨️ 那須ミッドシティホテル 近隣日帰り温泉ガイド"

# find all English tags and fill the Japanese sibling
for en_tag in soup.find_all(attrs={"lang": "en"}):
    ja_tag = en_tag.find_previous_sibling(attrs={"lang": "ja"})
    if ja_tag:
        en_text = ''.join(en_tag.stripped_strings)
        if not en_text:
            continue
            
        ja_text = translations.get(en_text, None)
        
        if not ja_text:
            for k, v in translations.items():
                if k in en_text or en_text in k:
                    ja_text = v
                    break
        
        if hasattr(ja_tag, 'clear') and ja_text:
            ja_tag.clear()
            ja_tag.append(BeautifulSoup(ja_text, 'html.parser'))
            
# specific manual replacements for buttons etc
for ja_btn in soup.find_all('button', id='btn-ja'):
    ja_btn.clear()
    ja_btn.append("日本語")

for anchor in soup.find_all('a', class_='back-button'):
    ja_span = anchor.find('span', attrs={"lang": "ja"})
    if ja_span:
        ja_span.clear()
        ja_span.append("戻る")

# specific text matching (without lang=en)
# some icons etc
for tag in soup.find_all(string=re.compile(r'횥ߥåɥƥۥƥ OՎȪ')):
    tag.replace_with(tag.replace('횥ߥåɥƥۥƥ OՎȪ', '那須ミッドシティホテル 日帰り温泉ガイド'))

# Fallback: remove ?? and ? 
fixed_html = str(soup)
fixed_html = fixed_html.replace('??', '♨️').replace('?', '💡')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(fixed_html)

print("Done with BeautifulSoup.")
