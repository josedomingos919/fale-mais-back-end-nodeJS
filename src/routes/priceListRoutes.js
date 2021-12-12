const priceListController = require('../controllers/priceListController')

const {
  validationMiddleware: { idValidation },
  priceListMiddleware: { priceValidation, calcPlanCostValidation },
} = require('./../middlewares')

module.exports = (apiRoutes) => {
  apiRoutes.post('/price', priceValidation, priceListController.add)

  apiRoutes.get('/price', priceListController.getAll)

  apiRoutes.get('/price/:id', idValidation, priceListController.getOne)

  apiRoutes.put('/price/:id', idValidation, priceListController.update)

  apiRoutes.delete('/price/:id', idValidation, priceListController.destroy)

  apiRoutes.post(
    '/price/calc',
    calcPlanCostValidation,
    priceListController.calcPlanCost,
  )
}
