const {
  functions: { isEmpty },
} = require('../utilities')

const validateApiAccess = (req, res, next) => {
  const { ['x-app-key']: appKey } = req.headers

  if (isEmpty(appKey) || appKey !== process.env.API_KEY)
    res.status(401).send({
      error: true,
      message: 'Application unauthorized!',
    })
  else next()
}

module.exports = { validateApiAccess }
