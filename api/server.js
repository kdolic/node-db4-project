const express = require('express')
const helmet = require('helmet')

const recipeRouter = require('./recipes/recipe-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use('/api/recipes', recipeRouter)

server.get("/", (req, res) => {
    res.json({ message: "API Running"})
})


module.exports = server