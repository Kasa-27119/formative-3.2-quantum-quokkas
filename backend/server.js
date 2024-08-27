// require dotenv
require('dotenv').config()

// initial server setup
const express = require('express')
const app = express()
const port = 4000

// mongoose & credentials
const mongoose = require('mongoose')
const mongoUsername = process.env.MONGO_DB_USERNAME
const mongoPassword = process.env.MONGO_DB_PASSWORD

// mongo connection string
const mongoURI = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.ibonmsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// home express route
app.get('/', (req, res) => {
    res.send('this is your express server')
})

// listen for changes 
app.listen(port, () => {
    console.log(`express server is running at http://localhost:${port}`)
})

// connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => {
        console.log('connected to MongoDB Atlas')
    })
    .catch((err) => {
        console.error('error connecting to MongoDB Atlas', err)
    })
