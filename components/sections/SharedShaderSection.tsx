import Image from "next/image";
import SharedShaderAnimations from "../animations/SharedShaderAnimations";

export default function SharedShader() {
  return (
    <section className="shared-shader">
      <SharedShaderAnimations />
      <div className="sh-left">
        <div className="sh-header">
          <h1>
            SHARED
            <br />
            SHADER
          </h1>
        </div>
        <div className="sh-left-image">
          <Image
            src={"/images/sh-left-image.webp"}
            alt="shared shader image"
            width={767}
            height={536}
          />
        </div>
      </div>
      <div className="sh-middle flex justify-center items-center">
        <div className="vertical h-[80svh] w-[5px] rounded-sm bg-content-primary"></div>
      </div>
      <div className="sh-right">
        <div className="sh-right-image">
          <Image
            src={"/images/sh-right-image.webp"}
            alt="shared shader image"
            width={889}
            height={566}
            loading="eager"
          />
        </div>
        <div className="sh-right-content">
          <h5 className="text-[30px] mt-[10px]">IDENTITY, PACKAGING, PRINT</h5>
          <p className="text-[20px] -translate-y-[5px] -tracking-[.1px] leading-5">
            Shared Shader is a social awareness campaign built around a simple
            but powerful idea that trees and urban shade are not a luxury but a
            shared right. The identity and poster series translate this urgency
            into stark, high contrast visuals that feel as at home on a city
            wall as they do in a gallery. Minimal, direct, and quietly radical.
          </p>
        </div>
      </div>
    </section>
  );
}
