const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trabajanEn', {
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
    sequelize,
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
};
