const express = require("express");
const router=express.Router();
const {getUser,createUser,updateUser,deleteUser,getUsers,loginUser} = require("../controllers/userControllers");

router.route('/:id').get(getUser);

router.route('/').get(getUsers);

router.route('/signup').post(createUser);

router.route('/:id').put(updateUser);

router.route('/:id').delete(deleteUser);

router.route('/login').post(loginUser);



module.exports=router;
