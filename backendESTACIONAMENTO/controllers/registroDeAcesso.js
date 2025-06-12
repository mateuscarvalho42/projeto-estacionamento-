import { RegistroDeAcesso } from "../models/RegistroDeAcesso.js"

const horarioEntrada = async (req, res) => {
    await sequelize.sync();

  const entrada = await RegistroDeAcesso.create({
    licensePlate,
    horario_entrada: new Date(),
    horario_saida: null,
  });

  console.log('Entrada registrada:', entrada.toJSON());
  return entrada;
}

        

const horarioSaida = async (req, res) => {
    await sequelize.sync();
  const acesso = await RegistroDeAcesso.findOne({
    where: {
      id,
      exitTime: null,
    },
  });

  if (!acesso) {
    console.log('Registro não encontrado ou saída já registrada.');
    return null;
    }
    acesso.exitTime = new Date();
  await acesso.save();

  console.log('Saída registrada:', acesso.toJSON());
  return acesso;
}

export { horarioEntrada, horarioSaida }