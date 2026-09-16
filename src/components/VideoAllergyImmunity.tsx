import Reveal from "./Reveal";
import VideoBlock from "./VideoBlock";
import { videos } from "@/config/site";

/** Vídeo 2 — alergia, imunidade e como a Dra. Pâmilly pode ajudar. */
export default function VideoAllergyImmunity() {
  const video = videos.allergyImmunity;

  return (
    <section className="bg-off-white py-16 md:py-24">
      <div className="wrap max-w-4xl">
        <Reveal className="text-center">
          <p className="kicker kicker--center">{video.kicker}</p>
          <h2 className="mt-5 text-3xl sm:text-4xl">{video.title}</h2>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <VideoBlock
            title={video.title}
            embedUrl={video.embedUrl}
            src={video.src}
            poster={video.poster}
          />
        </Reveal>
      </div>
    </section>
  );
}
