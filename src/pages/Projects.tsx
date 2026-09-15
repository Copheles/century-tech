import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'
import { ongoingProjects, projectReferences, projects } from '../data/projects'

const projectMarqueeItems = [...projectReferences, ...projectReferences]

const projectPriority = [
  'IWMF',
  'Thomson East Coast',
  'Facebook',
  'Sembcorp',
  'EMC Data Center',
  'Gardens by the Bay',
  'Resort World Sentosa',
  'Bahrain',
  'International Cruise Terminal',
  'Duke',
  'Westgate',
] as const

function projectSortRank(title: string) {
  const index = projectPriority.findIndex((keyword) => title.includes(keyword))
  return index === -1 ? projectPriority.length : index
}

const allProjects = [
  ...ongoingProjects.map((project) => ({
    key: `ongoing-${project.id}`,
    title: project.title,
    image: project.image,
    imageFit: project.imageFit,
  })),
  ...projects.map((project) => ({
    key: `project-${project.id}`,
    title: project.title,
    image: project.image,
    imageFit: project.imageFit,
  })),
].sort((a, b) => projectSortRank(a.title) - projectSortRank(b.title))

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

const viewportOnce = { once: true, amount: 0.16 } as const

function Projects() {
  const reduceMotion = useReducedMotion()
  const projectMarqueeRef = useRef<HTMLDivElement>(null)
  const projectOffsetRef = useRef(0)
  const projectImpulseRef = useRef(0)
  const projectSpeedRef = useRef(-0.04)
  const projectPausedRef = useRef(false)
  const projectLoopWidthRef = useRef(0)

  const setProjectPaused = (paused: boolean) => {
    projectPausedRef.current = paused
  }

  const nudgeProjects = (direction: 'previous' | 'next') => {
    const track = projectMarqueeRef.current
    if (!track) return

    const firstCard = track.querySelector<HTMLElement>('.project-ref-card-item')
    const styles = getComputedStyle(track)
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0
    const step = (firstCard?.offsetWidth ?? 220) + gap
    const baseSpeed = 0.04

    projectSpeedRef.current = direction === 'next' ? -baseSpeed : baseSpeed
    projectImpulseRef.current += direction === 'next' ? -step : step
  }

  useEffect(() => {
    const track = projectMarqueeRef.current
    if (!track || reduceMotion) return

    const measureLoop = () => {
      projectLoopWidthRef.current = track.scrollWidth / 2
    }

    measureLoop()
    const resizeObserver = new ResizeObserver(measureLoop)
    resizeObserver.observe(track)

    let frameId = 0
    let lastTime = performance.now()

    const tick = (now: number) => {
      const delta = Math.min(now - lastTime, 32)
      lastTime = now
      const loopWidth = projectLoopWidthRef.current

      if (loopWidth > 0) {
        if (!projectPausedRef.current) {
          projectOffsetRef.current += projectSpeedRef.current * delta
        }

        if (projectImpulseRef.current !== 0) {
          const applied = projectImpulseRef.current * (1 - Math.exp(-delta / 160))
          projectOffsetRef.current += applied
          projectImpulseRef.current -= applied
          if (Math.abs(projectImpulseRef.current) < 0.35) {
            projectImpulseRef.current = 0
          }
        }

        while (projectOffsetRef.current <= -loopWidth) {
          projectOffsetRef.current += loopWidth
        }
        while (projectOffsetRef.current > 0) {
          projectOffsetRef.current -= loopWidth
        }

        track.style.transform = `translate3d(${projectOffsetRef.current}px, 0, 0)`
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
    <>
      <PageHero title="Project References" />
      <RevealSection className="content-section">
        <Container>
          <SectionTitle
            centered
            eyebrow="Projects"
            title="Our project references."
            description="Structured cabling, network, and security system work delivered across public, education, banking, and commercial sites in Singapore."
          />
          <motion.div
            className="projects-ref-grid"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            {allProjects.map((project) => (
              <motion.article className="projects-ref-card" key={project.key} variants={cardIn}>
                <div
                  className={`projects-ref-media${
                    project.imageFit === 'contain' ? ' projects-ref-media-contain' : ''
                  }`}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} loading="lazy" />
                  ) : (
                    <span className="projects-ref-placeholder" aria-hidden="true">
                      <ImageIcon size={28} strokeWidth={1.5} />
                    </span>
                  )}
                </div>
                <h2>{project.title}</h2>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section">
        <Container className="project-ref-showcase">
          <motion.div
            className="project-ref-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <h2>Project Reference</h2>
            <p>
              Selected structured cabling and ELV engagements delivered for banking,
              infrastructure, and public facilities.
            </p>
          </motion.div>

          <div
            className="project-ref-carousel"
            onMouseEnter={() => setProjectPaused(true)}
            onMouseLeave={() => setProjectPaused(false)}
            onFocusCapture={() => setProjectPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setProjectPaused(false)
              }
            }}
          >
            <button
              className="project-ref-arrow project-ref-arrow-prev"
              type="button"
              aria-label="Scroll project references backward"
              onClick={() => nudgeProjects('previous')}
            >
              <ChevronLeft size={20} strokeWidth={1.75} />
            </button>
            <motion.div
              className="project-ref-viewport"
              aria-label="Project references"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div ref={projectMarqueeRef} className="project-ref-marquee">
                {projectMarqueeItems.map((project, index) => (
                  <motion.article
                    className="project-ref-card-item"
                    key={`${project.id}-${index}`}
                    aria-hidden={index >= projectReferences.length}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 320, damping: 22 } }
                    }
                  >
                    <div className="project-ref-card-logo">
                      <img src={project.image} alt={project.title} loading="lazy" />
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
            <button
              className="project-ref-arrow project-ref-arrow-next"
              type="button"
              aria-label="Scroll project references forward"
              onClick={() => nudgeProjects('next')}
            >
              <ChevronRight size={20} strokeWidth={1.75} />
            </button>
          </div>
        </Container>
      </RevealSection>
    </>
  )
}

export default Projects
