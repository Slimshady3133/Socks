/* eslint-disable comma-dangle */
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate({ BasketSock, FavoriteSock, User }) {
      Sock.BoughtBy = Sock.belongsToMany(User, {
        foreignKey: 'sock_id',
        through: BasketSock,
      });
      Sock.FavoriteSock = Sock.hasMany(FavoriteSock, { foreignKey: 'sock_id' });
    }
  }
  Sock.init(
    {
      color: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      pattern: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      type_sock: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      size: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      background_color: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Sock',
    }
  );
  return Sock;
};
