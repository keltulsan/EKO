const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'eko',
 'root',
 'root',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

var initModels = require("./models/init-models");
var models = initModels(sequelize);
(async () => {
    await sequelize.sync();
    // Code here
    const jane = await models.labels.create({label_name:"Pitié marche"});
    console.log("Jane's auto-generated ID:", jane.id);
    const jane1 = await models.labels.create({label_name:"Pitié marche"});
    console.log("Jane's auto-generated ID:", jane1.id);
  })();

