const express=require("express");

const app=express();
const mongoose=require('mongoose');

//Routes
app.get('/',(req,res) =>{
   res.send('We are on Home');
});


app.get('/posts',(req,res)=>{
res.send('We are on posts');
});


mongoose.connect('process.env.DB_Connection')
.then(()=>{
   console.log('connected to Mongo')
}).catch((error)=>{
    console.log(error)
})



app.listen(3000,()=>{
   console.log('Node API is running on port 3000')
});