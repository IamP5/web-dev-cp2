const maiorDeIdade = window.confirm("Você possui mais de 18 anos?");

if (maiorDeIdade) {
  window.location.replace(window.location.href + "login");
} else {
  window.location.replace(window.location.href + "not-authorized");
}

setupWines();
setupWishList();
setupCart();
setupRecipes();

function setupWines() {
  let storedWines = JSON.parse(localStorage.getItem('wines'));

  if (!storedWines) {
    storedWines = [
      { "id": 1, "nome": "Chardonnay", "tipo": "Branco", "preco": 50, "descricao": "Chardonnay é um vinho branco clássico que exibe rica complexidade com notas de maçã verde, pêra e toques sutis de carvalho. Ideal para acompanhar pratos de frutos do mar ou uma seleção refinada de queijos." },
      { "id": 2, "nome": "Cabernet Sauvignon", "tipo": "Tinto", "preco": 60, "descricao": "Este robusto Cabernet Sauvignon destaca-se por seu perfil tânico e sabores de frutas negras maduras como cassis e ameixa, complementados por um elegante toque de cedro e tabaco. Perfeito para carnes vermelhas e queijos curados." },
      { "id": 3, "nome": "Merlot", "tipo": "Tinto", "preco": 45, "descricao": "Merlot é um vinho tinto suave e acessível com sabores de cereja, framboesa e um leve toque de ervas. A textura macia torna-o ideal para uma noite descontraída ou para acompanhar pratos de pasta." },
      { "id": 4, "nome": "Pinot Noir", "tipo": "Tinto", "preco": 55, "descricao": "Pinot Noir, conhecido por sua delicadeza, oferece aromas de morango e cereja com nuances de terra úmida e especiarias sutis. É perfeito para acompanhar aves ou um elegante prato de salmão." },
      { "id": 5, "nome": "Riesling", "tipo": "Branco", "preco": 40, "descricao": "Riesling é um vinho branco vibrante e aromático, conhecido por sua acidez cristalina e doçura sutil. Notas de limão e maçã verde são predominantes, fazendo dele um excelente par para comida asiática ou saladas frescas." },
      { "id": 6, "nome": "Sauvignon Blanc", "tipo": "Branco", "preco": 35, "descricao": "Sauvignon Blanc é um vinho branco refrescante com um toque de acidez. Apresenta sabores de maracujá, grama cortada e aspargos. Ideal para um dia quente ou para acompanhar frutos do mar." },
      { "id": 7, "nome": "Malbec", "tipo": "Tinto", "preco": 65, "descricao": "Malbec é um vinho tinto intenso e encorpado, com notas de ameixa, blackberry e chocolate. Uma escolha perfeita para churrascos ou pratos de carne robustos." },
      { "id": 8, "nome": "Syrah", "tipo": "Tinto", "preco": 50, "descricao": "Syrah oferece um paladar de sabores ricos como frutas negras, pimenta preta e um leve toque defumado. É um vinho tinto vigoroso que combina bem com carnes de caça e pratos condimentados." },
      { "id": 9, "nome": "Zinfandel", "tipo": "Tinto", "preco": 45, "descricao": "Zinfandel é conhecido por seu corpo robusto e sabores de frutas maduras como framboesa e cereja preta, com um toque de especiarias e pimenta. Ideal para acompanhar pratos de carne ou pizza." },
      { "id": 10, "nome": "Gewürztraminer", "tipo": "Branco", "preco": 55, "descricao": "Gewürztraminer é um vinho branco aromático com notas de lichia, rosas e especiarias. Sua doçura moderada o torna excelente para acompanhar pratos picantes ou sobremesas." },
      { "id": 11, "nome": "Sangiovese", "tipo": "Tinto", "preco": 60, "descricao": "Sangiovese é um vinho tinto vibrante e rústico, com sabores de cereja e figo, complementados por toques terrosos e taninos bem estruturados. Perfeito para acompanhar pratos italianos clássicos como massas e pizzas." },
      { "id": 12, "nome": "Tempranillo", "tipo": "Tinto", "preco": 40, "descricao": "Tempranillo é um vinho tinto espanhol tradicional com sabores de frutas vermelhas, tabaco e couro, oferecendo uma complexidade que harmoniza bem com tapas ou pratos de carne curada." },
      { "id": 13, "nome": "Grenache", "tipo": "Tinto", "preco": 50, "descricao": "Grenache é um vinho tinto frutado e especiado, com notas de morango, framboesa e um toque de especiarias doces. É leve o suficiente para frutos do mar, mas robusto o bastante para pratos de carne." },
      { "id": 14, "nome": "Viognier", "tipo": "Branco", "preco": 45, "descricao": "Viognier é um vinho branco floral e perfumado, com notas de pêssego, damasco e flores brancas. Sua riqueza o torna um ótimo complemento para pratos de peixe ou frango cremoso." },
      { "id": 15, "nome": "Moscato", "tipo": "Branco", "preco": 35, "descricao": "Moscato é um vinho branco leve e efervescente, com notas de pêssego e flor de laranjeira. Doce e refrescante, é perfeito como aperitivo ou com sobremesas leves." },
      { "id": 16, "nome": "Carmenere", "tipo": "Tinto", "preco": 55, "descricao": "Carmenere é um vinho tinto chileno distinto com sabores de frutas vermelhas maduras, especiarias e um toque herbáceo, ideal para acompanhar pratos à base de cordeiro ou vegetais grelhados." },
      { "id": 17, "nome": "Petit Verdot", "tipo": "Tinto", "preco": 60, "descricao": "Petit Verdot é um vinho tinto intenso e tânico, com notas profundas de frutas negras, violeta e um toque de couro. Adequado para envelhecimento, é excelente com carnes vermelhas ricas." },
      { "id": 18, "nome": "Chenin Blanc", "tipo": "Branco", "preco": 40, "descricao": "Chenin Blanc é um vinho branco versátil com uma gama de estilos de seco a doce. Notas de maçã verde, mel e uma acidez vibrante fazem dele um parceiro perfeito para pratos de frutos do mar ou saladas." },
      { "id": 19, "nome": "Gruner Veltliner", "tipo": "Branco", "preco": 50, "descricao": "Gruner Veltliner é um vinho branco austríaco com nuances de lima, pimenta branca e maçã verde. Sua acidez refrescante e perfil picante o tornam ideal para pratos asiáticos ou saladas frescas." },
      { "id": 20, "nome": "Nebbiolo", "tipo": "Tinto", "preco": 65, "descricao": "Nebbiolo é um vinho tinto poderoso e tânico, conhecido por seus sabores complexos de cereja, alcatrão e rosas. Um excelente candidato para envelhecimento, harmoniza maravilhosamente com trufas e pratos de carne." },
      { "id": 21, "nome": "Mourvedre", "tipo": "Tinto", "preco": 45, "descricao": "Mourvedre é um vinho tinto encorpado com notas de cereja, amora e um toque animal. Robusto, é ideal para combinar com pratos de caça ou comidas condimentadas." },
      { "id": 22, "nome": "Albarino", "tipo": "Branco", "preco": 55, "descricao": "Albarino é um vinho branco espanhol refrescante com sabores vibrantes de grapefruit, pêssego e flores brancas. É delicioso sozinho ou como acompanhamento de frutos do mar." },
      { "id": 23, "nome": "Cinsault", "tipo": "Tinto", "preco": 40, "descricao": "Cinsault é um vinho tinto leve e frutado, com notas de framboesa e um toque floral. Excelente para beber jovem, combina bem com pratos leves como saladas ou pratos de peixe." },
      { "id": 24, "nome": "Verdejo", "tipo": "Branco", "preco": 50, "descricao": "Verdejo é um vinho branco espanhol aromático, com notas de melão, pêra e ervas. Sua acidez viva o torna um excelente par para tapas ou frutos do mar." },
      { "id": 25, "nome": "Gamay", "tipo": "Tinto", "preco": 45, "descricao": "Gamay é um vinho tinto leve e frutado, famoso por seu caráter jovial e sabores de cereja vermelha e framboesa. É o vinho ideal para um piquenique ou uma refeição casual." },
      { "id": 26, "nome": "Sangiovese Grosso", "tipo": "Tinto", "preco": 60, "descricao": "Sangiovese Grosso é uma variação mais robusta do Sangiovese, oferecendo sabores intensos de cereja escura e especiarias. Este vinho tânico é perfeito para acompanhar carnes grelhadas e queijos maduros." },
      { "id": 27, "nome": "Garganega", "tipo": "Branco", "preco": 35, "descricao": "Garganega é um vinho branco italiano sutil com notas de amêndoa, cidra e florais. Leve e refrescante, é ideal para acompanhar pratos de peixe ou como aperitivo." },
      { "id": 28, "nome": "Montepulciano", "tipo": "Tinto", "preco": 55, "descricao": "Montepulciano é um vinho tinto italiano de cor profunda, com sabores ricos de frutas maduras e um toque de especiarias. Ótimo para acompanhar pratos robustos de pasta e carnes." },
      { "id": 29, "nome": "Vermentino", "tipo": "Branco", "preco": 40, "descricao": "Vermentino é um vinho branco aromático e refrescante com notas de limão, ervas e uma pitada de salinidade. Perfeito para dias quentes ou para acompanhar pratos de frutos do mar." },
      { "id": 30, "nome": "Barbera", "tipo": "Tinto", "preco": 50, "descricao": "Barbera é um vinho tinto italiano com alta acidez e sabores de cereja e ameixa. Sua vivacidade o torna ideal para cortar a gordura de pratos ricos e carnes." },
      { "id": 31, "nome": "Cortese", "tipo": "Branco", "preco": 45, "descricao": "Cortese é um vinho branco italiano elegante, conhecido por sua acidez nítida e sabores limpos de limão e maçã verde. Excelente com pratos de peixe ou como refrescante aperitivo." },
      { "id": 32, "nome": "Negroamaro", "tipo": "Tinto", "preco": 60, "descricao": "Negroamaro é um vinho tinto do sul da Itália com corpo médio, oferecendo sabores intensos de frutas escuras, tabaco e um toque terroso. É um excelente acompanhamento para pratos de carne e queijos curados." },
      { "id": 33, "nome": "Falanghina", "tipo": "Branco", "preco": 35, "descricao": "Falanghina é um vinho branco italiano vibrante, com notas de citrinos e florais. Sua acidez fresca e perfil aromático o tornam um excelente par para saladas ou pratos de mariscos." },
      { "id": 34, "nome": "Bonarda", "tipo": "Tinto", "preco": 55, "descricao": "Bonarda é um vinho tinto argentino, suculento e frutado, com sabores de ameixa, cereja e uma pitada de especiarias. Sua suavidade o torna fácil de beber e versátil com alimentos." },
      { "id": 35, "nome": "Trebbiano", "tipo": "Branco", "preco": 40, "descricao": "Trebbiano é um vinho branco italiano leve e fresco, com notas de frutas cítricas e uma acidez equilibrada. É perfeito como aperitivo ou acompanhamento de frutos do mar e saladas." }
    ]
  }

  localStorage.setItem('wines', JSON.stringify(storedWines));
}

function setupWishList() {
  let storedWishList = JSON.parse(localStorage.getItem('wish-list'));

  if (!storedWishList) {
    storedWishList = [];
  }

  localStorage.setItem('wish-list', JSON.stringify(storedWishList));
}

function setupCart() {
  let storedCart = JSON.parse(localStorage.getItem('cart'));

  if (!storedCart) {
    storedCart = { items: [], price: 0 };
  }

  localStorage.setItem('cart', JSON.stringify(storedCart));
}

function setupRecipes() {
  let storedRecipes = JSON.parse(localStorage.getItem('recipes'));

  if (!storedRecipes) {
    storedRecipes = [
      {
        "wineType": "Branco",
        "recipes": [
          {
            "name": "Camarão ao Alho e Óleo",
            "ingredients": ["camarão", "alho", "azeite de oliva", "salsinha", "sal", "pimenta"],
            "preparation": "Refogue o alho no azeite, adicione os camarões e tempere. Cozinhe até dourar e finalize com salsinha.",
            "description": "Um prato simples, mas cheio de sabor, que combina perfeitamente com a acidez crocante de um vinho branco, realçando os sabores delicados do camarão."
          },
          {
            "name": "Salada de Frango com Manga",
            "ingredients": ["peito de frango", "manga", "folhas verdes", "vinagrete"],
            "preparation": "Grelhe o frango e corte em tiras. Misture com manga picada e folhas verdes. Tempere com vinagrete.",
            "description": "A doçura da manga e o sabor do frango grelhado complementam as notas frutadas de um vinho branco, resultando em uma refeição refrescante."
          },
          {
            "name": "Risoto de Limão Siciliano",
            "ingredients": ["arroz arbório", "caldo de legumes", "limão siciliano", "queijo parmesão", "manteiga", "vinho branco"],
            "preparation": "Refogue o arroz no vinho branco, adicione o caldo gradualmente. Incorpore raspas de limão e finalize com parmesão e manteiga.",
            "description": "Este cremoso risoto com um sabor marcante de limão combina maravilhosamente com um vinho branco encorpado, equilibrando a riqueza do prato."
          }
        ]
      },
      {
        "wineType": "Tinto",
        "recipes": [
          {
            "name": "Bife de Chorizo",
            "ingredients": ["bife de chorizo", "sal grosso", "pimenta do reino"],
            "preparation": "Tempere o bife com sal e pimenta. Grelhe até o ponto desejado.",
            "description": "Os sabores robustos do bife de chorizo são realçados pela estrutura tânica de um vinho tinto, proporcionando uma experiência gastronômica intensa."
          },
          {
            "name": "Massa ao Molho de Trufas",
            "ingredients": ["massa de sua escolha", "trufas negras", "creme de leite", "manteiga", "queijo parmesão"],
            "preparation": "Cozinhe a massa al dente. Em uma panela, derreta a manteiga, adicione o creme de leite e as trufas raladas. Misture a massa e finalize com parmesão.",
            "description": "Um prato luxuoso que requer um vinho tinto igualmente sofisticado para complementar os sabores ricos e terrosos das trufas."
          },
          {
            "name": "Ragu de Cordeiro",
            "ingredients": ["cordeiro desfiado", "tomates pelados", "vinho tinto", "cebola", "alho", "cenoura", "alecrim"],
            "preparation": "Refogue a cebola e o alho, adicione o cordeiro e o vinho tinto. Incorpore os tomates e a cenoura. Cozinhe lentamente e adicione o alecrim.",
            "description": "Os sabores profundos e saborosos do ragu de cordeiro combinam perfeitamente com um vinho tinto encorpado, realçando tanto a refeição quanto o vinho."
          }
        ]
      }
    ]

    localStorage.setItem('recipes', JSON.stringify(storedRecipes));
  }
}
