const db = require("../conn/conn");
const catchError = require("../middelware/catchError");

exports.message = catchError(async (req, res) => {
    console.log("agdscgah");
   
        const {name, email, phone, message} = req.body
        db.changeUser({database: "sql_login"})
        db.query("INSERT into enquiry (name, email, phone, message) VALUES ('" + name + "', '" + email + "', " + phone + ",'" + message + "')", async (err, result) => {
                if (err) {
                    console.log(err);
                    return res.send({err: err, message: "Something Wrong here"})
                } else {
                    console.log(result);
                    return res.send({result: result, message: "Login Successfully"})
                }
            })
    
})

