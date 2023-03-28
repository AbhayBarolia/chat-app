const express = require('express');
const bodyParser = require('body-parser');
const loginRoutes= require('./routes/login');
const chatRoutes= require('./routes/chatbox');
const app= express();

app.use(bodyParser.urlencoded());

app.use('/login',loginRoutes);

app.use('/chat-box',chatRoutes);

app.get('/',loginRoutes);


app.listen(5000);
