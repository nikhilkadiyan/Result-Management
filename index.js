const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port=3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/admin",(req,res)=>{
    console.log("admin logined");
});

app.post("/student",(req,res)=>{
    console.log("student login");
});


app.listen(port,function(){
    console.log(`API server started at port ${port}`);
});