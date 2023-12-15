'use strict';

const { UUIDV4 } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Accounts', [{
      id: "45dfba5e-5730-4df1-afca-a8fb144d4f89",
      uid: 1,
      identityType: 'email',
      identifier: 'luomusha@gmail.com',
      certificate: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: "45dfba5e-5722-4df1-afca-a8fb144d4f33",
      uid: 2,
      identityType: 'email',
      identifier: 'jerry@gmail.com',
      certificate: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
