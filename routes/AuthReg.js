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
    req.session.userId = user.id;
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
    // то, что поподает в <form> является req.boby
    const { email } = req.body; // возьмет email от input
    const { password } = req.body; // возьмет password от input

    const user = await db.User.findOne({
      raw: true,
      where: { email },
    }); // объявлю юзера который будет искаться в БД
    // console.log(user);

    if (!user) {
      res.status(404);
      res.json({
        messege: 'Пользователя с таким email и паролем не существует!',
      });
    }

    const isSame = await bcrypt.compare(password, user.password);
    // res.json(isSame); // проверим тру или фалсе

    if (email === user.email && isSame) {
      // req.session - объект. В случает совпадения почты и пароля создается сессия
      // req.session присваеваем ключ userID, значением которого будет id текучего юзера

      req.session.userId = user; // это сессия
      // res.json({ status: 'ok' }); посмотрим статус
      res.redirect('/');
      // res.write('<script>window.location.href = "/"</script>');
      // res.end();
    }
  } catch (error) {
    // console.log(error);
    res
      .status(500) // покажет статус в случае ошибки на стороне БД
      .json({ messege: error.messege });
  }
});
// routerAuthReg.post('/login', async (req, res) => {
//   const hasLogin = Boolean(req.body.name);
//   const hasPassword = Boolean(req.body.password);

//   if (!hasLogin || !hasPassword) {
//     res.status(400).json({ error: 'Введите логин или пароль' });
//     return;
//   }
//   let user;
//   try {
//     user = await db.User.findOne({
//       where: {
//         name: req.body.name,
//         email: req.body.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//     return;
//   }

//   if (!user) {
//     res
//       .status(400)
//       .json({ error: 'Нет пользователя с таким логином или паролем' });
//     return;
//   }
//   const rawPassword = req.body.password;
//   const hashedPassword = user.password;
//   const isSame = await bcrypt.compare(rawPassword, hashedPassword);
//   if (!isSame) {
//     res
//       .status(400)
//       .json({ error: 'Нет пользователя с таким логином или паролем' });
//     return;
//   }
//   req.session.userId = user.id;
//   res.redirect('/home');
// });

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
