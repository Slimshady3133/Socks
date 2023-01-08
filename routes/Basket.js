const renderBasketRouter = require('express').Router();
const { User, UserPicture, Favourite } = require('../db/models');

const Basket = require('../views/Basket');
const Favourites = require('../views/Favorites');

renderBasketRouter.get('/basket', async (req, res) => {
  const socks = await User.findAll({
    raw: true,
    where: {
      id: req.session.userId.id,
    },
    include: [User.Picture],
  });
  const user = await User.findOne({
    raw: true,
    where: {
      id: req.session.userId.id,
    },
  });
  res.renderComponent(Basket, { socks, user });
});

renderBasketRouter.delete('/basket/:id', async (req, res) => {
  const { id } = req.params;
  await UserPicture.destroy({
    where: {
      picture_id: id,
    },
  });
  res.redirect('/');
});

renderBasketRouter.get('/like', async (req, res) => {
  const socksLike = await Favourite.findAll({
    raw: true,
    where: {
      user_id: req.session.userId.id,
    },
    include: [Favourite.Picture],
  });

  const user = await User.findOne({
    raw: true,
    where: {
      id: req.session.userId.id,
    },
  });
  res.renderComponent(Favourites, { socksLike, user });
});

renderBasketRouter.delete('/like/:id', async (req, res) => {
  const { id } = req.params;
  await Favourite.destroy({
    where: {
      picture_id: id,
    },
  });
  res.json({ status: 'ok' });
});

module.exports = renderBasketRouter;
