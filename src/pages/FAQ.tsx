import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown, Phone } from 'lucide-react'
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

function FAQ() {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null)

  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Clear answers before the conversation begins."
        description="A quick introduction to how Century Technology approaches requirements, solutions, and support."
      />
      <section className="content-section">
        <Container className="faq-layout">
          <PopOnScroll className="faq-intro" delay={0}>
            <span className="eyebrow">Need more detail?</span>
            <h2>Every technology environment is different.</h2>
            <p>If your question is not covered here, speak directly with our team.</p>
            <Button to="/contact"><Phone size={17} /> Contact us</Button>
          </PopOnScroll>
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
                    <div id={`faq-answer-${item.id}`} className="faq-answer" hidden={!isOpen}>
                      <p>{item.answer}</p>
                    </div>
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
