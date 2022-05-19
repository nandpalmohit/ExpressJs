// const express = require('express')
// const path = require('path')
// const blogData = require('../api/blogs') 
// const router = express.Router()



// // get index.html as index page of server
// router.get('/', (req,res)=> {
//     res.sendFile(path.join(__dirname, '../views/index.html'))
// })

// // set routes as /blogs.
// router.get('/blogs', (req,res)=> {

//     blogData.forEach(e => {
//         // console.log(e.title);
//     });

//     res.sendFile(path.join(__dirname, '../views/blogs.html'))
// })

// // set routes as /blogs.
// router.get('/blogs/:slug', (req,res)=> {
// // console.log(req.params.slug)
//     post = blogData.filter((e) => {
//         return e.slugs == req.params.slug
//     })
//     // console.log(post)

//     res.sendFile(path.join(__dirname, '../views/post.html'))
// })

// module.exports = router;