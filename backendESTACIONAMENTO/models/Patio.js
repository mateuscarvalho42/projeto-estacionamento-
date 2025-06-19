import { database } from "../database.js";
import { DataTypes } from "sequelize";

const Patio = database.define('Patio', {
  patio_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numero_vaga: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  status_ocupado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: true,  // <-- permitir null aqui!
    unique: true
  }
  // ... outros campos se tiver
});

export { Patio };
