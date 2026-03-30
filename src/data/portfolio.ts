import type {
  NavItem,
  SocialLink,
  Impact,
  ExperienceItem,
  SkillGroup,
  Project,
  Certification,
} from '../types'

// ─── Navegação ────────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Impactos', href: '#impactos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Certificações', href: '#certificacoes' },
  { label: 'Contato', href: '#contato' },
]

// ─── Dados pessoais ───────────────────────────────────────────────────────────

export const person = {
  name: 'Anderson Feliciano André',
  headline: 'Desenvolvedor de Software Sênior',
  subheadline: 'PowerBuilder · SQL Anywhere 16/17 · SQL Performance · Especialista em Sistemas Críticos',
  transitionNote: 'Em transição para Backend / Fullstack moderno',
  location: 'Criciúma, Santa Catarina, Brasil',
  github: 'https://github.com/andersonmdn',
  linkedin: 'https://www.linkedin.com/in/anderson-andre/',
  email: 'andersonmdn00@gmail.com',
  // TODO: Substituir pela URL pública do currículo em PDF
  resumeUrl: null as string | null,
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: person.github,
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: person.linkedin,
    icon: 'linkedin',
  },
  {
    label: 'E-mail',
    href: person.email ? `mailto:${person.email}` : null,
    icon: 'mail',
  },
]

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const heroSummary =
  'Mais de 11 anos em sistemas críticos de produção. Especialista em análise de performance, troubleshooting e estabilidade — com resultados como redução de processamento de 7 min para menos de 1 min em rotinas com mais de 120 mil registros. Em transição ativa para Backend/Fullstack com React, .NET e PL/SQL.'

// ─── Sobre mim ────────────────────────────────────────────────────────────────

export const aboutParagraphs = [
  'Com mais de 11 anos de experiência em desenvolvimento de software, atuei na Thomson Reuters Brasil sustentando e evoluindo sistemas críticos de alto impacto, operados diariamente por equipes em escala global.',
  'Minha especialização está em sistemas legados complexos — PowerBuilder e SQL Anywhere 16/17 — onde performance e estabilidade são inegociáveis. Atuo com diagnóstico orientado por evidências: reinício controlado de ambiente, medição sistemática de tempos, comparação antes/depois e validação pós-correção. Investigação de gargalos com logs do sistema, logs do banco, tracing e ferramentas de apoio. Uso de PBNI e MAP para substituir abordagens sequenciais como Find e Filter em cenários de alta volumetria, além de redesenho de estratégias de recuperação de dados para reduzir chamadas redundantes ao banco.',
  'Atuei também na investigação e mitigação de erros críticos como GPF (General Protection Fault) em aplicações PowerBuilder 32 bits, com foco em controle de memória, limitação de volume por ciclo, destruição correta de objetos e agrupamento de dados para reduzir registros em processamento pesado. Conduzi análises de estabilidade em ambientes com restrições estruturais, usando rastreamento de stack trace e ferramentas internas para diagnóstico de falhas críticas.',
  'Ao longo da trajetória, colaborei diretamente com times de QA e DBA, participei da documentação de boas práticas de performance e contribuí de forma concreta para reduzir tempos de resposta, falhas de sistema e retrabalho operacional.',
  'Atualmente estou em transição para o desenvolvimento Backend/Fullstack moderno, investindo em React, React Native, .NET e PL/SQL — carregando o rigor técnico, a visão de sistemas e a mentalidade de quem viveu produção de perto por mais de uma década.',
]

// ─── Impactos ─────────────────────────────────────────────────────────────────

export const impacts: Impact[] = [
  {
    title: 'Redução de 98% no tempo de geração de relatórios',
    description:
      'Otimização de componente genérico baseado em DataStore, responsável por mais de 50% dos relatórios do sistema. Melhoria de ~90% no componente central com impacto imediato na operação diária de equipes em escala global.',
    icon: 'zap',
  },
  {
    title: 'De 7 minutos para menos de 1 minuto: 123.506 registros',
    description:
      'Substituição de abordagem Find por MAP (estrutura hash) em rotina crítica com mais de 123 mil registros. Redução de mais de 85% no tempo de processamento, eliminando buscas sequenciais em alto volume e estabilizando a execução.',
    icon: 'database',
  },
  {
    title: 'Correção de incidentes críticos em produção',
    description:
      'Atuação em incidentes de alta severidade com diagnóstico preciso e resolução ágil, minimizando tempo de indisponibilidade e garantindo a continuidade operacional.',
    icon: 'shield',
  },
  {
    title: 'Paralelização de rotinas críticas com threading',
    description:
      'Implementação de processamento paralelo em PowerBuilder usando SharedObjectRegister, conexões independentes por thread e segmentação de DataStores com RowsCopy/getChanges. Redução expressiva no tempo de rotinas críticas sem bloquear a interface principal.',
    icon: 'cpu',
  },
  {
    title: 'Wiki de boas práticas de performance',
    description:
      'Criação de guia técnico documentando padrões, antipadrões e boas práticas de performance para o time, reduzindo retrabalho e acelerando o onboarding de novos desenvolvedores.',
    icon: 'book',
  },
  {
    title: 'DSTA: analisador interno de performance para PowerBuilder',
    description:
      'Criação do DS Time Analyzer (DSTA) em Python para análise automática de logs do sistema (log.dat). A ferramenta resume chamadas de DataStore e gera saída em Excel, identificando rapidamente pontos de lentidão em DataStores, DataWindows e scripts PowerBuilder.',
    icon: 'wrench',
  },
  {
    title: 'Investigação e mitigação de GPF em produção',
    description:
      'Diagnóstico e resolução de General Protection Faults em aplicações PowerBuilder 32 bits. Estratégias de mitigação: controle de memória, limitação de volume por ciclo, agrupamento de dados e destruição correta de objetos — aumentando estabilidade em processamentos críticos pesados.',
    icon: 'shield',
  },
  {
    title: 'Otimização avançada de consultas SQL Anywhere',
    description:
      'Refatoração de queries complexas com uso de WITH como temporary view, tabelas temporárias para processamento transitório, estratégias com BETWEEN e LATERAL, inserção em bloco e eliminação de DELETEs pesados. Apoio técnico em rotinas fiscais, contábeis e de apuração.',
    icon: 'database',
  },
]

// ─── Experiência ──────────────────────────────────────────────────────────────

export const experiences: ExperienceItem[] = [
  {
    company: 'Thomson Reuters',
    location: 'Brasil (remoto / presencial)',
    period: 'Mais de 11 anos · até junho de 2025',
    roles: [
      {
        title: 'Desenvolvedor Sênior',
        description: [
          'Referência técnica do time para PowerBuilder e SQL Anywhere, atuando como ponto de apoio em decisões de arquitetura e resolução de problemas críticos.',
          'Diagnóstico e resolução de incidentes em produção com alta severidade e impacto direto na operação global.',
          'Liderança técnica de iniciativas de otimização de performance: reescrita de consultas SQL críticas, paralelização de rotinas e análise de gargalos.',
          'Criação de wiki e guia de boas práticas de performance para o time de desenvolvimento.',
          'Desenvolvimento de automações e ferramentas internas com Python para aumento de eficiência operacional.',
          'Colaboração próxima com times de QA e DBA em ciclos de validação e melhoria contínua.',
          'Scripts SQL para correção de dados em ambiente de produção com rigor e rastreabilidade.',
          'Análise de performance com método estruturado: reinício de ambiente, medição sistemática, comparação antes/depois e validação pós-correção.',
          'Investigação de gargalos com logs do sistema, logs do banco de dados, tracing e ferramentas internas de apoio.',
          'Uso de PBNI e MAP para substituição de abordagens sequenciais (Find, Filter, Retrieve, SQL Embedded) em cenários de alta volumetria.',
          'Investigação e mitigação de GPF (General Protection Fault): controle de memória, agrupamento de dados e destruição correta de objetos em processamentos críticos.',
        ],
      },
      {
        title: 'Desenvolvedor Pleno',
        description: [
          'Responsabilidade plena por módulos críticos do sistema em PowerBuilder e SQL Anywhere.',
          'Otimização de consultas SQL e diagnóstico de problemas de performance.',
          'Colaboração ativa com QA e DBA em pipelines de qualidade e sustentação.',
          'Manutenção e evolução de funcionalidades existentes com foco em estabilidade.',
        ],
      },
      {
        title: 'Desenvolvedor Júnior',
        description: [
          'Desenvolvimento e manutenção de módulos em PowerBuilder.',
          'Escrita e revisão de scripts SQL para operações de dados.',
          'Participação em correção de bugs e suporte ao time sênior.',
          'Aprendizado contínuo das arquiteturas e padrões do sistema legado.',
        ],
      },
      {
        title: 'Estagiário',
        description: [
          'Introdução ao ambiente de desenvolvimento corporativo e às tecnologias da empresa.',
          'Suporte em tarefas de manutenção, testes e documentação.',
          'Primeiros contatos com PowerBuilder e com a arquitetura dos sistemas críticos.',
        ],
      },
    ],
  },
]

// ─── Stack ────────────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    label: 'Linguagens e Banco de Dados',
    skills: [
      'PowerBuilder',
      'SQL',
      'SQL Anywhere 16/17',
      'Python',
      'JavaScript',
      'TypeScript',
      'DataStore / DataWindow',
      'PBNI',
    ],
  },
  {
    label: 'Competências e Boas Práticas',
    skills: [
      'Performance Tuning',
      'Troubleshooting',
      'Análise de Incidentes',
      'Sistemas Legados',
      'Estabilidade e Confiabilidade',
      'Colaboração com QA/DBA',
      'Documentação Técnica',
      'Scripts SQL em Produção',
      'Análise de Logs e Tracing',
      'Investigação de GPF',
      'Apoio Técnico Fiscal/Contábil',
      'PowerShell / CMD',
    ],
  },
  {
    label: 'Frentes de Estudo e Transição',
    skills: [
      'React',
      'React Native',
      '.NET',
      'PL/SQL',
      'HTML5 & CSS3',
      'Tailwind CSS',
      'Vite',
    ],
  },
]

// ─── Projetos ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: 'Este portfólio',
    description:
      'Site de portfólio profissional construído com Vite, React, TypeScript e Tailwind CSS. Deploy estático no GitHub Pages via GitHub Actions.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
    href: person.github,
    status: 'real',
  },
  {
    title: 'Repositório em destaque — TODO',
    description:
      'Espaço reservado para um projeto ou repositório em destaque.',
    tags: [],
    href: null,
    status: 'todo',
  },
  {
    title: 'Repositório em destaque — TODO',
    description:
      'Espaço reservado para um segundo projeto ou repositório em destaque.',
    tags: [],
    href: null,
    status: 'todo',
  },
  {
    title: 'Estudos: React & Ecossistema Frontend',
    description:
      'Exploração do ecossistema React moderno: componentes, hooks, gerenciamento de estado, Vite, TypeScript e Tailwind CSS. Frente ativa de desenvolvimento pessoal.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    href: null,
    status: 'study',
  },
  {
    title: 'Estudos: .NET Backend',
    description:
      'Aprendizado de desenvolvimento backend moderno com .NET, Web API e integração com bancos de dados relacionais. Aproveitamento da base sólida em SQL.',
    tags: ['.NET', 'C#', 'Web API', 'SQL'],
    href: null,
    status: 'study',
  },
  {
    title: 'Estudos: React Native',
    description:
      'Exploração de desenvolvimento mobile multiplataforma com React Native, aproveitando o conhecimento em React para construção de interfaces mobile.',
    tags: ['React Native', 'TypeScript', 'Mobile'],
    href: null,
    status: 'study',
  },
  {
    title: 'Estudos: PL/SQL',
    description:
      'Aprofundamento em PL/SQL para desenvolvimento de lógica de banco de dados em Oracle, aproveitando a sólida base em SQL e SQL Anywhere.',
    tags: ['PL/SQL', 'Oracle', 'SQL'],
    href: null,
    status: 'study',
  },
]

// ─── Certificações ────────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    title: 'JavaScript: Programando a Orientação a Objetos',
    issuer: 'Alura',
    description: 'Paradigma orientado a objetos com JavaScript, classes, herança e encapsulamento.',
  },
  {
    title: 'ESLint: padronizando código com regras personalizadas',
    issuer: 'Alura',
    description: 'Configuração e criação de regras customizadas de linting para padronização de código.',
  },
  {
    title: 'ChatGPT: otimizando a qualidade dos resultados',
    issuer: 'Alura',
    description: 'Técnicas de prompt engineering e uso produtivo de IA generativa no dia a dia.',
  },
  {
    title: 'HTML5 e CSS3: parte 1',
    issuer: 'Alura',
    description: 'Fundamentos de HTML semântico e estilização com CSS3.',
  },
  {
    title: 'HTML5 e CSS3: parte 2',
    issuer: 'Alura',
    description: 'Aprofundamento em CSS3: layouts, responsividade e boas práticas.',
  },
]
