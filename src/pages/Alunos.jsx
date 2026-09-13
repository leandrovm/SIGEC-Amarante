import { Link } from 'react-router-dom'

function Alunos() {
  return (
    <div className="page">

      <h1>Alunos</h1>

      <p>
        Gerenciamento dos estudantes cadastrados no SIGEC-Amarante.
      </p>

      <button>
        + Novo aluno
      </button>

      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Data de nascimento</th>
            <th>Responsável</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>001</td>
            <td>Exemplo de aluno</td>
            <td>10/05/2015</td>
            <td>Responsável</td>
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

export default Alunos