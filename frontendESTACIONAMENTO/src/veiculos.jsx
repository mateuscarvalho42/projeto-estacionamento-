import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function veiculos(){ 
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
    <header>
        <title>Tela de Veículos</title>
    </header>
    <div class="">
        <h2>Registrar Veículo</h2>
    nome: {nome}
        <input type="text" id="nome1"onChange={(event)=> setNome(event.target.value)} placeholder="Nome"/>
        <br/>
    modelo: {modelo}
      <input type="text" id="modelo1"onChange={(event)=> setModelo(event.target.value)} placeholder="Modelo"/>
      <br/>
    cor: {cor}
      <input type="text" id="cor1"onChange={(event)=> setCor(event.target.value)} placeholder="Cor"/>
      <br/>
    placa: {placa}
      <input type="text" id="placa1"onChange={(event)=> setPlaca(event.target.value)} placeholder="Placa"/>
      <br/><br />
      <button onClick={registrarVeiculo}>Registrar</button>
    </div>
    </>
    )
}

export default veiculos