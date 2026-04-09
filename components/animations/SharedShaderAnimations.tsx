"use client";
import { useClipReveal } from "@/hooks/useClipReveal";
import { useVerticalLineReveal } from "@/hooks/useLineReveal";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const clippathFrom = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
const clippathTo = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

export default function SharedShaderAnimations() {
  useSplitTextReveal({
    selector: ".shared-shader .sh-left h1",
    parent: ".shared-shader",
    staggerFrom: "center",
    staggerAmount: 0.5,
    duration: 2,
  });
  useSplitTextReveal({
    selector: ".shared-shader .sh-right h5",
    parent: ".shared-shader",
    type: "words",
    staggerFrom: "start",
    staggerAmount: 0.5,
    duration: 2,
    start: "left center-=700px",
  });
  useSplitTextReveal({
    selector: ".shared-shader .sh-right p",
    parent: ".shared-shader",
    type: "lines",
    staggerFrom: "start",
    staggerAmount: 0.3,
    duration: 2,
    start: "left center-=700px",
  });
  useClipReveal({
    img: ".sh-left-image img",
    trigger: ".shared-shader",
    delayAmount: "+=300px",
    clippathFrom,
    clippathTo,
    imagesContainer: ".sh-left-image",
  });
  useClipReveal({
    img: ".sh-right-image img",
    trigger: ".shared-shader",
    delayAmount: "-=500px",
    clippathFrom,
    clippathTo,
    imagesContainer: ".sh-right-image",
  });

  useVerticalLineReveal({
    selector: ".shared-shader .sh-middle .vertical",
    trigger: ".shared-shader",
  });

  return null;
}
