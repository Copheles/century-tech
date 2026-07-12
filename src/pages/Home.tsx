import { ArrowLeft, ArrowRight, CheckCircle2, Network, ShieldCheck, Workflow } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'
import { solutions } from '../data/solutions'
import { projects } from '../data/projects'

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

const heroSlides = [
  {
    image: '/carousel-1.jpg',
    variant: 'primary',
    eyebrow: 'Century Technology',
    title: 'IT Communications that keep business moving.',
    text: 'We help organisations connect people, systems, and operations through practical technology solutions designed for real business needs.',
  },
  {
    image: '/carousel-2.jpg',
    variant: 'default',
    eyebrow: 'Connected Operations',
    title: 'Reliable systems for teams that need to move faster.',
    text: 'From infrastructure to communication workflows, we shape technology around practical everyday business use.',
  },
  {
    image: '/carousel-3.jpg',
    variant: 'default',
    eyebrow: 'Digital Solutions',
    title: 'Technology foundations built for long-term progress.',
    text: 'Plan, connect, and scale with dependable solutions that make operations clearer and easier to support.',
  },
]

const expertServices = [
  {
    title: 'Consultancy Services',
    summary: 'Providing quality consultancy services to address your needs.',
    image: '/carousel-1.jpg',
    points: [
      'Ability to diagnose problems with your existing infrastructure and offer solutions to meet organisational objectives.',
      'Create bespoke solutions for structured cabling and ELV solutions for offices, large scale and public projects.',
    ],
  },
  {
    title: 'Site Survey Services',
    summary: 'Aim to offer our customers the best possible service.',
    image: '/carousel-2.jpg',
    points: [
      'Onsite evaluation of facilities to better understand the layout and your needs to provide an effective solution.',
      'Collaborate and work closely with contractors to ensure that the best possible IT cabling and ELV infrastructure solutions are built on each project and building design.',
    ],
  },
  {
    title: 'Installation Services',
    summary: 'Ensure timely project implementation.',
    image: '/carousel-3.jpg',
    points: [
      'Time tested project implementation methodology to ensure success in project delivery.',
      'Join the growing network of our global partners to boost project implementation success and assurance through our partners certification.',
    ],
  },
]

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
  const expertEase = [0.16, 1, 0.3, 1] as const

  return (
    <>
      <section className="home-hero">
        <Swiper
          className="home-hero-carousel"
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          loop
          navigation={{
            prevEl: '.home-hero-nav-prev',
            nextEl: '.home-hero-nav-next',
          }}
          autoplay={{ delay: 5200, disableOnInteraction: false }}
          speed={900}
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.image}>
              <div
                className={`home-hero-slide home-hero-slide-${slide.variant}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <Container className="home-hero-content">
                  <div className="home-hero-copy">
                    <div className="home-hero-copy-card">
                      <span className="eyebrow home-hero-eyebrow">{slide.eyebrow}</span>
                      <h1 className="home-hero-title">{slide.title}</h1>
                      <p className="home-hero-lead">{slide.text}</p>
                      <div className="hero-actions">
                        <Button to="/solutions">
                          Explore our solutions <ArrowRight size={18} />
                        </Button>
                        <Button to="/contact" variant="secondary">
                          Talk to our team
                        </Button>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          ))}
          <div className="home-hero-nav" aria-label="Carousel controls">
            <button
              className="home-hero-nav-button home-hero-nav-prev"
              type="button"
              aria-label="Previous slide"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              className="home-hero-nav-button home-hero-nav-next"
              type="button"
              aria-label="Next slide"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </Swiper>
      </section>

      <RevealSection className="content-section">
        <Container className="intro-grid">
          <SectionTitle
            eyebrow="Who we are"
            title="Technology should make business clearer, not more complicated."
          />
          <div className="intro-copy">
            <p>
              Century Technology brings IT communications, digital solutions,
              and infrastructure thinking together in one practical approach.
            </p>
            <p>
              We start with your requirements, identify the right path, and keep
              the solution focused on reliable everyday use.
            </p>
            <Button to="/about" variant="secondary">
              Learn about our approach <ArrowRight size={17} />
            </Button>
          </div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section expert-section" initial={false} whileInView={undefined}>
        <Container>
          <div className="expert-heading">
            <motion.span
              className="expert-kicker"
              initial={reduceMotion ? false : { opacity: 0, y: isMobile ? 18 : 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9, ease: expertEase }}
            >
              Why Choose Us?
            </motion.span>
            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: isMobile ? 28 : 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.16, ease: expertEase }}
            >
              An Expert in ICT Infrastructure
            </motion.h2>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: isMobile ? 30 : 22 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.32, ease: expertEase }}
            >
              Century Technology provides more than just the usual design and implementation
              of cabling systems. We specialise in ELV integration services that help
              future-proof your business.
            </motion.p>
          </div>
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
                    duration: isMobile ? 1.05 : 1.15,
                    delay: 0.24 + index * (isMobile ? 0.22 : 0.16),
                    ease: expertEase,
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
                    transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.7 }}
                  >
                    <span className="expert-photo-accent" />
                    <img src={service.image} alt="" className="expert-photo" loading="lazy" />
                  </motion.div>
                  <ul className="expert-list">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section section-tint">
        <Container>
          <SectionTitle
            eyebrow="Core solutions"
            title="A connected approach to modern technology."
            description="Focused services for organisations that need clearer communication, stronger systems, and dependable foundations."
          />
          <div className="service-grid">
            {solutions.map((solution, index) => (
              <article className="service-card" key={solution.id}>
                <span className="card-number">0{index + 1}</span>
                <h2>{solution.title}</h2>
                <p>{solution.description}</p>
                <ul className="check-list">
                  {solution.highlights.map((highlight) => (
                    <li key={highlight}><CheckCircle2 size={16} />{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section">
        <Container>
          <SectionTitle
            eyebrow="Why Century Technology"
            title="A practical partner from planning to progress."
          />
          <div className="value-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <article className="value-card" key={title}>
                <span className="value-icon"><Icon size={22} /></span>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </RevealSection>

      <RevealSection className="content-section section-ink">
        <Container>
          <div className="section-heading-row">
            <SectionTitle
              eyebrow="Solution examples"
              title="Technology shaped around useful outcomes."
              description="Examples of the kinds of digital experiences and operational systems our capabilities can support."
            />
            <Button to="/projects" variant="secondary">View project capabilities</Button>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <span>{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <strong>{project.outcome}</strong>
              </article>
            ))}
          </div>
        </Container>
      </RevealSection>

      <RevealSection className="cta-section">
        <Container className="cta-inner">
          <div>
            <span className="eyebrow">Start a conversation</span>
            <h2>Let’s find the right way forward for your organisation.</h2>
          </div>
          <Button to="/contact">Contact our team <ArrowRight size={18} /></Button>
        </Container>
      </RevealSection>
    </>
  )
}

export default Home
