"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MenuBtn from "./MenuBtn";
import LogoSVG from "./ui/LogoSVG";
import MagnetoSVG from "./Magneto";

const SCROLL_THRESHOLD = 80;

export default function Nav() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollX = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentX = window.scrollX;

      if (currentX > lastScrollX.current && currentX > SCROLL_THRESHOLD) {
        setIsHidden(true);
      } else if (currentX < lastScrollX.current) {
        setIsHidden(false);
      }

      lastScrollX.current = currentX;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (isHidden) {
      gsap.to(navRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
      });
    } else {
      gsap.to(navRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
      });
    }
  }, [isHidden]);

  return (
    <nav
      ref={navRef}
      className="fixed z-600 left-3 top-3 right-3 h-[60px] flex items-center justify-between"
    >
      <MagnetoSVG>
        <LogoSVG fill="#141414" className="h-auto w-20 nav-logo" />
      </MagnetoSVG>
      <MenuBtn />
    </nav>
  );
}
