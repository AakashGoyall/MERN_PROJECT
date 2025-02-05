const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username :{ type: String , required : true},
    email :{ type: String , required : true},
    phone :{ type: String , required : true},
    password :{ type: String , required : true}
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); // Only hash if password is modified

    try {
        console.log(this.username);
        const hashPassword = await bcrypt.hash(this.password, 12);
        this.password = hashPassword;
        next();
    } catch (err) {
        next(err);
    }
});
userSchema.methods.generateToken = async function(){
    try{

        return  await jwt.sign({ username: this.username }, "yourSecretKey", { expiresIn: "3d" });

    }
    catch(err){
        console.error(err);
    }
}

const User = new mongoose.model("User", userSchema);



module.exports = User;