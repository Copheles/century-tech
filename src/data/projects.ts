export interface Project {
  id: number;
  title: string;
  /** Public path for the project photo when available (e.g. '/projects/hsbc.jpg'). */
  image?: string;
  /** Use contain for logo-style assets that should not be cropped. */
  imageFit?: "cover" | "contain";
  detail?: ProjectDetail | ProjectDetailItem | ProjectDetailItem[];
}

export interface ProjectDetail {
  title: string;
  detail?: ProjectDetailItem[];
}

export interface ProjectDetailItem {
  title: string;
  detail?: string[];
}

export interface OngoingProject {
  id: number;
  title: string;
  detail: string;
  image?: string;
  imageFit?: "cover" | "contain";
}

export interface ProjectReference {
  id: number;
  title: string;
  image: string;
}

export const ongoingProjects: OngoingProject[] = [
  {
    id: 1,
    title: "Integrated Waste Management Facility (IWMF) (Singapore)",
    detail:
      "Implementation of Cat 6, Fiber optic cables, Network Rack, Cameras and other all active devices for Data, Telephone, Security System.",
    image: "/projects/ongoing/integrated-waste-managment-facility-iwmf.jpg",
  },
  {
    id: 3,
    title: "Thomson East Coast Line MRT Stations (Singapore)",
    detail:
      "Implemented Access Management System that included cabling, control panel installation, containment installation, other accessories installation, cable termination, testing and commissioning.",
    image: "/projects/ongoing/thomson-east-coast-line.jpg",
  },
  {
    id: 4,
    title: "Singapore Civil Defence Force",
    detail:
      "Structured cabling, fibre optic, and ELV infrastructure for operational and administrative facilities.",
    image: "/projects/Singapore Civil Defence Force.jpg",
    imageFit: "contain",
  },
  {
    id: 5,
    title: "SingHealth Polyclinics - Tampines North",
    detail:
      "Structured cabling and network infrastructure for healthcare polyclinic facilities.",
    image: "/projects/SingHealth Polyclinics - Tampines North.jpg",
    imageFit: "contain",
  },
  {
    id: 6,
    title: "TTSH Integrated Care Hub (TTSH ICH)",
    detail:
      "Structured cabling, fibre, and ELV systems for integrated care hub infrastructure.",
    image: "/projects/TTSH Integrated Care Hub (TTSH ICH).jpg",
    imageFit: "contain",
  },
  {
    id: 7,
    title: "BW Group",
    detail:
      "Structured cabling and network infrastructure for commercial office environments.",
    image: "/projects/BW Group.jpg",
    imageFit: "contain",
  },
  {
    id: 8,
    title: "Dulwich Colleague Singapore",
    detail:
      "Structured cabling (Cat 6, Cat 6A & fibre) for education campus facilities.",
    image: "/projects/Dulwich Colleague Singapore.jpg",
    imageFit: "contain",
  },
  {
    id: 9,
    title: "Singpore American School (SAS)",
    detail:
      "Structured cabling (Cat 6, Cat 6A & fibre) for international school facilities.",
    image: "/projects/Singpore American School (SAS).jpg",
    imageFit: "contain",
  },
];

/** Logo set shown in the Project Reference marquee (also appears in Ongoing / Selected grids). */
export const projectReferences: ProjectReference[] = [
  {
    id: 7,
    title: "HSBC Bank (Mapletree Business City)",
    image: "/projects/hsbc.jpg",
  },
  {
    id: 8,
    title: "Mizuho Bank (AST2 & UE Biz Hub)",
    image: "/projects/mizuho.png",
  },
  {
    id: 9,
    title: "PSA PPTB 3 (7 storeys)",
    image: "/projects/psa-singapore.png",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "HSBC Bank (Mapletree Business City)",
    image: "/projects/hsbc.jpg",
    imageFit: "contain",
    detail: {
      title: "Structured Cabling",
      detail: [
        {
          title: "Level 12",
          detail: [
            " Fibre Optics: 12 core Multimode OM4 fiber.",
            "Multipair copper: 25 pair CAT5E cable (1000 m)",
            "Copper Wires: CAT6 UTP (1100 nodes.)",
            " Copper Wires: CAT6A FTP (150 nodes.)",
          ],
        },
        {
          title: "Level 13",
          detail: [
            "Copper Wires: CAT6A FTP (1200 nodes.)",
            "Installation of Wireless AP (For Corporate and StarHub APs)",
          ],
        },
      ],
    },
  },
  {
    id: 2,
    title: "Mizuho Bank (AST2 & UE Biz Hub)",
    image: "/projects/mizuho.png",
    imageFit: "contain",
    detail: {
      title: "Structured Cabling",
      detail: [
        {
          title: "AST2 (4 storeys)",
          detail: [
            "Fibre Optics: 24 core Multimode OM3 fiber (1000 m)",
            "Multipair copper: 50 pair CAT3 cable (2000 m)",
            "Copper Wires: CAT6A FTP (4300 nodes.)",
          ],
        },
        {
          title: "UE Biz Hub (1 storey)",
          detail: [
            "Fibre Optics: 24 core Multimode OM3 fiber (150 m)",
            "Multipair copper: 50 pair CAT3 cable (500 m)",
            "Copper Wires: CAT6A FTP (1300 nodes.)",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: "PSA PPTB 3 (7 storeys)",
    image: "/projects/psa-singapore.png",
    imageFit: "contain",
    detail: {
      title: "Structured Cabling",
      detail: [
        "Fibre Optics: 12/24 core Single-mode fiber (12.5 km)",
        "Multipair copper: 50 pair CAT3 cable (7.5 km)",
        "Copper Wires: CAT6A FTP (900 nodes.)",
      ],
    },
  },
  {
    id: 4,
    title: "Gardens by the Bay, Bay South",
    image: "/projects/garden-by-the-bay.webp",
    detail: [
      {
        title: "Nexans solution has been used for this project.",
      },
      {
        title: "Structured Cabling System",
        detail: [
          "Fibre Optics: Single Mode Fibre (50km)",
          "Copper Wires: CAT6 FTP (800 nodes.), CAT5e UTP (450 nodes.)",
        ],
      },
      {
        title: "ELV Cabling",
        detail: [
          "CCTV System",
          "Card Access System",
          "PA System",
          "IDS System",
          "Carpark Barrier System",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Resort World Sentosa",
    image: "/projects/resorts-world-sentosa.webp",
    detail: [
      {
        title: "Nexans solution has been used for this project.",
      },
      {
        title: "Structured Cabling System",
        detail: [
          "Fibre Optics: Single Mode Fibre (120km)",
          "Copper Wires: CAT6 (7100 nodes.)",
        ],
      },
      {
        title: "Design & Implementation of",
        detail: [
          "Data System",
          "Wireless System",
          "Camera System",
          "ISMS System",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Bahrain World Trade Centre",
    image: "/projects/bahrain-world-trade-centre.jpg",
    detail: [
      {
        title:
          "Provided Nexans solution for data structured cabling, telephone and full ELV cabling.",
      },
      {
        title: "Structured Cabling System",
        detail: ["Single Mode Fibre Optic cable (3km)", "CAT6 (2000 nodes.)"],
      },
      {
        title: "Cabling & Installation of ELV System",
        detail: [
          "CCTV",
          "Card Access",
          "Intrusion Detection",
          "Turnstile",
          "Public Address System",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "International Cruise Terminal",
    image: "/projects/international-cruise-terminal.png",
    detail: [
      {
        title:
          "AMP Netconnect structured cabling solutions products were provided for the construction of the structured cabling systems of ICT project.",
      },
      {
        title: "Structured Cabling System",
        detail: [
          "CAT6 UTP (1600 nodes)",
          "Single-mode Fibre Optics (1.9km)",
          "Multimode Fibre Optics (6.2km)",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Duke – NUS Medical School",
    image: "/projects/duke-nus-medical-school.jpg",
    detail: [
      {
        title: "First AMP Netconnect CAT 7 installation in Asia.",
      },
      {
        title:
          "Two server rooms and 10 LAN rooms support the IT demands of the students, faculty and staff, where it sum up about 2000 LAN points.",
      },
      {
        title:
          "10 Gb/s backbone with CAT 7 cable was selected from the backbone to office locations, providing the potential for 10 Gb/s to the desktop in the future.",
      },
      {
        title:
          "Project included providing support for IP telephony systems and wireless access throughout the medical school building.",
      },
    ],
  },
  {
    id: 9,
    title: "Sembcorp Data Centre",
    image: "/projects/sembcorp-data-centre.webp",
    detail: [
      {
        title:
          "Datwyler structured cabling solutions products were provided for the construction of the structured cabling systems and Inter-Rack Cabling.",
      },
      {
        title: "Structured Cabling System",
        detail: ["Fibre Optic (1600 nodes)", "CAT6 UTP"],
      },
      {
        title: "Inter-Rack Cabling",
        detail: ["Fibre Optic (1600 nodes)", "CAT6 UTP"],
      },
    ],
  },
  {
    id: 10,
    title: "Westgate",
    image: "/projects/westgate.jpg",
    detail: [
      {
        title:
          "AMP Netconnect structured cabling solutions products were provided for the construction of the structured cabling systems and ELV Cabling.",
      },
      {
        title: "Structured Cabling System",
        detail: ["OM2 Fibre Optic", "CAT6 UTP"],
      },
      {
        title: "Cabling & Installation of ELV System",
        detail: [
          "CCTV",
          "PA System",
          "Intrusion Detection System",
          "Access Control System",
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Meta Data Centre",
    image: "/projects/facebook-data-centre.jpg",
    detail: [
      {
        title:
          "Panduit structured cabling solutions products were provided for BMS & EPMS Network Cabling project.",
      },
      {
        title: "Structured Cabling System",
        detail: [
          "Phase-1, CAT6 UTP (1800 nodes)",
          "Phase-2, CAT6 UTP (6000 nodes)",
        ],
      },
    ]
  },
];
