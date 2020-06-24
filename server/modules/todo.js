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
          `SELECT * FROM ${this.tableName}
          order by ${this.fields.is_completed} asc, ${this.fields.id} asc;`
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

  editToDoText(newToDo) {
    return new Promise((resolve, reject) => {
      pool
        .query(this.getEditQuery(), [
          newToDo.text,
          newToDo.creation_date,
          newToDo.is_completed,
          newToDo.id,
        ])
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

  getEditQuery() {
    return `
    UPDATE ${this.tableName}
    SET
      ${this.fields.text} = $1,
      ${this.fields.creation_date} = $2,
      ${this.fields.is_completed} = $3
    WHERE ${this.fields.id} = $4;
    `;
  },
};

module.exports = ToDo;
