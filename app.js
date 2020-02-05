const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/post')

app.use('/post',postRoute)
//ROUTES
app.get('/',(req,res) =>{
    res.send("Hello node.js");
})



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },() => 
console.log('connected to db')
);

//How to we start listening to the server 
app.listen(3000);