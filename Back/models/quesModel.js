import mongoose from "mongoose";

const quesSchema = new mongoose.Schema({
    id:{type:String , required:true},
    question:{type:String , required:true},
    answer:{type:String , required:true},
    options:[{type:String , required:true}],
    category:{type:mongoose.Schema.Types.ObjectId,ref:"Cetegory" }
});


export const Questions = mongoose.model("Questions",quesSchema)