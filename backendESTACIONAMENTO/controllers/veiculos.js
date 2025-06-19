import { Veiculos } from "../models/Veiculos.js";

const registrarVeiculo = async (req, res) => {
  const { modelo, cor, placa } = req.body;

  // Verificação de campos obrigatórios
  if (!modelo || !cor || !placa) {
    return res.status(400).send({ mensagem: 'dados incompletos' });
  }

  try {
    // Verifica se a placa já existe no banco
    const placaExistente = await Veiculos.findOne({ where: { placa } });
    if (placaExistente) {
      return res.status(400).send({ mensagem: 'Veículo com essa placa já está registrado.' });
    }

    // Cria novo veículo no banco de dados
    const novoVeiculo = await Veiculos.create({
      modelo,
      cor,
      placa,
      nome,
      registradoEm: new Date().toISOString()
    });

    return res.status(201).send({ sucesso: 'Veículo registrado com sucesso.', veiculo: novoVeiculo });
  } catch (erro) {
    console.error('Erro ao registrar veículo:', erro);
    return res.status(500).send({ mensagem: 'Erro interno ao registrar veículo.' });
  }
};

export { registrarVeiculo };
