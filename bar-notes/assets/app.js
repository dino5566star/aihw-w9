// 渲染邏輯：列表、篩選、詳細頁、份數換算。資料來自 data/recipes.js 的 RECIPES。
const BASES = ["威士忌", "琴酒", "龍舌蘭", "蘭姆", "伏特加", "其他"];
const $ = (sel) => document.querySelector(sel);

function tagHtml(text, extra = "") {
  return `<span class="tag ${extra}">${text}</span>`;
}

function cardHtml(r) {
  const tags = tagHtml(r.base, "base") + r.flavor.map((f) => tagHtml(f)).join("");
  return `<a class="card" href="recipe.html?id=${encodeURIComponent(r.id)}">
    <h2>${r.name}</h2><div class="en">${r.nameEn}</div>
    <div>${tags}</div>
    <div class="en">${r.method}｜難度 ${"★".repeat(r.difficulty)}</div></a>`;
}

function renderList() {
  const state = { q: "", base: "全部" };
  const chips = $("#chips");
  const grid = $("#grid");
  const draw = () => {
    const q = state.q.trim().toLowerCase();
    const list = RECIPES.filter((r) =>
      (state.base === "全部" || r.base === state.base) &&
      (!q || (r.name + r.nameEn + r.flavor.join("")).toLowerCase().includes(q)));
    grid.innerHTML = list.length ? list.map(cardHtml).join("") : `<p class="empty">找不到符合的配方。</p>`;
  };
  chips.innerHTML = ["全部", ...BASES.filter((b) => RECIPES.some((r) => r.base === b))]
    .map((b) => `<button class="chip" aria-pressed="${b === "全部"}" data-base="${b}">${b}</button>`).join("");
  chips.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    state.base = btn.dataset.base;
    chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === btn));
    draw();
  });
  $("#search").addEventListener("input", (e) => { state.q = e.target.value; draw(); });
  draw();
}

function renderRecipe() {
  const id = new URLSearchParams(location.search).get("id");
  const r = RECIPES.find((x) => x.id === id);
  const box = $("#recipe");
  if (!r) { box.innerHTML = `<p class="empty">找不到這支配方。<a href="index.html">回首頁</a></p>`; return; }
  document.title = `${r.name} ${r.nameEn}｜Bar Notes`;
  let servings = 1;
  const draw = () => {
    $("#ing").innerHTML = r.ingredients
      .map((i) => `<tr><td>${i.name}</td><td>${+(i.ml * servings).toFixed(1)} ml</td></tr>`).join("");
    $("#sv").textContent = servings;
  };
  box.innerHTML = `
    <a class="back" href="index.html">← 回配方列表</a>
    <h1>${r.name} <small class="en">${r.nameEn}</small></h1>
    <div class="meta">${tagHtml(r.base, "base")}${r.flavor.map((f) => tagHtml(f)).join("")}
      ${tagHtml(r.glass)}${tagHtml(r.method)}${tagHtml("難度 " + "★".repeat(r.difficulty))}</div>
    <section class="panel"><h2>材料</h2>
      <div class="servings"><button id="minus" aria-label="減少份數">−</button>
        <span><b id="sv">1</b> 份</span><button id="plus" aria-label="增加份數">＋</button></div>
      <table><tbody id="ing"></tbody></table>
      <p class="en">裝飾：${r.garnish}</p></section>
    <section class="panel"><h2>做法</h2><ol>${r.steps.map((s) => `<li>${s}</li>`).join("")}</ol></section>
    ${r.note ? `<p class="note">${r.note}</p>` : ""}`;
  $("#minus").addEventListener("click", () => { servings = Math.max(1, servings - 1); draw(); });
  $("#plus").addEventListener("click", () => { servings = Math.min(10, servings + 1); draw(); });
  draw();
}

document.addEventListener("DOMContentLoaded", () => {
  if ($("#grid")) renderList();
  if ($("#recipe")) renderRecipe();
});
