const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    //buyer:String,
    //totalPrice:String,
    //date:Date
})

mongoose.model("order",OrderSchema)