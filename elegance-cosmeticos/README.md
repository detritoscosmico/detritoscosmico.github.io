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

**BLOQUEADO — AGUARDANDO CONFIRMAÇÃO DE PREÇOS**

Cruzamento atual das fontes oficiais localizadas:

- 7 produtos confirmados;
- 7 com estoque confirmado;
- 6 com imagem disponível;
- 0 com preço confirmado;
- 0 produtos prontos para venda.

Por essa razão, a vitrine pública não exibe produtos específicos nem preços.

A tabela histórica de preços não é tratada como preço vigente porque o Catálogo Mestre registra divergências e exige nova confirmação antes da divulgação.

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
2. estoque;
3. preço;
4. material visual.

Não inventar promoções, descontos, estoque, vendas ou benefícios.

## Próxima tarefa

**ELEG-PRECO-002 — CONFIRMAÇÃO DE PREÇOS PARA LIBERAÇÃO SOCIAL**

Cruzar as fontes atuais, identificar divergências e separar:

- PREÇO CONFIRMADO;
- DIVERGÊNCIA DE PREÇO;
- PREÇO NÃO CONFIRMADO;
- DADO NECESSÁRIO.

Nenhum preço divergente deve ser escolhido sem aprovação.
