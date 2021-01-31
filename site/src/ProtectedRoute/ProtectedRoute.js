import React, {useState} from 'react'
import {Redirect} from "react-router-dom"

const ProtectedRoute = ({component}) => {
  const Component = component;
  const [isAuth, setIsAuth] = useState(sessionStorage.getItem("token"))
  return isAuth ? (<Component/>) : (<Redirect to={{pathname: "/"}}/>)
}

export default ProtectedRoute
