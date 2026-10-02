# ELEG-BOT-001 — Fluxo Comercial da Elegance Cosméticos

## Status

**IMPLEMENTADO NO SITE — V1.0**

Este documento descreve o assistente comercial publicado no site da Elegance Cosméticos.

## Objetivo

O assistente foi criado para:

- captar leads vindos do Instagram, Facebook ou acesso direto;
- identificar a intenção da cliente;
- direcionar a categoria de interesse;
- preparar uma mensagem estruturada;
- transferir a conversa para o WhatsApp comercial;
- organizar solicitações de pós-venda;
- permitir retomada de atendimento no mesmo navegador.

## Regras de segurança comercial

O bot **não**:

- inventa preços;
- inventa promoções;
- inventa estoque;
- promete disponibilidade;
- confirma pedido;
- confirma pagamento;
- confirma entrega;
- publica catálogo inexistente.

Toda oferta comercial real continua dependendo de confirmação humana ou de uma futura integração com a base oficial de produtos.

## Fluxo principal

### 1. Entrada

Origem reconhecida:

- Instagram;
- Facebook;
- WhatsApp;
- acesso direto;
- site.

A origem pode ser informada pela URL usando:

`?origem=instagram`

ou

`?utm_source=instagram`

### 2. Menu inicial

A cliente escolhe entre:

- Quero comprar;
- Quero receber opções;
- Pós-venda;
- Falar com atendente.

### 3. Qualificação

Para compra ou pesquisa, o fluxo coleta:

- categoria;
- intenção;
- nome.

Categorias disponíveis no direcionamento:

- Perfumaria;
- Skincare;
- Maquiagem;
- Cabelos;
- Preciso de orientação.

### 4. Transferência

O sistema monta uma mensagem com:

- nome;
- origem;
- categoria;
- necessidade.

A mensagem é aberta no WhatsApp comercial:

**+55 31 99517-0249**

### 5. Recuperação

O atendimento iniciado é salvo apenas no armazenamento local do navegador.

Quando a cliente retorna pelo mesmo navegador, o sistema pode oferecer retomada.

Nenhum lead é enviado para banco de dados externo nesta versão.

## Pós-venda

O fluxo separa:

- pedido recebido;
- pedido ainda não recebido;
- problema com pedido;
- recompra.

O bot apenas prepara a solicitação e transfere para o atendimento humano.

## Links rastreáveis

### Instagram

https://detritoscosmico.github.io/elegance-cosmeticos/?origem=instagram

### Facebook

https://detritoscosmico.github.io/elegance-cosmeticos/?origem=facebook

### Acesso direto

https://detritoscosmico.github.io/elegance-cosmeticos/

## Limitações atuais

Esta versão é um **assistente web de pré-atendimento**.

Ainda não existe integração confirmada com:

- WhatsApp Business Platform / Cloud API;
- Instagram Messaging API;
- Facebook Messenger API;
- CRM externo;
- catálogo oficial sincronizado;
- automação de mensagens após 24 horas;
- gateway de pagamento.

Essas integrações exigem configuração e credenciais próprias das plataformas.

## Próxima etapa recomendada

**ELEG-BOT-002 — CATÁLOGO E BASE COMERCIAL**

Cruzar somente dados confirmados de catálogo, estoque, preço e materiais visuais e liberar para o bot apenas produtos com:

**estoque confirmado + preço confirmado + identificação confirmada + material suficiente**.
