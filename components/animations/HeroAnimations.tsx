"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroAnimations() {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      SplitText.create(".hero-content h3", {
        type: "words",
        mask: "words",
        onSplit(e) {
          gsap.from(e.words, {
            yPercent: 100,
            duration: 2,
            delay: 1,
            ease: "power4.out",
            stagger: 0.2,
          });
        },
      });
      SplitText.create(".hero-content .hero-featured-works h3", {
        type: "words",
        mask: "words",
        onSplit(e) {
          gsap.from(e.words, {
            yPercent: 100,
            duration: 2,
            delay: 1,
            ease: "power4.out",
            stagger: 0.2,
          });
        },
      });
      SplitText.create(".hero h1", {
        type: "chars",
        mask: "chars",
        onSplit(e) {
          gsap.from(e.chars, {
            yPercent: 100,
            duration: 2,
            delay: 1,
            ease: "power4.out",
            stagger: 0.1,
          });
        },
      });
    });
  }, []);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".catalyst",
      horizontal: true,
      scroller: document.documentElement,
      start: "left right",
      end: "left left",
      scrub: true,
      onUpdate(e) {
        const pr = e.progress;
        const contentXPercent = gsap.utils.interpolate(0, -600, pr);

        gsap.set(".arrow-target", {
          xPercent: contentXPercent,
        });
      },
    });
  }, []);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".catalyst",
      horizontal: true,
      scroller: document.documentElement,
      start: "left right",
      end: "left left",
      scrub: true,
      onUpdate(e) {
        const pr = e.progress;
        const contentXPercent = gsap.utils.interpolate(0, -100, pr);

        gsap.set(".hero .hero-content .hero-featured-works h3", {
          xPercent: contentXPercent,
        });

        gsap.set(".hero h1", {
          xPercent: contentXPercent,
        });
      },
    });
  }, []);

  return (
    <span className="hero-arrow arrow-target overflow-visible">
      <svg
        className="h-auto w-5"
        viewBox="0 0 600 334"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="arrow-path"
          d="M566.667 166.667L33.3333 166.667M566.667 166.667L433.333 300M566.667 166.667L433.333 33.3333"
          stroke="black"
          strokeWidth="66.6667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
