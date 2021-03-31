const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    score: Number,
    nomerAbsen: Number,
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "class"
    }
})

const Student = mongoose.model("student", StudentSchema)
module.exports = Student;