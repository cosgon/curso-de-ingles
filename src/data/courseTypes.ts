export type VocabItem = {
  word: string;
  translation: string;
};

export type VerbItem = {
  verb: string;
  usage: string;
  translation: string;
};

export type GrammarItem = {
  title: string;
  bullets: string[];
};

export type PracticeGap = {
  prompt: string;
  answer: string;
  tip: string;
};

export type PracticeChoice = {
  question: string;
  options: string[];
  answer: string;
};

export type LessonPractice = {
  fillBlanks: PracticeGap[];
  multipleChoice: PracticeChoice[];
};

export type LessonPlan = {
  id: string;
  order: number;
  title: string;
  objective: string;
  vocab: VocabItem[];
  verbs: VerbItem[];
  grammar: GrammarItem;
  prep: string[];
  development: string[];
  homework: string[];
  practice: LessonPractice;
};

export type TeacherGuidePlan = {
  id: string;
  order: number;
  title: string;
  objective: string;
  duration: string;
  level: string;
  vocab: VocabItem[];
  verbs: VerbItem[];
  structures: string[];
  timeline: string[];
  controlledPractice: string[];
  wrapUp: string[];
  lessonSummary: string[];
};
