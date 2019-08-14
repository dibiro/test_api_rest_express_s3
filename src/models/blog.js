module.exports = (sequelize, type) => {
  return sequelize.define('blog', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: type.STRING,
      img_url: type.STRING,
      body: type.STRING,
      author: type.INTEGER,
  })
}