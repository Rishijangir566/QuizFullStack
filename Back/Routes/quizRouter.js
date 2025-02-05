import express from "express";
import {registerUser} from "../controller/user.js"
import { getCategories,addCategory } from "../controller/category.js";
import { addQuestion, getQuestionCat } from "../controller/question.js";

export const quizRouter=express.Router()

quizRouter.post("/user/save", registerUser)
quizRouter.get("/category/get", getCategories)
quizRouter.post("/category/save", addCategory)
quizRouter.post("/question/save", addQuestion)
quizRouter.get("/question/get/:id", getQuestionCat)


