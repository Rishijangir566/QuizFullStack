import { useEffect } from "react"
import instance from "./axiosConfig"

function App() {

  useEffect(()=>{
   fetchQuestion()
  },[])

  async function fetchQuestion (){
       const response = await instance.get("/quiz/question/get/programming")
       console.log(response.data);
       
  }
  async function secondpage (page){
       const response = await instance.get(`/quiz/question/get/programming/?page=${page}`)
       console.log(response.data);
       
  }



  return (
    <>
    <div className="text-3xl text-red-800">Hello</div>
       <button className="p-4 bg-red-200 mx-2" onClick={fetchQuestion}>1</button>
       <button className="p-4 bg-red-200" onClick={()=>secondpage(2)}>2</button>
    </>
  )
}

export default App
