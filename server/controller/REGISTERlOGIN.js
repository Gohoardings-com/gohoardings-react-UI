const bcrypt = require("bcrypt");
const db = require('../conn/conn');
const jwtToken = require('jsonwebtoken')
const dotenv = require('dotenv')

exports.register = async (req, res, next) => {
  try {
    db.changeUser({ database: "gohoardi_crmapp" })
    const { name, email, phone, password: Npassword, conpass } = req.body
    const password = await bcrypt.hash(Npassword, 8)
    db.query("SELECT email, phonenumber FROM tblcontacts WHERE email='" + email + "' && phonenumber='" + phone + "'", (err, result) => {
      if (err) {
        res.send(err)
      }
      if (result.length == []) {
        if (Npassword === conpass) {
          req.body ? db.query("SELECT userid  FROM  tblcontacts ORDER BY userid DESC LIMIT 1", async (err, result) => {
            if (err) {
              return res.send(err);
            } else {
              const lastuserid = result[0].userid + 1
              db.query("INSERT INTO  tblcontacts (firstname, phonenumber, email, password, userid) VALUES  ('" + name + "','" + phone + "','" + email + "','" + password + "','" + lastuserid + "')", async (err, result) => {
                if (err) {

                  return res.send({ err: err, message: "Something Wrong here" })
                } else if (result == []) {

                  res.send({ "err": err, message: "Something Wrong here" })
                } else {

                  return res.send({ result: result, name: name, message: "Register Successfully" })
                }
              })
            }
          })
            : res.send({ message: "User data Null" })
        } else {
          return res.send({ message: "Password Not Matched" })
        }
      } else {
        res.status(201).json({
          mess: "User Already Exist"
        })
      }
    })
  } catch (err) {
    res.status(404).json({
      messsage: err.mess
    })
  }
}

exports.login = async (req, res, next) => {
    // console.log(req.body);
  try {
    const { email, password } = req.body
    db.changeUser({ database: "gohoardi_crmapp" })
    db.query("SELECT * FROM tblcontacts WHERE email = ? ", [email], async (err, result) => {
      if (err){
    return res.status(400).json({message:"No User Found"})
      }
      const resetPassword = bcrypt.compareSync(password, result[0].password)
      if (!resetPassword) {
        res.status(404).json({
          success: false,
          message: "Wrong Email & Password"
        });
      }
      const token = jwtToken.sign({ id: result[0].id }, "thisismysecratejsonWebToken", {
        expiresIn: "7d",
      });
     
      res.clearCookie(String(result[0].id))
      req.cookies[`${String(result[0].id)}`] = " ";
      res.cookie(String(result[0].id), token, {
        path: '/',
        expires: new Date(Date.now() + 1000 * 84000),
        httpOnly: true,
        sameSite: 'lax',
        origin:"http://localhost:3000"
      });
      return res.status(200).json({ user: token })
    });
  } catch (err) {
    res.status(404).json({
      messsage: err.mess
    })
  }
}


exports.googleLogin = async(req,res,next) => {
  try{
      const {profile} = req.body
      if(!profile){
        return res.status(400).json({mess:"Google authentication Failed"})
      }
      db.changeUser({database:"gohoardi_crmapp"});
      db.query("SELECT email, provider FROM tblcontacts WHERE email='"+profile.email+"' && provider='Google'", (err, selectResult) => {
        if(err){
          return res.status(400).json({message: "Wrong Data"})
        }
        if (!selectResult == []){
          db.query("SELECT userid From tblcontacts ORDER By userid DESC LIMIT 1", async(err,result) => {
            if(err){
              console.log(err);
             return res.status(404).json(err.message)
            } else{
             const lastid = (result[0].userid)+ 1
    
             db.query(`Insert into tblcontacts (firstname, email, userid, profile_image, provider) VALUES ('${profile.name}','${profile.email}','${lastid}','${profile.imageUrl}',"Google")`, async (err,result) => {
               if(err){
                 return res.status(400).json({err:err.message})
               } else {
                res.clearCookie(String(lastid))
                req.cookies[`${String(lastid)}`] = " ";
                const token = jwtToken.sign({ id: lastid }, "thisismysecratejsonWebToken", {
                  expiresIn: "7d",
                });
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
          console.log("User Exist Alreday");
          return res.status(400).json({message: "User Exist Alreday"})
        }
      })
     }catch{
      res.status(500).json({mess:"User Not Found"})
     }
}


exports.verifyToken = (req, res, next) => {
  try{
    const cookieData =  req.cookies;
  if (!cookieData) {
    return res.status(400).json({message:"No Cookie Found"})
  }
  const token = Object.values(cookieData)[0];
if(!token){
  return res.status(400).json({message:"No Token Found"})
} else {

  jwtToken.verify(String(token),  "thisismysecratejsonWebToken" , (err,user) => {
      if(err){
        console.log(err);
  return res.status(400).json({message:"InValid Token"})
      } else {
      req.id = user.id;
      next()
    }
  })
}
  }catch(err){
    return res.status(500).json({err:message})
   }
}


exports.getuser = async (req, res, next) => {
 try{
  const userId = req.id;
  if (!userId) {
    return res.status(404).json({ message: "Not user id" })
  } else {
    db.changeUser({ database: "gohoardi_crmapp" })
    db.query("SELECT userid, email, firstname, phonenumber, profile_image FROM tblcontacts WHERE id='" + userId + "'", (err, result) => {
      if (err) {
        return res.status(404).json({ message: "User Not found" })
      } else {
        return res.status(200).json(result)
      }
    })
  }
 }catch(err){
  return res.status(500).json({err:message})
 }
}


exports.logout = async(req,res,err) => {
 try{
  const cookieData =  req.cookies;
  if (!cookieData) {
    return res.status(400).json({message:"No Cookie Found"})
  }
  const token = Object.values(cookieData)[0];
if(!token){
  return res.status(400).json({message:"No Token Found"})
} else {
  jwtToken.verify(String(token), "thisismysecratejsonWebToken", (err,user) => {
      if(err){
  return res.status(400).json({message:"InValid Token"})
      } else {
        res.clearCookie(String(user.id))
      req.cookies[`${String(user.id)}`] = " ";
      return true
    }
  })
}
 }catch(err){
  return res.status(500).json({err:message})
 }
}


exports.Profile = async(req,res,next) => {
    try {
      const { userid } = req.body;
      db.changeUser({ database: "gohoardi_goh" });
      db.query(
        "SELECT campaign_name, start_date, end_date, CASE WHEN status=1 THEN 'IS BOOKED' WHEN status=2 THEN 'Processing' WHEN status=3 THEN 'IS Cancel' WHEN status=0 THEN 'Working On' END AS status FROM goh_serach_activities  WHERE user= "+userid +" " ,
        async (err, result) => {
          if (err) {
            console.log(err);
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
   
    } catch (err) {
      return res.status(500).json(err.message);
    }
}

