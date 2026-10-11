import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Alunos from './pages/Alunos'
import Matriculas from './pages/Matriculas'
import Financeiro from './pages/Financeiro'
import Responsaveis from './pages/Responsaveis'
import Relatorios from './pages/Relatorios'
import Calendario from './pages/Calendario'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/alunos" element={<Alunos />} />
      <Route path="/matriculas" element={<Matriculas />} />
      <Route path="/financeiro" element={<Financeiro />} />
      <Route path="/responsaveis" element={<Responsaveis />} />
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/calendario" element={<Calendario />} />
    </Routes>
  )
}

export default App
