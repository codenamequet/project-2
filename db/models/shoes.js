const mongoose = require('./shirts')

const ShoesSchema = new mongoose.Schema({
    name: String,
    category: String,
    color: String,
    images: [String],
    tags: [String]
})

const Shoes = mongoose.model('Shoes', ShoeSchema)

module.exports = Shoes
module.exports = mongoose
