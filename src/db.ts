import mongoose, { model, Schema } from "mongoose";

mongoose.connect("")
const userSchema = new mongoose.Schema({
    username : {type : String , required : true , unique : true},
    password : {type : String , required : true,}
})

export const UserModel = model("User",userSchema)

const contentSchema = new mongoose.Schema({
    title: String,
    link : String,
    tags : [{type: mongoose.Types.ObjectId, ref:"Tag"}],
    userId : {type: mongoose.Types.ObjectId, ref:"User", required:true}
})

export const ContentModel = model("Content" , contentSchema);

const linkSchema = new mongoose.Schema({
    hash : String,
    userId : {type: mongoose.Types.ObjectId, ref : "User", require: true , unique: true},
})

export const LinkModel = model("Links" , linkSchema);