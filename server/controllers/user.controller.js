const AppError = require('../error/app.error');
const {userRegisterSchema}=require('../lib/validator/user.validator');
const UserService=require('../services/user.service');

const registerUser=async(req,res)=>{
    const validationResult=await userRegisterSchema.safeParseAsync(req.body);
    if(validationResult.error){
        return res.status(400).send(validationResult.error.errors);
    }
    const {firstName,lastName,email,dob}=validationResult.data;
    try{
        const user=await UserService.registerUser({firstName,lastName,email,dob});
        res.status(201).send({data: user});
    }catch(err){
        res.status(500).send(err);
    }
}

const getAllUsers=async(req,res)=>{
    
    try{
        const users=await UserService.getAllUsers();
        res.status(200).send({data: users});
    }catch(err){
        res.status(500).send(err);
    }
}

const updateUser=async(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    console.log(data);
    
    try{
        const user=await UserService.updateUser(id,data);
        res.status(200).send({data: user});
    }catch(err){
        res.status(500).send(err);
    }
}

const deleteUser=async(req,res)=>{
    const id=req.params.id;
    
    try{
        const user=await UserService.deleteUser(id);
        res.status(200).send(user);
    }catch(err){
        if(err instanceof AppError){
            return res.status(err.code).json({message:err.message});
        }
        res.status(500).send(err);
    }
}

module.exports={registerUser,getAllUsers,updateUser,deleteUser};