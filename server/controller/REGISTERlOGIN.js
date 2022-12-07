const bcrypt = require("bcryptjs");
const db = require('../conn/conn');
const {sendEmail} = require('../middelware/sendEmail')
const jwtToken = require('jsonwebtoken')
const catchError = require('../middelware/catchError');

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
          const lastuserid = (result[0].userid) + 1
          db.query("INSERT INTO  tblcontacts (firstname, phonenumber, email, password, userid) VALUES  ('" + name + "','" + phone + "','" + email + "','" + password + "','" + lastuserid + "')", async (err, result) => {
            if (err) {
              return res.send({ err: err, message: "Something Wrong here" })
            } else if (result == []) {
              return res.send({ "err": err, message: "Something Wrong here" })
            } else {
              res.clearCookie(String(lastuserid))
              req.cookies[`${String(lastuserid)}`] = " ";
              const token = jwtToken.sign({ id: lastuserid }, process.env.jwt_secret, {
                expiresIn: "7d",
              });
              res.cookie(String(lastuserid), token, {
                path: '/',
                expires: new Date(Date.now() + 7 * 24 * 3600000),
                httpOnly: true,
                sameSite: 'lax',
                origin: "http://localhost:3000"
              });

              return res.status(200).json({ message: "Register Successfully" })

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
        res.clearCookie(String(result[0].userid))
        req.cookies[`${String(result[0].userid)}`] = " ";
        const token = jwtToken.sign({ id: result[0].userid }, process.env.jwt_secret, {
          expiresIn: "7d",
        });
        res.cookie(String(result[0].userid), token, {
          path: '/',
          expires: new Date(Date.now() + 7 * 24 * 3600000),
          httpOnly: true,
          sameSite: 'lax',
          origin: "http://localhost:3000"
        });
        return res.status(200).json({ message: "User Login Successfull" })
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
              const token = jwtToken.sign({ id: userid }, process.env.jwt_secret, {
                expiresIn: "7d",
              });
              res.cookie(String(userid), token, {
                path: '/',
                expires: new Date(Date.now() + 7 * 24 * 3600000),
                httpOnly: true,
                sameSite: 'lax',
                origin: "http://localhost:3000"
              });
              return res.status(200).json({ message: "User Login Successfull" })
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
          res.clearCookie(String(result[0].userid))
          req.cookies[`${String(result[0].userid)}`] = " ";
          const token = jwtToken.sign({ id: result[0].userid }, process.env.jwt_secret, {
            expiresIn: "7d",
          });
          res.cookie(String(result[0].userid), token, {
            path: '/',
            expires: new Date(Date.now() + 1000 * 84000),
            httpOnly: true,
            sameSite: 'lax',
            origin: "http://localhost:3000"
          });
          return res.status(200).json({ message: "User Login Successfull" })
        } else {
          return res.status(404).json({ messsage: "Invalid Email and password" });
        }
      })
    }
  })
})

exports.refreshToken = async(req,res,next) => {
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
              sameSite:"lax"
          })
          req.id = user.id;
          next()
            }
        })
      }
    
}

exports.verifyToken = catchError(async (req, res, next) => {
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
    db.query("SELECT userid, email, firstname, phonenumber, profile_image FROM tblcontacts WHERE userid='" + userId + "'", async (err, result) => {
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
  db.changeUser({ database: "gohoardi_goh" });
  db.query(
    "SELECT campaign_name, start_date, end_date, CASE WHEN status=1 THEN 'IS BOOKED' WHEN status=2 THEN 'Processing' WHEN status=3 THEN 'IS Cancel' WHEN status=0 THEN 'Working On' END AS status FROM goh_serach_activities  WHERE user= " + userId + " ",
    async (err, result) => {
      if (err) {
        if (result == []) {
          return res.send("Data Not found");
        } else {
          res.send(err);
        }
      } else {
        return res.status(200).json(result);
      }
    }
  )
})

exports.sendPasswordEmail = catchError(async(req,res,next) => {
  const {email} = req.body;
  db.changeUser({ database: "gohoardi_crmapp" })
  db.query("Select id from tblcontacts Where email='"+email+"'", async(err,result) =>{
    if(err || result.length == 0){
     return res.status(400).json({message:"User Not Found"})
    }else{  
      const resetToken = result[0].id;
    const token = jwtToken.sign({id: resetToken}, process.env.jwt_secret, {
      expiresIn: "1h",
    });
    res.clearCookie(String(resetToken))
    req.cookies[`${String(resetToken)}`] = " ";
    res.cookie(String(resetToken), token, {
      path: '/',
      expires: new Date(Date.now() + 1000 * 3000),
      httpOnly: true,
      sameSite: 'lax',
      origin: "http://localhost:3000"
    });
      const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/registration/resetPassword?code=${token}`;
      const message = `Reset your password by clicking on the link below: \n\n ${resetUrl}`;
      try {
        await sendEmail({ email: email, subject: "Reset Password", message, });
        res.status(200).json({ success: true, message: `Email sent to ${email}` ,message:message});
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
          const {password}  = req.body;
          const finalPassword = bcrypt.hashSync(password, 8)
          const sql ="UPDATE tblcontacts SET password ='"+finalPassword+"' WHERE id='"+userId+"'";
          db.query(sql,async(err,result) =>{
            if(err){
              return res.status(800).json({message:err.message})
            }else{
              return res.status(200).json({message:result})
            }
          })
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