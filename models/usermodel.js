const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({

    firstname:{type:String},
    lastname:{type:String},
    email:{type:String,required:true,unique:true},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    usertype:{type:String,required:true,enum:["admin", "sales", "support", "manager"]},

})

const User=mongoose.model('User',userSchema)

module.exports=User