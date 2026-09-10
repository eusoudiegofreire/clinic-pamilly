/**
 * Gera os assets web em /public/images a partir dos originais em /imagens.
 * Uso: npm run images
 *
 * Os originais (10 MB cada) ficam fora do build — ver .gitignore.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = path.resolve("imagens");
const OUT = path.resolve("public/images");

/** Fotos: original -> nome de saída + largura máxima. */
const PHOTOS = [
  { from: "IMG_7146.JPEG", to: "pamilly-hero", width: 950 },
  { from: "IMG_7147.JPEG", to: "pamilly-sobre-1", width: 760 },
  { from: "IMG_7141 (1).JPEG", to: "pamilly-sobre-2", width: 560 },
  { from: "IMG_7143.JPEG", to: "pamilly-sintomas-1", width: 560 },
  { from: "IMG_7142.JPEG", to: "pamilly-sintomas-2", width: 560 },
  { from: "IMG_7145.JPEG", to: "pamilly-fluxo", width: 1100 },
  { from: "IMG_7148.JPEG", to: "pamilly-oferta", width: 620 },
];

async function photos() {
  for (const job of PHOTOS) {
    const pipe = sharp(path.join(SRC, job.from))
      .rotate()
      .resize({ width: job.width, withoutEnlargement: true });

    await pipe.clone().webp({ quality: 82 }).toFile(path.join(OUT, `${job.to}.webp`));
    await pipe
      .clone()
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(path.join(OUT, `${job.to}.jpg`));
    console.log(`foto  ${job.from} -> ${job.to}.{webp,jpg}`);
  }
}

/** Logo: versão para fundo claro + versão branca (para o footer petróleo). */
async function logos() {
  const src = path.join(SRC, "Logo-Life-Clinic-transparente.png");
  const W = 440;

  // Resize primeiro para um buffer PNG, e trabalhar a partir dele.
  const resized = await sharp(src)
    .resize({ width: W, withoutEnlargement: true })
    .png()
    .toBuffer();

  await sharp(resized).toFile(path.join(OUT, "logo-life-clinic.png"));
  console.log("logo  -> logo-life-clinic.png");

  // Recolore para branco preservando o alfa original.
  const meta = await sharp(resized).metadata();
  const alpha = await sharp(resized)
    .ensureAlpha()
    .extractChannel(3)
    .toColourspace("b-w")
    .toBuffer();

  await sharp({
    create: {
      width: meta.width,
      height: meta.height,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .joinChannel(alpha)
    .png()
    .toFile(path.join(OUT, "logo-life-clinic-branca.png"));
  console.log("logo  -> logo-life-clinic-branca.png (branca)");
}

/**
 * Placeholders dos vídeos de depoimento (bege quente).
 * TODO: substituir por thumbnails reais dos depoimentos.
 */
async function testimonialPlaceholders() {
  for (let i = 1; i <= 3; i++) {
    await sharp({
      create: {
        width: 720,
        height: 960,
        channels: 3,
        background: { r: 240, g: 218, b: 206 },
      },
    })
      .jpeg({ quality: 70 })
      .toFile(path.join(OUT, `depoimento-${i}.jpg`));
  }
  console.log("placeholder  -> depoimento-1..3.jpg (TODO: trocar)");
}

/** OG image 1200x630 — logo branca sobre petróleo. */
async function ogImage() {
  const resized = await sharp(path.join(SRC, "Logo-Life-Clinic-transparente.png"))
    .resize({ width: 520 })
    .png()
    .toBuffer();
  const meta = await sharp(resized).metadata();
  const alpha = await sharp(resized)
    .ensureAlpha()
    .extractChannel(3)
    .toColourspace("b-w")
    .toBuffer();
  const white = await sharp({
    create: {
      width: meta.width,
      height: meta.height,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .joinChannel(alpha)
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: { r: 49, g: 87, b: 91 },
    },
  })
    .composite([{ input: white, gravity: "centre" }])
    .jpeg({ quality: 86 })
    .toFile(path.resolve("public/og-image.jpg"));
  console.log("og    -> public/og-image.jpg");
}

/** Favicon a partir do símbolo da logo. */
async function favicon() {
  await sharp(path.join(SRC, "Logo-Life-Clinic-fundo-branco.png"))
    .resize({ width: 512, height: 512, fit: "cover", position: "left top" })
    .png()
    .toFile(path.resolve("src/app/icon.png"));
  console.log("icon  -> src/app/icon.png");
}

async function run() {
  await mkdir(OUT, { recursive: true });
  await photos();
  await logos();
  await testimonialPlaceholders();
  await ogImage();
  await favicon();
  console.log("\nok");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
