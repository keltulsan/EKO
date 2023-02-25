const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    img: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    link_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seller_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    eko_score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    label_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "labbel_name"
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "labbel_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "label_name" },
        ]
      },
      {
        name: "label_name",
        using: "BTREE",
        fields: [
          { name: "label_name" },
        ]
      },
      {
        name: "label_name_2",
        using: "BTREE",
        fields: [
          { name: "label_name" },
        ]
      },
    ]
  });
};
