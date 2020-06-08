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
router.get('/login',(req,res)=>{
    res.render('login');
});
router.get('/patients',(req,res)=>{
    res.render('patients');
});
router.get('/payment',(req,res)=>{
    res.render('payment');
});
module.exports = router