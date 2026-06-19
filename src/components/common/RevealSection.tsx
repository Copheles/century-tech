import { motion, useReducedMotion } from 'framer-motion'
import type { ComponentProps, ReactNode } from 'react'

interface RevealSectionProps extends Omit<ComponentProps<typeof motion.section>, 'children'> {
  children: ReactNode
}

function RevealSection({ children, className = '', ...props }: RevealSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 42 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export default RevealSection
