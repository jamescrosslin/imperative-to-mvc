const { Router } = require('express');
const { getPosts, createPost } = require('../controller/posts');

const router = Router();

router.route('/').get(getPosts).post(createPost);

module.exports = router;
