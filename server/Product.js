const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:String,
    category:String,
    price:String,
    // userId:String,
    company:String,
    image:String
})
module.exports = mongoose.model('products',productSchema)