const productController = require('../controllers/productController')
const { productMiddlewares } = require('./../middlewares')

module.exports = (apiRoutes) => {
  apiRoutes.post(
    '/product',
    productMiddlewares.productValidation,
    productController.addProduct,
  )

  apiRoutes.get('/product', productController.getProduct)

  apiRoutes.get('/product/all', productController.getAllProducts)

  apiRoutes.put('/product/edit', productController.updateProduct)

  apiRoutes.delete('/product/:id', productController.deleteProduct)

  apiRoutes.get('/product/published', productController.getPublishedProducts)

  apiRoutes.get('/product/test', (req, res) => {
    res.send('teste')
  })
}
