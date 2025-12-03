import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-concrete-200 p-4">
        Header (MainLayout)
      </header>
      
      <main className="flexgrow">
        <Outlet /> 
      </main>

      <footer className="border-t border-concrete-200 p-4 text-center font-mono text-xs">
        AXIS FOOTER
      </footer>
    </div>
  )
}