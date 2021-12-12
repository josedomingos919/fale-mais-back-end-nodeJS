const { PriceList, Product } = require('../models')

const {
  functions: { isEmpty },
} = require('../utilities')

const priceValidation = async (req, res, next) => {
  const { origin, destination, tariff } = req.body
  const errors = []

  if (isEmpty(origin)) {
    errors.push({
      error: true,
      field: 'origin',
      message: 'Required origin name!',
    })
  }

  if (isEmpty(destination)) {
    errors.push({
      error: true,
      field: 'destination',
      message: 'Required field destination!',
    })
  }

  if (isEmpty(tariff)) {
    errors.push({
      error: true,
      field: 'tariff',
      message: 'Required field tariff!',
    })
  }

  if (isEmpty(errors)) next()
  else res.status(400).send(errors)
}
const calcPlanCostValidation = async (req, res, next) => {
  const { origin, destination, duration = 0, planId = 0 } = req.body

  const errors = []

  if (isEmpty(origin)) {
    errors.push({
      error: true,
      field: 'origin',
      message: 'Required origin name!',
    })
  }

  if (isEmpty(destination)) {
    errors.push({
      error: true,
      field: 'destination',
      message: 'Required field destination!',
    })
  }

  if (!isEmpty(origin) && !isEmpty(destination)) {
    const selectedPrice = await PriceList.findOne({
      where: {
        origin,
        destination,
      },
    })

    if (isEmpty(selectedPrice))
      errors.push({
        error: true,
        field: ['origin', 'destination'],
        message: 'Price item not found!...',
      })
  }

  if (isEmpty(duration)) {
    errors.push({
      error: true,
      field: 'duration',
      message: 'Required field duration!',
    })
  } else if (duration < 0) {
    errors.push({
      error: true,
      field: 'duration',
      message: 'Field duration must be more then zero!',
    })
  }

  if (isEmpty(planId)) {
    errors.push({
      error: true,
      field: 'planId',
      message: 'Required field planId!',
    })
  } else if (planId < 0) {
    errors.push({
      error: true,
      field: 'planId',
      message: 'Field planId must be more then zero!',
    })
  } else {
    const selectedPlan = await Product.findOne({
      where: {
        id: planId,
      },
    })

    if (isEmpty(selectedPlan))
      errors.push({
        error: true,
        field: 'planId',
        message: 'Product not found...!',
      })
  }

  if (isEmpty(errors)) next()
  else res.status(400).send(errors)
}

module.exports = { priceValidation, calcPlanCostValidation }
