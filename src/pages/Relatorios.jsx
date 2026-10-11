import { useState } from 'react'
import PortalLayout from '../PortalLayout'
import '../modules.css'

const dados = {
  matriculas: {
    titulo: 'Matrículas por etapa',
    colunas: ['Etapa de ensino', 'Turmas', 'Matrículas'],
    linhas: [['Educação Infantil', '8', '142'], ['Ensino Fundamental I', '15', '368'], ['Ensino Fundamental II', '12', '291']],
  },
  frequencia: {
    titulo: 'Frequência por turma',
    colunas: ['Turma', 'Estudantes', 'Frequência média'],
    linhas: [['1o Ano A', '24', '94%'], ['3o Ano B', '27', '89%'], ['5o Ano A', '26', '96%']],
  },
  financeiro: {
    titulo: 'Resumo financeiro',
    colunas: ['Situação', 'Lançamentos', 'Valor'],
    linhas: [['Pagos', '128', 'R$ 54.280,00'], ['Pendentes', '34', 'R$ 13.740,00'], ['Atrasados', '12', 'R$ 4.960,00']],
  },
}

function Relatorios() {
  const [tipo, setTipo] = useState('matriculas')
  const [inicio, setInicio] = useState('2026-10-01')
  const [fim, setFim] = useState('2026-10-31')
  const [gerado, setGerado] = useState(false)
  const relatorio = dados[tipo]

  function exportarCsv() {
    const conteudo = [relatorio.colunas, ...relatorio.linhas].map((linha) => linha.join(';')).join('\r\n')
    const url = URL.createObjectURL(new Blob([conteudo], { type: 'text/csv;charset=utf-8' }))
    const link = document.createElement('a')
    link.href = url
    link.download = `${tipo}-${inicio}-a-${fim}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <PortalLayout>
      <div className="page-heading"><div><h1>Relatórios</h1><p>Indicadores demonstrativos para consulta e exportação.</p></div></div>
      <section className="module-panel">
        <h2>Parâmetros do relatório</h2>
        <form className="module-form" onSubmit={(event) => { event.preventDefault(); setGerado(true) }}>
          <label>Relatório<select value={tipo} onChange={(event) => { setTipo(event.target.value); setGerado(false) }}>
            <option value="matriculas">Matrículas por etapa</option>
            <option value="frequencia">Frequência por turma</option>
            <option value="financeiro">Resumo financeiro</option>
          </select></label>
          <label>Data inicial<input type="date" value={inicio} onChange={(event) => setInicio(event.target.value)} /></label>
          <label>Data final<input type="date" value={fim} onChange={(event) => setFim(event.target.value)} /></label>
          <div className="form-actions"><button className="module-button" type="submit">Gerar relatório</button></div>
        </form>
      </section>
      {gerado && <section className="module-panel report-result">
        <div className="calendar-topline"><strong>{relatorio.titulo}</strong><button className="module-button secondary" onClick={exportarCsv}>Exportar CSV</button></div>
        <p className="report-summary">Período selecionado: {new Date(`${inicio}T12:00:00`).toLocaleDateString('pt-BR')} a {new Date(`${fim}T12:00:00`).toLocaleDateString('pt-BR')}</p>
        <div className="module-table-wrap"><table className="module-table">
          <thead><tr>{relatorio.colunas.map((coluna) => <th key={coluna}>{coluna}</th>)}</tr></thead>
          <tbody>{relatorio.linhas.map((linha) => <tr key={linha[0]}>{linha.map((valor) => <td key={valor}>{valor}</td>)}</tr>)}</tbody>
        </table></div>
      </section>}
    </PortalLayout>
  )
}

export default Relatorios