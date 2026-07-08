const WHATSAPP = '5531995170249';

function money(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function byId(id) {
  return products.find((product) => product.id === id);
}

function cart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function save(newCart) {
  localStorage.setItem('cart', JSON.stringify(newCart));
  renderCart();
}

function msg(product) {
  return encodeURIComponent(`Olá, vim pelo site Elegance Cosméticos e quero comprar: ${product.name}. Preço: ${money(product.price)}. Pode me atender?`);
}

function buy(id) {
  const product = byId(id);
  if (product) window.open(`https://wa.me/${WHATSAPP}?text=${msg(product)}`, '_blank');
}

function add(id) {
  const product = byId(id);
  if (!product) return;

  const currentCart = cart();
  currentCart.push(id);
  save(currentCart);
  openSuzy(`Adicionei ${product.name} ao carrinho`);
}

function card(product, badge = '') {
  const tierLabel = product.tier === 'premium' ? 'Premium' : product.tier === 'intermediario' ? 'Intermediário' : 'Econômico';

  return `
    <article class="product">
      <div class="product-image">${product.name}</div>
      <span class="tag">${badge || product.cat} • ${tierLabel}</span>
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <div class="price">
        ${product.old ? `<span>${money(product.old)}</span>` : ''}
        <strong>${money(product.price)}</strong>
      </div>
      <button class="buy" onclick="buy('${product.id}')">Comprar pelo WhatsApp</button>
      <button onclick="add('${product.id}')">Adicionar ao carrinho</button>
    </article>
  `;
}

function render() {
  const productGrid = document.getElementById('productGrid');
  const salesGrid = document.getElementById('salesGrid');
  const categoryBlocks = document.getElementById('categoryBlocks');

  if (productGrid) productGrid.innerHTML = products.map((product) => card(product)).join('');

  if (salesGrid) {
    salesGrid.innerHTML = [
      ...best.map((id) => card(byId(id), 'Mais vendido')),
      ...offers.map((id) => card(byId(id), 'Oferta da semana'))
    ].join('');
  }

  if (categoryBlocks) {
    const categories = ['Feminino', 'Masculino', 'Kits', 'Cabelos', 'Maquiagem'];
    categoryBlocks.innerHTML = categories.map((category) => {
      const categoryId = category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const categoryProducts = products.filter((product) => product.cat === category);

      return `
        <section class="cat-block" id="${categoryId}">
          <h3>${category}</h3>
          <div class="grid">${categoryProducts.map((product) => card(product)).join('')}</div>
        </section>
      `;
    }).join('');
  }

  renderCart();
}

function renderCart() {
  const currentCart = cart();
  const count = document.getElementById('cartCount');
  const box = document.getElementById('cartItems');
  const total = document.getElementById('cartTotal');

  if (count) count.textContent = currentCart.length;
  if (!box || !total) return;

  if (!currentCart.length) {
    box.innerHTML = '<p>Seu carrinho está vazio.</p>';
    total.textContent = money(0);
    return;
  }

  box.innerHTML = currentCart.map((id, index) => {
    const product = byId(id);
    if (!product) return '';
    return `<div class="cart-row"><span>${product.name}</span><b>${money(product.price)}</b><button onclick="removeItem(${index})">Remover</button></div>`;
  }).join('');

  total.textContent = money(currentCart.reduce((sum, id) => {
    const product = byId(id);
    return product ? sum + product.price : sum;
  }, 0));
}

function removeItem(index) {
  const currentCart = cart();
  currentCart.splice(index, 1);
  save(currentCart);
}

function finishOrder() {
  const currentCart = cart();
  if (!currentCart.length) return openSuzy('Meu carrinho está vazio');

  const lines = currentCart.map((id, index) => {
    const product = byId(id);
    return product ? `${index + 1}. ${product.name} - ${money(product.price)}` : '';
  }).filter(Boolean).join('\n');

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá, vim pelo site Elegance Cosméticos e quero finalizar meu pedido:\n\n${lines}`)}`, '_blank');
}

function score(product, query) {
  const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const searchableText = `${product.keys} ${product.name} ${product.cat}`.toLowerCase();

  return searchTerms.reduce((total, term) => {
    return searchableText.includes(term) ? total + 1 : total;
  }, 0);
}

function recommendations(query) {
  let pool = products
    .map((product) => ({ ...product, score: score(product, query) }))
    .sort((a, b) => b.score - a.score || b.price - a.price);

  if (!pool[0]?.score) pool = products;

  return {
    premium: pool.find((product) => product.tier === 'premium') || products[0],
    mid: pool.find((product) => product.tier === 'intermediario') || products[3],
    cheap: pool.find((product) => product.tier === 'economico') || products[7]
  };
}

function handleSuzy() {
  const input = document.getElementById('suzyQuery');
  openSuzy(input?.value || 'Quero ajuda para escolher produtos');
}

function openSuzy(query = 'Quero ajuda para escolher produtos') {
  const box = document.getElementById('suzyAnswer');
  const input = document.getElementById('suzyQuery');

  if (!box || !input) {
    location.hash = 'suzy';
    return;
  }

  input.value = query;
  const result = recommendations(query);

  box.innerHTML = `
    <div class="answer-card"><b>Opção premium:</b> ${result.premium.name} — ${money(result.premium.price)}<br><button onclick="buy('${result.premium.id}')">Comprar</button></div>
    <div class="answer-card"><b>Opção intermediária:</b> ${result.mid.name} — ${money(result.mid.price)}<br><button onclick="buy('${result.mid.id}')">Comprar</button></div>
    <div class="answer-card"><b>Opção econômica:</b> ${result.cheap.name} — ${money(result.cheap.price)}<br><button onclick="buy('${result.cheap.id}')">Comprar</button></div>
  `;

  location.hash = 'suzy';
}

const menuButton = document.getElementById('menuBtn');
const navigation = document.getElementById('nav');

if (menuButton && navigation) {
  menuButton.onclick = () => navigation.classList.toggle('active');
}

render();
