const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
const dbConfig=require('./config/database');
const mongoose=require('mongoose');
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Database connected successfully")
}).catch(err=>{
    console.log('Not connected with database');
})
app.listen(3000,()=>{
    console.log("Server connected on port number 3000");
})

var UserRoute=require('./app/routes/User');

app.use('/user',UserRoute);