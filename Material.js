const express = require('express');
const router = express.Router();
// const User = require('../model/User')

router.get('/',(req,res)=>
{
    res.render('home')
});

router.get('/register',(req,res)=>{
    res.render('registration');

});

module.exports = router