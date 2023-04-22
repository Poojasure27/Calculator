
//jshint esversion:6

const express = require("express");

const bodyParse = require("body-parser");

const app = express();

app.use(bodyParse.urlencoded({extended: true}));

app.get("/" , function(req,res){

    res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req,res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("The Result is  " +result);
});

app.get("/bmiCalculator" , function(req,res){

    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator" , function(req,res){
     var weight = parseFloat(req.body.weight);
     var height = parseFloat(req.body.height);
     var bmi = weight / (height*height);

     res.send("Your BMI is" + bmi);
});

app.listen(3000,function(){
    console.log("The Server is running in port 3000");
});