//eas
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');
const bcrypt= require('bcrypt');
const app = express();
const PORT=8000;
app.use(express.json());
app.use (cors());

const DB="mongodb+srv://himanshubansal811:bansal302002@cluster0.qmwrf.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB).then (()=>{
    console.log(`Connection Done`)
}).catch(e=> console.log(`Connection Error`))

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password==password) res.json("success");
            else res.json("the password is wrong");
        }
        else{
            res.json("no record");
            
        }
       
    })
})

app.post("/register",async (req,res) => {
    EmployeeModel.create(req.body)
    
    try {
        const user= await EmployeeModel.findOne({email:email})
        if(user){
            return res.json("user already exists");
        }
       
        const saltRounds=10;
        const hashedPassword=await bcrypt.hash(password, saltRounds);

        const newEmployee= await EmployeeModel.create({email, password:hashedPassword});
        res.json(newEmployee);
    }
    catch (e){res.json({e:"error"})
}
})

app.listen(PORT, ()=>{
    console.log(`listing on ${PORT}`);
});
