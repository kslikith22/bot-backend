require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const app = express()

const PORT = 8000

app.use(morgan('dev'))

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())



app.use('/api',require('./routes/routes'))



app.listen(PORT,()=>{
    console.log('server running on ',PORT)
})