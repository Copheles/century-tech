import { Link } from 'react-router-dom'
import { company } from '../../data/company'
import logoDark from '../../assets/century-tech-logo-transparent.png'
import logoLight from '../../assets/century-tech-logo-light.png'

interface BrandProps {
  className?: string
  location?: 'header' | 'footer'
  /** Light = visible on dark hero navbar; dark = default on white/scrolled navbar. */
  variant?: 'light' | 'dark'
}

function Brand({ className = '', location = 'header', variant = 'dark' }: BrandProps) {
  const logo = variant === 'light' ? logoLight : logoDark

  return (
    <Link
      className={`brand brand-${location}${variant === 'light' ? ' brand--light' : ''} ${className}`.trim()}
      to="/"
      aria-label={`${company.name} home`}
    >
      <span className="brand-logo-wrap">
        <img className="brand-logo" src={logo} alt="" />
      </span>
      <span className="brand-copy">
        <span className="brand-name">{company.name}</span>
        <span className="brand-tagline">{company.tagline}</span>
      </span>
    </Link>
  )
}

export default Brand
