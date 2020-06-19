const fs = require("fs");
const pool = require("./server/modules/pool");

const databaseResetFile = "database.sql";

const content = fs.readFileSync(__dirname + "/" + databaseResetFile).toString();

console.log(content);

pool
  .query(content)
  .then(() => {
    console.log("Data successfully reset!");
  })
  .catch((error) => {
    console.log("error: ", error.stack);
  });

pool.end();
