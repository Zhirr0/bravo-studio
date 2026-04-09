"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function MenuBtn() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const isActive = useRef(false);
  const isLocked = useRef(false);

  useGSAP(() => {
    gsap.set("#menu-first-line", { transformOrigin: "center center" });
    gsap.set("#menu-second-line", { transformOrigin: "center center" });
    gsap.set("#menu-third-line", { transformOrigin: "center center" });
  }, { scope: btnRef });

  useEffect(() => {
    const handleMenuToggle = (e: Event) => {
      const active = (e as CustomEvent).detail.isActive;
      isActive.current = active;

      if (active) {
        gsap.to("#menu-first-line", { rotate: 45, y: 13, duration: 0.4, ease: "power3.out" });
        gsap.to("#menu-second-line", { opacity: 0, duration: 0.2, ease: "power3.out" });
        gsap.to("#menu-third-line", { rotate: -45, y: -13, duration: 0.4, ease: "power3.out" });
      } else {
        gsap.to("#menu-first-line", { rotate: 0, y: 0, duration: 0.4, ease: "power3.out" });
        gsap.to("#menu-second-line", { opacity: 1, duration: 0.4, ease: "power3.out" });
        gsap.to("#menu-third-line", { rotate: 0, y: 0, duration: 0.4, ease: "power3.out" });
      }
    };

    const handleMenuLock = (e: Event) => {
      isLocked.current = (e as CustomEvent).detail.locked;
      if (btnRef.current) {
        btnRef.current.disabled = isLocked.current;
        btnRef.current.style.pointerEvents = isLocked.current ? "none" : "auto";
      }
    };

    window.addEventListener("menuToggle", handleMenuToggle);
    window.addEventListener("menuLock", handleMenuLock);
    return () => {
      window.removeEventListener("menuToggle", handleMenuToggle);
      window.removeEventListener("menuLock", handleMenuLock);
    };
  }, []);

  const handleClick = () => {
    if (isLocked.current) return;
    const next = !isActive.current;
    isActive.current = next;
    window.dispatchEvent(new CustomEvent("menuToggle", { detail: { isActive: next } }));
  };

  return (
    <button className="cursor-pointer disabled:cursor-not-allowed" ref={btnRef} onClick={handleClick} aria-label="Menu">
      <svg width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" id="menu-first-line" clipRule="evenodd" d="M5.71423 2.14286C5.71423 0.959401 6.28003 0 6.97798 0H37.3077C38.0057 0 38.5714 0.959401 38.5714 2.14286C38.5714 3.32632 38.0057 4.28572 37.3077 4.28572H6.97798C6.28003 4.28572 5.71423 3.32632 5.71423 2.14286Z" fill="#141414"/>
        <path fillRule="evenodd" id="menu-second-line" clipRule="evenodd" d="M0 15C0 13.8166 0.7626 12.8572 1.70329 12.8572H42.5823C43.5232 12.8572 44.2857 13.8166 44.2857 15C44.2857 16.1835 43.5232 17.1429 42.5823 17.1429H1.70329C0.7626 17.1429 0 16.1835 0 15Z" fill="#141414"/>
        <path fillRule="evenodd" id="menu-third-line" clipRule="evenodd" d="M5.71423 27.8572C5.71423 26.6737 6.28003 25.7143 6.97798 25.7143H37.3077C38.0057 25.7143 38.5714 26.6737 38.5714 27.8572C38.5714 29.0406 38.0057 30 37.3077 30H6.97798C6.28003 30 5.71423 29.0406 5.71423 27.8572Z" fill="#141414"/>
      </svg>
    </button>
  );
}