var UserModel=require('../model/user');

exports.create=async(req,res)=>{
    if(!req.body.name && !req.body.email){
        res.status(400).send({
            message:'Content can not be empty'
        })
    }
    
    var user=new UserModel({
        name:req.body.name,
        email:req.body.email,
        address:req.body.address
    });
    await user.save().then(data=>{
        res.status(200).send({
            message:'User created successfully',
            user:data,
        })
    })
}

exports.findAll=async(req,res)=>{
    const user=await UserModel.find();
    try{
        res.status(200).json(user)
    }catch{
        res.status(400).send({
            message:"Something has wrong"
        })
    }
}
exports.find=async(req,res)=>{
    const user=await UserModel.findById(req.params.id);
    try{
        res.status(200).json(user)
    }catch{
        res.status(400).send({
            message:"Something has wrong"
        })
    }
}

exports.update=async(req,res)=>{
    var id=req.params.id;
    await UserModel.findByIdAndUpdate(id,req.body).then(data=>{
        if(!data){
            res.status(500).send({
                message:'Something has wrong'
            })
        }
        else{
            res.status(200).send({
                message:"User updated successfully"
            })
        }
    })

}

exports.destroy=async(req,res)=>{
    await UserModel.findByIdAndRemove(req.params.id).then(data=>{
        if(!data){
            res.status(500).send({
                message:'Something has wrong please'
            })
        }else{
            res.status(200).send({
                message:'User deleted successfully'
            })
        }
    })
}