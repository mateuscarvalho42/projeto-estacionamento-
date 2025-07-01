import express from 'express'
import { registrarVeiculo, excluirVeiculo, atualizarVeiculo } from '../controllers/veiculos.js'
import { validarToken } from '../middlewares/usuario.js'

const routerVeiculos = express.Router()

routerVeiculos.post('/veiculos', validarToken, registrarVeiculo)
routerVeiculos.put('/veiculos/atualizar ', atualizarVeiculo)
routerVeiculos.post('/veiculos/excluir', excluirVeiculo)

export { routerVeiculos }