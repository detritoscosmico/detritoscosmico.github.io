const products = [
  { id: 'eudora-rose', name: 'Eudora Rosé Eau de Parfum 75ml', cat: 'Feminino', tier: 'premium', price: 199.91, old: 244.90, desc: 'Chypre frutal luxuoso com acorde inspirado no espumante rosé, frutas vermelhas, rosa centifolia e madeiras densas.', keys: 'feminino perfume presente rose eudora luxo premium' },
  { id: 'malbec', name: 'Malbec Desodorante Colônia 100ml', cat: 'Masculino', tier: 'premium', price: 179.91, old: 209.90, desc: 'Fragrância masculina inesquecível, ideal para o homem sedutor e marcante.', keys: 'masculino perfume presente malbec premium' },
  { id: 'club6-kit', name: 'Comb Club 6 Prestige Pais/26', cat: 'Kits', tier: 'premium', price: 164.90, old: 241.79, desc: 'Combo masculino presenteável com excelente percepção de valor.', keys: 'kit masculino presente club prestige pais' },
  { id: 'egeo', name: 'Egeo Original Desodorante Colônia 90ml', cat: 'Feminino', tier: 'intermediario', price: 129.91, old: 164.90, desc: 'Fragrância divertida para acompanhar qualquer rotina.', keys: 'feminino perfume egeo intermediario presente' },
  { id: 'coffee', name: 'Coffee Woman Seduction Desodorante Colônia 100ml', cat: 'Feminino', tier: 'intermediario', price: 160.91, old: 229.90, desc: 'Fragrância feminina envolvente e marcante.', keys: 'feminino perfume coffee seduction intermediario' },
  { id: 'imensi', name: 'Imensi Desodorante Colônia 100ml', cat: 'Feminino', tier: 'intermediario', price: 159.90, old: 159.90, desc: 'Floral ambarado marcante para um horizonte de possibilidades.', keys: 'feminino perfume imensi floral' },
  { id: 'volpe-kit', name: 'Comb Volpe Pais/26', cat: 'Kits', tier: 'intermediario', price: 129.90, old: 178.80, desc: 'Kit masculino presenteável com bom custo-benefício.', keys: 'kit masculino presente volpe pais' },
  { id: 'delineador', name: 'Delineador de Olhos Líquido Pretolino 2,5ml', cat: 'Maquiagem', tier: 'economico', price: 30.90, old: 52.90, desc: 'Produto de entrada para maquiagem, prático e acessível.', keys: 'maquiagem delineador barato economico' },
  { id: 'batom-blush', name: 'Batom e Blush Multifuncional Vermelho Goji Berry 3,5g', cat: 'Maquiagem', tier: 'economico', price: 55.90, old: 72.90, desc: 'Produto multifuncional para boca e rosto.', keys: 'maquiagem batom blush economico' },
  { id: 'match-condicionador', name: 'Condicionador Match Escudo de Hidratação 280ml', cat: 'Cabelos', tier: 'economico', price: 34.90, old: 49.90, desc: 'Cuidado capilar diário com preço acessível.', keys: 'cabelo cabelos hidratacao match economico' },
  { id: 'sophie', name: 'Shimmer Splash Corpo e Cabelo Sophie Toy Story 110ml', cat: 'Feminino', tier: 'economico', price: 79.90, old: null, desc: 'Splash para corpo e cabelo, divertido e presenteável.', keys: 'feminino body splash sophie presente barato' },
  { id: 'club6-locao', name: 'Club 6 Prestige Loção Hidratante Corporal 200ml', cat: 'Masculino', tier: 'economico', price: 44.90, old: 52.99, desc: 'Hidratação intensa por 48h com potência oriental amadeirada.', keys: 'masculino hidratante club 6 economico' }
];

const best = ['eudora-rose', 'malbec', 'coffee', 'club6-kit'];
const offers = ['delineador', 'club6-kit', 'coffee', 'match-condicionador'];
