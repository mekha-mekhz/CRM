const express=require('express')
const router=express.Router()
const usercontroller=require('../controllers/usercontroller')
const auth=require('../middleware/auth')
router.post("/register", usercontroller.createuser);
router.post("/login", usercontroller.loginuser);
router.get('/profile',auth.authuser,usercontroller.getprofile)
module.exports=router