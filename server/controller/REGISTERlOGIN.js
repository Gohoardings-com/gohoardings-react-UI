const bcrypt = require("bcryptjs");
const db = require('../conn/conn');
const jwtToken = require('jsonwebtoken')
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
      req.body ? db.query("SELECT userid  FROM  tblcontacts ORDER BY userid DESC LIMIT 1", async (err, result) => {
        if (err) {
          return res.send(err);
        } else {
          const userid = (result[0].userid) + 1
          db.query("INSERT INTO  tblcontacts (firstname, phonenumber, email, password, userid) VALUES  ('" + name + "','" + phone + "','" + email + "','" + password + "','" + userid + "')", async (err, result) => {
            if (err) {
              return res.send({ err: err.message, message: "Something Wrong here" })
            } else {
              res.clearCookie(String(userid))
              // req.cookies[`${String(userid)}`] = " ";
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
        const confimPassword = bcrypt.compareSync(password, keypassword)
        if (!confimPassword) {
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
const {name, email, givenName, imageUrl} = req.body
  db.changeUser({ database: "gohoardi_crmapp" });

  db.query("SELECT * FROM tblcontacts WHERE email='" + email + "' && provider='Google'", async (err, selectResult) => {
    if (err) {
      return res.status(400).json({ message: "Wrong Data" })
    }
   
    if (selectResult.length == 0) {
   

      db.query("SELECT userid From tblcontacts ORDER By userid DESC LIMIT 1", async (err, result) => {
        if (err) {
          return res.status(404).json(err.message)
        } else {
         
          const userid = (result[0].userid) + 1
          const password = bcrypt.hashSync(givenName, 8)
          db.query(`Insert into tblcontacts (firstname, email, password, userid, profile_image, provider) VALUES ('${name}','${email}','${password}','${userid}','${imageUrl}','Google')`, async (err, result) => {
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
          const userid = selectResult[0].userid
          res.clearCookie(String(userid))
          req.cookies[`${String(userid)}`] = " ";
         token(userid, 200, res)
    }
  })
})

exports.linkdinLogin = catchError(async(req,res) => {
  const {nickname,name,picture, email,sub} = req.body
  db.changeUser({ database: "gohoardi_crmapp" })
 {nickname,name,picture, email,sub ? 
  db.query("SELECT * FROM tblcontacts WHERE email='" +email + "'", async (err, selectResult) => {
    if (err) {

   
      return res.status(400).json({ message: "Wrong Data" })
    }
    if (selectResult.length == 0) {

      db.query("SELECT userid From tblcontacts ORDER By userid DESC LIMIT 1", async (err, result) => {
        if (err) {
       
          return res.status(404).json(err.message)
        } else {
          const userid = (result[0].userid) + 1
          const password = bcrypt.hashSync(nickname, 8)
          db.query(`Insert into tblcontacts (firstname, email, password, userid, profile_image, provider) VALUES ('${name}','${email}','${password}','${userid}','${picture}','${sub}')`, async (err, result) => {
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
          const userid = selectResult[0].userid
          res.clearCookie(String(userid))
          req.cookies[`${String(userid)}`] = " ";
         token(userid, 200, res)
    }
  }) : res.send(404).json({message:"No Data Found"})}
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
  }
    const {newPassword, confirmPassword} = req.body;
    if(newPassword === confirmPassword){
      const finalPassword = bcrypt.hashSync(newPassword, 8)
      if(!finalPassword){
        return res.status(500).json({message:"Password Error"})
      }else{
            db.changeUser({ database: "gohoardi_crmapp" })
            const sql ="UPDATE tblcontacts SET password = '"+finalPassword+"' WHERE userid='"+userId+"'";
            db.query(sql,async(err,result) =>{
              if(err){
                console.log(err);
                return res.status(800).json({message:err.message})
              }else{
                console.log(result);
                return res.status(200).json({message:"Password Change Successfully"})
              }
            })
          }
        
      }else{
        return res.status(400).json({message:"Your Password Not Matched"})
      
      
      }
    })


exports.updateProfile = catchError(async(req,res,next) =>{
  const {filename} = req.file;
const {firstname,email,phonenumber} =req.body
const userId = req.id;
if (!userId) {
  return res.status(404).json({ message: "Token Valid" })
} else {
  db.changeUser({ database: "gohoardi_crmapp" })
  const sql = "UPDATE tblcontacts SET firstname='"+firstname+"', email='"+email+"', phonenumber='"+phonenumber+"',profile_image='"+filename+"' WHERE userid='"+userId+"'"
  db.query(sql,async(err,result) =>{
    if(err){
      return res.status(400).json({sucess:false, message:"Updation failed"})
    } else{
      return res.status(200).json({sucess:false, message:"Profile Updated"})
    }
  })
}

})