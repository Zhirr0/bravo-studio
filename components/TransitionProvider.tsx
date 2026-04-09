'use client'
import { createContext, useCallback, useContext, useEffect, useRef } from 'react'
import gsap from 'gsap'
import LogoSVG from './ui/LogoSVG'

type TransitionContextType = {
  onReady: () => void
}

const TransitionContext = createContext<TransitionContextType>({
  onReady: () => {},
})

export const usePageTransition = () => useContext(TransitionContext)

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const pageRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    if (overlayRef.current) gsap.set(overlayRef.current, { yPercent: 0 })
    if (pageRef.current) gsap.set(pageRef.current, { yPercent: 100 })

    // Kick off the logo letter animation immediately on mount
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('path')

      // Start all letters invisible and slightly dropped
      gsap.set(paths, { opacity: 0, y: 12 })

      // Stagger them in — left to right (first-letter → ninth-letter)
      const orderedIds = [
        'first-letter',
        'second-letter',
        'third-letter',
        'fourth-letter',
        'fifth-letter',
        'sixth-letter',
        'seventh-letter',
        'eighth-letter',
        'ninth-letter',
      ]

      const orderedPaths = orderedIds
        .map((id) => svgRef.current!.querySelector(`#${id}`)!)
        .filter(Boolean)

      gsap.to(orderedPaths, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.08,
      })

      // Then: loop a subtle breathing / pulse while waiting
      gsap.to(orderedPaths, {
        opacity: 0.5,
        yoyo: true,
        repeat: -1,
        duration: 0.9,
        ease: 'sine.inOut',
        stagger: { each: 0.08, repeat: -1, yoyo: true },
        delay: orderedPaths.length * 0.08 + 0.5,
      })
    }
  }, [])

  const onReady = useCallback(() => {
    if (hasRun.current) return
    hasRun.current = true

    const overlay = overlayRef.current
    const page = pageRef.current
    const svg = svgRef.current
    if (!overlay || !page) return

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        overlay.style.display = 'none'

        page.style.position = 'relative'
        page.style.inset = 'unset'
        page.style.width = 'max-content'

        gsap.set(page, { clearProps: 'all' })
        window.dispatchEvent(new Event('resize'))
      },
    })

    // Kill the idle pulse, burst all letters bright then fade with overlay
    if (svg) {
      const paths = svg.querySelectorAll('path')
      gsap.killTweensOf(paths)

      // Quick flash: all to full opacity, then the whole SVG slides up with overlay
      tl.to(paths, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }, 0)
      tl.to(svg, { y: -20, opacity: 0, duration: 0.6, ease: 'power2.in' }, 0.15)
    }

    tl.to(
      overlay,
      { yPercent: -100, duration: 2, ease: 'power4.inOut' },
      0
    ).to(
      page,
      { yPercent: 0, duration: 2, ease: 'power4.inOut' },
      0
    )
  }, [])

  return (
    <TransitionContext.Provider value={{ onReady }}>
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          backgroundColor: '#141414',
          color: '#fafafa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-ultra)', textTransform: 'uppercase' }}>
          <LogoSVG fill='white' ref={svgRef} />
        </h1>
      </div>

      <div
        ref={pageRef}
        style={{
          position: 'fixed',
          inset: 0,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </TransitionContext.Provider>
  )
}