const translations: Record<string, string> = {
  a: "um",
  an: "um",
  and: "e",
  or: "ou",
  apple: "maca",
  banana: "banana",
  bread: "pao",
  burger: "hamburguer",
  coconut: "coco",
  cold: "gelado",
  coffee: "cafe",
  creamy: "cremoso",
  crispy: "crocante",
  tea: "cha",
  juice: "suco",
  water: "agua",
  lemonade: "limonada",
  like: "gostar",
  drink: "beber",
  eat: "comer",
  fresh: "fresco",
  hot: "quente",
  iced: "gelado",
  ice: "gelo",
  natural: "natural",
  pasta: "macarrao",
  pancakes: "panquecas",
  popcorn: "pipoca",
  refreshing: "refrescante",
  salty: "salgado",
  smoothie: "vitamina",
  soda: "refrigerante",
  soft: "macio",
  spicy: "picante",
  sparkling: "com gas",
  sushi: "sushi",
  sweet: "doce",
  tasty: "saboroso",
  warm: "morno",
  milk: "leite",
  pizza: "pizza",
  salad: "salada",
  chicken: "frango",
  fish: "peixe",
  rice: "arroz",
  soup: "sopa",
  cake: "bolo",
  fruit: "fruta",
  vegetables: "vegetais",
  chocolate: "chocolate",
  milkshake: "milk-shake",
  beer: "cerveja",
  bacon: "bacon",
  lesson: "aula",
  routine: "rotina",
  routines: "rotinas",
  homework: "tarefa de casa",
  grammar: "gramatica",
  vocabulary: "vocabulario",
  verbs: "verbos",
  wine: "vinho",
  meeting: "reuniao",
  report: "relatorio",
  email: "email",
  call: "ligacao",
  break: "pausa",
  lunch: "almoco",
  task: "tarefa",
  project: "projeto",
  deadline: "prazo",
  colleague: "colega",
  boss: "chefe",
  office: "escritorio",
  computer: "computador",
  phone: "telefone",
  desk: "mesa",
  chair: "cadeira",
  document: "documento",
  presentation: "apresentacao",
  hobby: "hobby",
  sport: "esporte",
  movie: "filme",
  book: "livro",
  music: "musica",
  travel: "viagem",
  restaurant: "restaurante",
  park: "parque",
  gym: "academia",
  weekend: "fim de semana",
  holiday: "feriado",
  friend: "amigo",
  family: "familia",
  car: "carro",
  house: "casa",
  garden: "jardim",
  pet: "animal de estimacao",
  smartphone: "celular",
  game: "jogo",
  question: "pergunta",
  answer: "resposta",
  mistake: "erro",
  solution: "solucao",
  problem: "problema",
  idea: "ideia",
  plan: "plano",
  goal: "meta",
  result: "resultado",
  feedback: "feedback",
  training: "treinamento",
  skill: "habilidade",
  experience: "experiencia",
  knowledge: "conhecimento",
  ability: "capacidade",
  team: "equipe",
  leader: "lider",
  customer: "cliente",
  supplier: "fornecedor",
  teacher: "professor",
  engineer: "engenheiro",
  doctor: "medico",
  lawyer: "advogado",
  manager: "gerente",
  designer: "designer",
  programmer: "programador",
  student: "estudante",
  nurse: "enfermeiro",
  city: "cidade",
  weather: "clima",
  beach: "praia",
  mountain: "montanha",
  forest: "floresta",
  river: "rio",
  country: "pais",
  school: "escola",
  hospital: "hospital",
  supermarket: "supermercado",
  bank: "banco",
  museum: "museu",
  theater: "teatro",
  stadium: "estadio",
  airport: "aeroporto",
  station: "estacao",
  story: "historia",
  accident: "acidente",
  celebration: "celebracao",
  festival: "festival",
  ceremony: "cerimonia",
  tourist: "turista",
  local: "morador local",
  market: "mercado",
  guide: "guia",
  monument: "monumento",
  bridge: "ponte",
  future: "futuro",
  economy: "economia",
  technology: "tecnologia",
  company: "empresa",
  product: "produto",
  service: "servico",
  price: "preco",
  competition: "competicao",
  trend: "tendencia",
  invention: "invencao",
  robot: "robo",
  energy: "energia",
  transport: "transporte",
  health: "saude",
  education: "educacao",
  lifestyle: "estilo de vida",
  decision: "decisao",
  promise: "promessa",
  offer: "oferta",
  prediction: "previsao",
  intention: "intencao",
  schedule: "agenda",
  arrangement: "combinado",
  thought: "pensamento",
  opinion: "opiniao",
  risk: "risco",
  opportunity: "oportunidade",
  challenge: "desafio",
  support: "suporte",
  suggestion: "sugestao",
  proposal: "proposta",
  target: "objetivo"
};

const phraseTranslations: Record<string, string> = {
  "coconut water": "agua de coco",
  "ice cream": "sorvete",
  "simple present": "presente simples",
  "food drinks": "comidas e bebidas",
  "food and drinks": "comidas e bebidas",
  "a an": "a ou an",
  "with gas": "com gas"
};

const articleWords = new Set(["a", "an", "the", "to"]);

function normalizeTerm(rawWord: string): string {
  return rawWord
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z\s-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function singularizeWord(word: string): string {
  if (word.endsWith("ies") && word.length > 3) {
    return `${word.slice(0, -3)}y`;
  }

  if (word.endsWith("es") && word.length > 2) {
    return word.slice(0, -2);
  }

  if (word.endsWith("s") && word.length > 1) {
    return word.slice(0, -1);
  }

  return word;
}

function guessBaseVerb(word: string): string {
  if (word.endsWith("ing") && word.length > 4) {
    return word.slice(0, -3);
  }

  if (word.endsWith("ed") && word.length > 3) {
    return word.slice(0, -2);
  }

  return word;
}

function lookupToken(word: string): string | null {
  if (translations[word]) {
    return translations[word];
  }

  const singular = singularizeWord(word);
  if (translations[singular]) {
    return translations[singular];
  }

  const verbBase = guessBaseVerb(word);
  if (translations[verbBase]) {
    return translations[verbBase];
  }

  return null;
}

export function translateWord(rawWord: string): string {
  const cleaned = normalizeTerm(rawWord);
  if (!cleaned) {
    return "traducao a definir";
  }

  if (phraseTranslations[cleaned]) {
    return phraseTranslations[cleaned];
  }

  if (translations[cleaned]) {
    return translations[cleaned];
  }

  const tokens = cleaned.split(" ").filter(Boolean);
  if (tokens.length === 1) {
    return lookupToken(tokens[0]) ?? `uso em contexto: ${cleaned}`;
  }

  const translatedTokens = tokens.map((token) => {
    if (articleWords.has(token)) {
      return "";
    }

    return lookupToken(token) ?? token;
  });

  const compact = translatedTokens.filter(Boolean).join(" ").trim();
  if (compact && compact !== cleaned) {
    return compact;
  }

  return `uso em contexto: ${cleaned}`;
}
