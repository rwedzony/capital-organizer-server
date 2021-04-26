const Sequelize = require('sequelize')
const bcrypt = require("bcrypt")
const db = require("../utils/db")

const User = db.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    password:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    email:{
        type: Sequelize.TEXT,
        allowNull: true
    }
})

User.beforeCreate(async user =>{
    user.password = await bcrypt.hash(user.password, 8);
})

User.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password) 
}

module.exports = User