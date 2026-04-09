"use client";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ReactLenis, LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin)

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{ orientation: 'horizontal', autoRaf: false, lerp: 0.06, smoothWheel: true }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
