const { PriceList, Product } = require('../models')

const add = async (req, res) => {
  const { origin, destination, tariff } = req.body

  const response = await PriceList.create({
    origin,
    destination,
    tariff,
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
  const { id } = req.params

  const response = await PriceList.update(req.body, {
    where: { id },
  })

  res.status(200).send(response)
}

const destroy = async (req, res) => {
  const { id } = req.params

  await PriceList.destroy({
    where: {
      id,
    },
  })

  res.status(200).send({
    message: 'Product was deleted!...',
  })
}

const calcPlanCost = async (req, res) => {
  const { origin, destination, duration, planId } = req.body

  const selectedPrice = await PriceList.findOne({
    where: {
      origin,
      destination,
    },
  })

  const selectedPlan = await Product.findOne({
    where: {
      id: planId,
    },
  })

  let totalWithTolkMore = 0
  let totalWithOutTolkMore = duration * selectedPrice.tariff

  let minutesOut = duration - selectedPlan.maxMinute
  minutesOut = minutesOut > 0 ? minutesOut : 0

  if (minutesOut > 0) {
    totalWithTolkMore = minutesOut * selectedPrice.tariff
    totalWithTolkMore += totalWithTolkMore * 0.1
    totalWithTolkMore = parseFloat(totalWithTolkMore).toFixed(2)
  }

  const response = {
    origin,
    duration,
    minutesOut,
    destination,
    totalWithTolkMore,
    totalWithOutTolkMore,
    plan: selectedPlan,
    price: selectedPrice,
  }

  res.status(200).send(response)
}

module.exports = {
  add,
  getAll,
  getOne,
  update,
  destroy,
  calcPlanCost,
}
