import mongoose from "mongoose";
import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.post("/api/v1/signup",(req , res) => {
    const username = req.body;
    const password = req.body;
})

app.listen(8000);