import Image from "next/image";
import OurVoiceAnimations from "../animations/OurVoiceAnimations";

export default function OurVoice() {
  return (
    <section className="our-voice">
      <OurVoiceAnimations />
      <div className="our-voice-content">
        <h1>
          OUR
          <br />
          VOICE
        </h1>
        <h5>IDENTITY, PRINT, MOTION</h5>
        <h3>
          Multilingual voting <br /> campaign identity
        </h3>
      </div>
      <div className="our-voice-book bg-content-primary absolute bottom-0 left-0">
        <Image
          src={"/images/our-voice-hola.webp"}
          className="w-full h-full object-cover"
          alt="our voice hola image"
          width={567}
          height={380}
        />
      </div>
      <div className="our-voice-image h-svh w-[723px] absolute top-0 right-0">
        <Image
          className="h-full"
          src={"/images/our-voice.webp"}
          alt="our voice hola image"
          width={723}
          loading="eager"
          height={800}
        />
      </div>
    </section>
  );
}
