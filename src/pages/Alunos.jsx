import PortalLayout from '../PortalLayout'
import '../modules.css'

function Alunos() {
  return (
    <PortalLayout>
      <div className="page-heading">
        <div><h1>Alunos</h1><p>Gerenciamento dos estudantes cadastrados no SIGEC-Amarante.</p></div>
        <button className="module-button">Novo aluno</button>
      </div>
      <section className="module-panel">
        <h2>Estudantes cadastrados</h2>
        <div className="module-table-wrap"><table className="module-table">
          <thead><tr><th>ID</th><th>Nome</th><th>Data de nascimento</th><th>Responsável</th></tr></thead>
          <tbody><tr><td>001</td><td>Exemplo de aluno</td><td>10/05/2015</td><td>Responsável</td></tr></tbody>
        </table></div>
      </section>
    </PortalLayout>
  )
}

export default Alunos