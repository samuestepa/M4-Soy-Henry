const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contents: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
}