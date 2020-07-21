const express = require('express')
const app = express()
const PORT = 10000
const db = require('./db')
// const ejs = require('ejs')

app.get('/', (req, res) => {
  res.render('index')
})
let realdb
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')
db.database().then((value) => {
  realdb = value
  app.listen(PORT, console.log(`listining at port
${PORT}`))
})
