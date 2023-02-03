const mongoose = require('mongoose')

const filterSchema = mongoose.Schema({

name: String,

filters: [],

type: String


})

module.exports = mongoose.model("Filter", filterSchema)