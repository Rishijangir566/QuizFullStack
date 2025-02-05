
import { Questions } from "../models/quesModel.js";
export async function addQuestion (req,res){
    try {
     const question = new Questions(req.body)
     await question.save()
     res.status(201).send({message:"Question Created"})
    }
    catch(error){
      return res.status(401).send({ error: "Error adding question", message: error.message })
    }

}