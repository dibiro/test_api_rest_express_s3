var express = require('express');
var router = express.Router();
const { User } = require('../sequelize')

/* GET users listing. */
router.post('/', (req, res) => {
  User.create(req.body)
      .then(users => res.json(users))
})
// get all users
router.get('/', (req, res) => {
  User.findAll().then(users => res.json(users))
})

// get user
router.get('/:id', (req, res) => {
  var id = req.params.id;
  User.findByPk(id).then(user => res.json(user))
})

// put user
router.put('/:id', (req, res) => {
  var id = req.params.id;
  User.findByPk(id).then(user => user.update({
    ...req.body
  }).then(() => User.findByPk(id).then(userUdate => res.json(userUdate))))
})

// put delete
router.delete('/:id', (req, res) => {
  var id = req.params.id;
  User.findByPk(id).then(user => {user.destroy(); res.json({user: user, done: true})})
})

module.exports = router;
