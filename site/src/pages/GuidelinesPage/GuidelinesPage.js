import React from 'react'
import "./GuidelinesPage.css"

const GuidelinesPage = () => {
  return (
    <div className="guidelines flexdiv">
      {/* add bkgd image */}
        {/* <div className = "landing-text">
            <h1>CDC GUIDELINES</h1>
        </div>

        <div className = "pclass">
            <p>Wear a Mask!</p>
            <p>No Large Gatherings!</p>
            <p>Wash Your Hands!</p>
  </div> */}

        <h1 className="first-class">CDC GUIDELINES</h1>
        <div>
          <img src="/images/mask.png" alt="mask"/>
          <h2 className="second-class">Wear a Mask!</h2>
          <img src="/images/close.png" alt="X"/>
          <h2 className="second-class">No Large Gatherings!</h2>
          <img src="/images/wash.png" alt="wash hands"/>
          <h2 className="second-class">Wash Your Hands!</h2>
          <img src="/images/ruler.png" alt="ruler"/>
          <h2 className="second-class">Stay 6 Feet Apart!</h2>
        </div>
    </div>
  )
}

export default GuidelinesPage