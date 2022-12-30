const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Picture }) {
      Favourite.User = Favourite.belongsTo(User, {
        foreignKey: 'user_id',
      });
      Favourite.Picture = Favourite.belongsTo(Picture, {
        foreignKey: 'picture_id',
      });
    }
  }
  Favourite.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    picture_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pictures',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Favourite',
    tableName: 'Favourites',
  });
  return Favourite;
};
