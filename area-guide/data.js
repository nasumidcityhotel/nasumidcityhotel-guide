/**
 * ============================================================
 *  那須ミッドシティホテル 観光案内データファイル
 *  【編集方法】
 *  各施設の情報を追加・変更するにはこのファイルを編集します。
 *
 *  category（カテゴリ）は以下の6種類から選んでください:
 *    "play"    → 遊ぶ（レジャー・体験）
 *    "see"     → 見る（絶景・アート・歴史）
 *    "walk"    → 歩く（自然散策・ハイキング）
 *    "eat"     → 食べる（那須グルメ・パン・カフェ）
 *    "relax"   → 癒やす（温泉・リラックス）
 *    "buy"     → 買う（お土産・直売所）
 *
 *  area（エリア）は以下の3種類から選んでください:
 *    "north"   → 北：那須高原方面
 *    "west"    → 西：塩原温泉方面
 *    "south"   → 南：大田原方面
 *
 *  officialUrl → 施設の公式サイトURLを入力（なければ "" のままにする）
 *  mapQuery    → Googleマップ検索用キーワード（施設名＋住所など）
 * ============================================================
 */

const spotsData = [

  // =============================================
  // 🎢 遊ぶ（レジャー・体験）
  // =============================================
  {
    id: 1,
    name: "那須ハイランドパーク",
    name_en: "Nasu Highland Park",
    category: "play",
    area: "north",
    description: "那須高原に広がる大型遊園地。スリル満点のアトラクションから家族向けの乗り物まで揃っています。",
    description_en: "A large amusement park spread across the Nasu Plateau. From thrilling attractions to family-friendly rides.",
    officialUrl: "https://www.nasuhai.co.jp/",
    mapQuery: "那須ハイランドパーク",
    driveTime: "約35分",
    driveTime_en: "About 35 minutes",
    hours: "営業時間は公式サイトでご確認ください",
    hours_en: "Please check official website for business hours",
    closed: "不定休（公式サイト参照）",
    closed_en: "Irregular holidays (refer to official website)",
    parking: "あり（有料）",
    parking_en: "Available (paid)",
    price: "入園料：大人2,200円〜（公式サイト参照）",
    price_en: "Admission: Adults 2,200 yen~ (refer to official website)",
    tel: "0287-78-1500",
    note: "",
    note_en: ""
  },
  {
    id: 2,
    name: "那須サファリパーク", name_en: "Nasu Safari Park",
    category: "play", area: "north",
    description: "車や専用バスに乗ってライオン・トラなどの野生動物と間近に出会える体験型サファリ。", description_en: "An experiential safari where you can see wild animals like lions and tigers up close by car or special bus.",
    officialUrl: "https://www.nasusafari.com/", mapQuery: "那須サファリパーク",
    driveTime: 30,
    hours: "9:00〜16:00（季節変動あり）", hours_en: "9:00-16:00 (Subject to changes)",
    closed: "不定休", closed_en: "Irregular holidays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人2,500円〜", price_en: "Adults 2,500 yen~",
    tel: "0287-78-0838", note: "", note_en: ""
  },
  {
    id: 3,
    name: "那須りんどう湖レイクビューリゾート", name_en: "Nasu Rindoko Lake View Resort",
    category: "play", area: "north",
    description: "湖畔のリゾート施設。牧場体験、ボート、BBQなど家族連れに人気のアクティビティが充実。", description_en: "A lakeside resort. Full of popular family activities like farm experiences, boating, and BBQ.",
    officialUrl: "https://www.rindo.co.jp/", mapQuery: "那須りんどう湖レイクビューリゾート",
    driveTime: 30,
    hours: "9:00〜17:00（季節変動あり）", hours_en: "9:00-17:00 (Subject to changes)",
    closed: "火曜（季節により変動）", closed_en: "Tuesdays (Subject to changes)",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "入園料：大人1,800円〜", price_en: "Admission: Adults 1,800 yen~",
    tel: "0287-76-3111", note: "", note_en: ""
  },

  // =============================================
  // 👀 見る（絶景・アート・歴史）
  // =============================================
  {
    id: 4,
    name: "那須テディベアミュージアム", name_en: "Nasu Teddy Bear Museum",
    category: "see", area: "north",
    description: "世界中から集めた5,000体以上のテディベアを展示。おしゃれな館内はフォトスポットとしても人気。", description_en: "Exhibits over 5,000 teddy bears from around the world. The stylish interior is also popular as a photo spot.",
    officialUrl: "https://www.teddynet.co.jp/nasu/", mapQuery: "那須テディベアミュージアム",
    driveTime: 30,
    hours: "10:00〜17:00", hours_en: "10:00-17:00",
    closed: "木曜（夏季無休）", closed_en: "Thursdays (Open daily in summer)",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人1,000円", price_en: "Adults 1,000 yen",
    tel: "0287-76-1711", note: "", note_en: ""
  },
  {
    id: 5,
    name: "那須ステンドグラス美術館", name_en: "Nasu Stained Glass Museum",
    category: "see", area: "north",
    description: "ヨーロッパの教会に実際に使われていたステンドグラスを移築・展示。幻想的な光の芸術を体験。", description_en: "Exhibits authentic stained glass relocated from European churches. Experience the magical art of light.",
    officialUrl: "https://sgm-nasu.com/", mapQuery: "那須ステンドグラス美術館",
    driveTime: 35,
    hours: "9:30〜17:30", hours_en: "9:30-17:30",
    closed: "無休", closed_en: "Open daily",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人1,200円", price_en: "Adults 1,200 yen",
    tel: "0287-76-7111", note: "", note_en: ""
  },

  // =============================================
  // 🥾 歩く（自然散策・ハイキング）
  // =============================================
  {
    id: 7,
    name: "那須岳（茶臼岳）登山", name_en: "Mt. Nasu (Chausudake) Hiking",
    category: "walk", area: "north",
    description: "那須連山の主峰・茶臼岳（1,915m）。ロープウェイを使えば初心者でも山頂を目指せます。", description_en: "Mt. Chausu (1,915m), the main peak of the Nasu mountains. Beginners can reach the top using the ropeway.",
    officialUrl: "https://www.nasu-ropeway.jp/", mapQuery: "那須岳ロープウェイ",
    driveTime: 50,
    hours: "ロープウェイ：8:30〜16:15（季節変動あり）", hours_en: "Ropeway: 8:30-16:15",
    closed: "点検日あり（公式サイト参照）", closed_en: "Inspection days (refer to official site)",
    parking: "あり（有料）", parking_en: "Available (paid)",
    price: "ロープウェイ：大人往復1,700円", price_en: "Ropeway round trip: 1,700 yen",
    tel: "0287-76-2449", note: "", note_en: ""
  },
  {
    id: 8,
    name: "塩原渓谷歩道（塩原温泉）", name_en: "Shiobara Valley Trail",
    category: "walk", area: "west",
    description: "塩原温泉郷を流れる箒川沿いの渓谷遊歩道。紅葉の名所として秋には多くの観光客が訪れます。", description_en: "A valley trail along the Houki River in Shiobara Onsen. Famous for autumn foliage attracting many visitors.",
    officialUrl: "https://www.siobara.or.jp/", mapQuery: "塩原渓谷歩道",
    driveTime: 40,
    hours: "散策自由", hours_en: "Always open",
    closed: "なし", closed_en: "None",
    parking: "あり（各駐車場）", parking_en: "Available at parking lots",
    price: "無料", price_en: "Free",
    tel: "0287-32-4000", note: "塩原温泉観光協会公式サイトをご確認ください", note_en: "Please check Shiobara Onsen Tourism Association site"
  },
  {
    id: 9,
    name: "殺生石", name_en: "Sessho-seki",
    category: "walk", area: "north",
    description: "九尾の狐伝説が残る名勝。硫黄の香りが漂う荒涼とした風景が広がり、独特の雰囲気が味わえるススキの名所。", description_en: "A scenic spot with the legend of the nine-tailed fox. Enjoy the unique atmosphere of the desolate, sulfur-scented landscape.",
    officialUrl: "https://www.town.nasu.lg.jp/0224/info-0000000398-1.html", mapQuery: "殺生石",
    driveTime: 45,
    hours: "散策自由", hours_en: "Always open",
    closed: "なし", closed_en: "None",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "無料", price_en: "Free",
    tel: "", note: "那須町観光協会公式サイトなどをご確認ください", note_en: "Check Nasu Town Tourism Association site"
  },
  {
    id: 46,
    name: "那須温泉神社", name_en: "Nasu Onsen Shrine",
    category: "see", area: "north",
    description: "殺生石に隣接する歴史ある神社。那須与一が屋島の戦いで祈願したことで知られ、パワースポットとして人気です。", description_en: "A historic shrine adjacent to Sessho-seki. Known as a power spot where Nasu no Yoichi prayed for victory.",
    officialUrl: "https://nasu-yuzen.jp/", mapQuery: "那須温泉神社",
    driveTime: 45,
    hours: "参拝自由", hours_en: "Always open",
    closed: "なし", closed_en: "None",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "無料", price_en: "Free",
    tel: "0287-76-2057", note: "", note_en: ""
  },

  // =============================================
  // 🍽️ 食べる（那須グルメ・パン・カフェ）
  // =============================================
  {
    id: 10,
    name: "ペニーレイン（那須ビートルズ記念館）", name_en: "Penny Lane Nasu",
    category: "eat", area: "north",
    description: "ビートルズをテーマにした人気のパン・カフェ。自家製パンとコーヒーが楽しめる那須の定番スポット。", description_en: "A popular Beatles-themed bakery and cafe. A classic Nasu spot to enjoy homemade bread and coffee.",
    officialUrl: "https://pennylane.company/pennylane_r_nasu", mapQuery: "ペニーレイン 那須",
    driveTime: 35,
    hours: "10:00〜17:00（季節変動あり）", hours_en: "10:00-17:00",
    closed: "火曜", closed_en: "Tuesdays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "〜1,500円程度", price_en: "Around 1,500 yen",
    tel: "0287-78-0099", note: "", note_en: ""
  },
  {
    id: 11,
    name: "チーズガーデン 那須本店", name_en: "Cheese Garden Nasu Main Store",
    category: "eat", area: "north",
    description: "那須を代表する人気スイーツ店。御用邸チーズケーキはお土産としても大人気。カフェ併設。", description_en: "A renowned sweets shop in Nasu. The Goyoutei Cheesecake is very popular as a souvenir. Cafe attached.",
    officialUrl: "https://shoplist.cheesegarden.jp/detail/001/", mapQuery: "チーズガーデン 那須本店",
    driveTime: 30,
    hours: "10:00〜18:00", hours_en: "10:00-18:00",
    closed: "不定休", closed_en: "Irregular holidays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "ケーキ：500円〜", price_en: "Cake: 500 yen~",
    tel: "0287-64-4848", note: "", note_en: ""
  },
  {
    id: 12,
    name: "那須高原 南ヶ丘牧場", name_en: "Nasu Kogen Minamigaoka Dairy",
    category: "eat", area: "north",
    description: "牧場直営のレストランでガーンジィ牛乳を使った料理やジェラートが楽しめる。牧場体験も可能。", description_en: "Enjoy dishes and gelato made with Guernsey milk at the farm's restaurant. Farm experiences also available.",
    officialUrl: "https://www.minamigaoka.co.jp/", mapQuery: "那須高原南ヶ丘牧場",
    driveTime: 30,
    hours: "9:00〜17:30", hours_en: "9:00-17:30",
    closed: "無休", closed_en: "Open daily",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "入場無料（体験は有料）", price_en: "Free admission (Exp extra)",
    tel: "0287-76-2150", note: "", note_en: ""
  },

  // =============================================
  // ♨️ 癒やす（温泉・リラックス）
  // =============================================
  {
    id: 13,
    name: "大丸温泉旅館（那須温泉）", name_en: "Omaru Onsen Ryokan",
    category: "relax", area: "north",
    description: "那須連山の麓に湧く秘湯。川をせき止めた天然の混浴露天風呂が有名。日帰り入浴も可能。", description_en: "A hidden hot spring at the foot of the Nasu mountains. Famous for its natural mixed open-air bath created by damming a river.",
    officialUrl: "https://www.omaru.co.jp/", mapQuery: "大丸温泉旅館 那須",
    driveTime: 55,
    hours: "日帰り：10:00〜14:00", hours_en: "Day trip: 10:00-14:00",
    closed: "不定休", closed_en: "Irregular holidays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "日帰り入浴：800円〜", price_en: "Day trip bath: 800 yen~",
    tel: "0287-76-3050", note: "", note_en: ""
  },
  {
    id: 14,
    name: "塩原温泉（湯めぐり）", name_en: "Shiobara Onsen",
    category: "relax", area: "west",
    description: "11の温泉地が点在する日本屈指の温泉郷。日帰り温泉や足湯も充実。湯めぐり手形も人気。", description_en: "One of Japan's leading hot spring villages dotting 11 areas. Plenty of day-trip baths and foot baths.",
    officialUrl: "https://www.siobara.or.jp/", mapQuery: "塩原温泉",
    driveTime: 40,
    hours: "施設によって異なる", hours_en: "Depends on facility",
    closed: "施設によって異なる", closed_en: "Depends on facility",
    parking: "各施設にあり", parking_en: "Available at each facility",
    price: "日帰り入浴：500〜1,500円程度", price_en: "Day bath: 500-1,500 yen",
    tel: "0287-32-4000", note: "塩原温泉観光協会でご確認ください", note_en: "Check with Shiobara Tourism Association"
  },
  {
    id: 15,
    name: "那須温泉 鹿の湯", name_en: "Nasu Onsen Shikanoyu",
    category: "relax", area: "north",
    description: "開湯1,380年以上の歴史を持つ那須最古の温泉。硫黄泉の源泉かけ流しが楽しめる湯治場の原点。", description_en: "The oldest hot spring in Nasu with over 1,380 years of history. Enjoy free-flowing sulfur springs.",
    officialUrl: "https://www.shikanoyu.co.jp/", mapQuery: "鹿の湯 那須温泉",
    driveTime: 45,
    hours: "8:00〜18:00（最終受付17:00）", hours_en: "8:00-18:00",
    closed: "第1・3水曜（繁忙期は無休）", closed_en: "1st & 3rd Wed (Open daily in peak)",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "入浴料：500円", price_en: "Bath fee: 500 yen",
    tel: "0287-76-3098", note: "", note_en: ""
  },

  // =============================================
  // 🛍️ 買う（お土産・直売所）
  // =============================================
  {
    id: 16,
    name: "那須高原 友愛の森（道の駅）", name_en: "Michi-no-Eki Nasu Kogen Yuainomori",
    category: "buy", area: "north",
    description: "那須の特産品・地元野菜・工芸品が揃う道の駅。地元農家直送の新鮮な農産物が人気。", description_en: "A roadside station offering Nasu specialties, local vegetables, and crafts. Direct from local farmers.",
    officialUrl: "https://www.yuainomori.com/", mapQuery: "那須高原友愛の森 道の駅",
    driveTime: 30,
    hours: "9:00〜18:00（季節変動あり）", hours_en: "9:00-18:00 (Subject to changes)",
    closed: "火曜（繁忙期は無休）", closed_en: "Tuesdays (Open daily in peak)",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "無料（お買い物のみ）", price_en: "Free (shopping only)",
    tel: "0287-78-0711", note: "", note_en: ""
  },
  {
    id: 17,
    name: "道の駅 明治の森・黒磯", name_en: "Michi-no-Eki Meiji no Mori Kuroiso",
    category: "buy", area: "north",
    description: "明治時代の洋館「旧青木家那須別邸」に隣接した道の駅。那須塩原の特産品・農産物が充実。", description_en: "Roadside station adjacent to the Meiji-era 'Former Aoki Family Nasu Villa'. Rich in local Nasushiobara products.",
    officialUrl: "https://meijinomori.jp/", mapQuery: "道の駅 明治の森・黒磯",
    driveTime: 10,
    hours: "9:00〜18:00", hours_en: "9:00-18:00",
    closed: "火曜", closed_en: "Tuesdays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "無料（お買い物のみ）", price_en: "Free (shopping only)",
    tel: "0287-63-0399", note: "", note_en: ""
  },

  {
    id: 19,
    name: "那須とりっくあーとぴあ", name_en: "Nasu Trick Art Pia",
    category: "play", area: "north",
    description: "目の錯覚を利用した不思議なトリックアート美術館。カメラでの撮影が必須の参加型テーマパーク。",
    description_en: "A participatory trick art museum using optical illusions. Bringing a camera is a must.",
    officialUrl: "https://www.trick-art.jp/", mapQuery: "那須とりっくあーとぴあ",
    driveTime: 25,
    hours: "9:30〜17:00（季節変動あり）", hours_en: "9:30-17:00 (Subject to changes)",
    closed: "不定休", closed_en: "Irregular holidays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人1,300円", price_en: "Adults 1,300 yen",
    tel: "0287-76-2389", note: "", note_en: ""
  },
  {
    id: 20,
    name: "那須オルゴール美術館", name_en: "Nasu Music Box Museum",
    category: "see", area: "north",
    description: "世界各国のアンティークオルゴールを常時展示。美しい音色を聴くことができる演奏時間も随時開催。",
    description_en: "Exhibits antique music boxes from around the world. Regular performances allow you to hear their beautiful sounds.",
    officialUrl: "https://nasuorgel.jp/", mapQuery: "那須オルゴール美術館",
    driveTime: 25,
    hours: "9:30〜17:00", hours_en: "9:30-17:00",
    closed: "不定休", closed_en: "Irregular holidays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人1,100円", price_en: "Adults 1,100 yen",
    tel: "0287-78-2733", note: "", note_en: ""
  },
  {
    id: 21,
    name: "アジアンオールドバザール", name_en: "Asian Old Bazaar",
    category: "buy", area: "north",
    description: "バリ・ベトナム・ネパールなどの雑貨や衣料品、本格的なアジアン料理が楽しめるミニテーマパーク的市場。",
    description_en: "A mini theme park market offering Asian goods, clothing, and authentic Asian cuisine from Bali, Vietnam, and Nepal.",
    officialUrl: "https://www.asianoldbazaar.com/", mapQuery: "アジアンオールドバザール",
    driveTime: 30,
    hours: "10:00〜17:00", hours_en: "10:00-17:00",
    closed: "無休", closed_en: "Open daily",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "入場無料", price_en: "Free admission",
    tel: "0287-76-7600", note: "", note_en: ""
  },
  {
    id: 22,
    name: "トレジャーストーンパーク", name_en: "Treasure Stone Park",
    category: "play", area: "north",
    description: "子どもに大人気の「宝石探し」ミニテーマパーク。水晶やアメジストなどのパワーストーンを発掘して持ち帰れます。",
    description_en: "A highly popular 'gem hunting' mini theme park for kids. Dig up and take home power stones like crystal and amethyst.",
    officialUrl: "http://www.treasurestonepark.com/", mapQuery: "トレジャーストーンパーク",
    driveTime: 30,
    hours: "10:00〜17:00", hours_en: "10:00-17:00",
    closed: "木・金休館（時期により変動）", closed_en: "Thu & Fri (Varies by season)",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "発掘有料（定員制）", price_en: "Paid excavation (Please inquire)",
    tel: "0287-73-8039", note: "大人気のため事前予約推奨", note_en: "Advance booking highly recommended"
  },
  {
    id: 23,
    name: "那須ワールドモンキーパーク", name_en: "Nasu World Monkey Park",
    category: "play", area: "north",
    description: "世界の珍しいサルたちと直接触れ合える動物園。ゾウの森ではゾウに乗る体験（ゾウライド）も可能。",
    description_en: "A zoo where you can interact directly with rare monkeys from around the world. Elephant rides also available.",
    officialUrl: "https://www.nasumonkey.com/", mapQuery: "那須ワールドモンキーパーク",
    driveTime: 35,
    hours: "9:30〜16:30", hours_en: "9:30-16:30",
    closed: "不定休", closed_en: "Irregular holidays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人2,100円", price_en: "Adults 2,100 yen",
    tel: "0287-63-8855", note: "", note_en: ""
  },
  {
    id: 24,
    name: "コピスガーデン", name_en: "Coppice Garden",
    category: "see", area: "north",
    description: "バラや宿根草が咲き誇る美しい体験型ガーデン＆ナーセリー。おしゃれなカフェや雑貨・苗の販売も。",
    description_en: "A beautiful experiential garden & nursery blooming with roses and perennials. Features a stylish cafe, goods, and seedling sales.",
    officialUrl: "https://www.coppicegarden.info/", mapQuery: "コピスガーデン 那須",
    driveTime: 25,
    hours: "9:00〜17:00", hours_en: "9:00-17:00",
    closed: "水曜（冬季変動あり）", closed_en: "Wednesdays (Subject to winter changes)",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "季節により数百円", price_en: "Varies by season",
    tel: "0287-62-8787", note: "", note_en: ""
  },
  {
    id: 25,
    name: "竜化の滝", name_en: "Ryuka Falls",
    category: "walk", area: "west",
    description: "塩原10名瀑の中でも最もダイナミックな滝。遊歩道での軽いハイキングが楽しめ、マイナスイオンたっぷり。",
    description_en: "The most dynamic among Shiobara's 10 great waterfalls. Enjoy a light hike on the trail filled with negative ions.",
    officialUrl: "https://nasushiobara-kanko.jp/spots/11754/", mapQuery: "竜化の滝",
    driveTime: 40,
    hours: "散策自由", hours_en: "Always open",
    closed: "なし", closed_en: "None",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "無料", price_en: "Free",
    tel: "", note: "遊歩道入り口付近に駐車場あり", note_en: "Parking near the trail entrance"
  },
  {
    id: 26,
    name: "塩原の滝と吊り橋", name_en: "Shiobara Waterfalls and Suspension Bridges",
    category: "see", area: "west",
    description: "塩原自慢の渓谷の絶景。7つの吊り橋と10名瀑を中心に、四季折々の自然を長短さまざまな散策路で楽しめます。",
    description_en: "The pride of Shiobara's valley beauty. Enjoy seasonal nature along various walking trails centered around 7 suspension bridges and 10 famous waterfalls.",
    officialUrl: "https://www.siobara.or.jp/waterfall/", mapQuery: "塩原 滝 吊り橋",
    driveTime: 40,
    hours: "散策自由（日中推奨）", hours_en: "Always open (Daytime recommended)",
    closed: "なし（天候による）", closed_en: "None (Subject to weather)",
    parking: "各所にあり", parking_en: "Available at various locations",
    price: "一部有料あり", price_en: "Some paid",
    tel: "0287-32-4000", note: "塩原温泉観光協会でご確認ください", note_en: "Check with Shiobara Tourism Association"
  },
  {
    id: 27,
    name: "湯っ歩の里", name_en: "Yuppo no Sato",
    category: "relax", area: "west",
    description: "日本最大級の足湯施設。回廊式の足湯や飲泉所があり、塩原温泉街の散策途中の立ち寄りに最適。",
    description_en: "One of Japan's largest foot bath facilities. Features corridor-style foot baths and spring water drinking spots. Ideal for a rest.",
    officialUrl: "https://www.yupponosato.com/", mapQuery: "湯っ歩の里",
    driveTime: 40,
    hours: "9:00〜18:00（季節変動）", hours_en: "9:00-18:00 (Subject to changes)",
    closed: "木曜", closed_en: "Thursdays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人200円", price_en: "Adults 200 yen",
    tel: "0287-32-3101", note: "", note_en: ""
  },
  {
    id: 28,
    name: "ハンターマウンテン塩原", name_en: "Hunter Mountain Shiobara",
    category: "play", area: "west",
    description: "都心最大級のスノーリゾート。秋は「紅葉ゴンドラ」、夏は「ゆりパーク」としてオールシーズン楽しめる。",
    description_en: "A major snow resort. Enjoy the 'Autumn Foliage Gondola' in fall and 'Lily Park' in summer for year-round fun.",
    officialUrl: "https://www.hunter.co.jp/", mapQuery: "ハンターマウンテン塩原",
    driveTime: 50,
    hours: "季節・営業内容により変動", hours_en: "Varies by season and operation",
    closed: "季節変動", closed_en: "Varies by season",
    parking: "あり", parking_en: "Available",
    price: "おもにゴンドラ・リフト料など", price_en: "Mainly Gondola/Lift fees",
    tel: "0287-32-4580", note: "最新の営業状況は公式サイト参照", note_en: "Check official site for latest info"
  },
  {
    id: 29,
    name: "栃木県なかがわ水遊園", name_en: "Tochigi Nakagawa Aquatic Park",
    category: "play", area: "south",
    description: "淡水魚を中心に展示する栃木県唯一の水族館。アマゾン川の巨大魚などが泳ぐトンネル水槽は必見。",
    description_en: "Tochigi's only aquarium, focusing on freshwater fish. The tunnel tank with massive Amazonian fish is a must-see.",
    officialUrl: "https://tnap.jp/", mapQuery: "栃木県なかがわ水遊園",
    driveTime: 40,
    hours: "9:30〜16:30", hours_en: "9:30-16:30",
    closed: "月曜・第4木曜", closed_en: "Mondays, 4th Thursdays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人650円", price_en: "Adults 650 yen",
    tel: "0287-98-3055", note: "", note_en: ""
  },
  {
    id: 30,
    name: "雲巌寺", name_en: "Unganji Temple",
    category: "see", area: "south",
    description: "松尾芭蕉も訪れた禪宗の古刹。四季折々の自然と一体になった境内は「栃木の景勝百選」にも選出。",
    description_en: "An ancient Zen temple visited by Basho Matsuo. The precincts blending with nature are chosen as one of Tochigi's 100 scenic spots.",
    officialUrl: "https://www.city.ohtawara.tochigi.jp/docs/2013082765673/", mapQuery: "雲巌寺 大田原",
    driveTime: 60,
    hours: "参拝自由", hours_en: "Always open (Daytime)",
    closed: "なし", closed_en: "None",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "無料", price_en: "Free",
    tel: "0287-54-1110", note: "大田原市観光協会公式サイトをご確認ください", note_en: "Check with Otawara Tourism Association"
  },
  {
    id: 31,
    name: "大雄寺", name_en: "Daiouji Temple",
    category: "see", area: "south",
    description: "県指定有形文化財の茅葺き屋根が並ぶ曹洞宗の古刹。坐禅などの体験も行っている。",
    description_en: "An ancient Soto Zen temple lined with thatched roofs, designated as a tangible cultural property. Zen meditation experiences available.",
    officialUrl: "https://www.daiouji.or.jp/", mapQuery: "大雄寺 大田原",
    driveTime: 40,
    hours: "9:00〜16:00", hours_en: "9:00-16:00",
    closed: "なし", closed_en: "None",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "拝観料：大人500円", price_en: "Admission: Adults 500 yen",
    tel: "0287-54-0332", note: "", note_en: ""
  },
  {
    id: 32,
    name: "道の駅 那須与一の郷", name_en: "Michi-no-Eki Nasu Yoichi no Sato",
    category: "buy", area: "south",
    description: "源平合戦の英雄・那須与一ゆかりの地にある道の駅。地元の新鮮野菜、特産品、手作りジェラートが人気。",
    description_en: "Roadside station in the land associated with Nasu no Yoichi, hero of the Genpei War. Popular for local veggies and gelato.",
    officialUrl: "https://www.nasuno-yoichi.jp/", mapQuery: "道の駅 那須与一の郷",
    driveTime: 30,
    hours: "9:00〜17:00", hours_en: "9:00-17:00",
    closed: "不定休", closed_en: "Irregular holidays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "入場無料", price_en: "Free admission",
    tel: "0287-23-8641", note: "与一伝承館も併設", note_en: "Yoichi Lore Museum attached"
  },
  {
    id: 33,
    name: "那須乃木神社", name_en: "Nasu Nogi Shrine",
    category: "see", area: "south",
    description: "乃木希典将軍を祀る自然豊かな神社。桜や紅葉の美しさでも知られ、境内は静寂に包まれている。",
    description_en: "A shrine surrounded by nature dedicated to General Maresuke Nogi. Known for beautiful cherry blossoms and autumn leaves.",
    officialUrl: "http://www.nasu-nogijinja.jp/", mapQuery: "那須乃木神社",
    driveTime: 20,
    hours: "6:00〜18:00", hours_en: "6:00-18:00",
    closed: "なし", closed_en: "None",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "無料", price_en: "Free",
    tel: "0287-36-1194", note: "", note_en: ""
  },
  {
    id: 34,
    name: "那須どうぶつ王国", name_en: "Nasu Animal Kingdom",
    category: "play", area: "north",
    description: "カピバラやスナネコ、アルパカなど珍しい動物たちとのふれあいや、大迫力のバードショーが人気の巨大動物園。",
    description_en: "A massive zoo famous for interacting with capybaras, sand cats, and alpacas, plus impressive bird shows.",
    officialUrl: "https://nasu-oukoku.com/", mapQuery: "那須どうぶつ王国",
    driveTime: 45,
    hours: "10:00〜16:00（土日祝・夏休みは変動）", hours_en: "10:00-16:00 (Varies on weekends/summer)",
    closed: "水曜休国（季節により変動あり）", closed_en: "Wednesdays (Subject to seasonal changes)",
    parking: "あり（有料）", parking_en: "Available (paid)",
    price: "大人2,600円〜", price_en: "Adults 2,600 yen~",
    tel: "0287-77-1110", note: "", note_en: ""
  },
  {
    id: 35,
    name: "那須ガーデンアウトレット", name_en: "Nasu Garden Outlet",
    category: "buy", area: "north",
    description: "ファッション、スポーツ、アウトドアブランドから地元特産品まで揃う、リゾート型ショッピングモール。",
    description_en: "A resort-style shopping mall offering fashion, sports, outdoor brands, and local specialties.",
    officialUrl: "https://www.nasu-gardenoutlet.com/", mapQuery: "那須ガーデンアウトレット",
    driveTime: 15,
    hours: "10:00〜19:00（季節変動あり）", hours_en: "10:00-19:00 (Subject to changes)",
    closed: "無休", closed_en: "Open daily",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "入場無料", price_en: "Free admission",
    tel: "0287-65-4999", note: "ホテルから車で15分と好アクセス！", note_en: "Great access, 15 mins by car from hotel!"
  },
  {
    id: 36,
    name: "那須千本松牧場", name_en: "Nasu Senbonmatsu Farm",
    category: "eat", area: "west",
    description: "東京ドーム178個分の広大な敷地を持つ牧場。名物のソフトクリームやジンギスカン、動物ふれあいも入場無料で楽しめる。",
    description_en: "A vast farm offering famous soft serve ice cream, jingisukan BBQ, and animal petting, all with free admission.",
    officialUrl: "https://www.senbonmatsu.com/", mapQuery: "那須千本松牧場",
    driveTime: 20,
    hours: "9:00〜18:00", hours_en: "9:00-18:00",
    closed: "無休", closed_en: "Open daily",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "入場無料（体験別途）", price_en: "Free admission (Exp extra)",
    tel: "0287-36-1025", note: "西那須野塩原ICすぐ", note_en: "Right near Nishinasuno-Shiobara IC"
  },
  {
    id: 37,
    name: "もみじ谷大吊橋", name_en: "Momijidani Suspension Bridge",
    category: "see", area: "west",
    description: "全長320m、塩原ダム湖に架かる本州最大級の無補剛歩道吊橋。その名の通り秋の紅葉は圧巻の眺め。",
    description_en: "One of Honshu's longest suspension bridges at 320m long over Shiobara Dam. Spectacular autumn foliage views.",
    officialUrl: "http://www.takahara-shinrin.or.jp/mori-no-eki/", mapQuery: "もみじ谷大吊橋",
    driveTime: 35,
    hours: "8:30〜18:00（冬季は16:00まで）", hours_en: "8:30-18:00 (Until 16:00 in winter)",
    closed: "無休", closed_en: "Open daily",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "渡橋料：大人300円", price_en: "Bridge toll: Adults 300 yen",
    tel: "0287-34-1037", note: "恋人の聖地としても認定されています。", note_en: "Recognized as a Lover's Sanctuary."
  },
  {
    id: 38,
    name: "藤城清治美術館 那須高原", name_en: "Seiji Fujishiro Museum Nasu Kogen",
    category: "see", area: "north",
    description: "世界的影絵作家・藤城清治氏の作品を展示する集大成の美術館。森の中に佇む幻想的な空間。",
    description_en: "A museum showcasing the works of world-renowned shadow puppeteer Seiji Fujishiro. A magical space in the forest.",
    officialUrl: "https://fujishiro-seiji-museum.jp/", mapQuery: "藤城清治美術館",
    driveTime: 35,
    hours: "9:30〜16:30", hours_en: "9:30-16:30",
    closed: "火曜", closed_en: "Tuesdays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人2,000円", price_en: "Adults 2,000 yen",
    tel: "0287-74-2581", note: "館内撮影禁止", note_en: "Photography is prohibited inside"
  },
  {
    id: 39,
    name: "NASU SHOZO CAFE", name_en: "Nasu Shozo Cafe",
    category: "eat", area: "north",
    description: "那須のカフェブームの火付け役とも言われる超人気カフェ。絶品のスコーンとコーヒーで優雅なひとときを。",
    description_en: "A hugely popular cafe that pioneered Nasu's cafe boom. Enjoy an elegant time with excellent scones and coffee.",
    officialUrl: "http://www.shozo.co.jp/", mapQuery: "NASU SHOZO CAFE",
    driveTime: 25,
    hours: "10:00〜17:00", hours_en: "10:00-17:00",
    closed: "不定休", closed_en: "Irregular holidays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "〜1,500円程度", price_en: "Around 1,500 yen",
    tel: "0287-78-3593", note: "", note_en: ""
  },
  {
    id: 40,
    name: "那須平成の森", name_en: "Nasu Heisei-no-mori Forest",
    category: "walk", area: "north",
    description: "那須御用邸用地の一部が開放された豊かな森。整備された遊歩道や、ガイドウォークで手付かずの自然を散策できます。",
    description_en: "A lush forest formerly part of the Nasu Imperial Villa. Stroll through untouched nature on trails or guided walks.",
    officialUrl: "https://nasuheisei-f.jp/", mapQuery: "那須平成の森",
    driveTime: 45,
    hours: "9:00〜17:00", hours_en: "9:00-17:00",
    closed: "水曜、年末年始", closed_en: "Wednesdays, New Year holidays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "入場無料（ガイドツアーは有料）", price_en: "Free admission (Guided tours are paid)",
    tel: "0287-74-6808", note: "", note_en: ""
  },
  {
    id: 41,
    name: "箱の森プレイパーク", name_en: "Hakonomori Play Park",
    category: "play", area: "west",
    description: "塩原の自然を満喫できる家族向けリゾート公園。アスレチック、おもしろ自転車、日帰り温泉など1日中遊べる。",
    description_en: "A family resort park to enjoy Shiobara's nature. Play all day with an obstacle course, unique bicycles, and a hot spring.",
    officialUrl: "https://nasushiobara-kanko.jp/spots/11725/", mapQuery: "箱の森プレイパーク",
    driveTime: 45,
    hours: "9:00〜17:00", hours_en: "9:00-17:00",
    closed: "水曜（祝日の場合は翌日）", closed_en: "Wednesdays (Next day if a holiday)",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "入場無料（各施設は有料）", price_en: "Free admission (Facilities are paid)",
    tel: "0287-32-3018", note: "", note_en: ""
  },
  {
    id: 42,
    name: "板室温泉", name_en: "Itamuro Onsen",
    category: "relax", area: "west", // Strictly north-west boundary, usually counted with Kuroiso/West
    description: "「下野の薬湯」として名高い開湯千年以上の国民保養温泉地。ぬるめの湯で長湯ができ、静養・湯治にぴったり。",
    description_en: "A national health resort hot spring over 1,000 years old, known as the 'healing bath of Shimotsuke'. Perfect for long soaks.",
    officialUrl: "https://www.itamuro.com/", mapQuery: "板室温泉",
    driveTime: 30,
    hours: "施設により異なる", hours_en: "Depends on facility",
    closed: "施設により異なる", closed_en: "Depends on facility",
    parking: "各施設にあり", parking_en: "Available at each facility",
    price: "日帰り入浴：500〜1,000円", price_en: "Day bath: 500-1,000 yen",
    tel: "0287-69-0268", note: "板室温泉旅館組合", note_en: "Itamuro Onsen Ryokan Association"
  },
  {
    id: 43,
    name: "塩原もの語り館", name_en: "Shiobara Monogatarikan",
    category: "see", area: "west",
    description: "塩原温泉の豊かな歴史と文化、文学を伝える資料館。直売所やカフェ、紅葉の美しい箒川沿いのテラスも併設。",
    description_en: "A museum conveying Shiobara Onsen's rich history, culture, and literature. Features a cafe and beautiful river terrace.",
    officialUrl: "https://www.siobara.or.jp/monogatari/", mapQuery: "塩原もの語り館",
    driveTime: 40,
    hours: "8:30〜17:00", hours_en: "8:30-17:00",
    closed: "なし", closed_en: "None",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "展示室：大人300円", price_en: "Exhibit: Adults 300 yen",
    tel: "0287-32-4000", note: "", note_en: ""
  },
  {
    id: 44,
    name: "黒羽城址公園", name_en: "Kurobane Castle Ruins Park",
    category: "see", area: "south",
    description: "大関氏の居城であった黒羽城の跡地で、春は桜、初夏は紫陽花（あじさい）の名所として見事に咲き誇ります。",
    description_en: "The ruins of Kurobane Castle. Known for its stunning cherry blossoms in spring and hydrangeas in early summer.",
    officialUrl: "https://www.ohtawara.info/spot_detail.html?id=29", mapQuery: "黒羽城址公園",
    driveTime: 35,
    hours: "散策自由", hours_en: "Always open",
    closed: "なし", closed_en: "None",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "無料", price_en: "Free",
    tel: "0287-54-1110", note: "", note_en: ""
  },
  {
    id: 45,
    name: "回顧の吊橋（みかえりのつりばし）", name_en: "Mikaeri Suspension Bridge",
    category: "walk", area: "west",
    description: "「振り返るほど美しい」と言われる塩原渓谷の絶景を楽しめる吊り橋。新緑や紅葉の季節は特に素晴らしい。",
    description_en: "A suspension bridge offering breathtaking views of the Shiobara Valley, said to be 'beautiful enough to look back twice'.",
    officialUrl: "https://www.siobara.or.jp/", mapQuery: "回顧の吊橋",
    driveTime: 40,
    hours: "散策自由", hours_en: "Always open",
    closed: "なし", closed_en: "None",
    parking: "あり（付近の無料駐車場）", parking_en: "Available (free nearby)",
    price: "無料", price_en: "Free",
    tel: "", note: "回顧の滝へ向かう遊歩道の入り口にもなっています。", note_en: "Entrance to Mikaeri Falls trail."
  },

  // =============================================
  // 大田原市観光協会（大関和の散歩道）
  // =============================================
  {
    id: 47,
    name: "大関和（ちか）の散歩道コース（見る）", name_en: "Ozeki Chika Walking Course (See)",
    category: "see", area: "south",
    description: "大田原市観光協会が案内する大関和（ちか）の散歩道コース。大田原の歴史や絶景スポットを紹介しています。",
    description_en: "A walking course guided by Otawara Tourism Association introducing historical and scenic spots in Otawara.",
    officialUrl: "https://ohtawara.info/chika/see.html", mapQuery: "大田原市 黒羽城址公園",
    driveTime: 40,
    hours: "各施設に準ずる", hours_en: "Depends on facility",
    closed: "各施設に準ずる", closed_en: "Depends on facility",
    parking: "あり", parking_en: "Available",
    price: "各施設に準ずる", price_en: "Depends on facility",
    tel: "0287-54-1110", note: "大田原市観光協会情報", note_en: "Otawara Tourism Association info"
  },
  {
    id: 48,
    name: "大関和（ちか）の散歩道コース（食べる）", name_en: "Ozeki Chika Walking Course (Eat)",
    category: "eat", area: "south",
    description: "大関和（ちか）の散歩道周辺にある、大田原の美味しいグルメやカフェを紹介。",
    description_en: "Introducing delicious gourmet spots and cafes around the Ozeki Chika walking course in Otawara.",
    officialUrl: "https://ohtawara.info/chika/eat.html", mapQuery: "大田原市 グルメ",
    driveTime: 40,
    hours: "各店舗に準ずる", hours_en: "Depends on shop",
    closed: "各店舗に準ずる", closed_en: "Depends on shop",
    parking: "各店舗に準ずる", parking_en: "Depends on shop",
    price: "各店舗に準ずる", price_en: "Depends on shop",
    tel: "0287-54-1110", note: "大田原市観光協会情報", note_en: "Otawara Tourism Association info"
  },
  {
    id: 49,
    name: "大関和（ちか）の散歩道コース（遊ぶ）", name_en: "Ozeki Chika Walking Course (Play)",
    category: "play", area: "south",
    description: "大関和（ちか）の散歩道周辺でのレジャーや様々な体験アクティビティを紹介。",
    description_en: "Leisure activities and hands-on experiences around the Ozeki Chika walking course in Otawara.",
    officialUrl: "https://ohtawara.info/chika/experience.html", mapQuery: "大田原市 体験",
    driveTime: 40,
    hours: "各施設に準ずる", hours_en: "Depends on facility",
    closed: "各施設に準ずる", closed_en: "Depends on facility",
    parking: "各施設に準ずる", parking_en: "Depends on facility",
    price: "各施設に準ずる", price_en: "Depends on facility",
    tel: "0287-54-1110", note: "大田原市観光協会情報", note_en: "Otawara Tourism Association info"
  },
  {
    id: 50,
    name: "大関和（ちか）の散歩道コース（買う）", name_en: "Ozeki Chika Walking Course (Buy)",
    category: "buy", area: "south",
    description: "大関和（ちか）の散歩道散策のお土産に。大田原の特産品や名産品を購入できるおすすめスポット。",
    description_en: "Recommended spots to purchase local specialties and souvenirs around the Ozeki Chika walking course.",
    officialUrl: "https://ohtawara.info/chika/souvenir.html", mapQuery: "大田原市 特産品",
    driveTime: 40,
    hours: "各店舗に準ずる", hours_en: "Depends on shop",
    closed: "各店舗に準ずる", closed_en: "Depends on shop",
    parking: "各店舗に準ずる", parking_en: "Depends on shop",
    price: "各店舗に準ずる", price_en: "Depends on shop",
    tel: "0287-54-1110", note: "大田原市観光協会情報", note_en: "Otawara Tourism Association info"
  },

  // =============================================
  // 那須高原方面（アクティビティ・観光施設追加）
  // =============================================
  {
    id: 51,
    name: "那須観光やな", name_en: "Nasu Kanko Yana",
    category: "play", area: "north",
    description: "那珂川の清流で伝統的な「やな漁」を体験。炭火焼きの新鮮な鮎料理も楽しめます。",
    description_en: "Experience traditional 'Yana' fishing in the clear Nakagawa River and enjoy fresh charcoal-grilled sweetfish.",
    officialUrl: "https://nasu-kankoyana.jp/", mapQuery: "那須観光やな",
    driveTime: 35,
    hours: "10:00〜16:30（時期により変動・冬期休業）", hours_en: "10:00-16:30 (Varies by season / closed in winter)",
    closed: "冬期休業（公式サイト参照）", closed_en: "Closed in winter (check official site)",
    parking: "あり", parking_en: "Available",
    price: "入場無料（飲食・体験は有料）", price_en: "Free entrance (Food/Exp paid)",
    tel: "0287-74-0010", note: "", note_en: ""
  },
  {
    id: 52,
    name: "那須フィッシュランド", name_en: "Nasu Fishland",
    category: "play", area: "north",
    description: "自然の渓流を活かした広大な釣り堀。釣った魚でのBBQや天然温泉（ほたるの湯）も楽しめます。",
    description_en: "A vast fishing park using natural mountain streams. Enjoy BBQ with your catch and a natural hot spring.",
    officialUrl: "https://nasufish.com/", mapQuery: "那須フィッシュランド",
    driveTime: 25,
    hours: "9:00〜17:00", hours_en: "9:00-17:00",
    closed: "木曜（季節変動あり）", closed_en: "Thursdays (Subject to change)",
    parking: "あり", parking_en: "Available",
    price: "釣り・温泉など各種料金設定あり", price_en: "Various tickets available",
    tel: "0287-69-0009", note: "", note_en: ""
  },
  {
    id: 53,
    name: "那須アウトバックツアーズ", name_en: "Nasu Outback Tours",
    category: "play", area: "north",
    description: "那須の自然を全身で楽しめるアウトドアツアー。シャワークライミングやスノーシュー体験など。",
    description_en: "Outdoor tours to fully enjoy Nasu's nature, including shower climbing and snowshoeing.",
    officialUrl: "https://nasu-outback.net/", mapQuery: "那須アウトバックツアーズ",
    driveTime: 40,
    hours: "ツアーにより異なる（要予約）", hours_en: "Depends on tour (booking required)",
    closed: "不定休", closed_en: "Irregular",
    parking: "ツアー集合場所に準じる", parking_en: "Depends on meeting point",
    price: "ツアー内容により異なる", price_en: "Varies by tour",
    tel: "080-5185-9800", note: "事前のツアー予約必須", note_en: "Advance tour booking required"
  },
  {
    id: 54,
    name: "KPSパラグライダースクール", name_en: "KPS Paraglider School",
    category: "play", area: "north",
    description: "那須高原の空を飛ぶパラグライダー体験。初心者でもインストラクターと一緒のタンデムフライトで安心。",
    description_en: "Experience paragliding in the sky of Nasu Plateau. Beginners can safely enjoy tandem flights with an instructor.",
    officialUrl: "https://www.kps-paraglider.jp/", mapQuery: "KPSパラグライダースクール 那須",
    driveTime: 45,
    hours: "9:00〜16:30（要予約）", hours_en: "9:00-16:30 (booking required)",
    closed: "不定休（天候による）", closed_en: "Irregular (subject to weather)",
    parking: "あり", parking_en: "Available",
    price: "タンデムフライトなど各種プランあり", price_en: "Various plans including tandem flights",
    tel: "0287-73-8260", note: "天候に大きく左右されるため確認必須", note_en: "Highly weather dependent"
  },
  {
    id: 55,
    name: "ライドエクスペリエンス", name_en: "Ride Experience",
    category: "play", area: "north",
    description: "那須の大自然を自転車で巡るガイド付きサイクリングツアーや、E-bike（電動アシスト自転車）のレンタル。",
    description_en: "Guided cycling tours through Nasu's extensive nature, and E-bike (electric assist bicycle) rentals.",
    officialUrl: "https://ride-experience.com/", mapQuery: "ライドエクスペリエンス 那須",
    driveTime: 25,
    hours: "ツアー・レンタルに準ずる", hours_en: "Depends on tour/rental",
    closed: "不定休", closed_en: "Irregular",
    parking: "あり", parking_en: "Available",
    price: "レンタル・ツアーによる", price_en: "Varies by rental/tour",
    tel: "0287-74-3102", note: "事前予約がおすすめ", note_en: "Advance booking recommended"
  },
  {
    id: 56,
    name: "那須科学歴史館", name_en: "Nasu Science and History Museum",
    category: "see", area: "north",
    description: "昭和初期の科学雑誌や蓄音機などの展示物で、日本の科学技術の発展と歴史を学べるユニークな資料館。",
    description_en: "Learn the history of Japan's scientific tech with exhibits like old science magazines and gramophones.",
    officialUrl: "https://tzwrd.co.jp/nsh/", mapQuery: "那須科学歴史館",
    driveTime: 30,
    hours: "土日のみ 10:00〜16:00 (平日予約可)", hours_en: "Weekends only 10:00-16:00",
    closed: "月曜〜金曜（平日は事前予約により対応可）", closed_en: "Weekdays (requires booking)",
    parking: "あり", parking_en: "Available",
    price: "大人500円（予定）", price_en: "Adults 500 yen",
    tel: "0287-76-2311", note: "開館日（土日）にご注意ください", note_en: "Please check business days (weekends)"
  },

  // =============================================
  // 塩原温泉方面（アクティビティ・観光施設追加）
  // =============================================
  {
    id: 57,
    name: "塩原渓谷もみじ谷SUPツアー", name_en: "Shiobara Valley Momijidani SUP Tour",
    category: "play", area: "west",
    description: "風光明媚な塩原渓谷・もみじ谷の大自然を水上から満喫できるSUP（スタンドアップパドル）体験。",
    description_en: "SUP (Stand Up Paddleboard) tour in the scenic Momijidani of Shiobara Valley. Enjoy nature from the water.",
    officialUrl: "https://www.mizudori-guide.com/lakesup-momiji", mapQuery: "もみじ谷大吊橋 SUP",
    driveTime: 35,
    hours: "ツアー開催時間に準ずる（要予約）", hours_en: "Depends on tour schedule (booking required)",
    closed: "不定休・冬季休業あり", closed_en: "Irregular / Closed in winter",
    parking: "集合場所に準ずる", parking_en: "Depends on meeting point",
    price: "ツアー料金に準じる", price_en: "Varies by tour plan",
    tel: "", note: "公式サイトより事前予約必須", note_en: "Advance booking is required via official website"
  },
  {
    id: 58,
    name: "木の葉化石園", name_en: "Konoha Fossil Museum",
    category: "see", area: "west",
    description: "数十万年前の植物の化石「木の葉石（このはいし）」を展示する珍しい私設の資料館。原石から化石を探し出す「化石さがし体験」が家族連れに大人気。",
    description_en: "A private museum exhibiting plant fossils from hundreds of thousands of years ago. Fossil hunting experience is highly popular.",
    officialUrl: "http://www.konohaisi.jp/", mapQuery: "木の葉化石園",
    driveTime: 40,
    hours: "9:00〜16:30（入園は16:00まで）", hours_en: "9:00-16:30",
    closed: "木曜休館・冬季は不定休あり", closed_en: "Thursdays / Irregular in winter",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人500円（体験料は別途）", price_en: "Adults 500 yen",
    tel: "0287-32-2052", note: "", note_en: ""
  },
  {
    id: 59,
    name: "箒川リバーSUP体験", name_en: "Houkigawa River SUP Experience",
    category: "play", area: "west",
    description: "塩原温泉を流れる箒川での爽快なリバーSUPツアー。水上から塩原渓谷の絶景を間近に楽しむことができます。",
    description_en: "Exhilarating River SUP tour on the Houki River in Shiobara Onsen. Enjoy Shiobara Valley views directly from the water.",
    officialUrl: "https://www.mizudori-guide.com/lakesup-houki", mapQuery: "塩原温泉 箒川 SUP",
    driveTime: 40,
    hours: "ツアー開催時間に準ずる（要予約）", hours_en: "Depends on tour schedule (booking required)",
    closed: "不定休・冬季休業あり", closed_en: "Irregular / Closed in winter",
    parking: "集合場所に準ずる", parking_en: "Depends on meeting point",
    price: "ツアー料金に準ずる", price_en: "Varies by tour plan",
    tel: "", note: "公式サイトより事前予約必須", note_en: "Advance booking is required via official website"
  },
  {
    id: 60,
    name: "那須塩原ウォーキングナビ", name_en: "Nasushiobara Walking Navigation",
    category: "walk", area: "west",
    description: "塩原の自然を満喫できる多彩なウォーキングコースやハイキングルートを紹介する総合ポータルサイト。温泉街散策などコース選びに役立ちます。",
    description_en: "A navigation site introducing various walking and hiking courses to fully enjoy the nature, onsen towns, and valleys of Shiobara.",
    officialUrl: "https://nasushiowalk.fun/", mapQuery: "塩原渓谷 行き方",
    driveTime: 40,
    hours: "散策自由", hours_en: "Always open",
    closed: "なし（コースによる）", closed_en: "None (varies by course)",
    parking: "各コース・ハイキングポイントに準ずる", parking_en: "Depends on hiking spots",
    price: "無料", price_en: "Free",
    tel: "", note: "ウォーキングの計画立てにおすすめ", note_en: "Great for planning walks/hikes"
  },
  {
    id: 61,
    name: "鍾乳洞の源三窟", name_en: "Genzankutsu Limestone Cave",
    category: "see", area: "west",
    description: "源頼朝に追われた源義経の家臣らが隠れ住んだと伝わる歴史的な鍾乳洞。洞窟内には当時の鎧や甲冑などが展示されています。",
    description_en: "A historical limestone cave related to Genji clan refugees hiding here. Features samurai armors and other historical exhibits inside.",
    officialUrl: "https://genzankutsu.com/", mapQuery: "源三窟 塩原",
    driveTime: 45,
    hours: "9:00〜16:00", hours_en: "9:00-16:00",
    closed: "水曜日（年末年始・冬季休業あり）", closed_en: "Wednesdays / Winter holidays",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人600円", price_en: "Adults 600 yen",
    tel: "0287-32-2338", note: "冬季休業や臨時休業は要確認", note_en: "Check for winter or temporary closures"
  },

  // =============================================
  // 那須高原方面（美術館・テーマパーク追加）
  // =============================================
  {
    id: 62,
    name: "那須クラシックカー博物館", name_en: "Nasu Classic Car Museum",
    category: "see", area: "north",
    description: "世界中から集められた希少なクラシックカーを展示。車好きからファミリーまで楽しめる屋内型の博物館です。",
    description_en: "An indoor museum exhibiting rare classic cars collected from around the world. Enjoyable for car enthusiasts and families.",
    officialUrl: "https://www.nccm.co.jp/", mapQuery: "那須クラシックカー博物館",
    driveTime: 25,
    hours: "9:00〜17:00（時期により変動あり）", hours_en: "9:00-17:00 (Varies by season)",
    closed: "無休", closed_en: "Open daily",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人1,000円", price_en: "Adults 1,000 yen",
    tel: "0287-62-6662", note: "屋内なので雨の日でも楽しめます", note_en: "Indoor facility, great for rainy days"
  },
  {
    id: 63,
    name: "那須フラワーワールド", name_en: "Nasu Flower World",
    category: "see", area: "north",
    description: "広大な敷地にチューリップやケイトウなど、季節ごとに色鮮やかな花々が咲き誇るフラワーパーク。那須連山を背景にした絶景が広がります。",
    description_en: "A vast flower park blooming with colorful seasonal flowers like tulips. Enjoy spectacular views against the Nasu mountains.",
    officialUrl: "http://www.flower-world.net/", mapQuery: "那須フラワーワールド",
    driveTime: 35,
    hours: "9:00〜17:00", hours_en: "9:00-17:00",
    closed: "冬季休業（11月中旬〜4月中旬頃）", closed_en: "Closed in winter (Mid Nov - Mid Apr)",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人500円〜（花の開花状況により変動）", price_en: "Adults 500 yen~ (Varies by bloom status)",
    tel: "0287-77-0400", note: "開花状況は公式サイトで要確認", note_en: "Check bloom status on official site"
  },
  {
    id: 64,
    name: "サンバレー美術館", name_en: "Sun Valley Art Museum",
    category: "see", area: "north",
    description: "ホテルサンバレー那須の敷地内にある美術館。世界各国の美しい陶磁器や絵画、彫刻など多彩なアート作品をゆったりと鑑賞できます。",
    description_en: "An art museum located within Hotel Sun Valley Nasu. Exhibits various artworks including beautiful ceramics, paintings, and sculptures.",
    officialUrl: "https://www.nasu3800.co.jp/artmuseum/", mapQuery: "サンバレー美術館",
    driveTime: 40,
    hours: "9:30〜17:00", hours_en: "9:30-17:00",
    closed: "不定休（ホテルの休館日などに準ずる）", closed_en: "Irregular (Follows hotel operations)",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人1,000円（宿泊者割引あり）", price_en: "Adults 1,000 yen (Discount for guests)",
    tel: "0287-76-3800", note: "ホテルサンバレー那須内にあります", note_en: "Inside Hotel Sun Valley Nasu"
  },
  {
    id: 65,
    name: "ダイアナガーデンエンジェル美術館", name_en: "Diana Garden Angel Museum",
    category: "see", area: "north",
    description: "四季折々の花が咲く英国風の庭園と、天使をモチーフにした絵画やアンティークを楽しむことができる小さな美術館。ティータイムも。",
    description_en: "A small museum featuring an English garden and antique artworks interpreting angels. Enjoy an elegant tea time.",
    officialUrl: "https://diana-garden.com/", mapQuery: "ダイアナガーデンエンジェル美術館",
    driveTime: 30,
    hours: "10:00〜17:00（最終入館16:30）", hours_en: "10:00-17:00",
    closed: "火・水曜日（祝日は開館）、冬季休業あり", closed_en: "Tue & Wed / Closed in winter",
    parking: "あり（無料）", parking_en: "Available (free)",
    price: "大人800円", price_en: "Adults 800 yen",
    tel: "0287-76-1520", note: "素敵なカフェも併設しています", note_en: "Features a lovely cafe"
  },

  // =============================================
  // 那須高原方面（アクティビティ・レジャー追加2）
  // =============================================
  {
    id: 66,
    name: "那須昆虫ワールド", name_en: "Nasu Insect World",
    category: "see", area: "north",
    description: "世界中の様々な珍しい昆虫の生体展示や標本が充実した施設。カブトムシやクワガタとのふれあい体験などが楽しめます。",
    description_en: "A facility to view live and preserved rare insects from around the world. Interacting with beetles is highly popular.",
    officialUrl: "https://www.nasukon.com/", mapQuery: "那須昆虫ワールド",
    driveTime: 25,
    hours: "10:00〜17:00（時期により変動あり）", hours_en: "10:00-17:00 (Varies by season)",
    closed: "不定休（公式サイト参照）", closed_en: "Irregular (check official site)",
    parking: "あり", parking_en: "Available",
    price: "大人800円", price_en: "Adults 800 yen",
    tel: "0287-74-3253", note: "昆虫好きのお子様に大人気", note_en: "Highly popular with insect-loving kids"
  },
  {
    id: 67,
    name: "那須バギーパーク", name_en: "Nasu Buggy Park",
    category: "play", area: "north",
    description: "大自然の専用コース内で本格的なオフロードバギーの運転が楽しめる施設。インストラクターが指導するので初心者でも安心です。",
    description_en: "Enjoy driving off-road buggies on dedicated nature courses. Instructors guide you, so beginners can ride safely.",
    officialUrl: "https://www.buggy-park.com/", mapQuery: "那須バギーパーク",
    driveTime: 30,
    hours: "10:00〜17:00（最終受付16:30）", hours_en: "10:00-17:00",
    closed: "不定休・冬季休業あり", closed_en: "Irregular / Closed in winter",
    parking: "あり", parking_en: "Available",
    price: "体験コースにより異なる", price_en: "Varies by chosen course",
    tel: "0287-73-8304", note: "動きやすい服装・靴でお越しください", note_en: "Wear comfortable activewear and shoes"
  },
  {
    id: 68,
    name: "那須の森空中アスレチック NOZARU", name_en: "Nasu Forest Aerial Athletics NOZARU",
    category: "play", area: "north",
    description: "那須の森と地形をそのまま活かした、日本最大級の空中アスレチックパーク。樹上のコースは子供から大人までスリル満点！",
    description_en: "Japan's largest aerial athletic park utilizing Nasu's natural forests. Thrilling treetop courses for kids and adults!",
    officialUrl: "https://nozaru.net/", mapQuery: "NOZARU 那須",
    driveTime: 25,
    hours: "9:00〜17:00（時期により変動）", hours_en: "9:00-17:00 (Varies by season)",
    closed: "不定休", closed_en: "Irregular",
    parking: "あり", parking_en: "Available",
    price: "大人4,600円（要予約）", price_en: "Adults 4,600 yen (Booking required)",
    tel: "0287-78-2900", note: "原則として事前予約が必要です", note_en: "Advance booking is required"
  },
  {
    id: 69,
    name: "ジャイロライドパーク", name_en: "Gyro Ride Park",
    category: "play", area: "north",
    description: "体重移動で進むパーソナルモビリティに乗って、広大な大自然や森のオフロードコースを滑走できる新感覚パーク。",
    description_en: "Glide through off-road forest courses on self-balancing personal mobility vehicles. A true new sensation park.",
    officialUrl: "https://lbcg.net/grp/", mapQuery: "ジャイロライドパーク 那須",
    driveTime: 35,
    hours: "10:00〜17:00（要予約）", hours_en: "10:00-17:00 (Reservation only)",
    closed: "不定休", closed_en: "Irregular",
    parking: "あり", parking_en: "Available",
    price: "体験時間・コースにより異なる", price_en: "Varies by course",
    tel: "0287-74-2992", note: "完全予約制", note_en: "Reservation only system"
  },
  {
    id: 70,
    name: "滝のある釣り堀 那須高原清流の里", name_en: "Nasu Kogen Seiryu no Sato",
    category: "play", area: "north",
    description: "美しい滝を背景に、透明な湧き水で育ったイワナやニジマス釣りが楽しめるスポット。釣った魚はその場で炭火焼きにして味わえます。",
    description_en: "A fishing pond where you can catch char and trout against a beautiful waterfall backdrop, and eat them grilled on the spot.",
    officialUrl: "http://www.seiryunosato.com/", mapQuery: "清流の里 釣り堀",
    driveTime: 25,
    hours: "9:00〜16:00（時期により変動・食事は11時〜）", hours_en: "9:00-16:00 (Varies by season)",
    closed: "木曜（季節により無休営業）", closed_en: "Thursdays (Open daily in some seasons)",
    parking: "あり", parking_en: "Available",
    price: "釣り竿代・魚代・加工代など", price_en: "Fees for rod, fish, and grilling",
    tel: "0287-78-0337", note: "お食事処としての利用（蕎麦など）も人気です", note_en: "Also popular for dining (soba noodles)"
  },

  // =============================================
  // 那須高原方面（グルメ情報ポータル追加）
  // =============================================
  {
    id: 71,
    name: "那須町観光ガイド 食べる（グルメ検索）", name_en: "Nasu Town Tourism Guide (Dining Info)",
    category: "eat", area: "north",
    description: "那須町観光協会が運営する飲食店の総合検索ページ。カフェ、レストラン、和食、パン屋からスイーツまで、那須高原の多彩なグルメ情報を探すことができます。",
    description_en: "A comprehensive restaurant search page by the Nasu Town Tourism Association. Find diverse gourmet info from cafes to local restaurants.",
    officialUrl: "https://www.nasukogen.org/spotsearch/spot.php?cate=D", mapQuery: "那須町観光協会",
    driveTime: 25,
    hours: "各店舗に準ずる", hours_en: "Depends on shop",
    closed: "各店舗に準ずる", closed_en: "Depends on shop",
    parking: "各店舗に準ずる", parking_en: "Depends on shop",
    price: "各店舗に準ずる", price_en: "Depends on shop",
    tel: "0287-76-2619", note: "那須高原エリアの飲食店探しに大変便利です", note_en: "Convenient for finding restaurants in Nasu"
  },

  // =============================================
  // 塩原温泉方面（アクティビティ総合案内追加）
  // =============================================
  {
    id: 72,
    name: "塩原のアクティビティ", name_en: "Shiobara Activities",
    category: "play", area: "west",
    description: "塩原温泉と周辺の観光・アクティビティ施設をご案内。自然に親しみ、歴史と文学に触れる、子供から大人まで楽しめるスポットを紹介しています。",
    description_en: "Guidance to sightseeing and activity facilities around Shiobara Onsen. Introduces spots to enjoy nature, history, and literature for all ages.",
    officialUrl: "https://www.siobara.or.jp/activity/", mapQuery: "塩原温泉 アクティビティ",
    driveTime: 40,
    hours: "各施設に準ずる", hours_en: "Depends on facility",
    closed: "各施設に準ずる", closed_en: "Depends on facility",
    parking: "各施設に準ずる", parking_en: "Depends on facility",
    price: "各施設に準ずる", price_en: "Depends on facility",
    tel: "0287-32-4000", note: "塩原温泉観光協会の案内ページ", note_en: "Shiobara Tourism Association guide page"
  },

  // =============================================
  // 塩原温泉方面（グルメ・お土産総合案内追加）
  // =============================================
  {
    id: 74,
    name: "塩原で食べる・買う（飲食と御土産）", name_en: "Dining and Shopping in Shiobara",
    category: "eat", area: "west",
    description: "塩原の飲食店と御土産店を一覧でご紹介。観光に、温泉に、塩原を訪れたらぷらりと巡って美味しいお食事とお買い物をお楽しみください。",
    description_en: "A comprehensive list of dining and souvenir shops in Shiobara. Enjoy delicious meals and shopping while visiting for sightseeing or hot springs.",
    officialUrl: "https://www.siobara.or.jp/gourmet/", mapQuery: "塩原温泉 グルメ",
    driveTime: 40,
    hours: "各店舗に準ずる", hours_en: "Depends on shop",
    closed: "各店舗に準ずる", closed_en: "Depends on shop",
    parking: "各店舗に準ずる", parking_en: "Depends on shop",
    price: "各店舗に準ずる", price_en: "Depends on shop",
    tel: "0287-32-4000", note: "塩原温泉観光協会の案内ページ", note_en: "Shiobara Tourism Association guide page"
  }

];
