const db = require("../conn/conn");
const catchError = require("../middelware/catchError");
const request = require('request')
const bcrypt = require("bcryptjs");
const { token } = require("../middelware/token");

exports.findEmail = catchError(async(req,res, next) => {
    const {email} = req.body
    if(!email){
        res.status(400).json({message:"Email Invalid"})
    }
    db.changeUser({database:"gohoardi_crmapp"})
    const sql = "SELECT phonenumber from tblcontacts WHERE email='"+email+"'"
    db.query(sql,(err,result) => {
        if(err){
       
            res.status(400).json({message:err.message})
        }else{
           phone = result[0].phonenumber
           next()
        }
    })
})

exports.sendOTP = catchError(async(req,res) => {
    const phoneNumber = phone
    let otp = Math.floor(100000 + Math.random() * 900000);
    request({
      url:process.env.otpUrl,
      method: process.env.otpMethod,
      form: {
        'authkey': process.env.otpauthkey,
        'mobiles': phoneNumber,
        'message':  `${otp} is your one-time OTP for login into the Gohoardings account.`,
        'sender': process.env.otpSender,
        'route': process.env.otpRoute,
        'DLT_TE_ID' : process.env.otpDLT_TE_ID
      }
    }, function(error, response, body) {
      if (error) {
        res.status(400).json({message:error.message})
      } else {
        const sql = "UPDATE tblcontacts SET phone_otp= "+otp+" WHERE phonenumber="+phoneNumber+""
     
        db.query(sql,async(err,result) =>{
            if(err){
         
                res.status(400).json({message:err.message})
            }else{
                return res.status(200).json({message:"Mobile OTP Send.."})
            }
        })
      }
    });
   
})


exports.checkOTP = catchError(async(req, res) => {
    const {otp} = req.body

    if(!otp){
        res.status(400).json({message:"OTP Invalid"})
    }
    db.changeUser({database:"gohoardi_crmapp"})
    const sql = "SELECT userid from tblcontacts WHERE phone_otp="+otp+" || email_otp="+otp+""

    db.query(sql,(err,result) => {
        if(err){
         res.status(400).json({message:"OTP Invalid"})
        }else if(result.length == 0){
            return  res.status(400).json({message:"OTP Not Match, Try After 30min"})
        }else{
            const {password ,confirmpasswords} = req.body
            if(password == confirmpasswords){
              
                const finalPassword = bcrypt.hashSync(password, 8)
               
                db.changeUser({database:"gohoardi_crmapp"})
                const sqlQuery ="UPDATE tblcontacts SET password ='"+finalPassword+"' WHERE phone_otp="+otp+" || email_otp="+otp+"";
              
                db.query(sqlQuery,async(err,result1) =>{
                  if(err){
                    return res.status(500).json({message:err.message})
                  }else{
                 
                   const userid = result[0].userid
      
                   token(userid, 200, res)
                  }
                })
               }else{
            
                return res.status(500).json({message:"Password not matched"})
               }
        }
    })
})

