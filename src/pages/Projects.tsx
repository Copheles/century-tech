import { Image as ImageIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import RevealSection from '../components/common/RevealSection'
import { ongoingProjects, projects } from '../data/projects'

const projectPriority = [
  'IWMF',
  'Thomson East Coast',
  'Gardens by the Bay',
  'Resort World Sentosa',
  'Bahrain',
  'International Cruise Terminal',
  'Duke',
  'Sembcorp',
  'Meta Data Centre',
  'Westgate',
  'Singapore Civil Defence Force',
  'SingHealth Polyclinics',
  'TTSH Integrated Care Hub',
  'BW Group',
  'Dulwich Colleague Singapore',
  'Singpore American School',
  'HSBC',
  'Mizuho',
  'PSA',
] as const

function projectSortRank(title: string) {
  const index = projectPriority.findIndex((keyword) => title.includes(keyword))
  return index === -1 ? projectPriority.length : index
}

const allProjects = [
  ...ongoingProjects.map((project) => ({
    key: `ongoing-${project.id}`,
    title: project.title,
    image: project.image,
    imageFit: project.imageFit,
  })),
  ...projects.map((project) => ({
    key: `project-${project.id}`,
    title: project.title,
    image: project.image,
    imageFit: project.imageFit,
  })),
].sort((a, b) => projectSortRank(a.title) - projectSortRank(b.title))

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
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

function Projects() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <PageHero title="Project References" />
      <RevealSection className="content-section">
        <Container>
          <SectionTitle
            centered
            eyebrow="Projects"
            title="Our project references."
            description="Structured cabling, network, and security system work delivered across public, education, banking, and commercial sites in Singapore."
          />
          <motion.div
            className="projects-ref-grid"
            variants={staggerContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={viewportOnce}
          >
            {allProjects.map((project) => (
              <motion.article className="projects-ref-card" key={project.key} variants={cardIn}>
                <div
                  className={`projects-ref-media${
                    project.imageFit === 'contain' ? ' projects-ref-media-contain' : ''
                  }`}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} loading="lazy" />
                  ) : (
                    <span className="projects-ref-placeholder" aria-hidden="true">
                      <ImageIcon size={28} strokeWidth={1.5} />
                    </span>
                  )}
                </div>
                <h2>{project.title}</h2>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </RevealSection>
    </>
  )
}

export default Projects