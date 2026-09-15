import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone, Printer } from 'lucide-react'
import Container from '../common/Container'
import Brand from '../common/Brand'
import { navigation } from '../../data/navigation'
import { solutions } from '../../data/solutions'
import { company, companyMapUrl } from '../../data/company'

function Footer() {
  const mainNav = navigation.filter((item) => item.path !== '/')

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-brand-col">
            <Brand className="footer-brand" location="footer" />
            <p className="footer-copy">
              Practical IT communications and technology solutions built around
              the way your organisation works.
            </p>
          </div>

          <div className="footer-col">
            <h2 className="footer-col-title">Solutions</h2>
            <ul className="footer-col-list">
              {solutions.map((solution) => (
                <li key={solution.id}>
                  <Link to={`/solutions/${solution.slug}`} className="footer-col-link">
                    {solution.title}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-col-title">Company</h2>
            <ul className="footer-col-list">
              {mainNav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-col-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact-col">
            <h2 className="footer-col-title">Contact</h2>
            <ul className="footer-col-list">
              <li>
                <a
                  href={company.telephoneHref}
                  className="footer-col-link footer-col-link-icon"
                >
                  <Phone size={15} aria-hidden="true" />
                  <span>{company.telephone}</span>
                </a>
              </li>
              <li>
                <span className="footer-col-link footer-col-link-icon">
                  <Printer size={15} aria-hidden="true" />
                  <span>{company.fax}</span>
                </span>
              </li>
              <li>
                <a
                  href={company.emails.sales.href}
                  className="footer-col-link footer-col-link-icon"
                >
                  <Mail size={15} aria-hidden="true" />
                  <span>{company.emails.sales.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={company.emails.humanResources.href}
                  className="footer-col-link footer-col-link-icon"
                >
                  <Mail size={15} aria-hidden="true" />
                  <span>{company.emails.humanResources.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={companyMapUrl}
                  className="footer-col-link footer-col-link-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin size={15} aria-hidden="true" />
                  <span>{company.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </span>
          <span>{company.tagline}</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
