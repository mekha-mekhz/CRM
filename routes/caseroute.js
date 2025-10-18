const express=require('express')
const router=express.Router()
const casecontroller=require('../controllers/casecontroll')
router.post("/cases", casecontroller.createcase);      
router.get("/cases", casecontroller.getcase);          
router.patch("/cases/:id", casecontroller.updatecase);
router.delete("/cases/:id", casecontroller.deletecase);
module.exports=router