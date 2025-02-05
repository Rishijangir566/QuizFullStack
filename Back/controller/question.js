
import { Category } from "../models/categoryModel.js";
import { Questions } from "../models/quesModel.js";
export async function addQuestion (req,res){
    try {
     const question = new Questions(req.body)
     console.log(question);
     
     await question.save(res.status(201).send({message:"Question Created"}))
     
    }
    catch(error){
      return res.status(401).send({ error: "Error adding question", message: error.message })
    }

}

export async function getQuestionCat (req,res){
    try{
        const question = await Questions.find({Category:req.body.category});
        if(!question || question.length===0){
      return res.status(201).send({error:"no categories found"})
        }
        return res.send(question)
    }
    catch(error){
        return res.status(401).send({ error: "Error adding question", message: error.message }) 
    }
}