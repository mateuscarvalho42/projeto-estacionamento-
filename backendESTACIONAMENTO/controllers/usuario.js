import { Usuario } from "../models/Usuario.js"
import { Sequelize } from "sequelize"

const registrarUsuario = async (req, res) => {
  try {
    const { nome, cpf, senha, categoria_usuario } = req.body;

    if (!nome || !cpf || !senha || !categoria_usuario) {
      return res.status(400).send({ mensagem: 'Dados incompletos' });
    }

    // Opcional: verifica se CPF já existe antes de tentar criar
    const existente = await Usuario.findOne({ where: { cpf } });
    if (existente) {
      return res.status(409).send({ mensagem: 'CPF já cadastrado.' });
    }

    await Usuario.create({ nome, cpf, senha, categoria_usuario });
    return res.status(201).send({ mensagem: 'Usuário foi criado' });

  } catch (erroDisparado) {
    // Trata erro de CPF duplicado
    if (erroDisparado.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).send({ mensagem: 'CPF já cadastrado.' });
    }

    console.error('Erro ao registrar usuário:', erroDisparado);
    return res.status(500).send({ mensagem: 'Ocorreu um erro inesperado.' });
  }
};

const excluirUsuario = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).send({ mensagem: 'ID do usuário para exclusão é obrigatório no corpo da requisição.' });
    }

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).send({ mensagem: 'Usuário não encontrado.' });
    }

    await Usuario.destroy({ where: { usuario_id: id } });

    return res.status(200).send({ mensagem: 'Usuário excluído com sucesso.' });
  } catch (err) {
    console.error('Erro ao excluir usuário:', err);
    return res.status(500).send({ mensagem: 'Erro interno ao excluir usuário.' });
  }
};

const atualizarUsuario = async (req, res) => {
  try {
    const { id, nome, cpf, senha, categoria_usuario } = req.body;

    if (!id) {
      return res.status(400).send({ mensagem: 'ID do usuário é obrigatório no corpo da requisição.' });
    }

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).send({ mensagem: 'Usuário não encontrado.' });
    }

    const dadosParaAtualizar = {};

    if (nome) dadosParaAtualizar.nome = nome;
    if (cpf) dadosParaAtualizar.cpf = cpf;
    if (senha) dadosParaAtualizar.senha = senha;
    if (categoria_usuario) dadosParaAtualizar.categoria_usuario = categoria_usuario;

    if (Object.keys(dadosParaAtualizar).length === 0) {
      return res.status(400).send({ mensagem: 'Nenhum dado para atualizar foi enviado.' });
    }

    await Usuario.update(dadosParaAtualizar, { where: { usuario_id: id } });

    const usuarioAtualizado = await Usuario.findByPk(id);

    return res.status(200).send({ mensagem: 'Usuário atualizado com sucesso.', usuario: usuarioAtualizado });
  } catch (err) {
    console.error('Erro ao atualizar usuário:', err);
    return res.status(500).send({ mensagem: 'Erro interno ao atualizar usuário.' });
  }
};

export { registrarUsuario, excluirUsuario, atualizarUsuario };
