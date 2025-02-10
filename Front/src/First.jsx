// import React from 'react'

import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function First() {
   const navigate =useNavigate()
  function Questype(){
      navigate(<Questype/>)
  }

  return (
    <>
    
    <button onClick={Questype}><Link to="/type">Start</Link>  </button>
    </>
  )
}

export default First