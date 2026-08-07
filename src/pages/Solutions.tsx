import {
  ArrowRight,
  Cable,
  Cctv,
  CheckCircle2,
  ClipboardList,
  EthernetPort,
  HandCoins,
  IdCard,
  Image as ImageIcon,
  MonitorCog,
  MonitorPlay,
  Router,
  ScanSearch,
  ShieldCheck,
  UserX,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import RevealSection from '../components/common/RevealSection'
import {
  cctvDetail,
  computerNetworkingDetail,
  solutions,
  structuredCablingDetail,
} from '../data/solutions'
import type { MediaSlot } from '../data/solutions'

const iconMap: Record<string, LucideIcon> = {
  clipboard: ClipboardList,
  idCard: IdCard,
  shield: ShieldCheck,
  monitorCog: MonitorCog,
  ethernet: EthernetPort,
  scanSearch: ScanSearch,
  handCoins: HandCoins,
  userX: UserX,
  monitorPlay: MonitorPlay,
}

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

function Solutions() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <PageHero
        eyebrow="Our solutions"
        title="Connected technology for practical business needs."
        description="From structured cabling and computer networking to complete ELV security systems, we build the infrastructure your organisation depends on."
        variant="solutions"
      />

      <RevealSection className="content-section">
        <Container>
          <SectionTitle
            eyebrow="What we support"
            title="Solutions shaped around your environment."
            description="Each engagement begins with requirements, not a pre-set package."
          />
          <motion.div
            className="solution-detail-list"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            {solutions.map((solution, index) => (
              <motion.article className="solution-detail" key={solution.id} variants={cardIn}>
                <div className="solution-detail-heading">
                  <span className="card-number">0{index + 1}</span>
                  <h2>{solution.title}</h2>
                </div>
                <div>
                  <p>{solution.description}</p>
                  <ul className="check-list">
                    {solution.highlights.map((highlight) => (
                      <li key={highlight}><CheckCircle2 size={17} />{highlight}</li>
                    ))}
                  </ul>
                  {solution.detailAnchor && (
                    <a
                      className="solution-sub-link solution-detail-link"
                      href={`#${solution.detailAnchor}`}
                    >
                      View details <ArrowRight size={15} />
                    </a>
                  )}
                  {solution.subSolutions && (
                    <div className="solution-sub-list">
                      {solution.subSolutions.map((sub) =>
                        sub.comingSoon ? (
                          <div className="solution-sub-card" key={sub.id}>
                            <h3>{sub.title}</h3>
                            <p>{sub.description}</p>
                            <span className="solution-sub-tag">Details coming soon</span>
                          </div>
                        ) : (
                          <a className="solution-sub-card" href={`#${sub.id}`} key={sub.id}>
                            <h3>{sub.title}</h3>
                            <p>{sub.description}</p>
                            <span className="solution-sub-link">
                              View details <ArrowRight size={15} />
                            </span>
                          </a>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection id="structured-cabling" className="content-section section-tint">
        <Container>
          <SectionTitle
            eyebrow="Structured Cabling"
            title={structuredCablingDetail.heading}
          />
          <div className="cabling-overview">
            <div className="cabling-intro">
              {structuredCablingDetail.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <motion.div
              className="cabling-hero-wrap"
              animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PhotoSlot
                slot={structuredCablingDetail.heroVisual}
                icon={Cable}
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
            <motion.h3 variants={riseIn}>{structuredCablingDetail.servicesLead}</motion.h3>
            <motion.ul className="check-list" variants={staggerContainer}>
              {structuredCablingDetail.services.map((service) => (
                <motion.li key={service} variants={riseIn}>
                  <CheckCircle2 size={17} />{service}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div className="cabling-subsystems" variants={cardIn}>
              <h4>{structuredCablingDetail.subSystems.lead}</h4>
              <motion.div className="cabling-chip-row" variants={staggerContainer}>
                {structuredCablingDetail.subSystems.items.map((item) => (
                  <motion.span className="cabling-chip" key={item} variants={riseIn}>
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
            <motion.ul className="check-list" variants={staggerContainer}>
              {structuredCablingDetail.additionalServices.map((service) => (
                <motion.li key={service} variants={riseIn}>
                  <CheckCircle2 size={17} />{service}
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
            {structuredCablingDetail.gallery.map((slot) => (
              <motion.div key={slot.id} className="cabling-gallery-item" variants={cardIn}>
                <PhotoSlot slot={slot} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection id="computer-networking" className="content-section">
        <Container>
          <SectionTitle
            eyebrow="Computer Networking"
            title={computerNetworkingDetail.heading}
          />
          <div className="cabling-overview reverse">
            <motion.div
              className="cabling-hero-wrap"
              animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            >
              <PhotoSlot
                slot={computerNetworkingDetail.heroVisual}
                icon={Router}
                className="cabling-hero-visual"
              />
            </motion.div>
            <div className="cabling-intro">
              {computerNetworkingDetail.intro.map((paragraph) => (
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
            <motion.h3 variants={riseIn}>{computerNetworkingDetail.servicesLead}</motion.h3>
            <motion.ul className="check-list" variants={staggerContainer}>
              {computerNetworkingDetail.services.map((service) => (
                <motion.li key={service} variants={riseIn}>
                  <CheckCircle2 size={17} />{service}
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
            {computerNetworkingDetail.gallery.map((slot) => (
              <motion.div key={slot.id} className="cabling-gallery-item" variants={cardIn}>
                <PhotoSlot slot={slot} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection id="cctv-system" className="content-section section-tint">
        <Container>
          <SectionTitle
            eyebrow="ELV System · CCTV System"
            title={cctvDetail.heading}
          />
          <div className="cabling-overview">
            <div className="cabling-intro">
              {cctvDetail.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <motion.div
              className="cabling-hero-wrap"
              animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            >
              <PhotoSlot
                slot={cctvDetail.heroVisual}
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
              {cctvDetail.servicesLead}
            </motion.p>
            <motion.div className="cctv-service-row" variants={staggerContainer}>
              {cctvDetail.services.map((service) => {
                const Icon = iconMap[service.icon]
                return (
                  <motion.div className="cctv-service" key={service.title} variants={cardIn}>
                    <span className="cctv-service-badge">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <span className="cctv-service-label">{service.title}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section">
        <Container>
          <SectionTitle
            eyebrow="Why invest"
            title={cctvDetail.whyInvest.heading}
            description={cctvDetail.whyInvest.lead}
          />
          <motion.div
            className="cctv-benefit-grid"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            {cctvDetail.whyInvest.benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon]
              return (
                <motion.article className="cctv-benefit" key={benefit.title} variants={cardIn}>
                  <div className="cctv-benefit-head">
                    <Icon size={20} strokeWidth={1.8} />
                    <h3>{benefit.title}</h3>
                  </div>
                  <p>{benefit.text}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section">
        <Container className="cctv-technology">
          <motion.div
            variants={cardIn}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            <PhotoSlot
              slot={cctvDetail.technology.visual}
              icon={Cctv}
              className="cctv-technology-visual"
            />
          </motion.div>
          <motion.div
            className="cctv-technology-copy"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            <motion.h2 variants={riseIn}>{cctvDetail.technology.heading}</motion.h2>
            <motion.ul className="cctv-tech-list" variants={staggerContainer}>
              {cctvDetail.technology.items.map((item) => (
                <motion.li key={item} variants={riseIn}>{item}</motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section">
        <Container>
          <SectionTitle
            eyebrow={cctvDetail.maintenance.heading}
            title={cctvDetail.maintenance.lead}
          />
          <div className="cctv-maintenance">
            <motion.div
              className="cctv-maintenance-list"
              variants={staggerContainer}
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'show'}
              viewport={viewportOnce}
            >
              {cctvDetail.maintenance.packages.map((pkg, index) => (
                <motion.article className="cctv-maintenance-item" key={pkg.title} variants={riseIn}>
                  <span className="card-number">0{index + 1}</span>
                  <div>
                    <h3>{pkg.title}</h3>
                    <p>{pkg.text}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
            <motion.div
              variants={cardIn}
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'show'}
              viewport={viewportOnce}
            >
              <PhotoSlot
                slot={cctvDetail.maintenance.visual}
                icon={Cctv}
                className="cctv-maintenance-visual"
              />
            </motion.div>
          </div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section section-tint">
        <Container className="intro-grid">
          <SectionTitle eyebrow="The right starting point" title="Not sure which solution fits?" />
          <div className="intro-copy">
            <p>That is exactly what the first conversation is for. Share your current challenge and we can help identify the most practical next step.</p>
            <Button to="/contact">Discuss your requirements <ArrowRight size={18} /></Button>
          </div>
        </Container>
      </RevealSection>
    </>
  )
}

export default Solutions
