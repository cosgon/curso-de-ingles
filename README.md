# Ingles Basico Interativo (PT-BR)

Projeto open source para transformar aulas de ingles basico em uma experiencia digital simples, clara e amigavel para iniciantes brasileiros.

Este repositorio usa os arquivos em `classes/` (Aula Show + Aula 01 a Aula 20) para gerar um curso interativo com:

- trilha de aulas com navegacao intuitiva
- flashcards (clique para virar)
- tabela de verbos
- explicacao gramatical em portugues
- pratica com lacunas e multipla escolha
- secao de preparacao, atividades em classe e homework
- controle de progresso por aluno com `localStorage`
- area do professor com senha fixa (`teachersonly`)
- gabarito automatico por aula no painel do professor
- whiteboard para explicacao ao vivo durante a aula

## Tecnologias

- React + TypeScript
- React Router
- Tailwind CSS
- Vite
- GitHub Pages

## Publico-alvo

- professores que querem usar material gratuito e customizavel
- alunos iniciantes que precisam de uma trilha em portugues para estudar ingles
- desenvolvedores que buscam um projeto real de portfolio em EdTech

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

## Deploy no GitHub Pages

1. Crie um repositorio no GitHub.
2. Suba este projeto para a branch principal (`main`).
3. Execute:

```bash
npm run deploy
```

4. No GitHub, confirme em Settings > Pages que a branch de publicacao foi configurada pelo `gh-pages`.

Observacao: o projeto usa `HashRouter`, entao funciona no GitHub Pages sem ajustes extras de servidor.

## Estrutura principal

- `classes/`: conteudo pedagogico fonte das aulas
- `src/data/`: parser dos markdowns e montagem do catalogo
- `src/components/`: interface de estudo
- `src/pages/`: Home, aula individual, area do professor e fallback
- `src/hooks/`: estado de progresso por aluno
- `teacher-guides/`: readmes de apoio para planejamento e condução

## Como adaptar para sua escola ou turma

1. Edite os arquivos em `classes/` com seu plano de aula.
2. Mantenha os blocos `## Vocabulário`, `## Verbos`, `## Gramática`, `## Preparação`, `## Desenvolvimento`, `## Homework`.
3. Rode `npm run dev` para validar instantaneamente.
4. Opcional: personalize cores/fontes em `tailwind.config.cjs` e `src/index.css`.

## Area do professor

- URL: `/#/teacher`
- Senha fixa: `teachersonly`
- Recursos:
	- guia de apresentacao por aula
	- gabarito de exercicios por aula
	- whiteboard para demonstracao em tempo real
	- botao de saida para bloquear novamente o painel

## Sugestoes pedagogicas de uso

- aula presencial: use a pagina da aula como roteiro da lousa/projetor
- aula remota: compartilhe o link e avance por secoes
- estudo autonomo: aluno marca aulas concluidas e acompanha progresso
- avaliacao continua: aproveite os exercicios para checagem rapida ao fim da aula

## Portfolio de programacao

Este projeto demonstra:

- parser de markdown para dados educacionais
- arquitetura React modular
- UX focada em iniciantes
- deploy continuo em GitHub Pages
- produto real com impacto educacional

## Licenca

Este material e gratuito e open source sob a licenca MIT.
Veja `LICENSE`.
