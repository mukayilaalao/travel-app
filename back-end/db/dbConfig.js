const pgp = require("pg-promise")();
require("dotenv").config();

const cn = {
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
};

const db = pgp(cn);
db.any("SELECT * FROM places").then((data) => console.log(data));
module.exports = db;
