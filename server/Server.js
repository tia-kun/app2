const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const cors = require('cors') //allows web browsers to make requests to a different domain/origin than the one serving the current web page
const routes = require('./routes/todoRoute')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MONGODB'))
    .catch((err) => console.log(err))

app.use(routes)
app.listen(PORT, () => console.log(`Listening on ${PORT}`))