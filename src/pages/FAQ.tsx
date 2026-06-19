import { useState } from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import RevealSection from '../components/common/RevealSection'
import { faqs } from '../data/faqs'

function FAQ() {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null)

  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Clear answers before the conversation begins."
        description="A quick introduction to how Century Technology approaches requirements, solutions, and support."
      />
      <RevealSection className="content-section">
        <Container className="faq-layout">
          <div className="faq-intro">
            <span className="eyebrow">Need more detail?</span>
            <h2>Every technology environment is different.</h2>
            <p>If your question is not covered here, speak directly with our team.</p>
            <Button to="/contact"><Phone size={17} /> Contact us</Button>
          </div>
          <div className="faq-list">
            {faqs.map((item) => {
              const isOpen = openId === item.id
              return (
                <article className={`faq-item${isOpen ? ' open' : ''}`} key={item.id}>
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
              )
            })}
          </div>
        </Container>
      </RevealSection>
    </>
  )
}

export default FAQ
