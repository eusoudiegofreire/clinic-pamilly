# Life Clinic — Dra. Pâmilly | Consulta de Imunidade Infantil Online

Landing page (Next.js 16 + React 19 + Tailwind v4).

- Copy e identidade visual seguem o documento de referência da clínica.
- Paleta, tipografia e métricas centralizadas em `src/app/globals.css` e `src/config/site.ts`.
- Micro-interações de spring adaptadas do projeto [ckissi/kinetics](https://github.com/ckissi/kinetics)
  (botões, accordion, reveal on scroll) — recoloridas para a paleta petróleo/salmão.

## Estrutura

```
src/
  app/            layout, page, globals, robots, sitemap, icon
  components/     Header, Hero, PainPoints, NotAlwaysImmunity, ConsultationFlow,
                 AboutDoctor, Testimonials, Offer, Faq, Footer, CtaButton, Reveal
  config/site.ts  toda a copy + configuração (preços, registros, CTAs, FAQ)
scripts/
  optimize-images.mjs   gera /public/images a partir de /imagens
```

Ver `ASSETS.md` para as pendências (vídeos, FAQ, link de checkout, domínio).

## Comandos

```
npm install
npm run images
npm run dev
npm run build
```
