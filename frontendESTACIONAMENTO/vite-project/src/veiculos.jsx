import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function veiculos(){ 
    // const [count, setCount] = useState(0)
    
    return(
    <>
    <header>
        <title>Tela de Veículos</title>
    </header>
    
    <div class="login-box">
        <img src="src/assets/Senai-Sesi.png" className="logo" alt="Sesi logo"/>
        <h2>Registrar Veículo</h2>
      <input type="text" id="modelo1" placeholder="Modelo"/>
      <br/>
      <input type="text" id="cor1" placeholder="Cor"/>
      <br/>
      <input type="text" id="placa1" placeholder="Placa"/>
      <br/><br />
      <button onClick="registrarVeiculo">Registrar</button>
    </div>
    </>
    )
}

export default veiculos