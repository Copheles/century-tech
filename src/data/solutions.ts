export interface SubSolution {
  id: string
  title: string
  description: string
  comingSoon?: boolean
}

export interface Solution {
  id: number
  slug: string
  title: string
  description: string
  highlights: string[]
  image?: string
  subSolutions?: SubSolution[]
}

export const solutions: Solution[] = [
  {
    id: 1,
    slug: 'structured-cabling',
    title: 'Structured Cabling',
    description:
      'End-to-end copper and fiber optic cabling solutions designed, installed, and certified to deliver high-speed, scalable connectivity for modern enterprise systems.',
    highlights: ['Copper cabling (Cat6, Cat6A, Cat7 and higher)', 'Fiber optic cabling', 'Data center cabling'],
    image: '/solutions/structured-cabling.avif',
  },
  {
    id: 2,
    slug: 'computer-networking',
    title: 'Computer Networking',
    description:
      'Complete network infrastructure services from consultation and layout planning to system design, installation, and performance optimization.',
    highlights: ['Network design & build', 'Installation & testing', 'Performance optimization'],
    image: '/solutions/computer-networking.avif',
  },
  {
    id: 3,
    slug: 'elv-cabling',
    title: 'ELV Cabling',
    description:
      'We provide ELV cabling infrastructure to support the installation and integration requirements of these systems.',
    highlights: [
      'CCTV and security system cabling',
      'Access control system cabling',
      'Intercom and communication cabling',
      'Building technology and other ELV infrastructure',
    ],
    image: '/solutions/elv-system.jpg',
    subSolutions: [
      {
        id: 'cctv-system',
        title: 'CCTV Cabling Infrastructure',
        description:
          'A reliable, flawless security solution designed to keep your business running at its best.',
      },
      {
        id: 'access-control-system',
        title: 'Access Control Cabling Infrastructure',
        description:
          'Secure entry management that controls who can access your premises, integrated with your wider security systems.',
        comingSoon: true,
      },
    ],
  },
]

export type SolutionDetailBundle =
  | StructuredCablingDetail
  | ComputerNetworkingDetail
  | ElvSystemDetail

export interface MediaSlot {
  id: string
  label: string
  /** Set to a public path (e.g. '/images/cabling-fiber.jpg') once client photos are available. */
  image?: string
  imageFit?: 'cover' | 'contain'
}

export interface StructuredCablingDetail {
  title: string
  heading: string
  intro: string[]
  servicesLead: string
  services: string[]
  subSystems: {
    lead: string
    items: string[]
  }
  additionalServices: string[]
  heroVisual: MediaSlot
  gallery: MediaSlot[]
}

export const structuredCablingDetail: StructuredCablingDetail = {
  title: 'Structured Cabling',
  heading: 'Delivering High-Performance Structured Cabling Solutions',
  intro: [
    'At Century, we provide Structured Cabling System, the basis of almost of all voice, video and data communication needs. It provides organizations with a uniform and scalable platform for the interconnection of various enterprise level services.',
    "Our integrated local area cabling solution includes the provision of systems and services. We design the system and install it in accordance with client's requirements. We are also able to come up with cost competitive solutions that cater not only to the current but also future communication needs.",
  ],
  servicesLead: 'Services that we render are:',
  services: [
    'Supply, installation and testing & commissioning of single mode and multi-mode fiber optic cable system for both indoor/outdoor environments',
    'Splicing and termination of fiber optics cable system',
    'Testing using state-of-the-art equipment such as OTDR and Power Meter',
    'Supply, installation, testing & commissioning of copper cabling solutions (i.e. CAT6, CAT6A, CAT7 and more)',
  ],
  subSystems: {
    lead: 'Provision of full cable sub-systems such as:',
    items: [
      'Patch Panels',
      'Cables',
      'Standard Rack',
      'Faceplate',
      'Modular Jack',
      'Patch Cords / Station Cords',
    ],
  },
  additionalServices: [
    'Comprehensive cable test reports in line with industry standards',
    'Supply and installation of Cable Management Solutions (Software and Hardware)',
  ],
  heroVisual: {
    id: 'cabling-hero',
    label: 'Structured cabling installation photo',
    image: '/solutions/structured-cabling-solution.jpg',
  },
  gallery: [
    { id: 'cabling-fiber', label: 'Fiber optic splicing photo' },
    { id: 'cabling-rack', label: 'Server rack and patch panel photo' },
    { id: 'cabling-testing', label: 'OTDR cable testing photo' },
  ],
}

export interface ComputerNetworkingDetail {
  title: string
  heading: string
  intro: string[]
  servicesLead: string
  services: string[]
  heroVisual: MediaSlot
  gallery: MediaSlot[]
}

export const computerNetworkingDetail: ComputerNetworkingDetail = {
  title: 'Computer Networking',
  heading: 'Accelerating Enterprise and Consumer Connectivity',
  intro: [
    'With our computer networking capability, we can provide consumers and corporations quick access to the information superhighway. We have a wealth of experience in implementing cost effective and flexible networking solutions for customers. We are able to design, install and maintain all your office and enterprise communication and networks needs. Our network solutions seamlessly connect the desktop to the server, to your organization Intranet and the wide expanse of the Internet.',
  ],
  servicesLead: 'The solutions and services we provide include:',
  services: [
    'WAN/LAN Network Design',
    'Server Solutions',
    'Networked Workstation Installation and Setup',
    'Wireless LAN Setup',
    'Setup of Corporate Networks',
    'Setup of Small Office/Home Office (SOHO) Networks',
    'Switch Installation',
  ],
  heroVisual: {
    id: 'networking-hero',
    label: 'Enterprise network infrastructure photo',
    image: '/solutions/computer-networking-solution.jpg',
  },
  gallery: [
    { id: 'networking-server', label: 'Server room photo' },
    { id: 'networking-wireless', label: 'Wireless LAN setup photo' },
    { id: 'networking-switch', label: 'Network switch installation photo' },
  ],
}

export interface IconItem {
  icon: string
  title: string
  text?: string
}

export interface CctvDetail {
  title: string
  heading: string
  intro: string[]
  heroVisual: MediaSlot
  servicesLead: string
  services: IconItem[]
}

export const cctvDetail: CctvDetail = {
  title: 'CCTV Cabling Infrastructure',
  heading: 'High-performance copper and fiber optic lines support High-Definition IP cameras, PTZ control, and Multi-Gigabit NVR data streams with minimal latency or frame loss.',
  intro: [
    'We specialize in designing, deploying, and maintaining medium- to enterprise-level CCTV cabling systems. Our experienced engineers possess the field expertise to design and implement custom copper and fiber optic cabling solutions that fit your budget, providing the reliability and flexibility to expand your surveillance network seamlessly as your business grows.',
  ],
  heroVisual: {
    id: 'cctv-hero',
    label: 'CCTV installation photo',
  },
  servicesLead:
    'Optimize your network infrastructure with CENTURY. We deliver end-to-end support, including RF site surveys, custom network design, expert installation, performance optimization, and reliable annual maintenance contracts.',
  services: [
    { icon: 'clipboard', title: 'On-site Survey Design' },
    { icon: 'idCard', title: 'Access Control Integration' },
    { icon: 'shield', title: 'Security System Integration' },
    { icon: 'monitorCog', title: 'Maintenance Contract' },
    { icon: 'ethernet', title: 'Power over Ethernet' },
  ],
}

export interface AccessControlDetail {
  title: string
  heading: string
  description: string[]
  servicesLead: string
  services: string[]
  heroVisual: MediaSlot
}

export interface ElvSystemDetail {
  title: string
  heading: string
  intro: string[]
  heroVisual: MediaSlot
  cctv: CctvDetail
  accessControl: AccessControlDetail
}

export const accessControlDetail: AccessControlDetail = {
  title: 'Access Control Cabling Infrastructure',
  heading: 'Dedicated cabling architecture connects door controllers, biometric readers, request-to-exit (REX) devices, magnetic locks, and emergency break-glass units.',
  description: [
    'A reliable Access Control System relies on a structured and secure cabling backbone. Cabling for access control involves mixed signal types—including digital data feeds, low-voltage DC power transmission, supervised contact inputs, and high-current relay outputs.',
    'Proper cable selection, routing, and termination ensure zero communication dropouts, accurate reader reads, and dependable fail-safe/fail-secure lock operation.',
  ],
  servicesLead: 'Access control services include:',
  services: [
    'End-to-End Field Wiring & Cable Deployment',
    'Hardware Device Installation & Component Interconnection',
    'Central Control Panel Terminations & Racks',
    'Testing & Commissioning',
  ],
  heroVisual: {
    id: 'access-control-hero',
    label: 'Access control installation photo',
  },
}

export const elvSystemDetail: ElvSystemDetail = {
  title: 'ELV System',
  heading: 'Extra-low voltage systems that protect your people and premises.',
  intro: [
    'Modern security infrastructure relies on a robust Extra-Low Voltage (ELV) cabling backbone. High-definition video surveillance and real-time access control require low-latency transmission, stable power delivery, and signal integrity across all endpoints.',
  ],
  heroVisual: {
    id: 'elv-hero',
    label: 'ELV system installation photo',
    image: '/solutions/elv-system.jpg',
  },
  cctv: cctvDetail,
  accessControl: accessControlDetail,
}

export const solutionDetails: Record<string, SolutionDetailBundle> = {
  'structured-cabling': structuredCablingDetail,
  'computer-networking': computerNetworkingDetail,
  'elv-cabling': elvSystemDetail,
}
