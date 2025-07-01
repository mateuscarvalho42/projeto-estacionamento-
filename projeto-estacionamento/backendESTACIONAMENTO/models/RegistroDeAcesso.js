import { database } from "../database.js";
import { DataTypes } from "sequelize";

const RegistroDeAcesso = database.define('RegistroDeAcesso', {
    
    horario_entrada: {
        type: DataTypes.DATE
    },
    horario_saida: {
        type: DataTypes.DATE
    }
})

export { RegistroDeAcesso }
