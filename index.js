const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')


app.use(express.static('build'))
app.use(cors())
app.use(express.json())
morgan.token('body', req => JSON.stringify(req.body))
app.use(morgan('tiny'))
app.use(morgan(':body'))


let persons = [
    {
        name : "Art Hellas",
        number : "454545454",
        id : 1
    },
    {
        name : "Ada Lovelace",
        number : "456457664587",
        id : 2
    },
    {
        name : "Sam",
        number : "488666",
        id : 3
    }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if (persons) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})


const generateId = () => Math.random()


app.post('/api/persons', (req, res) => {

  if (!req.body.name || !req.body.number) {
      return res.status(400).json({
        error: 'name and number must be defined'
      })
  }

  if (persons.filter(person => req.body.name === person.name).length > 0) {
      return res.status(400).json({
        error: 'name must be unique'
      })
  }

  const person = {
    name: req.body.name,
    number: req.body.number,
    id: generateId()
  }

  persons = persons.concat(person)

  res.json(person)
})

app.get('/info', (req,res) => {
    date = new Date()
    res.send(`<div>Phonebook has info for ${persons.length} people</div>
            <p>${date}</p>`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
