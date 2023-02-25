const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business', {
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
      allowNull: false,
      defaultValue: "icons-user.jpg"
    },
    activity: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    business_email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    business_phone: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    business_password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    business_adress: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    business_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    business_banking_informations: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "user_id"
    }
  }, {
    sequelize,
    tableName: 'business',
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
        name: "user_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
