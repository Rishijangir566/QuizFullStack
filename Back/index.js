import express from "express"
import "dotenv/config"
import cors from "cors"
import { connectToDb } from "./db.js"
import { quizRouter } from "./Routes/quizRouter.js"


const app=express()
const port = process.env.PORT

app.use(cors({
    origin:process.env.FRONT_END_PATH,
    
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

await connectToDb()
app.use("/quiz",quizRouter)


app.listen(port,()=>{
console.log("statrted at port "+port)
})