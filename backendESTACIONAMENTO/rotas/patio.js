import express from 'express'
import { checarPatio } from '../controllers/patio.js'

const routerPatio = express.Router()

routerPatio.get('/patio', checarPatio)

export { routerPatio }