const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path')
const app = express()
const blogs = require('./api/blogs') 
const port = 3001
 
var hbs = exphbs.create({defaultLayout: 'main'});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



// use blogs file for routing
// app.use('/', require(path.join(__dirname,'routes/blog')))

// app.get('/', (req,res) => {
//     res.send('Home page')
// })


app.get('/', function (req, res) {
    res.render('home');
});

app.get('/blogs', function (req, res) {
    res.render('blogs', {
        blogs: blogs
    });
});

app.get('/blogs/:slugs', function (req, res) {
    console.log(req.params.slugs)
    blogPost = blogs.filter((e) => {
        return e.slugs == req.params.slugs
    })
    // console.log(blogPost)
    res.render('post', {title : blogPost[0].title, content: blogPost[0].content});
});


app.listen(port, () => {
    console.log(`BlogDeck is listening on port ${port}`)
})