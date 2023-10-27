import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const port=3000;
const app = express();

const APIurl = "http://localhost:4000"
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/studentregister",(req,res)=>{
    res.render("studentregister.ejs");
});

app.post("/api/admin",async (req,res)=> {
    try{
        const repsonse = await axios.post(`${APIurl}/adminlogin`, req.body);
        if(repsonse.data){
            res.render("Admin.ejs");
        }else{
            res.render("index.ejs",{message: "User id and password not matched."});
        }
    }catch(error){
        console.error("Failed to make request:",error.message);
        res.status(500).send("failed to fetch activity. Please try again.");
    }
});

app.post("/student",(req,res)=>{
    console.log("student login");
});


app.listen(port,function(){
    console.log(`Backend server started at port ${port}`);
});