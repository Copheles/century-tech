import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Handshake,
  Network,
  ShieldCheck,
  Target,
  UsersRound,
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { Variants } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import RevealSection from '../components/common/RevealSection'
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

const partners: {
  name: string
  logo: string
  logoSize: string
  detail?: string
}[] = [
  { name: 'CommScope', logo: '/partners/commscope.png', logoSize: 'boost' },
  { name: 'Datwyler', logo: '/partners/datwyler.png', logoSize: 'boost-xl' },
  { name: 'APC', logo: '/partners/apc.svg', logoSize: 'compact' },
  { name: 'Panduit', logo: '/partners/panduit.png', logoSize: 'boost-xl' },
  { name: 'SYSTIMAX', logo: '/partners/systimax.png', logoSize: 'boost-xl' },
  { name: 'R&M', logo: '/partners/r-and-m.png', logoSize: 'boost' },
]

const partnerMarqueeItems = [...partners, ...partners]

const standardHighlights = [
  {
    name: 'BICSI',
    label: 'RCDD Certified',
    image: '/certifications/bicsi-certified-rcdd.png',
  },
  {
    name: 'BICSI',
    label: 'Corporate Member Professional Membership',
    image: '/certifications/bicsi-corporate-member-profeessional-membership.webp',
  },
  {
    name: 'ISO',
    label: '9001:2015 Quality Management',
    image: '/certifications/iso-9001-2015-quality-management.jpg',
  },
  {
    name: 'APC',
    label: 'Elite Partner by Schneider Electric',
    image: '/certifications/apc-elite-partner-by-schneider-electric.png',
  },
  {
    name: 'Cisco',
    label: 'Select Certified Partner',
    image: '/certifications/cisco-select-certified-partner.jpg',
  },
  {
    name: 'Microsoft',
    label: 'Preferred Business Applications',
    image: '/certifications/microsoft-preferred-business-applications.webp',
  },
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
  const partnersMarqueeRef = useRef<HTMLDivElement>(null)
  const partnersOffsetRef = useRef(0)
  const partnersImpulseRef = useRef(0)
  const partnersSpeedRef = useRef(-0.04)
  const partnersPausedRef = useRef(false)
  const partnersLoopWidthRef = useRef(0)
  const { scrollYProgress: profileImageProgress } = useScroll({
    target: profileImageRef,
    offset: ['start end', 'end start'],
  })
  const profileImageY = useTransform(profileImageProgress, [0, 1], reduceMotion ? [0, 0] : [34, -34])

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
            {standardHighlights.map((credential) => (
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

      <RevealSection className="cta-section">
        <Container className="cta-inner">
          <div>
            <span className="eyebrow">Work with us</span>
            <h2>Need a communication infrastructure partner?</h2>
          </div>
          <Button to="/contact">
            Talk to our team <ArrowRight size={18} />
          </Button>
        </Container>
      </RevealSection>
    </>
  )
}

export default About
