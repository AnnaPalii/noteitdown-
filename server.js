var express = require("express");

// Creating an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Provide routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// Start server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
