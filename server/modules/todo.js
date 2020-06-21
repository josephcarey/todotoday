const { debug } = require("../modules/utilities");
const pool = require("../modules/pool");

const ToDo = {
  tableName: "todo",
  fields: {
    id: "id",
    creation_date: "creation_date",
    text: "text",
    is_completed: "is_completed",
  },

  getAllToDos() {
    return new Promise((resolve, reject) => {
      pool
        .query(
          `SELECT * FROM ${this.tableName} order by ${this.fields.id} asc;`
        )
        .then((results) => {
          debug("results:");
          debug(results.rows);
          resolve(results.rows);
        })
        .catch((error) => {
          debug("Error getting todos in /api/todo/ GET");
          debug(error);
          reject(error);
        });
    });
  },

  addToDo(toDoText) {
    return new Promise((resolve, reject) => {
      pool
        .query(
          `INSERT into ${this.tableName} (${this.fields.text}) VALUES ($1);`,
          [toDoText]
        )
        .then(() => {
          resolve();
        })
        .catch((error) => {
          debug("Error adding todo in /api/todo/ POST");
          debug(error);
          reject();
        });
    });
  },
};

module.exports = ToDo;
