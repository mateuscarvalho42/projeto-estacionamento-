import { database } from "../database.js";
import { DataTypes } from "sequelize";

const Patio = database.define('Patio', {
    patio_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    numero_vaga: {
        type: DataTypes.INTEGER
    },
    status_ocupado: {
        type: DataTypes.BOOLEAN
    }
})

export { Patio }