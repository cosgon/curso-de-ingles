import { useState } from "react";

const TEACHER_UNLOCK_KEY = "teacher_area_unlocked";
const TEACHER_PASSWORD = "teachersonly";

function readUnlockState(): boolean {
  return localStorage.getItem(TEACHER_UNLOCK_KEY) === "yes";
}

export function useTeacherAccess() {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(readUnlockState);

  function validatePassword(password: string): boolean {
    return password.trim() === TEACHER_PASSWORD;
  }

  function unlock(): void {
    localStorage.setItem(TEACHER_UNLOCK_KEY, "yes");
    setIsUnlocked(true);
  }

  function lock(): void {
    localStorage.removeItem(TEACHER_UNLOCK_KEY);
    setIsUnlocked(false);
  }

  return { isUnlocked, validatePassword, unlock, lock };
}
