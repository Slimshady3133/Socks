/* eslint-disable comma-dangle */
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BasketSock extends Model {
    static associate({ Sock }) {
      BasketSock.Sock = BasketSock.belongsTo(Sock, { foreignKey: 'sock_id' });
    }
  }
  BasketSock.init(
    {
      sock_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'BasketSock',
    }
  );
  return BasketSock;
};
