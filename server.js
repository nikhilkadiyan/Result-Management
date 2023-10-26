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

app.post("/api/admin",async (req,res)=> {
    try{
        console.log(req.body);
        const reponse = await axios.post(`${APIurl}/adminlogin`, req.body);
        console.log(reponse.data);
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