const express = require('express');
const fs= require('fs');

const router= express();

router.get('/',(req,res,next)=>{
    console.log('chatbox page get');
    
        const dt=fs.readFileSync('message.txt');
        res.send(dt+'<br><form action="/chat-box" onsubmit="document.getElementById(`userName`).value=localStorage.getItem(`userName`)" method="POST"><input type="text" name = "message"><input type=hidden name=userName id= userName><button type="submit" >Send</button></form></body>');
});

router.post('/',(req,res,next)=>{
    console.log('chatbox page post');
    console.log(req.body);
    let dt= req.body.userName+': '+req.body.message+'  ';
    fs.appendFileSync('./message.txt',dt+'\n');
    res.redirect('/chat-box');
});




module.exports= router;