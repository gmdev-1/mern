const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        name: String,
    }
})

const Product = mongoose.model('product', productSchema);

module.exports = Product