// import React from 'react'

import { useEffect, useState } from "react"
import instance from "./axiosConfig"

function Cricket() {
    
    const [data,setData]=useState("")
    const [correctAns,setCorrectAns]=useState([])
    const [userClickedAns,setUserClickedAns]=useState([])
    
    async function fetchQuestion(){
        const response = await instance.get("/quiz/question/get/cricket")
        setData(response.data.question)
        console.log(response.data.question);

        const result = response.data.question;
        result.map((item) => {
          setCorrectAns((prev) => [...prev, item.answer]);
        });
    }

    async function nextQues(page){
        const response = await instance.get(`/quiz/question/get/cricket/?page=${page}`)
        setData(response.data.question)
        console.log(response.data.question);
        
        const result = response.data.question;
        result.map((item) => {
          setCorrectAns((prev) => [...prev, item.answer]);
        });
    }
 console.log(correctAns);
 
    function userAns(value){
        setUserClickedAns((prev)=>[...prev,value])
    }
 console.log(userClickedAns);
 

    useEffect(()=>{
        fetchQuestion()
    },[])

  return (
    <>
    {
        data.length >0 &&
        data.map((item)=>{
        return  <div key={item.id}> 
            {
                 
                <div>{item.question}<h2 className=" bg-amber-300">{
                    item.options.map((option)=>{
                        return  <p key={item.id}onClick={(e)=>userAns(e.target.innerHTML)} >{option}</p>
                        
                    })
                } </h2> </div>
                
            }
             </div>
        })
    }
     <button onClick={fetchQuestion}>Back </button>
     <button onClick={()=>nextQues(2)}>Next </button>
    </>
  )
}

export default Cricket