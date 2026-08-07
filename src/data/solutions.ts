export interface SubSolution {
  id: string
  title: string
  description: string
  comingSoon?: boolean
}

export interface Solution {
  id: number
  title: string
  description: string
  highlights: string[]
  detailAnchor?: string
  subSolutions?: SubSolution[]
}

export const solutions: Solution[] = [
  {
    id: 1,
    title: 'Structured Cabling',
    description:
      'Design, installation, testing, and certification of copper and fiber optic cabling that forms the backbone of your communication infrastructure.',
    highlights: ['Copper cabling (Cat5e to Cat7)', 'Fiber optic cabling', 'Data center cabling'],
    detailAnchor: 'structured-cabling',
  },
  {
    id: 2,
    title: 'Computer Networking',
    description:
      'Complete network infrastructure services from consultation and layout planning to system design, installation, and performance optimization.',
    highlights: ['Network design & build', 'Installation & testing', 'Performance optimization'],
    detailAnchor: 'computer-networking',
  },
  {
    id: 3,
    title: 'ELV System',
    description:
      'Extra-low voltage systems that protect your people and premises, from surveillance to entry management, designed and maintained by certified engineers.',
    highlights: ['CCTV System', 'Access Control System'],
    subSolutions: [
      {
        id: 'cctv-system',
        title: 'CCTV System',
        description:
          'A reliable, flawless security solution designed to keep your business running at its best.',
      },
      {
        id: 'access-control-system',
        title: 'Access Control System',
        description:
          'Secure entry management that controls who can access your premises, integrated with your wider security systems.',
        comingSoon: true,
      },
    ],
  },
]

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
  heading: 'A uniform, scalable platform for voice, video and data communication.',
  intro: [
    'Fast and reliable communication is a key success factor for businesses in this dynamic environment, and companies would have to do all they can to ensure their communication infrastructure is robust, capable of handling huge volume of data anytime of the day or night.',
    'At Century, we provide Structured Cabling System, the basis of almost of all voice, video and data communication needs. It provides organizations with a uniform and scalable platform for the interconnection of various enterprise level services.',
    "Our integrated local area cabling solution includes the provision of systems and services. We design the system and install it in accordance with client's requirements. We are also able to come up with cost competitive solutions that cater not only to the current but also future communication needs.",
  ],
  servicesLead: 'Some of the services that we render are:',
  services: [
    'Supply, installation and testing & commissioning of single mode and multi-mode fiber optic cable system for both indoor/outdoor environments',
    'Supply, installation and testing & commissioning of Blown Fiber',
    'Splicing and termination of fiber optics cable system',
    'Testing using state-of-the-art equipment such as OTDR and Power Meter',
    'Supply, installation, testing & commissioning of copper cabling solutions (i.e. CAT5E, CAT6, CAT6A and CAT7)',
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
  heading: 'Quick access to the information superhighway for consumers and corporations.',
  intro: [
    "Broadband technology has ushered in a communication's revolution. By enabling voice, data and video-on-demand to be transmitted across the world at high speed, it has altered the way we live and work. A fully-evolved broadband will virtually eliminate geographical distances and reduce the time it takes to access information.",
    'With our computer networking capability, we can provide consumers and corporations quick access to the information superhighway. We have a wealth of experience in implementing cost effective and flexible networking solutions for customers. We are able to design, install and maintain all your office and enterprise communication and networks needs. Our network solutions seamlessly connect the desktop to the server, to your organization Intranet and the wide expanse of the Internet.',
  ],
  servicesLead: 'The solutions and services we provide include:',
  services: [
    'WAN/LAN Network Design',
    'Server Solutions',
    'Networked Workstation Installation and Setup',
    'Client/Desktop Support',
    'Wireless LAN Setup',
    'Setup of Corporate Networks',
    'Setup of Small Office/Home Office (SOHO) Networks',
    'Networked Printer Installation/External Print Server Installation',
    'Switch Installation',
  ],
  heroVisual: {
    id: 'networking-hero',
    label: 'Enterprise network infrastructure photo',
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
  whyInvest: {
    heading: string
    lead: string
    benefits: IconItem[]
  }
  technology: {
    heading: string
    items: string[]
    visual: MediaSlot
  }
  maintenance: {
    heading: string
    lead: string
    packages: { title: string; text: string }[]
    visual: MediaSlot
  }
}

export const cctvDetail: CctvDetail = {
  title: 'CCTV System',
  heading: 'A reliable, flawless security solution designed to keep your business running at its best.',
  intro: [
    "In today's world, robust security systems are a necessity for every organization. Implementing the right system is the most reliable way to protect your business assets and ensure uninterrupted daily operations.",
    'CCTV surveillance has become an essential security solution for schools, offices, hotels, shopping malls, banks, and government facilities. It serves as a vital tool for real-time monitoring and crime deterrence, allowing businesses and agencies to maintain safety and collect critical video evidence.',
    'We specialize in deploying and maintaining medium- to enterprise-level CCTV systems. Our experienced engineers possess the field expertise to design and implement custom solutions that fit your budget, providing the flexibility to expand seamlessly as your business grows.',
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
  whyInvest: {
    heading: 'Why Invest in CCTV System',
    lead: 'CENTURY goes beyond standard cabling system design and implementation. We specialize in comprehensive integration services, delivering reliable, secure solutions designed to future-proof your business.',
    benefits: [
      {
        icon: 'scanSearch',
        title: 'Quality Evidence',
        text: 'High-quality video evidence accelerates crime resolution and increases apprehension rates for both law enforcement and private security agencies.',
      },
      {
        icon: 'handCoins',
        title: 'Operational Costs',
        text: 'Reduces overhead costs by identifying and resolving operational inefficiencies.',
      },
      {
        icon: 'userX',
        title: 'Reducing Exposure',
        text: 'Acts as a powerful deterrent against dishonest behavior and misconduct.',
      },
      {
        icon: 'monitorPlay',
        title: 'Video Analytic',
        text: 'Leverage advanced video analytics to optimize your operations by mapping traffic patterns, counting foot traffic, capturing license plates, and unlocking actionable insights.',
      },
    ],
  },
  technology: {
    heading: 'We offer a wide range of CCTV technology to our customers to accommodate all types of requirements.',
    items: [
      'Analog and IP cameras (ranging 2MP to 8MP)',
      'High-Definition Cameras',
      'Cameras over Ethernet (PoE)',
      'Dome and Bullet Cameras',
      'Fixed, PTZ and Panoramic Cameras (360 degrees)',
      'Indoor and Outdoor',
      'Thermal Cameras (for monitoring in the dark)',
      'On-site Monitoring Software',
      'Video Analytics',
    ],
    visual: {
      id: 'cctv-camera',
      label: 'CCTV camera technology',
      image: '/about/cctv1.jpg',
      imageFit: 'contain',
    },
  },
  maintenance: {
    heading: 'Maintenance Packages',
    lead: 'Our monthly maintenance packages are built to fit your budget and needs.',
    packages: [
      {
        title: 'On-Site Survey & Optimization',
        text: 'Ongoing site evaluations and design updates.',
      },
      {
        title: 'Comprehensive Hardware Support',
        text: 'Dedicated maintenance for both cameras and monitoring equipment.',
      },
      {
        title: 'Smart Storage & Recording',
        text: 'Expert configuration of video settings and hard disk drive (HDD) management.',
      },
      {
        title: '24/7 Remote System Health Monitoring',
        text: 'Tracking equipment performance remotely to fix issues before they cause downtime.',
      },
    ],
    visual: {
      id: 'cctv-maintenance',
      label: 'CCTV maintenance support',
      image: '/about/cctv2.webp',
      imageFit: 'contain',
    },
  },
}
