const express = require('express');
const logger = require('morgan');
const ejs = require('ejs');

const app = express();

app.use(logger('dev'));

app.use(express.json());

app.set('view engine', 'ejs');

app.route('/').get((request, response) => response.render('../feed', { title: 'Root route' }));

app.get('/posts', (req, res) =>
  res.render('../posts.ejs', {
    posts: ['This is the post I want', 'This is also a post that I want'],
  }),
);

app.route('/api').post((req, res) => {
  console.log(req.body);
  res.json({ message: 'message received, homie' });
});

app.listen(3000, () => console.log('Running on port 3000'));
