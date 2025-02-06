const express = require("express");
const app = express();
var cors = require('cors')
const authRouter = require("./router/auth-router");
const connectDb = require("./utilies/db")
const PORT = process.env.PORT || 3000;
require("dotenv").config();

var corsOptions = {
    origin: 'http://localhost:5173',
    methods : "GET, POST , PUT , PATCH , DELETE , HEAD" ,
    credentials : true
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/auth/', authRouter);


app.get("/",(req, res) => {
    res.json("this is login page");
})


connectDb().then(() =>{
app.listen(PORT ,()=>{
    console.log("connect successfully");
})}).catch((error) => console.log(error))

