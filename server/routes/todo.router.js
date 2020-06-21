const { debug } = require("../modules/utilities");

const express = require("express");
const pool = require("../modules/pool");

const ToDo = require("../modules/todo");

const router = express.Router();

router.get("/", (req, res) => {
  debug("in /api/todo/ GET");

  ToDo.getAllToDos()
    .then((results) => {
      res.send(results);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  console.log("in /api/todo/ POST");
  console.log("req.body.newToDoText:", req.body.newToDoText);
  pool
    .query(
      `
        INSERT into "todo" ("text") VALUES ($1);
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

router.delete("/:id", (req, res) => {
  console.log("in /api/todo/ DELETE");
  console.log("req.params.id:", req.params.id);
  pool
    .query(
      `
      DELETE from "todo" where id = $1;
  `,
      [req.params.id]
    )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error deleting todo in /api/todo/ DELETE");
      console.log(error);
      res.sendStatus(500);
    });
});

router.put("/", (req, res) => {
  console.log("in /api/todo/ PUT");
  console.log(
    "req.body.idToEdit, newText:",
    req.body.idToEdit,
    req.body.newText
  );
  pool
    .query(
      `
    UPDATE "todo"
    SET "text" = $1
    where id = $2;
`,
      [req.body.newText, req.body.idToEdit]
    )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error editing todo in /api/todo/ PUT");
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
