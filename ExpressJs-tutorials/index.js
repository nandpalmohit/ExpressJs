const express = require('express')  // provide express package
const path = require('path')        // provide path 
const app = express()               // create app variable to use express
const port = 3000                   // provide port number 3000



// hello page
app.get('/hello', (req, res) => {
  // sends simple text
  res.send('This is Hello World Page !')
})

// to provide any static folder to middleware
// this folder will be run as an index file of your localserver
app.use(express.static(path.join(__dirname,"public")))

// to create middleware
const customMiddleware = (req,res,next) => {
  // send data in console
  // console.log(req)
}

// to use middleware
// you can check in console of your browser
// app.use(customMiddleware)

// about page
app.get('/about', (req, res) => {
  // send about.html file
  res.sendFile(path.join(__dirname, 'about.html'))
})

// profile page
app.get('/profile', (req, res) => {
  // pass data in JSON format
  res.json({"Mohit Nandpal" : "Frontend Developer"})
})

// profile page with arguments / parameters
app.get('/profile/:username', (req, res) => {
  // get paramter from URL with request object.
  res.send('Welcome Back,' + req.params.username)
})

// listing app on port number 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})