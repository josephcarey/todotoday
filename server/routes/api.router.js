const express = require("express");

const router = express.Router();

const todoRouter = require("./todo.router");

// Routes
router.use("/todo", todoRouter);

// If we don't hit a route, API base
router.get("/", (req, res) => {
  // Send back user object from the session (previously queried from the database)
  console.log("in /api/ GET");
  res.send("This is a basic message from the server -- GET hit on /api/");
});

module.exports = router;
