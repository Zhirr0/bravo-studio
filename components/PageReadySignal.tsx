'use client'
import { useEffect } from 'react'
import { usePageTransition } from './TransitionProvider'

export default function PageReadySignal() {
  const { onReady } = usePageTransition()

  useEffect(() => {
    onReady()
  }, [onReady])

  return null
}