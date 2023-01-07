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

    await queryInterface.bulkInsert(
      'Pictures',
      [
        {
          name: 'Подарок',
          url: '/img/носки/картинки/подарок.png',
          sock_url: '/img/носки/подарок/бежевый-подарок.png',
          color: 'beige',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Подарок',
          url: '/img/носки/картинки/подарок.png',
          sock_url: '/img/носки/подарок/красный-подарок.png',
          color: 'red',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Подарок',
          url: '/img/носки/картинки/подарок.png',
          sock_url: '/img/носки/подарок/серый-подарок.png',
          color: 'grey',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Подарок',
          url: '/img/носки/картинки/подарок.png',
          sock_url: '/img/носки/подарок/розовый-подарок.png',
          color: 'pink',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Подарок',
          url: '/img/носки/картинки/подарок.png',
          sock_url: '/img/носки/подарок/синий-подарок.png',
          color: 'blue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шапка',
          url: '/img/носки/картинки/шапка.png',
          sock_url: '/img/носки/шапка/синий-шапка.png',
          color: 'blue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шапка',
          url: '/img/носки/картинки/шапка.png',
          sock_url: '/img/носки/шапка/розовый-шапка.png',
          color: 'pink',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Шапка',
          url: '/img/носки/картинки/шапка.png',
          sock_url: '/img/носки/шапка/бежевый-шапка.png',
          color: 'beige',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шапка',
          url: '/img/носки/картинки/шапка.png',
          sock_url: '/img/носки/шапка/красный-шапка.png',
          color: 'red',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Шапка',
          url: '/img/носки/картинки/шапка.png',
          sock_url: '/img/носки/шапка/серый-шапка.png',
          color: 'grey',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Елка',
          url: '/img/носки/картинки/елка.png',
          sock_url: '/img/носки/елка/розовый-елка.png',
          color: 'pink',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Елка',
          url: '/img/носки/картинки/елка.png',
          sock_url: '/img/носки/елка/красный-елка.png',
          color: 'red',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Елка',
          url: '/img/носки/картинки/елка.png',
          sock_url: '/img/носки/елка/синий-елка.png',
          color: 'blue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Елка',
          url: '/img/носки/картинки/елка.png',
          sock_url: '/img/носки/елка/серый-елка.png',
          color: 'grey',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Елка',
          url: '/img/носки/картинки/елка.png',
          sock_url: '/img/носки/елка/бежевый-елка.png',
          color: 'beige',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Венок',
          url: '/img/носки/картинки/венок.png',
          sock_url: '/img/носки/венок/бежевый-венок.png',
          color: 'beige',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Венок',
          url: '/img/носки/картинки/венок.png',
          sock_url: '/img/носки/венок/красный-венок.png',
          color: 'red',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Венок',
          url: '/img/носки/картинки/венок.png',
          sock_url: '/img/носки/венок/синий-венок.png',
          color: 'blue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Венок',
          url: '/img/носки/картинки/венок.png',
          sock_url: '/img/носки/венок/розовый-венок.png',
          color: 'pink',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Венок',
          url: '/img/носки/картинки/венок.png',
          sock_url: '/img/носки/венок/серый-венок.png',
          color: 'grey',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Леденец',
          url: '/img/носки/картинки/леденец.png',
          sock_url: '/img/носки/леденец/серый-леденец.png',
          color: 'grey',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Леденец',
          url: '/img/носки/картинки/леденец.png',
          sock_url: '/img/носки/леденец/красный-леденец.png',
          color: 'red',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Леденец',
          url: '/img/носки/картинки/леденец.png',
          sock_url: '/img/носки/леденец/синий-леденец.png',
          color: 'blue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Леденец',
          url: '/img/носки/картинки/леденец.png',
          sock_url: '/img/носки/леденец/бежевый-леденец.png',
          color: 'beige',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Леденец',
          url: '/img/носки/картинки/леденец.png',
          sock_url: '/img/носки/леденец/розовый-леденец.png',
          color: 'pink',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Носок',
          url: '/img/носки/картинки/носок.png',
          sock_url: '/img/носки/носок/розовый-носок.png',
          color: 'pink',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Носок',
          url: '/img/носки/картинки/носок.png',
          sock_url: '/img/носки/носок/красный-носок.png',
          color: 'red',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Носок',
          url: '/img/носки/картинки/носок.png',
          sock_url: '/img/носки/носок/синий-носок.png',
          color: 'blue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Носок',
          url: '/img/носки/картинки/носок.png',
          sock_url: '/img/носки/носок/серый-носок.png',
          color: 'grey',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Носок',
          url: '/img/носки/картинки/носок.png',
          sock_url: '/img/носки/носок/бежевый-носок.png',
          color: 'beige',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
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
