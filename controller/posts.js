module.exports = {
  postPost: async (req, res) => {
    await Post.create(req.body.post);
    res.status(201).send();
  },
};
