const mongoose = require("mongoose")

const PinjamBukuSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true
    },
    detail : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book"
    },
    studentName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    }
})

const PinjamBuku = mongoose.model("pinjamBuku", PinjamBukuSchema)
module.exports = PinjamBuku;