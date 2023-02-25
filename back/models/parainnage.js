const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parainnage', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parain_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "parain_id"
    },
    parainated_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "parainated_id"
    },
    link_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'parainnage',
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
        name: "parain_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "parain_id" },
        ]
      },
      {
        name: "parainated_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "parainated_id" },
        ]
      },
    ]
  });
};
