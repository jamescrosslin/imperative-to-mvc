const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

app
  .route('/')
  .get((request, response) => response.send('This is my app yall!'))
  .post((req, res) => {
    console.log('Hitting our post');
  });

app.listen(3000, () => console.log('Running on port 3000'));
