import { Navigate, Route, Routes } from "react-router-dom";
import { lessonCatalog } from "./data/lessonMarkdown";
import { useLessonProgress } from "./hooks/useLessonProgress";
import { LessonPage } from "./pages/LessonPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";
import { TeacherPage } from "./pages/TeacherPage";

function App() {
  const { completedIds, toggleLesson } = useLessonProgress();

  return (
    <Routes>
      <Route
        element={<HomePage completedIds={completedIds} lessons={lessonCatalog} onToggleLesson={toggleLesson} />}
        path="/"
      />
      <Route
        element={<LessonPage completedIds={completedIds} lessons={lessonCatalog} onToggleLesson={toggleLesson} />}
        path="/lesson/:lessonId"
      />
      <Route element={<TeacherPage lessons={lessonCatalog} />} path="/teacher" />
      <Route element={<Navigate replace to="/" />} path="/home" />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
}

export default App;
