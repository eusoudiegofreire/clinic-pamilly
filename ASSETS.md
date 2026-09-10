# Assets e pendências

## Imagens

Os originais ficam em `/imagens` (fora do build). Rode `npm run images` para
gerar as versões web em `/public/images` + `og-image.jpg` + `src/app/icon.png`.

Mapeamento atual (editável em `scripts/optimize-images.mjs`):

| Saída | Origem | Uso |
|---|---|---|
| `pamilly-hero.{webp,jpg}` | `IMG_7146.JPEG` | foto do Hero |
| `pamilly-sobre.{webp,jpg}` | `IMG_7148.JPEG` | seção "Sobre a Dra. Pâmilly" |
| `logo-life-clinic.png` | `Logo-Life-Clinic-transparente.png` | header |
| `logo-life-clinic-branca.png` | recolorida do original | footer (fundo petróleo) |
| `og-image.jpg` | logo sobre petróleo | Open Graph / compartilhamento |
| `depoimento-1..3.jpg` | **placeholder bege** | seção de depoimentos |

## Pendências (TODO)

1. **Vídeos de depoimento** — não vieram. Hoje há 3 placeholders bege.
   Trocar por thumbnails reais + embutir os vídeos em `src/components/Testimonials.tsx`.
2. **Perguntas do FAQ** — o documento só definiu o estilo do accordion.
   As 4 perguntas em `src/config/site.ts` (`faq.items`) são rascunho — revisar com a clínica.
3. **Link de agendamento/pagamento** — `CHECKOUT_URL` em `src/config/site.ts`
   está como `#oferta`. Colocar o link real (Hotmart, WhatsApp, checkout...).
4. **Domínio** — `SITE_URL` em `src/config/site.ts` é placeholder (`pamilly.vercel.app`).
5. **Logo em petróleo** — o documento sugere a versão petróleo da marca no footer.
   Hoje é a logo rosa recolorida para branco. Se a clínica tiver o arquivo oficial
   em petróleo, substituir.
6. **Foto do Hero** — `IMG_7146` (em pé, parede da marca). Se preferir outra das 8
   fotos, é só trocar em `scripts/optimize-images.mjs` e rodar `npm run images`.

## Rodar o projeto

```
npm install
npm run images   # gera os assets
npm run dev      # http://localhost:3000
npm run build    # build de produção
```
