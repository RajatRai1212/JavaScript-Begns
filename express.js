const express= require('express')
const app = express()

app.get("/",(req,res)=>{
   res.send(`
   
   
   <h1>Welcome to home page</h1>
   <a href='/about'>Go to about page</a>
   
   
   
   `)
})

app.get("/about",(req,res)=>{
   res.send(`
    
    <input type="text" placeholder="Username " value = "${req.query.name}"/>
     hello this is the about page
     <br>
     <a href='/'>Go to Home page</a>
    <button>About</button>
    
    `)
})

app.get("/help",(req,res)=> {
   res.send([
    {
    name:'sunny'
   // 'mail':"sunnysex@gmail"
    },
    {
        name:'sunny'
        //'mail':"sunnysex@gmail" 
    }


    

   ])
})

app.listen(5050)