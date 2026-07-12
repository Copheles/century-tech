import { useState, useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ChevronDown, MessageCircle, Phone } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import { faqs } from '../data/faqs'

function PopOnScroll({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1],
              },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  )
}

const introContainer: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const introText: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

function FAQIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="faq-intro"
      variants={introContainer}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
    >
      <motion.span className="eyebrow" variants={introText}>
        Need more detail?
      </motion.span>
      <motion.h2 variants={introText}>Every infrastructure project is different.</motion.h2>
      <motion.p variants={introText}>
        If your question is not covered here, speak directly with our team.
      </motion.p>
      <motion.div className="faq-feature" variants={introText}>
        <MessageCircle size={20} />
        <span>
          <motion.strong variants={introText}>Clear, direct guidance</motion.strong>
          <motion.small variants={introText}>
            Start with your requirements and we will help identify the next step.
          </motion.small>
        </span>
      </motion.div>
      <motion.div variants={introText}>
        <Button to="/contact"><Phone size={17} /> Contact us</Button>
      </motion.div>
    </motion.div>
  )
}

function FAQ() {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null)

  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Answers about cabling, standards, and support."
        description="A quick guide to CENTURY's structured cabling capabilities, project delivery, certifications, testing, and warranties."
        variant="faq"
      />
      <section className="content-section faq-page">
        <Container className="faq-layout">
          <FAQIntro />
          <div className="faq-list">
            {faqs.map((item, index) => {
              const isOpen = openId === item.id
              return (
                <PopOnScroll key={item.id} delay={index * 0.1}>
                  <article className={`faq-item${isOpen ? ' open' : ''}`}>
                    <h2>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                      >
                        {item.question}
                        <ChevronDown size={20} aria-hidden="true" />
                      </button>
                    </h2>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${item.id}`}
                          className="faq-answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.44, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.26, ease: 'easeOut' },
                          }}
                        >
                          <motion.div
                            className="faq-answer-inner"
                            initial={{ y: -8 }}
                            animate={{ y: 0 }}
                            exit={{ y: -8 }}
                            transition={{ duration: 0.32, ease: 'easeOut' }}
                          >
                            <p>{item.answer}</p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </PopOnScroll>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}

export default FAQ
