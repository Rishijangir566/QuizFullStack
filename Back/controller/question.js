
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



export async function getQuestion(req, res){
    try{
        const question = await Questions.find({})
        if(!question || question.length===0){
            return res.status(500).send({error:" categories not valid "})
        }
        return res.send(question)
    }
    catch(error){
        return res.status(500).send({error:" categories not valid "})
        
    }
}

export async function getQuestionCat (req,res){
    try{
        const {category}=req.params;
        if(!category)
            return res.status(500).send({error:" categories not valid 1"})

        const  categoryExists= Category.find({name:category})

        if(!categoryExists)
            return res.status(500).send({error:" categories not valid"})
        
        const question = await Questions.find({category});
        if(!question || question.length===0){
            
            return res.status(500).send({error:"No question found"})
        }
        return res.send(question)
    }
    catch(error){
        return res.status(401).send({ error: "Error adding question", message: error.message }) 
    }
}

 // only bulk save all question only one time use this function 

// export async function bulkCreateQues(req, res){

//     try{
//         const question = req.body
//        const createdQuestions = await Questions.insertMany(question)
//        res.status(201).json(createdQuestions)
//     }
//     catch(error){
//         res.status(500).json({message:error.message})
//     }
// }