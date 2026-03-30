# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # instalar dependências
npm run dev        # servidor de desenvolvimento (http://localhost:5173)
npm run build      # build de produção (saída em dist/)
npm run preview    # visualizar o build localmente
```

O projeto não tem testes automatizados nem linter configurado no package.json.

## Arquitetura

Single Page Application estática, sem roteamento — toda navegação é por âncoras (`#sobre`, `#impactos`, etc.) com scroll suave.

### Princípio central

**Todo o conteúdo do site vive em `src/data/portfolio.ts`** — textos, links, dados de experiência, projetos, certificações e flags de TODO. Para qualquer alteração de conteúdo, editar apenas esse arquivo; os componentes consomem os dados tipados via import direto.

### Fluxo de dados

```
src/data/portfolio.ts  →  src/sections/*.tsx  →  src/App.tsx
src/types/index.ts     →  (tipagem de todo o data layer)
src/hooks/useTheme.ts  →  App.tsx → Header (toggle dark/light)
src/hooks/useActiveSection.ts → App.tsx → Header (highlight do nav)
```

### Dark mode

Controlado pela classe `dark` no `<html>`. O `index.html` tem um script inline que lê `localStorage` antes do React hidratar, evitando FOUC. `useTheme` gerencia o estado em runtime.

### Base path (GitHub Pages)

`vite.config.ts` lê `process.env.GITHUB_REPOSITORY` (definido automaticamente pelo GitHub Actions) para calcular o `base` dinamicamente:
- Project site (`/repo/`): base extraída do nome do repositório
- User site (`/`): configurar `VITE_BASE=/` no workflow

### Tailwind

- Dark mode via estratégia `class`
- Cor de destaque customizada: `accent` (verde-teal, escala 50–900, DEFAULT = `#0d9468`)
- Fontes: `Inter` (sans) e `JetBrains Mono` (mono), carregadas via Google Fonts no `index.html`
- Classes utilitárias `.section-container` e `.section-padding` definidas em `src/index.css`

### Acessibilidade

- Cada `<section>` no `App.tsx` tem `aria-labelledby` apontando para o `id` do `<h2>` dentro de `SectionHeading`
- `ScrollReveal` detecta `prefers-reduced-motion` e desativa animações automaticamente
- `useActiveSection` usa `IntersectionObserver` com `rootMargin: '-30% 0px -60% 0px'`

### TODOs de conteúdo pendentes

Em `src/data/portfolio.ts`: `person.linkedin`, `person.email`, `person.resumeUrl` estão como `null`. Componentes que os consomem (`Hero`, `Contact`, `Footer`) renderizam placeholders com label `TODO` quando o valor é `null`.
