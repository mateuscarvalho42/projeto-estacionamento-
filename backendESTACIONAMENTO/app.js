import express from 'express'
import 'dotenv/config'
import { router } from './rotas/usuario.js'
import { routerVeiculos } from './rotas/veiculos.js'
import { database } from './database.js'
import cors from "cors"
import { routerPatio } from './rotas/patio.js'
import { routerAcesso } from './rotas/registroDeAcesso.js'

const app = express()

app.use(express.json())
app.use(router)
app.use(routerVeiculos)
app.use(routerAcesso)
app.use(routerPatio)
app.use(cors({origin: 'http://localhost:3000'}))

await database.sync({alter: true})

app.listen(3000, () => console.log('Servidor rodando'))