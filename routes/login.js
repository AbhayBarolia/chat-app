const express = require('express');
const fs= require('fs');

const router= express();

router.get('/',(req,res,next)=>{
    console.log('login page');
    
    res.send('<form onsubmit="localStorage.setItem(`userName`,document.getElementById(`userName`).value)" action="/login" method="POST"><input type= text name = userName id=userName><button type =submit>Submit</button></form>');
});

router.post('/',(req,res,next)=>{
    console.log('username fetched');
    console.log(req.body);
    let dt= JSON.stringify(req.body);
    let data=dt.split(':')[1];
    fs.appendFile('./name.txt',data.substring(1,data.length-2),err=>{
        if(err)
        console.log(err);
    });
    res.redirect('/chat-box');
});



module.exports= router;