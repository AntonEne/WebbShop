const mongoose = require('mongoose')

const InventorySchema = new mongoose.Schema({
    title:String,
    price:String,
    description:String
})

mongoose.model("Inventory",InventorySchema)