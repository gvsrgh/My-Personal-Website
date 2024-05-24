
const fs = require("fs");

fs.writeFile("Test.txt","Hello World from Node js!!!", (err) => {
    if(err) throw err;
    console.log("File Saved Successfully!!");
});

fs.readFile("./readFileTest.txt","utf-8",(err,data)=>{
    if (err) throw err;
    console.log(data);
}
);