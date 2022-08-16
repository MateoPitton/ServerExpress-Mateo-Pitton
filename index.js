const express = require('express')
const app = express()
const Contenedor = require('./Contenedor')
let data = new Contenedor('./productos.txt')
const PORT=8080

app.get('/',(req,res)=>{
    data.getAll()
.then((data)=>{
    res.send(data);
})

})

app.get('/prodRandom',(req,res)=>{
    data.getRandom()
    .then((data)=>{
        res.send(data);
    })
})

const server = app.listen(PORT,()=>{
    console.log('$ {PORT}');
})

server.on("error",err=>console.log('error ${err}')) 