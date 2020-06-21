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
  debug("in /api/todo/ POST");
  debug("req.body.newToDoText:", req.body.newToDoText);
  ToDo.addToDo(req.body.newToDoText)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  debug("in /api/todo/ DELETE");
  debug("req.params.id:", req.params.id);
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
      debug("Error deleting todo in /api/todo/ DELETE");
      debug(error);
      res.sendStatus(500);
    });
});

router.put("/", (req, res) => {
  debug("in /api/todo/ PUT");
  debug("req.body.idToEdit, newText:", req.body.idToEdit, req.body.newText);
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
      debug("Error editing todo in /api/todo/ PUT");
      debug(error);
      res.sendStatus(500);
    });
});

module.exports = router;
