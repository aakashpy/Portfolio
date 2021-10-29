require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')
const app = express()
app.use(cors());
app.use(express.json());
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));