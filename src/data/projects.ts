export interface Project {
  id: number
  title: string
  /** Public path for the project photo when available (e.g. '/projects/hsbc.jpg'). */
  image?: string
  /** Use contain for logo-style assets that should not be cropped. */
  imageFit?: 'cover' | 'contain'
}

export interface OngoingProject {
  id: number
  title: string
  detail: string
  image?: string
  imageFit?: 'cover' | 'contain'
}

export interface ProjectReference {
  id: number
  title: string
  image: string
}

export const ongoingProjects: OngoingProject[] = [
  {
    id: 1,
    title: 'Integrated Waste Management Facility (IWMF) (Singapore)',
    detail:
      'Implementation of Cat 6, Fiber optic cables, Network Rack, Cameras and other all active devices for Data, Telephone, Security System.',
    image: '/projects/ongoing/integrated-waste-managment-facility-iwmf.jpg',
  },
  {
    id: 2,
    title: 'EMC Data Center @ SGX, AY & LB (Singapore)',
    detail:
      'Implemented for network migration that including structured cabling, switches and server installation with network racks.',
    image: '/projects/ongoing/sgx-group.png',
    imageFit: 'contain',
  },
  {
    id: 3,
    title: 'Thomson East Coast Line @ MRT 5 Stations (Singapore)',
    detail:
      'Implemented Access Management System that included cabling, control panel installation, containment installation, other accessories installation, cable termination, testing and commissioning.',
    image: '/projects/ongoing/thomson-east-coast-line.jpg',
  },
  {
    id: 4,
    title: 'Nanhua Primary School (Singapore)',
    detail: 'Implemented over 1000 (Cat 6, Cat 6A & Fiber) structured cabling.',
    image: '/projects/ongoing/nanhua-primary-school.png',
    imageFit: 'contain',
  },
  {
    id: 5,
    title: 'Huamin Primary School (Singapore)',
    detail: 'Implemented over 1000 (Cat 6, Cat 6A & Fiber) structured cabling.',
    image: '/projects/ongoing/huamin-primary-school.jpg',
    imageFit: 'contain',
  },
  {
    id: 6,
    title: 'Naval Based Primary School (Singapore)',
    detail: 'Implemented over 1000 (Cat 6, Cat 6A & Fiber) structured cabling.',
    image: '/projects/ongoing/naval-based-primary-school.jpg',
    imageFit: 'contain',
  },
  {
    id: 7,
    title: 'Tampines Primary School (Singapore)',
    detail: 'Implemented over 1000 (Cat 6, Cat 6A & Fiber) structured cabling.',
    image: '/projects/ongoing/tampines-primary-school.png',
    imageFit: 'contain',
  },
  {
    id: 8,
    title: 'Punggol School Site 26 (Singapore)',
    detail: 'Implemented over 1500 (Cat 6, Cat 6A & Fiber) structured cabling.',
    image: '/projects/ongoing/punggol-school-site-26.jpg',
    imageFit: 'contain',
  },
  {
    id: 9,
    title: 'OSM Maritime Office (Singapore)',
    detail: 'Implemented over 300 (Cat 6 & Cat 6A) structured cabling.',
    image: '/projects/ongoing/osm-maritime-office.png',
    imageFit: 'contain',
  },
]

/** Logo set shown in the Project Reference marquee (also appears in Ongoing / Selected grids). */
export const projectReferences: ProjectReference[] = [
  {
    id: 1,
    title: 'Nanhua Primary School (Singapore)',
    image: '/projects/ongoing/nanhua-primary-school.png',
  },
  {
    id: 2,
    title: 'Huamin Primary School (Singapore)',
    image: '/projects/ongoing/huamin-primary-school.jpg',
  },
  {
    id: 3,
    title: 'Naval Based Primary School (Singapore)',
    image: '/projects/ongoing/naval-based-primary-school.jpg',
  },
  {
    id: 4,
    title: 'Tampines Primary School (Singapore)',
    image: '/projects/ongoing/tampines-primary-school.png',
  },
  {
    id: 5,
    title: 'Punggol School Site 26 (Singapore)',
    image: '/projects/ongoing/punggol-school-site-26.jpg',
  },
  {
    id: 6,
    title: 'OSM Maritime Office (Singapore)',
    image: '/projects/ongoing/osm-maritime-office.png',
  },
  {
    id: 7,
    title: 'HSBC Bank (Mapletree Business City)',
    image: '/projects/hsbc.jpg',
  },
  {
    id: 8,
    title: 'Mizuho Bank (AST2 & UE Biz Hub)',
    image: '/projects/mizuho.png',
  },
  {
    id: 9,
    title: 'PSA PPTB 3 (7 storeys)',
    image: '/projects/psa-singapore.png',
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'HSBC Bank (Mapletree Business City)',
    image: '/projects/hsbc.jpg',
    imageFit: 'contain',
  },
  {
    id: 2,
    title: 'Mizuho Bank (AST2 & UE Biz Hub)',
    image: '/projects/mizuho.png',
    imageFit: 'contain',
  },
  {
    id: 3,
    title: 'PSA PPTB 3 (7 storeys)',
    image: '/projects/psa-singapore.png',
    imageFit: 'contain',
  },
  {
    id: 4,
    title: 'Gardens by the Bay, Bay South',
    image: '/projects/garden-by-the-bay.webp',
  },
  {
    id: 5,
    title: 'Resort World Sentosa',
    image: '/projects/resorts-world-sentosa.webp',
  },
  {
    id: 6,
    title: 'Bahrain World Trade Centre',
    image: '/projects/bahrain-world-trade-centre.jpg',
  },
  {
    id: 7,
    title: 'International Cruise Terminal (Marina Bay Cruise Centre)',
    image: '/projects/international-cruise-terminal.png',
  },
  {
    id: 8,
    title: 'Duke – NUS Medical School',
    image: '/projects/duke-nus-medical-school.jpg',
  },
  {
    id: 9,
    title: 'Sembcorp Data Centre',
    image: '/projects/sembcorp-data-centre.webp',
  },
  {
    id: 10,
    title: 'Westgate',
    image: '/projects/westgate.jpg',
  },
  {
    id: 11,
    title: 'Facebook Data Centre',
    image: '/projects/facebook-data-centre.jpg',
  },
]
