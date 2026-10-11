import { useMemo, useState } from 'react'
import PortalLayout from '../PortalLayout'
import '../modules.css'

const eventos = {
  '2026-10-12': [{ titulo: 'Nossa Senhora Aparecida', tipo: 'accent' }],
  '2026-10-15': [{ titulo: 'Reunião de responsáveis', tipo: '' }],
  '2026-10-19': [{ titulo: 'Avaliação bimestral', tipo: 'accent' }],
  '2026-10-26': [{ titulo: 'Conselho de classe', tipo: '' }],
  '2026-11-02': [{ titulo: 'Finados', tipo: 'accent' }],
  '2026-11-20': [{ titulo: 'Consciência Negra', tipo: 'accent' }],
  '2027-04-21': [{ titulo: 'Tiradentes', tipo: 'accent' }],
}

const diasSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
const chaveData = (data) => `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}-${String(data.getDate()).padStart(2, '0')}`

function Calendario() {
  const [mes, setMes] = useState(() => {
    const hoje = new Date()
    return new Date(hoje.getFullYear(), hoje.getMonth(), 1)
  })
  const hojeKey = chaveData(new Date())
  const dias = useMemo(() => {
    const primeiroDia = new Date(mes.getFullYear(), mes.getMonth(), 1)
    const deslocamento = (primeiroDia.getDay() + 6) % 7
    const quantidade = new Date(mes.getFullYear(), mes.getMonth() + 1, 0).getDate()
    const total = Math.ceil((deslocamento + quantidade) / 7) * 7
    return Array.from({ length: total }, (_, indice) => new Date(mes.getFullYear(), mes.getMonth(), indice - deslocamento + 1))
  }, [mes])
  const nomeMes = mes.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })

  function mudarMes(diferenca) {
    setMes((atual) => new Date(atual.getFullYear(), atual.getMonth() + diferenca, 1))
  }

  return (
    <PortalLayout>
      <div className="page-heading"><div><h1>Calendário acadêmico</h1><p>Datas letivas, reuniões e eventos escolares.</p></div></div>
      <section className="module-panel calendar-shell">
        <div className="calendar-topline">
          <button className="module-button secondary" aria-label="Mês anterior" onClick={() => mudarMes(-1)}>Anterior</button>
          <strong>{nomeMes}</strong>
          <button className="module-button secondary" aria-label="Próximo mês" onClick={() => mudarMes(1)}>Próximo</button>
        </div>
        <div className="calendar-grid" role="grid" aria-label={`Calendário de ${nomeMes}`}>
          {diasSemana.map((dia) => <div className="calendar-weekday" role="columnheader" key={dia}>{dia}</div>)}
          {dias.map((dia) => {
            const dataKey = chaveData(dia)
            return <div className={`calendar-day${dia.getMonth() !== mes.getMonth() ? ' outside' : ''}${dataKey === hojeKey ? ' today' : ''}`} role="gridcell" key={dataKey}>
              <span className="calendar-day-number">{dia.getDate()}</span>
              {(eventos[dataKey] || []).map((evento) => <span className={`calendar-event${evento.tipo ? ` ${evento.tipo}` : ''}`} title={evento.titulo} key={evento.titulo}>{evento.titulo}</span>)}
            </div>
          })}
        </div>
      </section>
    </PortalLayout>
  )
}

export default Calendario