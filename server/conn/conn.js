const mysql = require("mysql");

const db = mysql.createConnection({
    user: "root",
    host: "http://80.209.238.62:55750",
    password: "",
    database: "gohoardi_goh",

})

db.connect((err) => {
    if (err) return err
    console.log('db connected');
})
module.exports = db;