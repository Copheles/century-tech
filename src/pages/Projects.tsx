import { ArrowRight } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import RevealSection from '../components/common/RevealSection'
import { projects } from '../data/projects'

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Project capabilities"
        title="From business requirement to useful digital experience."
        description="Explore examples of the project types our technology capabilities can support."
      />
      <RevealSection className="content-section">
        <Container>
          <SectionTitle eyebrow="Capability examples" title="Built to improve how people work and connect." description="These examples illustrate solution directions rather than published client case studies." />
          <div className="case-study-list">
            {projects.map((project, index) => (
              <article className="case-study" key={project.id}>
                <div className="case-study-index">0{index + 1}</div>
                <div>
                  <span className="case-study-category">{project.category}</span>
                  <h2>{project.title}</h2>
                </div>
                <div>
                  <p>{project.summary}</p>
                  <strong>Intended outcome</strong>
                  <p>{project.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </RevealSection>
      <RevealSection className="cta-section">
        <Container className="cta-inner">
          <div>
            <span className="eyebrow">Your project</span>
            <h2>Tell us what a better outcome looks like for your team.</h2>
          </div>
          <Button to="/contact">Start a conversation <ArrowRight size={18} /></Button>
        </Container>
      </RevealSection>
    </>
  )
}

export default Projects
