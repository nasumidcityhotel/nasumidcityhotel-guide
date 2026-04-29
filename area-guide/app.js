/**
 * ============================================================
 *  那須ミッドシティホテル 観光案内 — アプリロジック
 *  app.js
 *  ※ このファイルは通常編集不要です。
 *    施設データの追加・変更は data.js で行ってください。
 * ============================================================
 */

// =============================================
// 定数・設定
// =============================================
const CATEGORY_CONFIG = {
  ja: {
    all:   { label: "すべて",              icon: "🗺️" },
    play:  { label: "遊ぶ（レジャー・体験）", icon: "🎢" },
    see:   { label: "見る（絶景・アート・歴史）", icon: "🎨" },
    walk:  { label: "歩く（自然散策・ハイキング）", icon: "🥾" },
    eat:   { label: "食べる（グルメ・パン・カフェ）", icon: "🍽️" },
    relax: { label: "癒やす（温泉・リラックス）", icon: "♨️" },
    buy:   { label: "買う（お土産・直売所）", icon: "🛍️" }
  },
  en: {
    all:   { label: "All",              icon: "🗺️" },
    play:  { label: "Play (Leisure & Experiences)", icon: "🎢" },
    see:   { label: "See (Scenery, Art & History)", icon: "🎨" },
    walk:  { label: "Walk (Nature & Hiking)", icon: "🥾" },
    eat:   { label: "Eat (Cuisine, Bread & Cafes)", icon: "🍽️" },
    relax: { label: "Relax (Hot Springs & Wellness)", icon: "♨️" },
    buy:   { label: "Buy (Souvenirs & Markets)", icon: "🛍️" }
  }
};

const AREA_CONFIG = {
  ja: {
    all:   { label: "すべてのエリア",      short: "全エリア" },
    north: { label: "北：那須高原方面",   short: "北｜那須高原" },
    west:  { label: "西：塩原温泉方面",  short: "西｜塩原温泉" },
    south: { label: "南：大田原方面",     short: "南｜大田原" }
  },
  en: {
    all:   { label: "All Areas",      short: "All Areas" },
    north: { label: "North: Nasu Plateau Area",   short: "North | Nasu Plateau" },
    west:  { label: "West: Shiobara Onsen Area",  short: "West | Shiobara Onsen" },
    south: { label: "South: Otawara Area",     short: "South | Otawara" }
  }
};

// =============================================
// 翻訳データ
// =============================================
const TRANSLATIONS = {
  title: {
    ja: "那須ミッドシティホテル｜那須地域観光ガイド",
    en: "Nasu Midcity Hotel | Nasu Region Tourism Guide"
  },
  subtitle: {
    ja: "那須ミッドシティホテルを「那須地域のハブホテル」として使いやすくするため、那須高原方面・塩原温泉方面・大田原方面に分けて、信頼できる公式情報を中心に施設を探せる観光案内ページです。",
    en: "To make Nasu Midcity Hotel a convenient 'hub hotel' for the Nasu region, this tourism guide page allows you to search for facilities divided into Nasu Plateau, Shiobara Onsen, and Otawara areas, focusing on reliable official information."
  },
  note: {
    ja: "公式サイト優先 → 自治体公式 → 観光協会公式",
    en: "Priority: Official Sites → Municipal Official → Tourism Association Official"
  },
  searchPlaceholder: {
    ja: "施設名・説明・ジャンルで検索",
    en: "Search by facility name, description, or category"
  },
  officialOnlyText: {
    ja: "信頼できる公式情報のみ掲載中",
    en: "Only displaying reliable official information"
  },
  editNote: {
    ja: "データはこのファイル内で編集できます",
    en: "Data can be edited within this file"
  },
  filterByArea: {
    ja: "方面で絞り込む",
    en: "Filter by Area"
  },
  facilitiesList: {
    ja: "施設一覧",
    en: "Facilities List"
  },
  footerText: {
    ja: "情報源は「施設公式サイト」「自治体公式サイト」「観光協会公式サイト」を優先して整理しています。<br>営業時間・休館日・料金は変動するため、最終確認は各施設の公式ページをご確認ください。",
    en: "Information sources prioritize 'facility official sites', 'municipal official sites', and 'tourism association official sites'. Business hours, closing days, and fees may change, so please confirm the latest information on each facility's official page."
  },
  resultsCount: {
    ja: "全",
    en: "Total"
  },
  noResults: {
    ja: "該当する施設が見つかりません",
    en: "No matching facilities found"
  },
  officialSite: {
    ja: "公式サイト",
    en: "Official Site"
  },
  noOfficialSite: {
    ja: "公式サイト未登録",
    en: "Official site not registered"
  },
  googleMap: {
    ja: "Googleマップ",
    en: "Google Maps"
  },
  viewDetails: {
    ja: "詳細を見る",
    en: "View Details"
  },
  checkLatest: {
    ja: "公式サイトで最新情報を確認する",
    en: "Check latest information on official site"
  },
  close: {
    ja: "閉じる",
    en: "Close"
  },
  
  // UI texts
  hotelName: { ja: "那須ミッドシティホテル", en: "Nasu Midcity Hotel" },
  guideLabel: { ja: "地域観光ガイド", en: "Regional Tourism Guide" },
  
  catAll: { ja: "すべて", en: "All" },
  catPlay: { ja: "遊ぶ", en: "Play" },
  catPlaySub: { ja: "レジャー・体験", en: "Leisure & Exp" },
  catSee: { ja: "見る", en: "See" },
  catSeeSub: { ja: "絶景・アート", en: "Sights & Art" },
  catWalk: { ja: "歩く", en: "Walk" },
  catWalkSub: { ja: "自然・散策", en: "Nature & Hike" },
  catEat: { ja: "食べる", en: "Eat" },
  catEatSub: { ja: "グルメ・カフェ", en: "Food & Cafe" },
  catRelax: { ja: "癒やす", en: "Relax" },
  catRelaxSub: { ja: "温泉・リラックス", en: "Onsen & Relax" },
  catBuy: { ja: "買う", en: "Buy" },
  catBuySub: { ja: "お土産・直売所", en: "Souvenirs" },
  
  areaAll: { ja: "全エリア", en: "All Areas" },
  areaNorth: { ja: "北｜那須高原方面", en: "North | Nasu Plateau" },
  areaWest: { ja: "西｜塩原温泉方面", en: "West | Shiobara Onsen" },
  areaSouth: { ja: "南｜大田原方面", en: "South | Otawara" },
  
  modalHours: { ja: "営業時間", en: "Hours" },
  modalClosed: { ja: "定休日", en: "Closed" },
  modalParking: { ja: "駐車場", en: "Parking" },
  modalPrice: { ja: "料金目安", en: "Price" },
  modalTel: { ja: "電話番号", en: "Tel" },
  modalDrive: { ja: "ホテルから（車）", en: "From Hotel (Car)" },
  navMap: { ja: "📍 Googleマップでナビを起動する", en: "📍 Open navigation on Google Maps" },
  
  // Access section
  accessTitle: { ja: "お車を利用されない方へ", en: "For Non-Car Users" },
  accessSub: { ja: "那須塩原駅（西口）からのアクセス", en: "Access from Nasushiobara Station (West Exit)" },
  taxiTitle: { ja: "タクシーのご案内", en: "Taxi Information" },
  taxiWait: { ja: "那須塩原駅西口のタクシー乗り場は徒歩1〜2分の場所にあり、常時、数台のタクシーが待機しており、観光案内も対応します。", en: "The taxi stand at Nasushiobara Station West Exit is a 1-2 minute walk away, with several taxis usually waiting and providing sightseeing guidance." },
  kuroisoTaxi: { ja: "黒磯観光タクシー株式会社", en: "Kuroiso Kanko Taxi" },
  kuroisoTaxiDesc: { ja: "", en: "" },
  shiobaraTaxi: { ja: "ファーストタクシーグループ（塩原自動車）", en: "First Taxi Group (Shiobara Jidousha)" },
  shiobaraTaxiDesc: { ja: "", en: "" },
  fujiTaxi: { ja: "富士交通", en: "Fuji Kotsu" },
  fujiTaxiDesc: { ja: "", en: "" },
  rentalCarTitle: { ja: "レンタカーのご案内", en: "Rental Car Information" },
  rentalCarNote: { ja: "那須塩原駅西口すぐのレンタカー各社", en: "Rental car companies near Nasushiobara Sta. West Exit" },
  nasuKogenRentacar: { ja: "那須高原レンタカー", en: "Nasu Kogen Rent-a-car" }
};

// =============================================
// 状態管理
// =============================================
let currentLang = navigator.language.startsWith('ja') ? 'ja' : 'en';
let currentCat  = "all";
let currentArea = "all";
let officialOnly = false;

// =============================================
// DOM 取得
// =============================================
const spotsGrid     = document.getElementById("spots-grid");
const noResults     = document.getElementById("no-results");
const resultsCount  = document.getElementById("results-count");
const modalOverlay  = document.getElementById("modal-overlay");
const modalContent  = document.getElementById("modal-content");
const modalClose    = document.getElementById("modal-close");
const catBtns       = document.querySelectorAll(".cat-btn");
const areaBtns      = document.querySelectorAll(".area-btn");
const officialToggle = document.getElementById("official-only-toggle");
const langJaBtn     = document.getElementById("lang-ja");
const langEnBtn     = document.getElementById("lang-en");

// =============================================
// 言語切り替え関数
// =============================================
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  
  // ボタンのアクティブ状態
  langJaBtn.classList.toggle('active', lang === 'ja');
  langEnBtn.classList.toggle('active', lang === 'en');
  
  // 翻訳適用
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
      el.textContent = TRANSLATIONS[key][lang];
    }
  });
  
  // プレースホルダー
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.placeholder = TRANSLATIONS.searchPlaceholder[lang];
  
  // 固定テキスト
  const officialOnlyText = document.getElementById("officialOnlyText");
  if (officialOnlyText) officialOnlyText.textContent = TRANSLATIONS.officialOnlyText[lang];
  
  const filterAreaLabel = document.getElementById("filterAreaLabel");
  if (filterAreaLabel) filterAreaLabel.textContent = TRANSLATIONS.filterByArea[lang];
  
  const sectionTitle = document.getElementById("sectionTitle");
  if (sectionTitle) sectionTitle.textContent = TRANSLATIONS.facilitiesList[lang];
  
  const footerText = document.getElementById("footerText");
  if (footerText) footerText.textContent = TRANSLATIONS.footerText[lang];
  
  // 再レンダリング
  renderSpots();
}

// =============================================
// フィルタリング
// =============================================
function getFilteredSpots() {
  return spotsData.filter(spot => {
    const catMatch  = currentCat  === "all" || spot.category === currentCat;
    const areaMatch = currentArea === "all" || spot.area     === currentArea;
    const officialMatch = !officialOnly || (spot.officialUrl && spot.officialUrl !== "");
    return catMatch && areaMatch && officialMatch;
  });
}

// =============================================
// レンダリング：スポット一覧
// =============================================
// エリア表示順序：那須高原方面 → 塩原温泉方面 → 大田原方面
const AREA_ORDER = { north: 0, west: 1, south: 2 };

function renderSpots() {
  const filtered = getFilteredSpots();

  // エリア順にソート（同一エリア内はデータ定義順を維持）
  filtered.sort((a, b) => {
    const orderA = AREA_ORDER[a.area] ?? 99;
    const orderB = AREA_ORDER[b.area] ?? 99;
    return orderA - orderB;
  });

  spotsGrid.innerHTML = "";

  // 件数更新
  resultsCount.innerHTML = `${TRANSLATIONS.resultsCount[currentLang]} <strong>${filtered.length}</strong> 件`;

  if (filtered.length === 0) {
    noResults.style.display = "block";
    noResults.textContent = TRANSLATIONS.noResults[currentLang];
    return;
  }
  noResults.style.display = "none";

  filtered.forEach(spot => {
    const card = buildCard(spot);
    spotsGrid.appendChild(card);
  });
}

// =============================================
// カード生成
// =============================================
function buildCard(spot) {
  const cat  = CATEGORY_CONFIG[currentLang][spot.category] || { label: spot.category, icon: "📍" };
  const area = AREA_CONFIG[currentLang][spot.area] || { label: spot.area };

  const card = document.createElement("div");
  card.className = `spot-card ${spot.area}`;
  card.dataset.id = spot.id;

  // Googleマップ URL
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapQuery)}`;

  // 公式サイトボタン（URLあり/なし で切り替え）
  const officialBtnHtml = spot.officialUrl
    ? `<a class="btn btn-official" href="${spot.officialUrl}">🌐 ${TRANSLATIONS.officialSite[currentLang]}</a>`
    : `<span class="btn btn-no-official" title="${TRANSLATIONS.noOfficialSite[currentLang]}">🌐 ${TRANSLATIONS.noOfficialSite[currentLang]}</span>`;

  card.innerHTML = `
    <div class="card-area-line"></div>
    <div class="card-body">
      <div class="card-top">
        <h3 class="card-name">${escHtml(currentLang === 'en' ? spot.name_en || spot.name : spot.name)}</h3>
        <div class="card-badges">
          <span class="badge badge-cat">${cat.icon} ${cat.label}</span>
          <span class="badge badge-area ${spot.area}">${area.short}</span>
        </div>
      </div>
      <p class="card-desc">${escHtml(currentLang === 'en' ? spot.description_en || spot.description : spot.description)}</p>
      <div class="card-meta">
        <span class="meta-item">🚗 ${currentLang === 'en' ? `About ${spot.driveTime} min` : `約${spot.driveTime}分`}</span>
        ${spot.hours ? `<span class="meta-item">🕐 ${escHtml(currentLang === 'en' && spot.hours_en ? spot.hours_en : spot.hours)}</span>` : ""}
        ${spot.price ? `<span class="meta-item">💴 ${escHtml(currentLang === 'en' && spot.price_en ? spot.price_en : spot.price)}</span>` : ""}
      </div>
    </div>
    <div class="card-actions">
      <a class="btn btn-map" href="${mapUrl}">📍 ${TRANSLATIONS.googleMap[currentLang]}</a>
      ${officialBtnHtml}
      <button class="btn btn-detail" data-id="${spot.id}">📋 ${TRANSLATIONS.viewDetails[currentLang]}</button>
    </div>
  `;

  // 詳細ボタンのクリックイベント
  card.querySelector(".btn-detail").addEventListener("click", (e) => {
    e.stopPropagation();
    openModal(spot.id);
  });

  return card;
}

// =============================================
// モーダル：施設詳細
// =============================================
function openModal(id) {
  const spot = spotsData.find(s => s.id === id);
  if (!spot) return;

  const cat  = CATEGORY_CONFIG[currentLang][spot.category] || { label: spot.category, icon: "📍" };
  const area = AREA_CONFIG[currentLang][spot.area] || { label: spot.area };
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapQuery)}`;

  // 公式サイトボタン
  const officialSection = spot.officialUrl
    ? `<a class="btn btn-official" href="${spot.officialUrl}">
         🌐 ${TRANSLATIONS.checkLatest[currentLang]}
       </a>`
    : `<div style="font-size:0.8rem;color:#aaa;text-align:center;padding:10px;">
         ※ ${TRANSLATIONS.noOfficialSite[currentLang]}
       </div>`;

  // 備考表示
  const noteSection = spot.note
    ? `<p style="font-size:0.8rem;color:#888;margin-top:12px;padding:10px;background:#fffde7;border-radius:6px;border-left:3px solid #f9a825;">
         💡 ${escHtml(currentLang === 'en' && spot.note_en ? spot.note_en : spot.note)}
       </p>`
    : "";

  modalContent.innerHTML = `
    <div class="modal-header">
      <h2 class="modal-name">${escHtml(currentLang === 'en' ? spot.name_en || spot.name : spot.name)}</h2>
      <div class="modal-badges">
        <span class="badge badge-cat">${cat.icon} ${cat.label}</span>
        <span class="badge badge-area ${spot.area}">${area.label}</span>
      </div>
    </div>

    <p class="modal-desc">${escHtml(currentLang === 'en' ? spot.description_en || spot.description : spot.description)}</p>

    <div class="modal-info-grid">
      <div class="info-block">
        <span class="info-label">🚗 ${TRANSLATIONS.modalDrive[currentLang]}</span>
        <span class="info-val">${currentLang === 'en' ? `About ${spot.driveTime} min` : `約${spot.driveTime}分`}</span>
      </div>
      <div class="info-block">
        <span class="info-label">🕐 ${TRANSLATIONS.modalHours[currentLang]}</span>
        <span class="info-val">${escHtml(currentLang === 'en' && spot.hours_en ? spot.hours_en : spot.hours || "—")}</span>
      </div>
      <div class="info-block">
        <span class="info-label">📅 ${TRANSLATIONS.modalClosed[currentLang]}</span>
        <span class="info-val">${escHtml(currentLang === 'en' && spot.closed_en ? spot.closed_en : spot.closed || "—")}</span>
      </div>
      <div class="info-block">
        <span class="info-label">🅿️ ${TRANSLATIONS.modalParking[currentLang]}</span>
        <span class="info-val">${escHtml(currentLang === 'en' && spot.parking_en ? spot.parking_en : spot.parking || "—")}</span>
      </div>
      <div class="info-block">
        <span class="info-label">💴 ${TRANSLATIONS.modalPrice[currentLang]}</span>
        <span class="info-val">${escHtml(currentLang === 'en' && spot.price_en ? spot.price_en : spot.price || "—")}</span>
      </div>
      <div class="info-block">
        <span class="info-label">📞 ${TRANSLATIONS.modalTel[currentLang]}</span>
        <span class="info-val">${spot.tel
          ? `<a href="tel:${escHtml(spot.tel)}" style="color:var(--primary);text-decoration:none;">${escHtml(spot.tel)}</a>`
          : "—"}</span>
      </div>
    </div>

    ${noteSection}

    <div class="modal-actions">
      <a class="btn btn-map" href="${mapUrl}">
        ${TRANSLATIONS.navMap[currentLang]}
      </a>
      ${officialSection}
    </div>
  `;

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
  
  // 閉じるボタンのテキスト設定
  const closeBtn = document.getElementById("modal-close");
  if (closeBtn) closeBtn.textContent = TRANSLATIONS.close[currentLang];
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

// =============================================
// XSS対策：HTML エスケープ
// =============================================
function escHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// =============================================
// イベントリスナー設定
// =============================================
function initEvents() {
  // カテゴリボタン
  catBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      catBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCat = btn.dataset.cat;
      renderSpots();
    });
  });

  // エリアボタン
  areaBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      areaBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentArea = btn.dataset.area;
      renderSpots();
    });
  });

  // モーダルを閉じる（閉じるボタン）
  modalClose.addEventListener("click", closeModal);

  // モーダルを閉じる（オーバーレイクリック）
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Escキーでモーダルを閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // 言語切り替えボタン
  langJaBtn.addEventListener("click", () => setLanguage('ja'));
  langEnBtn.addEventListener("click", () => setLanguage('en'));

  // 公式サイトのみ表示トグル
  officialToggle.addEventListener("change", () => {
    officialOnly = officialToggle.checked;
    renderSpots();
  });
}

// =============================================
// 初期化
// =============================================
function init() {
  setLanguage(currentLang);
  initEvents();
  renderSpots();
  console.log(
    "%c那須ミッドシティホテル 観光案内システム\n%c施設データは data.js で編集できます。",
    "color:#1a6b3c;font-size:14px;font-weight:bold;",
    "color:#666;font-size:11px;"
  );
}

// DOMが読み込まれたら初期化
document.addEventListener("DOMContentLoaded", init);