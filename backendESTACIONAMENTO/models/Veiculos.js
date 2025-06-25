import { database } from "../database.js";
import { DataTypes } from "sequelize";

const Veiculos = database.define('Veiculos', {
    veiculo_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    placa: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export { Veiculos }