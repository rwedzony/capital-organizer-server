const Sequelize = require("sequelize");
const dbCredentials = require("./dbCredentials")

const db = new Sequelize('sql11408512', dbCredentials.login, dbCredentials.password,
{
  dialect:'mysql',
  host:'sql11.freemysqlhosting.net',
  define:{
    timestamps: false
  }
})

module.exports = db;
