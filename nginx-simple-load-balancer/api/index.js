const express = require('express')
const os = require('os')
const keys = require('./keys')

const app = express()

app.get('/', (req, res) => {
  res.send(`hello from ${os.hostname()}`)
})

app.listen(keys.apiHostPort, () => {
  console.log(`API listening on ${keys.apiHostPort}`)
})