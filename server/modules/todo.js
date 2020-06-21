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
          debug("Error getting all todos");
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
          debug("Error adding todo");
          debug(error);
          reject();
        });
    });
  },

  deleteToDo(idToDelete) {
    return new Promise((resolve, reject) => {
      pool
        .query(`DELETE from ${this.tableName} where ${this.fields.id} = $1;`, [
          idToDelete,
        ])
        .then(() => {
          resolve();
        })
        .catch((error) => {
          debug("Error deleting todo");
          debug(error);
          reject(error);
        });
    });
  },

  editToDoText(idToEdit, newText) {
    return new Promise((resolve, reject) => {
      pool
        .query(
          `UPDATE ${this.tableName}
            SET ${this.fields.text} = $1
            where ${this.fields.id} = $2;`,
          [newText, idToEdit]
        )
        .then(() => {
          resolve();
        })
        .catch((error) => {
          debug("Error editing todo");
          debug(error);
          reject(error);
        });
    });
  },
};

module.exports = ToDo;
