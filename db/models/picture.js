const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Favourite }) {
      Picture.User = Picture.belongsToMany(User, {
        foreignKey: 'picture_id',
        otherKey: 'user_id',
        through: 'UserPicture',
      });
      Picture.Favourite = Picture.hasMany(Favourite, {
        foreignKey: 'picture_id',
      });
    }
  }
  Picture.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
    },
    url: {
      type: DataTypes.TEXT,
    },
    sock_url: {
      type: DataTypes.TEXT,
    },
    color: {
      type: DataTypes.TEXT,
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
    modelName: 'Picture',
    tableName: 'Pictures',
  });
  return Picture;
};
