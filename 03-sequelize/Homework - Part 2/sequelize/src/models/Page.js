const { DataTypes } = require('sequelize');

module.exports = (databse) => {
    database.define('Page', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        page_name: {
            type: DataTypes.SCRIPT,
            allowNull: false
        }
    })
}