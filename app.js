const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

app.use(express.json());

app.set('view engine', 'ejs');

app.route('/').get((request, response) => response.render('feed', { title: 'Root route' }));

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.route('/api').post((req, res) => {
  console.log(req.body);
  res.json({ message: 'message received, homie' });
});

app.listen(3000, () => console.log('Running on port 3000'));
