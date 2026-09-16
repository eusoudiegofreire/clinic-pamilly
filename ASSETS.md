# Assets e pendências

## Imagens

Originais em `/imagens` (fora do build). `npm run images` gera `/public/images`
+ `og-image.jpg` + `src/app/icon.png`. Mapa em `scripts/optimize-images.mjs`:

| Saída | Origem | Uso |
|---|---|---|
| `pamilly-hero` | `IMG_7146` | foto do Hero (em pé, parede da marca) |
| `pamilly-sintomas-1/2` | `IMG_7143`, `IMG_7142` | colagem da seção "É uma gripe atrás da outra?" |
| `pamilly-fluxo` | `IMG_7145` | seção "Fluxo da consulta" |
| `pamilly-sobre-1/2` | `IMG_7147`, `IMG_7141` | colagem da seção "Sobre a Dra. Pâmilly" |
| `pamilly-oferta` | `IMG_7148` | seção da oferta (banda petróleo) |
| `logo-life-clinic` / `-branca` | logo transparente / recolorida | header / footer |
| `og-image.jpg` | logo sobre petróleo | compartilhamento |
| `depoimento-1..3.jpg` | **placeholder bege** | depoimentos |

## Pendências (TODO)

1. **`WHATSAPP_NUMBER`** em `src/config/site.ts` — hoje `5569000000000` (placeholder).
   Todos os CTAs usam a constante única `WHATSAPP_URL` (com mensagem pré-preenchida).
   Trocar pelo número real.
2. **Vídeos institucionais** (`videos` em `src/config/site.ts`) — "Conheça a Dra. Pâmilly"
   (abaixo da seção Sobre) e "Alergia, imunidade e a saúde do seu filho" (após
   "Nem toda criança…"). Hoje mostram espaço reservado "Vídeo em breve". Preencher
   `embedUrl` (YouTube/Vimeo) **ou** `src` (arquivo em `/public/videos`) e o player aparece.
3. **Vídeos de depoimento** — não vieram. 3 placeholders bege; trocar por thumbnails
   reais + embutir os vídeos em `src/components/Testimonials.tsx`.
4. **Perguntas do FAQ** — mantidas como aprovadas; só as respostas sobre exames e
   itens incluídos foram ajustadas ao novo fluxo.
5. **`SITE_URL`** — placeholder (`pamilly.vercel.app`). Ajustar para o domínio real
   (usado em sitemap, JSON-LD, Open Graph).
6. **Logo em petróleo** — o documento sugere a versão petróleo da marca no footer;
   hoje é a logo rosa recolorida para branco. Substituir se houver o arquivo oficial.

## Decisões de design

- Layout inspirado nas referências enviadas (Dra. Gabriela Arêdes / Dra. Melina Batista):
  fotografia forte, headline grande, botão-pílula com disco de ícone repetido a cada
  seção, cores de seção alternadas, faixa fina no topo.
- Posicionamento (set/2026): Alergia + Imunidade Infantil, com imunidade como eixo
  principal. CTAs variam entre 3 textos e todos levam ao WhatsApp (sem checkout).
- Paleta e métricas seguem o documento de identidade da Life Clinic (petróleo/salmão/bege).
- Títulos em Manrope 800 (não serifada), conforme pedido.
- Copy vem do documento original + rodada de alterações de set/2026.

## Rodar

```
npm install
npm run images
npm run dev      # http://localhost:3000
npm run build
```
