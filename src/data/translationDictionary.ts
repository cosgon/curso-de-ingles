import translate from "translate";

translate.engine = "google";
translate.cache = 1000 * 60 * 60 * 24;

type TranslationCache = Record<string, string>;

const cacheStore: TranslationCache = {};

function normalizeTerm(rawWord: string): string {
  return rawWord
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function fallbackTranslation(rawWord: string): string {
  return normalizeTerm(rawWord) || "traducao indisponivel";
}

export async function translateWord(rawWord: string): Promise<string> {
  const cleaned = normalizeTerm(rawWord);
  if (!cleaned) {
    return "traducao indisponivel";
  }

  if (cacheStore[cleaned]) {
    return cacheStore[cleaned];
  }

  try {
    const translated = await translate(cleaned, { from: "en", to: "pt" });
    const normalized = String(translated).trim().toLowerCase();
    const result = normalized || fallbackTranslation(cleaned);
    cacheStore[cleaned] = result;
    return result;
  } catch {
    const fallback = fallbackTranslation(cleaned);
    cacheStore[cleaned] = fallback;
    return fallback;
  }
}
