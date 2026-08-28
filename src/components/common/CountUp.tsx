import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
}

function easeOutExpo(progress: number) {
  return progress === 1 ? 1 : 1 - 2 ** (-10 * progress)
}

function CountUp({ end, suffix = '', duration = 2200, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, amount: 0.45 })
  const hasAnimatedRef = useRef(false)
  const [display, setDisplay] = useState(() => (reduceMotion ? end : 0))

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return

    if (reduceMotion) {
      setDisplay(end)
      hasAnimatedRef.current = true
      return
    }

    hasAnimatedRef.current = true
    let frameId = 0
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setDisplay(Math.round(easeOutExpo(progress) * end))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [duration, end, isInView, reduceMotion])

  return (
    <span ref={ref} className={`count-up${className ? ` ${className}` : ''}`.trim()}>
      {display}
      {suffix}
    </span>
  )
}

export default CountUp
