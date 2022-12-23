const router = require('express').Router();

const Home = require('../views/Home');

router.get('/', (req, res) => {
  res.renderComponent(Home);
});

module.exports = router;
