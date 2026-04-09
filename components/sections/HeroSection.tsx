import HeroAnimations from "../animations/HeroAnimations";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>VIEW ALL OF THE WORKS</h3>
        <div className="hero-featured-works">
          <h3>SCROLL FOR FEATURED WORK</h3>
          <HeroAnimations />
        </div>
      </div>
      <h1 className="leading-35 -translate-x-1">BRAVO</h1>
    </section>
  );
}
