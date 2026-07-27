// ===== БІБЛІОТЕКА ІКОНОК =====
export const ICONS = {
  phone: '<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',
  laptop: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M1 20h22l-2-4H3Z"/>',
  desktop: '<rect x="4" y="4" width="16" height="11" rx="1.5"/><path d="M9 20h6M12 15v5"/>',
  headphones: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="14" width="5" height="7" rx="1.5"/><rect x="17" y="14" width="5" height="7" rx="1.5"/>',
  tablet: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M11 18h2"/>',
  watch: '<rect x="8" y="7" width="8" height="10" rx="2.5"/><path d="M9 7V4h6v3M9 17v3h6v-3"/>',
  speaker: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><circle cx="12" cy="8" r="2"/><circle cx="12" cy="16" r="3.5"/>',
  home: '<path d="M4 11 12 4l8 7"/><path d="M6 10v10h12V10"/><rect x="10" y="14" width="4" height="6"/>',
  cart: '<circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
  star: '<path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.2l7.1-.6Z"/>',
  
  // ===== НОВІ ІКОНКИ ДЛЯ КАТЕГОРІЙ =====
  shirt: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M8 4l4-2 4 2"/>',
  shoe: '<path d="M4 16l2-8h12l2 8"/><path d="M2 16h20v4H2z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  bag: '<rect x="6" y="6" width="12" height="14" rx="2"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
  case: '<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/>',
};

// ===== ФУНКЦІЇ =====
export function icon(name, extra = '') {
  return `<svg class="icon" viewBox="0 0 24 24" ${extra}>${ICONS[name]}</svg>`;
}

export function money(n) {
  return n.toLocaleString('uk-UA');
}

// ===== КАТЕГОРІЇ (6 ШТУК) =====
export const categories = [
  { icon: 'phone', name: 'Електроніка', count: '412 товарів', link: 'pages/electronics.html' },
  { icon: 'target', name: 'Полювання та риболовля', count: '167 товарів', link: 'pages/hunting.html' },
  { icon: 'shirt', name: 'Одяг', count: '312 товарів', link: 'pages/clothing.html' },
  { icon: 'shoe', name: 'Взуття', count: '245 товарів', link: 'pages/shoes.html' },
  { icon: 'bag', name: 'Чохли та сумки', count: '198 товарів', link: 'pages/cases.html' },
  { icon: 'case', name: 'Чохли для електроніки', count: '134 товари', link: 'pages/cases-electronics.html' },
];

// ===== ТОВАРИ (ДЛЯ ГОЛОВНОЇ СТОРІНКИ) =====
export const products = [
  // ===== ЕЛЕКТРОНІКА =====
  ['phone', 'Смартфон Nova X12 Pro', '6.7" AMOLED · 256GB · 5G'],
  ['laptop', 'Ноутбук AirLine 15 Ultra', '15.6" · 16GB RAM · 512GB SSD'],
  ['headphones', 'Навушники SonicWave Pro', 'ANC · Bluetooth 5.3 · 30г'],
  ['desktop', 'ПК StudioForge R7', 'Ryzen 7 · 32GB · RTX 4060'],
  ['tablet', 'Планшет FlexPad 11', '11" · 128GB · стилус'],
  ['watch', 'Годинник PulseFit Gen4', 'AMOLED · GPS · 7 днів'],
  ['speaker', 'Колонка EchoBoom Mini', 'Bluetooth · 12год · IPX7'],
  
  // ===== ОДЯГ =====
  ['shirt', 'Футболка Cotton Classic', '100% бавовна · Чорний · M'],
  ['shirt', 'Сорочка Business White', 'Бавовна · Білий · L'],
  ['shirt', 'Світшот Hoodie Grey', 'Фліс · Сірий · XL'],
  
  // ===== ВЗУТТЯ =====
  ['shoe', 'Кросівки Air Runner', 'Білі · 42 · Текстиль'],
  ['shoe', 'Черевики Trek Pro', 'Коричневі · 44 · Шкіра'],
  ['shoe', 'Кросівки Sport Flex', 'Чорні · 40 · Сітка'],
  
  // ===== ЧОХЛИ ТА СУМКИ =====
  ['bag', 'Сумка Laptop Bag 15"', 'Шкіра · Чорна · Для ноутбука'],
  ['bag', 'Рюкзак Urban Backpack', 'Текстиль · Сірий · 20L'],
  ['case', 'Чохол iPhone 15 Pro', 'Силікон · Прозорий'],
  ['case', 'Чохол Samsung S24', 'Силікон · Чорний'],
];

// ===== ПІДБІРКИ (ГАРЯЧІ ПРОПОЗИЦІЇ) =====
export const pcs = [
  {
    name: 'Планшет FlexPad 11',
    category: '📟',
    rating: 4.7,
    price: 8499,
    oldPrice: 9999,
    tag: '💥 -15%'
  },
  {
    name: 'Навушники SonicWave Pro',
    category: '🎧',
    rating: 4.8,
    price: 3299,
    oldPrice: 4299,
    tag: '💥 -23%'
  },
  {
    name: 'Черевики Trek Pro',
    category: '👟',
    rating: 4.6,
    price: 4299,
    oldPrice: 5499,
    tag: '💥 -22%'
  },
  {
    name: 'Сумка Laptop Bag 15"',
    category: '👜',
    rating: 4.5,
    price: 1899,
    oldPrice: 2499,
    tag: '💥 -24%'
  },
  
];