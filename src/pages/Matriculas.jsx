import { useMemo, useState } from 'react'
import PortalLayout from '../PortalLayout'
import '../modules.css'

function Matriculas() {
  const [matriculas, setMatriculas] = useState([
    { id: '2026-001', aluno: 'Ana Beatriz Lima', turma: '5o Ano A', responsavel: 'Mariana Lima', status: 'Ativa' },
    { id: '2026-002', aluno: 'Pedro Henrique Souza', turma: '3o Ano B', responsavel: 'Carlos Souza', status: 'Pendente' },
    { id: '2026-003', aluno: 'Lucas Ferreira Alves', turma: '1o Ano A', responsavel: 'Paula Alves', status: 'Ativa' },
  ])
  const [busca, setBusca] = useState('')
  const [formAberto, setFormAberto] = useState(false)
  const [form, setForm] = useState({ aluno: '', turma: '', responsavel: '' })
  const filtradas = useMemo(() => matriculas.filter((item) =>
    `${item.aluno} ${item.turma} ${item.responsavel}`.toLowerCase().includes(busca.toLowerCase()),
  ), [matriculas, busca])

  function cadastrar(event) {
    event.preventDefault()
    setMatriculas((atuais) => [{
      ...form,
      id: `2026-${String(atuais.length + 1).padStart(3, '0')}`,
      status: 'Ativa',
    }, ...atuais])
    setForm({ aluno: '', turma: '', responsavel: '' })
    setFormAberto(false)
  }

  return (
    <PortalLayout>
      <div className="page-heading">
        <div><h1>Matrículas</h1><p>Inscrições e situação dos estudantes no ano letivo.</p></div>
        <button className="module-button" onClick={() => setFormAberto((aberto) => !aberto)}>
          {formAberto ? 'Fechar cadastro' : 'Nova matrícula'}
        </button>
      </div>
      <div className="module-stats">
        <div className="module-stat"><span>Matrículas listadas</span><strong>{matriculas.length}</strong></div>
        <div className="module-stat"><span>Ativas</span><strong>{matriculas.filter((item) => item.status === 'Ativa').length}</strong></div>
        <div className="module-stat"><span>Aguardando confirmação</span><strong>{matriculas.filter((item) => item.status === 'Pendente').length}</strong></div>
      </div>
      <section className="module-panel">
        <h2>Registros de matrícula</h2>
        {formAberto && <form className="module-form" onSubmit={cadastrar}>
          <label>Nome do aluno<input required value={form.aluno} onChange={(event) => setForm({ ...form, aluno: event.target.value })} /></label>
          <label>Turma<input required placeholder="Ex.: 4o Ano A" value={form.turma} onChange={(event) => setForm({ ...form, turma: event.target.value })} /></label>
          <label>Responsável<input required value={form.responsavel} onChange={(event) => setForm({ ...form, responsavel: event.target.value })} /></label>
          <div className="form-actions"><button className="module-button" type="submit">Registrar matrícula</button></div>
        </form>}
        <div className="module-toolbar table-toolbar">
          <input type="search" placeholder="Buscar aluno, turma ou responsável" value={busca} onChange={(event) => setBusca(event.target.value)} />
        </div>
        <div className="module-table-wrap"><table className="module-table">
          <thead><tr><th>Número</th><th>Aluno</th><th>Turma</th><th>Responsável</th><th>Situação</th></tr></thead>
          <tbody>{filtradas.map((item) => <tr key={item.id}>
            <td>{item.id}</td><td>{item.aluno}</td><td>{item.turma}</td><td>{item.responsavel}</td>
            <td><span className={`status-pill${item.status === 'Pendente' ? ' warning' : ''}`}>{item.status}</span></td>
          </tr>)}</tbody>
        </table></div>
      </section>
    </PortalLayout>
  )
}

export default Matriculas