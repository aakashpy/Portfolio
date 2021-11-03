require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')
const app = express()
app.use(cors());
app.use(express.json());

const uri = String(process.env.ATLAS_URI);
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true,
})
.then(() => console.log("connection extablished!"))
.catch((err) => {
    console.log(err);
});
const Email = require("./api/email")
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname, '/client/build/index.html'));
    })
    app.use("/api/email",Email);
}

const port = process.env.PORT || 5000;
app.get("/api/", (request, response) => {
    response.json({ message: "Server is working!!!!!!" });
});
app.use("/api/email",Email);
app.listen(port,()=>console.log(`Server started on port ${port}`));