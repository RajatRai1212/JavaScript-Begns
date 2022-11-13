//make file
//read file
// update rename delete file
//CRUD with fs

const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'CRUD')
const filepath=`${dirPath}/apple.txt`


// fs.writeFileSync(filepath,'this the file ')

// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filepath,"  i am adding this with the help of appendFile",(err)=>{
//     if(!err) console.log("file is updated")    
// })

