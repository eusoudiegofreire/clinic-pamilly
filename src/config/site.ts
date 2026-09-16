/**
 * Fonte única de conteúdo e configuração da landing page.
 * Posicionamento: Alergia + Imunidade Infantil (imunidade segue como eixo principal).
 */

// TODO: trocar pelo domínio final antes de publicar.
export const SITE_URL = "https://pamilly.vercel.app";

// TODO: número de WhatsApp da clínica, formato internacional só com dígitos.
// Ex.: "5569999999999" (55 + DDD + número).
export const WHATSAPP_NUMBER = "5569000000000";
export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Dra. Pâmilly e gostaria de saber mais sobre a Consulta Online de Alergia e Imunologia Infantil.";

/** Link único do WhatsApp — todos os CTAs comerciais usam esta constante. */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const siteConfig = {
  name: "Life Clinic",
  doctor: "Dra. Pâmilly Barzzotto",
  doctorShort: "Dra. Pâmilly",
  role: "Pediatra | Alergista e Imunologista Infantil",
  tagline: "Consulta Online de Alergia e Imunologia Infantil",
  description:
    "Consulta online de Alergia e Imunologia Infantil com a Dra. Pâmilly Barzzotto para crianças e adolescentes de 0 a 15 anos.",
  url: SITE_URL,
  locale: "pt_BR",
  price: "R$ 680",
  ageRange: "0 a 15 anos",
  registrations: [
    "CRM-RO 5324",
    "RQE Pediatria 2623",
    "RQE Alergia e Imunologia 2624",
  ],
} as const;

/** Variações de CTA — todas levam ao WhatsApp. */
export const CTA_EVALUATION = "QUERO AGENDAR UMA AVALIAÇÃO";
export const CTA_CONSULTATION = "QUERO AGENDAR A CONSULTA";
export const CTA_FOR_CHILD = "QUERO UMA AVALIAÇÃO PARA MEU FILHO";
export const CTA_WHATSAPP = "Agende pelo WhatsApp";

export const nav = [
  { label: "Sintomas", href: "#sintomas" },
  { label: "A consulta", href: "#fluxo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
] as const;

export const topStrip = "Atendimento online • Crianças de 0 a 15 anos";

export const hero = {
  tag: "CONSULTA EM ALERGIA E IMUNIDADE INFANTIL • ONLINE",
  headlineLead: "Seu filho vive",
  headlineAccent: "doente",
  headlineRest: " ou sofre com alergias?",
  headlineSecond: "Entenda melhor o que pode estar acontecendo.",
  text: "Uma avaliação especializada e individualizada para crianças com alergias, infecções recorrentes ou dúvidas sobre a imunidade.",
  cta: CTA_EVALUATION,
  meta: "0 a 15 anos • Consulta online",
  card: {
    role: "Alergista e Imunologista Infantil",
    reg: "CRM-RO 5324",
  },
} as const;

/** Seção "O que os pais nos dizem" — relatos. */
export const painPoints = {
  kicker: "O que os pais nos dizem",
  title: "É uma gripe atrás da outra?",
  quotes: [
    "Meu filho vive doente. É uma infecção atrás da outra.",
    "Ele vive com rinite, tosse, coceira ou alergias que sempre voltam.",
    "Será que a imunidade dele é baixa?",
  ],
  question: "Seu filho passa por alguma dessas situações?",
  cta: CTA_EVALUATION,
} as const;

/** Seção "Nem tudo é imunidade baixa" — aprovada, não alterar a copy. */
export const notAlwaysImmunity = {
  badge: "IMPORTANTE SABER",
  headline:
    "Nem toda criança que adoece frequentemente tem “imunidade baixa”.",
  cta: CTA_FOR_CHILD,
} as const;

/** Fluxo da consulta — 6 etapas. Agendamento vem antes de tudo. */
export const consultationFlow = {
  kicker: "Como funciona",
  title: "Sua consulta, passo a passo.",
  steps: [
    {
      n: "01",
      title: "Agendamento e pagamento",
      text: "Escolha o melhor dia e horário e confirme sua consulta.",
    },
    {
      n: "02",
      title: "Questionário inicial",
      text: "Você receberá um questionário para que eu conheça melhor a história e as principais queixas da criança.",
    },
    {
      n: "03",
      title: "Avaliação prévia",
      text: "Após analisar as informações, serão solicitados exames iniciais antes da consulta.",
    },
    {
      n: "04",
      title: "Realização dos exames",
      text: "Você poderá realizá-los no laboratório de sua preferência.",
    },
    {
      n: "05",
      title: "Consulta online",
      text: "Um atendimento individualizado para avaliar o histórico da criança, alergias, infecções recorrentes, imunidade, exames e demais necessidades.",
    },
    {
      n: "06",
      title: "Plano de cuidados",
      text: "Ao final, você receberá as orientações e condutas individualizadas para o seu filho.",
    },
  ],
  closing:
    "Tudo pensado para que a consulta seja mais completa e direcionada às necessidades do seu filho.",
  cta: CTA_CONSULTATION,
} as const;

export const aboutDoctor = {
  kicker: "Conheça a Dra.",
  title: "Sobre a Dra. Pâmilly",
  name: siteConfig.doctor,
  role: siteConfig.role,
  registrations: siteConfig.registrations,
  watermark: "Pâmilly",
  cta: CTA_FOR_CHILD,
} as const;

/**
 * Vídeos — ainda não gravados. Enquanto `embedUrl` e `src` estiverem vazios,
 * o site mostra um espaço reservado neutro (sem thumbnail, sem foto).
 *
 * Para publicar, preencha UM dos dois:
 * - embedUrl: YouTube/Vimeo, ex. "https://www.youtube-nocookie.com/embed/ID_DO_VIDEO"
 * - src:      arquivo local em /public/videos, ex. "/videos/apresentacao.mp4"
 * `poster` (opcional) é a capa do arquivo local.
 */
export const videos = {
  intro: {
    kicker: "Assista",
    title: "Conheça a Dra. Pâmilly",
    embedUrl: "",
    src: "",
    poster: "",
  },
  allergyImmunity: {
    kicker: "Assista",
    title: "Alergia, imunidade e a saúde do seu filho",
    embedUrl: "",
    src: "",
    poster: "",
  },
} as const;

export const testimonials = {
  kicker: "Histórias de famílias",
  title: "O que famílias atendidas pela Dra. Pâmilly contam",
  // TODO: adicionar os vídeos reais em /public/images/depoimento-*.jpg + arquivos de vídeo.
  items: [
    { id: 1, poster: "/images/depoimento-1.jpg" },
    { id: 2, poster: "/images/depoimento-2.jpg" },
    { id: 3, poster: "/images/depoimento-3.jpg" },
  ],
  cta: CTA_EVALUATION,
} as const;

export const offer = {
  kicker: "A consulta",
  title: "Consulta Online de Alergia e Imunologia Infantil",
  price: siteConfig.price,
  items: [
    // hífen inseparável (U+2011) para "pré‑consulta" não quebrar no mobile
    "Questionário detalhado pré‑consulta",
    "Solicitação individualizada de exames",
    "Consulta online de aproximadamente 1 hora",
    "Avaliação completa da história da criança",
    "Avaliação dos exames já realizados",
    "Plano de cuidados e orientações individualizadas",
  ],
  support: {
    title: "45 dias de suporte após a consulta",
    text: "Canal online para dúvidas relacionadas às orientações realizadas durante o atendimento.",
    notice:
      "O suporte não substitui atendimento de urgência e não contempla avaliação de novas queixas.",
  },
  cta: CTA_CONSULTATION,
} as const;

export const faq = {
  kicker: "Dúvidas",
  title: "Perguntas frequentes",
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
      a: "Após o agendamento e o questionário inicial, as informações são analisadas e são solicitados exames iniciais antes da consulta. Você poderá realizá-los no laboratório de sua preferência.",
    },
    {
      q: "O que está incluído no valor?",
      a: "Questionário detalhado pré-consulta, solicitação individualizada de exames, consulta online de aproximadamente 1 hora, avaliação completa da história da criança, avaliação dos exames já realizados, plano de cuidados e orientações individualizadas, e 45 dias de suporte após a consulta.",
    },
  ],
} as const;

export const footer = {
  clinic: "Life Clinic",
  doctor: siteConfig.doctor,
  role: siteConfig.role,
  registrations: siteConfig.registrations,
  note: "Atendimento online para todo o Brasil.",
} as const;
