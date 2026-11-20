import { ArrowRight, Building2, CheckCircle2, Clock, Image as ImageIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'
import CountUp from '../components/common/CountUp'
import PartnersCertificationSection from '../components/sections/PartnersCertificationSection'
import ProjectDetailList from '../components/projects/ProjectDetailList'
import { solutions } from '../data/solutions'
import { ongoingProjects, projects } from '../data/projects'
import type { Project } from '../data/projects'

const homeProjectIds = [11, 10, 9, 7, 5]
const iwmfProject = ongoingProjects.find((project) => project.title.includes('IWMF'))
const homeProjects: Project[] = [
  ...homeProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project)),
  ...(iwmfProject
    ? [
        {
          id: iwmfProject.id,
          title: iwmfProject.title,
          image: iwmfProject.image,
          imageFit: iwmfProject.imageFit,
          detail: [{ title: iwmfProject.detail }],
        } satisfies Project,
      ]
    : []),
]

const foundedYear = 1996
const yearsOfExperience = new Date().getFullYear() - foundedYear

const whoWeAreStats = [
  { icon: Building2, end: foundedYear, suffix: '', label: 'Founded in Singapore' },
  { icon: Clock, end: yearsOfExperience, suffix: '', label: 'Years of project experience' },
]

const expertServices = [
  {
    title: 'Consultancy Services',
    summary: 'Strategic guidance tailored to your unique requirements.',
    image: '/consultancy-services.jpg',
    points: [
      'Accurately diagnose existing infrastructure bottlenecks to align with your business goals.',
      'Create bespoke structured cabling and ELV solutions for offices, large-scale facilities, and public sector projects.',
    ],
  },
  {
    title: 'Site Survey Services',
    summary: 'Thorough evaluations for optimal system design.',
    image: '/site-survey-services.jpg',
    points: [
      'Complete on-site assessments to understand your layout and precise technical needs.',
      'Partner closely with architects and contractors to integrate IT cabling seamlessly into building designs.',
    ],
  },
  {
    title: 'Installation Services',
    summary: 'Seamless deployment with guaranteed project timelines.',
    image: '/installation-services.jpg',
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

function Home() {
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
                <motion.h1 className="home-hero-title" variants={fadeUp}>
                  Structured Cabling &amp; ELV Cabling
                </motion.h1>
                <motion.div className="hero-actions" variants={fadeUp}>
                  <Button to="/#core-solutions">
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
              We engineer and deploy high-performance Structured Cabling and Extra-Low Voltage (ELV) Cabling for corporate, commercial, and industrial facilities. We provide the physical and intelligent infrastructure that keeps your business connected, secure, and future-ready.
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
              {whoWeAreStats.map(({ icon: Icon, end, suffix, label }) => (
                <motion.article className="who-we-are-stat" key={label} variants={fadeUp}>
                  <span className="who-we-are-stat-icon" aria-hidden="true">
                    <Icon size={42} strokeWidth={1.75} />
                  </span>
                  <CountUp
                    end={end}
                    suffix={suffix}
                    className="who-we-are-stat-value"
                  />
                  <span className="who-we-are-stat-label">{label}</span>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection id="core-solutions" className="content-section section-tint core-solutions-section">
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
                  <h2>
                    {solution.slug === 'structured-cabling'
                      ? 'Structured Cabling Solutions'
                      : solution.title}
                  </h2>
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
                        <CheckCircle2 size={18} />
                        {highlight}
                      </motion.li>
                    ))}
                  </motion.ul>
                  {solution.slug ? (
                    <Button to={`/solutions/${solution.slug}`}>
                      Learn more <ArrowRight size={16} />
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

      <RevealSection className="content-section section-tint expert-section" initial={false} whileInView={undefined}>
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
              description="At Century Technology, we go beyond basic design and installation. We specialize in Structured Cabling and ELV Cabling services to future-proof your business operations."
            />
          </motion.div>
          <motion.div
            className="expert-pillars"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            {expertServices.map((service, index) => (
              <motion.article
                className={`expert-pillar expert-pillar-${index + 1}`}
                key={service.title}
                variants={fadeUpSoft}
              >
                <figure className="expert-pillar-media">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </figure>
                <div className="expert-pillar-body">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ul className="check-list expert-pillar-points">
                    {service.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={17} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </RevealSection>

      <PartnersCertificationSection />

      <RevealSection className="content-section section-tint home-projects-section">
        <Container>
          <motion.div
            className="about-partner-heading"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2>Project References</h2>
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
            {homeProjects.map((project) => (
              <motion.article className="home-project-card" key={project.id} variants={fadeUp}>
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
