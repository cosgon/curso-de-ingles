import { LessonPlan, PracticeChoice, PracticeGap, VerbItem, VocabItem } from "./courseTypes";

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readSection(markdown: string, sectionTitle: string): string {
  const aliases = sectionTitle.split("|").map((alias) => alias.trim()).filter(Boolean);

  for (const alias of aliases) {
    const pattern = new RegExp(`##\\s*${escapeRegExp(alias)}[^\\n]*\\n([\\s\\S]*?)(?=\\n##\\s|$)`, "i");
    const match = markdown.match(pattern);
    if (match?.[1]?.trim()) {
      return match[1].trim();
    }
  }

  return "";
}

function readObjective(markdown: string): string {
  const match = markdown.match(/\*\*Objetivo:\*\*\s*(.+)/i);
  return match?.[1]?.trim() ?? "Objetivo nao informado";
}

function readTitle(markdown: string): string {
  const match = markdown.match(/^#\s+(.+)/m);
  return match?.[1]?.trim() ?? "Aula sem titulo";
}

function splitList(content: string): string[] {
  const cleanRows = content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => line.replace(/^[-\d.\s]+/, "").trim());

  if (cleanRows.length > 0) {
    return cleanRows;
  }

  return ["Conteudo de revisao em sala."];
}

function normalizeVocabTerm(noun: string, adjective?: string): string {
  return [adjective ?? "", noun]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function parseVocabulary(vocabSection: string): VocabItem[] {
  console.log("Parsing vocabulary section:", vocabSection.split("\n"));
  const rows = vocabSection
    .split("\n")
    .map((line) => line.trim().replace(/^-/, "").trim())

  return rows.map((row) => {
    const [nounRaw, adjectiveRaw] = row
      .split("|")
      .map((part) => part.trim())
      .filter(Boolean);

    return normalizeVocabTerm(nounRaw, adjectiveRaw);
  });
}

function parseVerbs(verbsSection: string): VerbItem[] {
  const verbsLine = verbsSection
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.startsWith("-") || line.includes(","));

  if (!verbsLine) {
    return [{ verb: "review", usage: "revisao" }];
  }

  return verbsLine
    .replace(/^-\s*/, "")
    .split(",")
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((verb) => ({
      verb,
      usage: "aplique em frases da aula",
    }));
}

function parseGrammar(markdown: string): { title: string; bullets: string[] } {
  const section = readSection(markdown, "Gramatica|Gramática|Grammar");
  const bullets = splitList(section);
  return {
    title: "Foco gramatical",
    bullets
  };
}

function pickDistractors(pool: string[], answer: string): string[] {
  const uniquePool = Array.from(new Set(pool.filter((item) => item !== answer)));
  return uniquePool.slice(0, 2);
}

function buildPractice(vocab: VocabItem[], verbs: VerbItem[]): { fillBlanks: PracticeGap[]; multipleChoice: PracticeChoice[] } {
  const fillBlanks = verbs.slice(0, 3).map((item) => ({
    prompt: "Complete com o verbo correto: I ______ every day.",
    answer: item.verb.split(" ")[0].toLowerCase(),
    tip: `Use o verbo "${item.verb}".`
  }));

  const distractorPool = [...verbs.map((item) => item.verb.toLowerCase()), "homework", "classroom", "teacher"];
  const multipleChoice = vocab.slice(0, 3).map((item) => {
    const distractors = pickDistractors(distractorPool, item);
    return {
      question: "Qual expressao faz parte do vocabulario da aula?",
      options: [item, ...distractors].sort(),
      answer: item
    };
  });

  return {
    fillBlanks,
    multipleChoice
  };
}

function readOrder(fileName: string): number {
  if (fileName.toLowerCase().includes("show")) {
    return 0;
  }

  const value = fileName.match(/(\d+)/)?.[1];
  return Number(value ?? 99);
}

export function parseLesson(fileName: string, markdown: string): LessonPlan {
  const title = readTitle(markdown);
  const objective = readObjective(markdown);
  const vocab = parseVocabulary(readSection(markdown, "Vocabulario|Vocabulário|Vocabulary"));
  const verbs = parseVerbs(readSection(markdown, "Verbos|Verbos da aula|Verbs"));
  const grammar = parseGrammar(markdown);
  const prep = splitList(readSection(markdown, "Preparacao|Preparação|Warm-up|Warm up"));
  const development = splitList(readSection(markdown, "Desenvolvimento|Development|Structure Presentation|Controlled Practice"));
  const homework = splitList(readSection(markdown, "Homework|Wrap-up|Wrap up"));
  const practice = buildPractice(vocab, verbs);

  return {
    id: fileName.toLowerCase().replace(".md", ""),
    order: readOrder(fileName),
    title,
    objective,
    vocab,
    verbs,
    grammar,
    prep,
    development,
    homework,
    practice
  };
}
