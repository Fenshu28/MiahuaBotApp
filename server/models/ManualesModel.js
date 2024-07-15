import db from "../database/db.js";
import { DataTypes } from "sequelize";
import KitsModel from "./KitsModel.js";

const ManualesModel = db.define('Manuales', {
    idManual: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    formato: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    fuente: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    urlManual: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    idKit: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      references: {
        model: 'Kits',
        key: 'idKit'
      }
    }
  }, {
    tableName: 'Manuales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idManual" },
        ]
      },
      {
        name: "idKit",
        using: "BTREE",
        fields: [
          { name: "idKit" },
        ]
      },
    ]
  });

  ManualesModel.belongsTo(KitsModel, {
    foreignKey: 'idKit'
  });
  
  export default ManualesModel