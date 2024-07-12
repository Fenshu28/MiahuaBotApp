const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('avances', {
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
    }
  }, {
    sequelize,
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
      },
    ]
  });
};
