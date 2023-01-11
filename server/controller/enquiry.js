const db = require("../conn/conn");
const catchError = require("../middelware/catchError");

<<<<<<< HEAD
exports.message = catchError(async (req, res) => { 
        const {name, email, number, message} = req.body
        db.changeUser({database: "sql_login"})
        db.query("INSERT into enquiry (name, email, phone, message) VALUES ('" + name + "', '" + email + "','" + number + "','" + message + "')", async (err, result) => {
                if (err) {
             return res.send({err: err, message: "Something Wrong here"})
                } else {
                 
=======
exports.message = catchError(async (req, res) => {

        const {name, email, number, message} = req.body;

        db.changeUser({database: "gohoardi_goh"})
        db.query("INSERT into enquiry (name, email, phone, message) VALUES ('" + name + "', '" + email + "', " + number + ",'" + message + "')", async (err, result) => {
                if (err) {
                    return res.send({err: err, message: "Something Wrong here"})
                } else {
>>>>>>> 11980b76bc3f5c2bdf034130033c851e40f69f7c
                    return res.send({result: result, message: "Login Successfully"})
                }
            })
    
})

