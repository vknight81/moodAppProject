var express = require("express");
var path = require("path");

var apiRoutes = require("./apiRoutes");

var router = new express.Router();

// Use the apiRoutes module for any routes starting with "/api"
router.use("/api", apiRoutes);

// Otherwise send all other requests to the index.html page
// React router will handle routing within the app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
