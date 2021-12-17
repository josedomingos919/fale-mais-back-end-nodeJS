const express = require('express')
const cors = require('cors')

const initializeRoute = require('./src/routes')
const dotenv = require('dotenv')
const apiRoutes = express.Router()

const {
  authMiddleware: { validateApiAccess },
} = require('./src/middlewares')

const {
  functions: { getAppPort, getCorsOptions },
} = require('./src/utilities')

// == start ==

dotenv.config()

const app = express()

app.use(express.json())

app.use(validateApiAccess)

initializeRoute(apiRoutes)

app.use('/api', apiRoutes)

app.use(cors(getCorsOptions()))

app.use(express.urlencoded({ extended: true }))

app.listen(getAppPort(), () => {
  console.log(`server is running on port ${getAppPort()}...`)
})
