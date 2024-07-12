import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ArchivosModel = db.define('Archivos', {
    IdArchivo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    formato: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    idAvance: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      references: {
        model: 'avances',
        key: 'idAvance'
      }
    }
  }, {
    tableName: 'Archivos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdArchivo" },
        ]
      },
      {
        name: "idAvance",
        using: "BTREE",
        fields: [
          { name: "idAvance" },
        ]
      },
    ]
  });

  export default ArchivosModel