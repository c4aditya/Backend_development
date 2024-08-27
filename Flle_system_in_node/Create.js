
// const { log } = require('console');
const geting_expported_file = require("./New_created_file")
const file_system = require('fs')

file_system.writeFile("New_created_file.js","this is new file", function(err){
    if(err){
        console.log("File not Cretaed");
        
    }
    else{
        console.log("Successfully File!");
        
    }
} )

console.log(geting_expported_file);


