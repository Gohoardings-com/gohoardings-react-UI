const express = require('express')
const app = express();
const dotenv = require('dotenv')
const cors = require('cors');
const session = require('express-session');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser')
const passport = require('passport');
const linkedinStrategy = require('passport-linkedin-oauth2').Strategy;
dotenv.config()
app.use(cors({credentials:true, origin:"http://localhost:3000",  methods: "GET,POST,PUT,DELETE",}))
app.use(express.json());

app.use( express.json({limit: '14kb'}))
app.use(bodyparser());

app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

const auth = require('./routes/auth');
app.use("/auth", auth);

const linkdin  =require('./routes/linkdin')
const adminRoute = require('./routes/adminRoute.js');
const usersRoutes = require('./routes/usersRoutes');
const syncMediaRoutes = require('./routes/syncMediaRoutes')
const mediaRouter = require('./routes/mediaRoutes')
const LoginRoute = require('./routes/loginWeb');


app.use('/api/v1',LoginRoute)
app.use('/api/v1/admin', adminRoute);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/syncMedia', syncMediaRoutes);
app.use('/api/v1/media', mediaRouter)

let token = "test"

app.get('/test001',(req,res) => {
    res.cookie('user', token,  {
    httpOnly:true ,expire: Date.now()+ 36000}).
   status(200).json({token: token});
})

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// const auth = require('./route/auth');
// app.use("/auth", auth);

// const odoads_data_manage = require("./route/odoads_data_manage");
// app.use("/odoads_data_manage", odoads_data_manage);

// const media = require("./route/media");
// app.use("/media", media);

// const cart = require("./route/cart");
// app.use("/cart", cart);

// const users = require("./route/users"); 
// app.use("/users", users);

app.get("/", (req, res) => {
    res.send("Hello")
  });


  passport.use(new linkedinStrategy({
    clientID: process.env.clientID,
    clientSecret:process.env.clientSecret,
    callbackURL: process.env.callbackURL,
    scope: ["r_emailaddress", "r_liteprofile"],
  }, (
      accessToken,
      refreshToken,
      profile,
      done
    ) => {
      process.nextTick(() => {
        return done(null, profile);
      });
  }
  ));
  
  // const PORT = process.env.PORT 
  app.use('/', linkdin);
  

  app.post('/api/v1/google/profile', async (req, res) => {
    try{
     const {profile} = req.body
     const Npassword = profile.name.replace(/ /g,'')
     const password = await bcrypt.hash(Npassword,8)
     db.changeUser({database:"odoads_tblcompanies"});
     if(!profile){
       return res.status(400).json({mess:"Google authentication Failed"})
     }
     db.query("Select userid From tblcontacts ORDER By userid DESC LIMIT 1", async(err,result) => {
      if(err){
       return res.status(404).json(err.message)
      } else{
       const lastid = result[0].userid + 1
       db.query(`Insert into tblcontacts (firstname, lastname, email, password, userid, profile_image, provider) VALUES ('${profile.givenName}','${profile.familyName}','${profile.email}','${password}','${lastid}','${profile.imageUrl}','Google')`, async (err,result) => {
         if(err){
           return res.status(400).json({err:err.message})
         } else {
           return res.send(result)
         }
       })
      }
     })
   
    }catch{
     res.status(500).json({mess:"User Not Found"})
    }
   })


const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
    console.log(`Your Website Running at ${PORT}`);
})