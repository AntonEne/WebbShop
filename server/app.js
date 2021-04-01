const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Inventory')

app.use(bodyParser.json())
const Item = mongoose.model("Inventory")


const mongoUri = "mongodb+srv://dbUser:dbUserPassword@cluster0.kiwun.mongodb.net/WebbShop?retryWrites=true&w=majority"
  

mongoose.connect(mongoUri, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected", () =>{
    console.log("connected to mongo")
})

mongoose.connection.on("error", (err) =>{
    console.log("error", err)
})

app.get('/',(req,res) =>{
    res.send("welcome to node js test")
})

app.post('/send-data',(req,res) => {
    const item = new Item({
        title:req.body.title,
        price:req.body.price,
        description:req.body.description
    })
    item.save()
    .then(data=>{
        console.log(data)
        res.send("success")
    }).catch(err=>{
        console.log(err)
    })
})

app.listen(3000, () => {
    console.log("server running")
})