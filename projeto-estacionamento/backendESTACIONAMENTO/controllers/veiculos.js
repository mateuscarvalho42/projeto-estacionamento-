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
const excluirVeiculo = async (req, res) => {
  try {
    const { placa } = req.body;

    if (!placa) {
      return res.status(400).send({ mensagem: 'Placa é obrigatória para exclusão.' });
    }

    // Busca o veículo pela placa
    const veiculo = await Veiculos.findOne({ where: { placa } });

    if (!veiculo) {
      return res.status(404).send({ mensagem: 'Veículo não encontrado.' });
    }

    // Exclui o veículo
    await Veiculos.destroy({ where: { placa } });

    return res.status(200).send({ mensagem: 'Veículo excluído com sucesso.' });
  } catch (err) {
    console.error('Erro ao excluir veículo:', err);
    return res.status(500).send({ mensagem: 'Erro interno ao excluir veículo.' });
  }
};


const atualizarVeiculo = async (req, res) => {
  try {
    // Aqui, normalmente o id do veículo vem na rota, ex: /veiculos/:veiculo_id
    const { veiculo_id } = req.body; // ou req.body, dependendo da sua rota
    const { modelo, cor, placa, nome } = req.body;

    if (!veiculo_id) {
      return res.status(400).send({ mensagem: 'ID do veículo é obrigatório.' });
    }

    // Verifica se o veículo existe
    const veiculo = await Veiculos.findByPk(veiculo_id);

    if (!veiculo) {
      return res.status(404).send({ mensagem: 'Veículo não encontrado.' });
    }

    // Cria um objeto com os campos a atualizar, apenas se estiverem presentes
    const dadosParaAtualizar = {};

    if (modelo) dadosParaAtualizar.modelo = modelo;
    if (cor) dadosParaAtualizar.cor = cor;
    if (placa) dadosParaAtualizar.placa = placa;
    if (nome) dadosParaAtualizar.nome = nome;

    if (Object.keys(dadosParaAtualizar).length === 0) {
      return res.status(400).send({ mensagem: 'Nenhum dado para atualizar foi enviado.' });
    }

    // Atualiza os dados
    await Veiculos.update(dadosParaAtualizar, { where: { veiculo_id } });

    // Busca novamente para enviar a versão atualizada
    const veiculoAtualizado = await Veiculos.findByPk(veiculo_id);

    return res.status(200).send({ mensagem: 'Veículo atualizado com sucesso.', veiculo: veiculoAtualizado });
  } catch (err) {
    console.error('Erro ao atualizar veículo:', err);
    return res.status(500).send({ mensagem: 'Erro interno ao atualizar veículo.' });
  }
};

export { registrarVeiculo, excluirVeiculo, atualizarVeiculo };
