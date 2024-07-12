const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Actividades', {
    idActividad: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    Complejidad: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    idProyecto: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      references: {
        model: 'Proyectos',
        key: 'idProyecto'
      }
    }
  }, {
    sequelize,
    tableName: 'Actividades',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idActividad" },
        ]
      },
      {
        name: "idProyecto",
        using: "BTREE",
        fields: [
          { name: "idProyecto" },
        ]
      },
    ]
  });
};
