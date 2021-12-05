var express = require("express");
var app = express();
app.use(express.static('public'))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/index.html");
})
app.get("/gdsc",function(req,res){
    res.sendFile(__dirname+"/public/gdsc.html")
})
app.get("/dss",function(req,res){
    res.sendFile(__dirname+"/public/dss.html")
})
app.get("/cc",function(req,res){
    res.sendFile(__dirname+"/public/cc.html")
})
app.listen(5000||process.env.port , () => {
    console.log(`Example app listening at http://localhost:5000`)
  })