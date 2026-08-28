import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Handshake,
  Network,
  ShieldCheck,
  Target,
  UsersRound,
} from 'lucide-react'
import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { Variants } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'
import PartnersCertificationSection from '../components/sections/PartnersCertificationSection'
import { company } from '../data/company'

const companyStats = [
  { value: '1996', label: 'Founded in Singapore' },
  { value: '25+', label: 'Years of project experience' },
  { value: '30+', label: 'School projects secured by 2001' },
]

const strengths = [
  'Structured cabling design and installation',
  'Communication systems and ELV infrastructure',
  'Security, audio visual, and satellite communication systems',
  'Certified designers and installers for leading vendors',
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

const milestones = [
  { year: '1996', title: 'Century Technology was founded in Singapore as a structured cabling company.' },
  { year: '2001', title: 'Outstanding Sales Performance 2001 was presented to Century Technology by AMP.' },
  { year: '2001', title: 'Century Technology secured its 30th school project.' },
  { year: '2003', title: 'Diversification began to provide customers with a one-stop solution for IT communication.' },
  { year: '2005', title: 'Secured Bahrain World Trade Centre project and began providing full ELV cabling solutions.' },
  { year: '2008', title: 'Installed our first Cat6A site at Siltronic Samsung Wafer.' },
  { year: '2009', title: 'Completed the first AMP Cat7 installation in Asia for Duke NUS Graduate Medical School.' },
]

const heroDescription = `${company.legalName} is a Singapore technology services company specialising in the design, installation, and maintenance of communication systems.`

const profileParagraphs = [
  'Founded in Singapore in 1996, Century Technology began as a structured cabling company. Over the years, we have expanded into related services including audio visual systems, security solutions, satellite communication systems, and complete communication solutions.',
  'Our reputation is built on practical problem solving, technical experience, and the ability to support customers across government agencies, multinational corporations, educational institutions, and residential developments.',
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

const riseIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
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
  const profileImageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: profileImageProgress } = useScroll({
    target: profileImageRef,
    offset: ['start end', 'end start'],
  })
  const profileImageY = useTransform(profileImageProgress, [0, 1], reduceMotion ? [0, 0] : [34, -34])

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built on cabling expertise. Growing with communication technology."
        description={heroDescription}
        variant="about"
      />

      <RevealSection className="content-section about-profile-section">
        <Container className="about-profile">
          <motion.div
            className="about-profile-copy"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.span className="eyebrow" variants={riseIn}>Company background</motion.span>
            <motion.h2 variants={riseIn}>
              From structured cabling roots to complete communication solutions.
            </motion.h2>
            {profileParagraphs.map((text) => (
              <motion.p key={text} variants={riseIn}>{text}</motion.p>
            ))}
            <motion.ul className="about-check-list" variants={staggerContainer}>
              {strengths.map((item) => (
                <motion.li key={item} variants={riseIn}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            ref={profileImageRef}
            className="about-image-stack"
            style={{ y: profileImageY }}
            aria-label="Image placeholders"
          >
            <motion.div
              className="about-image-card about-image-card-large"
              initial={{ opacity: 0, x: 36, rotate: 1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={
                reduceMotion
                  ? { duration: 0.55, ease: 'easeOut' }
                  : {
                      opacity: { duration: 0.55, ease: 'easeOut' },
                      x: { duration: 0.55, ease: 'easeOut' },
                      rotate: { duration: 0.55, ease: 'easeOut' },
                      y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                    }
              }
            >
              <Building2 size={30} />
              <span>Company or project image</span>
            </motion.div>
            <motion.div
              className="about-image-card about-image-card-small"
              initial={{ opacity: 0, x: -20, y: 28, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
              transition={
                reduceMotion
                  ? { duration: 0.55, ease: 'easeOut', delay: 0.12 }
                  : {
                      opacity: { duration: 0.55, ease: 'easeOut', delay: 0.12 },
                      x: { duration: 0.55, ease: 'easeOut', delay: 0.12 },
                      rotate: { duration: 0.55, ease: 'easeOut', delay: 0.12 },
                      y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
                    }
              }
            >
              <Network size={24} />
              <span>Team at work</span>
            </motion.div>
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section section-tint">
        <Container>
          <motion.div
            className="about-stat-strip"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {companyStats.map((item, index) => (
              <motion.article
                key={item.label}
                variants={cardIn}
                whileHover={reduceMotion ? undefined : { y: -10, scale: 1.025 }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <small>0{index + 1}</small>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section">
        <Container className="about-vision-mission">
          <motion.article
            className="about-vision-card"
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.span
              className="about-card-icon"
              animate={reduceMotion ? undefined : { rotate: [0, 4, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Target size={24} />
            </motion.span>
            <span className="eyebrow">Vision</span>
            <h2>To be a trusted regional communication technology partner.</h2>
            <p>
              We aim to become a key player in the regional communication market by staying close to
              customer needs, technology changes, and the interests of all stakeholders.
            </p>
          </motion.article>
          <motion.div
            className="about-mission-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
          >
            <SectionTitle
              eyebrow="Mission"
              title="Reliable solutions, continuous improvement, and trained people."
            />
            {missionPoints.map(({ icon: Icon, title, text }) => (
              <motion.article
                className="about-mission-item"
                key={title}
                variants={cardIn}
                whileHover={reduceMotion ? undefined : { x: 6 }}
              >
                <span>
                  <Icon size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.article>
            ))}
            <div className="about-core-values-heading">
              <SectionTitle
                eyebrow="Core Values"
                title="Values that guide how we work."
              />
            </div>
            {coreValuePoints.map(({ icon: Icon, title, text }) => (
              <motion.article
                className="about-mission-item"
                key={title}
                variants={cardIn}
                whileHover={reduceMotion ? undefined : { x: 6 }}
              >
                <span>
                  <Icon size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section section-ink about-milestone-section">
        <Container>
          <div className="section-heading-row">
            <SectionTitle
              eyebrow="Milestones"
              title="Key moments in our growth."
              description="A timeline of selected achievements from our structured cabling foundation to wider ELV and communication system delivery."
            />
          </div>
          <motion.div
            className="about-timeline"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {milestones.map((item, index) => (
              <motion.article
                className="about-timeline-item"
                key={`${item.year}-${index}`}
                variants={cardIn}
                whileHover={reduceMotion ? undefined : { x: 8 }}
              >
                <div className="about-timeline-year">
                  <span>{item.year}</span>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                </div>
                <div className="about-timeline-copy">
                  <p>{item.title}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </RevealSection>

      <PartnersCertificationSection />
    </>
  )
}

export default About
