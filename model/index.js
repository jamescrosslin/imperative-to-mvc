const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  'dialect': 'sqlite',
  'storage': 'development.db',
});

const posts = ['This is the post I want', 'This is also a post that I want'];

const { Model } = require('sequelize');

class Post extends Model {}

(async () => {
  await Post.init(
    {
      post: { type: Sequelize.DataTypes.TEXT },
    },
    { sequelize },
  );
  try {
    await sequelize.authenticate();
    console.log('Connection has been established');
    try {
      await sequelize.sync({ force: true });
      for (let post of posts) {
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

module.exports = { sequelize, Post };
