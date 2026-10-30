import { useMemo } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import {
  ArrowLeft,
  Cable,
  Cctv,
  CheckCircle2,
  ClipboardList,
  IdCard,
  Image as ImageIcon,
  MonitorCog,
  Router,
  ShieldCheck,
  EthernetPort,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'
import {
  solutionDetails,
  solutions,
  type CctvDetail,
  type ComputerNetworkingDetail,
  type ElvSystemDetail,
  type MediaSlot,
  type StructuredCablingDetail,
} from '../data/solutions'

const iconMap: Record<string, LucideIcon> = {
  clipboard: ClipboardList,
  idCard: IdCard,
  shield: ShieldCheck,
  monitorCog: MonitorCog,
  ethernet: EthernetPort,
}

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

const viewportOnce = { once: true, amount: 0.16 } as const

interface PhotoSlotProps {
  slot: MediaSlot
  icon?: LucideIcon
  className?: string
}

function PhotoSlot({ slot, icon: Icon = ImageIcon, className = '' }: PhotoSlotProps) {
  const fitClass = slot.imageFit === 'contain' ? ' media-slot-contain' : ''

  return (
    <div className={`media-slot${fitClass} ${className}`.trim()}>
      {slot.image ? (
        <img src={slot.image} alt={slot.label} loading="lazy" />
      ) : (
        <>
          <Icon size={38} strokeWidth={1.4} aria-hidden="true" />
          <span>{slot.label}</span>
        </>
      )}
    </div>
  )
}

function isStructuredDetail(
  detail: StructuredCablingDetail | ComputerNetworkingDetail | ElvSystemDetail,
): detail is StructuredCablingDetail {
  return 'subSystems' in detail && 'additionalServices' in detail
}

function isNetworkingDetail(
  detail: StructuredCablingDetail | ComputerNetworkingDetail | ElvSystemDetail,
): detail is ComputerNetworkingDetail {
  return !('subSystems' in detail) && !('cctv' in detail) && 'gallery' in detail
}

function isElvDetail(
  detail: StructuredCablingDetail | ComputerNetworkingDetail | ElvSystemDetail,
): detail is ElvSystemDetail {
  return 'cctv' in detail && 'accessControl' in detail
}

function StructuredDetail({
  detail,
  icon,
}: {
  detail: StructuredCablingDetail
  icon: LucideIcon
}) {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <RevealSection className="content-section section-tint">
        <Container>
          <div className="cabling-overview">
            <div className="cabling-intro">
              {detail.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <motion.div
              className="cabling-hero-wrap"
              animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PhotoSlot
                slot={detail.heroVisual}
                icon={icon}
                className="cabling-hero-visual"
              />
            </motion.div>
          </div>

          <motion.div
            className="cabling-services"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            <motion.h3 variants={riseIn}>{detail.servicesLead}</motion.h3>
            <motion.ul className="check-list" variants={staggerContainer}>
              {detail.services.map((service) => (
                <motion.li key={service} variants={riseIn}>
                  <CheckCircle2 size={17} />
                  {service}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div className="cabling-subsystems" variants={cardIn}>
              <h4>{detail.subSystems.lead}</h4>
              <motion.div className="cabling-chip-row" variants={staggerContainer}>
                {detail.subSystems.items.map((item) => (
                  <motion.span className="cabling-chip" key={item} variants={riseIn}>
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
            <motion.ul className="check-list" variants={staggerContainer}>
              {detail.additionalServices.map((service) => (
                <motion.li key={service} variants={riseIn}>
                  <CheckCircle2 size={17} />
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="cabling-gallery"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            {detail.gallery.map((slot) => (
              <motion.div key={slot.id} className="cabling-gallery-item" variants={cardIn}>
                <PhotoSlot slot={slot} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </RevealSection>
    </>
  )
}

function NetworkingDetail({
  detail,
  icon,
}: {
  detail: ComputerNetworkingDetail
  icon: LucideIcon
}) {
  const reduceMotion = useReducedMotion()

  return (
    <RevealSection className="content-section section-tint">
      <Container>
        <div className="cabling-overview reverse">
          <motion.div
            className="cabling-hero-wrap"
            animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          >
            <PhotoSlot
              slot={detail.heroVisual}
              icon={icon}
              className="cabling-hero-visual"
            />
          </motion.div>
          <div className="cabling-intro">
            {detail.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <motion.div
          className="cabling-services network-services"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'show'}
          viewport={viewportOnce}
        >
          <motion.h3 variants={riseIn}>{detail.servicesLead}</motion.h3>
          <motion.ul className="check-list" variants={staggerContainer}>
            {detail.services.map((service) => (
              <motion.li key={service} variants={riseIn}>
                <CheckCircle2 size={17} />
                {service}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="cabling-gallery"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'show'}
          viewport={viewportOnce}
        >
          {detail.gallery.map((slot) => (
            <motion.div key={slot.id} className="cabling-gallery-item" variants={cardIn}>
              <PhotoSlot slot={slot} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </RevealSection>
  )
}

function CctvServiceBadges({ detail }: { detail: CctvDetail }) {
  const reduceMotion = useReducedMotion()

  return (
    <RevealSection className="content-section section-tint">
      <Container>
        <div className="cctv-system-heading">
          <SectionTitle
            centered
            eyebrow="CCTV Cabling Infrastructure"
            title={detail.heading}
          />
        </div>
        <div className="cabling-overview">
          <div className="cabling-intro">
            {detail.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <motion.div
            className="cabling-hero-wrap"
            animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          >
            <PhotoSlot
              slot={detail.heroVisual}
              icon={Cctv}
              className="cabling-hero-visual"
            />
          </motion.div>
        </div>

        <motion.div
          className="cctv-services-block"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'show'}
          viewport={viewportOnce}
        >
          <motion.p className="cctv-services-lead" variants={riseIn}>
            {detail.servicesLead}
          </motion.p>
          <motion.div className="cctv-service-row" variants={staggerContainer}>
            {detail.services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div className="cctv-service" key={service.title} variants={cardIn}>
                  <span className="cctv-service-badge">
                    <Icon size={28} strokeWidth={1.7} />
                  </span>
                  <span className="cctv-service-label">{service.title}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </Container>
    </RevealSection>
  )
}

function CctvSections({ detail }: { detail: CctvDetail }) {
  return <CctvServiceBadges detail={detail} />
}

function AccessControlSection({ detail }: { detail: ElvSystemDetail['accessControl'] }) {
  const reduceMotion = useReducedMotion()

  return (
    <RevealSection className="content-section">
      <Container>
        <SectionTitle
          eyebrow="Access Control Cabling Infrastructure"
          title={detail.heading}
        />
        <div className="cabling-overview reverse">
          <motion.div
            className="cabling-hero-wrap"
            animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          >
            <PhotoSlot
              slot={detail.heroVisual}
              icon={IdCard}
              className="cabling-hero-visual"
            />
          </motion.div>
          <div className="cabling-intro">
            {detail.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <motion.div
          className="cabling-services"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'show'}
          viewport={viewportOnce}
        >
          <motion.h3 variants={riseIn}>{detail.servicesLead}</motion.h3>
          <motion.ul className="check-list" variants={staggerContainer}>
            {detail.services.map((service) => (
              <motion.li key={service} variants={riseIn}>
                <CheckCircle2 size={17} />
                {service}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </RevealSection>
  )
}

function ElvSections({ detail }: { detail: ElvSystemDetail }) {
  return (
    <>
      <RevealSection className="content-section section-tint">
        <Container>
          <div className="cabling-overview">
            <div className="cabling-intro">
              {detail.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <PhotoSlot slot={detail.heroVisual} icon={Cctv} className="cabling-hero-visual" />
          </div>
        </Container>
      </RevealSection>
      <CctvSections detail={detail.cctv} />
      <AccessControlSection detail={detail.accessControl} />
    </>
  )
}

function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const reduceMotion = useReducedMotion()

  const solution = useMemo(() => solutions.find((s) => s.slug === slug), [slug])
  const detail = useMemo(() => (slug ? solutionDetails[slug] : undefined), [slug])

  if (!slug || !solution || !detail) {
    return <Navigate to="/" replace />
  }

  const heroIcon =
    slug === 'structured-cabling'
      ? Cable
      : slug === 'computer-networking'
        ? Router
        : Cctv

  return (
    <div className="solution-detail-page">
      <PageHero
        title={slug === 'elv-cabling' ? 'ELV Cabling Solutions' : solution.title}
        image={solution.image}
      />

      <RevealSection className="content-section solution-detail-back">
        <Container>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Link className="solution-sub-link" to="/#core-solutions">
              <ArrowLeft size={15} />
              Back to home
            </Link>
          </motion.div>
        </Container>
      </RevealSection>

      {isStructuredDetail(detail) && <StructuredDetail detail={detail} icon={heroIcon} />}
      {isNetworkingDetail(detail) && <NetworkingDetail detail={detail} icon={heroIcon} />}
      {isElvDetail(detail) && <ElvSections detail={detail} />}
    </div>
  )
}

export default SolutionDetail
