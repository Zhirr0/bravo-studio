import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

interface UseSplitTextRevealOptions {
  selector: string;
  parent: string;
  type?:
    | "chars"
    | "words"
    | "lines"
    | "chars,words"
    | "chars,lines"
    | "words,lines"
    | "chars,words,lines";
  staggerFrom?: gsap.StaggerVars["from"];
  staggerAmount?: number;
  ease?: string;
  duration?: number;
  start?: string;
} 

export function useSplitTextReveal({
  selector,
  parent,
  type = "chars",
  staggerFrom = "edges",
  staggerAmount = 0.25,
  ease = "power3.out",
  duration = 1.2,
  start = "left center+=300px",
}: UseSplitTextRevealOptions) {
  useGSAP(() => {
    const scroller = document.documentElement;

    document.fonts.ready.then(() => {
      SplitText.create(selector, {
        type,
        mask: type.split(",")[0] as "chars" | "words" | "lines",
        onSplit(e) {
          const targets =
            type === "words" ? e.words : type === "lines" ? e.lines : e.chars;
          gsap.from(targets, {
            yPercent: 100,
            stagger: {
              amount: staggerAmount,
              from: staggerFrom,
              each: staggerAmount,
            },
            duration,
            ease,
            scrollTrigger: {
              trigger: parent,
              start,
              toggleActions: "play none none reverse",
              scroller,
              horizontal: true,
            },
          });
        },
      });
    });
  }, [
    selector,
    parent,
    type,
    staggerFrom,
    staggerAmount,
    ease,
    duration,
    start,
  ]);
}
