# Elegance Cosméticos

Site comercial da **Elegance Cosméticos**.

## Posicionamento

**Sua Beleza. Seu Poder.**

Identidade futurista, vibrante e premium.

## Canais confirmados

- Instagram: **@elegancecosmeticosbr**
- WhatsApp comercial: **+55 31 99517-0249**
- Site: **https://detritoscosmico.github.io/elegance-cosmeticos/**

## Status do projeto

### ELEG-BOT-001 — Captação e qualificação

**IMPLEMENTADO**

- identifica origem do lead;
- recebe links rastreáveis;
- qualifica intenção e categoria;
- prepara mensagem;
- transfere para o WhatsApp;
- inclui fluxo de pós-venda;
- mantém retomada local no navegador.

### ELEG-BOT-002 — Catálogo e base comercial

**IMPLEMENTADO**

A vitrine pública usa somente produtos que passaram pelo cruzamento de:

- identificação;
- preço cadastrado;
- estoque positivo na fonte operacional mais recente;
- material visual correspondente.

Produtos atualmente exibidos:

- **90219 — Cuide-se Bem Deleite Caramelizado Body Splash 200ml**
- **75792 — Floratta Red Desodorante Colônia 75ml**

A disponibilidade é reconfirmada no WhatsApp antes do fechamento.

## Links de campanha

Instagram:

https://detritoscosmico.github.io/elegance-cosmeticos/?origem=instagram

Facebook:

https://detritoscosmico.github.io/elegance-cosmeticos/?origem=facebook

Acesso direto:

https://detritoscosmico.github.io/elegance-cosmeticos/

## Estrutura

```txt
/elegance-cosmeticos
├── index.html
├── assets/
│   └── produtos/
│       ├── 90219-deleite-caramelizado-200ml.jpg
│       └── 75792-floratta-red-75ml.jpg
├── css/
│   └── style.css
├── data/
│   └── produtos-liberados.json
├── js/
│   ├── script.js
│   └── catalogo.js
├── docs/
│   ├── ELEG-BOT-001_FLUXO_COMERCIAL.md
│   └── ELEG-BOT-002_CATALOGO_BASE_COMERCIAL.md
└── README.md
```

## Regras comerciais

Não exibir como oferta liberada qualquer produto sem evidência suficiente de:

1. identificação;
2. preço;
3. estoque;
4. material visual.

Não inventar promoções, descontos, estoque, vendas ou benefícios.

## Limitações atuais

- o estoque do site não é em tempo real;
- o site não grava leads em CRM central;
- não há WhatsApp Business Platform / Cloud API;
- não há Instagram Messaging API;
- não há Facebook Messenger API;
- não há checkout ou pagamento integrado;
- produtos do pedido 531077126 permanecem bloqueados enquanto o recebimento físico não estiver confirmado na base.

## Próxima tarefa

**ELEG-BOT-003 — CRM E RASTREAMENTO DE LEADS**

Registrar origem, produto de interesse, etapa e conversão de forma centralizada e auditável, preservando privacidade e sem armazenar credenciais no repositório.
