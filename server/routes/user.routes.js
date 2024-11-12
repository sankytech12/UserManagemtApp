const express=require('express');
const userController=require('../controllers/user.controller.js');

const router=express.Router();

router.post('/',userController.registerUser);
router.get('/',userController.getAllUsers);
router.patch('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);

module.exports=router;
