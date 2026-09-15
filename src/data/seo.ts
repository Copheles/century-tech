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
  '/solutions/structured-cabling': {
    title: 'Structured Cabling | Century Tech',
    description:
      'Design, installation, testing, and certification of copper and fiber optic cabling that forms the backbone of your communication infrastructure.',
  },
  '/solutions/computer-networking': {
    title: 'Computer Networking | Century Tech',
    description:
      'Complete network infrastructure services from consultation and layout planning to system design, installation, and performance optimization.',
  },
  '/solutions/elv-system': {
    title: 'ELV System | Century Tech',
    description:
      'Extra-low voltage systems that protect your people and premises, from CCTV surveillance to access control, designed and maintained by certified engineers.',
  },
  '/projects': {
    title: 'Project References | Century Tech',
    description:
      'Browse Century Technology project references across banking, data centres, cruise terminals, and public infrastructure.',
  },
  '/contact': {
    title: 'Contact Century Tech | Start Your Project',
    description:
      'Contact Century Tech to discuss your digital product, technology needs, business goals, and next project.',
  },
}

export const defaultSEO = seoByPath['/']
