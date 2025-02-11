// import React from 'react'

import { useEffect, useState } from "react"
import instance from "./axiosConfig"

function Cricket() {
    
    const [data,setData]=useState("")
    const [correctAns,setCorrectAns]=useState([])
    const [userClickedAns,setUserClickedAns]=useState([])
    const [score , setScore]=useState(0)
    
    async function fetchQuestion(){
        const response = await instance.get("/quiz/question/get/cricket")
        setData(response.data.question)

        const result = response.data.question.map((item) => (
            {
                answer: item.answer,
                id: item._id
            }
        ));
        setCorrectAns(result);
    }

    async function nextQues(page){
        const response = await instance.get(`/quiz/question/get/cricket/?page=${page}`)
        setData(response.data.question)
        console.log(response.data.question);

        const result = response.data.question.map((item) => (
            {
                answer: item.answer,
                id: item._id
            }
        )
        );

        setCorrectAns(result)
    }
 console.log(correctAns);
 console.log(userClickedAns);
 
    function userAns(value,id){
        setUserClickedAns((prev)=>[...prev,{value,id}])
    }
    function calculateScore(){
         let totalScore =0;
         userClickedAns.forEach((userAns)=>{
            const correctAnswer = correctAns.find((item)=> item.id=== userAns.id)
            if(correctAnswer )
         })

    }
 

    useEffect(()=>{
        fetchQuestion()
    },[])

  return (
    <>
    {
        data.length >0 ?(
        data.map((item)=>{
        return  <div key={item._id}> 
            {
                <>
               <div key={item.index} className="my-2 bg-purple-400">{item.question}</div> <h2 >{
                    item.options.map((option,index)=>{
                        return  <p key={index}onClick={(e)=>userAns(e.target.innerHTML,item._id)} className="my-1 bg-amber-300">{option}</p>
                        
                    })
                } </h2> </> 
                 
                
            }
             </div>
        })
    ):"Loading..."
    }
     <button onClick={fetchQuestion}>Back </button>
     <button onClick={()=>nextQues(2)}>Next </button>
     <button onClick={calculateScore}> Submit & Score</button>
    </>
  )
}

export default Cricket