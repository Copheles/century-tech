import { ArrowRight, CheckCircle2, Network, ShieldCheck, Workflow } from 'lucide-react'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'
import { solutions } from '../data/solutions'
import { projects } from '../data/projects'
import { company } from '../data/company'

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

function Home() {
  return (
    <>
      <section className="home-hero">
        <Container className="home-hero-grid">
          <div className="home-hero-copy">
            <span className="eyebrow">Century Technology</span>
            <h1>IT communications that keep your business moving.</h1>
            <p>
              We help organisations connect people, systems, and operations
              through practical technology solutions designed for real business needs.
            </p>
            <div className="hero-actions">
              <Button to="/solutions">
                Explore our solutions <ArrowRight size={18} />
              </Button>
              <Button to="/contact" variant="secondary">
                Talk to our team
              </Button>
            </div>
          </div>
          <div className="hero-brand-panel">
            <span className="hero-panel-kicker">Your technology partner</span>
            <strong>{company.tagline}</strong>
            <ul>
              <li><CheckCircle2 size={18} /> Clear recommendations</li>
              <li><CheckCircle2 size={18} /> Practical implementation</li>
              <li><CheckCircle2 size={18} /> Dependable communication</li>
            </ul>
          </div>
        </Container>
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
