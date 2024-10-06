const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('SERVER is running...')
})
app.get('/name', (req, res) => {
  res.send('<h1>Chandan</h1>')
})
app.get('/start', (req, res) => {
  res.send('<h1>My 1st Javascript backend for learn deployment</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
