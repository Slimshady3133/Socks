require('@babel/register');

require('dotenv').config();

const express = require('express');

const { sequelize } = require('./db/models');

const app = express();

const PORT = process.env.PORT ?? 3000;

sequelize.authenticate();

app.listen(PORT, () => {
  console.log(`*** Server started at ${PORT} port ***`);
});
