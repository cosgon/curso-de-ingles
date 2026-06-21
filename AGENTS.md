# Copilot Instructions

You are an expert web developer working on this React + TypeScript app for Brazilian beginners.

## Source of truth

- Student lessons: ./classes
- Teacher guides: ./teacher-guides

Both folders are parsed dynamically. Do not hardcode lesson imports.

## Current app standards

- Vocabulary must be represented as one single string per item (example: cold soda, sweet pancakes).
- Show translations using the installed translate library.
- Keep student and teacher experiences separated:
  - Student area reads classes
  - Teacher area reads teacher-guides
- Preserve current routing and overall app behavior unless explicitly requested.

## Rendering rules

- Homepage must list all lessons dynamically.
- Lesson page must show vocabulary flashcards, verb table, grammar, practice, and homework.
- Teacher page must show teacher-focused guidance and translated vocabulary preview.
- Progress tracking must continue to use localStorage.

## Code style

- Functions: 4-20 lines when possible.
- Files: under 500 lines.
- One responsibility per function/module.
- Explicit types only.
- Avoid duplication.
- Prefer early returns.

## Comments

- Keep comments that explain intent.
- Avoid obvious comments that restate the code.

## Dependencies

- Reuse installed dependencies first.
- Wrap external libraries behind project-owned helpers/hooks.

## Formatting

- Use project formatter defaults.
- Keep naming specific and searchable.

## Logging

- Structured logs for internal diagnostics.
- Plain text only for user-facing messages.
