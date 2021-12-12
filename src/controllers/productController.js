const { Product } = require('../models')

const add = async (req, res) => {
  const { name, maxMinute, percentageAdd, price } = req.body

  const response = await Product.create({
    name,
    price,
    maxMinute,
    percentageAdd,
  })

  res.status(200).send(response)
}

const getAll = async (req, res) => {
  const productsResponse = await Product.findAll()

  res.status(200).send(productsResponse)
}

const getOne = async (req, res) => {
  const { id } = req.params

  const response = await Product.findOne({
    where: {
      id,
    },
  })

  res.status(200).send(response)
}

const update = async (req, res) => {
  const { id } = req.params

  const response = await Product.update(req.body, {
    where: { id },
  })

  res.status(200).send(response)
}

const destroy = async (req, res) => {
  const { id } = req.params

  await Product.destroy({
    where: {
      id,
    },
  })

  res.status(200).send({
    message: 'Product was deleted!...',
  })
}

module.exports = {
  add,
  update,
  destroy,
  getAll,
  getOne,
}
