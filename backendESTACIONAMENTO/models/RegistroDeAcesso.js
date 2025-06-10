import { database } from "../database.js";
import { DataTypes } from "sequelize";

const RegistroDeAcesso = database.define('RegistroDeAcesso', {
    registro_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    horario_entrada: {
        type: DataTypes.DATE
    },
    horario_saida: {
        type: DataTypes.DATE
    }
})

export { RegistroDeAcesso }
