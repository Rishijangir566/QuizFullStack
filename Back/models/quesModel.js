import mongoose from "mongoose";

const quesSchema = new mongoose.Schema({
    question:{type:String , required:true},
    answer:{type:String , required:true},
    options:[{type:String , required:true}],
    category:{ type:String, required:true }
    // category:{type:mongoose.Schema.Types.ObjectId,ref:"Cetegory" } object id 
});


export const Questions = mongoose.model("Questions",quesSchema)