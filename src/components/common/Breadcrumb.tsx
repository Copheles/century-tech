import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { solutions } from '../../data/solutions'
import Container from './Container'

const pageLabels: Record<string, string> = {
  '/about': 'About Us',
  '/projects': 'Project References',
  '/products': 'Products',
  '/contact': 'Contact Us',
}

function currentLabel(pathname: string) {
  if (pageLabels[pathname]) return pageLabels[pathname]

  const slug = pathname.match(/^\/solutions\/([^/]+)$/)?.[1]
  if (!slug) return ''

  if (slug === 'elv-cabling') return 'ELV Cabling Solutions'

  return solutions.find((solution) => solution.slug === slug)?.title ?? 'Solution'
}

function Breadcrumb() {
  const { pathname } = useLocation()
  const label = currentLabel(pathname)

  if (!label) return null

  const isSolution = pathname.startsWith('/solutions/')
  const crumbs = [
    { label: 'Home', to: '/' },
    ...(isSolution ? [{ label: 'Solutions', to: '/#core-solutions' }] : []),
    { label },
  ]

  return (
    <div className="page-breadcrumb">
      <Container>
        <nav aria-label="Breadcrumb">
          <ol>
            {crumbs.map((crumb, index) => {
              const current = index === crumbs.length - 1

              return (
                <li key={`${crumb.label}-${index}`}>
                  {index > 0 ? <ChevronRight size={14} aria-hidden="true" /> : null}
                  {current ? (
                    <span aria-current="page">{crumb.label}</span>
                  ) : (
                    <Link to={crumb.to}>{crumb.label}</Link>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      </Container>
    </div>
  )
}

export default Breadcrumb
