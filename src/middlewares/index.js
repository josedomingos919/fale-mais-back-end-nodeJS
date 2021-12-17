const authMiddleware = require('./authMiddleware')
const productMiddleware = require('./productMiddleware')
const priceListMiddleware = require('./priceListMiddleware')
const validationMiddleware = require('./validationMiddleware')

module.exports = {
  authMiddleware,
  productMiddleware,
  priceListMiddleware,
  validationMiddleware,
}
