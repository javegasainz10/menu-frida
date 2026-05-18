// ============================================================
// FRIDA VINOS Y SABORES — Interactive Wine Menu
// ============================================================
(function () {
  'use strict';

  let currentCategory = 'tintos';
  let currentBodegaFilter = null;
  let searchQuery = '';

  const productsGrid = document.getElementById('productsGrid');
  const searchInput = document.getElementById('searchInput');
  const filterBadges = document.getElementById('filterBadges');
  const sectionTitle = document.getElementById('sectionTitle');
  const sectionSubtitle = document.getElementById('sectionSubtitle');
  const noResults = document.getElementById('noResults');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  const WHATSAPP_NUMBER = '541127988681';
  const WHATSAPP_ICON = `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  const CATEGORY_INFO = {
    'tintos': { title: 'Vinos Tintos', subtitle: 'Selección de tintos de bodegas argentinas' },
    'blancos': { title: 'Vinos Blancos', subtitle: 'Blancos frescos, aromáticos y elegantes' },
    'rosados': { title: 'Vinos Rosados', subtitle: 'Rosados vibrantes y refrescantes' },
    'especiales': { title: 'Especiales', subtitle: 'Clarete, Gin y bebidas especiales' },
    'espumantes': { title: 'Espumantes', subtitle: 'Burbujas y cavas para celebrar' },
    'ofertas': { title: 'Ofertas y Promociones', subtitle: 'Precios especiales para vos' }
  };

  function init() {
    createParticles();
    updateCounts();
    renderProducts();
    bindEvents();
  }

  function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 10 + 's';
      p.style.animationDuration = (8 + Math.random() * 6) + 's';
      container.appendChild(p);
    }
  }

  function updateCounts() {
    const cats = ['tintos','blancos','rosados','especiales','espumantes','ofertas'];
    cats.forEach(cat => {
      const el = document.getElementById('count-' + cat);
      if (el) el.textContent = PRODUCTS.filter(p => p.category === cat).length;
    });
  }

  function getFilteredProducts() {
    return PRODUCTS.filter(p => {
      if (p.category !== currentCategory) return false;
      if (currentBodegaFilter && p.bodega !== currentBodegaFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return p.name.toLowerCase().includes(q) ||
               p.bodega.toLowerCase().includes(q) ||
               p.origin.toLowerCase().includes(q) ||
               p.description.toLowerCase().includes(q);
      }
      return true;
    });
  }

  function getBodegasForCategory() {
    const bodegas = new Set();
    PRODUCTS.forEach(p => { if (p.category === currentCategory) bodegas.add(p.bodega); });
    return Array.from(bodegas).sort();
  }

  function renderBodegaFilters() {
    const bodegas = getBodegasForCategory();
    filterBadges.innerHTML = '';
    const allBadge = document.createElement('button');
    allBadge.className = 'filter-badge' + (!currentBodegaFilter ? ' active' : '');
    allBadge.textContent = 'Todas';
    allBadge.addEventListener('click', () => { currentBodegaFilter = null; renderBodegaFilters(); renderProducts(); });
    filterBadges.appendChild(allBadge);
    bodegas.forEach(b => {
      const badge = document.createElement('button');
      badge.className = 'filter-badge' + (currentBodegaFilter === b ? ' active' : '');
      badge.textContent = b;
      badge.addEventListener('click', () => { currentBodegaFilter = currentBodegaFilter === b ? null : b; renderBodegaFilters(); renderProducts(); });
      filterBadges.appendChild(badge);
    });
  }

  function formatPrice(price) {
    return '$' + price.toLocaleString('es-AR');
  }

  function buildWhatsAppUrl(product) {
    const msg = encodeURIComponent(`Hola! Me interesa consultar por: ${product.name} (${formatPrice(product.price)})`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  }

  function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="card-image" loading="lazy">
        <span class="card-bodega-badge">${product.bodega}</span>
        <span class="card-price-badge">${formatPrice(product.price)}</span>
      </div>
      <div class="card-info">
        <h3 class="card-name">${product.name}</h3>
        <span class="card-origin"><span class="card-origin-icon">📍</span>${product.origin}</span>
        <p class="card-description">${product.description}</p>
        <div class="card-bottom">
          <span class="card-price">${formatPrice(product.price)}</span>
          <a href="${buildWhatsAppUrl(product)}" target="_blank" rel="noopener" class="card-whatsapp" onclick="event.stopPropagation()">
            ${WHATSAPP_ICON} Consultar
          </a>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(product));
    return card;
  }

  function renderProducts() {
    const products = getFilteredProducts();
    productsGrid.innerHTML = '';
    const info = CATEGORY_INFO[currentCategory];
    sectionTitle.textContent = info.title;
    sectionSubtitle.textContent = info.subtitle;
    if (products.length === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
      products.forEach(p => productsGrid.appendChild(createProductCard(p)));
    }
  }

  function openModal(product) {
    document.getElementById('modalImg').src = product.image;
    document.getElementById('modalImg').alt = product.name;
    document.getElementById('modalBrand').textContent = product.bodega;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalDetails').innerHTML = `
      <div class="modal-detail-row">
        <span class="modal-detail-label">Descripción</span>
        <span class="modal-detail-value description">${product.description}</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
        <div class="modal-detail-row">
          <span class="modal-detail-label">Origen</span>
          <span class="modal-detail-value">${product.origin}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-label">Bodega</span>
          <span class="modal-detail-value">${product.bodega}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-label">Precio</span>
          <span class="modal-detail-value" style="color:var(--accent);font-weight:700;font-size:18px">${formatPrice(product.price)}</span>
        </div>
      </div>
      <a href="${buildWhatsAppUrl(product)}" target="_blank" rel="noopener" class="modal-whatsapp-btn">
        ${WHATSAPP_ICON} Pedir por WhatsApp
      </a>
    `;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function switchCategory(category) {
    currentCategory = category;
    currentBodegaFilter = null;
    searchQuery = '';
    searchInput.value = '';
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.category === category));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.category === category));
    renderBodegaFilters();
    renderProducts();
    document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function bindEvents() {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => switchCategory(btn.dataset.category)));
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        switchCategory(link.dataset.category);
        navLinks.classList.remove('mobile-open');
        mobileMenuBtn.classList.remove('open');
      });
    });
    let searchTimeout;
    searchInput.addEventListener('input', e => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => { searchQuery = e.target.value.trim(); renderProducts(); }, 200);
    });
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50), { passive: true });
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('open');
      navLinks.classList.toggle('mobile-open');
    });
    document.querySelector('.hero-cta').addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
    });
    renderBodegaFilters();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
