# Imagens dos produtos

Use esta pasta para guardar imagens reais dos produtos da Elegance Cosméticos.

## Padrão recomendado

```text
assets/images/products/
├── malbec.png
├── eudora-rose.png
├── coffee-woman.png
└── delineador-pretolino.png
```

## Como conectar uma imagem ao produto

No arquivo:

```text
assets/js/products.js
```

Adicione o campo `image` no produto:

```js
{
  id: 'malbec',
  name: 'Malbec Desodorante Colônia 100ml',
  image: 'assets/images/products/malbec.png',
  cat: 'Masculino',
  tier: 'premium',
  price: 179.91,
  old: 209.90,
  desc: 'Fragrância masculina inesquecível.',
  keys: 'masculino perfume presente malbec premium'
}
```

## Recomendações

- Use imagens em `.png`, `.jpg` ou `.webp`.
- Evite imagens muito pesadas.
- Prefira fundo claro ou transparente.
- Nomeie arquivos sem acentos e sem espaços.
- Teste no celular antes de divulgar.
