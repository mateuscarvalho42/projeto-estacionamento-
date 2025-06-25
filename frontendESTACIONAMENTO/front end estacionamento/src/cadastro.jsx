import { useState, useEffect } from 'react'
import axios from 'axios'
import './cadastro.css'

function cadastro(){ 
    // const [count, setCount] = useState(0)
    
    return(
    <>
    <header>
        <title>Tela de Cadastro</title>
    </header>
    <div class="login">
    {/* <img src="" className='logo' alt="sesi logo" /> */}
    <h2>Registrar</h2>
      <input type="text" id="nome1" placeholder="Nome"/>
      <br/>
      <input type="text" id="cpf1" placeholder="CPF"/>
      <br/>
      <input type="password" id="senha1" placeholder="Senha"/>
      <br/><br />
      <label for="categoria">Selecione a sua categoria: </label>
      <select name="Categoria de usuário" id="categoria">
        <option value="adminitrador">Adminitrador</option>
        <option value="porteiro">Porteiro</option>
        <option value="aluno">Aluno</option>
        <option value="professor">Professor</option>
        <option value="funcionario">Funcionario</option> 
      </select>
      <br /><br />
      <button onClick="registrarUsuario">Registrar</button>
    </div>
    </>
    )
}

export default cadastro