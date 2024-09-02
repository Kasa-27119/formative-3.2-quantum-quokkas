// require dotenv
require('dotenv').config()
// cors
const cors = require('cors')

// initial server setup
const express = require('express')
const app = express()
const port = 4000

// import routes
const projectsRoutes = require('./routes/projects')
const userRoutes = require('./routes/user')

// use json with express
app.use(express.json());

// allowing cross origin
app.use(cors())

// log out path + method of each request
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// attach routes to app
app.use('/api/projects/', projectsRoutes);
app.use('/api/user', userRoutes);
app.use('/public/uploads', express.static('public/uploads'));

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
