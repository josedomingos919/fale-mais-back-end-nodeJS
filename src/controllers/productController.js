const db = require('../models')

const Product = db.products

const addProduct = async (req, res) => {
  const { name, maxMinute, percentageAdd, price } = req.body

  const productResponse = await Product.create({
    name,
    price,
    maxMinute,
    percentageAdd,
  })

  res.status(200).send(productResponse)
}

const getAllProducts = async (req, res) => {
  const productsResponse = await Product.findAll()
  res.status(200).send(productsResponse)
}

const getProduct = async (req, res) => {
  const { id } = req.params

  const productResponse = await Product.findOne({
    where: {
      id,
    },
  })

  res.status(200).send(productResponse)
}

const updateProduct = async (req, res) => {
  const { id } = req.query

  if (!id) {
    res.status(401).send({
      error: true,
      message: 'Eperava receber o id',
    })
    return
  }

  const productResponse = await Product.update(req.body, {
    where: { id },
  })

  res.status(200).send(productResponse)
}

const deleteProduct = async (req, res) => {
  const { id } = req.params

  await Product.destroy({
    where: {
      id,
    },
  })

  res.status(200).send('Product was deleted!...')
}

const getPublishedProducts = async (req, res) => {
  const productsResponse = await Product.findAll({
    where: {
      published: true,
    },
  })

  res.status(200).send(productsResponse)
}

module.exports = {
  addProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getPublishedProducts,
}
