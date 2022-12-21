/* eslint-disable comma-dangle */
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FavoriteSock extends Model {
    static associate({ User, Sock }) {
      FavoriteSock.User = FavoriteSock.belongsTo(User, {
        foreignKey: 'user_id',
      });
      FavoriteSock.Sock = FavoriteSock.belongsTo(Sock, {
        foreignKey: 'sock_id',
      });
    }
  }
  FavoriteSock.init(
    {
      sock_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
      },
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'FavoriteSock',
    }
  );
  return FavoriteSock;
};
