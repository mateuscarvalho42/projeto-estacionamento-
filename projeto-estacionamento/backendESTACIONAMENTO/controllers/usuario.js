import { Usuario } from "../models/Usuario.js"

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
  
  

export { registrarUsuario, autenticarUsuario, excluirUsuario, atualizarUsuario }