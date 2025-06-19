import { Usuario } from "../models/Usuario.js"
import jwt from 'jsonwebtoken'

const segredoJwt = process.env.SEGREDO_JWT

const registrarUsuario = async (req, res) => {
    try {
        const {nome, cpf, senha, categoria_usuario} = req.body
        if(!nome || !cpf|| !senha || !categoria_usuario) {
            return res.status(400).send({mensagem: 'dados incompletos'})
        }
        await Usuario.create({nome, cpf, senha, categoria_usuario})
        res.status(201).send({mensagem: 'Usuario foi criado'})
    } catch (erroDisparado) {
        console.log(erroDisparado)
        res.status(500).send({mensagem: 'ocorreu um erro inesperado.'})
    }
}

const autenticarUsuario = async (req, res) => {
    try{
        const { cpf, senha } = req.body
        if (!cpf || !senha) {
            return res.status(400).send({ mensagem: 'Dados incompletos' })
        }
        const buscarUsuarioPorCpf = await Usuario.findOne({ where: { cpf } })
        if (!buscarUsuarioPorCpf) {
            return res.status(404).send({ mensagem: 'Usuário não encontrado' })
        }
        const senhaQueEstaNoBanco = buscarUsuarioPorCpf.senha
        const idUsuario = buscarUsuarioPorCpf.id
        if (senhaQueEstaNoBanco === senha) {
            const conteudoDoToken = { idUsuario }
            const token = jwt.sign(conteudoDoToken, segredoJwt, { expiresIn: '1d' })
            return res.status(201).send({ token })
        } else {
            return res.status(403).send({ mensagem: 'Credenciais inválidas' })
        }
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Ocorreu um erro inesperado' })
    }
} 

export { registrarUsuario, autenticarUsuario }