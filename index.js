const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')


//db url
const url = 'mongodb+srv://user-aleksi:TurunYliopisto@mobile-and-web-part3-db-wlthn.mongodb.net/test?retryWrites=true'


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('build'));

//connection to db
mongoose.connect(url, { useNewUrlParser: true }, function (err) {
    if (err) throw err;
    console.log('connected')
})

let db = mongoose.connection

const Person = mongoose.model('Person', {
    name: String,
    number: String
})




app.get('/api/persons', (request, response) => {
    Person
        .find({})
        .then(persons => {
            response.json(persons)
        })
})

app.get('/api/persons/:id', (request, response) => {
    const id = (request.params.id)
    Person.findById(id)
        .then(person => {
            if (person) {
                response.json(person)
            } else { response.status(404).end()}
        })
   /* used this before db
    const person = persons.filter(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    } */
})

app.delete('/api/persons/:id', (request, response) => {
    const id = (request.params.id)

    Person
        .findOneAndDelete(id, {findOneAndDelete: false})
        .then(person => {
            response.status(204).end()
            console.log(`person ${person.name} deleted`)
        })

    /*
    person = persons.filter(person => person.id !== id)

    persons = person

    response.status(204).end()*/
})

const generateId = () => {
    let random = Math.random()+1
    return parseInt(random*10000)
}

app.post('/api/persons', (request, response) => {

    const person = new Person(request.body)
    person.save((err, person) => {
        if (err) return next(err)
        response.json(person)
    })






    /*
    const body = request.body

    if (body.name === undefined) {
        return response.status(400).json({error: 'name missing'})
    }

    if (body.number === undefined) {
        return response.status(400).json({error: 'number missing'})
    }
    const person_list =persons.map(person => person.name)

    if (person_list.includes(body.name)){
        return response.status(400).json({error: 'name must be unique'})
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)

    response.json(person)*/

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})