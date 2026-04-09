import Image from "next/image";
import CatalystAnimations from "../animations/CatalystAnimations";

export default function Catalyst() {
  return (
    <section className="catalyst">
      <CatalystAnimations />
      <h1>CATALYST</h1>
      <div className="catalyst-header">
        <h3>CONFERANCE PRINT</h3>
        <h5>IDENTITY, PRINT</h5>
      </div>
      <div className="catalyst-para">
        <p>
          <span className="catalyst-first-letter">B</span>
          <span className="catalyst-para-text">
            ravo Studio&apos;s identity for CATALYST: Book + Conference Seoul
            &apos;24 is a bold celebration of print culture through colliding
            neon palettes, fragmented grids, and restless typography. Hangul and
            Latin type are woven together with equal confidence, scaling from
            massive environmental signage down to tote bags without losing its
            energy. Chaotic on the surface, deeply intentional underneath.
          </span>
        </p>
      </div>
      <div className="img">
        <Image
          src={"/images/catalyst.png"}
          alt="catalyst image"
          width={361}
          height={527}
        />
      </div>
    </section>
  );
}
