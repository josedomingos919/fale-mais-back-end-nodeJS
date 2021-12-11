const db = require('../models')

const Product = db.products

const add = async (req, res) => {
  const { name, maxMinute, percentageAdd, price } = req.body

  const productResponse = await Product.create({
    name,
    price,
    maxMinute,
    percentageAdd,
  })

  res.status(200).send(productResponse)
}

const getAll = async (req, res) => {
  const productsResponse = await Product.findAll()

  res.status(200).send(productsResponse)
}

const getOne = async (req, res) => {
  const { id } = req.params

  const productResponse = await Product.findOne({
    where: {
      id,
    },
  })

  res.status(200).send(productResponse)
}

const update = async (req, res) => {
  const { id } = req.params

  const productResponse = await Product.update(req.body, {
    where: { id },
  })

  res.status(200).send(productResponse)
}

const destroy = async (req, res) => {
  const { id } = req.params

  await Product.destroy({
    where: {
      id,
    },
  })

  res.status(200).send('Product was deleted!...')
}

module.exports = {
  add,
  update,
  destroy,
  getAll,
  getOne,
}