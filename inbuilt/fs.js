let fs = require("fs");

// fs.writeFile("MyFile.txt", "This is data that is written using fs package", (err)=>{
//     if(err) throw err;
//     console.log("task done successfully !");
// })


// fs.appendFile("MyFile.txt", " \nAppended text", (err)=>{
//     if(err) throw err;
//     console.log("Task Done !");
// })


fs.readFile("Myfile.txt", "utf-8", (err, data)=>{
    if(err) throw err;
    console.log(data);
})


//unlink
//rename
//fs.readFileSync