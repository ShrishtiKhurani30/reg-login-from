import { useState } from "react"
import Login from "./components/Login"
import Registration from "./components/Registration"

function App() {
 const [currentStatus , setCurrentStatus] =useState("register")

  return (
    <>
   {currentStatus==="register" ? (<Registration setCurrentStatus={setCurrentStatus} />)
   :
   (<Login setCurrentStatus={setCurrentStatus}/>)
   }  

    </>
  )
}

export default App
