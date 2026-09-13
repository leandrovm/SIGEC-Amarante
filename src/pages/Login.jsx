import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [nome, setNome] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerSenha, setRegisterSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  function handleLogin(event) {
    event.preventDefault()

    if (!email || !senha) {
      alert('Preencha o e-mail e a senha.')
      return
    }

    const usuariosCadastrados = JSON.parse(localStorage.getItem('sigeUsers') || '[]')

    if (usuariosCadastrados.length > 0) {
      const usuarioEncontrado = usuariosCadastrados.find(
        (usuario) => usuario.email.toLowerCase() === email.toLowerCase() && usuario.senha === senha,
      )

      if (!usuarioEncontrado) {
        alert('Usuário não encontrado ou senha incorreta.')
        return
      }
    }

    navigate('/dashboard')
  }

  function handleRegister(event) {
    event.preventDefault()

    if (!nome || !registerEmail || !registerSenha || !confirmarSenha) {
      alert('Preencha todos os campos do cadastro.')
      return
    }

    if (registerSenha !== confirmarSenha) {
      alert('As senhas não conferem.')
      return
    }

    const usuariosCadastrados = JSON.parse(localStorage.getItem('sigeUsers') || '[]')

    const usuarioJaExiste = usuariosCadastrados.some(
      (usuario) => usuario.email.toLowerCase() === registerEmail.toLowerCase(),
    )

    if (usuarioJaExiste) {
      alert('Este e-mail já está cadastrado.')
      return
    }

    usuariosCadastrados.push({
      nome,
      email: registerEmail,
      senha: registerSenha,
    })

    localStorage.setItem('sigeUsers', JSON.stringify(usuariosCadastrados))

    alert('Cadastro realizado com sucesso!')

    setNome('')
    setRegisterEmail('')
    setRegisterSenha('')
    setConfirmarSenha('')
    setIsRegistering(false)
    setEmail(registerEmail)
    setSenha(registerSenha)
  }

  return (
    <div className="login-container">
      <div className="login-box">

        <div className="logo-wrapper">
          <img src="/logo.svg" alt="Logo SIGEC-Amarante" className="login-logo" />
        </div>

        <h1>SIGEC-Amarante</h1>

        <p>
          Sistema Integrado de Gestão Educacional
        </p>

        {!isRegistering ? (
          <form onSubmit={handleLogin}>

            <label>E-mail</label>

            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <label>Senha</label>

            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />

            <button type="submit">
              Entrar
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={() => {
                const emailInformado = email || prompt('Digite seu e-mail para recuperar a senha:')

                if (!emailInformado) {
                  alert('Informe seu e-mail para recuperar a senha.')
                  return
                }

                alert(`Se o e-mail ${emailInformado} estiver cadastrado, você receberá instruções para redefinir sua senha.`)
              }}
            >
              Esqueci minha senha
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={() => setIsRegistering(true)}
            >
              Criar conta
            </button>

          </form>
        ) : (
          <form onSubmit={handleRegister} className="register-form">
            <label>Nome completo</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />

            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={registerEmail}
              onChange={(event) => setRegisterEmail(event.target.value)}
            />

            <label>Senha</label>
            <input
              type="password"
              placeholder="Crie uma senha"
              value={registerSenha}
              onChange={(event) => setRegisterSenha(event.target.value)}
            />

            <label>Confirmar senha</label>
            <input
              type="password"
              placeholder="Confirme a senha"
              value={confirmarSenha}
              onChange={(event) => setConfirmarSenha(event.target.value)}
            />

            <button type="submit">
              Cadastrar
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={() => setIsRegistering(false)}
            >
              Voltar para login
            </button>
          </form>
        )}

      </div>
    </div>
  )
}

export default Login