const bcrypt = require('bcrypt');
const UserRouter = require('express').Router();
const ApiError = require('../Error/ApiError');
const db = require('../db/models');

const LoginPage = require('../views/LoginPage');
const RegPage = require('../views/RegPage');
//const { useCallback } = require('react');

UserRouter.get('/login', async (req, res) => {
  res.renderComponent(LoginPage);
});

UserRouter.post('/login', async (req, res) => {
  const user = await db.User.findOne({
    where: { email: req.body.email },
  });

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    req.session.usedId = user.id;
    return res.json({ status: true });
  }
  return res.json({
    status: 'error',
    message: 'Неправильный адрес почты или пароль',
  });
});

UserRouter.get('/register', async (req, res) => {
  res.renderComponent(RegPage);
});

UserRouter.get('/logout', async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error(error);
    } else {
      res.clearCookie('user_sid');
      res.redirect('/');
    }
  });
});

module.exports = UserRouter;
