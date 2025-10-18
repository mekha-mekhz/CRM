const express=require('express')
const router=express.Router()
const customcontrol=require('../controllers/customcontroller')
router.post("/customers",customcontrol.createcustomer)
router.get("/customers",customcontrol.getcustomer)
router.put("/customers/:id",customcontrol.updatecustomer)
router.delete("/customers/:id",customcontrol.deletecustomer)
module.exports=router