const express = require('express');
const logger = require('morgan');

const posts = ['This is the post I want', 'This is also a post that I want'];

const app = express();

app.use(logger('dev'));

app.use(express.json());

app.set('view engine', 'ejs');

app.route('/').get((request, response) => response.render('../feed', { title: 'Root route' }));

app.get('/posts', (req, res) =>
  res.render('../posts.ejs', {
    posts,
  }),
);

app.post('/posts', (req, res) => {
  posts.push(req.body.post);
  res.status(201).send();
});

app.route('/api').post((req, res) => {
  console.log(req.body);
  res.json({ message: 'message received, homie' });
});

app.listen(3000, () => console.log('Running on port 3000'));
