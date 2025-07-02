import express from 'express'
import { horarioEntrada, horarioSaida } from '../controllers/registroDeAcesso.js'

const routerAcesso = express.Router()

routerAcesso.post('/registroEntrada', horarioEntrada)
routerAcesso.put('/registroSaida/:id', horarioSaida)

export { routerAcesso }