import * as dotenv from "dotenv";
dotenv.config();
import mongoose ,{ model, Schema } from "mongoose";

if(!process.env.MONGO_URL){
      throw new Error ("MONGO_URL is not present in the Environment Variable file");
}

mongoose.connect(`${process.env.MONGO_URL}`);

const UserSchema = new Schema({
      username : {type: String , unique : true},
      password : String
});

export const UserModel = model("User");