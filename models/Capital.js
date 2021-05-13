const Sequelize = require('sequelize')
const db = require("../utils/db")

const Capital = db.define('capital', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    amount:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    typeOfExpenditure:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    
    currency:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    date:{
        type: Sequelize.DATE,
        allowNull: false
    },
    userId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Capital