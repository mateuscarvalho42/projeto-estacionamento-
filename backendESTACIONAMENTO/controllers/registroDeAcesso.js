
import { RegistroDeAcesso } from "../models/RegistroDeAcesso.js";
import { Veiculos } from "../models/Veiculos.js";

const horarioEntrada = async (req, res) => {
  const { placa } = req.body;

  // Verifica se a placa existe na tabela de veículos
  const veiculo = await Veiculos.findOne({ where: { placa } });

  if (!veiculo) {
    return res.status(404).send({ mensagem: "Veículo não encontrado." });
  }

  // Cria o registro de entrada
  const entrada = await RegistroDeAcesso.create({
    placa,
    horario_entrada: new Date(),
    horario_saida: null,
  });

  console.log("Entrada registrada:", entrada.toJSON());
  return res.status(201).send(entrada);
};


const horarioSaida = async (req, res) => {
  const { id } = req.params; // ID deve vir da rota, ex: /saida/2

  try {
    // Busca o registro de acesso com esse ID e que ainda não tem horário de saída
    const acesso = await RegistroDeAcesso.findOne({
      where: {
        id, // <- usa o campo correto
        horario_saida: null,
      },
    });

    if (!acesso) {
      return res.status(404).send({ mensagem: "Registro não encontrado ou já finalizado." });
    }

    // Atualiza o horário de saída
    acesso.horario_saida = new Date();
    await acesso.save();

    console.log("Saída registrada:", acesso.toJSON());
    return res.status(200).send(acesso);

  } catch (erro) {
    console.error("Erro ao registrar saída:", erro);
    return res.status(500).send({ mensagem: "Erro interno ao registrar saída." });
  }
};

export { horarioEntrada, horarioSaida }