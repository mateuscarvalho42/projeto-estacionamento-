import express from 'express'
import { checarPatio, liberaVaga, vagaPatio } from '../controllers/patio.js'

const routerPatio = express.Router()

routerPatio.get('/patio', checarPatio)
routerPatio.post('/vaga', vagaPatio)
routerPatio.put('/libera', liberaVaga)

export { routerPatio }