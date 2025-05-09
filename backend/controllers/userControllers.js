const User = require("../models/userModel");

const getUser=async(req,res)=>{
    const user=await User.findOne(req.params.id);
    if(!user)
    {
        res.status(404);
        throw new Error("user Not Found");
    }
    res.status(200).json(user);
};

const createUser= async(req,res)=>{
    const {name, email,password}=req.body
    if(!name|!email|!password){
        res.status(400);
        throw new Error(" All Field are mandatory");
    }
    

    const user=await User.create({
        name,email,password
    });
    res.status(201).json(user);
};

const updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
        res.status(404);
        throw new Error("User Not Found");
    }
    res.status(200).json(user);
};

const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User Not Found");
    }
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: `User deleted successfully` });
};

const getUsers=async(req,res)=>{
    const users=await User.find();
    res.status(200).json(users);
};

const loginUser= async(req,res)=>{
    const { email,password}=req.body
    try{
        const user=await User.findOne({email,password});
        if (!user){
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        
        res.status(200).json({ message: 'Login successful',email:user.email  });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = {getUser,createUser,updateUser,deleteUser,getUsers,loginUser};