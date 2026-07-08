const WHATSAPP = '5531995170249';

const products = [
  { id: 'eudora-rose', name: 'Eudora Rosé Eau de Parfum 75ml', cat: 'Feminino', tier: 'premium', price: 199.91, old: 244.90, desc: 'Chypre frutal luxuoso com acorde inspirado no espumante rosé, frutas vermelhas, rosa centifolia e madeiras densas.', keys: 'feminino perfume presente rose eudora luxo premium' },
  { id: 'malbec', name: 'Malbec Desodorante Colônia 100ml', cat: 'Masculino', tier: 'premium', price: 179.91, old: 209.90, desc: 'Fragrância masculina inesquecível, ideal para o homem sedutor e marcante.', keys: 'masculino perfume presente malbec premium' },
  { id: 'club6-kit', name: 'Comb Club 6 Prestige Pais/26', cat: 'Kits', tier: 'premium', price: 164.90, old: 241.79, desc: 'Combo masculino presenteável com excelente percepção de valor.', keys: 'kit masculino presente club prestige pais' },
  { id: 'egeo', name: 'Egeo Original Desodorante Colônia 90ml', cat: 'Feminino', tier: 'intermediario', price: 129.91, old: 164.90, desc: 'Fragrância divertida para acompanhar qualquer rotina.', keys: 'feminino perfume egeo intermediario presente' },
  { id: 'coffee', name: 'Coffee Woman Seduction Desodorante Colônia 100ml', cat: 'Feminino', tier: 'intermediario', price: 160.91, old: 229.90, desc: 'Fragrância feminina envolvente e marcante.', keys: 'feminino perfume coffee seduction intermediario' },
  { id: 'imensi', name: 'Imensi Desodorante Colônia 100ml', cat: 'Feminino', tier: 'intermediario', price: 159.90, old: 159.90, desc: 'Floral ambarado marcante para um horizonte de possibilidades.', keys: 'feminino perfume imensi floral' },
  { id: 'volpe-kit', name: 'Comb Volpe Pais/26', cat: 'Kits', tier: 'intermediario', price: 129.90, old: 178.80, desc: 'Kit masculino presenteável com bom custo-benefício.', keys: 'kit masculino presente volpe pais' },
  { id: 'delineador', name: 'Delineador de Olhos Líquido Pretolino 2,5ml', cat: 'Maquiagem', tier: 'economico', price: 30.90, old: 52.90, desc: 'Produto de entrada para maquiagem, prático e acessível.', keys: 'maquiagem delineador barato economico' },
  { id: 'batom-blush', name: 'Batom e Blush Multifuncional Vermelho Goji Berry 3,5g', cat: 'Maquiagem', tier: 'economico', price: 55.90, old: 72.90, desc: 'Produto multifuncional para boca e rosto.', keys: 'maquiagem batom blush economico' },
  { id: 'match-condicionador', name: 'Condicionador Match Escudo de Hidratação 280ml', cat: 'Cabelos', tier: 'economico', price: 34.90, old: 49.90, desc: 'Cuidado capilar diário com preço acessível.', keys: 'cabelo cabelos hidratacao match economico' },
  { id: 'sophie', name: 'Shimmer Splash Corpo e Cabelo Sophie Toy Story 110ml', cat: 'Feminino', tier: 'economico', price: 79.90, old: null, desc: 'Splash para corpo e cabelo, divertido e presenteável.', keys: 'feminino body splash sophie presente barato' },
  { id: 'club6-locao', name: 'Club 6 Prestige Loção Hidratante Corporal 200ml', cat: 'Masculino', tier: 'economico', price: 44.90, old: 52.99, desc: 'Hidratação intensa por 48h com potência oriental amadeirada.', keys: 'masculino hidratante club 6 economico' }
];

const best = ['eudora-rose', 'malbec', 'coffee', 'club6-kit'];
const offers = ['delineador', 'club6-kit', 'coffee', 'match-condicionador'];

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
