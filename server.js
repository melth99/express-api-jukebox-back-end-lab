const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const app = express()
const morgan = require('morgan')
mongoose.connect(process.env.MONGODB_URI);
const port = '3000'
mongoose.connection.on('connected',() => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.json())
app.use(morgan('dev'))

const trackRouter = require('./controllers/track')
/////routesa
app.use('/tracks',trackRouter)



app.listen(port,()=>{
console.log(`listening on port ${port}`)
})