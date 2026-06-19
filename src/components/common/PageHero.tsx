import { motion } from 'framer-motion'
import Container from './Container'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
}

function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Container>
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </motion.div>
      </Container>
    </section>
  )
}

export default PageHero
