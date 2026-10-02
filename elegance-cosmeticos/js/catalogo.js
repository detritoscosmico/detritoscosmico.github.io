const CATALOG_WHATSAPP = '5531995170249';

async function loadReleasedProducts() {
  const container = document.getElementById('released-products');
  if (!container) return;

  try {
    const response = await fetch('data/produtos-liberados.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Falha ao carregar a base comercial.');

    const products = await response.json();
    container.innerHTML = '';

    if (!Array.isArray(products) || products.length === 0) {
      container.innerHTML = `
        <div class="catalog-error">
          <strong>Catálogo aguardando confirmação de preços.</strong>
          <span>Nenhum produto está liberado para oferta pública neste momento. Fale com a Elegance pelo WhatsApp para consultar as opções atuais.</span>
        </div>
      `;
      return;
    }

    // Regra defensiva: só renderiza registros explicitamente liberados.
    const released = products.filter((product) =>
      product &&
      product.status === 'LIBERADO_PARA_CONTEUDO' &&
      Number(product.price) > 0 &&
      product.sku &&
      product.name &&
      product.image
    );

    if (released.length === 0) {
      container.innerHTML = `
        <div class="catalog-error">
          <strong>Nenhum produto liberado.</strong>
          <span>A base existe, mas nenhum registro atende a todos os critérios comerciais.</span>
        </div>
      `;
      return;
    }
  } catch (error) {
    console.error(error);
    container.innerHTML = `
      <div class="catalog-error">
        <strong>Catálogo temporariamente indisponível.</strong>
        <span>Fale com a Elegance pelo WhatsApp para consultar as opções atuais.</span>
      </div>
    `;
  }
}

loadReleasedProducts();
