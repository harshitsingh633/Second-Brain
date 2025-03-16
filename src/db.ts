import mongoose from "mongoose";
import * as dotenv from "dotenv";

const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const userSchema = new Schema({});

export const userModel = mongoose.model("user", userSchema);
