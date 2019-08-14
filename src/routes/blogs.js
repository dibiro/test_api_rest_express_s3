var express = require('express');
var router = express.Router();
const { Blog } = require('../sequelize')

/* GET blogs listing. */
router.post('/', (req, res) => {
  Blog.create(req.body)
      .then(blogs => res.json(blogs))
})
// get all blogs
router.get('/', (req, res) => {
  Blog.findAll().then(blogs => res.json(blogs))
})

// get blog
router.get('/:id', (req, res) => {
  var id = req.params.id;
  Blog.findByPk(id).then(blog => res.json(blog))
})

// put blog
router.put('/:id', (req, res) => {
  var id = req.params.id;
  Blog.findByPk(id).then(blog => blog.update({
    ...req.body
  }).then(() => Blog.findByPk(id).then(blogUdate => res.json(blogUdate))))
})

// put delete
router.delete('/:id', (req, res) => {
  var id = req.params.id;
  Blog.findByPk(id).then(blog => {blog.destroy(); res.json({blog: blog, done: true})})
})

module.exports = router;
