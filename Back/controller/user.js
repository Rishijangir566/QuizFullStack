import { Category } from "../models/categoryModel.js";
import { User } from "../models/userModel.js";


export async function registerUser(req ,res){
    try{
        const userData = new User(req.body)
        await userData.save()
        res.status(201).send({ message:"User added", })
    }
    catch(error){
        return res.status(500).send({
            message: "Error user not found",
            error: error.message,
        });
    }

}

export async function getCategories(req , res){
    try{
        const Categorys = await Category.find({})
       if(!Categorys || Categorys.length===0){
         return res.status(401).send({Error:"No categorys Found"})
       }
       res.send(Categorys)

    }
    catch(error){
        return res.status(500).send({
            message: "Error fetching categories",
            error: error.message,
        });
    }
}

export async function addCategory(req,res){
   
    try{
        const category = new Category(req.body)
        await category.save()
        res.status(201).send({ message: "Category Created" })
    }catch (error) {
        return res
          .status(500)
          .send({ error: "Error adding category", message: error.message });
      }
}