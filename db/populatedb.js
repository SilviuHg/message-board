const { Client } = require("pg");
require("dotenv").config();

const connectionString = process.argv[2];

if (!connectionString) {
  console.error("Error: Please provide a database connection string.");
  process.exit(1);
}

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ), text VARCHAR ( 255 ), date TIMESTAMP
);

INSERT INTO messages (username, text, date) 
VALUES
  ('Bryan', 'Hi', NOW()),
  ('Odin', 'Hello', NOW()),
  ('Damon', 'hi!', NOW());
`;

async function main() {
  console.log("seeding...");
  console.log(connectionString);
  const client = new Client({
    connectionString: connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
