import { useEffect, useLayoutEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Container from '../common/Container'
import Brand from '../common/Brand'
import { navigation } from '../../data/navigation'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 16)
    }

    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateHeaderState)
    }
  }, [])

  return (
    <header
      className={`site-header${isScrolled ? ' scrolled' : ''}${isMenuOpen ? ' menu-open' : ''}`}
    >
      <Container className="header-inner">
        <Brand variant="dark" />

        <div className="header-end">
          <div className="header-nav-group">
            <nav className="desktop-nav" aria-label="Primary navigation">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <Link className="header-cta" to="/contact">
              Let&apos;s Talk!
            </Link>
          </div>

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
        </div>
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
              {navigation.map((item) => (
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
                <Link
                  className="mobile-contact header-cta"
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let&apos;s Talk!
                </Link>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
