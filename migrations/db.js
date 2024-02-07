// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'slocalhost',
    user: 'root',
    password: '',
    database: 'markethub',
});

db.connect((err) => {
    if (err) {
        console.log('Error Connecting to Mysql');
    } else {
        console.log('Connected to MySql');
    }
});

module.exports = db;
