import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{type:String, required:true},
    date:{type:Date , default:()=>Date.now()},
    score:{type:Number},
    category:{type:String,required:true}
})

export const User = mongoose.model("User" , userSchema)