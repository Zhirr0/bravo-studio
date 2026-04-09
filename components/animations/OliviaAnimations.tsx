"use client";
import { useClipReveal } from "@/hooks/useClipReveal";
import { useHorizontalLineReveal, useVerticalLineReveal } from "@/hooks/useLineReveal";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function OliviaAnimations() {
  useSplitTextReveal({
    selector: ".olivia .olivia-left h1",
    parent: ".olivia",
    staggerFrom: "start",
    duration: 2,
    ease: "power4.out",
  });
  useSplitTextReveal({
    selector: ".olivia .olivia-left h5",
    parent: ".olivia",
    staggerFrom: "start",
    duration: 2,
    ease: "power4.out",
  });
  useSplitTextReveal({
    selector: ".olivia .olivia-left-content p",
    parent: ".olivia",
    staggerFrom: "start",
    duration: 2,
    ease: "power4.out",
  });
  useClipReveal({
    clippathFrom: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    img: ".olivia-left-image-container .olivia-left-image img",
    imagesContainer: ".olivia-left-image-container .olivia-left-image",
    trigger: ".olivia",
    delayAmount: "+=300px",
  });

  useClipReveal({
    clippathFrom: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    img: ".olivia-right-image-container .olivia-right-image img",
    imagesContainer: ".olivia-right-image-container .olivia-right-image",
    trigger: ".olivia",
    delayAmount: "-=300px",
  });

  useVerticalLineReveal({
    selector: ".olivia .vertical", delayAmount: "-=300px", trigger: '.olivia', transformOrigin: "bottom center"
  })
  useHorizontalLineReveal({
    selector: ".olivia .olivia-horizontal", delayAmount: "-=500px", trigger: '.olivia'
  })

  return null;
}
