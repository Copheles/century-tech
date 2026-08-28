export type PartnerLogoSize = 'boost' | 'boost-xl' | 'compact'

export interface Partner {
  name: string
  logo: string
  logoSize: PartnerLogoSize
  detail?: string
}

export interface CertificationHighlight {
  name: string
  label: string
  image: string
}

export const partners: Partner[] = [
  { name: 'CommScope', logo: '/partners/commscope.png', logoSize: 'boost' },
  { name: 'Datwyler', logo: '/partners/datwyler.png', logoSize: 'boost-xl' },
  { name: 'APC', logo: '/partners/apc.svg', logoSize: 'compact' },
  { name: 'Panduit', logo: '/partners/panduit.png', logoSize: 'boost-xl' },
  { name: 'SYSTIMAX', logo: '/partners/systimax.png', logoSize: 'boost-xl' },
  { name: 'R&M', logo: '/partners/r-and-m.png', logoSize: 'boost' },
  { name: 'Cisco', logo: '/partners/cisco.png', logoSize: 'boost' },
  { name: 'HP', logo: '/partners/hp.png', logoSize: 'boost' },
  { name: 'Level One', logo: '/partners/level-one.png', logoSize: 'boost' },
  { name: 'Belden', logo: '/partners/belden.png', logoSize: 'boost' },
  { name: 'Draka', logo: '/partners/draka.png', logoSize: 'boost' },
  { name: 'Infinite Cable System', logo: '/partners/infinite-cable-system.png', logoSize: 'boost-xl' },
  { name: 'Aginode', logo: '/partners/aginode.jpg', logoSize: 'boost' },
  { name: 'Siemon', logo: '/partners/siemon.png', logoSize: 'boost' },
]

export const partnerMarqueeItems = [...partners, ...partners]

export const certificationHighlights: CertificationHighlight[] = [
  {
    name: 'BICSI',
    label: 'RCDD Certified',
    image: '/certifications/bicsi-certified-rcdd.png',
  },
  {
    name: 'BICSI',
    label: 'Corporate Member Professional Membership',
    image: '/certifications/bicsi-corporate-member-profeessional-membership.webp',
  },
  {
    name: 'APC',
    label: 'Elite Partner by Schneider Electric',
    image: '/certifications/apc-elite-partner-by-schneider-electric.png',
  },
  {
    name: 'CDCP',
    label: 'Certified Data Centre Professional',
    image: '/certifications/cdcp.png',
  },
]
