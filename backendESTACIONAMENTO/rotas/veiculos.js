import express from 'express'
import { registrarVeiculo, excluirVeiculo, atualizarVeiculo } from '../controllers/veiculos.js'

const routerVeiculos = express.Router()

routerVeiculos.post('/veiculos', registrarVeiculo)
routerVeiculos.put('/veiculos/atualizar', atualizarVeiculo)
routerVeiculos.post('/veiculos/excluir', excluirVeiculo)

export { routerVeiculos }