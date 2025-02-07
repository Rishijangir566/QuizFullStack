import express from "express";
import {registerUser} from "../controller/user.js"
import { getCategories,addCategory } from "../controller/category.js";
import { addQuestion, getQuestionCat ,getQuestion } from "../controller/question.js";

export const quizRouter=express.Router()

quizRouter.post("/user/save", registerUser)
quizRouter.get("/category/get", getCategories)
quizRouter.post("/category/save", addCategory)
quizRouter.post("/question/save", addQuestion)

quizRouter.get("/question/get", getQuestion)
quizRouter.get("/question/get/:category", getQuestionCat)

// quizRouter.post("/question/bulk",bulkCreateQues)

