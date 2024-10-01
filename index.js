const express = require('express')
const mongoose = require('mongoose')
const holders = require("./routes/holders")
const laptops = require("./routes/laptops")
const entrys = require("./routes/entrys")
require('dotenv').config()  

const app = express()
app.use(express.json()) 
app.use("/api/holders",holders)
app.use("/api/laptops",laptops)
app.use("/api/entrys",entrys)

app.get

app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    mongoose.connect(process.env.CNX_MONGO)
    .then(()=> console.log('conected!'))
    .catch((error)=> console.log(error))
})
