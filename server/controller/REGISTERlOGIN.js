const bcrypt = require("bcryptjs");
const db = require('../conn/conn');
const jwtToken = require('jsonwebtoken')
const catchError = require('../middelware/catchError')

exports.register = catchError(async (req, res) => {
    db.changeUser({ database: "gohoardi_crmapp" })
    const { name, email, phone, password: Npassword, conpass } = req.body
    const password = bcrypt.hashSync(Npassword, 8)
    db.query("SELECT email, phonenumber FROM tblcontacts WHERE email='" + email + "' && phonenumber='" + phone + "'", async (err, result) => {
      if (err) {
        return res.send(err)
      }
      else if (result.length == []) {
        if (Npassword === conpass) {
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
                  const token = jwtToken.sign({ id: lastuserid}, process.env.jwt_secret, {
                    expiresIn: "7d",
                  });
                  res.cookie(String(lastuserid), token, {
                    path: '/',
                    expires: new Date(Date.now() + 1000 * 84000),
                    httpOnly: true,
                    sameSite: 'lax',
                    origin:"http://localhost:3000"
                  });
              
                  return res.status(200).json({message:"Register Successfully" })
           
                }
              })
            }
          })
            :  res.send({ message: "User data Null" })
        } else {
          return res.send({ message: "Password Not Matched" })
        }
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
    db.query("SELECT * FROM tblcontacts WHERE email ='"+email+"' ", async (err, result) => {
      if (err){
    return res.json({message:"No User Found"})
      } 
     if(!result == []){
   const keypassword = result[0].password;
   if(!keypassword){
    return res.status(404).json({ messsage: "Invalid Email and password"});
   }else{
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
      expires: new Date(Date.now() + 1000 * 84000),
      httpOnly: true,
      sameSite: 'lax',
      origin:"http://localhost:3000"
    });
    return res.status(200).json({message:"User Login Successfull" })
   }
      } else{
        return res.status(404).json({ messsage: "Invalid Email and password"});
      }
      })   
})


exports.googleLogin = catchError(async(req,res) => {
      const {profile} = req.body
      if(!profile){
        return res.status(400).json({mess:"Google authentication Failed"})
      }
      db.changeUser({database:"gohoardi_crmapp"});
      db.query("SELECT email, provider FROM tblcontacts WHERE email='"+profile.email+"' && provider='Google'",async (err, selectResult) => {
        if(err){
          return res.status(400).json({message: "Wrong Data"})
        }
        if (!selectResult == []){
          db.query("SELECT userid From tblcontacts ORDER By userid DESC LIMIT 1", async(err,result) => {
            if(err){
             return res.status(404).json(err.message)
            } else{
             const lastid = (result[0].userid) + 1
             db.query(`Insert into tblcontacts (firstname, email, userid, profile_image, provider) VALUES ('${profile.name}','${profile.email}','${lastid}','${profile.imageUrl}',"Google")`, async (err,result) => {
               if(err){
                 return res.status(400).json({err:err.message})
               } else {
                 const token = jwtToken.sign({ id: lastid }, process.env.jwt_secret, {
                   expiresIn: "7d",
                  });
                  res.clearCookie(String(lastid))
                  req.cookies[`${String(lastid)}`] = " ";
                res.cookie(String(lastid), token, {
                  path: '/',
                  expires: new Date(Date.now() + 1000 * 84000),
                  httpOnly: true,
                  sameSite: 'lax',
                  origin:"http://localhost:3000"
                });
                return res.status(200).json(result)
               }
             })
            }
           })
        } else {
          return res.status(400).json({message: "User Exist Alreday"})
        }
      })
})

exports.verifyToken =catchError(async (req, res, next) => {
    const cookieData =  req.cookies;
  if (!cookieData) {
    return res.status(400).json({message:"No Cookie Found"})
  }
  const token = Object.values(cookieData)[0];

if(!token){
  return res.status(400).json({message:"No Token Found"})
} else {
  return jwtToken.verify(token,  process.env.jwt_secret ,async (err,user) => {
      if(err){
  return res.status(400).json({message:"InValid Token"});
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
    db.query("SELECT userid, email, firstname, phonenumber, profile_image FROM tblcontacts WHERE userid='" + userId + "'",async (err, result) => {
      if (err) {
        return res.status(404).json({ message: "User Not found" })
      } else {
        return res.status(200).json(result)
      }
    })
  }
})

exports.logout = catchError(async(req,res) => {
  const user = req.id
    if (!user) {
        return next(new ErrorHandler("No user found Plese Login Again", 400))
    }
    res.clearCookie(`${user}`)
    req.cookies[`${user}`] = "";
    return res.status(200).json({ message: "User Logout SuccessFully" })
})

exports.Profile = catchError(async(req,res) => {
      const { userid } = req.body;
      db.changeUser({ database: "gohoardi_goh" });
      db.query(
        "SELECT campaign_name, start_date, end_date, CASE WHEN status=1 THEN 'IS BOOKED' WHEN status=2 THEN 'Processing' WHEN status=3 THEN 'IS Cancel' WHEN status=0 THEN 'Working On' END AS status FROM goh_serach_activities  WHERE user= "+userid +" " ,
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