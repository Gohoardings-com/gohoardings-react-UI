const db = require("../conn/conn");
const catchError = require("../middelware/catchError");

exports.message = catchError(async(req,res, next) => {
  try {   
    const {name, email, phone, message} = req.body
    console.log(req.body);
    db.changeUser({database:"sql_login"})
    req.body ? db.query("INSERT into enquiry (name, email, phone, message) VALUES ('"+name+"', '"+email+"', '"+phone+"','"+message+"')", async (err,result) => {
        if(err){
            return res.send({err: err,message :"Something Wrong here"})
          } else if (result  == []){
            res.send({"err": err,message :"Something Wrong here"})
          } else {
            return res.send({result: result,message :"Login Successfully"})
          }
    })
 : res.send({message:"User data Null"})
} catch (err){
  res.status(404).json({
    messsage:err.res
  })
}
})

