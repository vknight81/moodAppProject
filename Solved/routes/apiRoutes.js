var express = require("express");

var quotesController = require("../controllers/quotesController");
var userController = require("../controllers/userController");

var router = new express.Router();

// Get all quotes (or optionally a specific quote with an id)
router.get("/quotes/:id?", quotesController.index);
// Create a new quote using data passed in req.body
router.post("/quotes", quotesController.create);
// Update an existing quote with a specified id param, using data in req.body
router.patch("/quotes/:id", quotesController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/quotes/:id", quotesController.destroy);
// Get all users (or optionally a specific quote with an id)
router.get("/users/:id?", userController.index);
// Create a new user using data passed in req.body
router.post("/users", userController.create);
// Update an existing quote with a specified id param, using data in req.body
router.patch("/users/:id", userController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/users/:id", userController.destroy);


module.exports = router;
