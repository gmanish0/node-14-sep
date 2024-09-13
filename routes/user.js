const express = require('express');
const UC = require('../controller/usercontroller');
const router = express.Router();


router.get('/users',(req,res)=>{
    UC.grtUser(req,res);
})
module.exports=router