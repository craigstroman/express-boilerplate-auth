import Sequelize from 'sequelize';

require('dotenv').config();

const db = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_USER_PASSWORD;

/*
  Note: In order to enable logging to the terminal you can replace the logging: false with the following:
  logging: function (str) {
    console.log(str);
  },
*/
const sequelize = new Sequelize(db, dbUser, dbPassword, {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
  logging: false,
});

const models = {
  User: sequelize.import('./user'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
