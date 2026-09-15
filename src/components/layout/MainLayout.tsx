import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import BackToTop from './BackToTop'
import SEO from '../common/SEO'

function MainLayout() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  })

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
        return
      }
    }

    window.scrollTo({ top: 0 })
  }, [location.pathname, location.hash, reduceMotion])

  return (
    <div className="site-shell">
      <motion.div
        className="site-scroll-progress"
        style={{ scaleX: reduceMotion ? scrollYProgress : smoothScrollProgress }}
        aria-hidden="true"
      />
      <SEO />
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  )
}

export default MainLayout
