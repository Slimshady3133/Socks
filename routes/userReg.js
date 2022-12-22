const authRegRouter = require('express').Router();
const bcrypt = require('bcrypt');
const db = require('../db/models');
const RegPage = require('../views/RegPage');
authRegRouter.get('/login', async (req, res) => {
  res.renderComponent(RegPage);
});
authRegRouter.post('/login', async (req, res) => {
  const user = await db.User.findOne({ where: { email: req.body.email } });

  if (user) {
    return res
      .status(420)
      .json({ message: 'Этот электронный адрес уже используется' });
  }
  console.log(req.body);
  const newUser = await db.User.create({
    email: req.body.email,
    name: req.body.name,
    password: await bcrypt.hash(req.body.password, 10),
  });
  req.session.userId = newUser.id;
  res.redirect('/');
});

authRegRouter.post('/login', async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: { email: req.body.email },
    });
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        req.session.userId = user.id;
        res.status(200).json({ message: 'данные обработаны' });
      } else
        res
          .status(420)
          .json({ message: 'неправильно введен логин или пароль' });
    } else
      res.status(420).json({ message: 'неправильно введен логин или пароль' });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Извините, на сервере произошла ошибка, попробйте позже.',
    });
  }
});
module.exports = authRegRouter;
