import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <h2>SIGEC</h2>

        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/alunos">Alunos</Link>
          <Link to="/matriculas">Matrículas</Link>
          <Link to="/">Sair</Link>
        </nav>

      </aside>

      <main className="content">

        <h1>Dashboard</h1>

        <p>
          Bem-vindo ao Sistema Integrado de Gestão Educacional.
        </p>

        <div className="cards">

          <div className="card">
            <h3>Alunos</h3>
            <strong>0</strong>
            <p>Alunos cadastrados</p>
          </div>

          <div className="card">
            <h3>Turmas</h3>
            <strong>0</strong>
            <p>Turmas cadastradas</p>
          </div>

          <div className="card">
            <h3>Matrículas</h3>
            <strong>0</strong>
            <p>Matrículas realizadas</p>
          </div>

          <div className="card">
            <h3>Avaliações</h3>
            <strong>0</strong>
            <p>Avaliações registradas</p>
          </div>

        </div>

      </main>

    </div>
  )
}

export default Dashboard