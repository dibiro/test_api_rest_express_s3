var express = require('express');
var router = express.Router();
const { User } = require('../sequelize')

/* GET users listing. */
router.post('/', (req, res) => {
  User.create(req.body)
      .then(user => res.json(user))
})
// get all users
router.get('/', (req, res) => {
  User.findAll().then(users => res.json(users))
})

module.exports = router;
