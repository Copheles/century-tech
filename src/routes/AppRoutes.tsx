import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import SolutionDetail from '../pages/SolutionDetail'
import Projects from '../pages/Projects'
import Products from '../pages/Products'
import Contact from '../pages/Contact'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="solutions" element={<Navigate to="/" replace />} />
        <Route path="solutions/elv-system" element={<Navigate to="/solutions/elv-cabling" replace />} />
        <Route path="solutions/:slug" element={<SolutionDetail />} />
        <Route path="projects" element={<Projects />} />
        <Route path="products" element={<Products />} />
        <Route path="faq" element={<Navigate to="/contact#faq" replace />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
