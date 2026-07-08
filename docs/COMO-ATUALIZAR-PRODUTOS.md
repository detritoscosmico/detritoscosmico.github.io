# Como atualizar produtos — Elegance Cosméticos

O catálogo da loja fica no arquivo:

```text
assets/js/products.js
```

## Como adicionar produto novo

Dentro da lista `products`, adicione um item seguindo este modelo:

```js
{
  id: 'nome-curto-sem-espaco',
  name: 'Nome completo do produto',
  cat: 'Feminino',
  tier: 'premium',
  price: 199.90,
  old: 249.90,
  desc: 'Descrição curta e vendedora do produto.',
  keys: 'palavras chave produto perfume presente luxo'
}
```

## Campos obrigatórios

- `id`: identificador único, sem espaço e sem acento.
- `name`: nome completo do produto.
- `cat`: categoria exibida no site.
- `tier`: nível de preço: `premium`, `intermediario` ou `economico`.
- `price`: preço atual.
- `old`: preço antigo ou `null`.
- `desc`: descrição curta.
- `keys`: palavras que ajudam a Suzy Beauty a recomendar o produto.

## Categorias aceitas hoje

- `Feminino`
- `Masculino`
- `Kits`
- `Cabelos`
- `Maquiagem`

## Como colocar produto em destaque

No mesmo arquivo existem duas listas:

```js
const best = ['eudora-rose', 'malbec'];
const offers = ['delineador', 'coffee'];
```

- `best`: produtos mais vendidos.
- `offers`: ofertas da semana.

Coloque o `id` do produto dentro da lista desejada.

## Checklist antes de publicar

- [ ] O `id` é único?
- [ ] O preço está correto?
- [ ] A categoria existe?
- [ ] O produto aparece no catálogo?
- [ ] O botão do WhatsApp abre corretamente?
- [ ] A Suzy recomenda o produto quando a palavra-chave é pesquisada?
