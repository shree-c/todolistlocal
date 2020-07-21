const mongodb = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const db = async () => {
  mongodb.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) { console.log(err) }
    console.log('connected to database')
    return client
  })
}

exports.database = db
