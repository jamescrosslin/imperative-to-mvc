const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(logger('dev'));

app.use(express.json());

app.set('view engine', 'ejs');

app.route('/').get((request, response) => response.send('Welcome to my api!'));

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.use((err, req, res, next) => {
  const errors = err.validationErrors || err.errors || ['No further information'];
  res.status(err.status || 500).json({
    message: err.message,
    error: errors,
  });
});

app.listen(3000, () => console.log('Running on port 3000'));
