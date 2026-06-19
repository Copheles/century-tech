import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const showAfter = Math.max(700, window.innerHeight * 0.9)
      const hasUsefulScrollDistance =
        document.documentElement.scrollHeight > window.innerHeight * 1.6
      const shouldShow = hasUsefulScrollDistance && window.scrollY > showAfter

      if (hideTimer.current) clearTimeout(hideTimer.current)

      setIsVisible(shouldShow)

      if (shouldShow) {
        hideTimer.current = setTimeout(() => {
          setIsVisible(false)
        }, 1800)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (hideTimer.current) clearTimeout(hideTimer.current)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="floating-action back-to-top"
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 0.88, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
        >
          <ArrowUp size={22} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
