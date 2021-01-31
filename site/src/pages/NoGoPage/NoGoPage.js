import React from 'react'
import {useLocation} from "react-router-dom"

const NoGoPage = () => {
  sessionStorage.removeItem("token")
  const { deaths, deathIncrease, critical } = useLocation() 
  return (
    <div>
      <h1>Uh-oh.</h1>
      <p>We recommend that you stay inside</p>
      <p>{deaths} people have died in total and {deathIncrease} of those deaths were from the past day alone.</p>
      <p>There are also {critical} people currently in critical condition</p>
    </div>
  )
}

export default NoGoPage
