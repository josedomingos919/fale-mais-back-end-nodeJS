const {
  DB,
  USER,
  PASSWORD,
  HOST: host,
  dialect,
  pool,
} = require('../config/dbConfig')

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host,
  dialect,
  pool,
  operatorsAliases: false,
})

sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected...`)
  })
  .catch((err) => {
    console.log(`Error: ${err}`)
  })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize, DataTypes)
db.priceList = require('./priceList.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false }).then(() => {
  console.log('yes re-sync done!')
})

module.exports = db
