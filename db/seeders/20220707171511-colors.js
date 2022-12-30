module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Colors', [{
      url: '/img/носки/цвета/белый.png',
      color: 'white',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: '/img/носки/цвета/красный.png',
      color: 'red',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: '/img/носки/цвета/черный.png',
      color: 'black',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
