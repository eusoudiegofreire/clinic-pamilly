/**
 * Fonte única de conteúdo e configuração da landing page.
 * A copy segue exatamente o documento de referência da identidade visual.
 */

// TODO: trocar pelo domínio final antes de publicar.
export const SITE_URL = "https://pamilly.vercel.app";

// TODO: link real de agendamento / pagamento (Hotmart, WhatsApp, checkout...).
export const CHECKOUT_URL = "#oferta";

export const siteConfig = {
  name: "Life Clinic",
  doctor: "Dra. Pâmilly Barzzotto",
  doctorShort: "Dra. Pâmilly",
  role: "Pediatra | Alergista e Imunologista Infantil",
  tagline: "Consulta de Imunidade Infantil Online",
  description:
    "Uma avaliação individualizada da imunidade infantil, de 0 a 15 anos, com a Dra. Pâmilly. Consulta online para entender por que seu filho vive doente.",
  url: SITE_URL,
  locale: "pt_BR",
  price: "R$ 680",
  ageRange: "0 a 15 anos",
  registrations: ["CRM-RO 5324", "RQE Pediatria 2623", "RQE Alergia e Imunologia 2624"],
} as const;

export const CTA_PRIMARY = "QUERO AVALIAR A IMUNIDADE DO MEU FILHO";

export const hero = {
  tag: "CONSULTA DE IMUNIDADE INFANTIL • ONLINE",
  headlineLead: "Seu filho vive doente?",
  headlineRest: "Entenda melhor por que isso está acontecendo.",
  text: "Uma avaliação individualizada da imunidade infantil.",
  cta: CTA_PRIMARY,
  meta: "0 a 15 anos • Consulta online • R$ 680",
} as const;

/** Seção "É uma gripe atrás da outra?" — frases reais dos pais. */
export const painPoints = {
  title: "É uma gripe atrás da outra?",
  quotes: [
    "Meu filho vive doente.",
    "É uma gripe atrás da outra.",
    "Será que a imunidade dele é baixa?",
  ],
} as const;

/** Seção "Nem tudo é imunidade baixa". */
export const notAlwaysImmunity = {
  badge: "IMPORTANTE SABER",
  headline:
    "Nem toda criança que adoece frequentemente tem “imunidade baixa”.",
} as const;

/** Fluxo da consulta — passos exatamente como no documento. */
export const consultationFlow = {
  title: "Fluxo da consulta",
  steps: [
    { n: "01", label: "Pagamento" },
    { n: "02", label: "Questionário" },
    { n: "03", label: "Exames em até 72h" },
    { n: "04", label: "Realize os exames" },
    { n: "05", label: "Agendamento" },
    { n: "06", label: "Consulta online" },
    { n: "07", label: "Orientações" },
    { n: "08", label: "45 dias de suporte" },
  ],
} as const;

export const aboutDoctor = {
  title: "Sobre a Dra. Pâmilly",
  name: siteConfig.doctor,
  role: siteConfig.role,
  registrations: siteConfig.registrations,
} as const;

export const testimonials = {
  title: "O que famílias atendidas pela Dra. Pâmilly contam",
  // TODO: adicionar os vídeos reais em /public/images/depoimentos-*.jpg + arquivos de vídeo.
  items: [
    { id: 1, poster: "/images/depoimento-1.jpg" },
    { id: 2, poster: "/images/depoimento-2.jpg" },
    { id: 3, poster: "/images/depoimento-3.jpg" },
  ],
} as const;

export const offer = {
  title: "Consulta de Imunidade Infantil Online",
  price: siteConfig.price,
  items: [
    "Questionário pré-consulta",
    "Solicitação individualizada de exames",
    "Consulta de aproximadamente 1 hora",
    "Avaliação dos resultados",
    "Orientações individualizadas",
    "45 dias de suporte",
  ],
  cta: CTA_PRIMARY,
} as const;

export const faq = {
  title: "Perguntas frequentes",
  // TODO: substituir pelas perguntas e respostas reais fornecidas pela clínica.
  items: [
    {
      q: "Para qual faixa de idade é a consulta?",
      a: "A consulta atende crianças e adolescentes de 0 a 15 anos.",
    },
    {
      q: "A consulta é totalmente online?",
      a: "Sim. A consulta é realizada por vídeo, com cerca de 1 hora de duração. Os exames são feitos presencialmente em laboratório antes da consulta.",
    },
    {
      q: "Como funcionam os exames?",
      a: "Após o questionário pré-consulta, a Dra. Pâmilly faz uma solicitação individualizada de exames, liberada em até 72h. Você realiza os exames e, em seguida, agenda a consulta.",
    },
    {
      q: "O que está incluído no valor?",
      a: "Questionário pré-consulta, solicitação individualizada de exames, consulta de aproximadamente 1 hora, avaliação dos resultados, orientações individualizadas e 45 dias de suporte.",
    },
  ],
} as const;

export const footer = {
  clinic: "Life Clinic",
  doctor: siteConfig.doctor,
  role: siteConfig.role,
  registrations: siteConfig.registrations,
  // TODO: dados reais de contato / endereço / redes.
  note: "Atendimento online para todo o Brasil.",
} as const;
