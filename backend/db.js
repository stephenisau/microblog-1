
/** Database connection for Microblog. */

const { Client } = require("pg");

const client = new Client({
  user: 'superuser',
  password: 'password',
  connectionString: process.env.DATABASE_URL || "microblog",
  statement_timeout: 5000,
  query_timeout: 5000,
  port: 5432
});

client.connect();


module.exports = client;