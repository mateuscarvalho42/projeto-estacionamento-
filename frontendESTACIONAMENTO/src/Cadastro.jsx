import { useState } from 'react'
import axios from 'axios'
import './App.css'

function Cadastro() { 
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [senha, setSenha] = useState("")
  const [categoria_usuario, setCategoria] = useState("")
  const [mensagem, setMensagem] = useState("") // para mostrar mensagens de sucesso ou erro

  const registrarUsuario = async () => {
    if (!nome || !cpf || !senha || !categoria_usuario) {
      setMensagem("Preencha todos os campos!")
      return
    }

    try {
      const resultado = await axios.post("http://localhost:3000/usuario", { nome, cpf, senha, categoria_usuario })
      setMensagem(resultado.data.mensagem) // mensagem de sucesso do backend
      // opcional: limpar campos após sucesso
      setNome("")
      setCpf("")
      setSenha("")
      setCategoria("")
    } catch (error) {
      console.error("Erro ao registrar:", error)
      setMensagem("Erro ao registrar: " + (error?.response?.data?.mensagem || error.message))
    }
  }
  
  return (
    <div className="login-box">
      <header>
        <title>Tela de Cadastro</title>
      </header>
      <div> 
        <img src="src/assets/Senai-Sesi.png" className='logo' alt="Senai logo" />
        <h2>Registrar</h2>
        <input
          type="text"
          id="nome1"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Nome"
        />
        <br />
        <input
          type="text"
          id="cpf1"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
          placeholder="CPF"
        />
        <br />
        <input
          type="password"
          id="senha1"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          placeholder="Senha"
        />
        <br /><br />
        <label htmlFor="categoria">Selecione a sua categoria: </label>
        <select
          name="Categoria de usuário"
          id="categoria"
          value={categoria_usuario}
          onChange={(event) => setCategoria(event.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="aluno">Aluno</option>
          <option value="professor">Professor</option>
          <option value="funcionario">Funcionario</option> 
        </select>
        <br /><br />
        <button onClick={registrarUsuario}>Registrar</button>

        {mensagem && (
          <p style={{ marginTop: "15px", fontWeight: "bold" }}>{mensagem}</p>
        )}
      </div>
    </div>
  )
}

export default Cadastro
