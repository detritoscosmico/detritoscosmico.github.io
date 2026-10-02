# ELEG-BOT-002 — Catálogo e Base Comercial

## Status

**IMPLEMENTADO NO SITE — V1.0**

Data da execução: 01/10/2026.

## Objetivo

Cruzar as fontes operacionais da Elegance Cosméticos e permitir exibição pública somente de produtos que tenham, simultaneamente:

1. identificação coerente;
2. preço cadastrado e corroborado;
3. registro de estoque positivo na fonte operacional mais recente;
4. material visual correspondente ao produto.

A vitrine não transforma o estoque em tempo real. A disponibilidade é reconfirmada no fechamento pelo WhatsApp.

## Fontes usadas

### Fonte operacional principal

**Elegance_Cosmeticos_PRO_3.0.xlsm**

- última modificação consultada: 26/09/2026;
- usada para código, produto, preço cadastrado e estoque atual;
- pedido 531077126 ainda aparece como **Em transporte**.

### Fonte de catálogo

**ELEG_CAT_001_Catalogo_Mestre_Elegance_Cosmeticos_v1.0.xlsx**

- usada para corroborar identificação, preço e existência de material visual;
- data-base interna do catálogo: 15/09/2026;
- por ser anterior à PRO 3.0, não foi usada como fonte final do estoque.

### Materiais visuais

Os arquivos foram localizados no Google Drive e inspecionados visualmente antes de entrar no site.

## Produtos liberados para conteúdo

### SKU 90219

**Cuide-se Bem Deleite Caramelizado Body Splash 200ml — O Boticário**

- preço cadastrado na PRO 3.0: **R$ 94,90**;
- estoque atual registrado na PRO 3.0: **1**;
- catálogo mestre também registra preço de R$ 94,90 e material visual;
- foto física inspecionada mostra o frasco Cuide-se Bem Deleite Caramelizado de 200 ml;
- status aplicado: **LIBERADO PARA CONTEÚDO**;
- fechamento: confirmar disponibilidade atual antes de concluir a venda.

Arquivo publicado no repositório:

`assets/produtos/90219-deleite-caramelizado-200ml.jpg`

### SKU 75792

**Floratta Red Desodorante Colônia 75ml — O Boticário**

- preço cadastrado na PRO 3.0: **R$ 174,90**;
- estoque atual registrado na PRO 3.0: **1**;
- catálogo mestre também registra preço de R$ 174,90 e material visual;
- imagem inspecionada mostra Floratta Red, embalagem de 75 ml;
- existe venda histórica por R$ 147,90; esse valor histórico não foi reaproveitado como preço atual;
- status aplicado: **LIBERADO PARA CONTEÚDO**;
- fechamento: confirmar disponibilidade e condições atuais antes de concluir a venda.

Arquivo publicado no repositório:

`assets/produtos/75792-floratta-red-75ml.jpg`

## Produtos não liberados nesta etapa

### Estoque registrado, mas sem material visual SKU-específico validado para publicação

- 56789 — Eudora Hair-Plastia Combo Shampoo + Condicionador;
- 48282 — Nativa SPA Ameixa Loção Hidratante 400ml;
- 59436 — Egeo Choc High Desodorante Colônia 90ml;
- 19734 — Thaty Desodorante Colônia 100ml;
- 84113 — Kit Presente Floratta Blue.

Uma foto genérica associada à busca de Hair-Plastia foi localizada, mas não foi tratada como material SKU-específico aprovado sem validação adicional.

### Material visual conhecido, mas estoque atual registrado como zero

- 59516 — Refil Nativa SPA Ameixa Negra 350ml;
- 48281 — Nativa SPA Ameixa Negra Loção Hidratante 400ml;
- 48060 — Lily Creme Acetinado Hidratante Corporal 250g;
- 84387 — Malbec Desodorante Colônia 100ml.

### Pedido 531077126

Os itens 1630 e 73607 aparecem no pedido 531077126, porém a própria PRO 3.0 ainda registra o pedido como **Em transporte**.

Consequência:

- não foram liberados como estoque disponível;
- não foram colocados na vitrine;
- o estoque só deve ser movimentado após confirmação física do recebimento.

## Implementação no GitHub

Criados/adicionados:

```text
elegance-cosmeticos/
├── assets/
│   └── produtos/
│       ├── 90219-deleite-caramelizado-200ml.jpg
│       └── 75792-floratta-red-75ml.jpg
├── data/
│   └── produtos-liberados.json
├── js/
│   └── catalogo.js
└── docs/
    └── ELEG-BOT-002_CATALOGO_BASE_COMERCIAL.md
```

A página principal carrega a base JSON e apresenta apenas os produtos liberados.

## Regras aplicadas no site

- nenhuma promoção foi inventada;
- nenhum desconto foi aplicado;
- quantidades não são usadas como argumento de urgência;
- o preço aparece como preço cadastrado na base;
- a data-base é mostrada;
- o botão comercial solicita confirmação de disponibilidade;
- produtos bloqueados não aparecem na vitrine.

## Situação da etapa

### Concluído

- cruzamento da PRO 3.0 com Catálogo Mestre;
- validação visual dos dois produtos aptos;
- publicação das imagens no GitHub;
- criação da base comercial em JSON;
- criação da vitrine;
- CTA com mensagem de WhatsApp contendo produto, SKU e preço de referência.

### Continua pendente

- reconciliação física do estoque do pedido 531077126;
- materiais visuais dos demais produtos com estoque;
- sincronização automática entre PRO 3.0 e o site;
- estoque em tempo real;
- integração oficial com WhatsApp Business Platform, Instagram Messaging e Facebook Messenger.

## Próxima tarefa

**ELEG-BOT-003 — CRM E RASTREAMENTO DE LEADS**

Objetivo: registrar origem, produto de interesse, etapa do funil e conversão sem coletar dados desnecessários e sem depender apenas do armazenamento local do navegador.
