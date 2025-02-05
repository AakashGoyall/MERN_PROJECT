const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const connectDb = require("./utilies/db")
require("dotenv").config();


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth/', authRouter);


app.get("/",(req, res) => {
    res.json("this is login page");
})


connectDb().then(() =>{
app.listen(PORT ,()=>{
    console.log("connect successfully");
})}).catch((error) => console.log(error))

