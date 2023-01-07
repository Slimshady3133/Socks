const homeRouts = require('express').Router();
const { Op } = require('sequelize');
const {
  Color,
  Picture,
  User,
  UserPicture,
  Favourite,
} = require('../db/models');

const Constructor = require('../views/Constructor');

homeRouts.get('/', async (req, res) => {
  const user = await User.findOne({
    raw: true,
    where: {
      id: req.session.userId.id,
    },
  });
  const pictures = [];
  const colors = await Color.findAll({ raw: true });

  const giftBox = await Picture.findOne({
    raw: true,
    where: {
      name: 'Подарок',
    },
  });

  const hat = await Picture.findOne({
    raw: true,
    where: {
      name: 'Шапка',
    },
  });
  const tree = await Picture.findOne({
    raw: true,
    where: {
      name: 'Елка',
    },
  });
  const christmasWreath = await Picture.findOne({
    raw: true,
    where: {
      name: 'Венок',
    },
  });
  const ChristmasLolipops = await Picture.findOne({
    raw: true,
    where: {
      name: 'Леденец',
    },
  });
  const Socks = await Picture.findOne({
    raw: true,
    where: {
      name: 'Носок',
    },
  });
  pictures.push(giftBox, hat, tree, christmasWreath, ChristmasLolipops, Socks);
  res.renderComponent(Constructor, { colors, pictures, user });
});

homeRouts.post('/color', async (req, res) => {
  const { color } = req.body;
  req.session.userColor = color;
  const { url } = await Color.findOne({
    raw: true,
    where: {
      color,
    },
  });

  res.json({ url });
});

homeRouts.post('/picture', async (req, res) => {
  const { name } = req.body;
  const picture = await Picture.findOne({
    raw: true,
    where: {
      [Op.and]: [{ name }, { color: req.session.userColor }],
    },
  });
  res.json({ url: picture.sock_url, id: picture.id });
});

homeRouts.post('/picture/:id', async (req, res) => {
  const { id } = req.params;
  const resBD = await Favourite.create({
    user_id: req.session.userId.id,
    picture_id: id,
  });
});

homeRouts.put('/picture/:id', async (req, res) => {
  const { id } = req.params;
  const resBD = await UserPicture.create({
    user_id: req.session.userId.id,
    picture_id: id,
  });
});
module.exports = homeRouts;
