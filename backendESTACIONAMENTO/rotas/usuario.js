import express from 'express'
import { registrarUsuario, atualizarUsuario, excluirUsuario } from '../controllers/usuario.js'
const router = express.Router()

router.post('/usuario', registrarUsuario)
router.put('/usuario/atualizar', atualizarUsuario)
router.put('/usuario/excluir', excluirUsuario)

export { router }