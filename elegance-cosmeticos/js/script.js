const whatsappNumber = '5531995170249';
const instagramUser = '@elegancecosmeticosbr';
const STORAGE_KEY = 'elegance_sales_lead_v1';

const state = {
  source: detectSource(),
  name: '',
  flow: '',
  category: '',
  intent: '',
  postSale: ''
};

const yearElement = document.getElementById('year');
const messagesEl = document.getElementById('bot-messages');
const actionsEl = document.getElementById('bot-actions');
const nameForm = document.getElementById('bot-name-form');
const nameInput = document.getElementById('lead-name');
const resultEl = document.getElementById('bot-result');
const summaryEl = document.getElementById('bot-summary');
const whatsappEl = document.getElementById('bot-whatsapp');
const copyEl = document.getElementById('bot-copy');
const sourceLabel = document.getElementById('lead-source-label');

if (yearElement) yearElement.textContent = new Date().getFullYear();
if (sourceLabel) sourceLabel.textContent = `Origem: ${state.source}`;

function detectSource() {
  const params = new URLSearchParams(window.location.search);
  const raw = (params.get('origem') || params.get('utm_source') || 'site').toLowerCase();
  const allowed = {
    instagram: 'Instagram',
    facebook: 'Facebook',
    whatsapp: 'WhatsApp',
    site: 'Site',
    direct: 'Acesso direto'
  };
  return allowed[raw] || raw.replace(/[^a-z0-9_-]/gi, '').slice(0, 30) || 'Site';
}

function buildWhatsAppLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function addMessage(text, sender = 'bot') {
  if (!messagesEl) return;
  const item = document.createElement('div');
  item.className = `bot-message ${sender}`;
  item.textContent = text;
  messagesEl.appendChild(item);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function setActions(options) {
  if (!actionsEl) return;
  actionsEl.innerHTML = '';
  options.forEach(({ label, value, handler }) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'bot-option';
    button.textContent = label;
    button.dataset.value = value;
    button.addEventListener('click', () => handler(value, label));
    actionsEl.appendChild(button);
  });
}

function clearActions() {
  if (actionsEl) actionsEl.innerHTML = '';
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    source: state.source,
    name: state.name,
    flow: state.flow,
    category: state.category,
    intent: state.intent,
    postSale: state.postSale,
    updatedAt: new Date().toISOString()
  }));
}

function loadSavedLead() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
  } catch {
    return null;
  }
}

function startBot() {
  clearActions();
  if (nameForm) nameForm.hidden = true;
  if (resultEl) resultEl.hidden = true;
  if (messagesEl) messagesEl.innerHTML = '';

  addMessage('Olá! Sou a assistente digital da Elegance Cosméticos. Posso organizar seu atendimento antes de você seguir para o WhatsApp.');
  addMessage('O que você deseja fazer?');

  setActions([
    { label: 'Quero comprar', value: 'comprar', handler: chooseFlow },
    { label: 'Quero receber opções', value: 'catalogo', handler: chooseFlow },
    { label: 'Pós-venda', value: 'pos-venda', handler: chooseFlow },
    { label: 'Falar com atendente', value: 'atendente', handler: chooseFlow }
  ]);
}

function chooseFlow(value, label) {
  state.flow = value;
  addMessage(label, 'user');
  clearActions();

  if (value === 'atendente') {
    state.intent = 'Falar diretamente com um atendente';
    askName();
    return;
  }

  if (value === 'pos-venda') {
    addMessage('Certo. Qual situação descreve melhor seu pós-venda?');
    setActions([
      { label: 'Já recebi meu pedido', value: 'recebido', handler: choosePostSale },
      { label: 'Ainda não recebi', value: 'nao-recebido', handler: choosePostSale },
      { label: 'Preciso relatar um problema', value: 'problema', handler: choosePostSale },
      { label: 'Quero comprar novamente', value: 'recompra', handler: choosePostSale }
    ]);
    return;
  }

  addMessage('Qual categoria mais combina com o que você procura?');
  showCategoryOptions();
}

function showCategoryOptions() {
  setActions([
    { label: 'Perfumaria', value: 'Perfumaria', handler: chooseCategory },
    { label: 'Skincare', value: 'Skincare', handler: chooseCategory },
    { label: 'Maquiagem', value: 'Maquiagem', handler: chooseCategory },
    { label: 'Cabelos', value: 'Cabelos', handler: chooseCategory },
    { label: 'Ainda não sei', value: 'Preciso de orientação', handler: chooseCategory }
  ]);
}

function chooseCategory(value, label) {
  state.category = value;
  addMessage(label, 'user');
  clearActions();

  addMessage('E qual é sua intenção neste momento?');
  setActions([
    { label: 'Quero comprar agora', value: 'Quero comprar agora', handler: chooseIntent },
    { label: 'Quero conhecer opções', value: 'Quero conhecer opções', handler: chooseIntent },
    { label: 'Quero tirar uma dúvida', value: 'Quero tirar uma dúvida', handler: chooseIntent },
    { label: 'Estou pesquisando', value: 'Estou pesquisando', handler: chooseIntent }
  ]);
}

function chooseIntent(value, label) {
  state.intent = value;
  addMessage(label, 'user');
  askName();
}

function choosePostSale(value, label) {
  state.postSale = value;
  state.intent = `Pós-venda: ${label}`;
  addMessage(label, 'user');
  askName();
}

function askName() {
  clearActions();
  addMessage('Para eu preparar a mensagem do atendimento, como podemos chamar você?');
  if (nameForm) nameForm.hidden = false;
  if (nameInput) {
    nameInput.value = state.name || '';
    nameInput.focus();
  }
}

function finishLead() {
  persist();
  if (nameForm) nameForm.hidden = true;

  const summaryParts = [
    `Nome: ${state.name}`,
    `Origem: ${state.source}`,
    state.category ? `Categoria: ${state.category}` : '',
    state.intent ? `Necessidade: ${state.intent}` : ''
  ].filter(Boolean);

  const summary = summaryParts.join(' • ');
  if (summaryEl) summaryEl.textContent = summary;

  const messageLines = [
    'Olá, Elegance Cosméticos!',
    `Meu nome é ${state.name}.`,
    `Vim pelo canal: ${state.source}.`,
    state.category ? `Tenho interesse em: ${state.category}.` : '',
    state.intent ? `Minha necessidade agora: ${state.intent}.` : '',
    '',
    'Gostaria de continuar o atendimento e verificar as opções realmente disponíveis.'
  ].filter(Boolean);

  if (whatsappEl) whatsappEl.href = buildWhatsAppLink(messageLines.join('\n'));
  if (resultEl) resultEl.hidden = false;

  addMessage('Pronto. Organizei seu atendimento sem presumir preço, promoção ou disponibilidade. Você pode continuar pelo WhatsApp.');
}

if (nameForm) {
  nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = (nameInput?.value || '').trim();
    if (!value) return;
    state.name = value;
    addMessage(value, 'user');
    finishLead();
  });
}

if (copyEl) {
  copyEl.addEventListener('click', async () => {
    const text = summaryEl?.textContent || '';
    try {
      await navigator.clipboard.writeText(text);
      copyEl.textContent = 'Resumo copiado';
      setTimeout(() => { copyEl.textContent = 'Copiar resumo'; }, 1800);
    } catch {
      copyEl.textContent = 'Não foi possível copiar';
    }
  });
}

document.querySelectorAll('.js-start-category').forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById('assistente')?.scrollIntoView({ behavior: 'smooth' });
    startBot();
    state.flow = 'comprar';
    state.category = button.dataset.category || '';
    setTimeout(() => {
      addMessage(`Tenho interesse em ${state.category}`, 'user');
      clearActions();
      addMessage('E qual é sua intenção neste momento?');
      setActions([
        { label: 'Quero comprar agora', value: 'Quero comprar agora', handler: chooseIntent },
        { label: 'Quero conhecer opções', value: 'Quero conhecer opções', handler: chooseIntent },
        { label: 'Quero tirar uma dúvida', value: 'Quero tirar uma dúvida', handler: chooseIntent },
        { label: 'Estou pesquisando', value: 'Estou pesquisando', handler: chooseIntent }
      ]);
    }, 250);
  });
});

document.getElementById('floating-bot')?.addEventListener('click', () => {
  document.getElementById('assistente')?.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('bot-reset')?.addEventListener('click', () => {
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, {
    source: detectSource(),
    name: '',
    flow: '',
    category: '',
    intent: '',
    postSale: ''
  });
  startBot();
});

const saved = loadSavedLead();
if (saved?.name) {
  state.name = saved.name || '';
  state.flow = saved.flow || '';
  state.category = saved.category || '';
  state.intent = saved.intent || '';
  state.postSale = saved.postSale || '';
  addMessage(`Bem-vinda de volta, ${state.name}. Encontrei um atendimento iniciado neste navegador.`);
  setActions([
    {
      label: 'Continuar no WhatsApp',
      value: 'resume',
      handler: () => {
        addMessage('Continuar no WhatsApp', 'user');
        finishLead();
      }
    },
    { label: 'Começar de novo', value: 'reset', handler: () => {
      localStorage.removeItem(STORAGE_KEY);
      Object.assign(state, { source: detectSource(), name: '', flow: '', category: '', intent: '', postSale: '' });
      startBot();
    }}
  ]);
} else {
  startBot();
}

console.log('Elegance Cosméticos — assistente comercial carregado.');
console.log(`Instagram oficial configurado: ${instagramUser}`);
