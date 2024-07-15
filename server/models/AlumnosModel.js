import db from "../database/db.js";
import { DataTypes } from "sequelize";
import PlanesModel from "./PlanesModelo.js";

const AlumnosModel = db.define('Alumnos', {
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fechaNac: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaIngreso: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    matricula: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    telefono: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    Correo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    urlFoto: {
      type: DataTypes.STRING(255),
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
    tableName: 'Alumnos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "matricula" },
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

  AlumnosModel.belongsTo(PlanesModel, {
    foreignKey: 'idPlan'
  });

  export default AlumnosModel
