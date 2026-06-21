import { useEffect, useMemo, useState } from "react";
import { translateWord } from "../data/translationDictionary";

type TranslationMap = Record<string, string>;

export function useAutoTranslate(words: string[]) {
  const [translations, setTranslations] = useState<TranslationMap>({});

  const uniqueWords = useMemo(
    () => Array.from(new Set(words.map((word) => word.trim()).filter(Boolean))),
    [words]
  );

  useEffect(() => {
    let isMounted = true;

    async function loadTranslations(): Promise<void> {
      const pending = uniqueWords.filter((word) => !translations[word]);
      if (pending.length === 0) {
        return;
      }

      const pairs = await Promise.all(
        pending.map(async (word) => [word, await translateWord(word)] as const)
      );

      if (!isMounted) {
        return;
      }

      setTranslations((current) => {
        const merged: TranslationMap = { ...current };
        pairs.forEach(([word, translated]) => {
          merged[word] = translated;
        });
        return merged;
      });
    }

    loadTranslations();

    return () => {
      isMounted = false;
    };
  }, [uniqueWords, translations]);

  function getTranslation(word: string): string {
    return translations[word] ?? "traduzindo...";
  }

  return { getTranslation, translations };
}
