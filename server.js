// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Initialize Express
var app = express();

// Configure app with morgan and body parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Static file support with public folder
app.use(express.static("public"));

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;


// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://admin:codingrocks@ds023664.mlab.com:23664/reactlocate");

//log any mongoose connection to db
var db = mongoose.connection;

//Log any mongoose errors
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

// Log a success message when we connect to our mongoDB collection with no issues
db.once("open", function() {
  console.log("Mongoose connection successful.");
});
// -------------------------------------------------


//Routes

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/login.html");
});
// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {
  // We will find all the records, sort it in descending order, then limit the records to 5
  History.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {
  // We use the "Example" class we defined above to check our req.body against our user model
  var user = new Example(req.body);
  // With the new "Example" object created, we can save our data to mongoose
  // Notice the different syntax. The magic happens in userModel.js
  user.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise, send the new doc to the browser
    else {
      res.send(doc);
    }
  });
});
// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});