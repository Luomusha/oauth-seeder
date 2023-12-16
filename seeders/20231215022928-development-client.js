'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert({ tableName: 'Clients', schema: "oauth" }, [{
      id: '45dfba5e-5730-4df1-afca-a8fb144d4f89',
      secret: 'xxx',
      name: 'Admin-client',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1t_2D7DepticTF8_al8t6yNOQtQiMPcx1mlBFqRtc8Q&s',
      description: 'Admin client application.',
      redirectUris: ["http://localhost:5173/callback"],
      grants: ["authorization_code", "password"],
      accessTokenLifetime: undefined,
      refreshTokenLifetime: undefined,
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
