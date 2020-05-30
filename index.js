require("dotenv").config()

const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const Person = require("./models/person")

app.use(cors())
app.use(express.json())
app.use(express.static("build"))
morgan.token("body", req => JSON.stringify(req.body))
app.use(morgan("tiny"))
app.use(morgan(":body"))

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: "unknown endpoint" })
}

const errorHandler = (error, request, response, next) => {
	console.error(error.message)

	if (error.name === "CastError") {
		return response.status(400).send({ error: "malformatted id" })
	}
	else if (error.name === "ValidationError") {
		return response.status(400).json({ error: error.message })
	}
	next(error)
}


app.get("/api/persons", (req, res) => {
	Person.find({}).then(persons => {res.json(persons)})
})

app.get("/api/persons/:id", (req, res, next) => {
	Person.findById(req.params.id)
		.then(p => {
			if (p) {
				res.json(p)
			} else {
				res.status(404).end()
			}
		})
		.catch(error => next(error))
})

app.delete("/api/persons/:id", (req, res, next) => {
	Person.findByIdAndRemove(req.params.id)
		.then( () => {
			res.status(204).end()
		})
		.catch(error => next(error))
})

app.post("/api/persons", (req, res, next) => {

	const person = new Person({
		name: req.body.name,
		number: req.body.number
	})

	person
		.save()
		.then(saved => {res.json(saved)})
		.catch(error => next(error))
})

app.put("/api/persons/:id", (req,res,next) => {

	const person = {
		name: req.body.name,
		number: req.body.number
	}
	Person.findByIdAndUpdate(req.params.id, person, { new: true })
		.then(updated => {
			res.json(updated)
		})
		.catch(error => next(error))
})


app.get("/info", (req,res) => {
	const date = new Date()
	Person.countDocuments()
		.then(
			nb => res.send(
				`<div>Phonebook has info for ${nb} people</div>
            <p>${date}</p>`)
		)

})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
