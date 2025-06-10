import { database } from "../database.js";
import { DataTypes } from "sequelize";

const Veiculos = database.define('Veiculo', {
    veiculo_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    modelo: {
        type: DataTypes.STRING
    },
    cor: {
        type: DataTypes.STRING
    },
    placa: {
        type: DataTypes.STRING
    }
})

export { Veiculos }