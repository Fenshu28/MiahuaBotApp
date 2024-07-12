const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pagos', {
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
    sequelize,
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
};
