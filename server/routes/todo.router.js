const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {
  // Send back user object from the session (previously queried from the database)
  console.log("in /api/todo/ GET");
  pool
    .query(`SELECT * FROM "todo" order by id asc`)
    .then((results) => {
      console.log("results:");
      console.log(results.rows);
      res.send(results.rows);
    })
    .catch((error) => {
      console.log("Error getting todos in /api/todo/ GET");
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
