import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
const Error = () => {
  return (
    <div className='Error'>
         <Link to='/'><div className='logoNavigation'>. </div></Link>
  


    <div className='Error-Main'>

        <p className='Error-text'><p id='oops'>Oops!</p> Something went wrong.</p>
        <p id='errornumber'>4</p>
        <p id='errornumber'>0</p>
        <p id='errornumber'>4</p>
       <p className='Error-text2'> The Page you were looking is not Exist</p>

       <Link to='/'> <div className='Home-div'>HOME</div></Link>
    </div>

    </div>
  )
}

export default Error