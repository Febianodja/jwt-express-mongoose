const mongoose = require("mongoose")

const ClassSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lantai: Number
})

const Class = mongoose.model("class", ClassSchema)
module.exports = Class;