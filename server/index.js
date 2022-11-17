const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser')

dotenv.config()
const app = express();
app.use(cors({credentials:true, origin:"http://localhost:3000",  methods: "GET,POST,PUT,DELETE",}))
app.use( express.json({limit: '14kb'}))
app.use(bodyparser.urlencoded({ extended: true}));
app.use(cookieParser());

const auth = require('./routes/auth');
// const adminRoute = require('./routes/adminRoute.js');
const usersRoutes = require('./routes/usersRoutes');
const syncMediaRoutes = require('./routes/syncMediaRoutes')
const mediaRouter = require('./routes/mediaRoutes')
const LoginRoute = require('./routes/loginWeb');
const addOnCart = require('./routes/CartItemRoute');
const testRouter = require('./routes/testRoute')


app.use("/auth", auth);
app.use("/api/v1/cart", addOnCart);
app.use('/api/v1/registration',LoginRoute)
// app.use('/api/v1/admin', adminRoute);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/syncMedia', syncMediaRoutes);
app.use('/api/v1/media', mediaRouter)
app.use('/api/v1/testOnly' , testRouter)

app.listen( process.env.PORT, () => {
    console.log(`Your Website Running at ${ process.env.PORT}`);
})