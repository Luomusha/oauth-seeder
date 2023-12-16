'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert({ tableName: 'Clients', schema: "oauth" }, [{
      id: '45dfba5e-5730-4df1-afca-a8fb144d4f89',
      secret: 'xxx',
      name: 'Admin-client',
      logo: 'https://1000logos.net/wp-content/uploads/2020/08/App-Store-Logo.png',
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
