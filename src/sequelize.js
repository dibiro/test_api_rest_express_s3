const Sequelize = require('sequelize')
const UserModel = require('./models/user')
const BlogModel = require('./models/blog')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database.sqlite',
})

const User = UserModel(sequelize, Sequelize)
// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
const Blog = BlogModel(sequelize, Sequelize)

Blog.belongsTo(User);

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  User,
  Blog
}