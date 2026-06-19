export interface NavigationItem {
  label: string
  path: string
}

export const navigation: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Projects', path: '/projects' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]
