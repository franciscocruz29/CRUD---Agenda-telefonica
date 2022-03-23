const express = require('express')
const app = express()

let people = [
  {
  id: 1,
  name: "Arto Hellas",
  number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelance",
    number: "040-123456"
  },
  {
    id: 3,
    name: "Dan Abromov",
    number: "040-123456"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "040-123456"
  }
]

app.get('/api/persons', (request, response) => {
  response.json(people)
});

app.get('/info',(request, response) => {
  const date = new Date()
  response.send(`<p>Phonebook has info for ${people.length} people</p> <p>${date.toUTCString()}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  const person = people.find(per => per.id === Number(id))

  if(!person) {
    response.status(404).json({message: `Person not found with id: ${id}`})
  } else {
    response.json(person)
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  people = people.filter(person => person.id !== id);

  response.status(204).end()
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));