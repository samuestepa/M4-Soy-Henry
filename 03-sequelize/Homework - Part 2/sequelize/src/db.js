const { Sequelize } = require('sequelize');
const userModel = require('./models/user');
const postModel = require('./models/Post');
const pageModel = require('./models/page');

const database = new Sequelize('postgres://postgres:bateriguitarra@localhost:5432/sequelize', {
    logging: false
})

userModel(database);
postModel(database);
pageModel(database);

module.exports = {
    database,
    ...database.models
}