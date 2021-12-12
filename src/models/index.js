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

const Product = require('./productModel.js')(sequelize, DataTypes)
const PriceList = require('./priceList.js')(sequelize, DataTypes)

const db = {
  Sequelize,
  sequelize,
  Product,
  PriceList,
}

db.sequelize.sync({ force: false }).then(() => {
  console.log('yes re-sync done!')
})

module.exports = db
