import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import ProjectsDetails from '../pages/projectDetails';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="proyectos" element={<Projects />} />
        <Route path="proyectos/:slug" element={<ProjectsDetails />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Route>
    </Routes>
  )
}