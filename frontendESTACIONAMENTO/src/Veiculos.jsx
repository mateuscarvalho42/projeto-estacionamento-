import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function Veiculos(){ 
    const [nome, setNome] = useState("")
    const [modelo, setModelo] = useState("")
    const [cor, setCor] = useState("")
    const [placa, setPlaca] = useState("")

    const registrarVeiculo = async () => {
        try{
            console.log("valor do veiculo", modelo)
            const resultado = await axios.post("http://localhost:3000/veiculos", {nome, modelo, cor, placa})
        }catch{
            alert("erro")
        }
    }
    return(
    <>
    <div className="login-box">
        <header>
        <title>Tela de Veículos</title>
    </header>
    <img src="src/assets/Senai-Sesi.png" className='logo' alt="Senai logo" />
    <div>
        <h2>Registrar Veículo</h2>
        <input type="text" id="nome1"onChange={(event)=> setNome(event.target.value)} placeholder="Marca"/>
        <br/>
      <input type="text" id="modelo1"onChange={(event)=> setModelo(event.target.value)} placeholder="Modelo"/>
      <br/>
      <input type="text" id="cor1"onChange={(event)=> setCor(event.target.value)} placeholder="Cor"/>
      <br/>
      <input type="text" id="placa1"onChange={(event)=> setPlaca(event.target.value)} placeholder="Placa"/>
      <br/><br />
      <button onClick={registrarVeiculo}>Registrar</button>
    </div>
    </div>
    
    </>
    )
}

export default Veiculos