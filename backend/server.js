// ininitial server setup
const express = require('express')
const app = express()
const port = 4000

// home express route
app.get('/', (req, res) => {
    res.send('this is your express server')
})

// listen for changes 
app.listen(port, () => {
    console.log(`express server is running at http://localhost:${port}`)
})