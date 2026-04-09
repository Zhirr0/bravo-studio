"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CatalystAnimations() {
  useSplitTextReveal({
    selector: ".catalyst h1",
    parent: ".catalyst",
    staggerFrom: "start",
    start: "left center+=300px",
    staggerAmount: 0.5,
    duration: 2,
  });
  useSplitTextReveal({
    selector: ".catalyst .catalyst-header",
    parent: ".catalyst",
    start: "left center+=300px",
    staggerFrom: "start",
    staggerAmount: 0.5,
    duration: 2,
  });
  useSplitTextReveal({
    selector: ".catalyst-para-text",
    parent: ".catalyst",
    type: "lines",
    staggerFrom: "start",
    staggerAmount: 0.5,
    duration: 1,
    start: "left center+=300px",
  });

  useGSAP(() => {
    const scroller = document.documentElement;
    document.fonts.ready.then(() => {
      SplitText.create(".catalyst-first-letter", {
        type: "chars",
        mask: "chars",
        onSplit(e) {
          gsap.from(e.chars, {
            xPercent: -100,
            ease: "power3.out",
            duration: 2,
            scrollTrigger: {
              trigger: ".catalyst",
              start: "left center+=300px",
              toggleActions: "play none none reverse",
              scroller,
              horizontal: true,
            },
          });
        },
      });
    });
  }, []);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".catalyst",
      start: "left right",
      scroller: document.documentElement,
      horizontal: true,
      scrub: true,
      onUpdate(e) {
        const progress = e.progress;
        const xPercent = gsap.utils.interpolate(0, -80, progress);
        gsap.set(".catalyst .img", { xPercent });
      },
    });
  }, []);

  return null;
}
