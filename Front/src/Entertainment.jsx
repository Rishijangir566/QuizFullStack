// import React from 'react'
import { useEffect, useState } from "react"
import instance from "./axiosConfig"
function Entertainment() {

    const [data,setData]=useState("")
    
    async function fetchQuestion(){
        const response = await instance.get("/quiz/question/get/entertainment")
        setData(response.data.question)
        console.log(response.data.question);
        
    }

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
                <h2 key={item.id}>{item.question} <p key={item.id}>{item.options} </p> </h2>
                
            }
             </div>
        })
    }
    </>
  )
}

export default Entertainment