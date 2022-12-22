require('@babel/register');

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const db = require('./db/models');

const app = express();
const path = require('path');
const session = require('express-session');

const errorHandler = require('./middlewaare/errorHandler');
const ssr = require('./middlewaare/ssr');

const sessionCongig = require('./config/sessions');

const sequelize = require('./db/models');
const UserRoute = require('./routes/user');
const authRegRouter = require('./routes/userReg')

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(session(sessionCongig));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(errorHandler);
app.use(ssr);


const PORT = process.env.PORT ?? 3000;

app.use('/auth', UserRoute);
app.use('/register', authRegRouter)
const start = async () => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    app.listen(PORT, () => {
      console.log(`*** Server started at ${PORT} port ***`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
