import React from 'react'

const SuccessPage = () => {
  sessionStorage.removeItem("token")
  return (
    <div>
      You're good!
    </div>
  )
}

export default SuccessPage
