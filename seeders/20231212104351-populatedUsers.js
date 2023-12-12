'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [
    {
      email: 'Sultan@gmail.com',
      password: '252525',
      name: 'Sultan',
      createdAt: new Date(),
      updatedAt: new Date()

   },
   {
    email: 'Sultan2@gmail.com',
    password: '101010',
    name: 'Sultan2',
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
