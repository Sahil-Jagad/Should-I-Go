import React from 'react'
import {Link} from "react-router-dom"
import Confetti from "react-confetti"
import "./SuccessPage.css"

const SuccessPage = () => {
  sessionStorage.removeItem("token")
  return (
    <div className="success">
      <Confetti width={window.innerWidth} height={window.innerHeight}/>
      <div>
        <h1>You're good!</h1>
        <p>If you are going out, just remember these <Link to="/guidelines">guidelines</Link>!</p>
      </div>
      
    </div>
  )
}

export default SuccessPage
