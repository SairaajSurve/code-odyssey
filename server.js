require('express-async-errors')

const express = require('express');
const app = express();

const {router} = require('./route/route')

app.listen(3001,()=>{
    console.log("Connected at "+3001);
});

app.use(express.static('./public'));
app.use(express.json());

app.use('/',router);