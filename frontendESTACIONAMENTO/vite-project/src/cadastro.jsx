import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function cadastro(){ 
    // const [count, setCount] = useState(0)
    
    return(
    <>
    <header>
        <title>Tela de Cadastro</title>
    </header>
    <div className="login-box">
    <img src="src/assets/Senai-Sesi.png" className='logo' alt="sesi logo" />
    <h2>Registrar</h2>
      <input type="text" id="nome1" placeholder="Nome"/>
      <br/>
      <input type="text" id="cpf1" placeholder="CPF"/>
      <br/>
      <input type="password" id="senha1" placeholder="Senha"/>
      <br/>
      <label for="categoria">Selecione a sua categoria: </label>
      <select name="Categoria de usuário" id="categoria">
        <option value="aluno">Aluno</option>
        <option value="professor">Professor</option>
        <option value="funcionario">Funcionario</option> 
      </select>
      <br/>
      <button onClick="registrarUsuario">Registrar</button>
    </div>
    </>
    )
}

export default cadastro