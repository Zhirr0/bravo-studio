import Image from "next/image";
import FolioSVG from "../ui/FolioSVG";
import FolioAnimations from "../animations/FolioAnimations";

export default function FolioSection() {
  return (
    <section className="folio relative">
      <FolioAnimations />
      <div className="folio-svg-container absolute left-25 top-18">
        <FolioSVG className="overflow-visible" />
      </div>
      <div className="folio-left">
        <div className="img">
          <Image
            src={"/images/folio-left-image.webp"}
            alt="folio on mobile"
            width={494}
            height={511}
            loading="eager"
          />
        </div>
        <div className="folio-left-content">
          <h1>FOLIO</h1>
          <h5>IDENTITY, PRINT</h5>
        </div>
      </div>
      <div className="folio-right items-start">
        <div className="folio-right-top flex flex-row gap-2">
          <div className="folio-right-content ml-10 w-[441px]">
            <p className="leading-6 pt-[50px]">
              time tracking and{" "}
              <span className="special-content">PROJECT MANAGEMENT</span> app
              built specifically for{" "}
              <span className="special-content">FREELANCE DESIGNERS</span> to
              organize client work, log billable hours, and stay on top of
              deadlines.
            </p>
          </div>
        </div>
        <div className="folio-right-bottom">
          <div className="img">
            <Image
              src={"/images/folio-right-down-image.webp"}
              alt="folio text on iphone"
              width={840}
              height={451}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
