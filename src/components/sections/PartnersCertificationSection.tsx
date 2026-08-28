import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Container from '../common/Container'
import RevealSection from '../common/RevealSection'
import {
  certificationHighlights,
  partnerMarqueeItems,
  partners,
} from '../../data/partners'

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const cardIn: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

function PartnersCertificationSection() {
  const reduceMotion = useReducedMotion()
  const partnersMarqueeRef = useRef<HTMLDivElement>(null)
  const partnersOffsetRef = useRef(0)
  const partnersImpulseRef = useRef(0)
  const partnersSpeedRef = useRef(-0.04)
  const partnersPausedRef = useRef(false)
  const partnersLoopWidthRef = useRef(0)

  const setPartnersPaused = (paused: boolean) => {
    partnersPausedRef.current = paused
  }

  const nudgePartners = (direction: 'previous' | 'next') => {
    const track = partnersMarqueeRef.current
    if (!track) return

    const firstCard = track.querySelector<HTMLElement>('.about-logo-card')
    const styles = getComputedStyle(track)
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0
    const step = (firstCard?.offsetWidth ?? 210) + gap
    const baseSpeed = 0.04

    partnersSpeedRef.current = direction === 'next' ? -baseSpeed : baseSpeed
    partnersImpulseRef.current += direction === 'next' ? -step : step
  }

  useEffect(() => {
    const track = partnersMarqueeRef.current
    if (!track || reduceMotion) return

    const measureLoop = () => {
      partnersLoopWidthRef.current = track.scrollWidth / 2
    }

    measureLoop()
    const resizeObserver = new ResizeObserver(measureLoop)
    resizeObserver.observe(track)

    let frameId = 0
    let lastTime = performance.now()

    const tick = (now: number) => {
      const delta = Math.min(now - lastTime, 32)
      lastTime = now
      const loopWidth = partnersLoopWidthRef.current

      if (loopWidth > 0) {
        if (!partnersPausedRef.current) {
          partnersOffsetRef.current += partnersSpeedRef.current * delta
        }

        if (partnersImpulseRef.current !== 0) {
          const applied = partnersImpulseRef.current * (1 - Math.exp(-delta / 160))
          partnersOffsetRef.current += applied
          partnersImpulseRef.current -= applied
          if (Math.abs(partnersImpulseRef.current) < 0.35) {
            partnersImpulseRef.current = 0
          }
        }

        while (partnersOffsetRef.current <= -loopWidth) {
          partnersOffsetRef.current += loopWidth
        }
        while (partnersOffsetRef.current > 0) {
          partnersOffsetRef.current -= loopWidth
        }

        track.style.transform = `translate3d(${partnersOffsetRef.current}px, 0, 0)`
      }

      frameId = window.requestAnimationFrame(tick)
    }

    frameId = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
    }
  }, [reduceMotion])

  return (
    <RevealSection className="content-section section-tint">
      <Container className="about-credentials-showcase">
        <motion.div
          className="about-partner-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <h2>Our Partners Network</h2>
          <p>Partnering with industry&apos;s best to deliver high quality projects.</p>
        </motion.div>

        <div
          className="about-partner-carousel"
          onMouseEnter={() => setPartnersPaused(true)}
          onMouseLeave={() => setPartnersPaused(false)}
          onFocusCapture={() => setPartnersPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setPartnersPaused(false)
            }
          }}
        >
          <button
            className="about-partner-arrow about-partner-arrow-prev"
            type="button"
            aria-label="Scroll partners backward"
            onClick={() => nudgePartners('previous')}
          >
            <ChevronLeft size={20} strokeWidth={1.75} />
          </button>
          <motion.div
            className="about-partner-viewport"
            aria-label="Partner logos"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div ref={partnersMarqueeRef} className="about-partner-marquee">
              {partnerMarqueeItems.map((partner, index) => (
                <motion.article
                  className="about-logo-card"
                  key={`${partner.name}-${index}`}
                  aria-hidden={index >= partners.length}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 320, damping: 22 } }
                  }
                >
                  <img
                    className={`about-logo-image about-logo-image-${partner.logoSize}`}
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                  />
                  {partner.detail && <small>{partner.detail}</small>}
                </motion.article>
              ))}
            </div>
          </motion.div>
          <button
            className="about-partner-arrow about-partner-arrow-next"
            type="button"
            aria-label="Scroll partners forward"
            onClick={() => nudgePartners('next')}
          >
            <ChevronRight size={20} strokeWidth={1.75} />
          </button>
        </div>

        <div className="about-credentials-divider" />

        <motion.div
          className="about-certification-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <h2>Certification</h2>
          <p>Established certification to ensure quality assurance and service excellence.</p>
        </motion.div>

        <motion.div
          className="about-certification-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {certificationHighlights.map((credential) => (
            <motion.article
              className="about-certification-badge"
              key={`${credential.name}-${credential.label}`}
              variants={cardIn}
              whileHover={reduceMotion ? undefined : { y: -7, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
            >
              <img
                className="about-certification-image"
                src={credential.image}
                alt={`${credential.name} ${credential.label}`}
                loading="lazy"
              />
            </motion.article>
          ))}
        </motion.div>

        <p className="about-certification-note">
          Be rest assured that your projects will be completed on time with high standards of
          delivery by our experienced team with recognized industry certifications.
        </p>
      </Container>
    </RevealSection>
  )
}

export default PartnersCertificationSection
