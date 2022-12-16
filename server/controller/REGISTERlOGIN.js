const bcrypt = require("bcryptjs");
const db = require('../conn/conn');
const jwtToken = require('jsonwebtoken')
const {sendEmail} = require('../middelware/sendEmail')
const catchError = require('../middelware/catchError');
const {token} = require('../middelware/token')

exports.register = catchError(async (req, res) => {
  const { name, email, phone, password: Npassword } = req.body
  const password = bcrypt.hashSync(Npassword, 8)
   db.changeUser({ database: "gohoardi_crmapp" })
  db.query("SELECT email, phonenumber FROM tblcontacts WHERE email='" + email + "' && phonenumber='" + phone + "'", async (err, result) => {
    if (err) {
      return res.send(err)
    }
    else if (result.length == []) {
      // if (Npassword === conpass) {
      req.body ? db.query("SELECT userid  FROM  tblcontacts ORDER BY userid DESC LIMIT 1", async (err, result) => {
        if (err) {
          return res.send(err);
        } else {
          const userid = (result[0].userid) + 1
          db.query("INSERT INTO  tblcontacts (firstname, phonenumber, email, password, userid) VALUES  ('" + name + "','" + phone + "','" + email + "','" + password + "','" + userid + "')", async (err, result) => {
            if (err) {
              return res.send({ err: err, message: "Something Wrong here" })
            } else if (result == []) {
              return res.send({ "err": err, message: "Something Wrong here" })
            } else {
              res.clearCookie(String(userid))
              req.cookies[`${String(userid)}`] = " ";
              token(userid, 200, res)
            }
          })
        }
      })
        : res.send({ message: "User data Null" })
    } else {
      return res.status(201).json({
        mess: "Profile Already Exist"
      })
    }
  })
})

exports.login = catchError(async (req, res) => {
  const { email, password } = req.body;
  db.changeUser({ database: "gohoardi_crmapp" })
  db.query("SELECT * FROM tblcontacts WHERE email ='" + email + "' ", async (err, result) => {
    if (err) {
      return res.json({ message: "No User Found" })
    }else if (!result.length == 0) {
      const keypassword = result[0].password;
      if (!keypassword) {
        return res.status(404).json({ messsage: "Invalid Email and password" });
      } else {
        const resetPassword = bcrypt.compareSync(password, keypassword)
        if (!resetPassword) {
          return res.status(404).json({
            success: false,
            message: "Wrong Email & Password"
          });
        }
        const userid = result[0].userid
        res.clearCookie(String(userid))
        req.cookies[`${String(userid)}`] = " ";
        token(userid, 200, res)
      }
    } else {
      return res.status(404).json({ messsage: "Invalid Email and password" });
    }
  })
})

exports.googleLogin = catchError(async (req, res) => {
  const { profile } = req.body
  if (!profile) {
    return res.status(400).json({ mess: "Google authentication Failed" })
  }
  db.changeUser({ database: "gohoardi_crmapp" });
  db.query("SELECT email, provider FROM tblcontacts WHERE email='" + profile.email + "' && provider='Google'", async (err, selectResult) => {
    if (err) {
      return res.status(400).json({ message: "Wrong Data" })
    }
    if (selectResult.length == 0) {
      db.query("SELECT userid From tblcontacts ORDER By userid DESC LIMIT 1", async (err, result) => {
        if (err) {
          return res.status(404).json(err.message)
        } else {
          const userid = (result[0].userid) + 1
          const password = bcrypt.hashSync(profile.givenName, 8)
          db.query(`Insert into tblcontacts (firstname, email, password, userid, profile_image, provider) VALUES ('${profile.name}','${profile.email}','${password}','${userid}','${profile.imageUrl}','Google')`, async (err, result) => {
            if (err) {
              return res.status(400).json({ err: err.message })
            } else {
              res.clearCookie(String(userid))
              req.cookies[`${String(userid)}`] = " ";
            token(userid, 200, res)
            }
          })
        }
      })

    } else {
      db.query("SELECT * FROM tblcontacts WHERE email ='" +profile.email + "' ", async (err, result) => {
        if (err) {
          return res.json({ message: "No User Found" })
        }
        if (!result == []) {
          const userid = result[0].userid
          res.clearCookie(String(userid))
          req.cookies[`${String(userid)}`] = " ";
         token(userid, 200, res)
        } else {
          return res.status(404).json({ messsage: "Invalid Email and password" });
        }
      })
    }
  })
})

exports.refreshToken = catchError(async(req,res,next) => {
  const cookieData = req.cookies;
  if (!cookieData) {
    return res.status(400).json({ message: "No Cookie Found" })
  }
  const token = Object.values(cookieData)[0];
  if (!token) {
    return res.status(400).json({ message: "No Token Found" })
  } else {
    return jwtToken.verify(token, process.env.jwt_secret, async (err, user) => {
      if (err) {
        return res.status(400).json({ message: "InValid Token" });
      } else {
           res.clearCookie(`${user.id}`)
           req.cookies[`${user.id}`] = "";

           const token = jwtToken.sign({id:user.id}, process.env.jwt_secret,{
              expiresIn:"6d"
          });
          res.cookie(String(user.id), token,{
              path:'/',
              expires:new Date(Date.now() + 6 * 24 * 3600000),
              httpOnly:true,
              sameSite:"lax",
             
          })
          req.id = user.id;
          next()
            }
        })
      }
    
})

exports.getuser = catchError(async (req, res) => {
  const userId = req.id;
  if (!userId) {
    return res.status(404).json({ message: "Token Valid" })
  } else {
    db.changeUser({ database: "gohoardi_crmapp" })
    db.query("SELECT * FROM tblcontacts WHERE userid='" + userId + "'", async (err, result) => {
      if (err) {
        return res.status(404).json({ message: "User Not found" })
      } else {
        return res.status(200).json(result)
      }
    })
  }
})

exports.logout = catchError(async (req, res) => {
  const user = req.id
  if (!user) {
    return next(new ErrorHandler("No user found Plese Login Again", 400))
  }
  res.clearCookie(`${user}`)
  req.cookies[`${user}`] = "";
  return res.status(200).json({ message: "User Logout SuccessFully" })
})

exports.Profile = catchError(async (req, res) => {
  const userId = req.id;
  db.changeUser({ database: "gohoardi_crmapp" })
  const search_activity = 'activity.phone, activity.campaign_name, activity.start_date, activity.end_date, activity.city, activity.pincode, activity.address, activity.campaign_city, activity.media_type, activity.status, activity.payment_status';
      const user_details = 'contact.userid,contact.firstname,contact.lastname,contact.email,contact.phonenumber';
      const cart = 'cart.status, cart.booked, cart.isDelete, cart.days'
      const sql = "SELECT  "+user_details+",  "+search_activity+" FROM tblcontacts AS contact RIGHT JOIN gohoardi_goh.goh_serach_activities AS activity ON activity.user = contact.userid  WHERE activity.user='"+userId+"'"
  db.query(sql,async(err,result) =>{
    if(err){
      return res.status(401).json({message:err.message})
    }else if(result.length ==0 ){
      const sql = "SELECT * FROM gohoardi_crmapp.tblcontacts WHERE userid='" + userId + "'"
      db.query(sql, async (err, result) => {
        if(err){
          return res.status(401).json({message:err.message})
        }else{
        return res.status(200).json({message:result}) 
        }
      })
    }else{ 
      return res.status(200).json({message:result})
    }
  })
  // 
})

exports.sendPasswordEmail = catchError(async(req,res,next) => {
  const {email} = req.body;
  db.changeUser({ database: "gohoardi_crmapp" })
  db.query("Select id from tblcontacts Where email='"+email+"'", async(err,result) =>{
    if(err || result.length == 0){
     return res.status(400).json({message:"User Not Found"})
    }else{  
      const resetToken = result[0].id;
      res.clearCookie(String(resetToken))
      req.cookies[`${String(resetToken)}`] = " ";
    const token = jwtToken.sign({id: resetToken}, process.env.jwt_secret, {
      expiresIn: "1h",
    });
   
    res.cookie(String(resetToken), token, {
      path: '/',
      expires: new Date(Date.now() + 1000 * 3000),
      httpOnly: true,
      sameSite: 'lax',
     
    });
      const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/registration/resetPassword?code=${token}`;
      const message = `Reset your password by clicking on the link below: \n\n ${resetUrl}`;
      const subject = "Reset password gohoardings.com"
      try {
        await sendEmail({ email: email, subject: "Reset Password", message });
        res.status(200).json({ success: true, message: `Email sent to ${email}` ,message:message, subject:subject});
    } catch (error) {
      return res.status(500).json({message:error.message})
    }
    }
  })

})

exports.resetPasswordEmail = catchError(async(req,res,next) => {
  const {code} = req.query
  const cookieData = req.cookies;
  if (!cookieData) {
    return res.status(400).json({ message: "No Cookie Found" })
  }
  const token = Object.values(cookieData)[0];
  if (!token) {
    return res.status(400).json({ message: "No Token Found" })
  } else {
    if(token === code){
      return jwtToken.verify(token, process.env.jwt_secret, async (err, user) => {
        if (err) {
          return res.status(400).json({ message: "InValid Token" });
        } else {
          const userId = user.id
          const {password, confirmPassword}  = req.body;
         if(password == confirmPassword){
          const finalPassword = bcrypt.hashSync(password, 8)
          const sql ="UPDATE tblcontacts SET password ='"+finalPassword+"' WHERE id='"+userId+"'";
          db.query(sql,async(err,result) =>{
            if(err){
              return res.status(800).json({message:err.message})
            }else{
              return res.status(200).json({message:result})
            }
          })
         }else{
          return res.status(500).json({message:"Password not matched"})
         }
        }
      })
    }else{
      return res.status(400).json({ message: "Verfication failed" })
    }
   
  }
})

exports.changepasswoed = catchError(async(req,res,next) => {
  const userId = req.id;
  if(!userId){
    return res.status(400).json({message:"User not found"})
  }else{
    db.changeUser({ database: "gohoardi_crmapp" })
    db.query("SELECT password from tblcontacts WHERE userid='"+userId+"'", async(err,result) =>{
      if(err){
        return res.status(401).json({message:err.message})
      }else{
      const {oldPassword, newPassword, confirmPassword} = req.body;
      const password = result[0].password
      const resetPassword = bcrypt.compareSync(oldPassword, password)
      if(resetPassword){
        if(newPassword === confirmPassword){
          const finalPassword = bcrypt.hashSync(newPassword, 8)
          if(!finalPassword){
            return res.status(500).json({message:"Password Error"})
          }else{
            const sql ="UPDATE tblcontacts SET password = '"+finalPassword+"' WHERE userid='"+userId+"'";
            db.query(sql,async(err,result) =>{
              if(err){
                return res.status(800).json({message:err.message})
              }else{
                return res.status(200).json({message:result})
              }
            })
          }
         
        }
      }else{
        return res.status(400).json({message:"Your Password Not Matched"})
      }
      
      }
    })
  }
}) 

exports.imageupload = catchError(async(req,res,next) =>{
const {filename} = req.file
})