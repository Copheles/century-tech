export interface NavigationItem {
  label: string
  path: string
}

export const navigation: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' },
]
