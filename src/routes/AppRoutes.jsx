import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* Aquí agregaremos más rutas luego: /work, /studio */}
        <Route path="proyectos" element={<Projects />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Route>
    </Routes>
  )
}