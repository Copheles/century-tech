import { ArrowRight, Compass, MessagesSquare, Wrench } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import RevealSection from '../components/common/RevealSection'
import { company } from '../data/company'

const approach = [
  { icon: MessagesSquare, step: '01', title: 'Understand', text: 'We begin with your environment, priorities, and the people who will use the solution.' },
  { icon: Compass, step: '02', title: 'Recommend', text: 'We turn those requirements into a clear, practical technology direction.' },
  { icon: Wrench, step: '03', title: 'Deliver', text: 'We keep implementation focused, understandable, and ready for everyday operations.' },
]

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A practical technology partner for connected businesses."
        description={`${company.name} helps organisations turn communication and technology needs into clear, dependable solutions.`}
      />
      <RevealSection className="content-section">
        <Container className="intro-grid">
          <SectionTitle eyebrow="Our perspective" title="Good technology starts with a clear understanding of the business." />
          <div className="intro-copy">
            <p>Our role is to make technology decisions easier to understand and more useful in practice.</p>
            <p>By looking at communications, systems, and infrastructure together, we help organisations build a stronger foundation for daily work and future growth.</p>
          </div>
        </Container>
      </RevealSection>
      <RevealSection className="content-section section-tint">
        <Container>
          <SectionTitle eyebrow="How we work" title="A straightforward path from requirement to solution." />
          <div className="process-grid">
            {approach.map(({ icon: Icon, step, title, text }) => (
              <article className="process-card" key={step}>
                <span className="process-step">{step}</span>
                <Icon size={25} />
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </RevealSection>
      <RevealSection className="content-section">
        <Container className="statement-panel">
          <div>
            <span className="eyebrow">Our focus</span>
            <h2>{company.tagline}</h2>
          </div>
          <p>We aim to be the team you can speak with clearly, plan with confidently, and rely on as your technology needs evolve.</p>
        </Container>
      </RevealSection>
      <RevealSection className="cta-section">
        <Container className="cta-inner">
          <h2>Have a technology requirement to discuss?</h2>
          <Button to="/contact">Talk to our team <ArrowRight size={18} /></Button>
        </Container>
      </RevealSection>
    </>
  )
}

export default About
