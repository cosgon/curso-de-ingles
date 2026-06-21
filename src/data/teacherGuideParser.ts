import { TeacherGuidePlan, VerbItem, VocabItem } from "./courseTypes";

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readSection(markdown: string, sectionAliases: string[]): string {
  for (const alias of sectionAliases) {
    const pattern = new RegExp(`##\\s*${escapeRegExp(alias)}[^\\n]*\\n([\\s\\S]*?)(?=\\n##\\s|$)`, "i");
    const match = markdown.match(pattern);
    if (match?.[1]?.trim()) {
      return match[1].trim();
    }
  }

  return "";
}

function readHeaderValue(markdown: string, label: string, fallback: string): string {
  const pattern = new RegExp(`\\*\\*${escapeRegExp(label)}:\\*\\*\\s*(.+)`, "i");
  const match = markdown.match(pattern);
  return match?.[1]?.trim() ?? fallback;
}

function readTitle(markdown: string): string {
  const match = markdown.match(/^#\s+(.+)/m);
  return match?.[1]?.trim() ?? "Guia sem titulo";
}

function cleanMarkdownText(value: string): string {
  return value
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .trim();
}

function splitRows(content: string): string[] {
  const rows = content
    .split("\n")
    .map((line) => cleanMarkdownText(line.trim()))
    .filter((line) => line.length > 0);

  if (rows.length === 0) {
    return ["Sem conteudo nesta secao."];
  }

  return rows;
}

function splitList(content: string): string[] {
  const candidates = splitRows(content)
    .filter((line) => line.startsWith("-") || /^\d+\./.test(line) || /^###\s+/i.test(line))
    .map((line) => line.replace(/^###\s+/, "").replace(/^[-\d.\s]+/, "").trim())
    .filter((line) => line.length > 0);

  if (candidates.length > 0) {
    return candidates;
  }

  return splitRows(content).slice(0, 8);
}

function normalizeVocabTerm(noun: string, adjective?: string): string {
  return [adjective ?? "", noun]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function parseVocabulary(vocabSection: string): VocabItem[] {
  const rows = vocabSection
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.includes("|") && !line.includes("---") && !line.toLowerCase().includes("substantivo"));

  if (rows.length === 0) {
    return ["guided review", "classroom practice"];
  }

  return rows.map((row) => {
    const [nounRaw, adjectiveRaw] = row
      .split("|")
      .map((part) => cleanMarkdownText(part.trim()))
      .filter(Boolean);

    return normalizeVocabTerm(nounRaw, adjectiveRaw);
  });
}

function parseVerbs(verbsSection: string): VerbItem[] {
  const rows = splitRows(verbsSection)
    .filter((line) => line.startsWith("-"))
    .map((line) => line.replace(/^-\s*/, "").trim());

  if (rows.length === 0) {
    return [{ verb: "review", usage: "revisao", translation: "review" }];
  }

  return rows.map((row) => {
    const pair = row.match(/\*\*([^*]+)\*\*\s*\(([^)]+)\)/);
    if (pair) {
      return {
        verb: pair[1].trim().toLowerCase(),
        usage: "aplicar em frases da aula",
        translation: pair[2].trim().toLowerCase()
      };
    }

    const clean = cleanMarkdownText(row).replace(/\(.+\)/, "").trim();
    return {
      verb: clean.toLowerCase(),
      usage: "aplicar em frases da aula",
      translation: clean.toLowerCase()
    };
  });
}

function parseStructures(markdown: string): string[] {
  const section = readSection(markdown, ["ESTRUTURAS DA AULA", "STRUCTURE PRESENTATION"]);
  const tableRows = section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.includes("|") && !line.includes("---") && !line.toLowerCase().includes("afirmativa"));

  if (tableRows.length === 0) {
    return ["Estruturas nao detalhadas no arquivo."];
  }

  return tableRows.map((row) => {
    const [affirmative, negative, question] = row
      .split("|")
      .map((cell) => cleanMarkdownText(cell.trim()))
      .filter(Boolean);

    return `Afirmativa: ${affirmative} | Negativa: ${negative} | Pergunta: ${question}`;
  });
}

function readOrder(fileName: string): number {
  if (fileName.toLowerCase().includes("show")) {
    return 0;
  }

  const value = fileName.match(/(\d+)/)?.[1];
  return Number(value ?? 99);
}

export function parseTeacherGuide(fileName: string, markdown: string): TeacherGuidePlan {
  const timelineSection = readSection(markdown, ["CRONOGRAMA DA AULA", "SCHEDULE"]);
  const controlledSection = readSection(markdown, ["CONTROLLED PRACTICE", "PRACTICE"]);
  const wrapUpSection = readSection(markdown, ["WRAP-UP", "WRAP UP"]);
  const summarySection = readSection(markdown, ["RESUMO DA AULA", "CLASS SUMMARY"]);

  return {
    id: fileName.toLowerCase().replace(".md", ""),
    order: readOrder(fileName),
    title: readTitle(markdown),
    objective: readHeaderValue(markdown, "Objetivo", "Objetivo pedagogico nao informado"),
    duration: readHeaderValue(markdown, "Duração", "60 minutos"),
    level: readHeaderValue(markdown, "Nível", "A1"),
    vocab: parseVocabulary(readSection(markdown, ["VOCABULÁRIO", "VOCABULARIO", "VOCABULARY"])),
    verbs: parseVerbs(readSection(markdown, ["VERBOS DA AULA", "VERBOS", "VERBS"])),
    structures: parseStructures(markdown),
    timeline: splitList(timelineSection),
    controlledPractice: splitList(controlledSection),
    wrapUp: splitList(wrapUpSection),
    lessonSummary: splitList(summarySection)
  };
}
