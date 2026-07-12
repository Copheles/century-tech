import { motion } from 'framer-motion'
import Container from './Container'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  variant?: 'about' | 'faq' | 'contact'
}

function PageHero({ eyebrow, title, description, variant }: PageHeroProps) {
  const heroClassName = `page-hero${variant ? ` page-hero-photo-mode page-hero-${variant}` : ''}`

  return (
    <section className={heroClassName}>
      {variant && (
        <motion.div
          className="page-hero-photo"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
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
