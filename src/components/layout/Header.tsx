import { useLayoutEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Container from '../common/Container'
import Button from '../common/Button'
import { navigation } from '../../data/navigation'
import { company } from '../../data/company'
import logo from '../../assets/century-tech-logo-transparent.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const mainNavItems = navigation.filter((item) => item.path !== '/contact')

  useLayoutEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isMenuOpen])

  return (
    <header className={`site-header${isMenuOpen ? ' menu-open' : ''}`}>
      <Container className="header-inner">
        <Link className="brand" to="/" aria-label="Century Tech home">
          <img className="brand-logo" src={logo} alt="" />
          <span className="brand-copy">
            <span className="brand-name">{company.name}</span>
            <span className="brand-tagline">{company.tagline}</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {mainNavItems.map((item) => (
            <NavLink
              key={item.path}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Button className="header-cta" to="/contact">
          Contact Us
        </Button>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ clipPath: 'circle(0% at calc(100% - 42px) 34px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 42px) 34px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 42px) 34px)' }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] as const }}
          >
            <div className="mobile-wave mobile-wave-one" aria-hidden="true" />
            <div className="mobile-wave mobile-wave-two" aria-hidden="true" />
            <motion.div
              className="container mobile-menu-inner"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { delayChildren: 0.25, staggerChildren: 0.07 } },
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
            >
              <div className="mobile-menu-label">Explore Century Tech</div>
              {mainNavItems.map((item) => (
                <motion.div
                  key={item.path}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 24 },
                  }}
                  transition={{ duration: 0.35 }}
                >
                  <NavLink
                    className={({ isActive }) =>
                      `mobile-nav-link${isActive ? ' active' : ''}`
                    }
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 24 },
                }}
              >
                <Button
                  className="mobile-contact"
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
