import { useState } from 'react'
import axios from 'axios'
import './App.css'

function Patio() {
  const [placa, setPlaca] = useState('')
  const [vaga, setVaga] = useState('')
  const [resultadoConsulta, setResultadoConsulta] = useState([])

  const registrarVaga = async () => {
    try {
        console.log("valor de registrar vaga")
      const resultado = await axios.post('http://localhost:3000/vaga', {placa, vaga})
      alert('vaga registrada com sucesso')
    } catch{
        alert("erro no registrarVaga")
    }
}
  const liberarVaga = async () => {
    try {
      await axios.put('http://localhost:3000/libera', {numero_vaga: (vaga),})
      alert('Vaga liberada com sucesso!')
    } catch {
        alert('Erro no liberarVaga.')
      }
    }
    const consultarPatio = async () => {
        try {
          const resultado = await axios.get('http://localhost:3000/patio')
          setResultadoConsulta(resultado.data)
        } catch {
          alert("Erro ao consultarPatio")
        }
      }
  return (
    <>
      <header>
        <h1>Estacionamento - Registro de Vagas</h1>
      </header>

      <div className=''>
        <h2>Registrar Vaga no Pátio</h2>

        <label>
          Placa do Veículo:
          <input
            type='text'
            value={placa}
            onChange={(event) => setPlaca(event.target.value)}
            placeholder='numero da sua placa aqui'
          />
        </label>
            <br /><br />
        <label>
          Número da Vaga:
          <input
            type='number'
            value={vaga}
            onChange={(event) => setVaga(event.target.value)}
            placeholder='numero da vaga desejada'
            min='1'
            max='100'
          />
        </label>
            <br /><br />
        <div className="botoes">
          <button onClick={registrarVaga}>Registrar Vaga</button>
          <button onClick={liberarVaga}>Liberar Vaga</button>
          <button onClick={consultarPatio}>Consultar Pátio</button>
        </div>
        {resultadoConsulta.length > 0 && (
          <div className="resultado">
            <h3>Vagas Ocupadas:</h3>
            <ul>
              {resultadoConsulta.map((vaga) => (
                <li key={vaga.numero_vaga}>
                  Vaga {vaga.numero_vaga} - Placa: {vaga.placa || "Vaga livre"}
                </li>
              ))}
            </ul>
          </div>
        )}
        
      </div>
    </>
  )
}
export default Patio