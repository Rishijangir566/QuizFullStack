import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./Home"
import First from "./First"
import QuesType from "./QuesType"
import Cricket from "./Cricket"
import Programming from "./Programming"
import Entertainment from "./Entertainment"

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        index:true,
        element:<First/>
      },
      {
        path:"/type",
        element:<QuesType/>
      },
      
      {
        path:"/cricket",
        element:<Cricket/>
      },
      {
        path:"/entertainment",
        element:<Entertainment/>
      },
      {
        path:"/programming",
        element:<Programming/>
      },
      
    ]
  }
])
function App() {


  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
