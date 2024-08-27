// import express for node_modelus 

const express = require("express")

const app = express();

// for crating an routes we must define 4 thing in 1- routes  , call back function  technically the call back functions is called a middle ware 
app.get('/', function(req,res){
    res.send("Your server is created")
})

// we can create many routes for this page 
app.get('/about',function(req,res){
    res.send("This is your about us page ")
})

// if we don't user search as those routes whics is not present in the server then we can handle it by using all routes *

app.get('*', (req,res)=>{
    res.send("Page not Found ")
})

// give the port number to the server as localhost we can give the poart at any number like 3000,6000,5000 its depend on you 

app.listen(3000, function(){
    console.log('====================================');
    console.log("Your server is created ");
    console.log('====================================');
})