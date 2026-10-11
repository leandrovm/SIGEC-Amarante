import { useMemo, useState } from 'react'
import PortalLayout from '../PortalLayout'
import '../modules.css'

const cobrancasIniciais = [
  { id: 1, aluno: 'Ana Beatriz Lima', descricao: 'Mensalidade - outubro', vencimento: '10/10/2026', valor: 480, status: 'Pendente' },
  { id: 2, aluno: 'Pedro Henrique Souza', descricao: 'Mensalidade - outubro', vencimento: '10/10/2026', valor: 420, status: 'Atrasada' },
  { id: 3, aluno: 'Lucas Ferreira Alves', descricao: 'Mensalidade - outubro', vencimento: '10/10/2026', valor: 480, status: 'Paga' },
  { id: 4, aluno: 'Sofia Costa Mendes', descricao: 'Material didático', vencimento: '20/10/2026', valor: 160, status: 'Pendente' },
]

const moeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

function Financeiro() {
  const [cobrancas, setCobrancas] = useState(cobrancasIniciais)
  const [filtro, setFiltro] = useState('Todas')
  const [busca, setBusca] = useState('')
  const filtradas = useMemo(() => cobrancas.filter((item) =>
    (filtro === 'Todas' || item.status === filtro) && item.aluno.toLowerCase().includes(busca.toLowerCase()),
  ), [cobrancas, filtro, busca])
  const emAberto = cobrancas.filter((item) => item.status !== 'Paga').reduce((total, item) => total + item.valor, 0)
  const pagas = cobrancas.filter((item) => item.status === 'Paga').reduce((total, item) => total + item.valor, 0)
  const atrasadas = cobrancas.filter((item) => item.status === 'Atrasada').length

  function alternarPagamento(id) {
    setCobrancas((atuais) => atuais.map((item) => item.id === id
      ? { ...item, status: item.status === 'Paga' ? 'Pendente' : 'Paga' }
      : item))
  }

  return (
    <PortalLayout>
      <div className="page-heading"><div><h1>Financeiro</h1><p>Controle demonstrativo de cobranças e pagamentos.</p></div></div>
      <div className="module-stats">
        <div className="module-stat"><span>Em aberto</span><strong>{moeda(emAberto)}</strong></div>
        <div className="module-stat"><span>Recebido</span><strong>{moeda(pagas)}</strong></div>
        <div className="module-stat"><span>Cobranças atrasadas</span><strong>{atrasadas}</strong></div>
      </div>
      <section className="module-panel">
        <h2>Contas a receber</h2>
        <div className="module-toolbar table-toolbar">
          <input type="search" placeholder="Buscar aluno" value={busca} onChange={(event) => setBusca(event.target.value)} />
          <select aria-label="Filtrar por situação" value={filtro} onChange={(event) => setFiltro(event.target.value)}>
            {['Todas', 'Pendente', 'Atrasada', 'Paga'].map((status) => <option key={status}>{status}</option>)}
          </select>
        </div>
        <div className="module-table-wrap"><table className="module-table">
          <thead><tr><th>Aluno</th><th>Descrição</th><th>Vencimento</th><th>Valor</th><th>Situação</th><th>Ação</th></tr></thead>
          <tbody>{filtradas.map((item) => <tr key={item.id}>
            <td>{item.aluno}</td><td>{item.descricao}</td><td>{item.vencimento}</td><td>{moeda(item.valor)}</td>
            <td><span className={`status-pill${item.status === 'Atrasada' ? ' danger' : item.status === 'Pendente' ? ' warning' : ''}`}>{item.status}</span></td>
            <td><button className="text-action" onClick={() => alternarPagamento(item.id)}>{item.status === 'Paga' ? 'Reabrir' : 'Marcar paga'}</button></td>
          </tr>)}</tbody>
        </table></div>
      </section>
    </PortalLayout>
  )
}

export default Financeiro