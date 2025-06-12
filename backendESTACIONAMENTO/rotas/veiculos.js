import express from 'express'
import { registrarVeiculo } from '../controllers/veiculos.js'
import { validarToken } from '../middlewares/usuario.js'

const routerVeiculos = express.Router()

routerVeiculos.post('/veiculos', validarToken, registrarVeiculo)

export { routerVeiculos }