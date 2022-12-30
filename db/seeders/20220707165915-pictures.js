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

    await queryInterface.bulkInsert('Pictures', [{
      name: 'Гарфилд',
      url: '/img/носки/картинки/гарфилд.png',
      sock_url: '/img/носки/гарфилд/Frame 1.png',
      color: 'white',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Гарфилд',
      url: '/img/носки/картинки/гарфилд.png',
      sock_url: '/img/носки/гарфилд/Mask group (3).png',
      color: 'red',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Гарфилд',
      url: '/img/носки/картинки/гарфилд.png',
      sock_url: '/img/носки/гарфилд/Mask group (5).png',
      color: 'black',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Гoмер',
      url: '/img/носки/картинки/гомер.png',
      sock_url: '/img/носки/гомер/Group 9.png',
      color: 'white',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Гoмер',
      url: '/img/носки/картинки/гомер.png',
      sock_url: '/img/носки/гомер/Group 11.png',
      color: 'red',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Гoмер',
      url: '/img/носки/картинки/гомер.png',
      sock_url: '/img/носки/гомер/Group 12.png',
      color: 'black',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Патрик',
      url: '/img/носки/картинки/патрик.png',
      sock_url: '/img/носки/патрик/Group 1.png',
      color: 'white',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'Патрик',
      url: '/img/носки/картинки/патрик.png',
      sock_url: '/img/носки/патрик/Group 3.png',
      color: 'red',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Патрик',
      url: '/img/носки/картинки/патрик.png',
      sock_url: '/img/носки/патрик/Group 4.png',
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
