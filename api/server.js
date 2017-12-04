const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())

server.use('/', [
  require('./routes/rainfall')
])

server.listen(3000, (error) => {
  if (error) {

  }
  else {

  }
  console.log('Server started at port 3000')
})