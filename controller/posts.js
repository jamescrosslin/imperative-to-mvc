const { Post } = require('../model');

module.exports = {
  getPosts: async (req, res) => {
    const posts = await Post.findAll();

    res.render('posts', { posts });
  },
  createPost: async (req, res) => {
    await Post.create(req.body);
    res.status(201).send();
  },
};
