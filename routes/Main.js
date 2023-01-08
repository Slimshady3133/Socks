const router = require('express').Router();
const Home = require('../views/Home');

const { User, Favourite } = require('../db/models');

router.get('/', async (req, res) => {
  const { userId } = req.session;
  res.renderComponent(Home, { userId });
  const joinUser = await User.findOne({
    raw: true,
    where: {
      id: '1',
    },
    include: [User.Picture],
  });
  const joinFavUser = await Favourite.findAll({
    raw: true,
    where: {
      user_id: '1',
    },
    include: [Favourite.Picture],
  });
});

module.exports = router;
