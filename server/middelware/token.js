const jwtToken = require('jsonwebtoken')
const catchError = require('./catchError')

exports.token = catchError(async(userid, statusCode, res) =>{
    jwtToken.sign({ id: userid }, process.env.jwt_secret, {
        expiresIn: "7d",
      });
      res.cookie(String(userid), token, {
        path: '/',
        expires: new process.env.cookie_exipre_time,
        httpOnly: true,
        sameSite: 'lax',
      });
      return res.status(statusCode).json({success:"true", message: "Register Successfully" })
})

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
