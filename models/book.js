const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    }
})

const Book = mongoose.model("book", BookSchema)
module.exports = Book;