const {
  functions: { isEmpty },
} = require('../utilities')

const idValidation = async (req, res, next) => {
  const { id } = req.params

  if (isEmpty(id)) {
    res.status(401).send({
      error: true,
      field: 'id',
      message: 'Required field id',
    })
  } else next()
}

module.exports = { idValidation }
