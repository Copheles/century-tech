export interface Project {
  id: number
  title: string
  category: string
  summary: string
  outcome: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Commerce Platform',
    category: 'Web Development',
    summary: 'A streamlined digital storefront built for scale.',
    outcome: 'Clearer customer journeys and an easier platform to operate.',
  },
  {
    id: 2,
    title: 'Operations Hub',
    category: 'Business Systems',
    summary: 'A unified workspace for distributed operations teams.',
    outcome: 'Better visibility across everyday tasks, information, and teams.',
  },
  {
    id: 3,
    title: 'Customer Mobile App',
    category: 'Mobile Product',
    summary: 'A focused mobile experience for everyday customer needs.',
    outcome: 'A direct, accessible channel for customer communication and service.',
  },
]
