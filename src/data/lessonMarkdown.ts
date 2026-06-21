import { LessonPlan, TeacherGuidePlan } from "./courseTypes";
import { parseLesson } from "./lessonParser";
import { parseTeacherGuide } from "./teacherGuideParser";

const studentFiles = import.meta.glob("../../classes/*.md", {
  eager: true,
  import: "default",
  query: "?raw"
}) as Record<string, string>;

const teacherFiles = import.meta.glob("../../teacher-guides/*.md", {
  eager: true,
  import: "default",
  query: "?raw"
}) as Record<string, string>;

function toFileName(path: string): string {
  const parts = path.split("/");
  return parts[parts.length - 1] ?? path;
}

function sortByOrder<T extends { order: number }>(items: T[]): T[] {
  return items.sort((first, second) => first.order - second.order);
}

export const lessonCatalog: LessonPlan[] = sortByOrder(
  Object.entries(studentFiles).map(([path, markdown]) => parseLesson(toFileName(path), markdown))
);

export const teacherGuideCatalog: TeacherGuidePlan[] = sortByOrder(
  Object.entries(teacherFiles).map(([path, markdown]) => parseTeacherGuide(toFileName(path), markdown))
);
