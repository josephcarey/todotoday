const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {
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

router.post("/", (req, res) => {
  console.log("in /api/todo/ POST");
  console.log("req.body.newToDoText:", req.body.newToDoText);
  pool
    .query(
      `
        INSERT into "todo" ("text") VALUES ($1)
    `,
      [req.body.newToDoText]
    )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error adding todo in /api/todo/ POST");
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
