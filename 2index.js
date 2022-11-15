const express = require('express')
const reqFilter = require('./middleware.js')
const app = express()



// app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send("Welcome again bitches <a href='/users'>user</a> ")


})
app.get('/users',reqFilter,(req,res)=>{

    res.send("This is user page")

})
app.get('/contact',reqFilter,(req,res)=>{

    res.send("This is Contact page")

})
app.listen(1111)