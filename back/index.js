var cors = require('cors')
const express = require("express");
const app = express();
app.use(cors())
const port = 4444;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('eko', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

var initModels = require("./models/init-models");
var models = initModels(sequelize);

// CRUD action
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/action/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.action.create({ name: req.body.name, link_name: req.body.link_name, img: req.body.img})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/action/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.action.findAll({});
    res.send(body)
  })();
});

app.post("/action/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.action.update({ name: req.body.name , link_name: req.body.link_name, img: req.body.img},
      {
        where: {
          id: req.body.id
        }
      })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/action/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.action.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// CRUD analytics
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/analytics/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.analytics.create({
      product_id: req.body.product_id,
      action_id: req.body.action_id,
      user_id: req.body.user_id
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/analytics/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.analytics.findAll({});
    res.send(body)
  })();
});

app.post("/analytics/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.analytics.update({
      product_id: req.body.product_id,
      action_id: req.body.action_id,
      user_id: req.body.user_id
    },
      {
        where: {
          id: req.body.id
        }
      })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/analytics/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.analytics.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// CRUD business
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/business/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.business.create({
      name: req.body.name,
      img: req.body.img,
      activity: req.body.activity,
      business_email: req.body.business_email,
      business_phone: req.body.business_phone,
      business_password: req.body.business_password,
      business_adress: req.body.business_adress,
      business_name: req.body.business_name,
      business_banking_informations: req.body.business_banking_informations,
      user_id: req.body.user_id

    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/business/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.business.findAll({});
    res.send(body)
  })();
});

app.post("/business/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.business.update({
      name: req.body.name,
      img: req.body.img,
      activity: req.body.activity,
      business_email: req.body.business_email,
      business_phone: req.body.business_phone,
      business_password: req.body.business_password,
      business_adress: req.body.business_adress,
      business_name: req.body.business_name,
      business_banking_informations: req.body.business_banking_informations,
      user_id: req.body.user_id
    },
      {
        where: {
          user_id: req.body.user_id
        }
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/business/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    const body = await models.business.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// CRUD labels
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/labels/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.labels.create({
      label_name: req.body.name,
      link_name: req.body.link_name,
      img: req.body.img
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/labels/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.labels.findAll({});
    res.send(body)
  })();
});

app.post("/labels/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    const body = await models.labels.update({ 
      label_name: req.body.name,
      link_name: req.body.link_name,
      img: req.body.img 
    },
      {
        where: {
          id: req.body.id
        }
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/labels/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    const body = await models.labels.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// CRUD user 
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/user/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.user.create({
      name: req.body.name,
      img: req.body.img,
      nickname: req.body.nickname,
      mail: req.body.mail,
      phone_number: req.body.phone_number,
      adress: req.body.adress,
      apartment: req.body.apartment,
      code_postal: req.body.code_postal,
      city: req.body.city,
      password: req.body.password,
      banking_informations: req.body.banking_informations,
      acceptance_of_the_gtcu: req.body.acceptance_of_the_gtcu,
      stay_connect: req.body.stay_connect,
      newsletter: req.body.newsletter,
      eko_experience: req.body.eko_experience,
      eko_save: req.body.eko_save,
      badges: req.body.badges,
      admin: req.body.admin,
      seller: req.body.seller,
      envy_id: req.body.envy_id,
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/user/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const users = await models.user.findAll({});
    res.send(users)
  })();
});

app.post("/user/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.user.update({
      name: req.body.name,
      img: req.body.img,
      nickname: req.body.nickname,
      mail: req.body.mail,
      phone_number: req.body.phone_number,
      adress: req.body.adress,
      apartment: req.body.apartment,
      code_postal: req.body.code_postal,
      city: req.body.city,
      password: req.body.password,
      banking_informations: req.body.banking_informations,
      acceptance_of_the_gtcu: req.body.acceptance_of_the_gtcu,
      stay_connect: req.body.stay_connect,
      newsletter: req.body.newsletter,
      eko_experience: req.body.eko_experience,
      eko_save: req.body.eko_save,
      badges: req.body.badges,
      admin: req.body.admin,
      seller: req.body.seller,
      envy_id: req.body.envy_id,
    },
      {
        where: {
          id: req.body.id
        }
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/user/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.user.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});


// CRUD product

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/product/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.product.create({
      name: req.body.name,
      link_name: req.body.link_name,
      img: req.body.img,
      quantity: req.body.quantity,
      price: req.body.price,
      seller_name: req.body.seller_name,
      eko_score: req.body.eko_score,
      desc: req.body.desc,
      label_name: req.body.label_name
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/product/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const products = await models.product.findAll({});
    res.send(products)
  })();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/product/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.product.update({
      name: req.body.name,
      img: req.body.img,
      link_name: req.body.link_name,
      quantity: req.body.quantity,
      price: req.body.price,
      seller_name: req.body.seller_name,
      eko_score: req.body.eko_score,
      description: req.body.desc,
      label_name: req.body.label_name
    },
      {
        where: {
          id: req.body.id
        }
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/product/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.product.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// CRUD parainnage

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/parainnage/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.parainnage.create({
      parain_id: req.body.parain_id,
      parainated_id: req.body.parainated_id,
      link_name: req.body.link_name // [parain_id]_[parainated_id]
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/parainnage/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const parainnages = await models.parainnage.findAll({});
    res.send(parainnages)
  })();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/parainnage/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.parainnage.update({
      parain_id: req.body.parain_id,
      parainated_id: req.body.parainated_id,
      link_name: req.body.link_name // [parain_id]_[parainated_id]
    },
      {
        where: {
          id: req.body.id
        }
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/parainnage/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.parainnage.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});
// CRUD envy_list

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/envy_list/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.envy_list.create({
      user_id: req.body.user_id,
      product_id: req.body.product_id
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/envy_list/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const parainnages = await models.envy_list.findAll({});
    res.send(parainnages)
  })();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/envy_list/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.envy_list.update({
      product_id: req.body.product_id,
    },
      {
        where: {
          user_id: req.body.user_id
        }
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/envy_list/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.envy_list.destroy({
      where: {
        user_id: req.body.user_id,
        product_id: req.body.product_id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});
// CRUD product_label

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/product_label/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.product_label.create({
      parain_id: req.body.parain_id,
      parainated_id: req.body.parainated_id
    })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/product_label/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const product_labels = await models.product_label.findAll({});
    res.send(product_labels)
  })();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/product_label/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.product_label.update({
      product_id: req.body.product_id,
      labels_id: req.body.labels_id
    },
      {
        where: {
          product_id: req.body.product_id
        }
      })
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/product_label/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.product_label.destroy({
      where: {
        product_id: req.body.product_id,
        labels_id: req.body.labels_id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// CRUD condition
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/condition/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.condition.create({ name: req.body.name, link_name: req.body.link_name, desc: req.body.desc})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/condition/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.condition.findAll({});
    res.send(body)
  })();
});

app.post("/condition/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.condition.update({ name: req.body.name , link_name: req.body.link_name, desc: req.body.desc},
      {
        where: {
          id: req.body.id
        }
      })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/condition/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.condition.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

// CRUD faq

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/faq/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.faq.create({ name: req.body.name, desc: req.body.desc})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/faq/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.faq.findAll({});
    res.send(body)
  })();
});

app.post("/faq/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.faq.update({ name: req.body.name ,desc: req.body.desc},
      {
        where: {
          id: req.body.id
        }
      })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/faq/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.faq.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

//CRUD news 

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/news/insert", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.news.create({ name: req.body.name, link_name: req.body.link_name, desc: req.body.desc, img: req.body.img})
      .then(result => res.json(result))
      .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.get("/news/list", function (req, res) {
  (async () => {
    await sequelize.sync();
    const body = await models.news.findAll({});
    res.send(body)
  })();
});

app.post("/news/update", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.news.update({name: req.body.name, link_name: req.body.link_name, desc: req.body.desc, img: req.body.img},
      {
        where: {
          id: req.body.id
        }
      })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});

app.post("/news/delete", jsonParser, (req, res) => {
  (async () => {
    await sequelize.sync();
    await models.news.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(result => res.json(result))
    .catch(err => res.send(JSON.stringify(err.message)));
  })();
});
