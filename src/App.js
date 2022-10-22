import React from 'react'
import { useState, useEffect } from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import "./styles/Spinner.css"
const App = () => {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
setLoading(false)
    },3000)
 },[])
  return (
    <div className='App'>

{/* spinner */}
{
    loading?
    <CircleLoader
    className='Spinner'
    color="hsla(195, 67%, 53%, 1)"
    cssOverride={{}}
    size={160}
    speedMultiplier={1}
  />
    :
    <div > 
    <p>Portal Project Incoming</p>

  
</div>
}
    </div>

  )
}

export default App
