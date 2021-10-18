const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//Middlewares
app.use(cors())
app.use(bodyParser.json())

//import routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)


//Routes
app.get('/', (req, res) => {
    res.send('We are on home')
})



//connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to db')
})
//Start listening to the server
app.listen(3000)