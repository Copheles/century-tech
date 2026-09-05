import { ArrowRight, Building2, CheckCircle2, Clock, GraduationCap, Image as ImageIcon, Network, ShieldCheck, Workflow } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'
import CountUp from '../components/common/CountUp'
import PartnersCertificationSection from '../components/sections/PartnersCertificationSection'
import ProjectDetailList from '../components/projects/ProjectDetailList'
import { solutions } from '../data/solutions'
import { projects } from '../data/projects'

const homeProjectIds = [11, 10, 9, 7, 5, 6]
const homeProjects = homeProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is (typeof projects)[number] => Boolean(project))

const whoWeAreStats = [
  { icon: Building2, end: 1996, suffix: '', label: 'Founded in Singapore' },
  { icon: Clock, end: 25, suffix: '+', label: 'Years of project experience' },
  { icon: GraduationCap, end: 30, suffix: '+', label: 'School projects secured by 2001' },
]

const values = [
  {
    icon: Network,
    title: 'Connected by design',
    text: 'Communication and technology choices are planned as one practical system.',
  },
  {
    icon: Workflow,
    title: 'Built around operations',
    text: 'Solutions begin with the way your people, information, and workflows need to connect.',
  },
  {
    icon: ShieldCheck,
    title: 'Ready for the long term',
    text: 'Clear foundations make technology easier to maintain, support, and extend.',
  },
]

const expertServices = [
  {
    title: 'Consultancy Services',
    summary: 'Strategic guidance tailored to your unique requirements.',
    image: '/carousel-1.jpg',
    points: [
      'Accurately diagnose existing infrastructure bottlenecks to align with your business goals.',
      'Create bespoke structured cabling and ELV solutions for offices, large-scale facilities, and public sector projects.',
    ],
  },
  {
    title: 'Site Survey Services',
    summary: 'Thorough evaluations for optimal system design.',
    image: '/carousel-2.jpg',
    points: [
      'Complete on-site assessments to understand your layout and precise technical needs.',
      'Partner closely with architects and contractors to integrate IT cabling seamlessly into building designs.',
    ],
  },
  {
    title: 'Installation Services',
    summary: 'Seamless deployment with guaranteed project timelines.',
    image: '/carousel-3.jpg',
    points: [
      'Deploy time-tested implementation methodologies to guarantee on-time, budget-friendly project delivery.',
      'Leverage a global network of certified partners for verified, high-quality technical execution.',
    ],
  },
]

const motionEase = [0.22, 1, 0.36, 1] as const
const viewportOnce = { once: true, amount: 0.2 } as const

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

const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: motionEase },
  },
}

const getExpertEntryOffset = (index: number) => {
  if (index === 0) return { x: -42, y: 18 }
  if (index === 2) return { x: 42, y: 18 }

  return { x: 0, y: 34 }
}

const getExpertPhotoRotation = (index: number) => {
  if (index === 1) return 1
  if (index === 2) return -1.5

  return -2
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    const updateIsMobile = () => setIsMobile(mediaQuery.matches)

    updateIsMobile()
    mediaQuery.addEventListener('change', updateIsMobile)

    return () => mediaQuery.removeEventListener('change', updateIsMobile)
  }, [])

  return isMobile
}

function Home() {
  const isMobile = useIsMobile()
  const reduceMotion = useReducedMotion()

  return (
    <div className="home-page">
      <section className="home-hero">
        <div
          className="home-hero-slide"
          style={{ backgroundImage: 'url(/main.jpg)' }}
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
                  Structured Cabling &amp; ELV System
                </motion.h1>
                <motion.div className="hero-actions" variants={fadeUp}>
                  <Button to="/solutions">
                    Explore our solutions <ArrowRight size={18} />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </div>
      </section>

      <RevealSection className="content-section section-tint">
        <Container className="who-we-are">
          <motion.div
            className="who-we-are-intro"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            <motion.span className="eyebrow" variants={fadeUp}>Who we are</motion.span>
            <motion.p variants={fadeUp}>
              Century Technology brings IT communications, digital solutions,
              and infrastructure thinking together in one practical approach.
            </motion.p>
          </motion.div>
          <motion.div
            className="who-we-are-stats-panel"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            <div className="who-we-are-stats">
              {whoWeAreStats.map(({ icon: Icon, end, suffix, label }, index) => (
                <motion.article className="who-we-are-stat" key={label} variants={fadeUp}>
                  <span className="who-we-are-stat-icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.9} />
                  </span>
                  <CountUp
                    end={end}
                    suffix={suffix}
                    className="who-we-are-stat-value"
                  />
                  <span className="who-we-are-stat-label">{label}</span>
                  <small className="who-we-are-stat-index">0{index + 1}</small>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section section-tint core-solutions-section">
        <Container>
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <SectionTitle
              centered
              eyebrow="Core solutions"
              title="Our solutions."
              description="Focused services for organisations that need clearer communication, stronger systems, and dependable foundations."
            />
          </motion.div>
          <div className="core-solutions-rows">
            {solutions.map((solution, index) => {
              const photoOnLeft = index % 2 === 0
              const fromLeft = reduceMotion ? { opacity: 0 } : { opacity: 0, x: -64, y: 32 }
              const fromRight = reduceMotion ? { opacity: 0 } : { opacity: 0, x: 64, y: 32 }
              const settle = { opacity: 1, x: 0, y: 0 }

              const photoBlock = (
                <motion.div
                  className="core-solution-media"
                  initial={reduceMotion ? false : photoOnLeft ? fromLeft : fromRight}
                  whileInView={reduceMotion ? undefined : settle}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.8, delay: photoOnLeft ? 0.06 : 0.16, ease: motionEase }}
                >
                  <div className="core-solution-media-slot">
                    {solution.image ? (
                      <img src={solution.image} alt={solution.title} loading="lazy" />
                    ) : (
                      <>
                        <ImageIcon size={28} strokeWidth={1.6} aria-hidden="true" />
                        <span>Photo coming soon</span>
                      </>
                    )}
                  </div>
                </motion.div>
              )

              const contentBlock = (
                <motion.article
                  className="core-solution-card"
                  initial={reduceMotion ? false : photoOnLeft ? fromRight : fromLeft}
                  whileInView={reduceMotion ? undefined : settle}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.8, delay: photoOnLeft ? 0.16 : 0.06, ease: motionEase }}
                >
                  <span className="card-number">0{index + 1}</span>
                  <h2>{solution.title}</h2>
                  <p>{solution.description}</p>
                  <motion.ul
                    className="check-list"
                    variants={staggerContainer}
                    initial={reduceMotion ? false : 'hidden'}
                    whileInView={reduceMotion ? undefined : 'show'}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    {solution.highlights.map((highlight) => (
                      <motion.li key={highlight} variants={fadeUpSoft}>
                        <CheckCircle2 size={16} />
                        {highlight}
                      </motion.li>
                    ))}
                  </motion.ul>
                  {solution.detailAnchor ? (
                    <Button to={`/solutions#${solution.detailAnchor}`} variant="secondary">
                      View details <ArrowRight size={16} />
                    </Button>
                  ) : null}
                </motion.article>
              )

              return (
                <div
                  className={`core-solution-row${photoOnLeft ? '' : ' core-solution-row-reverse'}`}
                  key={solution.id}
                >
                  {photoOnLeft ? (
                    <>
                      {photoBlock}
                      {contentBlock}
                    </>
                  ) : (
                    <>
                      {contentBlock}
                      {photoBlock}
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section section-tint value-section">
        <Container>
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <SectionTitle
              centered
              eyebrow="Why Century Technology"
              title="A practical partner from planning to progress."
            />
          </motion.div>
          <motion.div
            className="value-grid"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            {values.map(({ icon: Icon, title, text }) => (
              <motion.article className="value-card" key={title} variants={fadeUp}>
                <span className="value-icon"><Icon size={34} strokeWidth={1.75} /></span>
                <h2>{title}</h2>
                <p>{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section expert-section" initial={false} whileInView={undefined}>
        <Container>
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <SectionTitle
              centered
              eyebrow="Why Choose Us?"
              title="End-to-End ICT Infrastructure Solutions"
              description="At Century Technology, we go beyond basic design and installation. We specialize in Structured Cabling and ELV integration services to future-proof your business operations."
            />
          </motion.div>
          <div className="expert-grid">
            {expertServices.map((service, index) => {
              const desktopOffset = getExpertEntryOffset(index)
              const entryOffset = isMobile ? { x: 0, y: 46 } : desktopOffset
              const photoRotation = getExpertPhotoRotation(index)

              return (
                <motion.article
                  className="expert-card"
                  key={service.title}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: entryOffset.x,
                          y: entryOffset.y,
                          scale: isMobile ? 0.97 : 0.985,
                        }
                  }
                  whileInView={
                    reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }
                  }
                  viewport={{ once: true, amount: isMobile ? 0.18 : 0.28 }}
                  transition={{
                    duration: isMobile ? 0.85 : 0.95,
                    delay: 0.12 + index * (isMobile ? 0.14 : 0.1),
                    ease: motionEase,
                  }}
                >
                  <div className="expert-card-copy">
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                  </div>
                  <motion.div
                    className="expert-photo-wrap"
                    initial={{ rotate: photoRotation, y: 0 }}
                    animate={{ rotate: photoRotation, y: 0 }}
                    whileHover={
                      isMobile
                        ? undefined
                        : {
                            y: -8,
                            rotate: photoRotation + (index === 1 ? -2.5 : 2.5),
                          }
                    }
                    whileTap={
                      isMobile
                        ? {
                            y: -6,
                            scale: 0.985,
                            rotate: photoRotation + (index === 1 ? -1.6 : 1.6),
                          }
                        : undefined
                    }
                    transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.7 }}
                  >
                    <span className="expert-photo-accent" />
                    <img src={service.image} alt="" className="expert-photo" loading="lazy" />
                  </motion.div>
                  <motion.ul
                    className="expert-list"
                    variants={staggerContainer}
                    initial={reduceMotion ? false : 'hidden'}
                    whileInView={reduceMotion ? undefined : 'show'}
                    viewport={{ once: true, amount: 0.35 }}
                  >
                    {service.points.map((point) => (
                      <motion.li key={point} variants={fadeUpSoft}>
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.article>
              )
            })}
          </div>
        </Container>
      </RevealSection>

      <PartnersCertificationSection />

      <RevealSection className="content-section section-tint home-projects-section">
        <Container>
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <SectionTitle
              centered
              eyebrow="Project References"
              title="Selected engagements."
              description="A preview of key structured cabling and ELV projects delivered by Century Technology."
            />
          </motion.div>
          <motion.div
            className="home-projects-actions"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <Button to="/projects" variant="secondary">View all projects</Button>
          </motion.div>
          <motion.div
            className="home-project-grid"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            {homeProjects.map((project, index) => (
              <motion.article className="home-project-card" key={project.id} variants={fadeUp}>
                <span className="home-project-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2>{project.title}</h2>
                <div
                  className={`home-project-media${
                    project.imageFit === 'contain' ? ' home-project-media-contain' : ''
                  }`}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} loading="lazy" />
                  ) : null}
                </div>
                <ProjectDetailList detail={project.detail} />
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </RevealSection>
    </div>
  )
}

export default Home
