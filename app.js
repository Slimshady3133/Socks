require('@babel/register');

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const path = require('path');
const session = require('express-session');
const db = require('./db/models');
const Home = require('./routes/Home');
const AuthReg = require('./routes/AuthReg');
const CreateSocks = require('./routes/User');

const errorHandler = require('./middlewaare/errorHandler');
const ssr = require('./middlewaare/ssr');

const sessionCongig = require('./config/sessions');

app.use(ssr);
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionCongig));

app.use(errorHandler);
app.use('/', Home);
app.use('/auth', AuthReg);
app.use('/user', CreateSocks);

const PORT = process.env.PORT ?? 3000;

const start = async () => {
  try {
    await db.sequelize.authenticate();
    // await db.sequelize.drop();
    await db.sequelize.sync();
    // await db.sequelize.close();
    app.listen(PORT, () => {
      console.log(`*** Server started at ${PORT} port ***`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
