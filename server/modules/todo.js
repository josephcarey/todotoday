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
          console.log("results:");
          console.log(results.rows);
          resolve(results.rows);
        })
        .catch((error) => {
          console.log("Error getting todos in /api/todo/ GET");
          console.log(error);
          reject(error);
        });
    });
  },
};

module.exports = ToDo;
