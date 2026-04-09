"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const items = ["HOME", "ABOUT", "WORKS", "CONTACT"];

export default function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const splitRef = useRef<SplitText | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const overlineRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const headers = sectionRef.current!.querySelectorAll(".menu-item-text");

      splitRef.current = SplitText.create(headers, {
        type: "chars",
        mask: "chars",
      });

      gsap.set(sectionRef.current, { opacity: 0, pointerEvents: "none" });
      gsap.set(splitRef.current.chars, { yPercent: 100 });
      gsap.set(overlineRef.current, { scaleX: 0, transformOrigin: "left center" });
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    const lock = () =>
      window.dispatchEvent(
        new CustomEvent("menuLock", { detail: { locked: true } }),
      );
    const unlock = () =>
      window.dispatchEvent(
        new CustomEvent("menuLock", { detail: { locked: false } }),
      );

    const handleMenuToggle = (e: Event) => {
      const active = (e as CustomEvent).detail.isActive;

      tlRef.current?.kill();
      tlRef.current = gsap.timeline({
        onStart() { lock() },
        onComplete() { unlock() }
      });

      if (active) {
        tlRef.current
          .to(".nav-logo", {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.3,
            ease: "power3.out",
          })
          .to(
            ".page",
            {
              opacity: 0,
              pointerEvents: "none",
              duration: 0.3,
              ease: "power3.out",
              delay: 0.2,
            },
            "<",
          )
          .to(
            sectionRef.current,
            {
              opacity: 1,
              pointerEvents: "auto",
              duration: 0.4,
              ease: "power3.out",
            },
            "<",
          )
          .to(
            splitRef.current!.chars,
            { yPercent: 0, duration: 2, ease: "power4.out", stagger: 0.05 },
            "<",
          )
          .to(
            overlineRef.current,
            { scaleX: 1, duration: 2, delay: .5, ease: "power4.out" },
            "<",
          );
      } else {
        tlRef.current
          .to(splitRef.current!.chars, {
            yPercent: 100,
            duration: 0.6,
            ease: "power3.in",
            stagger: 0.01,
          })
          .to(
            overlineRef.current,
            { scaleX: 0, duration: 0.4, ease: "power3.in" },
            "<",
          )
          .to(
            sectionRef.current,
            {
              opacity: 0,
              pointerEvents: "none",
              duration: 0.3,
              ease: "power3.in",
            },
            "<0.2",
          )
          .to(
            ".nav-logo",
            {
              opacity: 1,
              pointerEvents: "auto",
              duration: 0.3,
              ease: "power3.out",
            },
            "<0.2",
          )
          .to(
            ".page",
            {
              opacity: 1,
              pointerEvents: "auto",
              duration: 0.3,
              ease: "power3.out",
            },
            "<",
          );
      }
    };

    window.addEventListener("menuToggle", handleMenuToggle);
    return () => window.removeEventListener("menuToggle", handleMenuToggle);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="menu-section bg-surface-primary z-500 text-content-primary fixed inset-0 min-h-svh px-10 py-8 font-via-libre"
    >
      {items.map((item, i) => (
        <div
          key={item}
          className="flex w-fit items-end leading-[0.88] mb-1 cursor-pointer"
        >
          <span className={`text-[30px] font-via-libre mb-[10px] -translate-y-2 mr-3 text-content-primary ${i === 0 ? "opacity-50" : ""}`}>
            0{i + 1}
          </span>
          <span
            className={`menu-item-text text-[170px] w-fit text-content-primary relative ${
              i === 0 ? "opacity-50" : ""
            }`}
          >
            {i === 0 && (
              <span
                ref={overlineRef}
                className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[3px] bg-content-primary"
              />
            )}
            {item}
          </span>
        </div>
      ))}
    </section>
  );
}