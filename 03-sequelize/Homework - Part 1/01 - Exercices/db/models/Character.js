const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      code: {
         type: DataTypes.STRING(5),
         primaryKey: true,
         allowNull: false
      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false
      },
      age: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      race: {
         type: DataTypes.ENUM('Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'),
         default: 'Other',
         allowNull: false
      },
      hp: {
         type: DataTypes.FLOAT,
         allowNull:false
      },
      mana: {
         type: DataTypes.FLOAT,
         allowNull: fase
      }
   }, {
      timestamps: false
   });
};
