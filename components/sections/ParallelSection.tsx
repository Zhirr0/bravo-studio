import Image from "next/image";
import ParallelAnimations from "../animations/ParallelAnimations";

export default function ParallelSection() {
  return (
    <section className="parallel overflow-hidden w-[150svw]">
      <ParallelAnimations />
      <div className="p-left flex flex-col items-center h-svh gap-4">
        <div className="p-left-image">
          <Image
            src={"/images/parallel-left.png"}
            alt="parallel-left"
            className="w-[476px] h-full -translate-y-1"
            width={476}
            height={603}
            loading="eager"
          />
        </div>
        <div className="p-header -translate-y-2">
          <div className="horizontal w-full mb-2 h-[3px] bg-content-primary"></div>
          <h1 className="leading-15 whitespace-nowrap">PARALLEL</h1>
        </div>
      </div>
      <div className="p-middle">
        <Image
          src={"/images/parallel-middle.png"}
          alt="parallel middle image"
          width={782}
          height={746}
          loading="eager"
        />
      </div>
      <div className="p-right">
        <div className="p-right-content">
          <h5 className="text-[30px]">EXHIBITION</h5>
          <p className="w-[443px] text-[20px] leading-6">
            Shared Shader is a social awareness campaign built around a simple
            but powerful idea that trees and urban shade are not a luxury but a
            shared right. The identity and poster series translate this urgency
            into stark, high contrast visuals that feel as at home on a city
            wall as they do in a gallery. Minimal, direct, and quietly radical.
          </p>
        </div>
        <div className="p-right-image">
          
        <Image
          src={"/images/parallel-right.png"}
          alt="parallel left image"
          width={443}
          height={434}
          loading="eager"
        />
        </div>
      </div>
    </section>
  );
}
