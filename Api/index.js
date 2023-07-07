const express = require('express');
const app = express();
app.post('/register',(req,res)=>{
    res.json('test2 ok');
})

app.listen(4000);