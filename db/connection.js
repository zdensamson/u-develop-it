// MySQL import
const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MySQL password
        password: '&takamat$u0v3rall6877&',
        database: 'election'
    },
    console.log('Connected to the election database.')
)

module.exports = db;