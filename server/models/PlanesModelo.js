
import db from "../database/db.js";
import { DataTypes } from "sequelize";


  const PlanesModel = db.define('Planes', {
    idPlan: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    sesiones: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Planes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPlan" },
        ]
      },
    ]
  });

  export default PlanesModel