import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function acesso (){
    const [placa, setPlaca] = useState("")
    const [acessoId, SetRegistroSaida] = useState("")
    
    const horario_entrada = async () => {
        try{
            console.log("valor da entrada", placa)
            const resultado = await axios.post("http://localhost:3000/registroEntrada", {placa})
            SetRegistroSaida(resultado.data.id);
            alert("entrada registrada com sucesso")
        }catch{
            alert("erro de entrada")
        }
}
const horarioSaida = async () => {
    try{
        console.log("id para registrar saída", acessoId)
        const resultado = await axios.put(`http://localhost:3000/registroSaida/${acessoId}`);
        alert("saida registrada com sucesso")
    }catch{
        alert("erro de saida")
    }
}
    return(
        <>
        <header>
            <title>Tela de Controle de Acesso</title>
        </header>
        <div>
            <h2>Registrar Acesso</h2>
            placa: {placa}
            <input type="text" id='placa'onChange={(event)=> setPlaca(event.target.value)} placeholder='digite sua placa'/>
            <br /><br />
            <button onClick={horario_entrada}>Registrar entrada</button>
            <br /><br />
            <label htmlFor="acessoId"></label>
            id: {acessoId}
            <input type="text" id='acessoId' value={acessoId} onChange={(event)=> SetRegistroSaida(event.target.value)} placeholder='digite o id da entrada'/>
            <br /><br />
            <button onClick={horarioSaida}>Registrar saída</button>
        </div>
        </>
    )
}

export default acesso