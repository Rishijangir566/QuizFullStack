import express from "express";
import {registerUser} from "../controller/user.js"
import { getCategories,addCategory } from "../controller/category.js";
import { addQuestion } from "../controller/question.js";
export const quizRouter=express.Router()

quizRouter.post("/user/save", registerUser)
quizRouter.get("/category/get", getCategories)
quizRouter.post("/category/add", addCategory)
quizRouter.post("/question/save", addQuestion)


