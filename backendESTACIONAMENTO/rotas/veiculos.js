import express from 'express'
import {registrarVeiculo} from '../controllers/veiculos.js'
import {validarToken} from '../middlewares/usuario.js'

const routerVeiculo = express.Router()

routerVeiculo.post('/veiculos', validarToken, registrarVeiculo)