const fs  = require('fs')

//fs.writeFileSync('apple.txt','this is apple file hahaha')
//this creates a file in the open dir not in a folder

//using this in path module with a loop

const path = require('path')
const dirPath = path.join(__dirname,'files')
console.warn(dirPath)

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+`/hello${i}.txt`,"created a file")
// }
fs.readdir(dirPath,(err,files)=>{
  
    files.forEach((item)=>{
        console.log("file name is ",item)

    })
})