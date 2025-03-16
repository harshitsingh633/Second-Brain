import mongoose from "mongoose";
import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
const Jwt_password = process.env.Jwt_password;

const app = express();
app.use(express.json());
app.post("/api/v1/signup", async(req, res) => {
 // TODO: zod validation , hash the password
  const {username , password} = req.body;

  await UserModel.create({
    username : username,
    password : password
  })
  res.json({
    message: "User signed up"
  })
});

app.post("/api/v1/signin",async (req, res) => {
    const {username , password} = req.body;
    const existingUser = await UserModel.findOne({
      username,
      password
    })
    if(existingUser){
      const token = jwt.sign({
        id : existingUser._id
      },Jwt_password)

      res.json({
        token
      })
    }else{
      res.status(403).json({
        message: "Incorrect credentials"
      })
    }
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
