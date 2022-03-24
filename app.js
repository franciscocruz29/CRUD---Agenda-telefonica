const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('tiny'))
app.use(express.json())

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

const generateId = () => {
  const maxId = Math.floor(Math.random() * 999999999999);
  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const body = request.body
 
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "Name or number is missing",
    });
  } else if (people.find((n) => n.name === body.name)) {
    return response.status(400).json({
      error: "Name must be unique",
    });
  }
  
  let person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }

  people = people.concat(person)

  response.json(person)
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));