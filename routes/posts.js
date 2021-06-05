const { Router } = require('express');
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  'dialect': 'sqlite',
  'storage': 'development.db',
});

const { Model } = require('sequelize');

class Post extends Model {}

Post.init(
  {
    post: Sequelize.DataTypes.TEXT,
  },
  { sequelize },
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established');
    try {
      await sequelize.sync({ force: true });
      for (let post in posts) {
        await Post.create({ post });
      }
      console.log('Sync succeeded');
    } catch (err) {
      console.log("Database couldn't be synced", err);
    }
  } catch (err) {
    console.log("Database couldn't be authenticated.", err);
  }
})();

const posts = ['This is the post I want', 'This is also a post that I want'];

const router = Router();

router.get('/', async (req, res) => {
  const posts = await Post.findAll();
  res.render('posts', { posts });
});
const postController = require('../controller/posts');
router.post('/', postController.postPost);

module.exports = router;
