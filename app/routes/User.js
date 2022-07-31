var express=require('express');
var UserController=require('../controllers/User');
var route=express.Router();

route.post('/add-user',UserController.create);
route.get('/',UserController.findAll);
route.get('/edit-user/:id',UserController.find);
route.put('/update-user/:id',UserController.update);
route.delete('/delete-user/:id',UserController.destroy);

module.exports=route;