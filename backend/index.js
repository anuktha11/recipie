const express =require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const userRoutes = require('./routes/userRoute')


mongoose.connect("mongodb://127.0.0.1:27017/food").then(()=>{
    console.log("database connected");
}).catch(error=>{
    console.log(error.message);
})


const app=express()

app.get('/',(req,res)=>{
    res.send('hello')
})
app.use(express.json())

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}))


app.use('/',userRoutes)



app.listen(5000,()=>{
    console.log('http://localhost:5000');
})