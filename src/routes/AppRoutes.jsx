import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* Aquí agregaremos más rutas luego: /work, /studio */}
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Route>
    </Routes>
  )
}