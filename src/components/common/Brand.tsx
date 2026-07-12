import { Link } from 'react-router-dom'
import { company } from '../../data/company'
import logo from '../../assets/century-tech-logo-transparent.png'

interface BrandProps {
  className?: string
  location?: 'header' | 'footer'
}

function Brand({ className = '', location = 'header' }: BrandProps) {
  return (
    <Link
      className={`brand brand-${location} ${className}`.trim()}
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
