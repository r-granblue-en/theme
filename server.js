const express=require("express");
const path=require("path");

const app=express();

app.get("/",function(req,res){
	res.send("TIFU hella dope y'all");
});

app.listen(2005,function(){
	console.log("Visit port 2005.");
});

app.use("/src",express.static(path.join(__dirname,"src")));