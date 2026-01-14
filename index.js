const express=require('express')
require('dotenv').config()
const app=express()
const port=process.env.PORT;
const database=process.env.DATABASE_URL
const dbName = process.env.DATABASE_NAME;


app.get('/',(req,res)=>{
res.send(`database name:${dbName},database url:${database}`)
})
app.get('/get',(req,res)=>{
    res.send(`Database url:${database}, database name: ${dbName}`)
})

app.listen(port, function(){
    console.log(`app running port ${port}`);
})
