import { Link } from 'react-router-dom'
import PortalLayout from '../PortalLayout'
import './Dashboard.css'

function Dashboard() {
  return (
    <PortalLayout>
      <section className="content">
        <h1>Dashboard</h1>
        <p>Bem-vindo ao Sistema Integrado de Gestão Educacional.</p>
        <div className="cards">
          <Link className="card" to="/alunos">
            <h3>Alunos</h3>
            <strong>0</strong>
            <p>Alunos cadastrados</p>
          </Link>
          <Link className="card" to="/calendario">
            <h3>Calendário</h3>
            <strong>2026</strong>
            <p>Eventos acadêmicos</p>
          </Link>
          <Link className="card" to="/matriculas">
            <h3>Matrículas</h3>
            <strong>0</strong>
            <p>Gerenciar matrículas</p>
          </Link>
          <Link className="card" to="/financeiro">
            <h3>Financeiro</h3>
            <strong>R$</strong>
            <p>Mensalidades e pagamentos</p>
          </Link>
          <Link className="card" to="/responsaveis">
            <h3>Responsáveis</h3>
            <strong>4</strong>
            <p>Acompanhamento escolar</p>
          </Link>
          <Link className="card" to="/relatorios">
            <h3>Relatórios</h3>
            <strong>3</strong>
            <p>Indicadores e exportações</p>
          </Link>
        </div>
      </section>
    </PortalLayout>
  )
}

export default Dashboard