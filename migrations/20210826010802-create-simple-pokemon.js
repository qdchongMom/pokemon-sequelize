'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SimplePokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      japaneseName: {
        type: Sequelize.STRING
      },
      baseHP: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      nameWithJapanese: {
        type: Sequelize.VIRTUAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SimplePokemons');
  }
};