const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Person = require('./models/person')


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('build'));


const formatPerson = (person) => {
    return {
        name: person.name,
        number: person.number,
        id: person._id
    }
}



app.get('/api/persons', (request, response) => {
    Person
        .find({})
        .then(persons => {
            response.json(persons.map(formatPerson))
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
        .catch(error => {
            response.status(400).send({error: `no ${id} found`})
        })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = (request.params.id)
    Person
        .findByIdAndRemove(id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => {
            response.status(400).send({error: 'malformatted id'})
        })
})

const generateId = () => {
    let random = Math.random()+1
    return parseInt(random*10000)
}

app.post('/api/persons', (request, response) => {
    const person = new Person(request.body)

    if (person === undefined) {
        return response.status(400).json({error: 'content missing'})
    }

    person
        .save()
        .then(savedPerson => {
            response.json(formatPerson(savedPerson))
        })
    /*
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