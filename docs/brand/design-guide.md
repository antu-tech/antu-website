# 安圖教育 — Brand Design Guide

> Version 2.0 · 2024
> 定位：科技公司 × 醫學精英社群 × 高端知識交換平台
> 美學：GHM luxury dark aesthetic — deep navy, warm gold, glass surfaces

---

## 一、色彩系統 Color System

### Brand Palette

| 角色 | 色名 | HEX | CSS Variable | 用途 |
|---|---|---|---|---|
| 背景 | Deep Navy | `#060E18` | `--color-bg` | 主背景色，建立高端深邃感 |
| 背景 (Alt) | Darker Navy | `#091524` | `--color-bg-alt` | 交替段落、表單背板 |
| 強調 (Accent)| Deep Gold | `#C9A55A` | `--color-accent` | 品牌核心色、標題高亮、捲動進度條 |
| 強調 (Dark) | Muted Gold | `#A88340` | `--color-accent-dark` | Hover 狀態、層次過渡 |
| 主要 (Link) | Steel Blue | `#5BA8CC` | `--color-primary` | 傳統科技信賴感，僅用於連結 |
| 第三色 (Minimal)| Teal | `#3EC9DC` | `--color-tertiary` | 極簡互動元素、導覽按鈕 |
| 主文字 | Sky Blue Tint | `#A8C0D6` | `--color-text` | 內文正文，減輕對比造成的視覺壓力 |
| 標題文字 | Warm White | `#F0EAD8` | `--color-text-head` | 標題文字，溫潤高雅 |
| 玻璃材質 | Glass Surface | `rgba(6,14,24,0.72)` | `--color-glass` | 導覽列與卡片背板，模糊質感 |

### 狀態色 Status Colors

| 用途 | HEX | CSS Variable |
|---|---|---|
| 成功 / 通過 | `#34D399` | `--status-success` |
| 警告 / 注意 | `#FBBF24` | `--status-warning` |
| 核心錯誤 / 危険 | `#F87171` | `--status-danger` |

### CSS Variables 完整映射

```css
:root {
  --color-bg:             #060E18;
  --color-bg-alt:         #091524;
  --color-accent:         #C9A55A;
  --color-primary:        #5BA8CC;
  --color-tertiary:       #3EC9DC;
  --color-text:           #A8C0D6;
  --color-text-head:      #F0EAD8;
  --color-muted:          #546E85;

  --status-success:       #34D399;
  --status-warning:       #FBBF24;
  --status-danger:        #F87171;
}
```

### 心理學依據

- **Deep Navy & Gold** 經典奢華配色，傳遞「精英、隱密、高價值」的品牌印象
- **Glassmorphism** 毛玻璃質感層次，增加介面深度與數位科技感
- **Warm White (F0EAD8)** 取代純白，降低在黑底上的溢光感，增加閱讀高級感
- **Steel Blue** 保留傳統醫學/科技界的沈穩感，作為導向標籤與特定連結用途

---

## 二、字體系統 Typography System

### 雙字體策略：「標題展現地位，內文展現效率」

#### 2.1 標題字體 — 展現權威與精英感

| 字體 | 類型 | CSS Variable | 用途 |
|---|---|---|---|
| **Playfair Display** | 英文 Serif | `--font-heading` | H1、H2、週報標題、品牌主視覺 |
| **Noto Serif TC** | 中文 Serif（思源宋體） | `--font-heading` fallback | 中文標題、創辦人理念、法律條款 |

**用途說明：**
- 官網大標題（H1）：建立類似頂尖大學證書的信賴感
- 家長週報 PDF 標題：強化「專業報告」質感，區別於一般手機訊息
- 「創辦人理念」段落：宋體帶來法律文件般的嚴肅感，提升公司可信度
- 公司 Logo（建議）：Playfair Display 字標

#### 2.2 內文與系統字體 — 展現科技與精準度

| 字體 | 類型 | CSS Variable | 用途 |
|---|---|---|---|
| **Inter** | 英文 Sans-serif | `--font-base` | 所有正文、按鈕、表單、後台介面 |
| **Noto Sans TC** | 中文 Sans-serif（思源黑體） | `--font-base` fallback | 中文正文、系統 UI、數據列表 |

**用途說明：**
- Canvas LMS 介面覆蓋：Inter 在小字與數據展示上極其精準
- 按鈕文字：Inter 600（Semi-bold）最具科技感俐落度
- 後台數據報表：Inter Tabular Numbers 確保數字對齊

#### 2.3 字重規範 Font Weight

| 場景 | 字重 | 說明 |
|---|---|---|
| 主標題 H1 | 700 Bold | 最大視覺衝擊力 |
| 副標題 H2 | 700 Bold | 區段錨點 |
| 卡片標題 H3 | 700 Bold | 清單掃視點 |
| 按鈕文字 | 600 Semi-bold | 行動號召（CTA）清晰度 |
| 正文 | 400 Regular | 長文閱讀舒適度 |
| 說明文字 | 400 Regular | 使用 `--color-muted` 弱化 |
| 標籤 / Badge | 600 Semi-bold | 小字仍保持可讀性 |

#### 2.4 字級階層 Type Scale

| 元素 | 桌機 | 手機 | 備註 |
|---|---|---|---|
| H1 Hero Headline | 2.25rem (36px) | 1.875rem (30px) | `line-height: 1.2`, `letter-spacing: .02em` |
| H2 Section Title | 1.875rem (30px) | 1.75rem (28px) | `line-height: 1.25` |
| H3 Card Title | 1.125rem (18px) | 1.125rem (18px) | `font-weight: 700` |
| Body | 1rem (16px) | 1rem (16px) | `line-height: 1.75` |
| Caption / Badge | 0.8125rem (13px) | 0.8125rem (13px) | `letter-spacing: .12em`, `text-transform: uppercase` |

#### 2.5 CSS 實作

```css
:root {
  --font-heading: 'Playfair Display', 'Noto Serif TC', serif;
  --font-base:    'Inter', 'Noto Sans TC', sans-serif;
  --font-serif:   'Playfair Display', 'Noto Serif TC', serif; /* 創辦人理念、法律條款 */
}
```

Google Fonts import（完整版）：
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@400;700&display=swap');
```

---

## 三、UI 元件規範 Component Guidelines

### 3.1 按鈕 Buttons

| 類型 | 用途 | 樣式 |
|---|---|---|
| `.btn-primary` | 數位互動 (Teal) | Teal (#3EC9DC) 填色，深底黑字，俐落直角 |
| `.btn-gold` | VIP / 核心 CTA (Gold) | Gold (#C9A55A) 填色，白字，發光陰影 |
| `.btn-outline` | 次要動作 | 淺白描邊，透明底，深邃玻璃感 |
| `.btn-outline--white` | 顯著次要動作 | 白色描邊，Hover 時帶微量背景色 |

### 3.2 標章 Badges

| 類型 | CSS Class | 用途 |
|---|---|---|
| 認證標章 | `.badge-gold` | Gold 背景 + 25% 邊框，「已驗證台大醫學系」 |
| 狀態標籤 | `.card__badge` | 文字 Gold 強調，建立視覺層次 |

### 3.3 圓角與陰影

- **圓角 (`--radius`)**: `0` — 採用傳統包浩斯式的銳利邊緣，強調精密、嚴謹與現代感。
- **陰影 (`--shadow-glow`)**: `0 0 32px rgba(201, 165, 90, 0.2)` — 賦予金邊元素微弱的發光質感，營造奢侈感。

### 3.4 「保護傘」視覺建議

**老師端 Dashboard（未來實作）：**
- 導覽列使用 `--color-bg` (Deep Navy) & `--color-glass`
- 右上角顯示 `.badge-gold`（Gold 盾牌圖示）：「身分已加密 · 受平台保護」
- 強化「安圖是你的法律盾牌」心理暗示

**家長週報 PDF / Dashboard：**
- 大量使用金色 (`--color-accent`) 與暖白色 (`--color-text-head`)
- 在深色背景上顯示高對比圖表，傳遞「專業、珍稀、高科技」的感受

---

## 四、寫作語氣 Brand Voice

| 場景 | 語氣 | 範例 |
|---|---|---|
| 官網標題 | 直白、有力、解決問題 | 「找台大醫學系家教，從此不再靠運氣」 |
| 創辦人理念 | 理性、使命感、訴諸長期信任 | 參見 index.html 創辦人理念段落 |
| 功能說明 | 精準、資訊密度高 | 「台大學生信箱 + 學生證 OCR 雙重核實，杜絕假冒」 |
| 錯誤訊息 | 誠懇、提供解法 | 「付款逾時，請重新操作或聯繫客服」 |
| 法律條款 | 正式、使用宋體 | 使用 `--font-serif` + `--color-text` |

---

## 五、Canvas LMS 整合建議

Canvas 預設介面較為陽春，建議透過 CSS Override：

```css
/* Canvas 按鈕覆蓋 */
.btn-primary, .Button--primary {
  background-color: var(--color-tertiary) !important;
  border-radius: 0 !important;
  font-family: var(--font-base) !important;
}

/* Canvas 進度條 */
.progress-bar { background-color: var(--color-accent) !important; }
```

目標：去除傳統教育系統生硬感，讓 Canvas 更像現代 SaaS 產品。

---

## 六、動態與動畫 Motion & Animation

### 設計原則：「有目的的動態，而非裝飾性動態」
每一個動畫必須有功能性理由：引導視線、確認操作、或表達層次。

### 6.1 頁面載入 Hero Entrance
- 技術：CSS `@keyframes fadeUp` — opacity 0→1 + translateY 20px→0
- 時序：眉標 0.1s → 大標 0.25s → 副標 0.4s → CTA 0.55s → 捲動箭頭 0.7s
- 緩動：`ease`（自然減速）
- 目的：引導視線從上到下，建立閱讀節奏

### 6.2 捲動進場 Scroll Entrance
- 技術：`IntersectionObserver` API（無外部函式庫）
- 觸發：元素進入視窗 10%（threshold: 0.1）
- 效果：`opacity 0→1` + `translateY 24px→0`，duration 0.6s ease
- 錯開（Stagger）：使用 `data-delay="1"` 到 `data-delay="6"` 屬性，每級 +0.1s
- 用途：Pain Point 卡片、Feature 項目、Research Form 卡片

### 6.3 Hover 微互動 Micro-interactions

| 元素 | 效果 |
|---|---|
| `.card` | `translateY(-3px)` + shadow lift，0.2s ease |
| `.form-card` | `border-left` → Gold，background shift，0.2s ease |
| `.btn-primary` / `.btn-gold` | `translateY(-1px)` + shadow glow，0.2s ease |
| `.nav__link` | color → Gold，border-bottom → Gold，0.18s |

### 6.4 捲動進度條 Scroll Progress Bar
- 位置：固定於視窗頂部，z-index: 300
- 顏色：`--color-accent`（Deep Gold）— 高對比，品牌聯想
- 高度：2px
- 更新：passive scroll listener，0.08s linear transition
- 目的：視覺化閱讀進度，減少使用者焦慮感

### 6.5 捲動指引箭頭 Scroll Arrow
- 位置：Hero 底部
- 動畫：`bounce` — translateY 0→8px，2s infinite ease-in-out
- 行為：點擊後 smooth scroll 至下一個區塊
- 用途：視覺提示「下方還有內容」

### 6.6 無障礙 Reduced Motion
所有動畫必須支援 `prefers-reduced-motion` 媒體查詢：

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
  [data-animate] { opacity: 1; transform: none; }
}
```

### 6.7 禁止事項
- 不使用 loop 動畫（除 bounce 箭頭外）
- 不使用超過 0.8s 的 transition（影響操作感）
- 不在同一畫面觸發超過 6 個並行動畫
- 不使用 scale 超過 1.05（過於誇張）

---

*設計系統由安圖教育維護 · Antu Education*
