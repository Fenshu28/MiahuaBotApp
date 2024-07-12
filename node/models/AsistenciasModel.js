import db from "../database/db.js";
import { DataTypes } from "sequelize";

const AsistenciasModel = db.define('asistencias', {
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false
    },
    matricula: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Alumnos',
        key: 'matricula'
      }
    },
    idHorario: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Horarios',
        key: 'idHorario'
      }
    }
  }, {
    tableName: 'asistencias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "matricula" },
          { name: "idHorario" },
        ]
      },
      {
        name: "idHorario",
        using: "BTREE",
        fields: [
          { name: "idHorario" },
        ]
      },
    ]
  });

  export default AsistenciasModel