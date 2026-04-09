"use client";
import { useClipReveal } from "@/hooks/useClipReveal";
import { useHorizontalLineReveal } from "@/hooks/useLineReveal";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ParallelAnimations() {
  useSplitTextReveal({
    selector: ".parallel .p-header h1",
    parent: ".parallel",
    staggerFrom: "start",
  });
  useSplitTextReveal({
    selector: ".parallel .p-right-content h5",
    parent: ".parallel",
    staggerFrom: "start",
    start: "left center-=850px",
    type: "words",
  });
  useSplitTextReveal({
    selector: ".parallel .p-right-content p",
    parent: ".parallel",
    staggerFrom: "start",
    start: "left center-=850px",
    type: "lines",
  });
  useHorizontalLineReveal({
    selector: ".parallel .p-header .horizontal",
    trigger: ".parallel",
    delayAmount: "+=300px",
  });
  useClipReveal({
    delayAmount: "+=300px",
    img: ".p-left-image img",
    imagesContainer: ".p-left-image",
    clippathFrom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    trigger: ".parallel",
  });

  useClipReveal({
    img: ".p-middle img",
    imagesContainer: ".p-middle",
    delayAmount: "+=100px",
    clippathFrom: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    trigger: ".parallel",
  });

  useClipReveal({
    img: ".p-right-image img",
    imagesContainer: ".p-right-image",
    delayAmount: "-=850px",
    clippathFrom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    trigger: ".parallel",
  });

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".parallel",
      start: "left right",
      end: "left left-=2000px",
      scroller: document.documentElement,
      horizontal: true,
      onUpdate(e) {
        const p = e.progress;
        const xPercent = gsap.utils.interpolate(0, -20, p);
        gsap.set(".p-middle", { xPercent });
      },
    });  
  }, []);

  return null;
}
