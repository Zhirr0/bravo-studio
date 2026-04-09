import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface UseClipRevealProps {
  img: string;
  imagesContainer: string;
  delayAmount?: string | null;
  clippathFrom: string;
  clippathTo?: string;
  ease?: string;
  duration?: number;
  trigger: string;
}

export function useClipReveal({
  img,
  imagesContainer,
  delayAmount,
  clippathFrom,
  clippathTo = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease = "power2.out",
  duration = 2,
  trigger,
}: UseClipRevealProps) {
  useGSAP(() => {
    const scroller = document.documentElement;

    gsap.set(imagesContainer, { clipPath: clippathFrom });

    gsap.from(img, {
      scale: 2,
      ease,
      duration,
      scrollTrigger: {
        trigger,
        scroller,
        toggleActions: "play none none reverse",
        horizontal: true,
        start: `left center${delayAmount}`,
      },
    });

    gsap.to(imagesContainer, {
      clipPath: clippathTo,
      ease,
      duration,
      scrollTrigger: {
        trigger,
        scroller,
        toggleActions: "play none none reverse",
        horizontal: true,
        start: `left center${delayAmount}`,
      },
    });
  }, [
    img,
    imagesContainer,
    delayAmount,
    clippathFrom,
    clippathTo,
    ease,
    duration,
    trigger,
  ]);
}
