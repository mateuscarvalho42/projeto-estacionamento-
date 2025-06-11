import { database } from "../database.js";
import { DataTypes } from "sequelize";

const Veiculos = database.define('Veiculo', {
    veiculo_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    placa: {
        type: DataTypes.STRING,
        unique: true
    },
    modelo: {
        type: DataTypes.STRING
    },
    cor: {
        type: DataTypes.STRING
    },
    nome: {
        type: DataTypes.STRING
    },
})

export { Veiculos }