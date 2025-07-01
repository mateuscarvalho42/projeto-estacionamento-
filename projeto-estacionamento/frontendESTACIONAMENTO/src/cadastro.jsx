import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function cadastro(){ 
     const [nome, setNome] = useState("")
     const [cpf, setCpf] = useState("")
     const [senha, setSenha] = useState("")
     const [categoria_usuario, setCategoria] = useState("")

     const registrarUsuario = async () => {
        try{
          console.log("valor do nome", nome)
          const resultado = await axios.post("http://localhost:3000/usuario", {nome, cpf, senha, categoria_usuario})
      }catch{
        alert("erro")
      }
     }
    
    return(
    <>
  <div className="login-box">
      <header>
        <title>Tela de Cadastro</title>
      </header>
    <div> 
    <img src="src/assets/Senai-Sesi.png" className='logo' alt="Senai logo" />
    <h2>Registrar</h2>
      <input type="text" id="nome1"onChange={(event)=> setNome(event.target.value)} placeholder="Nome"/>
      <br/>
      <input type="text" id="cpf1"onChange={(event)=> setCpf(event.target.value)} placeholder="CPF"/>
      <br/>
      <input type="password" id="senha1"onChange={(event)=> setSenha(event.target.value)} placeholder="Senha"/>
      <br/><br />
      <a for="categoria">Selecione a sua categoria: </a>
      <select name="Categoria de usuário" id="categoria"onChange={(event)=> setCategoria(event.target.value)}>
        <option value="aluno">Aluno</option>
        <option value="professor">Professor</option>
        <option value="funcionario">Funcionario</option> 
      </select>
      <br /><br />
      <button onClick={registrarUsuario}>Registrar</button>
    </div>
  </div>
    </>
    )
}

export default cadastro