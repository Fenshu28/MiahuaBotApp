const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Manuales', {
    idManual: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    formato: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    fuente: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    urlManual: {
      type: DataTypes.STRING(255),
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
    tableName: 'Manuales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idManual" },
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
