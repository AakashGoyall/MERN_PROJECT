const User = require("../model/user-schema")
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const contact = require("../model/contact-schema")



// This is Home Logic
const Home = (req,res) => {
    res.json( "this is home page ");
}



// This is Registration LOgic
const Registration = async(req, res) => {
    try{
        console.log(req.body);
        // return res.json({msg : req.body})
    const {username, email, phone, password } = req.body;
    const userExist =  await User.findOne({email});
    // res.json(req.body);
    console.log("error ")

    if(userExist){
        console.log("User are already present");
        return res.status(400).json({msg : "User are already exists"});
    }
    console.log("errir ")

    // const hash_password = await bcrypt.hash(password,12);
    // console.log(hash_password)
    const UserCreate = await User.create({username, email, phone, password });
    console.log(UserCreate)
    if(UserCreate){
        console.log("User create successfully");
        console.log(UserCreate)
        const data = await User.findOne({email})
        return res.status(201).json({msg : UserCreate, token: await UserCreate.generateToken()});
    }
    return res.status(500).json({error : "illegal credentials"})
}
catch(err){
    console.error("this is invalid credential");
    return res.status(500).json({ error: "Internal server error" });
}
    
};



//  This is Login LOgic
const Login = async(req, res) => { try{
    const {email, password} = req.body;
    console.log(req.body)
    console.log(req.body);
    const UserExist = await User.findOne({email});
    console.log("errir ")

    if(!UserExist){
        return res.status(400).json({err : "invalid credentials "})
    }
    console.log("errir ")
    console.log(password)
    console.log(UserExist.password)
    const cpassword = bcrypt.compare(password, UserExist.password);

    if(password){
        return res.status(201).json({msg : "user login successfully"});
    }
    res.json("invalid credentials");
}
catch(err){
    console.log("this is anotherise error");
    return res.send("anotherise error");
}
}



// This is Logout Logic
const Logout = (req, res) => {
    res.json("this is logout page");
}


const Contact = async (req, res) => {
    try{
        console.log(req.body)
    const { username ,email , msg }  = req.body;
    console.log("hello")

    const createContact = await contact.create({username , email , msg})
    if(createContact){
        res.json({msg : " contact detail send"})
    }
    }catch(err){
        console.log("contact schema error");
        res.status(500).json({msg :"contact schema error"});
    }
}
module.exports = {Home ,Login ,Logout , Registration , Contact};

