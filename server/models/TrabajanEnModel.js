import db from "../database/db.js";
import { DataTypes } from "sequelize";
import InstructoresModel from "./InstructoresModel.js";
import HorariosModel from "./HorariosModel.js";

const TrabajanEnModel = db.define('trabajanEn', {
    idHorario: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Horarios',
        key: 'idHorario'
      }
    },
    idInstructor: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Instructores',
        key: 'idInstructor'
      }
    }
  }, {
    tableName: 'trabajanEn',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idHorario" },
          { name: "idInstructor" },
        ]
      },
      {
        name: "idInstructor",
        using: "BTREE",
        fields: [
          { name: "idInstructor" },
        ]
      },
    ]
  });
  
  TrabajanEnModel.belongsTo(InstructoresModel, {
    foreignKey: 'idInstructor'
  });
  TrabajanEnModel.belongsTo(HorariosModel, {
    foreignKey: 'idHorario'
  });
  
  export default TrabajanEnModel