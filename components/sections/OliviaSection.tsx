import Image from "next/image";
import OliviaAnimations from "../animations/OliviaAnimations";

export default function OliviaSection() {
  return (
    <section className="olivia relative">
      <OliviaAnimations />
      <div className="vertical absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px rounded-lg h-[80svh] bg-content-primary"></div>
      <div className="olivia-left">
        <div className="olivia-left-header">
          <h1>OLIVIA</h1>
          <h5>IDENTITY</h5>
        </div>
        <div className="olivia-left-image-container overflow-hidden">
          <div className="olivia-left-image">
            <Image
              src={"/images/olivia-left.webp"}
              alt="olivia dine and wine"
              width={704}
              height={469}
            />
          </div>
        </div>
        <div className="olivia-left-content">
          <p>
            <span className="special-content">OLIVIA</span> is an elegant and
            tasteful twist on the street food experience that celebrates
            artistry and light foods. The branding reflects a luxurious yet
            feminine voice while highlighting the decorative aspect of every
            serving plate.
          </p>
        </div>
      </div>
      <div className="olivia-right flex gap-5 justify-start flex-col items-end">
        <div className="olivia-right-image-container overflow-hidden">
          <div className="olivia-right-image">
            <Image
              src={"/images/olivia-right.webp"}
              alt="olivia dine and wine"
              width={721}
              height={645}
            />
          </div>
        </div>
        <div className="olivia-horizontal w-[90%] -translate-x-10 translate-y-3 flex justify-center items-center">
          <div className="horizontal rounded-lg bg-content-primary h-px w-full"></div>
        </div>
      </div>
    </section>
  );
}
