const productController = require('../controllers/productController')
const {
  productMiddlewares: { idValidation, productValidation },
} = require('./../middlewares')

module.exports = (apiRoutes) => {
  apiRoutes.post('/product', productValidation, productController.add)

  apiRoutes.get('/product', productController.getAll)

  apiRoutes.get('/product/:id', idValidation, productController.getOne)

  apiRoutes.put('/product/edit/:id', idValidation, productController.update)

  apiRoutes.delete('/product/:id', idValidation, productController.destroy)
}
