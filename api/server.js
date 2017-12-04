const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())

server.listen(3000, (error) => {
  console.log('Server started at port 3000')
})