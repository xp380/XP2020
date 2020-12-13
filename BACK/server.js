const express = require('express');
const mongoose = require('mongoose');
const app = express()

//Database
mongoose.connect('mongodb://127.0.0.1:27017/Experience', {useNewUrlParser: true })
.then(() => console.log("Connected to database"))
.catch(err => console.log(err))

//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

//Controllers
const Control = require('./controllers/Control')

//Routes
app.post('/api/park/create', Control.create)
app.post('/api/park/update', Control.update)
app.get('/api/park/retrieve', Control.retrieve)
app.delete('/api/park/delete', Control.delete)
//Start Server