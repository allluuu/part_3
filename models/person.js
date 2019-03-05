const mongoose = require('mongoose')

const url = 'mongodb+srv://user-aleksi:TurunYliopisto@mobile-and-web-part3-db-wlthn.mongodb.net/test?retryWrites=true'


mongoose.connect(url, { useNewUrlParser: true }, function (err) {
    if (err) throw err;
    console.log('connected')
})

let db = mongoose.connection

const Person = mongoose.model('Person', {
    name: String,
    number: String,
    id: String
})

module.exports = Person