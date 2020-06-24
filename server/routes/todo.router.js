const { debug } = require("../modules/utilities");

const express = require("express");

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

  ToDo.deleteToDo(req.params.id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

router.put("/", (req, res) => {
  debug("in /api/todo/ PUT");
  debug("req.body.newToDo:", req.body.newToDo);

  ToDo.editToDoText(req.body.newToDo)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

module.exports = router;
