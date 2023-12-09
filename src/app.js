const express=require("express");
const fs=require('fs');
const path=require("path")
const app=express();
const pug= require("pug");
const port= 3000;
const static_path=path.join(__dirname,"../templates/views")
const static_path1=path.join(__dirname,"../Assets")
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.use(express.static(static_path1));
app.set("view-engine","pug");
app.set("views",static_path);
app.get("/",(req,res)=>{
    res.render("home.pug")
});
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})