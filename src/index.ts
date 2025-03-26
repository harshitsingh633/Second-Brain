import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
import bcrypt from "bcrypt";
import { z } from "zod";
const app = express();


if(!process.env.Jwt_Password){
  throw new Error("JWT_SECRET is not set in the environment variables");
}

const Jwt_password = process.env.Jwt_Password;

app.use(express.json());

const UserSchema = z.object({
    username : z.string().min(3).max(20),
    password : z.string().min(6).max(50),
})

app.post("/api/v1/signup", async (req, res) => {
  // TODO: zod validation , hash the password
  const { username, password } = UserSchema.parse(req.body);

  const hashPassword = await bcrypt.hash(password,10);

  try {
    await UserModel.create({
      username: username,
      password: hashPassword,
    });
    res.json({
      message: "User signed up",
    });
  } catch (e) {
    res.status(411).json({
      message: "User already exsists",
    });
  }
});



app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = UserSchema.parse(req.body);


  const existingUser = await UserModel.findOne({
    username
  });
  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      Jwt_password
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

app.post("/api/v1/content", (req, res) => {
  const {username , password } = UserSchema.

});

app.get("/api/v1/content", (req, res) => {});

app.delete("/api/v1/content", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(8000);
