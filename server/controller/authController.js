
const db = require('./../conn/conn');
const { promisify } = require('util');
const AppError = require('./../utils/AppError');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signToken = (id) => {

   return jwt.sign({ id }, "this is my secrete jsonWebToken", {
      expiresIn: 90 * 60 * 60 * 1000
   })
}
const createSendToken = (user, statusCode, res) => {

   const token = signToken(user.id);
  
   const tokenOption = {
      expires: new Date(Date.now() + 10 * 24 * 60 *60* 60 * 1000),
      httpOnly: true
   }

   user.password = undefined;

   let token2 = "test001"

   res.header("Access-Control-Allow-Credentials", true);
   res.header("Access-Control-Allow-Origin", "http://localhost:3000","http://localhost:3000");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   
   res.cookie('jwt', token2,  { SameSite:false, secure : true ,
      httpOnly:true ,expire: Date.now()+ 36000}).
     status(200).json({token: token2});
     
   // let myCookieValue = "sdhsdhs"
   // res.cookie('myCookieName', myCookieValue, {
   //    maxAge: 3600*1000, /* one hour */
   //    httpOnly: true
   //  })

   // res.status(statusCode).cookie("jwt", token, tokenOption).json({
   //    status: 'success',
   //    token,
   //    result: {
   //       user
   //    }
   // })
}

exports.login = async (req, res, next) => {
   try {
      const { email, password } = req.body;

      db.changeUser({ database: "sql_login" })

      db.query("SELECT * FROM users WHERE email = ? ", [email], async (err, result) => {
         if (err) throw err;

         if (!result.length || !(await bcrypt.compare(password, result[0].password))) {

            res.status(404).json({
               success: false,
               message: "Wrong Email & Password"
            });
         } else {

            let user = result[0];
            createSendToken(user, 200, res)
         };
      });

   }

   catch (error) {
      res.status(404).json({
         message: error
      })
   }

}


exports.protect = async (req, res, next) => {
      try{

      let token;
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
         token = req.headers.authorization.split(' ')[1];
      }
      else if (req.cookies.jwt) {
         token = req.cookies.jwt
      }
      if (!token) {
         return next(new AppError('you are not login! please Login', 401))
      }

      const decoder = jwt.verify(token, "this is my secrete jsonWebToken");

      db.changeUser({ database: "users" })

      db.query("SELECT * FROM admin WHERE id = ? ", [decoder.id], async (err, result) => {
         if (err) next(new AppError('user not exists with this user', 401));
         req.user = result[0]
         res.locals.user = result[0];
         next();
      })
   }catch(err){
      res.status(404).json({
         message: err.response
      })
   }
   } 



exports.getMe = async (req, res, next) => {
   try{
      req.params.id = req.user.id;
     
      next();
   }catch(err){
      res.status(404).json({
         message:err.response
      })
   }
}

exports.me = async(req,res,next) =>{
   try{

   db.query("SELECT * FROM admin WHERE id = ? ", [req.params.id], async(err,result)=>{
      if(err) return next(new AppError('user not exist ', 401))

      res.status(200).json({
         message: 'success',
          result
      })
   })

   }catch(err){
      res.status(404).json({
         message: err.response
      })
   }
}