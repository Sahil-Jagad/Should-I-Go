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

        <h1 class="first-class">CDC GUIDELINES</h1>
        <div>
          <img src="/images/mask.png" />
          <h2 class="second-class">Wear a Mask!</h2>
          <img src="/images/close.png" />
          <h2 class="second-class">No Large Gatherings!</h2>
          <img src="/images/wash.png" />
          <h2 class="second-class">Wash Your Hands!</h2>
        </div>
    </div>
  )
}

export default GuidelinesPage