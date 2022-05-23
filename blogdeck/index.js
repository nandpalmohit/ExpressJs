const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path')
const app = express()
var bodyParser = require('body-parser')
var multer = require('multer')
const blogs = require('./api/blogs') 
const port = 3001

const mongoose = require('mongoose')

const url = 'mongodb://localhost/blogdeck'

mongoose.connect(url, {
    useNewUrlParser:true
})

const conn = mongoose.connection

conn.on('open', function() {
    console.log('connected...')
})

 
var hbs = exphbs.create({defaultLayout: 'main'});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// use blogs file for routing
app.use(express.json())
app.use('/', require(path.join(__dirname,'routes/blog.js')))




app.listen(port, () => {
    console.log(`BlogDeck is listening on port ${port}`)
})