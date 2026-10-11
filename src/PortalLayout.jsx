import { Link, useLocation } from 'react-router-dom'
import './PortalLayout.css'

const links = [
  ['Dashboard', '/dashboard'],
  ['Alunos', '/alunos'],
  ['Matrículas', '/matriculas'],
  ['Financeiro', '/financeiro'],
  ['Responsáveis', '/responsaveis'],
  ['Relatórios', '/relatorios'],
  ['Calendário', '/calendario'],
]

function PortalLayout({ children }) {
  const location = useLocation()

  return (
    <div className="portal-shell">
      <aside className="portal-sidebar">
        <Link className="portal-brand" to="/dashboard">
          <span className="brand-mark">S</span>
          <span>SIGEC<small>AMARANTE</small></span>
        </Link>
        <nav aria-label="Navegação principal">
          {links.map(([label, path]) => (
            <Link
              key={path}
              className={`portal-nav-link${location.pathname === path ? ' active' : ''}`}
              to={path}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="portal-signout" to="/">Sair</Link>
      </aside>
      <main className="portal-main">{children}</main>
    </div>
  )
}

export default PortalLayout