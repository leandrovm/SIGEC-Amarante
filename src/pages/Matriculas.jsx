import { Link } from 'react-router-dom'

function Matriculas() {
  return (
    <div className="page">

      <h1>Matrículas</h1>

      <p>
        Gerenciamento das matrículas dos estudantes.
      </p>

      <button>
        + Nova matrícula
      </button>

      <br />
      <br />

      <table>

        <thead>
          <tr>
            <th>Matrícula</th>
            <th>Aluno</th>
            <th>Turma</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>001</td>
            <td>Exemplo de aluno</td>
            <td>5º Ano A</td>
            <td>Ativa</td>
          </tr>
        </tbody>

      </table>

      <br />

      <Link to="/dashboard">
        Voltar para Dashboard
      </Link>

    </div>
  )
}

export default Matriculas