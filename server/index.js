const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser')

dotenv.config()
const app = express();
app.use(cors({credentials:true, origin:"http://localhost:3000",  methods: "GET,POST,PUT,DELETE"}))
app.use( express.json({limit: '14kb'}))
app.use(bodyparser.urlencoded({ extended: true}));
app.use(cookieParser());

const mediaRouter = require('./routes/mediaRoutes')
const LoginRoute = require('./routes/loginWeb');
const addOnCart = require('./routes/CartItemRoute');
const productList = require('./routes/productListRoute');
const enquiryRoute = require('./routes/enquiryRoute');
const filters = require('./routes/filterRoute');

app.use("/api/v1/filter", filters);
app.use("/api/v1/enquiry", enquiryRoute);
app.use("/api/v1/product", productList);
app.use("/api/v1/cart", addOnCart);
app.use('/api/v1/registration',LoginRoute)
app.use('/api/v1/media', mediaRouter)

app.listen( process.env.PORT, () => {
    console.log(`Your Website Running at ${ process.env.PORT}`);
})