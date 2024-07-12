const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Proyectos', {
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
    sequelize,
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
};
