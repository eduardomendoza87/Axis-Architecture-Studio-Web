import { useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const tabs = [
    { id: 'inicio', label: 'Inicio', path: '/' },
    { id: 'proyectos', label: 'Proyectos', path: '/proyectos' },
    { id: 'contacto', label: 'Contacto', path: '/contacto' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.includes(path);
  };

  return (
    <nav className="w-full bg-concrete-50 ">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-concrete-900">
              Axis <span className="font-light">Studio</span>
            </h1>
          </Link>

          {/* Tabs Navigation */}
          <div className="flex gap-2 bg-concrete-100 p-1 rounded-2xl">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                className={`
                  px-6 py-2 rounded-xl font-medium transition-all duration-300
                  ${isActive(tab.path)
                    ? 'bg-concrete-900 text-white'
                    : 'text-concrete-500 hover:text-concrete-900'
                  }
                `}
              >
                {tab.label}
              </Link>
            ))}
          </div>

          <div className="flex-shrink-0 w-20"></div>
        </div>
      </div>
    </nav>
  );
}