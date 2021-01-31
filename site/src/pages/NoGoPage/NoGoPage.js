import React from 'react'
import {useLocation} from "react-router-dom"

const NoGoPage = () => {
  sessionStorage.removeItem("token")
  return (
    <div>
      {useLocation().msg}
    </div>
  )
}

export default NoGoPage
