import mongoose from "mongoose";
import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.post("/api/v1/signup", (req, res) => {
  const username = req.body;
  const password = req.body;
});

app.post("/api/v1/signin", (req, res) => {

});

app.post("/api/v1/content", (req, res) => {

});

app.get("/api/v1/content", (req, res) => {

});

app.delete("/api/v1/content", (req, res) => {

});

app.get("/api/v1/brain/:shareLink", (req, res) => {
    
});
app.listen(8000);
