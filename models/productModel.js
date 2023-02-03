const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    name: {
        type: String
    },
    category: {
        type: String
    },
    img_url: {
        type: String
    },

    color: [String],

    price: {
        type: Number
    },

    size: [String],

    discount: {
        type: Boolean
    },

    new: {
        type: Boolean
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)