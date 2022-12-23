const routerAuthReg = require('express').Router();

const bcrypt = require('bcrypt');

const Auth = require('../views/Auth');
const Reg = require('../views/Registration');
const Logout = require('../views/CreateSocks');

const db = require('../db/models');

routerAuthReg.get('/login', (req, res) => {
  res.renderComponent(Auth);
});

routerAuthReg.get('/register', (req, res) => {
  res.renderComponent(Reg);
});

routerAuthReg.post('/login', async (req, res) => {
  const hasLogin = Boolean(req.body.name);
  const hasPassword = Boolean(req.body.password);

  if (!hasLogin || !hasPassword) {
    res.status(400).json({ error: 'Введите логин или пароль' });
    return;
  }
  let user;
  try {
    user = await db.User.findOne({
      where: {
        name: req.body.name,
        email: req.body.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  if (!user) {
    res
      .status(400)
      .json({ error: 'Нет пользователя с таким логином или паролем' });
    return;
  }
  const rawPassword = req.body.password;
  const hashedPassword = user.password;
  const isSame = await bcrypt.compare(rawPassword, hashedPassword);
  if (!isSame) {
    res
      .status(400)
      .json({ error: 'Нет пользователя с таким логином или паролем' });
    return;
  }
  req.session.userId = user.id;
  res.redirect('/user');
});

routerAuthReg.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name || !email || !password) {
    res.status(400).json({
      error: 'Введите логин и пароль',
    });
    return;
  }
  const candidate = await db.User.findOne({ where: { name } });
  try {
    if (candidate) {
      res.status(400).json({
        error: 'Пользователь с таким Loginom уже существует',
      });
      return;
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await db.User.create({ name, email, password: hashPassword });
    req.session.userId = user.id;
    res.redirect('/');
    return;
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = routerAuthReg;
