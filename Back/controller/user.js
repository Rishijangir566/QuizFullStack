import { User } from "../models/userModel.js";


export async function registerUser(req ,res){
    try{
        const userData = new User(req.body)
        
        await userData.save(res.status(201).send({ message:"User added", }))
        // console.log(userData);
        
    }
    catch(error){
        return res.status(500).send({
            message: "Error user not found",
            error: error.message,
        });
    }

}



