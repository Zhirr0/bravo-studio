"use client";
import { useClipReveal } from "@/hooks/useClipReveal";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FolioAnimations() {
  useSplitTextReveal({
    selector: ".folio .folio-left-content h1",
    parent: ".folio",
    staggerFrom: "start",
    duration: 2,
    ease: "power4.out",
  });

  useSplitTextReveal({
    selector: ".folio .folio-left-content h5",
    parent: ".folio",
    staggerFrom: "start",
    duration: 2,
    ease: "power4.out",
  });

  useSplitTextReveal({
    selector: ".folio .folio-right-content p",
    parent: ".folio",
    staggerFrom: "start",
    duration: 2,
    ease: "power4.out",
    type: "lines",
    start: "left center-=500px",
    staggerAmount: 0.5,
  });

  useClipReveal({
    img: ".folio-left .img img",
    imagesContainer: ".folio-left .img",
    trigger: ".folio",
    delayAmount: "+=300px",
    clippathFrom: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  });

  useClipReveal({
    img: ".folio-right-bottom .img img",
    imagesContainer: ".folio-right-bottom .img",
    trigger: ".folio",
    delayAmount: "-=500px",
    clippathFrom: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  });

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".folio",
      start: "left right",
      end: "left left-=2000px",
      scroller: document.documentElement,
      horizontal: true,
      onUpdate(e) {
        const p = e.progress;
        const xPercent = gsap.utils.interpolate(0, -20, p);
        gsap.set(".folio-right-bottom .img", { xPercent });
      },
    });
  }, []);

  useGSAP(() => {
    gsap.to("#folio-path", {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".folio",
        scroller: document.documentElement,
        horizontal: true,
        start: "left center+=300px",
        end: "left center-=30000px",
        scrub: true,
      },
    });
  }, []);

  return null;
}
