// const http = require('http')
// const data = require('.\data')
// http.createServer((req,resp)=>{

//     resp.writeHead(200,{'Content-Type':'application\json'})
//     resp.write(JSON.stringify(data))
//     resp.end()

// }).listen(5500)

// const fs = require('fs')

// const input =process.argv

if(input[2]=='add')
{
    fs.writeFileSync(input[2],input[3])
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}
else{
    console.log('invalid')
}
