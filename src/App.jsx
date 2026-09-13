import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Alunos from './pages/Alunos'
import Matriculas from './pages/Matriculas'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/alunos" element={<Alunos />} />
      <Route path="/matriculas" element={<Matriculas />} />
    </Routes>
  )
}

export default App
