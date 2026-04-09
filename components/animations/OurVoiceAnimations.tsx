"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useClipReveal } from "@/hooks/useClipReveal";

const clippathFrom = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
const clippathTo = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
export default function OurVoiceAnimations() {
  useGSAP(() => {
    gsap.set(".our-voice-image", { clipPath: clippathFrom });
  }, []);

  useSplitTextReveal({ selector: ".our-voice h1", parent: ".our-voice" });

  useSplitTextReveal({
    selector: ".our-voice h3",
    parent: ".our-voice",
    staggerFrom: "start",
    type: "words",
  });
  
  useSplitTextReveal({
    selector: ".our-voice h5",
    parent: ".our-voice",
    staggerFrom: "start",
    type: "words",
  });

  useGSAP(() => {
    const scroller = document.documentElement;

    ScrollTrigger.create({
      trigger: ".our-voice",
      start: "left right",
      end: "left left-=300px",
      scroller,
      horizontal: true,
      scrub: true,
      toggleActions: "play none none reverse",
      onUpdate(e) {
        const scale = gsap.utils.interpolate(1, 0.7, e.progress);
        gsap.set(".our-voice-book img", { scale });
      },
    });
  }, []);

  useClipReveal({
    img: ".our-voice-image img",
    imagesContainer: ".our-voice-image",
    delayAmount: "-=400px",
    clippathFrom,
    clippathTo,
    trigger: ".our-voice",
  });

  return null;
}
