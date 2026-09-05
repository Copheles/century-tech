import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Container from './Container'

const motionEase = [0.22, 1, 0.36, 1] as const

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: motionEase },
  },
}

interface PageHeroProps {
  title: string
  /** Full-bleed background image. Defaults to the same hero photo as Home. */
  image?: string
}

function PageHero({ title, image = '/main.jpg' }: PageHeroProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="home-hero">
      <div
        className="home-hero-slide"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Container className="home-hero-content">
          <div className="home-hero-copy">
            <motion.div
              className="home-hero-copy-card"
              variants={staggerContainer}
              initial={reduceMotion ? false : 'hidden'}
              animate={reduceMotion ? undefined : 'show'}
            >
              <motion.div className="home-hero-brand" variants={fadeUp}>
                <span className="home-hero-brand-dot" aria-hidden="true" />
                <span className="home-hero-brand-name">Century-Tech</span>
              </motion.div>
              <motion.h1 className="home-hero-title" variants={fadeUp}>
                {title}
              </motion.h1>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default PageHero
