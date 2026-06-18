import { useMemo, useState } from "react";

const LESSON_PROGRESS_KEY = "english_course_completed_lessons";

function readSavedProgress(): string[] {
  const storageValue = localStorage.getItem(LESSON_PROGRESS_KEY);
  if (!storageValue) {
    return [];
  }

  try {
    const parsed = JSON.parse(storageValue);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useLessonProgress() {
  const [completedIds, setCompletedIds] = useState<string[]>(readSavedProgress);

  function toggleLesson(lessonId: string): void {
    setCompletedIds((current) => {
      const updated = current.includes(lessonId)
        ? current.filter((id) => id !== lessonId)
        : [...current, lessonId];

      localStorage.setItem(LESSON_PROGRESS_KEY, JSON.stringify(updated));
      return updated;
    });
  }

  const progressPercent = useMemo(() => {
    if (completedIds.length === 0) {
      return 0;
    }

    return completedIds.length;
  }, [completedIds]);

  return {
    completedIds,
    progressPercent,
    toggleLesson
  };
}
