# Ingles Basico Interativo (PT-BR)

Projeto open source para transformar aulas de ingles basico em uma experiencia digital simples, clara e amigavel para iniciantes brasileiros.

O projeto le automaticamente os arquivos em classes e teacher-guides, sem cadastro manual de aulas no codigo.

## Padrao Atual de Conteudo

Cada aula em Markdown deve manter as secoes:

- Vocabulário
- Verbos
- Gramática
- Preparação
- Desenvolvimento (opcional)
- Homework

No parser atual, cada item de vocabulario e armazenado como uma string unica, por exemplo:

- cold soda
- sweet pancakes
- hot pizza

As traducoes sao exibidas na interface com a biblioteca translate ja instalada no projeto.

## Fluxo Dinamico

- Novos arquivos em classes sao renderizados automaticamente para os alunos.
- Novos arquivos em teacher-guides sao renderizados automaticamente no painel do professor.
- Ordenacao de aulas e feita pelo numero no nome do arquivo (Aula01, Aula02, etc.).

## Tecnologias

- React + TypeScript
- React Router
- Tailwind CSS
- Vite
- translate (traducoes automaticas EN -> PT)

## Funcionalidades

- trilha de aulas com navegacao intuitiva
- flashcards de vocabulario com traducao automatica
- tabela de verbos
- explicacao gramatical em portugues
- pratica com lacunas e multipla escolha
- controle de progresso por aluno com localStorage
- area do professor com senha fixa (teachersonly)
- painel do professor com guia por aula e vocabulario traduzido
- whiteboard para explicacao ao vivo

## Como rodar localmente

1. Instale dependencias:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

3. Gere build de producao:

```bash
npm run build
```

4. Visualize build local:

```bash
npm run preview
```

## Estrutura principal

- classes: markdowns das aulas dos alunos
- teacher-guides: markdowns de guia para professores
- src/data: parsers e catalogos dinamicos
- src/hooks: hooks de progresso, acesso e traducao
- src/components: UI das paginas
- src/pages: Home, aula, professor e fallback

## Area do professor

- URL: /#/teacher
- Senha fixa: teachersonly
- Recursos:
  - guia por aula
  - gabarito de pratica
  - vocabulario com traducao automatica
  - whiteboard para aula ao vivo

## Licenca

Este material e gratuito e open source sob a licenca MIT.
Veja LICENSE.
