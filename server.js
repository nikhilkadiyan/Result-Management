const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port=4000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.listen(port,function(){
    console.log(`Backend server started at port ${port}`);
});