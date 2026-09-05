import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ChevronDown, Phone } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'
import { faqs } from '../data/faqs'

const motionEase = [0.22, 1, 0.36, 1] as const
const viewportOnce = { once: true, amount: 0.2 } as const

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: motionEase },
  },
}

function FAQ() {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null)
  const reduceMotion = useReducedMotion()

  return (
    <div className="faq-page">
      <PageHero title="Frequently Asked Questions" />

      <RevealSection className="content-section section-tint">
        <Container>
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <SectionTitle
              centered
              eyebrow="FAQ"
              title="Common questions answered."
              description="Clear guidance on structured cabling, standards, delivery, and support. If you need more detail, our team can help."
            />
          </motion.div>

          <motion.div
            className="faq-list"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            {faqs.map((item) => {
              const isOpen = openId === item.id

              return (
                <motion.article
                  className={`faq-item${isOpen ? ' open' : ''}`}
                  key={item.id}
                  variants={fadeUp}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                    >
                      {item.question}
                      <ChevronDown size={20} aria-hidden="true" />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.44, ease: motionEase },
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
                </motion.article>
              )
            })}
          </motion.div>

          <motion.div
            className="faq-actions"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p>Still need help with your project?</p>
            <Button to="/contact">
              <Phone size={17} /> Contact us
            </Button>
          </motion.div>
        </Container>
      </RevealSection>
    </div>
  )
}

export default FAQ
