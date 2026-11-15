# AGENTS.md — 調酒配方筆記站（Bar Notes）

> 給 AI 開發助手（Codex、Claude Code、Cursor 等）閱讀的專案規則。
> 讀完這份文件，你應該知道：這個專案是什麼、檔案放哪、新增內容要照什麼格式、哪些事不能做。

## 1. 專案目的
- 一個**純靜態**的個人調酒配方筆記網站，用 GitHub Pages 公開。
- 讀者：想在家調酒的新手。每支配方要「一眼看懂、照著做得出來」。
- 長期目標：之後新增一支酒，只需要**加一筆資料**，不需要改版面程式。

## 2. 技術限制（不要違反）
- 只用 HTML / CSS / 原生 JavaScript。**不使用** npm、框架、打包工具、外部 CDN。
- 所有路徑使用**相對路徑**（GitHub Pages 會放在 `/<repo-name>/` 底下，絕對路徑 `/` 會壞掉）。
- 資料用 `data/recipes.js`（而不是 fetch JSON），這樣直接雙擊 `index.html` 也能開。
- 不放任何 API 金鑰、個資、版權圖片。

## 3. 檔案結構
```
bar-notes/
├── AGENTS.md          # 本文件（規則的唯一來源）
├── CLAUDE.md          # 只指向 AGENTS.md
├── README.md          # 給人看的專案簡介
├── index.html         # 首頁：搜尋、依基酒篩選、配方卡片列表
├── recipe.html        # 單支配方頁，用 ?id=<id> 讀取資料
├── assets/
│   ├── style.css      # 全站樣式（唯一的 CSS 檔）
│   └── app.js         # 渲染邏輯（列表、篩選、詳細頁、份數換算）
└── data/
    └── recipes.js     # 所有配方資料（新增內容主要改這裡）
```

## 4. 視覺風格
- 氣氛：深色酒吧夜晚，琥珀金為強調色；同時支援淺色模式（`prefers-color-scheme`）。
- 顏色只能用 `assets/style.css` 開頭 `:root` 的變數，不要在元素上寫死色碼。
- 字體：標題用襯線字（`Noto Serif TC`、serif），內文用系統無襯線字。
- 版面寬度上限 960px，手機優先（先確保 375px 寬可讀）。
- 語氣：繁體中文、簡短、口語，不用浮誇形容詞。

## 5. 新增一支配方（標準流程）
1. 在 `data/recipes.js` 的 `RECIPES` 陣列**最後**新增一個物件，欄位如下（全部必填，除非標註選填）：

| 欄位 | 型別 | 說明 |
|---|---|---|
| `id` | string | 小寫英文加連字號，全站唯一，例：`old-fashioned` |
| `name` | string | 中文名稱 |
| `nameEn` | string | 英文名稱 |
| `base` | string | 基酒，只能是：`威士忌` `琴酒` `龍舌蘭` `蘭姆` `伏特加` `其他` |
| `flavor` | string[] | 風味標籤 1–3 個，例：`["苦甜","酒感強"]` |
| `glass` | string | 杯型 |
| `method` | string | 手法，只能是：`攪拌` `搖盪` `直調` `build` 之一 |
| `difficulty` | 1–3 | 難度，1 最簡單 |
| `ingredients` | `{name, ml}[]` | 用量一律用 **ml**（整數或 .5）；裝飾物不放這裡 |
| `steps` | string[] | 3–6 步，每步一句、以動詞開頭 |
| `garnish` | string | 裝飾 |
| `note` | string | 一句話小提醒（選填，≤40 字） |

2. 不需要改 `index.html`、`recipe.html`、`app.js`——列表與詳細頁會自動出現。
3. 如果出現**新的基酒類別**，才需要同步改：本文件第 5 節表格、`app.js` 的 `BASES` 陣列。
4. 本機檢查：開啟 `index.html`，確認卡片出現、點進去詳細頁正常、份數按鈕能換算。

## 6. 修改程式碼的規則
- 保持小而清楚：一個函式做一件事，函式名稱用英文動詞開頭（`renderList`、`filterByBase`）。
- 使用者可見的文字一律繁體中文；程式註解可用中文。
- 改樣式只動 `assets/style.css`；不要在 HTML 內寫 `style=""`。
- 不要刪除或改名既有的 `id`（網址會失效）。
- 需要新頁面（例如「器具介紹」）時：複製 `recipe.html` 當骨架，沿用同一份 header/footer，並在 `index.html` 的導覽加連結。

## 7. 部署
- GitHub repo → Settings → Pages → Branch 選 `main`、資料夾選 `/ (root)`。
- 推上去後網址為 `https://<帳號>.github.io/<repo-name>/`。

## 8. 完成任務前的自我檢查
- [ ] 只改了該改的檔案（新增配方 = 只改 `data/recipes.js`）
- [ ] 沒有使用絕對路徑或外部資源
- [ ] 手機寬度可讀、深淺色都正常
- [ ] 新資料每個必填欄位都有，`id` 沒有重複
