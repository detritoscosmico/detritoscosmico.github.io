# ELEG-BOT-002 — Catálogo e Base Comercial

## Status

**BLOQUEADO — AGUARDANDO CONFIRMAÇÃO DE PREÇOS**

Data da revisão: 01/10/2026.

## Objetivo

Cruzar as fontes oficiais disponíveis da Elegance Cosméticos e permitir exibição pública somente de produtos que tenham, simultaneamente:

1. identificação confirmada;
2. estoque confirmado;
3. preço confirmado;
4. material visual suficiente.

## Fontes cruzadas

### ELEG_CAT_001_Catalogo_Mestre_Elegance_Cosmeticos_v1.0.xlsx

Resumo encontrado na fonte:

- 7 produtos confirmados;
- 7 com estoque confirmado;
- 0 com preço confirmado;
- 0 prontos para venda;
- 6 com imagem disponível;
- orientação explícita: nenhum produto está liberado para venda até a confirmação dos preços atuais.

A própria aba de referências registra que a tabela de preços histórica não foi importada porque é anterior e contém divergências de custos em parte dos produtos.

### Elegance_Cosmeticos_PRO_3.0.xlsx

Na aba Produtos:

- os 7 produtos cadastrados aparecem com estoque atual registrado;
- os campos de preço de venda estão vazios para os produtos comerciais;
- a Amostra Velvet Soul aparece com preço 0 e não constitui produto comercial liberado.

### Tabela_Preco_Parcelamento_Elegance_Cosmeticos.xlsx

A planilha contém preços históricos e simulações.

Ela não foi usada como fonte de preço vigente porque o Catálogo Mestre determina explicitamente que esses preços não foram importados e que os preços atuais precisam ser confirmados antes de anunciar.

## Resultado do cruzamento

### Produtos liberados para conteúdo/oferta pública

**0**

### Produtos bloqueados por preço não confirmado

- 84387 — Malbec Desodorante Colônia V6 100ml;
- 75792 — Floratta Red Desodorante Colônia 75ml;
- 48281 — Nativa SPA Loção Hidratante Corporal Ameixa Negra 400ml;
- 48060 — Lily Creme Desodorante Hidratante Acetinado Corpo 250g;
- 90219 — Cuide-se Bem Body Splash Deleite Caramelizado 200ml;
- 59516 — Refil Nativa SPA Loção Hidratante Corporal Ameixa Negra 350ml.

### Produto não confirmado comercialmente

- 89772 — Amostra Velvet Soul 3ml.

A amostra também não possui material visual localizado na referência do Catálogo Mestre e depende de definição sobre seu uso comercial.

## Divergência corrigida no GitHub

A versão anterior do site continha dois produtos marcados como **LIBERADO PARA CONTEÚDO** com preços publicados.

Essa classificação não é sustentada pelas fontes atuais localizadas no projeto.

Correções executadas:

- base pública de produtos liberados zerada;
- vitrine pública bloqueada;
- preços removidos da oferta;
- site alterado para informar que o catálogo está em validação;
- regra defensiva adicionada ao carregador do catálogo.

## Estado do site após a correção

O site continua capaz de:

- captar leads;
- identificar origem;
- qualificar categoria e intenção;
- transferir o atendimento para o WhatsApp;
- receber solicitações de pós-venda.

O site **não apresenta produto específico como oferta** enquanto não existir preço vigente confirmado.

## Critério para liberar um produto

Um produto só poderá entrar em `data/produtos-liberados.json` quando houver evidência suficiente dos quatro critérios:

`IDENTIFICAÇÃO + ESTOQUE + PREÇO + MATERIAL VISUAL`

## Próxima ação necessária

Executar **ELEG-PRECO-002 — CONFIRMAÇÃO DE PREÇOS PARA LIBERAÇÃO SOCIAL**.

Prioridade:

- 84387 — Malbec;
- 75792 — Floratta Red;
- 48281 — Nativa SPA Ameixa Negra 400ml;
- 48060 — Lily Creme Acetinado 250g;
- 90219 — Body Splash Deleite Caramelizado;
- 59516 — Refil Nativa SPA Ameixa Negra 350ml.

Nenhum preço divergente deve ser escolhido automaticamente.
