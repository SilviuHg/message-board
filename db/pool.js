const { Pool } = require("pg");
require("dotenv").config();

console.log(
  process.env.PG_HOST,
  process.env.PG_USER,
  process.env.PG_DATABASE,
  process.env.PG_PASSWORD,
  process.env.PG_PORT
);

console.log(
  process.env.PGHOST,
  process.env.PGUSER,
  process.env.PGDATABASE,
  process.env.PGPASSWORD,
  process.env.PGPORT
);
module.exports = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
