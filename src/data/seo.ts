export interface SEOConfig {
  title: string
  description: string
}

export const seoByPath: Record<string, SEOConfig> = {
  '/': {
    title: 'Century Tech | Practical Technology Solutions',
    description:
      'Century Tech designs practical digital solutions that help growing companies work smarter and move forward with confidence.',
  },
  '/about': {
    title: 'About Century Tech | Strategy, Design & Engineering',
    description:
      'Learn how Century Tech combines strategy, design, and engineering to solve meaningful business challenges.',
  },
  '/solutions': {
    title: 'Technology Solutions | Century Tech',
    description:
      'Explore Century Tech solutions for digital strategy, product engineering, cloud technology, and modern business growth.',
  },
  '/projects': {
    title: 'Our Technology Projects | Century Tech',
    description:
      'Discover digital products and technology projects created by Century Tech to improve customer experiences and business operations.',
  },
  '/faq': {
    title: 'Frequently Asked Questions | Century Tech',
    description:
      'Find answers about Century Tech services, project processes, partnerships, support, and working with our technology team.',
  },
  '/contact': {
    title: 'Contact Century Tech | Start Your Project',
    description:
      'Contact Century Tech to discuss your digital product, technology needs, business goals, and next project.',
  },
}

export const defaultSEO = seoByPath['/']
