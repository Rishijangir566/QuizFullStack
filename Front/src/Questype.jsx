// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Cricket from "./Cricket";
import Programming from "./Programming";
import Entertainment from "./Entertainment";
function QuesType() {
         const navigate = useNavigate()
        function fetchProgramming(){
           navigate(<Programming/>)
        }
        function fetchCricket(){
            navigate(<Cricket/>)
        }
        function fetchEntertainment(){
            navigate(<Entertainment/>)
        }

  return (
    <>
        <button onClick={fetchProgramming}> <Link to="/programming">Programming</Link> </button>
        <button onClick={fetchCricket}> <Link to="/cricket">Cricket</Link> </button>
        <button onClick={fetchEntertainment}> <Link to="/entertainment">Entertainment</Link></button>
    </>
  )
}

export default QuesType