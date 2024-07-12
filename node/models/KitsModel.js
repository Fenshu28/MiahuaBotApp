import db from "../database/db.js";
import { DataTypes } from "sequelize";

const KitsModel = db.define('Kits', {
    idKit: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    Existencia: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Kits',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idKit" },
        ]
      },
    ]
  });
  
  export default KitsModel