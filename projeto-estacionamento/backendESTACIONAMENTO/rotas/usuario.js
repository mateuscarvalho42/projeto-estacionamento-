import express from 'express'
import { registrarUsuario, autenticarUsuario, atualizarUsuario, excluirUsuario } from '../controllers/usuario.js'
const router = express.Router()

router.post('/usuario', registrarUsuario)
router.post('/login', autenticarUsuario)
router.put('/usuario/atualizar', atualizarUsuario)
router.put('/usuario/excluir', excluirUsuario)

export { router }