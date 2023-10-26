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

const Admin = mongoose.model('Admin',adminSchema);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(bodyParser.json());

app.post("/adminlogin", (req,res)=>{
    console.log(req.body);
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


app.listen(port,function(){
    console.log(`API server started at port ${port}`);
});