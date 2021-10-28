const express = require('express')
const os = require('os')

const app = express()

app.get('/', (req, res) => {
  res.send(`hello from ${os.hostname()}`)
})

app.listen(process.env.API_PORT, () => {
  console.log(`API listening on ${process.env.API_HOST_PORT}`)
})