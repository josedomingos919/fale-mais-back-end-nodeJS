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

module.exports = { priceValidation }
