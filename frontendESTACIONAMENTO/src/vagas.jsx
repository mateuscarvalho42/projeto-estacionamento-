import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Patio() {
  const [placa, setPlaca] = useState('');
  const [vaga, setVaga] = useState('');
  const [resultadoConsulta, setResultadoConsulta] = useState([]);
  const [loading, setLoading] = useState(false);

  // Registrar vaga no backend
  const registrarVaga = async () => {
    const vagaNum = Number(vaga);
    if (!placa.trim() || !vagaNum) {
      alert("Placa e número da vaga são obrigatórios!");
      return;
    }
    if (vagaNum < 1 || vagaNum > 100) {
      alert("Número da vaga deve ser entre 1 e 100!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/vaga', { placa, vaga: vagaNum });
      alert('Vaga registrada com sucesso!');
      setPlaca('');
      setVaga('');
    } catch (error) {
      console.error("Erro ao registrar vaga:", error.response?.data || error.message);
      alert("Erro ao registrar vaga: " + (error.response?.data?.erro || error.message));
    } finally {
      setLoading(false);
    }
  };

  // Liberar vaga no backend
  const liberarVaga = async () => {
    const vagaNum = Number(vaga);
    if (!vagaNum) {
      alert("Informe o número da vaga para liberar!");
      return;
    }
    setLoading(true);
    try {
      await axios.put('http://localhost:3000/libera', { numero_vaga: vagaNum });
      alert('Vaga liberada com sucesso!');
      setVaga('');
    } catch (error) {
      console.error("Erro ao liberar vaga:", error.response?.data || error.message);
      alert("Erro ao liberar vaga: " + (error.response?.data?.erro || error.message));
    } finally {
      setLoading(false);
    }
  };

  // Consultar vagas ocupadas
  const consultarPatio = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/patio');
      setResultadoConsulta(response.data);
    } catch (error) {
      console.error("Erro ao consultar pátio:", error.response?.data || error.message);
      alert("Erro ao consultar pátio: " + (error.response?.data?.erro || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Estacionamento - Registro de Vagas</h1>
      </header>

      <section className="form-section">
        <h2>Registrar Vaga no Pátio</h2>

        <label>
          Placa do Veículo:
          <input
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value.toUpperCase())}
            placeholder="Digite a placa do veículo"
            maxLength={10}
          />
        </label>

        <label>
          Número da Vaga:
          <input
            type="number"
            value={vaga}
            onChange={(e) => setVaga(e.target.value)}
            placeholder="Número da vaga (1 a 100)"
            min="1"
            max="100"
          />
        </label>

        <div className="buttons">
          <button onClick={registrarVaga} disabled={loading}>
            {loading ? 'Registrando...' : 'Registrar Vaga'}
          </button>
          <button onClick={liberarVaga} disabled={loading}>
            {loading ? 'Liberando...' : 'Liberar Vaga'}
          </button>
          <button onClick={consultarPatio} disabled={loading}>
            {loading ? 'Consultando...' : 'Consultar Pátio'}
          </button>
        </div>
      </section>

      <section className="resultado-section">
        {resultadoConsulta.length > 0 && (
          <>
            <h3>Vagas Ocupadas:</h3>
            <ul>
              {resultadoConsulta.map((vaga) => (
                <li key={vaga.numero_vaga}>
                  Vaga {vaga.numero_vaga} — Placa: {vaga.placa || "Vaga livre"}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
}

export default Patio;
