export interface Solution {
  id: number
  title: string
  description: string
  highlights: string[]
}

export const solutions: Solution[] = [
  {
    id: 1,
    title: 'IT Communications',
    description:
      'Reliable communications foundations that keep teams, customers, and operations connected.',
    highlights: ['Business connectivity', 'Communication planning', 'Ongoing support'],
  },
  {
    id: 2,
    title: 'Digital Solutions',
    description:
      'Practical web and business systems designed around clear operational requirements.',
    highlights: ['Web solutions', 'Workflow improvement', 'System integration'],
  },
  {
    id: 3,
    title: 'Cloud & Infrastructure',
    description:
      'Scalable technology environments that help organisations operate securely and confidently.',
    highlights: ['Cloud readiness', 'Infrastructure planning', 'Reliable deployment'],
  },
]
