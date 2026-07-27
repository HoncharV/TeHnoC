// ===== ІМПОРТ =====
import { icon, money, categories, products, pcs } from './main.js';

// ===== РЕНДЕРИНГ КАТЕГОРІЙ =====
function renderCategories() {
  const el = document.getElementById('catGrid');
  if (!el) {
    console.warn('catGrid не знайдено!');
    return;
  }
  
  el.innerHTML = categories.map(c => `
    <a class="cat-card" href="${c.link || '#'}">
      <div class="cat-icon">${icon(c.icon)}</div>
      <div><h4>${c.name}</h4><span>${c.count}</span></div>
    </a>
  `).join('');
}

// ===== РЕНДЕРИНГ ТОВАРІВ =====
function renderProducts() {
  const el = document.getElementById('productGrid');
  if (!el) {
    console.warn('productGrid не знайдено!');
    return;
  }
  
  el.innerHTML = products.map((p, i) => {
    const price = 4200 + (i * 1370 % 38000) + 2999;
    const old = i % 3 === 0 ? price + Math.round(price * 0.18) : null;
    const tag = i % 4 === 0 ? '<span class="p-tag new">Новинка</span>' :
      i % 5 === 0 ? '<span class="p-tag">Хіт</span>' : '';
    return `
      <div class="p-card">
        <div class="p-thumb">
          ${tag}
          ${icon(p[0])}
        </div>
        <div class="p-name">${p[1]}</div>
        <div class="p-specs">${p[2]}</div>
        <div class="p-bottom">
          <div>
            ${old ? `<span class="p-old">${money(old)} ₴</span>` : ''}
            <span class="p-price">${money(price)} <sup>₴</sup></span>
          </div>
          <button class="buy-btn" aria-label="Купити">${icon('cart')}</button>
        </div>
      </div>
    `;
  }).join('');
}

// ===== РЕНДЕРИНГ ПІДБІРОК =====
function renderPCs() {
  const el = document.getElementById('pcGrid');
  if (!el) {
    console.warn('pcGrid не знайдено!');
    return;
  }
  
  // Перевірка чи є pcs
  if (!pcs || pcs.length === 0) {
    el.innerHTML = '<p style="text-align:center;padding:40px;color:var(--gray);">Немає товарів у підбірці</p>';
    return;
  }

  console.log('Рендеримо підбірки, кількість:', pcs.length);

  el.innerHTML = pcs.map(p => {
    const hasOldPrice = p.oldPrice && p.oldPrice > 0;
    return `
      <div class="pc-card">
        <div class="pc-thumb" style="font-size:36px;display:flex;align-items:center;justify-content:center;height:80px;background:linear-gradient(155deg, var(--lav-50), #fff);border-radius:10px;margin-bottom:10px;">
          ${p.category}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
          <span style="font-size:10px;background:var(--lav-50);color:var(--lav-700);padding:2px 10px;border-radius:100px;font-weight:600;">${p.tag}</span>
          <div class="rating">
            ${Array.from({ length: 5 }).map((_, i) =>
              icon('star', `style="fill:${i < Math.round(p.rating) ? 'var(--lav-500)' : 'var(--gray-line)'};width:14px;height:14px;"`)
            ).join('')}
            <span style="font-size:12px;color:var(--gray);margin-left:4px;">${p.rating}</span>
          </div>
        </div>
        <h4 style="font-size:14px;font-weight:600;margin-bottom:4px;">${p.name}</h4>
        <div class="pc-foot" style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;">
          <div>
            ${hasOldPrice ? `<span style="font-size:11px;color:var(--gray);text-decoration:line-through;display:block;">${money(p.oldPrice)} ₴</span>` : ''}
            <span class="p-price" style="font-size:16px;font-weight:700;color:var(--ink);">${money(p.price)} <sup style="font-size:10px;color:var(--gray);">₴</sup></span>
          </div>
          <button class="btn btn-lav" style="padding:6px 14px;font-size:11px;border-radius:100px;">Купити</button>
        </div>
      </div>
    `;
  }).join('');
}

// ===== ПЕРЕМИКАННЯ ВИДУ =====
function initViewSwitch() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cols = btn.dataset.cols;
      grid.setAttribute('data-cols', cols);
      document.querySelectorAll('.view-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.cols === cols)
      );
    });
  });
}

// ===== ЗАПУСК ПІСЛЯ ЗАВАНТАЖЕННЯ СТОРІНКИ =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 DOM завантажено, запускаємо рендеринг...');
  renderCategories();
  renderProducts();
  renderPCs();
  initViewSwitch();
  console.log('✅ Рендеринг завершено!');
});