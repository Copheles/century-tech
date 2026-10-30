import {
  Award,
  BadgeCheck,
  Building2,
  Clock,
  Handshake,
  Network,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'
import CountUp from '../components/common/CountUp'
import PartnersCertificationSection from '../components/sections/PartnersCertificationSection'

const foundedYear = 1996
const yearsOfExperience = new Date().getFullYear() - foundedYear

const companyStats = [
  { icon: Building2, end: foundedYear, suffix: '', label: 'Founded in Singapore' },
  { icon: Clock, end: yearsOfExperience, suffix: '', label: 'Years of project experience' },
]

const missionPoints = [
  {
    icon: Network,
    title: 'Affordable communication solutions',
    text: "We configure practical communication systems around customers' current and future needs.",
  },
  {
    icon: ShieldCheck,
    title: 'Quality without shortcuts',
    text: 'We continually review our Quality Management System to improve service standards and project delivery.',
  },
  {
    icon: UsersRound,
    title: 'People as our strongest asset',
    text: 'We keep our staff aligned with technology changes through internal training, workshops, and professional development.',
  },
  {
    icon: Handshake,
    title: 'Trusted Regional Communication Technology Partner',
    text: 'Our mission is to empower organizations with reliable communication infrastructure through innovation, precision, and partnership.',
  },
]

const coreValuePoints = [
  {
    icon: ShieldCheck,
    title: 'Integrity in every project',
    text: 'We work with transparency, responsibility, and respect for every commitment we make.',
  },
  {
    icon: Network,
    title: 'Innovation that drives progress',
    text: 'We keep improving our solutions so clients can move forward with practical technology.',
  },
  {
    icon: Handshake,
    title: 'Collaboration with clients and partners',
    text: 'We build strong working relationships through clear communication and shared goals.',
  },
  {
    icon: BadgeCheck,
    title: 'Reliability through technical excellence',
    text: 'We focus on dependable delivery, careful implementation, and consistent service standards.',
  },
  {
    icon: Award,
    title: 'Growth through continuous improvement',
    text: 'We strengthen our people, processes, and capabilities through ongoing learning.',
  },
]

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

function About() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="about-page">
      <PageHero title="About Us" />

      <RevealSection className="content-section section-tint">
        <Container>
          <motion.div
            className="who-we-are-stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {companyStats.map(({ icon: Icon, end, suffix, label }) => (
              <motion.article className="who-we-are-stat" key={label} variants={cardIn}>
                <span className="who-we-are-stat-icon" aria-hidden="true">
                  <Icon size={42} strokeWidth={1.75} />
                </span>
                <CountUp end={end} suffix={suffix} className="who-we-are-stat-value" />
                <span className="who-we-are-stat-label">{label}</span>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section about-purpose-section">
        <Container className="about-purpose-stack">
          <motion.div
            className="about-purpose-header"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.span className="eyebrow" variants={cardIn}>What drives us</motion.span>
            <motion.h2 variants={cardIn}>Vision, Mission &amp; Values</motion.h2>
          </motion.div>

          <motion.article
            className="about-purpose-statement"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div className="about-purpose-statement-head" variants={cardIn}>
              Vision
            </motion.div>
            <motion.h3 variants={cardIn}>
              To be a trusted regional communication technology partner.
            </motion.h3>
            <motion.p variants={cardIn}>
              We aim to become a key player in the regional communication market by staying close to
              customer needs, technology changes, and the interests of all stakeholders.
            </motion.p>
          </motion.article>

          <motion.div
            className="about-purpose-connector"
            initial={reduceMotion ? false : { opacity: 0, scaleY: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span aria-hidden="true" />
          </motion.div>

          <motion.div
            className="about-purpose-mission-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
          >
            <motion.div className="about-purpose-statement-head" variants={cardIn}>
              Mission
            </motion.div>
            <motion.h3 variants={cardIn}>
              Reliable solutions, continuous improvement, and trained people.
            </motion.h3>
            {missionPoints.map(({ icon: Icon, title, text }) => (
              <motion.article
                className="about-purpose-row"
                key={title}
                variants={cardIn}
                whileHover={reduceMotion ? undefined : { x: 6 }}
              >
                <span aria-hidden="true">
                  <Icon size={32} strokeWidth={1.7} />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="about-purpose-connector"
            initial={reduceMotion ? false : { opacity: 0, scaleY: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span aria-hidden="true" />
          </motion.div>

          <motion.div
            className="about-purpose-values-block"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
          >
            <div className="about-core-values-heading">
              <SectionTitle
                centered
                eyebrow="Core Values"
                title="Values that guide how we work."
              />
            </div>
            <div className="about-core-values-list">
              {coreValuePoints.map(({ icon: Icon, title, text }) => (
                <motion.article
                  className="about-core-value-item"
                  key={title}
                  variants={cardIn}
                  whileHover={reduceMotion ? undefined : { x: 6 }}
                >
                  <span aria-hidden="true">
                    <Icon size={32} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </RevealSection>

      <PartnersCertificationSection />
    </div>
  )
}

export default About
