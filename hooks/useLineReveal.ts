import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface UseLineRevealProps {
  selector: string;
  trigger: string;
  transformOrigin?: string;
  duration?: number;
  ease?: string;
  delayAmount: string;
}

export function useVerticalLineReveal({
  selector,
  trigger,
  transformOrigin = "top center",
  duration = 2,
  ease = "power4.out",
  delayAmount,
}: UseLineRevealProps) {
  useGSAP(() => {
    gsap.from(selector, {
      scaleY: 0,
      transformOrigin,
      duration,
      ease,
      scrollTrigger: {
        trigger,
        scroller: document.documentElement,
        horizontal: true,
        start: `left center${delayAmount}`,
        toggleActions: "play none none reverse",
      },
    });
  }, [selector, trigger, transformOrigin, duration, ease]);
}

export function useHorizontalLineReveal({
  selector,
  trigger,
  transformOrigin = "left center",
  duration = 2,
  ease = "power4.out",
  delayAmount
}: UseLineRevealProps) {
  useGSAP(() => {
    gsap.from(selector, {
      scaleX: 0,
      transformOrigin,
      duration,
      ease,
      scrollTrigger: {
        trigger,
        scroller: document.documentElement,
        horizontal: true,
        start: `left center${delayAmount}`,
        toggleActions: "play none none reverse",
      },
    });
  }, [selector, trigger, transformOrigin, duration, ease]);
}