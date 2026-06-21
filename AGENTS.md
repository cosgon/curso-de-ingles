# Copilot Instructions

You are an expert web developer. I have a set of README files describing English lessons. Each README contains vocabulary, verbs, grammar focus, preparation tasks, and homework, it is on ./classes.

Based on these files, generate an interactive single-page application for students using React and Tailwind CSS. The app should:

- Have a homepage listing all lessons dinamically showed with a navigation menu.
- For each lesson, display:
  - Vocabulary list with translation (flashcard style, click to flip).
  - Verb conjugation table for the target tense.
  - Grammar explanation with examples.
  - A practice area with fill-in-the-blank or multiple-choice exercises (use the vocabulary and verbs).
  - Homework section with instructions.
- Allow the student to mark lessons as completed. Use localStorage to keep that data
- Include a progress bar.

The design should be clean, professional, and mobile-friendly. Use React Router for navigation. State management can be simple (useState/useContext). Assume the data is static (from the READMEs).

Provide the complete code structure (App.js, components, data files). Use the content from the READMEs to populate the data. The data should be organized in a JavaScript array of objects, each with fields: id, title, vocab, verbs, grammar, prep, development, homework.

Generate all necessary files in a single response.

Remember it will be a brazilian app, so make it easy to brazilians understand without knowing english.

## Code style

- Functions: 4-20 lines. Split if longer.
- Files: under 500 lines. Split by responsibility.
- One thing per function, one responsibility per module (SRP).
- Names: specific and unique. Avoid `data`, `handler`, `Manager`.
  Prefer names that return <5 grep hits in the codebase.
- Types: explicit. No `any`, no `Dict`, no untyped functions.
- No code duplication. Extract shared logic into a function/module.
- Early returns over nested ifs. Max 2 levels of indentation.
- Exception messages must include the offending value and expected shape.

## Comments

- Keep your own comments. Don't strip them on refactor — they carry
  intent and provenance.
- Write WHY, not WHAT. Skip `// increment counter` above `i++`.
- Docstrings on public functions: intent + one usage example.
- Reference issue numbers / commit SHAs when a line exists because
  of a specific bug or upstream constraint.

## Dependencies

- Inject dependencies through constructor/parameter, not global/import.
- Wrap third-party libs behind a thin interface owned by this project.

## Structure

- Follow the framework's convention (Rails, Django, Next.js, etc.).
- Prefer small focused modules over god files.
- Predictable paths: controller/model/view, src/lib/test, etc.

## Formatting

- Use the language default formatter (`cargo fmt`, `gofmt`, `prettier`,
  `black`, `rubocop -A`). Don't discuss style beyond that.

## Logging

- Structured JSON when logging for debugging / observability.
- Plain text only for user-facing CLI output.