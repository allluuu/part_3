const mongoose = require('mongoose')

const url = 'mongodb+srv://user-aleksi:TurunYliopisto@mobile-and-web-part3-db-wlthn.mongodb.net/test?retryWrites=true'


mongoose.connect(url, { useNewUrlParser: true }, function (err) {
    if (err) throw err;
    console.log('connected')
})

let db = mongoose.connection

const Person = mongoose.model('Person', {
    name: String,
    number: String
})

const person = new Person({
    name: process.argv[2],
    number: process.argv[3]
})

if (process.argv[2]) {
    person
        .save()
        .then(response => {
            console.log(`adding person ${process.argv[2]} number ${process.argv[3]} to the directory`)
            db.close()
        })
} else {
    Person
        .find({})
        .then(result => {
            console.log('phonebook:')
            result.forEach(person => {

                console.log(person.name, person.number)
            })
            db.close()
        })

}

