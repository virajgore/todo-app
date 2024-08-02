//import mongoose from "mongoose";



// eslint-disable-next-line no-undef
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/")
const todoSchema = mongoose.Schema(
{
    title: String,
    description: String,
    completed: Boolean
}
)

const todo = mongoose.model('todos',todoSchema);

// eslint-disable-next-line no-undef
module.exports = {
    todo
}