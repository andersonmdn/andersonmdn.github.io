# Portfólio — Anderson Feliciano André

Site de portfólio profissional construído com **Vite + React + TypeScript + Tailwind CSS**, publicado como site estático no **GitHub Pages** via GitHub Actions.

---

## Visão geral

| Item | Detalhe |
|---|---|
| Framework | React 18 + Vite 5 |
| Linguagem | TypeScript (strict) |
| Estilo | Tailwind CSS 3 |
| Deploy | GitHub Pages via GitHub Actions |
| Modo | Estático (sem backend) |
| Tema | Dark mode padrão, com alternância para light |
| Idioma | Português do Brasil |

---

## Pré-requisitos

- Node.js >= 18
- npm >= 9

---

## Instalação

```bash
npm install
```

---

## Desenvolvimento local

```bash
npm run dev
```

Acesse em: `http://localhost:5173`

---

## Build

```bash
npm run build
```

Os arquivos de saída ficam em `dist/`.

Para visualizar o build localmente:

```bash
npm run preview
```

---

## Deploy no GitHub Pages

### Configuração inicial (uma única vez)

1. No repositório GitHub, vá em **Settings → Pages**
2. Em **Source**, selecione **GitHub Actions**
3. Confirme. O deploy acontece automaticamente a cada push na branch `main`

### Tipos de site

#### Site de usuário/organização (`andersonmdn.github.io`)

No arquivo `.github/workflows/deploy.yml`, descomente a linha:

```yaml
# VITE_BASE: /
```

E remova ou ignore a variável `GITHUB_REPOSITORY` no step de build.

#### Site de projeto (`andersonmdn.github.io/nome-do-repo`)

Nenhuma configuração extra necessária. O workflow detecta automaticamente o nome do repositório via `GITHUB_REPOSITORY` e configura o `base` do Vite corretamente.

### Como o base path funciona

O `vite.config.ts` lê `process.env.GITHUB_REPOSITORY` (disponível automaticamente no GitHub Actions) e extrai o nome do repositório:

```ts
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.VITE_BASE ?? (repo ? `/${repo}/` : '/')
```

- **Localmente**: `GITHUB_REPOSITORY` não está definido → `base = '/'` ✓
- **GitHub Actions (project site)**: `GITHUB_REPOSITORY = "andersonmdn/portifolio"` → `base = '/portifolio/'` ✓
- **GitHub Actions (user site)**: `VITE_BASE = "/"` → `base = '/'` ✓

---

## Como atualizar o conteúdo

**Todos os textos e dados do site estão centralizados em:**

```
src/data/portfolio.ts
```

Edite esse arquivo para qualquer atualização de conteúdo. Não é necessário mexer nos componentes.

---

### Configurar LinkedIn

Em `src/data/portfolio.ts`, substitua:

```ts
linkedin: null as string | null,
```

Por:

```ts
linkedin: 'https://www.linkedin.com/in/seu-perfil',
```

---

### Configurar e-mail

Em `src/data/portfolio.ts`, substitua:

```ts
email: null as string | null,
```

Por:

```ts
email: 'seu@email.com',
```

---

### Substituir o currículo PDF

1. Coloque o arquivo PDF em `public/curriculo.pdf`
2. Em `src/data/portfolio.ts`, substitua:

```ts
resumeUrl: null as string | null,
```

Por:

```ts
resumeUrl: '/curriculo.pdf',
```

> **Atenção:** se o site estiver em um project site (`/repo/`), o caminho correto é `/repo/curriculo.pdf`. Prefira usar uma URL absoluta ou um link de armazenamento externo (Google Drive, Dropbox etc.) para evitar problemas com o base path.

---

### Adicionar foto profissional

1. Adicione a foto em `src/assets/foto.jpg` (ou `public/foto.jpg`)
2. Importe e use no componente `src/sections/Hero.tsx` ou `src/sections/About.tsx`

> A foto não está implementada por padrão pois não foi fornecida.

---

### Atualizar projetos em destaque

Em `src/data/portfolio.ts`, localize os itens com `status: 'todo'` e substitua pelos dados reais:

```ts
{
  title: 'Nome do projeto',
  description: 'Descrição objetiva do projeto.',
  tags: ['TypeScript', 'Node.js'],
  href: 'https://github.com/andersonmdn/nome-do-repo',
  status: 'real',
},
```

---

### Adicionar novas certificações

Em `src/data/portfolio.ts`, adicione ao array `certifications`:

```ts
{
  title: 'Nome do curso',
  issuer: 'Plataforma',
  description: 'Breve descrição do conteúdo.',
},
```

---

### Atualizar textos gerais

| Conteúdo | Onde editar |
|---|---|
| Nome, headline, localização | `src/data/portfolio.ts` → `person` |
| Resumo do hero | `src/data/portfolio.ts` → `heroSummary` |
| Texto "Sobre mim" | `src/data/portfolio.ts` → `aboutParagraphs` |
| Cards de impacto | `src/data/portfolio.ts` → `impacts` |
| Experiência / cargos | `src/data/portfolio.ts` → `experiences` |
| Stack / competências | `src/data/portfolio.ts` → `skillGroups` |
| Projetos | `src/data/portfolio.ts` → `projects` |
| Certificações | `src/data/portfolio.ts` → `certifications` |
| Itens do menu | `src/data/portfolio.ts` → `navItems` |

---

## Estrutura de pastas

```
portifolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions — build e deploy
├── public/
│   └── favicon.svg             # Favicon SVG
├── src/
│   ├── assets/                 # Imagens e recursos estáticos
│   ├── components/
│   │   ├── Badge.tsx           # Badge de tags
│   │   ├── Icons.tsx           # Ícones SVG inline
│   │   ├── ScrollReveal.tsx    # Animação de entrada por scroll
│   │   ├── SectionHeading.tsx  # Cabeçalho reutilizável de seção
│   │   └── ThemeToggle.tsx     # Botão dark/light mode
│   ├── data/
│   │   └── portfolio.ts        # ← TODOS os dados do site aqui
│   ├── hooks/
│   │   ├── useActiveSection.ts # Detecta seção ativa para o nav
│   │   └── useTheme.ts         # Gerencia dark/light mode
│   ├── lib/
│   │   └── utils.ts            # Helpers (cn, copyToClipboard, etc.)
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Impacts.tsx
│   │   ├── Projects.tsx
│   │   └── Stack.tsx
│   ├── types/
│   │   └── index.ts            # Tipos TypeScript
│   ├── App.tsx
│   ├── index.css               # Estilos globais + Tailwind
│   └── main.tsx
├── 404.html                    # Redirecionamento para GitHub Pages
├── index.html                  # HTML raiz com SEO e meta tags
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## TODOs pendentes de configuração

- [ ] `src/data/portfolio.ts` → `person.linkedin` — URL do perfil LinkedIn
- [ ] `src/data/portfolio.ts` → `person.email` — E-mail profissional
- [ ] `src/data/portfolio.ts` → `person.resumeUrl` — URL do currículo PDF
- [ ] `src/data/portfolio.ts` → projetos com `status: 'todo'` — Repositórios em destaque
- [ ] `index.html` → `og:url` e `og:image` — URL pública e imagem de preview
- [ ] `public/` → adicionar foto profissional (se desejado)
- [ ] `.github/workflows/deploy.yml` → descomentar `VITE_BASE: /` se usar user site

---

## Licença

Código disponível para uso pessoal. Conteúdo (textos, dados profissionais) pertence ao autor.
