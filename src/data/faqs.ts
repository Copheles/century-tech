export interface FAQItem {
  id: number
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'What kind of technology solutions does Century Technology provide?',
    answer:
      'We focus on IT communications, practical digital solutions, and cloud and infrastructure planning shaped around each organisation’s requirements.',
  },
  {
    id: 2,
    question: 'How does a typical engagement begin?',
    answer:
      'We begin by understanding your current environment, business priorities, and the outcome you need before recommending a clear way forward.',
  },
  {
    id: 3,
    question: 'Can you support an existing system or setup?',
    answer:
      'Yes. The first step is a review of the current setup so the team can identify practical improvements, integration needs, and support options.',
  },
  {
    id: 4,
    question: 'How can I discuss a project with your team?',
    answer:
      'Call us, contact us through WhatsApp, or visit the contact page for our office address and directions.',
  },
]
