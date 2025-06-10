import { Veiculos } from '../models/Veiculos.js'

const registrarVeiculo = async (req, res) => {
        const veiculo_id = req.veiculo_id
        const { modelo, cor, placa } = req.body
        if(!modelo || !cor || !placa || !veiculo_id){
            res.status(400).send({ mensagem: 'dados incompletos' })
        }
        const placaExistente = veiculosRegistrados.find(veiculo => veiculo.placa === placa);
        if (placaExistente) {
          res.status(400).send({ mensagem: 'Veículo com essa placa já está registrado.' });
        }

        const novoVeiculo = {
            modelo,
            cor,
            placa,
            registradoEm: new Date().toISOString()
          };
        
          veiculosRegistrados.push(novoVeiculo);
          res.status(201).send({ sucesso: 'Veículo registrado com sucesso.', veiculo: novoVeiculo });
        }

export {registrarVeiculo}