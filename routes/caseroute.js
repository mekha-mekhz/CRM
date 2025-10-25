const express=require('express')
const router=express.Router()
const casecontroller=require('../controllers/casecontroll')
router.post("/", casecontroller.createcase);      
router.get("/", casecontroller.getcase);          
router.patch("/:id", casecontroller.updatecase);
router.delete("/:id", casecontroller.deletecase);
module.exports=router