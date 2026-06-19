import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import RevealSection from '../components/common/RevealSection'
import { solutions } from '../data/solutions'

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Our solutions"
        title="Connected technology for practical business needs."
        description="We combine communications, digital systems, and infrastructure thinking to create a clearer technology path."
      />
      <RevealSection className="content-section">
        <Container>
          <SectionTitle eyebrow="What we support" title="Solutions shaped around your environment." description="Each engagement begins with requirements, not a pre-set package." />
          <div className="solution-detail-list">
            {solutions.map((solution, index) => (
              <article className="solution-detail" key={solution.id}>
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
                </div>
              </article>
            ))}
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
