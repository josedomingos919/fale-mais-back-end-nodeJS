const express = require('express')
const cors = require('cors')

const app = express()

var corsOptions = {
  origin: 'https://localhost:8081',
}

// middlewares

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// test

app.get('/', (req, res) => {
  res.json({ message: 'teste' })
})

// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
