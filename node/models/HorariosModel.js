import db from "../database/db.js";
import { DataTypes } from "sequelize";

const HorariosModel = db.define('Horarios', {
    idHorario: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    horaInicio: {
      type: DataTypes.TIME,
      allowNull: false
    },
    horaFinal: {
      type: DataTypes.TIME,
      allowNull: false
    },
    idPlan: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      references: {
        model: 'Planes',
        key: 'idPlan'
      }
    }
  }, {
    tableName: 'Horarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idHorario" },
        ]
      },
      {
        name: "idPlan",
        using: "BTREE",
        fields: [
          { name: "idPlan" },
        ]
      },
    ]
  });

  export default HorariosModel
