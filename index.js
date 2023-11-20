import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const saltRounds=10;

mongoose.connect('mongodb://127.0.0.1:27017/ResultDB');

const port=4000;
const app = express();

const adminSchema = {
    email: String,
    password: String
}

const studentSchema = {
    email: String,
    password: String
}

const resultSchema = {
    name: String,
    fatherName: String,
    rollno: Number,
    enrollmentno: Number,
    email: String,
    gender: String,
    admissionSession: String,
    instituteName: String
}

const Admin = mongoose.model('Admin',adminSchema);
const Student = mongoose.model('Student',studentSchema);
const Result = mongoose.model('Result',resultSchema);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(bodyParser.json());

app.post("/adminlogin", (req,res)=>{
    Admin.findOne({email: req.body.email}).then((data)=>{
        if(data !== null){
            bcrypt.compare(req.body.password, data.password, function(err, result) {
                if(result === true){
                    const ans= true;
                    res.json(ans);
                }else{
                    const ans= false;
                    res.json(ans);
                }
            });
        }else{
            const ans= false;
            res.json(ans);
        }
    });
});

app.post("/studentlogin",(req,res)=>{
    Student.findOne({email: req.body.email}).then((data)=>{
        if(data !== null){
            bcrypt.compare(req.body.password, data.password, function(err, result) {
                if(result === true){
                    res.json(true);
                }else{
                    res.json(false);
                }
            });
        }else{
            res.json(false);
        }
    });
});

app.post("/studentregister",(req,res)=>{
    const email= req.body.email;
    const password= req.body.password;
    Student.findOne({email: email}).then((data)=>{
        if(data === null){
            bcrypt.hash(password, saltRounds, function(err, hash) {
                const newStudent = new Student({email: email,password: hash});
                newStudent.save().then(()=> console.log("New Student registered"));
            });
            res.json(true);
        }else{
            res.json(false);
        }
    })
});

app.post("/getResult",(req,res)=>{
    const email=req.body.email;
    Result.findOne({email: email}).then((info)=>{
        if(info !== null){
            res.json(info);
        }else{
            res.json(null);
        }
    })
});

app.listen(port,function(){
    console.log(`API server started at port ${port}`);
});