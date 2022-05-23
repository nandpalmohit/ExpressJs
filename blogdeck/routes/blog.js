const express = require("express");
const path = require("path");
const blogs = require("../api/blogs");
const router = express.Router();

const blogdata = require("../models/blogschema");

var bodyParser = require("body-parser");
var multer = require("multer");

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// get index.html as index page of server
router.get("/", function (req, res) {
  res.render("home");
});

// get all data in blogs page
router.get("/blogs", function (req, res) {
  res.render("blogs", {
    blogs: blogs,
  });
});

// get data from slugs
router.get("/blogs/:slugs", function (req, res) {
  console.log(req.params.slugs);
  blogPost = blogs.filter((e) => {
    return e.slugs == req.params.slugs;
  });
  // console.log(blogPost)
  res.render("post", {
    title: blogPost[0].title,
    content: blogPost[0].content,
  });
});


// create a new blogs
router.get("/blog/create", function (req, res) {
  res.render("createpost");
});

// insert data in Mongoose
router.post("/blog/create", urlencodedParser, async (req, res) => {
  const createdBlog = new blogdata({
    title: req.body.title,
    content: req.body.content,
    slugs: req.body.slugs,
  });
  try {
    const a1 = await createdBlog.save();
    res.render('mongoblogs')
    // res.send(a1);
  } catch (err) {
    res.send(err);
  }
});

// fetch all data from Mongoose
router.get("/mongoblogs", async (req, res) => {
  try {
    const puredata = await blogdata.find().lean();
    res.render("mongoblogs", { data: puredata });
  } catch (err) {
    res.send("Error: " + err);
  }
});

// fetch all data from Mongoose with filter
router.get("/mongoblogs/:slugs", function (req, res) {
  console.log(blogdata)
  const requestedData = req.params.slugs;
  blogdata.find({ slugs: requestedData }).lean().exec(function(err, leads) {
    // res.send(leads);
    res.render("mongopost", {
      data: leads
    })
  });
});

module.exports = router;