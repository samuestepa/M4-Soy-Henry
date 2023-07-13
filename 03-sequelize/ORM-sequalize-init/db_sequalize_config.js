//PASOS PARA USAR SEQUELIZE
//1)Traer a sequelize
const { Sequelize } = require('sequelize');

//2)Conectando URL
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
