const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_label', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    labels_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'product_label',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "labels_id" },
        ]
      },
      {
        name: "product_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "labels_id" },
        ]
      },
    ]
  });
};
