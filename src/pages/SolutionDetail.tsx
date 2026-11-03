import { useMemo } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import {
  Cable,
  Cctv,
  CheckCircle2,
  ClipboardList,
  EthernetPort,
  IdCard,
  Image as ImageIcon,
  MonitorCog,
  Router,
  ShieldCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
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

const cctvIconMap: Record<string, LucideIcon> = {
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
      <RevealSection className="content-section section-tint structured-detail">
        <Container>
          <div className="cabling-overview">
            <div className="cabling-intro">
              {detail.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="cabling-hero-wrap">
              <PhotoSlot
                slot={detail.heroVisual}
                icon={icon}
                className="cabling-hero-visual"
              />
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
              {[...detail.services, ...detail.additionalServices].map((service) => (
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
    <RevealSection className="content-section section-tint structured-detail">
      <Container>
        <div className="cabling-overview">
          <div className="cabling-intro">
            {detail.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="cabling-hero-wrap">
            <PhotoSlot
              slot={detail.heroVisual}
              icon={icon}
              className="cabling-hero-visual"
            />
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

function CctvSection({ detail }: { detail: CctvDetail }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="elv-block">
      <div className="cabling-overview">
        <div className="cabling-intro">
          <span className="elv-kicker">{detail.title}</span>
          <p>{detail.heading}</p>
          {detail.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="cabling-hero-wrap">
          <PhotoSlot slot={detail.heroVisual} icon={Cctv} className="cabling-hero-visual" />
        </div>
      </div>

      <motion.div
        className="elv-cctv-services"
        variants={staggerContainer}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'show'}
        viewport={viewportOnce}
      >
        <motion.p className="elv-services-note" variants={riseIn}>
          {detail.servicesLead}
        </motion.p>
        <motion.div className="cctv-service-row" variants={staggerContainer}>
          {detail.services.map((service) => {
            const Icon = cctvIconMap[service.icon] ?? CheckCircle2

            return (
              <motion.div className="cctv-service" key={service.title} variants={riseIn}>
                <span className="cctv-service-badge">
                  <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="cctv-service-label">{service.title}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

function AccessControlSection({ detail }: { detail: ElvSystemDetail['accessControl'] }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="elv-block elv-split-reverse">
      <div className="cabling-overview">
        <div className="cabling-intro">
          <span className="elv-kicker">{detail.title}</span>
          <p>{detail.heading}</p>
          {detail.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="cabling-hero-wrap">
          <PhotoSlot slot={detail.heroVisual} icon={IdCard} className="cabling-hero-visual" />
        </div>
      </div>

      <motion.div
        className="cabling-services elv-access-services"
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
    </div>
  )
}

function ElvSections({ detail }: { detail: ElvSystemDetail }) {
  return (
    <RevealSection className="content-section section-tint structured-detail">
      <Container>
        <div className="elv-statement">
          <div className="cabling-intro">
            {detail.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="elv-banner">
            <PhotoSlot slot={detail.heroVisual} icon={Cctv} className="cabling-hero-visual" />
          </div>
        </div>
        <CctvSection detail={detail.cctv} />
        <AccessControlSection detail={detail.accessControl} />
      </Container>
    </RevealSection>
  )
}

function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>()

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

      {isStructuredDetail(detail) && <StructuredDetail detail={detail} icon={heroIcon} />}
      {isNetworkingDetail(detail) && <NetworkingDetail detail={detail} icon={heroIcon} />}
      {isElvDetail(detail) && <ElvSections detail={detail} />}
    </div>
  )
}

export default SolutionDetail
