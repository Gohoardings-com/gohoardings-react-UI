const express = require('express')
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser')

app.use(cors());
app.use(express.json());

app.use( express.json({limit: '14kb'}))
app.use(bodyparser());

app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

const adminRoute = require('./routes/adminRoute.js');
const usersRoutes = require('./routes/usersRoutes');
const syncMediaRoutes = require('./routes/syncMediaRoutes')
const mediaRouter = require('./routes/mediaRoutes')

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
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Your Website Running at ${PORT}`);
})