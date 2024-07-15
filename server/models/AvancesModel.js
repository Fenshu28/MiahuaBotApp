import db from "../database/db.js";
import { DataTypes } from "sequelize";
import ActividadesModel from "./ActividadesModel.js";
import AlumnosModel from "./AlumnosModel.js";
const AvancesModel = db.define('avances', {
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    observaciones: {
      type: DataTypes.STRING(99),
      allowNull: false
    },
    idAvance: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    matricula: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'Alumnos',
        key: 'matricula'
      }
    },
    idActividad: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      references: {
        model: 'Actividades',
        key: 'idActividad'
      }
    },
    fecha:{
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'avances',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAvance" },
        ]
      },
      {
        name: "matricula",
        using: "BTREE",
        fields: [
          { name: "matricula" },
        ]
      },
      {
        name: "idActividad",
        using: "BTREE",
        fields: [
          { name: "idActividad" },
        ]
      }
    ]
  });

  AvancesModel.belongsTo(ActividadesModel, {
    foreignKey: 'idActividad'
  });

  AvancesModel.belongsTo(AlumnosModel, {
    foreignKey: 'matricula'
  });

  export default AvancesModel
