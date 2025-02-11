// import React from 'react'
import { useEffect, useState } from "react"
import instance from "./axiosConfig"
function Programming() {

    const [data, setData] = useState("")

    async function fetchQuestion() {
        const response = await instance.get("/quiz/question/get/programming")
        setData(response.data.question)
        console.log(response.data.question);

    }
    async function nextQues(page) {
        const response = await instance.get(`/quiz/question/get/programming/?page=${page}`)
        setData(response.data.question)
        console.log(response.data.question);
    }

    useEffect(() => {
        fetchQuestion()
    }, [])
    return (
        <>
            {
                data.length > 0 &&
                data.map((item) => {
                    return (<div key={item.id}>
                        {
                            <div>{item.question} <p className=" bg-amber-300">{
                                item.options.map((option) => {
                                    return <p key={item.id}>{option}</p>

                                })
                            } </p> </div>
                        }
                    </div>
                    )
                })
            }
            <button onClick={fetchQuestion}>Back </button>
            <button onClick={() => nextQues(2)}>Next </button>
        </>
    )
}

export default Programming