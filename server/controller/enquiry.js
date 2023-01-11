const db = require("../conn/conn");
const catchError = require("../middelware/catchError");

exports.message = catchError(async (req, res) => { 
        const {name, email, number, message} = req.body
        db.changeUser({database: "gohoardi_goh"})
        db.query("INSERT into enquiry (name, email, phone, message) VALUES ('" + name + "', '" + email + "','" + number + "','" + message + "')", async (err, result) => {
                if (err) {
             return res.send({err: err, message: "Something Wrong here"})
                } else {
                 
                    return res.send({result: result, message: "Login Successfully"})
                }
            })
    
})

