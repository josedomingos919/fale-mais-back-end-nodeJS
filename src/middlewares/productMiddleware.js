const {
  functions: { isEmpty },
} = require('../utilities')

const productValidation = async (req, res, next) => {
  const { name, maxMinute, price, percentageAdd } = req.body
  const errors = []

  if (isEmpty(name)) {
    errors.push({
      error: true,
      field: 'name',
      message: 'Required field name!',
    })
  }

  if (isEmpty(maxMinute)) {
    errors.push({
      error: true,
      field: 'maxMinute',
      message: 'Required field maxMinute!',
    })
  }

  if (isEmpty(price)) {
    errors.push({
      error: true,
      field: 'price',
      message: 'Required field price!',
    })
  }

  if (isEmpty(percentageAdd)) {
    errors.push({
      error: true,
      field: 'percentageAdd',
      message: 'Required field percentageAdd!',
    })
  }

  if (isEmpty(errors)) next()
  else res.status(400).send(errors)
}

module.exports = { productValidation }
