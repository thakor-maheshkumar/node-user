const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,   
    },
    address:{
        type:String,
    }
});

var user=new mongoose.model('User',schema);
module.exports=user;