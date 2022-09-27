const passport = require('passport');
const express = require('express');
const router = express.Router();


const CLIENT_URL = "http://localhost:3000/";

router.get('/', isLoggedIn, function (req, res) {
console.log(req.user);
  // if(res.user){
    res.send({
      // user: req.user,
      data:"Hello"
    })
  
});




router.get('/auth/linkedin', passport.authenticate('linkedin', {
     state: "SOME STATE"  
}));

router.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect:CLIENT_URL,
    failureRedirect: CLIENT_URL,
  }));

  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect(CLIENT_URL);
  });


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/profile');
}
router.get("/login/failed", (req, res) => {
  res.redirect(CLIENT_URL);
});

module.exports = router;