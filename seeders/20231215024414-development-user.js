'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: 1,
      username: 'Tom',
      avatar: 'https://pbs.twimg.com/media/DXbDdC_XcAIXWDW.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      username: 'Jerry',
      avatar: 'https://avatars.githubusercontent.com/u/41624063?v=4',
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
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
