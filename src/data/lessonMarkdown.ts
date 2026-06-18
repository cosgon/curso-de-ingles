import { LessonPlan } from "./courseTypes";
import { parseLesson } from "./lessonParser";

import aulaShow from "../../classes/AulaShow.md?raw";
import aula01 from "../../classes/Aula01.md?raw";
import aula02 from "../../classes/Aula02.md?raw";
import aula03 from "../../classes/Aula03.md?raw";
import aula04 from "../../classes/Aula04.md?raw";
import aula05 from "../../classes/Aula05.md?raw";
import aula06 from "../../classes/Aula06.md?raw";
import aula07 from "../../classes/Aula07.md?raw";
import aula08 from "../../classes/Aula08.md?raw";
import aula09 from "../../classes/Aula09.md?raw";
import aula10 from "../../classes/Aula10.md?raw";
import aula11 from "../../classes/Aula11.md?raw";
import aula12 from "../../classes/Aula12.md?raw";
import aula13 from "../../classes/Aula13.md?raw";
import aula14 from "../../classes/Aula14.md?raw";
import aula15 from "../../classes/Aula15.md?raw";
import aula16 from "../../classes/Aula16.md?raw";
import aula17 from "../../classes/Aula17.md?raw";
import aula18 from "../../classes/Aula18.md?raw";
import aula19 from "../../classes/Aula19.md?raw";
import aula20 from "../../classes/Aula20.md?raw";

const rawLessons = [
  ["AulaShow.md", aulaShow],
  ["Aula01.md", aula01],
  ["Aula02.md", aula02],
  ["Aula03.md", aula03],
  ["Aula04.md", aula04],
  ["Aula05.md", aula05],
  ["Aula06.md", aula06],
  ["Aula07.md", aula07],
  ["Aula08.md", aula08],
  ["Aula09.md", aula09],
  ["Aula10.md", aula10],
  ["Aula11.md", aula11],
  ["Aula12.md", aula12],
  ["Aula13.md", aula13],
  ["Aula14.md", aula14],
  ["Aula15.md", aula15],
  ["Aula16.md", aula16],
  ["Aula17.md", aula17],
  ["Aula18.md", aula18],
  ["Aula19.md", aula19],
  ["Aula20.md", aula20]
] as const;

export const lessonCatalog: LessonPlan[] = rawLessons
  .map(([fileName, markdown]) => parseLesson(fileName, markdown))
  .sort((first, second) => first.order - second.order);
