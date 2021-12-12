module.exports = (apiRoutes) => {
  require('./productRoutes')(apiRoutes)
  require('./priceListRoutes')(apiRoutes)
}
