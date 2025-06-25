import { database } from "../database.js";
import { DataTypes } from "sequelize";

const Usuario = database.define('Usuario', {
    usuario_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria_usuario: {
        type: DataTypes.STRING ,
        allowNull: false
    }
})

export { Usuario }