'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
      {
      name: 'Sombrilla de playa',
      price: 50,
      CategoryId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'lata cerveza',
      price: 1,
      CategoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'crema Aloe Vera',
      price: 2.5,
      CategoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jabon de Marsella',
      price: 3.5,
      CategoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pelota Voley',
      price: 5,
      CategoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
