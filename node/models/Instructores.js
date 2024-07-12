const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Instructores', {
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idInstructor: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    telefono: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "user_index"
    },
    psw: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Instructores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idInstructor" },
        ]
      },
      {
        name: "user_index",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user", length: 40 },
        ]
      },
    ]
  });
};
