const CATALOG_WHATSAPP = '5531995170249';

function formatPriceBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

function formatBaseDate(value) {
  const [year, month, day] = value.split('-');
  return [day, month, year].join('/');
}

function buildProductWhatsApp(product) {
  const message = [
    'Olá, Elegance Cosméticos!',
    `Tenho interesse no produto ${product.name}.`,
    `SKU: ${product.sku}.`,
    `Preço cadastrado na base: ${formatPriceBRL(product.price)}.`,
    `Base consultada: ${formatBaseDate(product.data_base)}.`,
    '',
    'Quero confirmar a disponibilidade e as condições atuais antes de fechar.'
  ].join('\n');

  return `https://wa.me/${CATALOG_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function createProductCard(product) {
  const article = document.createElement('article');
  article.className = 'product-card';

  const imageWrap = document.createElement('div');
  imageWrap.className = 'product-image-wrap';

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.name;
  image.loading = 'lazy';
  image.className = 'product-image';

  imageWrap.appendChild(image);

  const body = document.createElement('div');
  body.className = 'product-card-body';

  const status = document.createElement('span');
  status.className = 'product-status';
  status.textContent = 'Dados validados';

  const brand = document.createElement('p');
  brand.className = 'product-brand';
  brand.textContent = product.brand;

  const title = document.createElement('h3');
  title.textContent = product.name;

  const meta = document.createElement('div');
  meta.className = 'product-meta';
  meta.innerHTML = `
    <span>SKU ${product.sku}</span>
    <span>${product.category}</span>
  `;

  const priceLabel = document.createElement('small');
  priceLabel.className = 'product-price-label';
  priceLabel.textContent = 'Preço cadastrado na base';

  const price = document.createElement('strong');
  price.className = 'product-price';
  price.textContent = formatPriceBRL(product.price);

  const note = document.createElement('p');
  note.className = 'product-note';
  note.textContent = `Base ${formatBaseDate(product.data_base)}. ${product.availability_note}`;

  const action = document.createElement('a');
  action.className = 'btn primary product-cta';
  action.href = buildProductWhatsApp(product);
  action.target = '_blank';
  action.rel = 'noopener';
  action.textContent = 'Confirmar no WhatsApp';

  body.append(status, brand, title, meta, priceLabel, price, note, action);
  article.append(imageWrap, body);
  return article;
}

async function loadReleasedProducts() {
  const container = document.getElementById('released-products');
  if (!container) return;

  try {
    const response = await fetch('data/produtos-liberados.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Falha ao carregar a base comercial.');

    const products = await response.json();
    container.innerHTML = '';

    if (!Array.isArray(products) || products.length === 0) {
      container.innerHTML = '<p class="catalog-loading">Nenhum produto está liberado para exibição neste momento.</p>';
      return;
    }

    products.forEach((product) => {
      container.appendChild(createProductCard(product));
    });
  } catch (error) {
    console.error(error);
    container.innerHTML = `
      <div class="catalog-error">
        <strong>Catálogo temporariamente indisponível.</strong>
        <span>Fale com a Elegance pelo WhatsApp para confirmar as opções atuais.</span>
      </div>
    `;
  }
}

loadReleasedProducts();
