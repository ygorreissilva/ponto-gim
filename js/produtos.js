/* ==========================================================
   Ponto Gim | DADOS do catálogo
   Para adicionar, trocar ou remover um item, edite só este arquivo.
   Não precisa mexer no HTML.

   Cada produto tem:
     nome       título do cartão
     categoria  precisa ser igual a um "id" da lista CATEGORIAS
     descricao  frase curta
     imagem     nome do arquivo dentro de img/produtos/ (se não existir, o cartão usa só a cor)
     preco      deixe '' para mostrar "Consulte o valor". Ou escreva, ex.: 'A partir de R$ 35,00'
   ========================================================== */

const CATEGORIAS = [
  { id: 'canecas',     nome: 'Canecas',                bg: '#7b3ff2', fg: '#ffffff' },
  { id: 'camisetas',   nome: 'Camisetas',              bg: '#ff8a1f', fg: '#120d1f' },
  { id: 'kits',        nome: 'Kits de presente',       bg: '#ff3d8b', fg: '#120d1f' },
  { id: 'capinhas',    nome: 'Capinhas e chaveiros',   bg: '#2e6bff', fg: '#ffffff' },
  { id: 'copos',       nome: 'Copos e chopp',          bg: '#ffc23d', fg: '#120d1f' },
  { id: 'papelaria',   nome: 'Papelaria',              bg: '#2a2045', fg: '#ffffff' },
  { id: 'corporativo', nome: 'Para empresas',          bg: '#e4daf7', fg: '#120d1f' },
];

const PRODUTOS = [
  {
    nome: 'Caneca com foto',
    categoria: 'canecas',
    descricao: 'Uma ou várias fotos na caneca, com ou sem frase.',
    imagem: 'caneca-foto.jpg',
    preco: '',
  },
  {
    nome: 'Caneca com nome ou frase',
    categoria: 'canecas',
    descricao: 'Do jeito que você escolher: cor, letra e texto.',
    imagem: 'caneca-frase.jpg',
    preco: '',
  },
  {
    nome: 'Caneca de profissão',
    categoria: 'canecas',
    descricao: 'Homenagem para professores, advogados, médicos e todo mundo que merece.',
    imagem: 'caneca-profissao.jpg',
    preco: '',
  },
  {
    nome: 'Camiseta personalizada',
    categoria: 'camisetas',
    descricao: 'Com foto, nome ou arte. Para família, turma ou time.',
    imagem: 'camiseta.jpg',
    preco: '',
  },
  {
    nome: 'Camisetas para eventos',
    categoria: 'camisetas',
    descricao: 'Para festas, viagens, excursões e comemorações em grupo.',
    imagem: 'camiseta-evento.jpg',
    preco: '',
  },
  {
    nome: 'Kit de presente',
    categoria: 'kits',
    descricao: 'Itens personalizados montados e embrulhados para presentear.',
    imagem: 'kit-presente.jpg',
    preco: '',
  },
  {
    nome: 'Kit para datas especiais',
    categoria: 'kits',
    descricao: 'Dia das Mães, Dia dos Pais, Namorados e mais. Monte do seu jeito.',
    imagem: 'kit-datas.jpg',
    preco: '',
  },
  {
    nome: 'Capinha com foto',
    categoria: 'capinhas',
    descricao: 'A foto que você mais gosta, com impressão de alta definição.',
    imagem: 'capinha.jpg',
    preco: '',
  },
  {
    nome: 'Chaveiro com foto',
    categoria: 'capinhas',
    descricao: 'Lembrança pequena que vai junto para todo lugar.',
    imagem: 'chaveiro.jpg',
    preco: '',
  },
  {
    nome: 'Caneca de chopp',
    categoria: 'copos',
    descricao: 'Para o churrasco, o bar de casa ou o presente do pai.',
    imagem: 'caneca-chopp.jpg',
    preco: '',
  },
  {
    nome: 'Copo personalizado',
    categoria: 'copos',
    descricao: 'Copos e copos térmicos com nome, frase ou arte.',
    imagem: 'copo.jpg',
    preco: '',
  },
  {
    nome: 'Impressões e gráfica rápida',
    categoria: 'papelaria',
    descricao: 'Para quando você precisa do serviço pronto no mesmo dia.',
    imagem: 'grafica-rapida.jpg',
    preco: '',
  },
  {
    nome: 'Brindes com a sua logo',
    categoria: 'corporativo',
    descricao: 'Canecas, canetas, bolsas térmicas e kits para clientes e equipe.',
    imagem: 'brindes.jpg',
    preco: '',
  },
  {
    nome: 'Uniformes e camisetas de equipe',
    categoria: 'corporativo',
    descricao: 'Camisetas com a identidade da sua empresa, em quantidade.',
    imagem: 'uniformes.jpg',
    preco: '',
  },
];
