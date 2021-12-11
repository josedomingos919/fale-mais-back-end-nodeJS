const db = require('../models')

const PriceList = db.priceList

const add = async (req, res) => {
  const { name, maxMinute, percentageAdd, price } = req.body

  const response = await PriceList.create({
    name,
    price,
    maxMinute,
    percentageAdd,
  })

  res.status(200).send(response)
}

const getAll = async (req, res) => {
  const response = await PriceList.findAll()
  res.status(200).send(response)
}

const getOne = async (req, res) => {
  const { id } = req.params

  const response = await PriceList.findOne({
    where: {
      id,
    },
  })

  res.status(200).send(response)
}

const update = async (req, res) => {
  const { id } = req.query

  if (!id) {
    res.status(401).send({
      error: true,
      message: 'Eperava receber o id',
    })
    return
  }

  const response = await PriceList.update(req.body, {
    where: { id },
  })

  res.status(200).send(response)
}

const destroy = async (req, res) => {
  const { id } = req.query

  await PriceList.destroy({
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
