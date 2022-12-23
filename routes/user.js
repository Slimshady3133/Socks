const routerUser = require('express').Router();

const Logout = require('../views/CreateSocks');
const db = require('../db/models');

routerUser.get('/', (req, res) => {
  res.renderComponent(Logout);
});

routerUser.post('/', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res.clearCookie('user_sid');
    res.redirect('/');
  });
});
module.exports = routerUser;
