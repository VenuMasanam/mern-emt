const mongoose = require("mongoose");
 
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required: [true, "please enter  name"]
    },
    email:{
        type:String,
        required: [true, "please enter the email"],
        unique: [true, "email already exist,please enter another email"],
        trim: true, 
        sparse: true
    },
    password:{
        type:String,
        required: [true, "please enter the password"]
    },
    

},{
    timestamps:true,
});

module.exports=mongoose.model("User",userSchema)