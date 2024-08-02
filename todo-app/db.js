//import mongoose from "mongoose";



// eslint-disable-next-line no-undef
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/todos")

mongoose.connection.on('connected', () => {
    console.log("Mongoose connected to MongoDB");
});

mongoose.connection.on('error', (err) => {
    console.log("Mongoose connection error:", err);
});

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