import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ProyectosModel = db.define('Proyectos', {
    idProyecto: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
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
    tableName: 'Proyectos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProyecto" },
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
  
  export default ProyectosModel