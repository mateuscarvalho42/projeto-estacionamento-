import { database } from "../database.js";
import { DataTypes } from "sequelize";

const patio = database.define('patio', {
    numero_vaga: {
        type: DataTypes.NUMBER
    },
    status_ocupado: {
        type: DataTypes.BOOLEAN
    }
})

export { patio }