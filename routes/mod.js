const homeRouter = require('express').Router();

const HomePage = require('../views/HomePage');

homeRouter.get('/', (req, res) => {
  res.renderComponent(HomePage);
});

module.exports = homeRouter;
