const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let persons = [
        {
            "name": "Arto Hellas",
            "number": "040-123456",
            "id": 1
        },
        {
            "name": "Martti Tienari",
            "number": "040-123456",
            "id": 2
        },
        {
            "name": "Arto Järvinen",
            "number": "040-123456",
            "id": 3
        },
        {
            "name": "Lea Kutvonen",
            "number": "040-123456",
            "id": 4
        }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.filter(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})