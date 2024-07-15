import db from "../database/db.js";
import { DataTypes } from "sequelize";
import AlumnosModel from "./AlumnosModel.js";
import PlanesModel from "./PlanesModelo.js";

const PagosModel = db.define('Pagos', {
    folio: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    fechaIncio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaFin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    matricula: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'Alumnos',
        key: 'matricula'
      }
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
    tableName: 'Pagos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "folio" },
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
        name: "plan",
        using: "BTREE",
        fields: [
          { name: "idPlan" },
        ]
      },
    ]
  });

  PagosModel.belongsTo(AlumnosModel, {
    foreignKey: 'matricula'
  });
  PagosModel.belongsTo(PlanesModel, {
    foreignKey: 'idPlan'
  });

  export default PagosModel