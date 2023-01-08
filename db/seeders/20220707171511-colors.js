module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Colors',
      [
        {
          url: '/img/носки/цвета/бежевые.png',
          color: 'beige',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/img/носки/цвета/красные.png',
          color: 'red',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/img/носки/цвета/серые.png',
          color: 'grey',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/img/носки/цвета/розовые.png',
          color: 'pink',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/img/носки/цвета/голубые.png',
          color: 'blue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Colors', null, {});
  },
};
