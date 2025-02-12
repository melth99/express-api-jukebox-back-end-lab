express = require('express')
dotenv = require('dotenv')
dotenv.config()
mongoose = require('mongoose')
app = express()
morgan = require('morgan')
mongoose.connect(process.env.MONGODB_URI);
port = '3000'
mongoose.connection.on('connected',() => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.json())
app.use(morgan('dev'))

const trackRouter = require('./controllers/track')
/////routesa
app.use('/track',trackRouter)



app.listen(port,()=>{
console.log(`listening on port ${port}`)
})