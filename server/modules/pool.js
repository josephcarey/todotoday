// Main access point for db (postgresql) queries

const pg = require("pg");

const config = {
  host: "localhost",
  port: 5432,
  database: "todotoday",
  max: 10,
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on("error", (error) => {
  console.log("Unexpected error", error);
  process.exit(-1);
});

module.exports = pool;
