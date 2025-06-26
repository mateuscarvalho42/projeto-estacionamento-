import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useHistory, Route, Link } from 'react-router-dom';

function App() {

  return (
  <>
    <header>
      <title>Tela Login</title>
    </header>
      <div className="login-box">
        <img src="src/assets/Senai-Sesi.png" className="logo" alt="Sesi logo"/>
        <h2 className='tituloBox'>Login</h2>
        <input type="text" placeholder='Nome Completo' id='nomeLog'/>
        <br/>
        <input type="text" placeholder='CPF' id='cpfLog'/>
        <br/>
        <input type="text" placeholder='Email' id='emailLog'/>
        <br/>
        <input type="Password" placeholder='Senha' id='senhaLog'/>
        <br/>
        <hr class="rounded"></hr>
        <button>Entrar</button>
        <br/>
        <Link href="cadastro.jsx" className='idLink'>Se não tem uma conta registre-se aqui</Link>
      </div>
        
  </>
  )
}


export default App
