import { Patio } from "../models/Patio.js"
import { Veiculos } from "../models/Veiculos.js";
const MAX_VAGAS = 100;

const vagaPatio = async (req, res) => {
    const { placa, vaga } = req.body;
  
    if (!placa || !vaga) {
      return res.status(400).json({ erro: "Placa e número da vaga são obrigatórios." });
    }
  
    if (vaga < 1 || vaga > MAX_VAGAS) {
      return res.status(400).json({ erro: `Número da vaga deve estar entre 1 e ${MAX_VAGAS}.` });
    }
  
    try {
      const veiculo = await Veiculos.findOne({ where: { placa } });
      if (!veiculo) {
        return res.status(404).json({ erro: "Veículo não encontrado." });
      }
  
      const jaEstacionado = await Patio.findOne({ where: { placa } });
      if (jaEstacionado) {
        return res.status(400).json({ erro: "Este veículo já está estacionado." });
      }
  
      const vagaOcupada = await Patio.findOne({ where: { numero_vaga: vaga } });
      if (vagaOcupada) {
        return res.status(400).json({ erro: "Esta vaga já está ocupada." });
      }
  
      const registro = await Patio.create({
        placa,
        numero_vaga: vaga,
        status_ocupado: true // Marca a vaga como ocupada
      });      
  
    } catch (erro) {
      console.error("Erro ao registrar vaga:", erro);
      return res.status(500).json({ erro: "Erro interno ao registrar vaga no pátio." });
    }
}

const liberaVaga = async (req, res) => {
    try {
      const { numero_vaga } = req.body;
  
      const vaga = await Patio.findOne({ where: { numero_vaga } });
      if (!vaga) {
        return res.status(404).json({ erro: "Vaga não encontrada" });
      }
      if (!vaga.status_ocupado) {
        return res.status(400).json({ erro: "Vaga já está livre" });
      }
  
      vaga.status_ocupado = false;
      vaga.placa = null; // agora funciona pois allowNull: true
      await vaga.save();
  
      res.json({ message: "Vaga liberada com sucesso", vaga });
    } catch (error) {
      console.error("Erro ao liberar vaga:", error);
      res.status(500).json({ erro: "Erro ao liberar vaga" });
    }
};

const checarPatio = async (req, res) => {
    try {
        const vagas = await Patio.findAll()
        res.json(vagas)
    } catch (error) {
        console.error(error)
        res.status(500).json({ erro: 'Erro ao buscar dados do pátio' })
    }
}

export { checarPatio, vagaPatio, liberaVaga }