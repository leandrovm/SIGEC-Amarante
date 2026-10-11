import { useMemo, useState } from 'react'
import PortalLayout from '../PortalLayout'
import '../modules.css'

const acompanhamentos = [
  { id: 1, aluno: 'Ana Beatriz Lima', turma: '5o Ano A', responsavel: 'Mariana Lima', telefone: '(99) 98812-3401', frequencia: '96%', ocorrencias: 0, pendencias: 'Nenhuma' },
  { id: 2, aluno: 'Pedro Henrique Souza', turma: '3o Ano B', responsavel: 'Carlos Souza', telefone: '(99) 98144-7610', frequencia: '82%', ocorrencias: 2, pendencias: 'Mensalidade de outubro' },
  { id: 3, aluno: 'Lucas Ferreira Alves', turma: '1o Ano A', responsavel: 'Paula Alves', telefone: '(99) 98420-5982', frequencia: '91%', ocorrencias: 1, pendencias: 'Nenhuma' },
  { id: 4, aluno: 'Sofia Costa Mendes', turma: '2o Ano A', responsavel: 'Roberto Mendes', telefone: '(99) 98776-0243', frequencia: '98%', ocorrencias: 0, pendencias: 'Material didático' },
]

function Responsaveis() {
  const [busca, setBusca] = useState('')
  const [selecionado, setSelecionado] = useState(null)
  const filtrados = useMemo(() => acompanhamentos.filter((item) =>
    `${item.aluno} ${item.responsavel} ${item.turma}`.toLowerCase().includes(busca.toLowerCase()),
  ), [busca])
  const mediaFrequencia = Math.round(acompanhamentos.reduce((sum, item) => sum + Number.parseInt(item.frequencia), 0) / acompanhamentos.length)

  return (
    <PortalLayout>
      <div className="page-heading"><div><h1>Acompanhamento familiar</h1><p>Visão escolar dos estudantes vinculados a seus responsáveis.</p></div></div>
      <div className="module-stats">
        <div className="module-stat"><span>Famílias acompanhadas</span><strong>{acompanhamentos.length}</strong></div>
        <div className="module-stat"><span>Frequência média</span><strong>{mediaFrequencia}%</strong></div>
        <div className="module-stat"><span>Alunos com ocorrências</span><strong>{acompanhamentos.filter((item) => item.ocorrencias > 0).length}</strong></div>
      </div>
      <section className="module-panel">
        <h2>Estudantes e responsáveis</h2>
        <div className="module-toolbar table-toolbar"><input type="search" placeholder="Buscar aluno, responsável ou turma" value={busca} onChange={(event) => setBusca(event.target.value)} /></div>
        <div className="module-table-wrap"><table className="module-table">
          <thead><tr><th>Estudante</th><th>Turma</th><th>Responsável</th><th>Frequência</th><th>Ocorrências</th><th>Detalhes</th></tr></thead>
          <tbody>{filtrados.map((item) => <tr key={item.id}>
            <td>{item.aluno}</td><td>{item.turma}</td><td>{item.responsavel}</td><td>{item.frequencia}</td><td>{item.ocorrencias}</td>
            <td><button className="text-action" onClick={() => setSelecionado(selecionado === item.id ? null : item.id)}>{selecionado === item.id ? 'Fechar' : 'Acompanhar'}</button></td>
          </tr>)}</tbody>
        </table></div>
        {selecionado && acompanhamentos.filter((item) => item.id === selecionado).map((item) => <div className="guardian-detail" key={item.id}>
          <div><span>Contato do responsável</span><strong>{item.telefone}</strong></div>
          <div><span>Ocorrências registradas</span><strong>{item.ocorrencias}</strong></div>
          <div><span>Pendências</span><strong>{item.pendencias}</strong></div>
        </div>)}
      </section>
    </PortalLayout>
  )
}

export default Responsaveis