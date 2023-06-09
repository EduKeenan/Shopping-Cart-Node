/*global process*/
/*eslint no-undef: "error"*/
const mysql = require(`mysql2/promise`);

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
});

module.exports = connection;