/* eslint-disable no-undef */
//import express from "express";


//import express, { json } from "express";

const express = require("express")
//import mongoose from "mongoose";
// eslint-disable-next-line no-undef
const {createTodo} = require("./types")
const {todo} = require("./db")
const {updateTodo} = require("./types")
const app = express();
//middleware
app.use(express.json());

app.get('/todos',async function (req,res){
   const todos = await todo.find({});
   res.json({
    todos
   })
})

app.post('/todo',async function (req,res){
    const createPayload  = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            "msg":"You sent the wrong inputs"
        })
        return;
    }
    //put in mongodb

    await todo.create(
        {
            title:createPayload.title,
            description:createPayload.description,
            completed:false
        }

    )
    res.json({
        msg: "Todo Created"
    })
})

app.put('/complete',async function (req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    
    if(!parsedPayload.success){
        res.status({
            "msg":"You have sent the wrong id"
        })
        return;
    }

  await  todo.update(
    {
        _id: req.body.id
    },
    {
        completed:true
    }
  )
  res.json({
    "msg":"Todo marked as completed"
  })
})

app.listen(3000);