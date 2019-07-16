const express = require("express");
const app = express()

// setting up the Public directory (for images, css and javascript (front-end) files)
app.use(express.static('public'))

// setting up hbs that enables us to use functions in our html and to use partials
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

// the routes
app.get("/", function(req,res) {
  res.render("home.hbs")
})

app.get("/gallery", function(req,res) {
  res.render("gallery.hbs")
})

app.get("/about", function(req,res) {
  res.render("about.hbs")
})

// the server
app.listen(3000)