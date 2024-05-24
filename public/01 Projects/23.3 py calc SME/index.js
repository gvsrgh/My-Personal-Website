const fs = require("fs");

fs.copyFile("Calc.txt","Calc.py",(err)=>{
    if(err) throw err;
    console.log("Simple Python Calc is successfully build!!!")
});