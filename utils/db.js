const Sequelize = require("sequelize");
const dbCredentials = require("./dbCredentials")

const db = new Sequelize('capital_organizer', dbCredentials.login, dbCredentials.password,
{
  dialect:'mysql',
  host:'localhost',
  define:{
    timestamps: false
  }
})

module.exports = db;
