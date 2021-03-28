const express = require('express')
const app = express()
app.use(express.json())    
app.use(express.urlencoded({extended: false}))
const PORT = 10000
const db = require('./db')
// const ejs = require('ejs')
const sanitize = require('sanitize-html')

app.get('/', (req, res) => {
  res.render('index')
})
app.post('/data', (req, res) => {
  console.log(req.body)
  //console.log(req)
  console.log(sanitize(req.body.da, {
    allowedTags : [],
    allowedAttributes : []
  }))
  res.send(sanitize(req.body.da, {
    allowedTags : [],
    allowedAttributes : []
  }))
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
