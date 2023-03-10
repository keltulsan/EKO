var DataTypes = require("sequelize").DataTypes;
var _action = require("./action");
var _analytics = require("./analytics");
var _business = require("./business");
var _envy_list = require("./envy_list");
var _labels = require("./labels");
var _parainnage = require("./parainnage");
var _product = require("./product");
var _product_label = require("./product_label");
var _user = require("./user");

function initModels(sequelize) {
  var action = _action(sequelize, DataTypes);
  var analytics = _analytics(sequelize, DataTypes);
  var business = _business(sequelize, DataTypes);
  var envy_list = _envy_list(sequelize, DataTypes);
  var labels = _labels(sequelize, DataTypes);
  var parainnage = _parainnage(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_label = _product_label(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    action,
    analytics,
    business,
    envy_list,
    labels,
    parainnage,
    product,
    product_label,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
