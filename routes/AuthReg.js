/* eslint-disable consistent-return */
const routerAuthReg = require('express').Router();
const bcrypt = require('bcrypt');

const Auth = require('../views/Auth');
const Reg = require('../views/Registration');

const db = require('../db/models');

routerAuthReg.get('/register', (req, res) => {
  res.renderComponent(Reg);
});

routerAuthReg.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
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
    res.redirect('/');
    return;
  } catch (error) {
    res.sendStatus(500);
  }
});

routerAuthReg.get('/login', (req, res) => {
  res.renderComponent(Auth);
});

routerAuthReg.post('/login', async (req, res) => {
  try {
    
    const { email } = req.body; 
    const { password } = req.body;

    const user = await db.User.findOne({
      raw: true,
      where: { email },
    }); 

    if (!user) {
      res.status(404);
      res.json({
        messege: 'Пользователя с таким email и паролем не существует!',
      });
    }

    const isSame = await bcrypt.compare(password, user.password);
    

    if (email === user.email && isSame) {
      

      req.session.userId = user; 
      res.redirect('/');
    }
  } catch (error) {
    res
      .status(500) 
      .json({ messege: error.messege });
  }
});
routerAuthReg.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res.clearCookie('user_sid');
    res.redirect('/');
  });
});

module.exports = routerAuthReg;
