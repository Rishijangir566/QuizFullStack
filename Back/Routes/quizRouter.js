import express from "express";
import {registerUser,getCategories,addCategory} from "../controller/user.js"

export const quizRouter=express.Router()

quizRouter.post("user/save", registerUser)
quizRouter.get("category/get", getCategories)
quizRouter.post("category/add", addCategory)


