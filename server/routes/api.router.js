const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  // Send back user object from the session (previously queried from the database)
  console.log("in /api/ GET");
  res.send("This is a basic message from the server -- GET hit on /api/");
});

module.exports = router;
