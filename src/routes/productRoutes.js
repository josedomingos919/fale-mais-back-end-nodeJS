const productController = require('../controllers/productController')

const {
  validationMiddleware: { idValidation },
  productMiddleware: { productValidation },
} = require('./../middlewares')

module.exports = (apiRoutes) => {
  apiRoutes.post('/product', productValidation, productController.add)

  apiRoutes.get('/product', productController.getAll)

  apiRoutes.get('/product/:id', idValidation, productController.getOne)

  apiRoutes.put('/product/:id', idValidation, productController.update)

  apiRoutes.delete('/product/:id', idValidation, productController.destroy)
}
