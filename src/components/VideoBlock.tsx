import { Play } from "./icons";

type VideoBlockProps = {
  title: string;
  /** YouTube/Vimeo embed (ex.: https://www.youtube-nocookie.com/embed/ID) */
  embedUrl?: string;
  /** Arquivo local em /public/videos */
  src?: string;
  poster?: string;
  className?: string;
};

/**
 * Player 16:9 com cantos arredondados. Sem vídeo configurado, mostra um espaço
 * reservado neutro (sem thumbnail e sem foto) pronto para receber o arquivo.
 */
export default function VideoBlock({
  title,
  embedUrl,
  src,
  poster,
  className = "",
}: VideoBlockProps) {
  const frame = `relative aspect-video w-full overflow-hidden rounded-card border border-card-border shadow-[var(--shadow-soft)] ${className}`;

  if (embedUrl) {
    return (
      <div className={`${frame} bg-primary`}>
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  if (src) {
    return (
      <div className={`${frame} bg-primary`}>
        <video
          src={src}
          poster={poster || undefined}
          controls
          playsInline
          preload="metadata"
          aria-label={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`${frame} grid place-items-center bg-warm-beige/60`}
      role="img"
      aria-label={`${title} — vídeo em breve`}
    >
      <span className="flex flex-col items-center gap-3">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-white/92 text-primary shadow-[var(--shadow-soft)] sm:h-16 sm:w-16">
          <Play className="ml-0.5 h-6 w-6" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/55">
          Vídeo em breve
        </span>
      </span>
    </div>
  );
}
